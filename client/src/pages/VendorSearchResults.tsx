import React, { useState } from 'react';
import Vendor from './Vendor';
import Header from './Header';
import Menu from './Menu';
import Button from '../components/button';

const vendorsData = [
    // 10 fake vendors
    { name: 'John Doe', rating: 4, state: 'NY', zipcode: '10001', bio: 'Experienced junk removal service with over 5 years of service.' },
    { name: 'Jane Smith', rating: 5, state: 'CA', zipcode: '90001', bio: 'Fast and reliable waste management.' },
    { name: 'Sam Wilson', rating: 3, state: 'TX', zipcode: '73301', bio: 'Local junk removal service, eco-friendly options available.' },
    { name: 'Sara Connor', rating: 4, state: 'FL', zipcode: '33101', bio: 'Family-owned junk removal business with great customer service.' },
    { name: 'Mike Brown', rating: 2, state: 'IL', zipcode: '60601', bio: 'Affordable junk removal with quick service.' },
    { name: 'Alice Green', rating: 5, state: 'WA', zipcode: '98001', bio: 'Eco-friendly junk disposal services.' },
    { name: 'Bob White', rating: 4, state: 'OR', zipcode: '97201', bio: 'Reliable and professional waste management.' },
    { name: 'Charlie Black', rating: 3, state: 'NV', zipcode: '89501', bio: 'Junk removal services tailored to your needs.' },
    { name: 'Diana Prince', rating: 4, state: 'AZ', zipcode: '85001', bio: 'Experienced team for all junk removal tasks.' },
    { name: 'Edward King', rating: 5, state: 'CO', zipcode: '80201', bio: 'Professional and eco-friendly services.' },
];

const itemsPerPage = 4;

const VendorSearchResults: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const totalPages = Math.ceil(vendorsData.length / itemsPerPage);
    
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const currentVendors = vendorsData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div>
            <Header toggleMenu={toggleMenu} />
            <Menu isOpen={menuOpen} />
            <div className="flex flex-col min-h-screen">
                <div className="flex-grow p-8 pl-40"> {/* Increased left padding */}
                    <div className="flex justify-center mb-4">
                        <Button type="button" variant="mainBlue">Filter by Rating</Button>
                        <Button type="button" variant="mainBlue">Filter by Location</Button>
                        <Button type="button" variant="mainBlue">Filter by Availability</Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {currentVendors.map((vendor, index) => (
                            <Vendor key={index} {...vendor} />
                        ))}
                    </div>
                    <div className="flex justify-center mt-4">
                        <Button type="button" variant="mainBlue"
                            className={`mr-2 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </Button>
                        <span className="mx-2">Page {currentPage} of {totalPages}</span>
                        <Button type="button" variant="mainBlue"
                            className={`${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VendorSearchResults;