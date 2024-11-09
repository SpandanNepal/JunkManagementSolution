import React from 'react';
import { FiMapPin } from 'react-icons/fi';
import Button from './button';

interface CustomerQuotationBoxProps {
  profilePicture: string;
  customerName: string;
  address: string;
  onAccept: () => void;
  onReject: () => void;
  onViewDetails: () => void;
}

const CustomerQuotationBox: React.FC<CustomerQuotationBoxProps> = ({
  profilePicture,
  customerName,
  address,
  onAccept,
  onReject,
  onViewDetails,
}) => {
  return (
    <div className="flex items-center p-4 bg-white shadow-md rounded-lg space-x-4">
      {/* Profile Picture */}
      <img src={profilePicture} alt={`${customerName}'s profile`} className="w-12 h-12 rounded-full" />

      {/* Customer Info */}
      <div className="flex-1">
        <p className="font-semibold">{customerName} sent you a quotation request</p>
        <div className="flex items-center text-gray-600 mt-1">
          <FiMapPin className="mr-1" />
          <span>{address}</span>
        </div>
        {/* "View Details" Link */}
        <button
          onClick={onViewDetails}
          className="text-mainBlue mt-2 hover:underline"
        >
          View Details
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-2">
        <Button
          variant="mainBlue"
          onClick={onAccept}
        >
          Accept
        </Button>
        <Button
          variant="borderMainBlue"
          onClick={onReject}
        >
          Reject
        </Button>
      </div>
    </div>
  );
};

export default CustomerQuotationBox;
