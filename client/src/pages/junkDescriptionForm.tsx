import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import CustomInput from '../components/input'; 
import Button from '../components/button'; 
import UploadBox from '../components/uploadBox'; 
import { useLocation, useNavigate } from 'react-router-dom'; 
import axios from 'axios';

const JunkDescriptionForm: React.FC = () => {
  const { state } = useLocation();
  
  // Retrieve junk data passed from SystemGeneratedQuote
  const { junkData } = state || {};

  // Initialize form fields with the junkData or empty strings
  const [junkName, setJunkName] = useState<string>(junkData?.junkName || '');
  const [typeOfJunk, setTypeOfJunk] = useState<string>(junkData?.typeOfJunk || '');
  const [truckSize, setTruckSize] = useState<string>(junkData?.truckSize || '');
  const [spaceOccupied, setSpaceOccupied] = useState<string>(junkData?.spaceOccupied || '');
  const [material, setMaterial] = useState<string>(junkData?.material || '');
  const [weight, setWeight] = useState<string>(junkData?.weight || '');
  const [pickupDate, setPickupDate] = useState<string>(junkData?.pickupDate || '');
  const [junkDescription, setJunkDescription] = useState<string>(junkData?.junkDescription || '');
  const [file, setFile] = useState<File | null>(null); 

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      junkName,
      typeOfJunk,
      truckSize,
      spaceOccupied,
      material,
      weight,
      pickupDate,
      junkDescription
    }

    try {
      const response = await axios.post("https://junk-management-solution-server.vercel.app/junk-update", {
        collection: "junk-details",
        docData: formData,
      });
      
      console.log('Form submitted:', response);
       navigate('/system-generated-quote', {
        state: { 
          junkData: { 
            junkName, 
            typeOfJunk, 
            truckSize, 
            spaceOccupied, 
            material, 
            weight, 
            pickupDate, 
            junkDescription 
          }
        }
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col w-screen h-full p-4 overflow-auto">
      <div className="bg-white shadow-md rounded-lg p-6 w-1/2">
        <h1 className="text-2xl font-bold text-center mb-4">Junk Description Form</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <CustomInput
            label="Junk Name"
            inputType="text"
            placeholder="Junk Name"
            value={junkName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setJunkName(e.target.value)}
          />
          
          <div className="flex justify-between space-x-4">
            <CustomInput
              label="Type Of Junk"
              variant="small"
              inputType="text"
              value={typeOfJunk}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setTypeOfJunk(e.target.value)}
            />
            <CustomInput
              label="Truck Size"
              variant="small"
              inputType="text"
              value={truckSize}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setTruckSize(e.target.value)}
            />
            <CustomInput
              label="Weight"
              variant="small"
              inputType="text"
              placeholder="Weight"
              value={weight}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setWeight(e.target.value)}
            />
          </div>

          <div className="flex justify-between space-x-4">
            <CustomInput
              label="Space Occupied"
              variant="small"
              inputType="text"
              placeholder="Enter space occupied"
              value={spaceOccupied}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setSpaceOccupied(e.target.value)}
            />
            <CustomInput
              label="Material"
              variant="small"
              inputType="text"
              placeholder="Enter material"
              value={material}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setMaterial(e.target.value)}
            />
            <CustomInput
              label="Pick Up Date"
              inputType="date"
              variant="small"
              value={pickupDate}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPickupDate(e.target.value)}
            />
          </div>

          <CustomInput
            label="Junk Description"
            inputType="text"
            placeholder="Describe the junk..."
            value={junkDescription}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setJunkDescription(e.target.value)} 
          />
          
          <div className="mt-4">
            <UploadBox
              label="Upload Junk Image"
              onChange={(uploadedFile: File) => setFile(uploadedFile)} 
            />
          </div>

          <Button type="submit" className="w-full h-12 mt-6" variant="mainBlue">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default JunkDescriptionForm;