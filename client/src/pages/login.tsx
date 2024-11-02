import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import CustomInput from '../components/input'; 
import Button from '../components/button'; 
import CustomerHomepage from './CustomerHomepage';
import axios from 'axios';
import loginImage from '../assets/loginImage.png';

function Login() {
  const [error, setError] = useState<string | null>(null); 
  const navigate = useNavigate(); 

  const [data, setData] = useState({ email: "", password: "" });
  const [loginValid, setLoginValid] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axios.post("https://junk-management-solution-server.vercel.app/login", {
        collection: "login",
        docData: data,
      });
      console.log(response)
      navigate('/dashboard');
      setLoginValid(!loginValid)
    } catch (error) {
      setError('Invalid credentials');
      console.error(error);
    }
  };

  if (loginValid ) {
    return <CustomerHomepage />
  } else {
  return (
    <div className="flex justify-center items-center flex-row w-screen h-full space-x-4 border-2 border-inherit bg-gray-100">
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
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                errorMessage={error ? "Invalid email" : ""}
              />
            </div>
            <div className="w-full">
              <CustomInput
                label="Password"
                inputType="password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
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

      <div className="w-1/2 p-16 flex justify-center items-center">
        <img src={loginImage}  className="w-[200px] h-[200px]" alt="Login" />
      </div>
    </div>
  );
}

}

export default Login;
