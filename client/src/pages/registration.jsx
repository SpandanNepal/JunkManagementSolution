import { useState } from 'react';
import CustomInput from '../components/input'; 
import Button from '../components/Button'; 
import axios from 'axios';

function SignUp() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    
    try {
      const { data } = await axios.post('http://localhost:7777/api/auth/signup', {
        fullName,
        email,
        phone,
        addressLine1,
        addressLine2,
        state,
        zipCode,
        password,
        confirmPassword,
      });
      console.log('User registered:', data);
      setError('');
    } catch (error) {
      console.log(error);
      setError('An error occurred during sign up');
    }
  };

  return (
    <div className="flex justify-center items-center flex-row w-screen h-screen space-x-4 border-2 border-inherit">
      <div className="flex flex-col w-[386px] justify-center">
        <div className="flex flex-col p-4 w-full justify-center items-start">
          <h1 className="font-semibold text-[18px] mt-4 text-mainblack">Create an account</h1>

          <div className="flex flex-col space-y-5 w-full justify-center items-start">
            <div className="w-full space-y-2 mt-6">
              <CustomInput
                label="Full Name"
                inputType="text"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                errorMessage={error ? "Invalid name" : ""}
              />
              <CustomInput
                label="Email"
                inputType="text"
                placeholder="johndo@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                errorMessage={error ? "Invalid email" : ""}
              />
              <CustomInput
                label="Phone Number"
                inputType="tel"
                placeholder="123-456-7890"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                errorMessage={error ? "Invalid phone number" : ""}
              />
            </div>

            {/* Horizontal grouping for Address Line 1 and Address Line 2 */}
            <div className="w-full flex space-x-4">
              <CustomInput
                label="Address Line 1"
                inputType="text"
                variant="small"
                placeholder="123 Main St"
                value={addressLine1}
                onChange={(e) => setAddressLine1(e.target.value)}
              />
              <CustomInput
                label="Address Line 2"
                inputType="text"
                variant="small"
                placeholder="Apartment, suite, etc. (optional)"
                value={addressLine2}
                onChange={(e) => setAddressLine2(e.target.value)}
              />
            </div>

            {/* Horizontal grouping for State and Zip Code */}
            <div className="w-full flex space-x-4">
              <CustomInput
                label="State"
                inputType="text"
                variant="small"
                placeholder="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
              <CustomInput
                label="Zip Code"
                inputType="text"
                variant="small"
                placeholder="12345"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </div>

            {/* Horizontal grouping for Password and Confirm Password */}
            <div className="w-full flex space-x-4">
              <CustomInput
                label="Password"
                inputType="password"
                variant="small"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                errorMessage={error ? "Invalid password" : ""}
              />
              <CustomInput
                label="Confirm Password"
                inputType="password"
                variant="small"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                errorMessage={error ? "Passwords don't match" : ""}
              />
            </div>

            <Button className="w-full h-12 mt-6 mb-2" variant="mainBlue" onClick={handleSignup}>
              <span className="text-mainWhite">Sign Up</span>
            </Button>

            {/* Move the "Already have an account?" section here */}
            <h3 className="text-[14px] text-secondaryBlack mt-3 mb-8">
              <span className="opacity-20">Already have an account?</span>{' '}
              <button className="text-buttonGreen">Log in</button>
            </h3>
          </div>
        </div>
      </div>

      <div className="w-1/3 p-16 flex justify-center items-center">
        <img src={require('../assets/registration.png')} className="md:w-[400px] h-[400px]" alt="Sign Up" />
      </div>
    </div>
  );
}

export default SignUp;
