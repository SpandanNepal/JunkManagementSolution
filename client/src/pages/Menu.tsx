import React from 'react';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';

export interface MenuProps {
    isOpen: boolean;
}

const Menu: React.FC<MenuProps> = ({ isOpen }) => {
    return (
        <div
            className={`absolute top-16 left-0 w-48 bg-white bg-opacity-80 shadow-lg transition-transform transform'translate-x-0' z-50`} // Added z-50 to ensure the menu appears on top of other elements
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