import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-100 text-center py-6 mt-auto">
            {/* Add padding (py-6) to the footer and mt-auto to push it to the bottom */}
            <p className="text-gray-600">&copy; 2024 JUNKger. All rights reserved.</p>
            <p className="text-gray-600">Connect with us:</p>
            <ul className="flex justify-center space-x-4">
                <li>
                    <a 
                        href="https://facebook.com/JUNKger" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-600 hover:text-blue-600"
                        aria-label="Visit our Facebook page"
                    >
                        <FaFacebook className="inline-block text-blue-600" size={18} aria-label="Facebook icon" />
                    </a>
                </li>
                <li>
                    <a 
                        href="https://x.com/JUNKger" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-600 hover:text-blue-600"
                        aria-label="Visit our X (Twitter) page"
                    >
                        <SiX className="inline-block text-blue-600" size={18} aria-label="X (Twitter) icon" />
                    </a>
                </li>
                <li>
                    <a 
                        href="https://instagram.com/JUNKger" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-600 hover:text-pink-500"
                        aria-label="Visit our Instagram page"
                    >
                        <FaInstagram className="inline-block text-pink-500" size={18} aria-label="Instagram icon" />
                    </a>
                </li>
            </ul>
            <div className="flex justify-center space-x-6">
                <p className="text-gray-600">
                    <a href="mailto:contact@junkger.com" className="hover:text-green-500">
                        contact@junkger.com
                    </a>
                </p>
                <p className="text-gray-600">
                    Phone: (123) 456-7890
                </p>
            </div>
        </footer>
    );
};

export default Footer;