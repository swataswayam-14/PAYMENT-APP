import React from 'react';

const SendMoney = () => {
  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Send Money</h2>
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
        <p id="username" className="text-gray-900">JohnDoe</p>
      </div>
      <div className="mb-4">
        <label htmlFor="amount" className="block text-gray-700 font-bold mb-2">Amount to send</label>
        <input
          type="text"
          id="amount"
          className="block w-full p-2 border border-gray-300 shadow-md rounded-md"
          placeholder="Enter amount"
        />
      </div>
      <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
        Initiate Transfer
      </button>
    </div>
  );
}

export default SendMoney;