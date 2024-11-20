import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Chart, ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';
import { useNotifications } from '../context/authcontext/NotificationContext';
import SendQuotationModal from './sendQuotationModal';
import CustomerQuotationBox from '../components/dashboardHistoryBox';

Chart.register(ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const VendorDashboard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const [vendorName, setVendorName] = useState('Vendor Name'); // Vendor name
  const [vendorProfileLink, setVendorProfileLink] = useState('/vendor-profile'); // Vendor profile link
  const [customerName, setCustomerName] = useState('Customer Name'); // Customer name
  
  const navigate = useNavigate();

  const [quotationRequests, setQuotationRequests] = useState([
    { id: 1, profilePicture: 'path/to/image1.jpg', customerName: 'John Doe', address: '123 Main St' },
    { id: 2, profilePicture: 'path/to/image2.jpg', customerName: 'Jane Smith', address: '456 Elm St' },
  ]);

  const donutData = {
    labels: ['Quotations Received', 'Remaining'],
    datasets: [
      {
        data: [quotationRequests.length, 100 - quotationRequests.length],
        backgroundColor: ['#0058DC', '#E0E0E0'],
      },
    ],
  };

  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Monthly Quotations',
        data: [2, 3, 1, 5, 4, 3, 6, 2, 4, 7, 5, 3],
        backgroundColor: '#0058DC',
      },
    ],
  };

  // Function to handle the "Accept" button click
  const handleAccept = (customerName: string, vendorProfileLink: string) => {
    setCustomerName(customerName);
    setVendorProfileLink(vendorProfileLink);
    setIsModalOpen(true); // Open the modal when Accept is clicked
  };

  const handleReject = (id: number) => {
    setQuotationRequests(quotationRequests.filter((request) => request.id !== id));
    console.log(`Rejected quotation request with ID: ${id}`);
  };

  // Function to navigate to the customer profile page
  const handleViewDetails = (customerId: string) => {
    navigate(`/customerProfile/${customerId}`);
  };

  return (
    <div className="flex-grow p-6 bg-gray-100 overflow-auto">
      <h1 className="text-2xl font-bold mb-6">Vendor Dashboard</h1>

      <div className="flex justify-between mb-6">
        <div className="w-1/2 p-4 bg-white shadow-md rounded-md mr-4">
          <h2 className="text-lg font-semibold mb-2">Total Quotations Received</h2>
          <Doughnut data={donutData} />
        </div>
        <div className="w-1/2 p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Monthly Quotations</h2>
          <Bar data={barData} />
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-md font-semibold mb-4">Quotation Requests</h2>
        <div className="space-y-4 overflow-y-auto h-96">
          {quotationRequests.map((request) => (
            <CustomerQuotationBox
              key={request.id}
              profilePicture={request.profilePicture}
              customerName={request.customerName}
              address={request.address}
              onAccept={() => handleAccept(request.customerName, '/vendor-profile')} // Pass customer name and vendor profile link to the modal
              onReject={() => handleReject(request.id)}
              onViewDetails={() => handleViewDetails(request.customerName)}
            />
          ))}
        </div>
      </div>

      {/* Conditionally render the modal */}
      {isModalOpen && (
        <SendQuotationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)} // Close the modal when triggered
          vendorName={vendorName}
          vendorProfileLink={vendorProfileLink}
          customerName={customerName}
        />
      )}
    </div>
  );
};

export default VendorDashboard;
