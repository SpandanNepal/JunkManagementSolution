import React, { useState, useEffect } from 'react';
import { FaSearch, FaEnvelope, FaPhone, FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Modal from './Modal'; // Import the Modal component
import JunkUploadsList from './JunkUploadsList'; // Assuming JunkUploadsList is used

const CustomerProfile: React.FC = () => {
  const [profile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(555) 123-4567',
    address: '123 Main St, Springfield, IL 62701',
    imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
  });

  const [coordinates, setCoordinates] = useState<[number, number] | null>(null);
  const [rating, setRating] = useState<number>(3); // Customer's rating
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // Modal state
  const [isVendor, setIsVendor] = useState<boolean>(true); // Assuming this is a customer profile

  const navigate = useNavigate(); // UseNavigate hook to navigate programmatically

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

  // Handle rating update (same logic as vendor)
  const handleRatingUpdate = (newRating: number) => {
    const updatedRating = (rating + newRating) / 2; // Calculate the average of old and new rating
    setRating(updatedRating); // Update the state with the new average rating
    console.log('Updated rating:', updatedRating);
  };

  const handleViewDetails = () => {
    navigate(`/junk-details/1`);
  };

  if (!coordinates) {
    return <div>Loading map...</div>;
  }

  return (
    <div className="py-6" style={{ paddingLeft: '16rem', paddingRight: '16rem' }}>
      <div>
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

        {/* Rating Section */}
        <div className="flex items-center mt-2">
          {rating ? (
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={`text-${index < rating ? 'yellow-500' : 'gray-400'}`}
                />
              ))}
            </div>
          ) : (
            <span>No ratings yet</span>
          )}
        </div>

        {/* Map */}
        <div
          style={{
            height: '400px',
            width: '400px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '3rem',
          }}
        >
          <ReactMapGL
            latitude={coordinates[0]}
            longitude={coordinates[1]}
            zoom={13}
            mapboxAccessToken="pk.eyJ1IjoiYmhhbmRhcmliYXJzaGE5NSIsImEiOiJjbTM5bjZ0dTUxNzY1Mm1wenBpY3VidXlkIn0.J6dlnuZ1ktq0s81AY0YT0Q"
            style={{ height: '100%', width: '100%' }}
            mapStyle="mapbox://styles/mapbox/streets-v11"
          >
            <Marker latitude={coordinates[0]} longitude={coordinates[1]}>
              <div style={{ color: 'red', fontSize: '68px' }}>
                <FaMapMarkerAlt />
              </div>
            </Marker>
          </ReactMapGL>
        </div>

        {/* Modal */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onRate={handleRatingUpdate}
          initialRating={rating}
        />

        
      </div>

      {/* Junk Uploads List */}
      <div style={{ paddingTop: '3rem' }}>
        <JunkUploadsList />
      </div>

      {/* Rate Button Section (Visible if Vendor) */}
      {isVendor && (
          <div className="absolute right-8 top-32">
            <p className="text-lg font-medium text-gray-700 mb-4">
              Worked with this customer before? <strong>Rate this customer</strong>
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-white bg-blue-500 px-6 py-2 mt-4 rounded-md shadow-md hover:bg-blue-600"
            >
              Rate this Customer
            </button>
          </div>
        )}
    </div>
  );
};

export default CustomerProfile;