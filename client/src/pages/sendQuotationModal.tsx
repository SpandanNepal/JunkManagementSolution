import React, { useState } from 'react';
import Button from '../components/button';
import { useNotifications } from '../context/authcontext/NotificationContext';

interface SendQuotationModalProps {
    isOpen: boolean;
    onClose: () => void;
    vendorName: string;
    vendorProfileLink: string; // The link to the vendor profile (or specific page)
    customerName: string; // The name of the customer sending the quotation
}

const SendQuotationModal: React.FC<SendQuotationModalProps> = ({
    isOpen,
    onClose,
    vendorName,
    vendorProfileLink,
    customerName
}) => {
    const [price, setPrice] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState(''); // State for success message
    const { addNotification } = useNotifications(); // Accessing the context to add notifications

    const handleSendQuotation = async () => {
        try {
            // Simulating quotation sending logic (e.g., without backend)
            console.log('Quotation sent to', vendorName);

            // Simulate notification for the vendor
            addNotification({
                id: `quotation-${new Date().getTime()}`, // Unique ID
                message: `${customerName} sent you a quotation`,
                sender: customerName,
                link: vendorProfileLink, // Link to the vendor's profile
                type: 'quotation-request',
                style: 'success',
            });

            // Set success message
            setSuccessMessage('Quotation sent successfully!');

            // Hide success message after 3 seconds
            setTimeout(() => {
                setSuccessMessage('');
                onClose(); // Close the modal after a successful send
            }, 3000);
        } catch (error) {
            console.error('Error sending quotation:', error);
            setError('Failed to send quotation. Please try again.');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-md w-80 shadow-lg">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Send Quotation</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        &times;
                    </button>
                </div>

                {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
                {successMessage && <p className="text-green-500 text-sm mb-2">{successMessage}</p>} {/* Display success message */}

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">Price</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0058DC]"
                        placeholder="Enter price"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">Additional Message</label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0058DC]"
                        placeholder="Enter additional message"
                        rows={3}
                        required
                    />
                </div>

                <Button
                    type="button"
                    variant="mainBlue"
                    className="w-full text-white py-2 rounded-md"
                    onClick={handleSendQuotation}
                >
                    Send
                </Button>
            </div>
        </div>
    );
};

export default SendQuotationModal;
