import { useNavigate } from 'react-router-dom';
import React from 'react';
function YourDashboard() {
  const navigate = useNavigate();

  return (
    <div className='bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500'>
        <h1 className='text-4xl text-center'>Your Dashboard</h1>
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
      <button
        className="w-50 bg-blue-500 text-white py-2 p-4 rounded-full hover:bg-blue-600 text-lg"
        onClick={() => navigate('/checkbalance')}
      >
        Check Balance
      </button>
      <br/>
      <br/>
      <br/>
      <button
        className="w-50 bg-blue-500 text-white py-2 p-4 rounded-full hover:bg-blue-600 text-lg"
        onClick={() => navigate('/dashboard')}
      >
        Transfer Money
      </button>
    </div></div>
  );
}
export default YourDashboard