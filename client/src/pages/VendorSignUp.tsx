// VendorSignUp.tsx
import { useNavigate } from 'react-router-dom';
import SignUpForm from '../components/SignUpForm';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';

function VendorSignUp() {
  const navigate = useNavigate()
  const handleVendorSignup = async (formData: any) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;
      // Update user profile with full name
      await updateProfile(user, { displayName: formData.fullName });

      // Save additional information like phone, address in your Firestore (optional)
      // You can add a function here to save data in Firestore if needed.

      console.log('User registered:', user);

      navigate('/dashboard');
    } catch (error) {
      console.log(error);
    }
  }

  return <SignUpForm onSubmit={handleVendorSignup} buttonText="Sign Up as a Vendor" />;
}

export default VendorSignUp;
