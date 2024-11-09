import React, { useState } from 'react';
import axios from 'axios';
import Button from '../components/button';

interface SendQuotationModalProps {
    isOpen: boolean;
    onClose: () => void;
    vendorName: string;
}

const SendQuotationModal: React.FC<SendQuotationModalProps> = ({ isOpen, onClose, vendorName }) => {
    const [price, setPrice] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSendQuotation = async () => {
        try {
            const response = await axios.post('http://localhost:7777/api/send-quotation', {
                price,
                message,
                vendorName,
            });
            console.log('Quotation sent successfully:', response.data);
            onClose(); // Close the modal after sending
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
