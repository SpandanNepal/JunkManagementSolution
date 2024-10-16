import React, { useState } from 'react';
import CustomInput from '../components/input'; 
import Button from '../components/Button'; 
import UploadBox from '../components/uploadBox'; // Import the UploadBox component
import axios from 'axios';

function JunkDescriptionForm() {
  const [fullName, setFullName] = useState('');
  const [junkName, setJunkName] = useState('');
  const [typeOfJunk, setTypeOfJunk] = useState('');
  const [truckSize, setTruckSize] = useState('');
  const [spaceOccupied, setSpaceOccupied] = useState('');
  const [material, setMaterial] = useState('');
  const [weight, setWeight] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [junkDescription, setJunkDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('junkName', junkName);
    formData.append('typeOfJunk', typeOfJunk);
    formData.append('truckSize', truckSize);
    formData.append('spaceOccupied', spaceOccupied);
    formData.append('material', material);
    formData.append('weight', weight);
    formData.append('pickupDate', pickupDate);
    formData.append('junkDescription', junkDescription);
    if (file) {
      formData.append('file', file);
    }

    try {
      const { data } = await axios.post('http://localhost:7777/api/junk/description', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Form submitted:', data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col w-screen h-screen p-4 overflow-auto">
      <div className="bg-white shadow-md rounded-lg p-6  w-[800px]">
        <h1 className="text-2xl font-bold text-center mb-4">Junk Description Form</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        
        <CustomInput
            label="Junk Name"
            inputType="text"
            placeholder="Junk Name"
            value={junkName}
            onChange={(e) => setJunkName(e.target.value)}
          />
          {/* Horizontal Layout for Type of Junk, Truck Size, and Weight */}
          <div className="flex justify-between space-x-4">
            <CustomInput
              label="Type Of Junk"
              variant="small"
              inputType="select"
              options={['Select', 'Furniture', 'Electronics', 'Other']}
              value={typeOfJunk}
              onChange={(e) => setTypeOfJunk(e.target.value)}
            />
            <CustomInput
              label="Truck Size"
              variant="small"
              inputType="select"
              options={['Select', 'Small', 'Medium', 'Large']}
              value={truckSize}
              onChange={(e) => setTruckSize(e.target.value)}
            />
            <CustomInput
              label="Weight"
              variant="small"
              inputType="text"
              placeholder="Weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          {/* Horizontal Layout for Space Occupied, Material, and Pickup Date */}
          <div className="flex justify-between space-x-4">
            <CustomInput
              label="Space Occupied"
              variant="small"
              inputType="text"
              placeholder="Enter space occupied"
              value={spaceOccupied}
              onChange={(e) => setSpaceOccupied(e.target.value)}
            />
            <CustomInput
              label="Material"
              variant="small"
              inputType="text"
              placeholder="Enter material"
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
            />
            <CustomInput
              label="Pick Up Date"
              inputType="date"
              variant="small"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
            />
          </div>

          <CustomInput
            label="Junk Description"
            inputType="textarea"
            placeholder="Describe the junk..."
            value={junkDescription}
            onChange={(e) => setJunkDescription(e.target.value)}
          />
          
          <div className="mt-4">
            <UploadBox
              label="Upload Junk Image"
              onChange={(uploadedFile) => setFile(uploadedFile)} // Adjust according to your UploadBox implementation
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
