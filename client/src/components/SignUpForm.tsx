import { useState } from 'react';
import CustomInput from '../components/input';
import Button from '../components/button';
import { useNavigate } from 'react-router-dom';

interface SignUpFormProps {
  onSubmit: (data: any) => void;
  buttonText: string;
}

function SignUpForm({ onSubmit, buttonText }: SignUpFormProps) {
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [addressLine1, setAddressLine1] = useState<string>('');
  const [addressLine2, setAddressLine2] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [zipCode, setZipCode] = useState<string>('');  
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    try {
      onSubmit({
        fullName,
        email,
        phone,
        addressLine1,
        addressLine2,
        state,
        zipCode,
        password,
      });
      setSuccessMessage("Account successfully created!");
      setError('');
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setSuccessMessage('');
    }
  };

  const handleBackToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="flex flex-col w-full justify-center items-start shadow-lg p-10" style={{ paddingLeft: '12rem', paddingRight: '20rem' }}>
      <h1 className="font-semibold text-2xl text-gray-800" style={{ paddingBottom: '1rem' }}><strong>Create an account</strong></h1>
      {successMessage && (
        <p className="text-green-500 mt-2">{successMessage}</p>
      )}
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <div className="space-y-5 w-full mt-6">
        <CustomInput label="Full Name" inputType="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        <CustomInput label="Email" inputType="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <CustomInput label="Phone Number" inputType="number" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <CustomInput label="Address Line 1" inputType="text" value={addressLine1} onChange={(e) => setAddressLine1(e.target.value)} />
        <CustomInput label="Address Line 2" inputType="text" value={addressLine2} onChange={(e) => setAddressLine2(e.target.value)} />
        <CustomInput label="State" inputType="text" value={state} onChange={(e) => setState(e.target.value)} />
        <CustomInput label="Zip Code" inputType="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
        <CustomInput label="Password" inputType="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <CustomInput label="Confirm Password" inputType="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <div className="flex justify-between mt-4">
          <Button className="w-auto" variant="mainBlue" onClick={handleSubmit}>
            {buttonText}
          </Button>
        </div>
        <p className="text-sm text-gray-600 mt-6">
          Already have an account?{' '}
          <span className="text-mainBlue cursor-pointer" onClick={handleBackToLogin}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignUpForm;
