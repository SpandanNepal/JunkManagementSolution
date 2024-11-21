import React, { useState } from 'react';
import { FaCog, FaHome, FaQuestionCircle, FaSignOutAlt, FaTruck, FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useNotifications } from '../context/authcontext/NotificationContext';

interface HeaderProps {
  isLoggedIn: boolean;
  userRole: 'customer' | 'vendor';
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, userRole }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { notifications } = useNotifications();
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

  const handleLogoClick = () => {
    if (isLoggedIn) {
      if (userRole === 'customer') {
        navigate('/vendorsearchresult');
      } else if (userRole === 'vendor') {
        navigate('/vendordashboard');
      }
    }
  };

  return (
    <div className="py-4 px-2 bg-white bg-opacity-90 shadow-lg">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <div className="flex items-center cursor-pointer" onClick={handleLogoClick}>
          <FaTruck className="text-[#0058DC] text-2xl" />
          <span className="text-2xl font-extrabold text-[#0058DC] font-inter ml-2">JunkGer</span>
        </div>

        <div className="flex items-center space-x-6">
          {isLoggedIn && (
            <>
              <div className="relative">
                <button
                  onClick={handleBellClick}
                  className="text-xl"
                  aria-label="Show notifications"
                >
                  <span role="img" aria-label="bell">🔔</span>
                  {notifications.length > 0 && (
                    <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full px-1">{notifications.length}</span>
                  )}
                </button>

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

              <button
                onClick={toggleMenu}
                className="text-2xl text-black ml-8"
                aria-label="Open user menu"
              >
                <FaUserCircle />
              </button>
            </>
          )}
          {isLoggedIn && menuOpen && (
            <div className="absolute top-16 right-0 w-auto bg-white bg-opacity-80 shadow-lg z-10">
              <ul className="flex flex-col p-4">
                <li className="flex items-center py-2 text-black hover:text-[#0058DC] hover:bg-gray-200 transition-colors duration-200">
                  <FaHome className="mr-2" />
                  <a href="/customerProfile" aria-label="Go to Home">Home</a>
                </li>
                <li className="flex items-center py-2 text-black hover:text-[#0058DC] hover:bg-gray-200 transition-colors duration-200">
                  <FaCog className="mr-2" />
                  <a href="#settings" aria-label="Go to Settings">Settings</a>
                </li>
                <li className="flex items-center py-2 text-black hover:text-[#0058DC] hover:bg-gray-200 transition-colors duration-200">
                  <FaQuestionCircle className="mr-2" />
                  <a href="/help" aria-label="Go to Help">Help</a>
                </li>
                <li className="flex items-center py-2 text-black hover:text-[#0058DC] hover:bg-gray-200 transition-colors duration-200">
                  <FaSignOutAlt className="mr-2" />
                  <a href="/login" aria-label="Sign out">Signout</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;