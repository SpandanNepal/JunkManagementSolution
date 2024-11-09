import React from 'react';
import { useNavigate } from 'react-router-dom';

const SelectUser: React.FC = () => {
  const navigate = useNavigate();

  const handleRegister = (role: string) => {
    if (role === 'vendor') {
      navigate('/vendorsignup');
    } else if (role === 'customer') {
      navigate('/customersignup');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-semibold mb-6">Register As A:</h2>
      <div className="flex space-x-4">
        <button 
          onClick={() => handleRegister('vendor')} 
          className="border border-mainBlue text-mainBlue py-2 px-4 rounded"
        >
          Vendor
        </button>
        <button 
          onClick={() => handleRegister('customer')} 
          className="border border-mainBlue text-mainBlue py-2 px-4 rounded"
        >
          Customer
        </button>
      </div>
    </div>
  );
};

export default SelectUser;
