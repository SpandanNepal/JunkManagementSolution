import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomInput from '../components/input';
import Button from '../components/button';
import CustomerHomepage from './CustomerHomepage';
import loginImage from '../assets/loginImage.png';
import { doSignInWithEmailAndPassword } from '../auth';

function Login() {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const [data, setData] = useState({ email: "", password: "" });
  const [loginValid, setLoginValid] = useState(false);

  // Regular expression for email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,}$/;

  // Validate Email and Password
  const validateForm = () => {
    let valid = true;
    if (!emailRegex.test(data.email)) {
      setError('Invalid email');
      valid = false;
    } else if (data.password.length < 6) {
      setError('Password must be at least 6 characters');
      valid = false;
    } else {
      setError(null);
    }
    return valid;
  };

  const handleLogin = async () => {
    // Validate the form before attempting to log in
    if (!validateForm()) {
      return;  // Stop here if validation fails
    }

    try {
      // Attempt to sign in with Firebase Authentication
      await doSignInWithEmailAndPassword(data.email, data.password);

      // If successful, navigate to the dashboard and set login as valid
      navigate('/dashboard');
      setLoginValid(true);
    } catch (error) {
      // If an error occurs, set the error message
      setError('Invalid credentials');
      console.error("Login error:", error);
    }
  };

  const navigateToSignUp = () => {
    // Navigate to the user selection page
    navigate('/selectuser');
  };

  if (loginValid) {
    return <CustomerHomepage />;
  } else {
    return (
      <div className="flex justify-center items-center w-full h-full bg-gray-100 p-4">
        {/* Left Side (Login Form) */}
        <div className="flex flex-col w-full max-w-md bg-white shadow-lg rounded-lg p-8 space-y-6">
          <div className="flex flex-col w-full">
            <h1 className="font-semibold text-2xl text-gray-800" style={{paddingBottom:'1rem'}}><strong>JUNKger Login</strong></h1>
            <h3 className="text-sm text-gray-600">Enter your credentials to access the account</h3>

            {/* Email Input */}
            <div className="w-full space-y-2">
              <CustomInput
                label="Email"
                inputType="email"
                placeholder="johndoe@gmail.com"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                errorMessage={ (!data.email || !emailRegex.test(data.email)) ? "Invalid email" : ""}
              />
            </div>

            {/* Password Input */}
            <div className="w-full space-y-2">
              <CustomInput
                label="Password"
                inputType="password"
                placeholder="******"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                errorMessage={!data.password ? "Password cannot be empty" : ""}
              />
              <h3 className="text-mainBlue text-sm text-right cursor-pointer mt-2">Forgot Password?</h3>
            </div>

            {/* Login Button */}
            <Button 
              className="w-full h-12 bg-mainBlue text-white hover:bg-blue-600 mt-6"
              onClick={handleLogin}
            >
              <span className="text-mainWhite">Log in</span>
            </Button>

            {/* Sign-up Option */}
            <div className="text-center text-sm text-gray-600 mt-4">
              <span className="mr-2">Don’t have an account?</span>
              <p
                className="text-mainBlue font-medium cursor-pointer inline border-b-2 border-transparent hover:border-mainBlue"
                onClick={navigateToSignUp}
              >
                Sign up
              </p>
            </div>
          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="w-1/2 p-16 flex justify-center items-center" style={{paddingLeft:'4rem'}}>
          <img src={loginImage} className="w-[250px] h-[250px] object-contain" alt="Login" />
        </div>
      </div>
    );
  }
}

export default Login;
