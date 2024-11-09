import React, { useState } from 'react';
import Button from '../components/button';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate from React Router

// Updated dummy data with more items for the list
const initialItems = [
  {
    id: 1,
    title: 'Wood Scrape Junk',
    quotationReceived: 2,
    postedBy: 'Jane Doe',
    description: 'Lorem ipsum dolor sit amet...',
    location: 'Denton, Texas',
    typeOfJunk: 'Wood Scraps',
    pickUpDate: '9/21/2024 - 9/18/2024',
    weight: 177,
    truckSize: 'Large',
    material: 'Wood, Metal',
    spaceOccupied: '13 meter square',
    photos: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
    ]
  },
  {
    id: 2,
    title: 'Metal Scrap Junk',
    quotationReceived: 3,
    postedBy: 'John Doe',
    description: 'Lorem ipsum dolor sit amet...',
    location: 'Austin, Texas',
    typeOfJunk: 'Metal',
    pickUpDate: '9/25/2024 - 9/22/2024',
    weight: 250,
    truckSize: 'Medium',
    material: 'Metal, Steel',
    spaceOccupied: '20 meter square',
    photos: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
    ]
  },
  {
    id: 3,
    title: 'Plastic Waste',
    quotationReceived: 1,
    postedBy: 'Sarah Lee',
    description: 'Recycling plastics...',
    location: 'Houston, Texas',
    typeOfJunk: 'Plastic Waste',
    pickUpDate: '10/01/2024 - 10/03/2024',
    weight: 120,
    truckSize: 'Small',
    material: 'Plastic, Rubber',
    spaceOccupied: '5 meter square',
    photos: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
    ]
  },
  {
    id: 4,
    title: 'Electronics Disposal',
    quotationReceived: 5,
    postedBy: 'Mike T.',
    description: 'Outdated electronics...',
    location: 'Dallas, Texas',
    typeOfJunk: 'Electronics',
    pickUpDate: '10/10/2024 - 10/12/2024',
    weight: 300,
    truckSize: 'Large',
    material: 'Electronics, Plastic',
    spaceOccupied: '15 meter square',
    photos: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
    ]
  },
  {
    id: 5,
    title: 'Furniture Junk',
    quotationReceived: 4,
    postedBy: 'Alice Smith',
    description: 'Old furniture...',
    location: 'San Antonio, Texas',
    typeOfJunk: 'Furniture',
    pickUpDate: '10/05/2024 - 10/07/2024',
    weight: 180,
    truckSize: 'Medium',
    material: 'Wood, Fabric',
    spaceOccupied: '10 meter square',
    photos: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
    ]
  },
  {
    id: 6,
    title: 'Concrete Debris',
    quotationReceived: 6,
    postedBy: 'Evan Ross',
    description: 'Construction debris...',
    location: 'Austin, Texas',
    typeOfJunk: 'Concrete',
    pickUpDate: '10/15/2024 - 10/17/2024',
    weight: 500,
    truckSize: 'Large',
    material: 'Concrete, Metal',
    spaceOccupied: '25 meter square',
    photos: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
    ]
  },
  {
    id: 7,
    title: 'Yard Waste',
    quotationReceived: 2,
    postedBy: 'Tom Green',
    description: 'Grass, leaves, and garden debris...',
    location: 'Dallas, Texas',
    typeOfJunk: 'Yard Waste',
    pickUpDate: '10/25/2024 - 10/27/2024',
    weight: 100,
    truckSize: 'Small',
    material: 'Grass, Leaves, Small branches',
    spaceOccupied: '7 meter square',
    photos: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
    ]
  },
  // More items can be added as needed...
];

const JunkUploadsList: React.FC = () => {
  const [items, setItems] = useState(initialItems);
  const [showMore, setShowMore] = useState(false);

  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Function to handle item deletion
  const handleDelete = (id: number) => {
    setItems(items.filter(item => item.id !== id)); // Filter out the deleted item
  };

  // Function to handle showing more items
  const handleShowMore = () => {
    setShowMore(true);
  };

  // Function to handle showing less items
  const handleShowLess = () => {
    setShowMore(false);
  };

  // Function to handle viewing details
  const handleViewDetails = (id: number) => {
    // Navigate to JunkDetails page with the item id
    navigate(`/junk-details/${id}`);
  };

  return (
    <div className="py-6" style={{ paddingLeft: '16rem', paddingRight: '16rem' }}>
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-900 mb-6"><strong>Junk Uploads</strong></h2>

      {/* List of Items */}
      <div className="space-y-4">
        {items.slice(0, showMore ? items.length : 3).map((item) => (
          <div key={item.id} className="flex items-center justify-between bg-gray-100 p-4 rounded-md shadow-md border border-gray-300">
            <div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-500">Quotation Received: {item.quotationReceived}</p>
            </div>

            <div className="flex space-x-5">
              <Button type="button" variant="mainBlue" onClick={() => handleViewDetails(item.id)}>
                View
              </Button>
              <div style={{ paddingLeft: '1rem' }}>
                <Button
                  type="button"
                  style={{ backgroundColor: '#9B0C0C', color: 'white' }}
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See More or Show Less Link */}
      <div className="mt-4">
        {!showMore && items.length > 3 && (
          <button
            className="text-blue-500 hover:text-blue-700"
            onClick={handleShowMore}
          >
            See More
          </button>
        )}

        {showMore && (
          <button
            className="text-blue-500 hover:text-blue-700"
            onClick={handleShowLess}
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default JunkUploadsList;
