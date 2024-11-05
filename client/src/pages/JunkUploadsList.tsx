import React, { useState } from 'react';
import Button from '../components/button';

// Dummy data for the list
const initialItems = [
  { id: 1, title: 'Wood Scrape Junk', quotationReceived: 2 },
  { id: 2, title: 'Metal Scrap Junk', quotationReceived: 3 },
  { id: 3, title: 'Plastic Junk', quotationReceived: 1 },
  { id: 4, title: 'Glass Scrape Junk', quotationReceived: 4 },
  { id: 5, title: 'Paper Scrape Junk', quotationReceived: 0 }
];

const JunkUploads: React.FC = () => {
  const [items, setItems] = useState(initialItems);
  const [showMore, setShowMore] = useState(false);

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

  return (
    <div className="py-6" style={{ paddingLeft: '16rem', paddingRight: '16rem' }}>
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-900 mb-6"><strong>Junk Uploads</strong></h2>

      {/* List of Items */}
      <div className="space-y-4">
        {items.slice(0, showMore ? items.length : 3).map((item) => (
          <div 
            key={item.id} 
            className="flex items-center justify-between bg-gray-100 p-4 rounded-md shadow-md border border-gray-300"
          >
            <div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-500">Quotation Received: {item.quotationReceived}</p>
            </div>

            <div className="flex space-x-5">
              <Button type="button" variant="mainBlue">View</Button>
              <div style={{ paddingLeft: '1rem' }}>
                <Button 
                  type="button"  
                  style={{ backgroundColor: '#9B0C0C', color: 'white' }} // Using hex code for background
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

export default JunkUploads;
