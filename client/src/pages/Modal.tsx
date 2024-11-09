import React, { useState } from 'react';
import { FaStar, FaTimes } from 'react-icons/fa';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRate: (rating: number) => void;
  initialRating: number;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onRate, initialRating }) => {
  const [rating, setRating] = useState<number>(initialRating);

  // Function to handle rating change
  const handleStarClick = (index: number) => {
    setRating(index + 1); // Update rating when a star is clicked
  };

  // Function to handle submit
  const handleSubmit = () => {
    onRate(rating); // Pass the new rating to the parent component
    onClose(); // Close the modal after submitting the rating
  };

  if (!isOpen) return null;

  // Inline styles for the square-shaped modal with a border
  const modalStyle = {
    width: '400px',    // Set the width of the modal
    height: '400px',   // Set the height of the modal to the same as the width for a square shape
    maxWidth: '90%',   // Limit the maximum width
    maxHeight: '90%',  // Limit the maximum height
    border: '2px solid #4B5563', // Add a solid border for contrast (grayish)
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Slight shadow to give a lifted effect
  };

  return (
    <div className="flex justify-center items-center z-50 p-4">
      <div
        className="bg-white rounded-lg shadow-xl transform transition-all duration-300 ease-in-out relative"
        style={modalStyle}  // Apply the inline styles
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 focus:outline-none"
        >
          <FaTimes size={24} />
        </button>

        {/* Modal Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8" style={{paddingTop:'1rem'}}>
          <strong>Rate this Vendor</strong>
        </h2>

        {/* Description or Instructions */}
        <p className="text-sm text-gray-700 text-center mb-6">
          Please rate your experience with this vendor by selecting a number of stars below.
        </p>

        {/* Rating Stars */}
        <div className="flex justify-center mb-6" style={{paddingTop:'1rem'}}>
          {[...Array(5)].map((_, index) => (
            <FaStar
            key={index}
            size={40}
            className={`text-${index < rating ? 'yellow-500' : 'gray-400'}`}
            onClick={() => handleStarClick(index)}
          />
          ))}
        </div>

        {/* Rating Confirmation */}
        <p className="text-sm text-gray-600 text-center mb-6">
          You have selected {rating} star{rating !== 1 ? 's' : ''}. If you're satisfied with your rating, click "Submit" below.
        </p>

        {/* Submit Button */}
        <div className="flex justify-center mb-6" style={{paddingTop:'3rem'}}>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600 transition-all duration-200 ease-in-out active:scale-95"
          >
            Submit Rating
          </button>
        </div>

        {/* Optional Thank You Message after submission */}
        {rating > 0 && (
          <div className="text-center mt-6 text-sm text-gray-700">
            <p className="font-semibold text-green-600">Thank you for your feedback!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;