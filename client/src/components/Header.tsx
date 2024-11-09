import React, { useState } from 'react';
import { FaTruck, FaUserCircle } from 'react-icons/fa'; // Importing the Profile icon
import { useNavigate } from 'react-router-dom';
import { useNotifications } from '../context/authcontext/NotificationContext';

const Header: React.FC<{ isLoggedIn: boolean }> = ({ isLoggedIn }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { notifications, getNotifications } = useNotifications();
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();

  const handleBellClick = () => {
    setShowNotifications((prev) => !prev);
  };

  const handleNotificationClick = (link: string) => {
    navigate(link);
    setShowNotifications(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="py-4 px-2 bg-white bg-opacity-90 shadow-lg">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto"> {/* padding: 16px */}
        {/* Logo Section */}
        <div className="flex items-center">
          <FaTruck className="text-[#0058DC] text-2xl" />
          <span className="text-2xl font-extrabold text-[#0058DC] font-inter ml-2">JunkGer</span>
        </div>

        {/* Right Section - User and Notifications */}
        <div className="flex items-center space-x-6"> {/* Increased space between icons */}
          {isLoggedIn && (
            <>
              {/* Notification Button */}
              <div className="relative">
                <button onClick={handleBellClick} className="text-xl">
                  <span role="img" aria-label="bell">🔔</span>
                  {notifications.length > 0 && (
                    <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full px-1">{notifications.length}</span>
                  )}
                </button>

                {/* Notifications Dropdown */}
                {showNotifications && (
                  <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md w-64 z-10">
                    {notifications.length > 0 ? (
                      notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className="p-2 cursor-pointer hover:bg-gray-200 rounded-md"
                          onClick={() => handleNotificationClick(notification.link)}
                        >
                          <p className="text-sm font-medium">{notification.sender}: {notification.message}</p>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-gray-500">No new notifications</p>
                    )}
                  </div>
                )}
              </div>

              {/* Profile Button (Replaced FaBars with FaUserCircle for profile) */}
              <button onClick={toggleMenu} className="text-2xl text-black ml-8"> {/* Increased margin-left for more spacing */}
                <FaUserCircle />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
