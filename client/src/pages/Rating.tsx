import React from 'react';
import { FaStar } from 'react-icons/fa';

interface RatingProps {
  rating: number;
  onRate: (rating: number) => void;
}

const Rating: React.FC<RatingProps> = ({ rating, onRate }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          size={24}
          className={`cursor-pointer ${index < rating ? 'yellow-500' : 'gray-400'}`}
          onClick={() => onRate(index + 1)} // Update rating on click
        />
      ))}
    </div>
  );
};

export default Rating;