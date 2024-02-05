import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [username , setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const navigate = useNavigate()
    async function RegisterUser(){
        console.log('REgister user is hit');
        try{
            console.log('inside the try block');
            const response = await axios.post('http://localhost:3000/api/v1/user/signup',{
                username,
                password,
                firstname,
                lastname
            })
            const token = response.data.token 
            localStorage.setItem('token', token)
            console.log(`The token is ${token}`);
            navigate("/yourdashboard")
            console.log('after the usenavigate');
        }catch(err){
            console.log(err);
        }
    }
    
  return  (<div className="bg-white dark:bg-gray-800 min-h-screen flex items-center">
  <div className="w-full max-w-md mx-auto p-8 rounded-lg shadow-lg bg-gray-400">
    <h2 className="text-2xl font-semibold mb-4 ">
      Don't have an account? Register to access all the features:
    </h2>
    <p className="text-gray-800 mb-6">
      Manage your business in one place. It's free!
    </p>
    <form >
      <input
        type="text"
        name="name"
        placeholder="Your First Name"
        onChange={(e)=>{
            setFirstname(e.target.value)
        }}
        className="w-full p-2 mb-4 border rounded-md"
        required
      />
      <input
        type="text"
        name="name"
        placeholder="Your Last Name"
        onChange={(e)=>{
            setLastname(e.target.value)
        }}
        className="w-full p-2 mb-4 border rounded-md"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        onChange={(e)=>{
            setUsername(e.target.value)
        }}
        className="w-full p-2 mb-4 border rounded-md"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={(e)=>{
            setPassword(e.target.value)
        }}
        className="w-full p-2 mb-4 border rounded-md"
        required
      />
      <button
        type="button"
        className="w-full bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700"
        onClick={RegisterUser}
      >
        <p className='text-gray-300'>Register</p>
      </button>
    </form>
  </div>
</div>
);
};

export default SignUp;