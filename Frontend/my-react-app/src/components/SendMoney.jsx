import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
const SendMoney = () => {
  const location = useLocation()
  const { username, firstname, lastname } = location.state || {};

  useEffect(()=>{
    console.log(firstname+' '+lastname);
  },[firstname,lastname,username])

  const [amount , setAmount] = useState(0)
  const [id , setId] = useState("")
 
   async function transferAmount(){
      const token = localStorage.getItem('token')
      if(token){
        try{
          await axios.post('http://localhost:3000/api/v1/account/transfer',{
            to: id.toString(),
            amount: amount
          },{
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
        }catch(e){
          console.log(e);
        }
      }
   } 
 
  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Send Money</h2>
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700 font-bold mb-2">{username}</label>
        <p id="username" className="text-gray-900">{firstname+' '+lastname}</p>
      </div>
      <div className="mb-4">
        <label htmlFor="amount" className="block text-gray-700 font-bold mb-2">Amount to send</label>
        <input
          type="number"
          id="amount"
          className="block w-full p-2 border border-gray-300 shadow-md rounded-md"
          placeholder="Enter amount"
          onChange={(e)=>{
            setAmount(e.target.value)
          }}
        />
         <input
          type="text"
          id="to"
          className="block w-full p-2 border border-gray-300 shadow-md rounded-md"
          placeholder="Enter upi id"
          onChange={(e)=>{
            setId(e.target.value)
          }}
        />
      </div>
      <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={transferAmount}>
        Initiate Transfer
      </button>
    </div>
  );
}

export default SendMoney;