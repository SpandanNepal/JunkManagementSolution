import React, { useEffect, useState } from 'react';
import { FaSearch, FaEnvelope, FaPhone, FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Modal from './Modal'; // Import the Modal component
import Button from '../components/button';

const VendorProfile: React.FC = () => {
  const [coordinates, setCoordinates] = useState<[number, number] | null>(null);
  const [rating, setRating] = useState<number>(2); // Vendor's current rating
  const [isCustomer, setIsCustomer] = useState<boolean>(true); // Assuming the user is a customer
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // State to control modal visibility

  const [profile] = useState({
    name: 'John Doe',
    email: 'john.doe@vendor.com',
    phone: '(555) 987-6543',
    address: '456 Vendor St, Denton, Texas',
    imageUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
    bio: `John doe’s bio here. John doe’s bio here. John doe’s bio here. 
          John doe’s bio here. John doe’s bio here. John doe’s bio here.`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    services: ['Junk Pickup', 'Junk Disposal', 'Recycling'],
    availability: 'Mon-Fri: 9 AM to 8 PM',
    rating: 2, // Initial vendor rating out of 5
  });

  const navigate = useNavigate(); // useNavigate hook to navigate programmatically

  // Function to handle sending a quotation request
  const handleSendQuotationRequest = () => {
    console.log('Quotation request sent to', profile.name);
  };

  // Update the vendor's average rating (called from Rating component)
  const handleRatingUpdate = (newRating: number) => {
    const updatedRating = (rating + newRating) / 2; // Calculate the average of the old and new rating
    setRating(updatedRating); // Update the state with the new average rating
    console.log('Updated vendor rating:', updatedRating); // Log the new rating (for debugging)
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
    <div className="py-6" style={{ paddingLeft: '16rem', paddingRight: '16rem' }}>
      {/* Search Bar */}
      <div className="mb-6 relative w-full">
        <label htmlFor="searchInput" className="sr-only">Search</label>  {/* Add label with sr-only for screen readers */}
        <FaSearch className="absolute left-3 top-2.5 text-gray-500" />
        <input
          type="text"
          id="searchInput"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Navigation Breadcrumb */}
      <div className="mb-8" style={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
        <span className="text-[#0058DC]">Home / Vendor / {profile.name}</span>
      </div>

      {/* Profile Section */}
      <div className="flex gap-8 mt-8 w-full items-center">
        <img
          src={profile.imageUrl}
          alt="Profile"
          className="w-40 h-40 object-cover rounded-full border-4 border-blue-500"
        />
        <div className="flex flex-col">
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
      <div className="flex items-center mt-4">
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

      {/* Services */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-gray-700">Services Offered</h3>
        <ul className="list-disc pl-6 mt-2">
          {profile.services.map((service, index) => (
            <li key={index} className="text-gray-600">{service}</li>
          ))}
        </ul>
      </div>

      {/* Map */}
      <div className="mt-6" style={{ height: '300px', width: '100%', display: 'flex', justifyContent: 'center' }}>
        <ReactMapGL
          latitude={coordinates[0]}
          longitude={coordinates[1]}
          zoom={13}
          mapboxAccessToken="pk.eyJ1IjoiYmhhbmRhcmliYXJzaGE5NSIsImEiOiJjbTM5bjZ0dTUxNzY1Mm1wenBpY3VidXlkIn0.J6dlnuZ1ktq0s81AY0YT0Q"
          mapStyle="mapbox://styles/mapbox/streets-v11"
        >
          <Marker latitude={coordinates[0]} longitude={coordinates[1]}>
            <div style={{ color: 'red', fontSize: '40px' }}>
              <FaMapMarkerAlt />
            </div>
          </Marker>
        </ReactMapGL>
      </div>

      {/* Quotation Request */}
      {isCustomer && (
        <div className="mt-6 flex justify-center">
          <Button onClick={handleSendQuotationRequest} className="ml-4" variant="mainBlue">
            Request a Quotation
          </Button>
        </div>
      )}
      {/* Vendor Button */}
      {isCustomer && (
        <div className="flex justify-center items-center mt-6">
          <p className="text-lg font-medium text-gray-700">
            Worked with this customer before? <strong>Rate this customer</strong>
          </p>
          <Button onClick={() => setIsModalOpen(true)} className="ml-4" variant="borderMainBlue">
            Rate this Customer
          </Button>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onRate={handleRatingUpdate}
            initialRating={rating}
          />
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onRate={handleRatingUpdate}
            initialRating={rating}
          />
        </div>
      )}
    </div>
  );
};

export default VendorProfile;
