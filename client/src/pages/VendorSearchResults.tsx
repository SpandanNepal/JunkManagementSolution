import React, { useState } from 'react';
import Vendor from './Vendor';
import Button from '../components/button';
import dummyVendors from '../data/dummyVendors';

const itemsPerPage = 4;

const VendorSearchResults: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState<{ rating?: number; state?: string }>({});

    // Pagination setup
    const totalPages = Math.ceil(dummyVendors.length / itemsPerPage);

    // Function to handle page change
    const handlePageChange = (page: number) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    // Filter the vendors based on rating or location
    const filteredVendors = dummyVendors.filter(vendor => {
        if (filter.rating && vendor.rating !== filter.rating) return false;
        if (filter.state && vendor.state !== filter.state) return false;
        return true;
    });

    // Get the vendors for the current page after applying filters
    const currentVendors = filteredVendors.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    // Handle filter changes
    const handleFilterChange = (type: string, value: string | number) => {
        setFilter(prev => ({ ...prev, [type]: value }));
        setCurrentPage(1); // Reset to first page when filter is changed
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-50 p-6">
            {/* Filter Buttons */}
            <div className="flex space-x-4 mb-8">
                <Button type="button" variant="borderMainBlue" onClick={() => handleFilterChange('rating', 5)}>
                    Filter by Rating: 5
                </Button>
                <Button type="button" variant="borderMainBlue" onClick={() => handleFilterChange('rating', 4)}>
                    Filter by Rating: 4
                </Button>
                <Button type="button" variant="borderMainBlue" onClick={() => handleFilterChange('state', 'NY')}>
                    Filter by Location: NY
                </Button>
                <Button type="button" variant="borderMainBlue" onClick={() => handleFilterChange('state', 'CA')}>
                    Filter by Location: CA
                </Button>
                <Button type="button" variant="borderMainBlue" onClick={() => setFilter({})}>
                    Clear Filters
                </Button>
            </div>
            
            {/* Vendor List */}
            <div className="w-[1000px] space-y-4">
                {currentVendors.map((vendor, index) => (
                    <div className="bg-white shadow-md rounded-md p-4" key={index}>
                        <Vendor {...vendor} vendorId={vendor.vendorId} />
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-center mt-8 space-x-4">
                <Button
                    type="button"
                    variant="mainBlue"
                    className={`${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </Button>
                <span className="text-gray-600">Page {currentPage} of {totalPages}</span>
                <Button
                    type="button"
                    variant="mainBlue"
                    className={`${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </Button>
            </div>
        </div>
    );
};

export default VendorSearchResults;