import React, { useState } from 'react';
import CustomInput from '../components/input'; 
import Button from '../components/button'; 
import UploadBox from '../components/uploadBox'; 
import DynamicInput from '../components/dynamicInput'; 
import axios from 'axios';

function VendorProfileForm() {
  const [fullName, setFullName] = useState<string>(''); 
  const [servicesProvided, setServicesProvided] = useState<string[]>(['']); 
  const [timeAvailability, setTimeAvailability] = useState<string>(''); 
  const [profileDescription, setProfileDescription] = useState<string>(''); 
  const [serviceDescription, setServiceDescription] = useState<string>(''); 

  const [file, setFile] = useState<File | null>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('servicesProvided', JSON.stringify(servicesProvided)); 
    formData.append('timeAvailability', timeAvailability);
    formData.append('profileDescription', profileDescription);
    formData.append('serviceDescription', serviceDescription);
    if (file) {
      formData.append('file', file);
    }

    try {
      const { data } = await axios.post('http://localhost:7777/api/vendor/profile', formData, {
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
    <div className="flex justify-center items-center flex-col w-full h-full p-4 overflow-auto">
      <div className="bg-white shadow-md rounded-lg p-6 w-1/2 ">
        <h1 className="text-2xl font-bold text-center mb-4">Vendor Profile</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">

          <CustomInput
            label="Full Name"
            inputType="text"
            placeholder="John Doe"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <div className="flex justify-between space-x-4">
            <DynamicInput
              label="Services Provided"
              placeholder="Add a service"
              variant="small"
              value={servicesProvided}
              onChange={setServicesProvided} 
            />
            <CustomInput
              label="Time Availability"
              variant="small"
              inputType="text"
              placeholder="Available Time"
              value={timeAvailability}
              onChange={(e) => setTimeAvailability(e.target.value)}
            />
          </div>

          <CustomInput
            label="Profile Description"
            inputType="text"
            placeholder="Describe yourself..."
            value={profileDescription}
            onChange={(e) => setProfileDescription(e.target.value)}
          />

          <CustomInput
            label="Service Description"
            inputType="text"
            placeholder="Describe the services offered..."
            value={serviceDescription}
            onChange={(e) => setServiceDescription(e.target.value)}
          />

          <div className="mt-4">
            <UploadBox
              label="Upload Profile Image"
              onChange={(uploadedFile: File) => setFile(uploadedFile)} // Type for uploaded file
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

export default VendorProfileForm;
