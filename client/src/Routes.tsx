import { Routes, Route, useLocation } from 'react-router-dom';
import React from 'react';
import SelectUser from './pages/selectUserPage';
import Login from './pages/login';
import VendorSignUp from './pages/VendorSignUp';
import CustomerSignUp from './pages/CustomerSignUpPage';
import JunkDescriptionForm from './pages/junkDescriptionForm';
import VendorProfileForm from './pages/vendorProfileForm';
import CustomerHomepage from './pages/CustomerHomepage';
import VendorSearchResults from './pages/VendorSearchResults';
import Menu from './components/Menu';
import CustomerProfile from './pages/CustomerProfile';
import JunkDetails from './pages/JunkDetails';
import Help from './pages/Help';
import Header from './components/Header';
import VendorProfile from './pages/VendorProfile';
import SystemGeneratedQuote from './pages/SystemGeneratedQuote';
import VendorDashboard from './pages/VendorDashboard';
import CustomerQuotationBox from './components/dashboardHistoryBox';
import { NotificationProvider } from './context/authcontext/NotificationContext';

const AppRoutes: React.FC = () => {

  const location = useLocation();

  const pathsWithMenu = ['/junkdescriptionform', '/vendorsearchresult','/customerProfile','/junk-details/:id', '/VendorDashboard'];

  const shouldShowMenu = pathsWithMenu.includes(location.pathname);

  const loggedOutPaths = ['/selectuser', '/login', '/vendorsignup', '/customersignup'];

  const showHeaderMenu = !loggedOutPaths.includes(location.pathname);

  const handleAccept = () => {
    console.log('Quotation accepted');
  };

  const handleReject = () => {
    console.log('Quotation rejected');
  };

  const handleViewDetails = () => {
    console.log('Viewing details');
  };

  return (
    <NotificationProvider> {/* Wrap the routes with NotificationProvider */}
        {shouldShowMenu && <Menu isOpen={true} />} 
        <Header isLoggedIn={showHeaderMenu} userRole='customer'/>
        <Routes>
          <Route path="/selectuser" element={<SelectUser />} />
          <Route path="/help" element={<Help />} />
          <Route path="/*" element={<Login />} />
          <Route path="/vendorsignup" element={<VendorSignUp />} />
          <Route path="/customersignup" element={<CustomerSignUp />} />
          <Route path="/junkdescriptionform" element={<JunkDescriptionForm />} />
          <Route path="/vendorprofileform" element={<VendorProfileForm />} />
          <Route path="/customerhomepage" element={<CustomerHomepage />} />
          <Route path="/vendorsearchresult" element={<VendorSearchResults />} />
          <Route path="/vendordashboard" element={<VendorDashboard />} />
          <Route path="/customerProfile" element={<CustomerProfile />} />
          <Route path="/junk-details/:id" element={<JunkDetails />} />
          <Route path="/selectuser" element={<SelectUser />} />
          <Route path="/vendorProfile/:vendorId" element={<VendorProfile />} />
          <Route path="/system-generated-quote" element={<SystemGeneratedQuote />} />
          <Route path="*" element={<Login />} />
        </Routes>
    </NotificationProvider> 
  );
};

export default AppRoutes;
