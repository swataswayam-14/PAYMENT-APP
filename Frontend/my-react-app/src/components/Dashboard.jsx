import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await axios.get('http://localhost:3000/api/v1/user/bulk');
      setUsers(response.data.user);
    }
    if(localStorage.token){
      fetchUsers();
    }
  }, []);

  return (
    <div className='bg-green-300'>
      <h1 className="text-3xl font-bold text-center p-10 bg-green-200">Dashboard</h1>
      <div className=" p-4 h-screen items-center justify-center">
      <input
          type='text'
          placeholder='Search'
          className='block w-1/2 p-2 mx-auto mb-4 border border-gray-300 shadow-md rounded-md'
      />
      <ul className="bg-green-300 mt-4">
        {users.map((user) => (
        <li key={user._id} className="flex items-center justify-between py-2">
      <div className="flex items-center bg-green-300">
        <div className="flex-shrink-0">
          <img
            className="h-12 w-12 rounded-full"
            src="https://www.w3schools.com/w3css/img_avatar2.png"
            alt="User Avatar"
          />
        </div>
        <div className="ml-3">
          <p className="text-gray-900">{user.username}</p>
          <p className="text-gray-600">{user.firstname} {user.lastname}</p>
        </div>
        </div>
    <div>
      <Link to={`/sendmoney`} className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Send Money
      </Link>
    </div>
  </li>
))}
      </ul>
    </div>
    </div>
  );
}

export default Dashboard;