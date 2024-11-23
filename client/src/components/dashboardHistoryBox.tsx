import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Button from '../components/button';
import { useNavigate } from 'react-router-dom';

type CustomerQuotationBoxProps = {
  profilePicture: string;
  customerName: string;
  address: string;
  onAccept: () => void;
  onReject: () => void;
  onViewDetails: () => void;
};

const CustomerQuotationBox: React.FC<CustomerQuotationBoxProps> = ({
  profilePicture,
  customerName,
  address,
  onAccept,
  onReject,
  onViewDetails,
}) => {
  return (
    <div className="flex items-center border rounded-lg p-4 shadow-md mb-4 w-full bg-white">
      <div className="flex-shrink-0 mr-4">
        <img
          src={profilePicture}
          alt={`${customerName}'s profile`}
          className="w-16 h-16 rounded-full object-cover"
        />
      </div>

      <div className="flex-grow">
        <p className="text-lg font-semibold">
          {customerName} sent you a quotation request
        </p>
        <div className="flex items-center text-gray-500 mt-1">
          <FaMapMarkerAlt className="mr-1" />
          <span>{address}</span>
        </div>
        <button
          onClick={onViewDetails}
          className="text-mainBlue font-semibold mt-2"
        >
          View Details
        </button>
      </div>

      <div className="flex space-x-2">
        <Button
          onClick={onAccept}
          className="bg-green-700 text-white px-4 py-2 rounded-md"  // Darker green for better contrast
        >
          Accept
        </Button>
        <Button
          onClick={onReject}
          className="bg-red-700 text-white px-4 py-2 rounded-md"  // Darker red for better contrast
        >
          Reject
        </Button>
      </div>
    </div>
  );
};

export default CustomerQuotationBox;
