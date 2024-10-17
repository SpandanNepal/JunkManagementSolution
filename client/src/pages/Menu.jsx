// Menu.jsx
import React from 'react';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';

const Menu = ({ isOpen }) => {
    return (
        <div
            className={`absolute top-16 left-0 w-48 bg-white bg-opacity-80 shadow-lg transition-transform transform ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
            <ul className="flex flex-col p-4">
                <li className="flex items-center py-2 text-black hover:text-[#0058DC] hover:bg-gray-200 transition-colors duration-200">
                    <FaHome className="mr-2" />
                    <a href="#home">Home</a>
                </li>
                <li className="flex items-center py-2 text-black hover:text-[#0058DC] hover:bg-gray-200 transition-colors duration-200">
                    <FaUser className="mr-2" />
                    <a href="#profile">Profile</a>
                </li>
                <li className="flex items-center py-2 text-black hover:text-[#0058DC] hover:bg-gray-200 transition-colors duration-200">
                    <FaCog className="mr-2" />
                    <a href="#settings">Settings</a>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
