import { useNavigate } from 'react-router-dom';
import React from 'react';
function YourDashboard() {
  const navigate = useNavigate();

  return (
    <div className='bg-white dark:bg-gray-800'>
        <h1 className='text-4xl text-center text-gray-300 font-bold p-4'>Your Dashboard</h1>
    <div className="h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-800">
      <button
        className="p-4 py-4 bg-coral-black text-gray-700 rounded-full hover:bg-blue-600 text-lg"
        onClick={() => navigate('/checkbalance')}
      >
        <p className='text-gray-900 font-bold'>Check Balance</p>
      </button>
      <br/>
      <br/>
      <br/>
      <button
        className="w-50 bg-coral-black text-gray-700 py-4 p-4 rounded-full hover:bg-blue-600 text-lg"
        onClick={() => navigate('/dashboard')}
      >
        <p className='text-gray-900 font-bold'>Transfer Money</p>
      </button>
    </div></div>
  );
}
export default YourDashboard