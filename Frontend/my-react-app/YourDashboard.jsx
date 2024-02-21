import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';
function YourDashboard() {
  const navigate = useNavigate();

  return (
    <div className='bg-white dark:bg-gray-800 relative'>
        <h1 className='text-4xl text-center text-gray-300 font-bold p-4'>HOME</h1>
        <div className="flex justify-between top-0 right-0">
          <div></div>
          <button onClick={()=>{
            localStorage.removeItem('token')
          }} className="bg-gray-500 text-gray-200 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          <Link to="/">Logout</Link>
          </button>
          <div></div>
        </div>
        <div className="h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-800">
          <button
            className="p-4 py-4 bg-coral-black text-gray-700 rounded-full hover:bg-blue-600 text-lg"
            onClick={() => navigate('/checkbalance')}
          >
            <p className='text-gray-400 text-3xl font-bold'>Check Balance</p>
          </button>
          <br/>
          <br/>
          <br/>
          <button
            className="w-50 bg-coral-black text-gray-700 py-4 p-4 rounded-full hover:bg-blue-600 text-lg"
            onClick={() => navigate('/dashboard')}
          >
            <p className='text-gray-400 text-3xl font-bold'>Transfer Money</p>
          </button>
    </div></div>
  );
}
export default YourDashboard