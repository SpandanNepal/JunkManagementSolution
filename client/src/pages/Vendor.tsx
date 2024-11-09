import React from 'react';
import { FaStar, FaEnvelope, FaPhone, FaMapMarkerAlt, FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Button from '../components/button';
import { useNotifications } from '../context/authcontext/NotificationContext';

export interface VendorProps {
  vendorId: string;
  name: string;
  company: string;
  rating: number;
  state: string;
  zipcode: string;
  bio: string;
  email: string;
  phone: string;
  address: string;
  imageUrl: string;
  description: string;
  services: string[];
  availability: string;
}

const Vendor: React.FC<VendorProps> = ({
  vendorId,
  name,
  company,
  rating,
  state,
  zipcode,
  bio,
  email,
  phone,
  address,
  imageUrl,
  description,
  services,
  availability,
}) => {
  const navigate = useNavigate();
  const { addNotification } = useNotifications();

  const seeDetails = () => {
    // Navigate to the vendor profile page and pass the vendorId in the URL
    navigate(`/vendorProfile/${vendorId}`);
  };

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