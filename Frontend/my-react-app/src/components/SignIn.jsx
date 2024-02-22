import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
function SignIn(){
    const [username, setUsername] = useState("")
    const [password , setPassword] = useState("")
    async function SignInUser(){
        try{
            const response = await axios.post('https://d2jhsbb933j31i.cloudfront.net/13.233.95.171:3000/api/v1/user/signin', {
                username,
                password
            })
            const token = response.data.token
            localStorage.setItem('token', token)
        }catch(err){
            console.log('There is some error');
        }
    }
    return <div className="flex h-screen items-center justify-center bg-green-200">
        <div className="w-full max-w-sm">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-green-300">
          <h2 className="text-2xl font-medium text-center mb-4">Sign In</h2>
          <input
            type="text"
            placeholder="Username"
            className="block w-full p-2 mb-4"
            onChange={(e)=>{
                setUsername(e.target.value)
            }}
          />
          <input
            type="password"
            placeholder="Password"
            className="block w-full p-2 mb-4"
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
          />
          <button onClick={SignInUser} className="w-full p-2 bg-blue-500 text-white rounded bg-yellow-500">
          <Link to="/dashboard"><p className='text-black'>Sign In</p></Link>
          </button>
        </form>
        </div>

    </div>
}

export default SignIn