import React from "react";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
    //localStorage.removeItem("token")
    let isLoggedIn = localStorage.getItem("token")

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;