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
            navigate("/dashboard")
            console.log('after the usenavigate');
        }catch(err){
            console.log(err);
        }
    }
    
  return  (<div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 min-h-screen flex items-center">
  <div className="w-full max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg bg-gradient-to-r from-green-700 via-green-300 to-yellow-300">
    <h2 className="text-2xl font-semibold mb-4">
      Don't have an account? Register to access all the features:
    </h2>
    <p className="text-gray-600 mb-6">
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
        className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600"
        onClick={RegisterUser}
      >
        <p className='text-black'>Register</p>
      </button>
    </form>
  </div>
</div>
);
};

export default SignUp;