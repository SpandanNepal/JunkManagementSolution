import React, { useState } from 'react';
import { FaSearch, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';  // Import the icons
import JunkUploadsList from './JunkUploadsList';

// Dummy data for the profile (can be replaced with actual API data)
const CustomerProfile: React.FC = () => {
  const [profile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(555) 123-4567',
    address: '123 Main St, Springfield, IL 62701',
    imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg'  // Replace with actual URL if needed
  });

  return (
    <div>
    <div className="py-6" style={{ paddingLeft: '16rem', paddingRight: '16rem' }}>
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative w-full">
          {/* Search Icon and Input */}
          <FaSearch className="absolute left-3 top-2.5 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Space before the profile starts (after search bar ends) */}
      <div className="mb-8" style={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
        {/* Home/Profile Text with Blue Color */}
        <span className="text-[#0058DC]">Home / Profile</span>
      </div>

      {/* Profile Layout */}
      <div className="flex gap-8 mt-8"> {/* mt-8 to add space above the profile */}
        {/* Profile Image */}
        <div className="w-32 h-32 mr-6" style={{ paddingRight: '3rem' }}> {/* Added mr-6 to provide right margin */}
          <img
            src={profile.imageUrl}
            alt="Profile"
            className="w-full h-full object-cover rounded-full border-4 border-blue-500"
          />
        </div>

        {/* Profile Details */}
        <div className="flex flex-col justify-start">
          {/* Name */}
          <h2 className="text-4xl font-bold text-gray-900"><strong>{profile.name}</strong></h2>

          {/* Email with Icon */}
          <div className="flex items-center text-lg text-gray-600 mt-2">
            <FaEnvelope className="mr-2 text-blue-500" />
            <span>{profile.email}</span>
          </div>

          {/* Phone with Icon */}
          <div className="flex items-center text-lg text-gray-600 mt-2">
            <FaPhone className="mr-2 text-green-500" />
            <span>{profile.phone}</span>
          </div>

          {/* Address with Icon */}
          <div className="flex items-center text-lg text-gray-600 mt-2">
            <FaMapMarkerAlt className="mr-2 text-red-500" />
            <span>{profile.address}</span>
          </div>
        </div>
      </div>
      
    </div>
    <div style={{ paddingTop: '3rem' }}>
    <JunkUploadsList/>
    </div>
    </div>
  );
};

export default CustomerProfile;