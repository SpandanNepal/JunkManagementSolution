import React, { useState } from 'react';
import CustomInput from '../components/input'; 
import Button from '../components/Button'; 
import axios from 'axios';
import loginImage from '../assets/loginImage.png';

function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null); 

  const handleLogin = async () => {
    try {
      const { data } = await axios.post('http://localhost:7777/api/auth/signin', { email, password });
      console.log(data);
    } catch (error: any) {
      setError('Invalid credentials');
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center flex-row w-screen h-screen space-x-4 border-2 border-inherit bg-gray-100">
      <div className="flex flex-col w-[386px] justify-center bg-white shadow-lg rounded-lg p-6">
        <div className="flex flex-col w-full justify-center items-start">
          <h1 className="font-semibold text-[18px] mt-6 text-gray-800">Welcome back!</h1>
          <h3 className="text-[14px] text-gray-600">Enter your credentials to access the account</h3>

          <div className="flex space-y-5 flex-col w-full justify-center items-start mt-6">
            <div className="w-full space-y-2">
              <CustomInput
                label="Email"
                inputType="text"
                placeholder="johndo@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                errorMessage={error ? "Invalid email" : ""}
              />
            </div>
            <div className="w-full">
              <CustomInput
                label="Password"
                inputType="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                errorMessage={error ? "Invalid password" : ""}
              />
              <h3 className="text-mainBlue">Forgot Password?</h3>
            </div>
          </div>

          <Button className="w-full h-12 mt-6 mb-2 bg-mainBlue text-white hover:bg-blue-600" onClick={handleLogin}>
            <span className="text-mainWhite">Log in</span>
          </Button>
        </div>
      </div>

      <div className="w-1/3 p-16 flex justify-center items-center">
        <img src={loginImage}  className="md:w-[300px] h-[300px]" alt="Login" />
      </div>
    </div>
  );
}

export default Login;
