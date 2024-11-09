import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

const Footer: React.FC = () => {
    return (
        <div className="py-6" style={{ paddingTop: '16rem' }}>
        <footer className="bg-gray-100 text-center py-24 mt-12"> {/* Add top margin (mt-12) and padding (py-6) */}
            <p className="text-gray-600">&copy; 2024 JUNKger. All rights reserved.</p>
            <p className="text-gray-600">Connect with us:</p>
            <ul className="flex justify-center space-x-4">
                <li>
                    <a 
                        href="https://facebook.com/JUNKger" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-600 hover:text-blue-600"
                    >
                        <FaFacebook className="inline-block text-blue-600" size={30} />
                    </a>
                </li>
                <li>
                    <a 
                        href="https://x.com/JUNKger" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-600 hover:text-blue-600"
                    >
                        <SiX className="inline-block text-blue-600" size={30} />
                    </a>
                </li>
                <li>
                    <a 
                        href="https://instagram.com/JUNKger" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-600 hover:text-pink-500"
                    >
                        <FaInstagram className="inline-block text-pink-500" size={30} />
                    </a>
                </li>
            </ul>
            <p className="text-gray-600 mt-4">
                <a href="mailto:contact@junkger.com" className="hover:text-green-500">
                    contact@junkger.com
                </a>
            </p>
            <p className="text-gray-600">
                Phone: (123) 456-7890
            </p>
        </footer>
        </div>
    );
};

export default Footer;