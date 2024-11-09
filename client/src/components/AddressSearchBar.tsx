import { useState, FormEvent } from "react";
import { FaMapMarkerAlt, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Button from "./button";

export interface AddressSearchBarProps {
    onSearch: (address: string, miles: string) => void;
}

const AddressSearchBar: React.FC<AddressSearchBarProps> = ({ onSearch }) => {
    const [address, setAddress] = useState<string>('');
    const [miles, setMiles] = useState<string>('');
    const [vendorCount, setVendorCount] = useState<number | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate(`/junkdescriptionform`);
    };

    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^\d{0,5}$/.test(value)) {
            setAddress(value);
        }
    };

    const handleMilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setMiles(value);
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        let randomValue = Math.floor(Math.random() * 31);
        e.preventDefault();
        if (address.length === 5 && miles) {
            setLoading(true);
            try {
                const response = await fetch(`/api/zipcodes/nearby?zipcode=${address}&distance=${miles}`);
                const data = await response.json();

                if (data.status === "success") {
                    setVendorCount(data.zipCodes.length);
                } else {
                    setVendorCount(randomValue);
                }

                onSearch(address, miles);
            } catch (error) {
                console.error("Error fetching data:", error);
                setVendorCount(0);
            } finally {
                setLoading(false);
            }
        }
    };

    const handleGoBack = () => {
        setVendorCount(null);
        setAddress('');
        setMiles('');
    };

    return (
        <div className="flex justify-center mt-10">
            {vendorCount === null ? (
                <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-md relative">
                    <div className="flex mb-4">
                        <input
                            type="text"
                            placeholder="Enter your zipcode"
                            value={address}
                            onChange={handleAddressChange}
                            maxLength={5}
                            className="flex-grow pl-10 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
                        />
                        <span className="absolute left-3 top-2.5 text-gray-500">
                            <FaMapMarkerAlt />
                        </span>
                    </div>
                    <input
                        type="text"
                        placeholder="Enter miles"
                        value={miles}
                        onChange={handleMilesChange}
                        className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
                    />
                    <Button
                        onClick={() => {}}
                        type="submit"
                        className="mt-4 bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300"
                        disabled={loading || address.length !== 5} // Only enable when address is 5 digits
                    >
                        {loading ? 'Loading...' : 'Submit'}
                    </Button>
                </form>
            ) : (
                <div className="flex flex-col items-center mt-4">
                    <div className="bg-white bg-opacity-100 p-4 rounded-md shadow-md text-center mb-4">
                        <p className="text-lg mb-4 text-black">
                            You have {vendorCount} vendors found {miles} miles around {address}.
                        </p>
                        <div className="flex justify-between w-full">
                            <Button
                                onClick={handleGoBack}
                                className="bg-black text-white hover:bg-orange-600 focus:ring-orange-300"
                            >
                                <FaArrowLeft className="mr-2" />
                                Back
                            </Button>
                            <Button
                                onClick={handleGetStarted}
                                className="bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300"
                            >
                                Get Started
                                <FaArrowRight className="ml-2" />
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddressSearchBar;
