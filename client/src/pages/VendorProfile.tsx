import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Button from '../components/button';
import axios from 'axios';

interface VendorProfileData {
  profilePicture: string;
  name: string;
  rating: number;
  about: string;
  location: string;
  description: string;
  services: string[];
  availability: string;
}

const VendorProfile: React.FC = () => {
  const [vendorData, setVendorData] = useState<VendorProfileData | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const fetchVendorData = async () => {
      try {
        const response = await axios.get('http://localhost:7777/api/vendor/profile');
        setVendorData(response.data);
      } catch (error) {
        console.error('Error fetching vendor data:', error);
      }
    };

    fetchVendorData();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (!vendorData) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="flex h-screen">
      <Menu isOpen={isMenuOpen} />

      <div className="flex flex-col flex-grow">

        <div className="flex-grow p-8 bg-gray-100">
          <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center">
              <img
                src={vendorData.profilePicture}
                alt="Vendor Profile"
                className="w-32 h-32 rounded-full mr-6"
              />

              <div>
                <h2 className="text-2xl font-semibold text-gray-800">{vendorData.name}</h2>
                <p className="text-yellow-500">Rating: {vendorData.rating} ⭐</p>
                <p className="text-gray-600 mt-2">{vendorData.about}</p>
                <p className="text-gray-500 mt-1">Location: {vendorData.location}</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800">Description</h3>
              <p className="text-gray-600 mt-2">{vendorData.description}</p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800">Services</h3>
              <ul className="list-disc list-inside mt-2">
                {vendorData.services.map((service, index) => (
                  <li key={index} className="text-gray-600">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800">Time Availability</h3>
              <p className="text-gray-600 mt-2">{vendorData.availability}</p>
            </div>

            <Button className="mt-8 bg-mainBlue text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Send Quotation Request
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorProfile;
