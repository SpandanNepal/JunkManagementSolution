import React from 'react';
import { FaQuestionCircle, FaTrashAlt, FaHandPaper, FaSearch, FaTruck } from 'react-icons/fa';

const Help: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      {/* Title Section */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-[#0058DC]">Need Help with JUNKger?</h1>
        <p className="text-xl text-gray-700 mt-2">We're here to help you manage your junk effortlessly. Below are some common questions and answers.</p>
      </div>

      {/* FAQs Section */}
      <div className="space-y-4">
        <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-[#0058DC] flex items-center">
            <FaQuestionCircle className="mr-2" /> How do I dispose of my junk?
          </h2>
          <p className="text-gray-600 mt-2">
            Simply sign up, provide your address and a description of the junk you want to get rid of. Our team will
            review your request and connect you with the right vendor in your area to help you dispose of your junk.
          </p>
        </div>

        <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-[#0058DC] flex items-center">
            <FaTruck className="mr-2" /> Do I need to transport the junk myself?
          </h2>
          <p className="text-gray-600 mt-2">
            No, you don’t have to transport the junk yourself. Once you connect with a vendor, they will come to your
            location, assess the junk, and handle the removal for you.
          </p>
        </div>

        <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-[#0058DC] flex items-center">
            <FaSearch className="mr-2" /> How can I find the best junk removal vendors in my area?
          </h2>
          <p className="text-gray-600 mt-2">
            Our platform allows you to search for vendors based on your location. Simply enter your ZIP code, and you will
            be shown a list of vendors available in your area. You can read reviews and choose the one that fits your needs.
          </p>
        </div>

        <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-[#0058DC] flex items-center">
            <FaTrashAlt className="mr-2" /> What types of junk can I dispose of using the app?
          </h2>
          <p className="text-gray-600 mt-2">
            You can dispose of a variety of items, including furniture, electronics, appliances, yard waste, and construction
            debris. Just be sure to check our guidelines to make sure the items are acceptable.
          </p>
        </div>

        <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-[#0058DC] flex items-center">
            <FaHandPaper className="mr-2" /> How do I schedule a pickup?
          </h2>
          <p className="text-gray-600 mt-2">
            Once you've selected a vendor, you can schedule a pickup time that works best for you directly from their profile page.
            You can select a time slot that is most convenient and confirm the details before the vendor arrives.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="p-4 bg-[#0058DC] rounded-lg text-white text-center">
        <h2 className="text-2xl font-semibold">Still Have Questions?</h2>
        <p className="text-lg mt-2">Feel free to reach out to our support team for further assistance.</p>
        <button className="mt-4 px-6 py-2 bg-white text-[#0058DC] rounded-lg shadow-md hover:bg-gray-100 transition-colors">
          Contact Support
        </button>
      </div>
    </div>
  );
};

export default Help;