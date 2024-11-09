import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddressSearchBar from '../components/AddressSearchBar';

const CustomerHomepage: React.FC = () => {
    const navigate = useNavigate();

    const handleAddressSearch = (address: string) => {
        navigate('/vendorsearchresult');
        console.log('Searching for address:', address);
    };

    return (
        <div 
            className="relative h-screen w-screen bg-cover bg-center bg-no-repeat" 
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1717667745836-145a38948ebf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Centering the AddressSearchBar */}
            <div className="relative z-10 flex items-center justify-center h-full">
                <AddressSearchBar onSearch={handleAddressSearch} />
            </div>
        </div>
    );
};

export default CustomerHomepage;
