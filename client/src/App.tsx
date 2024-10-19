// src/App.tsx
import './App.css';
import './index.css';
import './output.css';
import CustomerHomepage from './pages/CustomerHomepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import SignUp from './pages/registration';
// import Vendor from './pages/Vendor';
import VendorProfileForm from './pages/vendorProfileForm';
import VendorSearchResults from './pages/VendorSearchResults';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define your routes */}
        <Route path="/" element={<CustomerHomepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        {/* <Route path="/vendor" element={<Vendor />} /> */}
        {/* <Route path="" element={<VendorProfileForm />} /> */}
        <Route path="/search-results" element={<VendorSearchResults />} />
      </Routes>
    </Router>
  );
}

export default App;