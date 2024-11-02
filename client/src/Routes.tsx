import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SelectUser from './pages/selectUserPage';
import Login from './pages/login';
import SignUp from './pages/registration';
import VendorSignUp from './pages/VendorSignUp';
import CustomerSignUp from './pages/CustomerSignUpPage';
import JunkDescriptionForm from './pages/junkDescriptionForm';
import VendorProfileForm from './pages/vendorProfileForm';
import CustomerHomepage from './pages/CustomerHomepage';
import VendorSearchResults from './pages/VendorSearchResults';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/selectuser" element={<SelectUser />} />
      <Route path="/login" element={<Login />} />
      <Route path="/vendorsignup" element={<VendorSignUp />} />
      <Route path="/customersignup" element={<CustomerSignUp />} />
      <Route path="/junkdescriptionform" element={<JunkDescriptionForm />} />
      <Route path="/vendorprofileform" element={<VendorProfileForm />} />
      <Route path="/customerhomepage" element={<CustomerHomepage />} />
      <Route path="/vendorsearchresult" element={<VendorSearchResults />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
