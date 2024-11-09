import React from 'react';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';

export interface MenuProps {
    isOpen: boolean;
}

const Menu: React.FC<MenuProps> = ({ isOpen }) => {
    return (
        <div
            className={`absolute top-20 w-48 bg-white bg-opacity-80 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-50`} 
            style={{
                height: 'full'
            }}
        >
            <ul className="flex flex-col p-4 h-full">
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
