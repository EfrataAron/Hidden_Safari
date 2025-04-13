import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ component }) => {
  const isAuthenticated = localStorage.getItem("authToken"); // Check if token exists
  return isAuthenticated ? component : <Navigate to="/login" />;
};

export default ProtectedRoute;
