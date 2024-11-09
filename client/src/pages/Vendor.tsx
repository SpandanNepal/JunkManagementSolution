import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { FaStar, FaUserCircle } from 'react-icons/fa'; // Use FaUserCircle for the circular icon
import Button from '../components/button';

interface VendorProps {
    name: string;
    rating: number;
    state: string;
    zipcode: string;
    bio: string;
}

const Vendor: React.FC<VendorProps> = ({ name, rating, state, zipcode, bio }) => {
    const navigate = useNavigate();

    const seeDetails = () =>{
        navigate('/customerProfile')
    }

    const sendQuotation = () =>{
        navigate('/customerProfile')
    }

    return (
            <div className="flex p-4 border-b border-gray-300 ml-10 md:ml-20 lg:ml-40" style={{paddingLeft:'12rem', paddingRight:'20rem'}}>
            <div className="flex-shrink-0">
                <div className="w-16 h-16 flex items-center justify-center bg-[#0058DC] rounded-full">
                    <FaUserCircle size={100} className="text-5xl text-black" />
                </div>
            </div>
            <div className="flex-grow ml-4">
                <h2 className="text-lg font-bold">{name}</h2>
                <div className="flex items-center">
                    {[...Array(5)].map((_, index) => (
                        <FaStar key={index} className={`text-${index < rating ? 'yellow-500' : 'gray-400'}`} />
                    ))}
                </div>
                <p className="text-gray-600">{state} {zipcode}</p>
                <p className="text-gray-800 mt-2">{bio}</p>
            </div>
            <div className="flex flex-col ml-4">
                <Button onClick={seeDetails} type="button" variant="mainBlue" className="text-white py-1 px-4 rounded mb-2">See Details</Button>
                <Button onClick={sendQuotation} type="button" variant="mainBlue" className="text-white py-1 px-4 rounded">Send Quotation Request</Button>
            </div>
        </div>
    );
};

export default Vendor;