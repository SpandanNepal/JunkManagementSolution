import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/button";

// Updated dummy data with full descriptions
const initialItems = [
    {
        id: 1,
        title: "Wood Scrape Junk",
        quotationReceived: 2,
        postedBy: "Jane Doe",
        description:
            "This is a large collection of wood scraps from construction projects, including broken furniture and leftover lumber. The wood can be reused for various construction purposes or recycling processes.",
        location: "Denton, Texas",
        typeOfJunk: "Wood Scraps",
        pickUpDate: "9/21/2024 - 9/18/2024",
        weight: 177,
        truckSize: "Large",
        material: "Wood, Metal",
        spaceOccupied: "13 meter square",
        photos: [
            "https://via.placeholder.com/150",
            "https://via.placeholder.com/150",
        ],
    },
    {
        id: 2,
        title: "Metal Scrap Junk",
        quotationReceived: 3,
        postedBy: "John Doe",
        description:
            "This junk consists of various metal scraps including steel beams, broken pipes, and disused metal parts. These can be recycled for metal extraction or used in the creation of new metal products.",
        location: "Austin, Texas",
        typeOfJunk: "Metal",
        pickUpDate: "9/25/2024 - 9/22/2024",
        weight: 250,
        truckSize: "Medium",
        material: "Metal, Steel",
        spaceOccupied: "20 meter square",
        photos: [
            "https://via.placeholder.com/150",
            "https://via.placeholder.com/150",
        ],
    },
    {
        id: 3,
        title: "Plastic Waste",
        quotationReceived: 1,
        postedBy: "Sarah Lee",
        description:
            "A collection of mixed plastic waste, including plastic bottles, containers, packaging materials, and more. These items can be sorted, cleaned, and recycled to make new plastic products.",
        location: "Houston, Texas",
        typeOfJunk: "Plastic Waste",
        pickUpDate: "10/01/2024 - 10/03/2024",
        weight: 120,
        truckSize: "Small",
        material: "Plastic, Rubber",
        spaceOccupied: "5 meter square",
        photos: [
            "https://via.placeholder.com/150",
            "https://via.placeholder.com/150",
        ],
    },
    {
        id: 4,
        title: "Electronics Disposal",
        quotationReceived: 5,
        postedBy: "Mike T.",
        description:
            "Old, outdated electronics such as broken TVs, computers, phones, and various small appliances. These items contain valuable metals and materials that can be salvaged or reused, and they must be disposed of properly to avoid environmental harm.",
        location: "Dallas, Texas",
        typeOfJunk: "Electronics",
        pickUpDate: "10/10/2024 - 10/12/2024",
        weight: 300,
        truckSize: "Large",
        material: "Electronics, Plastic",
        spaceOccupied: "15 meter square",
        photos: [
            "https://via.placeholder.com/150",
            "https://via.placeholder.com/150",
        ],
    },
    {
        id: 5,
        title: "Furniture Junk",
        quotationReceived: 4,
        postedBy: "Alice Smith",
        description:
            "Discarded furniture including old chairs, tables, and sofas. These items may be broken or outdated but can still be repurposed or recycled for materials like wood and fabric.",
        location: "San Antonio, Texas",
        typeOfJunk: "Furniture",
        pickUpDate: "10/05/2024 - 10/07/2024",
        weight: 180,
        truckSize: "Medium",
        material: "Wood, Fabric",
        spaceOccupied: "10 meter square",
        photos: [
            "https://via.placeholder.com/150",
            "https://via.placeholder.com/150",
        ],
    },
    {
        id: 6,
        title: "Concrete Debris",
        quotationReceived: 6,
        postedBy: "Evan Ross",
        description:
            "Concrete debris from construction sites, including broken concrete slabs, foundation remnants, and other cement-based materials. These can be recycled into new concrete or used for filling purposes in construction projects.",
        location: "Austin, Texas",
        typeOfJunk: "Concrete",
        pickUpDate: "10/15/2024 - 10/17/2024",
        weight: 500,
        truckSize: "Large",
        material: "Concrete, Metal",
        spaceOccupied: "25 meter square",
        photos: [
            "https://via.placeholder.com/150",
            "https://via.placeholder.com/150",
        ],
    },
    {
        id: 7,
        title: "Yard Waste",
        quotationReceived: 2,
        postedBy: "Tom Green",
        description:
            "Organic yard waste including grass clippings, fallen leaves, small branches, and other garden refuse. This can be composted or used for mulch in gardening and landscaping projects.",
        location: "Dallas, Texas",
        typeOfJunk: "Yard Waste",
        pickUpDate: "10/25/2024 - 10/27/2024",
        weight: 100,
        truckSize: "Small",
        material: "Grass, Leaves, Small branches",
        spaceOccupied: "7 meter square",
        photos: [
            "https://via.placeholder.com/150",
            "https://via.placeholder.com/150",
        ],
    },
];

const JunkDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const item = initialItems.find((item) => item.id === parseInt(id!));

    if (!item) {
        return <div>Item not found.</div>;
    }

    const loggedInUser = 'Jane Doe'; // Change this based on the logged-in user
    const isVendor = false; // Example condition to check if user is vendor (this could be dynamic)


    const handleBack = () => {
        navigate(-1); 
    };

    const handleEdit = () => {
        navigate(`/edit-junk/${item.id}`); // This will route to the edit junk form (you would need to set this up)
      };
    
      // Function to handle send quotation action (for vendors)
      const handleSendQuotation = () => {
        navigate(`/send-quotation/${item.id}`); // This will route to a send quotation page (you would need to set this up)
      };

    return (
        <div
            className="py-6"
            style={{ paddingLeft: "16rem", paddingRight: "16rem" }}
        >
            <div className="p-6 bg-white rounded-md shadow-lg">
                
                <h3
                    className="text-2xl font-semibold mb-4"
                    style={{ paddingBottom: "2rem" }}
                >
                    <strong>{item.title}</strong>
                </h3>

                <p className="mb-2">
                    <strong>Junk Description</strong>
                </p>
                <p> {item.description}</p>
                <p className="mb-2">
                    <strong>Location</strong>{" "}
                </p>
                <p>{item.location}</p>
                <p className="mb-2">
                    <strong>Type of Junk</strong>{" "}
                </p>
                <p>{item.typeOfJunk}</p>
                <p className="mb-2">
                    <strong>Pick-Up Dates</strong>
                </p>
                <p> {item.pickUpDate}</p>
                <p className="mb-2">
                    <strong>Weight</strong>
                </p>
                <p> {item.weight} kg</p>
                <p className="mb-2">
                    <strong>Truck Size Needed</strong>
                </p>
                <p> {item.truckSize}</p>
                <p className="mb-2">
                    <strong>Material</strong>
                </p>
                <p> {item.material}</p>
                <p className="mb-2">
                    <strong>Space Occupied</strong>
                </p>
                <p> {item.spaceOccupied}</p>

                <div className="mt-4">
                    <h4 className="text-xl font-medium">
                        <strong>Junk Photos:</strong>
                    </h4>
                    <div className="flex space-x-4 mt-2">
                        {item.photos.map((photo, index) => (
                            <img
                                key={index}
                                src={photo}
                                alt={`Junk item ${item.id} photo ${index + 1}`}
                                className="w-32 h-32 object-cover rounded-md"
                            />
                        ))}
                    </div>
                    <div className="mt-4" style={{paddingTop:'4rem', paddingBottom:'2rem'}}>

                    <Button type="button" variant="mainBlue" onClick={() => handleBack()}>
                    &larr; Back to Profile
                </Button>
                </div>
          {/* Show Edit button if the logged-in user is the person who posted the junk */}
          {loggedInUser === item.postedBy && (
            <Button
            onClick={() => handleEdit()}
            type="button" variant="mainBlue"
            >
              Edit
            </Button>
          )}
          
          {/* Show Send Quotation button if the logged-in user is a vendor */}
          {isVendor && loggedInUser !== item.postedBy && (
            <Button
            onClick={() => handleSendQuotation()}
            type="button" variant="mainBlue"            >
              Send Quotation
            </Button>
          )}
                </div>
            </div>
        </div>
    );
};

export default JunkDetails;
