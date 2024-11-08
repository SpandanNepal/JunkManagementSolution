import React, { useState } from 'react';
import { FaSearch, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import JunkUploadsList from './JunkUploadsList';

const CustomerProfile: React.FC = () => {
  const [profile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(555) 123-4567',
    address: '123 Main St, Springfield, IL 62701',
    imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
  });

  const navigate = useNavigate(); // useNavigate hook to navigate programmatically

  // Function to handle view details
  const handleViewDetails = () => {
    navigate(`/junk-details/1`); // Navigate to JunkDetails with an example ID
  };

  return (
    <div>
      <div className="py-6" style={{ paddingLeft: '16rem', paddingRight: '16rem' }}>
        <div className="mb-6">
          <div className="relative w-full">
            <FaSearch className="absolute left-3 top-2.5 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="mb-8" style={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
          <span className="text-[#0058DC]">Home / Profile</span>
        </div>

        <div className="flex gap-8 mt-8">
          <div className="w-32 h-32 mr-6" style={{ paddingRight: '3rem' }}>
            <img
              src={profile.imageUrl}
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-4 border-blue-500"
            />
          </div>

          <div className="flex flex-col justify-start">
            <h2 className="text-4xl font-bold text-gray-900"><strong>{profile.name}</strong></h2>
            <div className="flex items-center text-lg text-gray-600 mt-2">
              <FaEnvelope className="mr-2 text-blue-500" />
              <span>{profile.email}</span>
            </div>
            <div className="flex items-center text-lg text-gray-600 mt-2">
              <FaPhone className="mr-2 text-green-500" />
              <span>{profile.phone}</span>
            </div>
            <div className="flex items-center text-lg text-gray-600 mt-2">
              <FaMapMarkerAlt className="mr-2 text-red-500" />
              <span>{profile.address}</span>
            </div>
          </div>
        </div>

        {/* Add View Button */}
        <button onClick={handleViewDetails} className="text-blue-500">
          View Junk Details
        </button>
      </div>

      <div style={{ paddingTop: '3rem' }}>
        <JunkUploadsList />
      </div>
    </div>
  );
};

export default CustomerProfile;
