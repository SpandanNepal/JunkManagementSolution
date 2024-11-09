import React, { useState } from 'react';
import { FaBars, FaBell, FaCog, FaHome, FaSignOutAlt, FaTruck, FaQuestionCircle } from 'react-icons/fa';

const Header: React.FC<{ isLoggedIn: boolean }> = ({ isLoggedIn }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="py-6" style={{ paddingLeft: '2rem', paddingRight: '12rem' }}>
        <div className="flex items-center justify-between bg-white bg-opacity-90 relative px-6 py-2"> {/* Use px-18 */}
            {/* Left Side */}
            <div className="flex items-center">
                <FaTruck className="text-[#0058DC] text-2xl" />
                <span className="text-2xl font-extrabold text-[#0058DC] font-inter ml-2">JUNKger</span>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-3">
                {isLoggedIn && (
                    <>
                        <button className="relative focus:outline-none">
    <span className="absolute top-1 left-1 bg-red-500 text-[#0058DC] text-xs rounded-full px-2 py-0.5">3</span>
    <FaBell className="text-red-500 text-2xl" />
</button>
                        <button onClick={toggleMenu} className="text-black relative">
                            <FaBars className="text-2xl ml-2" />
                        </button>
                    </>
                )}
                
                {isLoggedIn && menuOpen && (
                    <div className="absolute top-16 right-0 w-auto bg-white bg-opacity-80 shadow-lg z-10">
                        <ul className="flex flex-col p-4">
                            <li className="flex items-center py-2 text-black hover:text-[#0058DC] hover:bg-gray-200 transition-colors duration-200">
                                <FaHome className="mr-2" />
                                <a href="#home">Home</a>
                            </li>
                            <li className="flex items-center py-2 text-black hover:text-[#0058DC] hover:bg-gray-200 transition-colors duration-200">
                                <FaCog className="mr-2" />
                                <a href="#settings">Settings</a>
                            </li>
                            <li className="flex items-center py-2 text-black hover:text-[#0058DC] hover:bg-gray-200 transition-colors duration-200">
                                <FaQuestionCircle className="mr-2" />
                                <a href="#help">Help</a>
                            </li>
                            <li className="flex items-center py-2 text-black hover:text-[#0058DC] hover:bg-gray-200 transition-colors duration-200">
                                <FaSignOutAlt className="mr-2" />
                                <a href="#signout">Signout</a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
        </div>
    );
};

export default Header;