import React from 'react';
import { FaBars, FaTruck } from 'react-icons/fa';

export interface HeaderProps {
    toggleMenu: () => void; 
}

const Header: React.FC<HeaderProps> = ({ toggleMenu }) => {
    return (
        <div className="flex items-center justify-between p-4 bg-white bg-opacity-90">
            <div className="flex items-center">
                <FaTruck className="text-[#0058DC] text-2xl" />
                <span className="text-2xl font-extrabold text-[#0058DC] ml-2 font-inter">JUNKGER</span>
            </div>
            <button onClick={toggleMenu} className="text-black">
                <FaBars className="text-2xl" />
            </button>
        </div>
    );
};

export default Header;