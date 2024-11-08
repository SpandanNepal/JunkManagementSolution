import AddressSearchBar from './AddressSearchBar';
import '../../src/index.css';

const CustomerHomepage: React.FC = () => {
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
                position: 'relative', // Ensure the container is positioned correctly
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 flex items-center justify-center h-full">
                <AddressSearchBar onSearch={handleAddressSearch} />
            </div>
        </div>
    );
};

export default CustomerHomepage;