import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { currentUser } from '../SignInUpgraded';
function Dashboard() {
  const [users, setUsers] = useState([]);
  const [searchValue , setSearchValue] = useState('')
  const [balance , setBalance] = useState("")
    useEffect(()=>{
        async function getBalance(){
            const token = localStorage.getItem('token')
            if(token){
                try{
                    const response = await axios.get('http://localhost:3000/api/v1/account/balance',{
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    })
                    setBalance(response.data.balance)
                }catch(e){
                    console.log(e);
                }

            }
        }
        getBalance()
    },[])
  useEffect(() => {
    async function fetchUsers() {
      const response = await axios.get('http://localhost:3000/api/v1/user/bulk');
      setUsers(response.data.user);
    }
    if(localStorage.getItem('token')){
      fetchUsers();
    }
  }, []);


  return (
    <div>
      <h1 className="text-3xl text-gray-300 font-bold text-center p-10 bg-white dark:bg-gray-800">Dashboard</h1>
      <div className='flex justify-between px-10'><div>
        <button className="bg-gray-500 text-gray-200 hover:bg-gray-700 text-white font-bold p-3 rounded" onClick={()=>{
        }}><Link to="/yourdashboard">Go to Home</Link></button>
        
        </div><button onClick={()=>{
            localStorage.removeItem('token')
          }} className="bg-gray-500 text-gray-200 hover:bg-gray-700 text-white font-bold p-3 rounded">
          <Link to="/">Logout</Link>
      </button></div>
      <div className='bg-gray-600 w-35 h-22 flex items-center justify-center mx-auto w-4/6 rounded-full'><h2 className='text-gray-200 font-bold p-4'>Your balance is Rs.{balance}</h2></div>
      <div className=" p-4 h-screen items-center justify-center bg-white dark:bg-gray-800">
      <input
          type='text'
          placeholder='Search'
          value={searchValue}
          onChange={(e)=>{
            setSearchValue(e.target.value)
          }}
          className='block w-1/2 p-2 mx-auto mb-4 border border-gray-300 shadow-md rounded-md'
      />
      <ul className="bg-white dark:bg-gray-700 mt-4">
        {users.filter((user )=>
          user.username.toLowerCase().includes(searchValue.toLowerCase()) && (user.username != currentUser)
        ).map((user) => (

        <li key={user._id} className="flex items-center justify-between py-2 bg-white dark:bg-gray-700">
      <div className="flex items-center bg-white dark:bg-gray-700">
        <div className="flex-shrink-0 bg-white dark:bg-gray-700">
          <img
            className="h-12 w-12 rounded-full"
            src="https://www.w3schools.com/w3css/img_avatar2.png"
            alt="User Avatar"
          />
        </div>
        <div className="ml-3 bg-white dark:bg-gray-700">
          <p className="text-gray-300">{user.username}</p>
          <p className="text-gray-400">{user.firstname} {user.lastname}</p>
        </div>
        </div>
    <div>
    
    <Link to={{ pathname: '/sendmoney', state: { username: user.username, firstname:user.firstname , lastname:user.lastname } }} className="bg-gray-600 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
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