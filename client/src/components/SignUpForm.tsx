import { useState } from 'react';
import CustomInput from '../components/input';
import Button from '../components/button';

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

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    onSubmit({ fullName, email, phone, addressLine1, addressLine2, state, zipCode, password });
  };

  return (
    <div className="flex flex-col w-full justify-center items-start">
      <h1 className="font-semibold text-[18px] mt-4 text-mainblack">Create an account</h1>
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
        
        <Button className="w-full h-12 mt-6" variant="mainBlue" onClick={handleSubmit}>
          <span className="text-mainWhite">{buttonText}</span>
        </Button>

        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </div>
  );
}

export default SignUpForm;
