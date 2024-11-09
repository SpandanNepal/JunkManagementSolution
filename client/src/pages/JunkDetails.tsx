/* eslint-disable jsx-a11y/img-redundant-alt */
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
        "data:image/jpeg;base64,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",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJfecdPHWboYw2kjZQaee_KftdpeNOxWXjrw&s",
        "https://www.google.com/imgres?q=wood%20Scrape%20Junk&imgurl=https%3A%2F%2Fjunkrelief.com%2Fwp-content%2Fuploads%2F2022%2F08%2FDispose-of-Old-Wood-and-Lumber.jpg.webp&imgrefurl=https%3A%2F%2Fjunkrelief.com%2Fdispose-wood-lumber-chicago%2F&docid=F0dpHHOhkdydJM&tbnid=SzTeH2nLgQZ85M&vet=12ahUKEwjfo9Ky882JAxUlGtAFHcIgLWgQM3oECB0QAA..i&w=1116&h=744&hcb=2&ved=2ahUKEwjfo9Ky882JAxUlGtAFHcIgLWgQM3oECB0QAA",
        "https://images.unsplash.com/photo-1587345483820-bf1e7b62fbe2",  // Broken furniture image
        "https://images.unsplash.com/photo-1590348463494-9f3ad6a3d0b1",  // Additional wood image
        "https://images.unsplash.com/photo-1572576593211-e3d33500f941",  // Wood and scrap image
        "https://images.unsplash.com/photo-1612827303433-5fc7cc3c2db8",  // Wood scrap image
        "https://images.unsplash.com/photo-1584764919756-63ff0f65b3a4"   // Wood planks image
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
        "https://images.unsplash.com/photo-1597363433503-204c198a1b0d",  // Scrap metal image
        "https://images.unsplash.com/photo-1601196783798-b8f4b000fe96",  // Steel beams image
        "https://images.unsplash.com/photo-1616618873939-40ee212fc1d2",  // More metal scrap image
        "https://images.unsplash.com/photo-1605115019645-5649f6c587c0",  // Metal tools image
        "https://images.unsplash.com/photo-1580972241711-674e4369118a",  // Metal sheet scrap
        "https://images.unsplash.com/photo-1592395981196-5e8f9e6c22b8"   // Iron metal pieces
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
        "https://images.unsplash.com/photo-1590526780725-eaeb2e1b1b66",  // Plastic waste image
        "https://images.unsplash.com/photo-1572289572722-00bbdd2ab8c3",  // Plastic bottles
        "https://images.unsplash.com/photo-1605891391183-5805b529ff68",  // More plastic waste
        "https://images.unsplash.com/photo-1572304746-73e6b5be6820",  // Plastic containers image
        "https://images.unsplash.com/photo-1600707111542-c4ed9c2176d7",  // Plastic bags image
        "https://images.unsplash.com/photo-1582644164247-cd2ec0d1a2a1"   // Mixed plastic waste
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
        "https://images.unsplash.com/photo-1587340916581-5fe30b00f775",  // Broken electronics image
        "https://images.unsplash.com/photo-1584894890710-32bc4fbdab2f",  // Old phones
        "https://images.unsplash.com/photo-1600730890844-d6be10fc91d0",  // Old TV
        "https://images.unsplash.com/photo-1597074917096-d0ec8f13e3ca",  // Old computers
        "https://images.unsplash.com/photo-1587057777454-cff800ef9ba5",  // Old TV sets
        "https://images.unsplash.com/photo-1600407266942-d4a5d69a63ea"   // Broken electronics parts
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
        "https://images.unsplash.com/photo-1593642634345-d7f3f8704a8d",  // Discarded furniture
        "https://images.unsplash.com/photo-1532493771612-6bc7c9e8ad88",  // Old chairs
        "https://images.unsplash.com/photo-1572077302254-6e2c7b51b0a4",  // Old tables
        "https://images.unsplash.com/photo-1601587587429-68c1f9b60a45",  // Old sofas
        "https://images.unsplash.com/photo-1574144297287-92e6b18151d5",  // Fabric pieces
        "https://images.unsplash.com/photo-1556223607-c2b7365f26e4"   // Wooden chairs
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
        "https://images.unsplash.com/photo-1591941581367-34838e300fe1",  // Concrete debris
        "https://images.unsplash.com/photo-1600306674936-c5a7c0fdf4e4",  // Broken concrete slabs
        "https://images.unsplash.com/photo-1590785731197-9c1b8b77b888",  // Cement scrap
        "https://images.unsplash.com/photo-1597741180671-5b92f6d94957",  // Concrete pieces
        "https://images.unsplash.com/photo-1602641984902-b9e9e7fcf0a4",  // Construction debris
        "https://images.unsplash.com/photo-1604964921729-5cbbe8ac5b09"   // Concrete blocks
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
        "https://images.unsplash.com/photo-1575241523455-8ab453f9716d",  // Yard waste
        "https://images.unsplash.com/photo-1604500003365-3cf8592a4e13",  // Fallen leaves
        "https://images.unsplash.com/photo-1592409070663-299c3b8cc9d9",  // More leaves
        "https://images.unsplash.com/photo-1570452080051-220115bcbac2",  // Grass clippings
        "https://images.unsplash.com/photo-1605111087737-5dcd4cc78d16",  // Small branches
        "https://images.unsplash.com/photo-1602790738974-9f50b2e522cc"   // Garden refuse
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
