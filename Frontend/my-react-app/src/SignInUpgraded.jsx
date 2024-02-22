import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
let currentUser
const SignIn = () => {
    const [username , setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    async function SignInUser(){
        try{
            const response = await axios.post('13.233.95.171/api/v1/user/signin', {
                username,
                password
            })
            const token = response.data.token
            currentUser = response.data.user
            console.log(currentUser);
            localStorage.setItem('token', token)
            navigate("/yourdashboard")
        }catch(err){
            console.log('There is some error');
        }
    }
    
  return  (<div className="bg-white dark:bg-gray-800 min-h-screen flex items-center">
  <div className="w-full max-w-md mx-auto p-8 rounded-lg shadow-lg bg-gray-400">
    <h2 className="text-2xl font-semibold mb-4">
      Login to access all the features:
    </h2>
    <p className="text-gray-600 mb-6">
      Manage your business in one place. It's free!
    </p>
    <form >
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
        onClick={SignInUser}
      >
        <p className='text-gray-300'>Login</p>
      </button>
    </form>
  </div>
</div>
);
};

export {currentUser, SignIn}
