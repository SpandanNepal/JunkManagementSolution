// src/components/Header.tsx

import React, { useState } from 'react';
import { FaBars, FaBell, FaTruck } from 'react-icons/fa';
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
    <div className="py-6" style={{ paddingLeft: '2rem', paddingRight: '12rem' }}>
      <div className="flex items-center justify-between bg-white bg-opacity-90 relative px-6 py-2">
        <div className="flex items-center">
          <FaTruck className="text-[#0058DC] text-2xl" />
          <span className="text-2xl font-extrabold text-[#0058DC] font-inter ml-2">JUNKger</span>
        </div>

        <div className="flex items-center space-x-3">
          {isLoggedIn && (
            <>
              <div className="notification-container">
                <button onClick={handleBellClick}>
                <span>🔔</span> {/* Bell Icon */}
                {notifications.length > 0 && <span className="notification-count">{notifications.length}</span>}
            </button>

            {showNotifications && (
                <div className="notification-dropdown">
                {notifications.length > 0 ? (
                    notifications.map((notification) => (
                    <div key={notification.id} className="notification-item" onClick={() => handleNotificationClick(notification.link)}>
                        <p>{notification.sender}: {notification.message}</p>
                    </div>
                    ))
                ) : (
                    <p>No new notifications</p>
                )}
                </div>
            )}
        </div>          
              <button onClick={toggleMenu} className="text-black relative">
                <FaBars className="text-2xl ml-2" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
