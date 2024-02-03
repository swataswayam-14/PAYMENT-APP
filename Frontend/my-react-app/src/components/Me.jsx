import React from "react";
import { Link } from "react-router-dom";
function Me() {
    return (
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen flex flex-col justify-center items-center bg-green-200">
        <h1 className="text-4xl font-bold mb-4">Welcome to the payment application</h1>
        <p className="text-lg text-gray-600 mb-8">Built for the future, fast and secure</p>
        <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded mb-4">
            <Link to="/signup">Create a new account</Link>
        </button>
        <button className="bg-green-700 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
        <Link to="/signin">Already have an account</Link>
        </button>
      </div>
    );
  }

export default Me