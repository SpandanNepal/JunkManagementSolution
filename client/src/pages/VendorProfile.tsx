import React, { useEffect, useState } from 'react';
import { FaSearch, FaEnvelope, FaPhone, FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const VendorProfile: React.FC = () => {
  const [coordinates, setCoordinates] = useState<[number, number] | null>(null);
  
  const [profile] = useState({
    name: 'John Doe',
    email: 'john.doe@vendor.com',
    phone: '(555) 987-6543',
    address: '456 Vendor St, Denton, Texas',
    imageUrl: 'https://randomuser.me/api/portraits/men/2.jpg', // Placeholder vendor image
    bio: `John doe’s bio here. John doe’s bio here. John doe’s bio here. 
          John doe’s bio here. John doe’s bio here. John doe’s bio here.`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    services: ['Junk Pickup', 'Junk Disposal', 'Recycling'],
    availability: 'Mon-Fri: 9 AM to 8 PM',
    rating: 2, // Vendor rating out of 5
  });

  const navigate = useNavigate(); // useNavigate hook to navigate programmatically

  // Function to handle sending a quotation request
  const handleSendQuotationRequest = () => {
    // Your logic for sending a quotation request
    console.log('Quotation request sent to', profile.name);
  };

  // Generate Star Rating based on the rating value
  const generateStarRating = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar key={i} className={`text-${i <= rating ? 'yellow-500' : 'gray-400'}`} />
      );
    }
    return stars;
  };


  useEffect(() => {
    const fetchCoordinates = async () => {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(profile.address)}.json?access_token=pk.eyJ1IjoiYmhhbmRhcmliYXJzaGE5NSIsImEiOiJjbTM5bjZ0dTUxNzY1Mm1wenBpY3VidXlkIn0.J6dlnuZ1ktq0s81AY0YT0Q`
      );
      const data = await response.json();
      if (data.features && data.features[0]) {
        const [lon, lat] = data.features[0].geometry.coordinates;
        setCoordinates([lat, lon]);
      }
    };

    fetchCoordinates();
  }, [profile.address]);

  const handleViewDetails = () => {
    navigate(`/junk-details/1`);
  };

  if (!coordinates) {
    return <div>Loading map...</div>;
  }

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
          <span className="text-[#0058DC]">Home / Vendor / {profile.name}</span>
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
            <h2 className="text-4xl font-bold text-gray-900">
              <strong>{profile.name}</strong>
            </h2>

            {/* Star Rating */}
            <div className="flex items-center mt-2">
              {generateStarRating(profile.rating)}
            </div>

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

        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-900">Bio</h3>
          <p className="text-lg text-gray-600 mt-2">{profile.bio}</p>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-900">Description</h3>
          <p className="text-lg text-gray-600 mt-2">{profile.description}</p>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-900">Services Offered</h3>
          <ul className="list-disc pl-6 mt-2">
            {profile.services.map((service, index) => (
              <li key={index} className="text-lg text-gray-600">{service}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-900">Time Availability</h3>
          <p className="text-lg text-gray-600 mt-2">{profile.availability}</p>
        </div>

        {/* Add View Button */}
        <button
          onClick={handleSendQuotationRequest}
          className="text-white bg-blue-500 px-6 py-2 mt-4 rounded-md shadow-md hover:bg-blue-600"
        >
          Send Quotation Request
        </button>
        <div style={{ height: '400px',  width: '400px',display: 'flex',justifyContent: 'center', alignItems: 'center', paddingTop: '3rem' }}>
      <ReactMapGL
        latitude={coordinates[0]}
        longitude={coordinates[1]}
        zoom={13}
        mapboxAccessToken="pk.eyJ1IjoiYmhhbmRhcmliYXJzaGE5NSIsImEiOiJjbTM5bjZ0dTUxNzY1Mm1wenBpY3VidXlkIn0.J6dlnuZ1ktq0s81AY0YT0Q"
        style={{ height: '100%', width: '100%' }}
        mapStyle="mapbox://styles/mapbox/streets-v11" // You can choose any Mapbox style here
      >
        <Marker latitude={coordinates[0]} longitude={coordinates[1]}>
          <div style={{ color: 'red', fontSize: '68px' }}>
            <FaMapMarkerAlt />
          </div>
        </Marker>
      </ReactMapGL>
    </div>
      </div>
      
    </div>
  );
};

export default VendorProfile;