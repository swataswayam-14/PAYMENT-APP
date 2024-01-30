import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const SignUp = () => {
    const [username , setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")

    async function RegisterUser(){
        try{
            const response = await axios.post('http://localhost:3000/api/v1/user/signup',{
                username,
                password,
                firstname,
                lastname
            })
            const token = response.data.token 
            localStorage.setItem('token', token)
            console.log(`The token is ${token}`);
        }catch(err){
            console.log(err);
        }
    }
    
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-full max-w-sm">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-medium text-center mb-4">Sign Up</h2>
          <input
            onChange={(e)=>{
              setUsername(e.target.value)
            }}
            type="text"
            placeholder="Username"
            className="block w-full p-2 mb-4"
          />
          <input
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            type="password"
            placeholder="Password"
            className="block w-full p-2 mb-4"
          />
          <input
            onChange={(e)=>{
                setFirstname(e.target.value)
            }}
            type="text"
            placeholder="First Name"
            className="block w-full p-2 mb-4"
          />
          <input
            onChange={(e)=>{
                setLastname(e.target.value)
            }}
            type="text"
            placeholder="Last Name"
            className="block w-full p-2 mb-4"
          />
          <button onClick={RegisterUser} className="w-full p-2 bg-blue-500 text-white rounded">
          <Link to="/dashboard" onClick={RegisterUser}>Sign Up</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;