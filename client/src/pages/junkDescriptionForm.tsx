import React, { useState, ChangeEvent, FormEvent } from 'react';
import CustomInput from '../components/input'; 
import Button from '../components/button'; 
import UploadBox from '../components/uploadBox'; 
import { useLocation, useNavigate } from 'react-router-dom'; 
import axios from 'axios';

const JunkDescriptionForm: React.FC = () => {
  const { state } = useLocation();
  
  const { junkData } = state || {};

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
          <div>
            <label htmlFor="junkName" className="block text-sm font-medium text-gray-700">Junk Name</label>
            <CustomInput
              inputType="text"
              id="junkName"
              placeholder="Junk Name"
              value={junkName}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setJunkName(e.target.value)}
            />
          </div>

          <div className="flex justify-between space-x-4">
            <div className="flex-1">
              <label htmlFor="typeOfJunk" className="block text-sm font-medium text-gray-700">Type Of Junk</label>
              <CustomInput
                variant="small"
                inputType="text"
                id="typeOfJunk"
                value={typeOfJunk}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setTypeOfJunk(e.target.value)}
              />
            </div>

            <div className="flex-1">
              <label htmlFor="truckSize" className="block text-sm font-medium text-gray-700">Truck Size</label>
              <CustomInput
                variant="small"
                inputType="text"
                id="truckSize"
                value={truckSize}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setTruckSize(e.target.value)}
              />
            </div>

            <div className="flex-1">
              <label htmlFor="weight" className="block text-sm font-medium text-gray-700">Weight</label>
              <CustomInput
                variant="small"
                inputType="text"
                id="weight"
                placeholder="Weight"
                value={weight}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setWeight(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-between space-x-4">
            <div className="flex-1">
              <label htmlFor="spaceOccupied" className="block text-sm font-medium text-gray-700">Space Occupied</label>
              <CustomInput
                variant="small"
                inputType="text"
                id="spaceOccupied"
                placeholder="Enter space occupied"
                value={spaceOccupied}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setSpaceOccupied(e.target.value)}
              />
            </div>

            <div className="flex-1">
              <label htmlFor="material" className="block text-sm font-medium text-gray-700">Material</label>
              <CustomInput
                variant="small"
                inputType="text"
                id="material"
                placeholder="Enter material"
                value={material}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setMaterial(e.target.value)}
              />
            </div>

            <div className="flex-1">
              <label htmlFor="pickupDate" className="block text-sm font-medium text-gray-700">Pick Up Date</label>
              <CustomInput
                inputType="date"
                variant="small"
                id="pickupDate"
                value={pickupDate}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPickupDate(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="junkDescription" className="block text-sm font-medium text-gray-700">Junk Description</label>
            <CustomInput
              inputType="text"
              id="junkDescription"
              placeholder="Describe the junk..."
              value={junkDescription}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setJunkDescription(e.target.value)} 
            />
          </div>
          
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