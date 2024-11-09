import React from 'react';
import { FaStar, FaUserCircle } from 'react-icons/fa';
import Button from '../components/button';
import { useNotifications } from '../context/authcontext/NotificationContext';
import { Navigate, useNavigate } from 'react-router-dom';

interface VendorProps {
  name: string;
  rating: number;
  state: string;
  zipcode: string;
  bio: string;
  vendorId: string;
  customerName: string;
}


const Vendor: React.FC<VendorProps> = ({ name, rating, state, zipcode, bio, vendorId, customerName }) => {
  const { addNotification } = useNotifications();
  const navigate = useNavigate();


  const seeDetails = () =>{
    navigate('/customerProfile')
}

const sendQuotation = () =>{
    navigate('/customerProfile')
}


  const handleSendQuotationRequest = () => {
    // Create the notification for the vendor
    addNotification({
      id: '1', // Use a unique ID
      message: 'John Doe sent you a quotation request',
      sender: 'John Doe',
      link: '/customerProfile', // Link to customer profile page
      type: 'quotation-request',
    });

    // Proceed with any additional logic (e.g., form submission)
    console.log('Quotation request sent!');
  };

  return (
    <div className="flex w-full">
      <div className="flex-shrink-0">
        <div className="w-full h-16 flex items-center justify-center rounded-full">
          <FaUserCircle size={100} />
        </div>
      </div>
      <div className="flex-grow ml-4">
        <h2 className="text-lg font-bold">{name}</h2>
        <div className="flex items-center">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className={`text-${index < rating ? 'yellow' : 'gray-400'}`} />
          ))}
        </div>
        <p className="text-gray-600">{state} {zipcode}</p>
        <p className="text-gray-800 mt-2">{bio}</p>
      </div>
      <div className="flex justify-center space-x-4">
        <Button onClick={seeDetails} type="button" variant="mainBlue">See Details</Button>
        <Button onClick={handleSendQuotationRequest} type="button" variant="mainBlue">Send Quotation</Button>
      </div>
    </div>
  );
};

export default Vendor;
