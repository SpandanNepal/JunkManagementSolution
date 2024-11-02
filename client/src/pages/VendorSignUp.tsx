// VendorSignUp.tsx
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SignUpForm from '../components/SignUpForm';

function VendorSignUp() {
  const navigate = useNavigate();

  const handleVendorSignup = async (formData: any) => {
    try {
      const response = await axios.post('http://localhost:7777/api/vendor/signup', formData);
      console.log('Vendor registered:', response.data);
      navigate('/vendorprofileform'); 
    } catch (error) {
      console.error('Vendor sign-up error:', error);
    }
  };

  return <SignUpForm onSubmit={handleVendorSignup} buttonText="Sign Up as Vendor" />;
}

export default VendorSignUp;
