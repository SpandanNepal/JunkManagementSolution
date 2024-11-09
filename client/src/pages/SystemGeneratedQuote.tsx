import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import the left and right arrows
import Button from '../components/button';

// A function to calculate the quote based on weight, material, and space
const calculateQuote = (data: any) => {
  const { material, weight, spaceOccupied } = data;

  // Dummy rate calculation
  let rate = 0;
  if (material === 'Metal') {
    rate = 10; // Per weight unit (example)
  } else if (material === 'Plastic') {
    rate = 5;
  } else {
    rate = 2;
  }

  const volume = parseFloat(spaceOccupied) * 10; // Example: multiply space by a factor to get volume
  const finalQuote = (parseFloat(weight) * rate) + volume * 2;

  return finalQuote;
};

const SystemGeneratedQuote: React.FC = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { junkData } = state || {};

  if (!junkData) {
    return <div>No junk data available</div>;
  }

  // Calculate the quote based on the provided data
  const quote = calculateQuote(junkData);

  // Handle the Back button click (navigate back with the junkData)
  const handleBack = () => {
    navigate('/junkdescriptionform', {
      state: { junkData } // Pass the junkData to pre-fill the form
    });
  };

  const handleSeeVendors = () => {
    navigate('/vendorsearchresult'); // Navigate to vendor list or search page
  };

  return (
    <div 
      className="flex justify-center items-center flex-col w-screen h-full p-6 bg-gray-100"  
      style={{ paddingLeft: '16rem', paddingRight: '17rem' }}
    >
      <div 
        className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2 xl:w-1/3"
        style={{
          marginTop: '1rem',
          paddingBottom: '2rem',
        }}
      >
        <h1 
          className="font-semibold text-2xl text-gray-800" 
          style={{ paddingBottom: '1rem' }}
        >
          <strong>System Generated Quote</strong>
        </h1>

        <p className="text-lg text-gray-600 mb-4">
          Based on the information you provided, here is the estimated cost for removing your junk.
        </p>

        <div className="mb-6">
          <p><strong>Junk Name:</strong> {junkData.junkName}</p>
          <p><strong>Material:</strong> {junkData.material}</p>
          <p><strong>Weight:</strong> {junkData.weight} kg</p>
          <p><strong>Space Occupied:</strong> {junkData.spaceOccupied} cubic meters</p>
          <p><strong>Pick-Up Date:</strong> {junkData.pickupDate}</p>
        </div>

        <div className="mt-4 mb-6">
          <h1 
            className="font-semibold text-2xl text-gray-800" 
            style={{ paddingBottom: '1rem' }}
          >
            <strong>Estimated Quote: ${quote.toFixed(2)}</strong>
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            This is an estimate. Final pricing may vary depending on the vendor and any additional services required.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-between gap-6">
          {/* Edit the Form button with back arrow */}
          <Button
            onClick={handleBack}
            type="button"
            variant="mainBlue"
            className="w-auto flex items-center gap-2"
            style={{ padding: '0.75rem 1.5rem', fontSize: '1rem' }} // Added padding and adjusted font size
          >
            <FaArrowLeft /> {/* Left Arrow Icon */}
            Edit the Form
          </Button>

          {/* See Available Vendors button with forward arrow */}
          <Button
            onClick={handleSeeVendors}
            type="button"
            variant="mainBlue"
            className="w-auto flex items-center gap-2"
            style={{ padding: '0.75rem 1.5rem', fontSize: '1rem' }} // Added padding and adjusted font size
          >
            See Available Vendors
            <FaArrowRight /> {/* Right Arrow Icon */}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SystemGeneratedQuote;