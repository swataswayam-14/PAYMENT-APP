import React from "react";
import { Link } from "react-router-dom";
function Me() {
    return (
      <div>
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl text-white font-bold mb-4">Welcome to the payment application</h1>
        <p className="text-lg text-gray-200 mb-8">Built for the future, fast and secure</p>
        <button className="bg-gray-500 text-gray-200 hover:bg-gray-700 font-bold py-2 px-4 rounded mb-4">
            <Link to="/signup">Create a new account</Link>
        </button>
        <button className="bg-gray-500 text-gray-200 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
        <Link to="/signin">Already have an account</Link>
        </button>
      </div></div>
    );
  }

export default Me