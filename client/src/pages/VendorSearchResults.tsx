import React, { useState } from 'react';
import Vendor from './Vendor';
import Button from '../components/button';
import dummyVendors from '../data/dummyVendors';

const itemsPerPage = 4;

const VendorSearchResults: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState<{ rating?: number; state?: string }>({});

    const totalPages = Math.ceil(dummyVendors.length / itemsPerPage);

    const handlePageChange = (page: number) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const filteredVendors = dummyVendors.filter(vendor => {
        if (filter.rating && vendor.rating !== filter.rating) return false;
        if (filter.state && vendor.state !== filter.state) return false;
        return true;
    });

    const currentVendors = filteredVendors.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handleFilterChange = (type: string, value: string | number) => {
        setFilter(prev => ({ ...prev, [type]: value }));
        setCurrentPage(1);
    };

    const clearFilters = () => {
        setFilter({});
        setCurrentPage(1);
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-50 p-6">
            <div className="flex space-x-4 mb-8">
                <div className="flex flex-col">
                    <label htmlFor="rating" className="text-sm font-medium text-gray-700">Rating</label>
                    <select
                        id="rating"
                        className="border border-gray-300 rounded-md p-2"
                        onChange={(e) => handleFilterChange('rating', parseInt(e.target.value))}
                        value={filter.rating || ''}
                    >
                        <option value="">Filter by Rating</option>
                        {[1, 2, 3, 4, 5].map(rating => (
                            <option key={rating} value={rating}>
                                {rating} Star
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="state" className="text-sm font-medium text-gray-700">Location</label>
                    <select
                        id="state"
                        className="border border-gray-300 rounded-md p-2"
                        onChange={(e) => handleFilterChange('state', e.target.value)}
                        value={filter.state || ''}
                    >
                        <option value="">Filter by Location</option>
                        <option value="NY">New York</option>
                        <option value="CA">California</option>
                        <option value="TX">Texas</option>
                        <option value="FL">California</option>
                        <option value="IL">Illinois</option>
                        <option value="WA">Washington</option>
                        <option value="OR">Oregeon</option>
                        <option value="NV">Nevada</option>
                        <option value="AZ">Arizona</option>
                        <option value="CO">Colorado</option>
                    </select>
                </div>

                <Button type="button" variant="borderMainBlue" onClick={clearFilters}>
                    Clear Filters
                </Button>
            </div>

            <div className="w-[1100px] space-y-4">
                {currentVendors.map((vendor, index) => (
                    <div className="bg-white shadow-md rounded-md p-4" key={index}>
                        <Vendor {...vendor} vendorId={vendor.vendorId} />
                    </div>
                ))}
            </div>

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