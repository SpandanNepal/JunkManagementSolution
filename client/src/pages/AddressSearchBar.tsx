import React, { useState, FormEvent } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

export interface AddressSearchBarProps {
    onSearch: (address: string) => void;
}

const AddressSearchBar: React.FC<AddressSearchBarProps> = ({ onSearch }) => {
    const [address, setAddress] = useState<string>('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSearch(address);
    };

    return (
        <div className="flex justify-center mt-10">
            <form onSubmit={handleSubmit} className="flex w-full max-w-md relative">
                <input
                    type="text"
                    placeholder="Enter your location"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="flex-grow pl-10 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black" // Ensure background and text color
                />
                <span className="absolute left-3 top-2.5 text-gray-500">
                    <FaMapMarkerAlt />
                </span>
                <button
                    type="submit"
                    className="px-4 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddressSearchBar;