import React from 'react';
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

const AppRoutes: React.FC = () => {

  const location = useLocation();

  const pathsWithMenu = ['/junkdescriptionform', '/vendorprofileform', '/vendorsearchresult','/customerProfile'];

  const shouldShowMenu = pathsWithMenu.includes(location.pathname);
    
  return (
    <div>
      {shouldShowMenu && <Menu isOpen={true} />} 
    <Routes>
      <Route path="/selectuser" element={<SelectUser />} />
      <Route path="/dashboard" element={<CustomerHomepage />} />
      <Route path="/*" element={<Login />} />
      <Route path="/vendorsignup" element={<VendorSignUp />} />
      <Route path="/customersignup" element={<CustomerSignUp />} />
      <Route path="/junkdescriptionform" element={<JunkDescriptionForm />} />
      <Route path="/vendorprofileform" element={<VendorProfileForm />} />
      <Route path="/customerhomepage" element={<CustomerHomepage />} />
      <Route path="/vendorsearchresult" element={<VendorSearchResults />} />
      <Route path="/customerProfile" element={<CustomerProfile />} />
    </Routes>
    </div>
  );
};

export default AppRoutes;
