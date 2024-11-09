import React from 'react';
import { Chart, ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';
import CustomerQuotationBox from '../components/dashboardHistoryBox';

Chart.register(ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const VendorDashboard: React.FC = () => {
  const quotationRequests = [
    { id: 1, profilePicture: 'path/to/image1.jpg', customerName: 'John Doe', address: '123 Main St' },
    { id: 2, profilePicture: 'path/to/image2.jpg', customerName: 'Jane Smith', address: '456 Elm St' },
  ];

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

  return (
    <div className="flex-grow p-6 bg-gray-100 overflow-auto">
      <h1 className="text-2xl font-bold mb-6">Vendor Dashboard</h1>
      <div className="flex justify-between mb-6">
        <div className="w-1/2 p-4 bg-white shadow-md rounded-lg mr-4">
          <h2 className="text-lg font-semibold mb-2">Total Quotations Received</h2>
          <Doughnut data={donutData} />
        </div>
        <div className="w-1/2 p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Monthly Quotations</h2>
          <Bar data={barData} />
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-4">Quotation Requests</h2>
        <div className="space-y-4 overflow-y-auto h-96">
          {quotationRequests.map((request) => (
            <CustomerQuotationBox
              key={request.id}
              profilePicture={request.profilePicture}
              customerName={request.customerName}
              address={request.address}
              onAccept={() => {}}
              onReject={() => {}}
              onViewDetails={() => {}}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VendorDashboard;
