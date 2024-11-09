import React, { useState } from 'react';
import { FaStar, FaUserCircle } from 'react-icons/fa';
import Button from '../components/button';
import { useNotifications } from '../context/authcontext/NotificationContext';
import { useNavigate } from 'react-router-dom';

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
  const { addNotification } = useNotifications();
  const navigate = useNavigate();

  const [showSuccess, setShowSuccess] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  const seeDetails = () => {
    // Navigate to the vendor profile page and pass the vendorId in the URL
    navigate(`/vendorProfile/${vendorId}`);
  };

  const handleSendQuotationRequest = () => {
    // Create the notification for the vendor
    setNotificationMessage(`Successfully sent to ${name}`);
    addNotification({
      id: '1', // Use a unique ID
      message: `Quotation request sent successfully to ${name}!`,
      sender: 'John Doe',
      link: '/customerProfile', // Link to customer profile page (you can adjust if needed)
      type: 'quotation-request',
      style: 'success', // Custom style for success notification
    });

    // Show success message pop-up
    setShowSuccess(true);

    // Hide the success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);

    // Proceed with any additional logic (e.g., form submission)
    console.log('Quotation request sent!');
  };

  return (
    <div className="flex">
      <div className="flex-shrink-0">
        <div className="w-16 h-16 flex items-center justify-center bg-[#0058DC] rounded-full">
          <FaUserCircle size={100} className="text-5xl text-black" />
        </div>
      </div>
      <div className="flex-grow ml-4">
        <h2 className="text-lg font-bold">{name}</h2>
        <div className="flex items-center">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className={`text-${index < rating ? 'yellow-500' : 'gray-400'}`} />
          ))}
        </div>
        <p className="text-gray-600">{state} {zipcode}</p>
        <p className="text-gray-800 mt-2">{bio}</p>
      </div>
      <div className="flex space-x-4">
        <Button onClick={seeDetails} type="button" variant="mainBlue">
          See Details
        </Button>
        <Button onClick={handleSendQuotationRequest} type="button" variant="mainBlue">
          Send Quotation
        </Button>
      </div>

      {/* Success Pop-up */}
      {showSuccess && (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
          {notificationMessage}
        </div>
      )}
    </div>
  );
};

export default Vendor;
