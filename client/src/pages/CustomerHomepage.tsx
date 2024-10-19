import React, { useState } from 'react';
import AddressSearchBar from './AddressSearchBar';
import Header from './Header';
import Menu from './Menu';
import '../../src/index.css';

export interface CustomerHomepageProps {
}

const CustomerHomepage: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleAddressSearch = (address: string) => {
        console.log('Searching for address:', address);
    };

    return (
        <div
            style={{
                height: '100vh',
                width: '100vw',
                backgroundImage: "url('https://images.unsplash.com/photo-1717667745836-145a38948ebf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Header toggleMenu={toggleMenu} />
            <Menu isOpen={true} />
            <div className="flex items-center justify-center h-full">
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative z-10">
                    <AddressSearchBar onSearch={handleAddressSearch} />
                </div>
            </div>
        </div>
    );
};

export default CustomerHomepage;