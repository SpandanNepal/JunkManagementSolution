import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SignUpForm from '../components/SignUpForm';

function CustomerSignUp() {
  const navigate = useNavigate();

  const handleCustomerSignup = async (formData: any) => {
    try {
      const response = await axios.post('http://localhost:7777/api/customer/signup', formData);
      console.log('Customer registered:', response.data);
      navigate('/junkdescriptionform'); // Navigate to customer-specific page
    } catch (error) {
      console.error('Customer sign-up error:', error);
    }
  };

  return <SignUpForm onSubmit={handleCustomerSignup} buttonText="Sign Up as Customer" />;
}

export default CustomerSignUp;
