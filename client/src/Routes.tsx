import { Routes, Route, useLocation } from 'react-router-dom';
import SelectUser from './pages/selectUserPage';
import Login from './pages/login';
import VendorSignUp from './pages/VendorSignUp';
import CustomerSignUp from './pages/CustomerSignUpPage';
import JunkDescriptionForm from './pages/junkDescriptionForm';
import VendorProfileForm from './pages/vendorProfileForm';
import CustomerHomepage from './pages/CustomerHomepage';
import VendorSearchResults from './pages/VendorSearchResults';
import Menu from './pages/Menu';
import CustomerProfile from './pages/CustomerProfile';
import React from 'react';
import JunkDetails from './pages/JunkDetails';
import Header from './pages/Header';
import Help from './pages/Help';

const AppRoutes: React.FC = () => {

  const location = useLocation();

  const pathsWithMenu = ['/junkdescriptionform', '/vendorprofileform', '/vendorsearchresult','/customerProfile','/junk-details/:id'];

  const shouldShowMenu = pathsWithMenu.includes(location.pathname);

  const loggedOutPaths = ['/selectuser', '/login', '/vendorsignup', '/customersignup'];

  const showHeaderMenu= !loggedOutPaths.includes(location.pathname);
    
  return (
    <div>
      {shouldShowMenu && <Menu isOpen={true} />} 
      <Header isLoggedIn={showHeaderMenu} />
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
      <Route path="/customerProfile" element={<CustomerProfile />} />
      <Route path="/junk-details/:id" element={<JunkDetails />} />
      <Route path="*" element={<Login />} />
    </Routes>
    </div>
  );
};

export default AppRoutes;
