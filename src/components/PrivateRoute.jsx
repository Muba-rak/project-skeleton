import React from "react";
import { Navigate, Outlet } from "react-router-dom";
// install jsonwebtoken dotenv
// set .env - jWT_SECRET
// import jwt from 'jsonwebtoken'

const PrivateRoute = () => {
  const token = localStorage.getItem("token");
  //jwt.verify(token, process.env.JWT)

  const content = token ? <Outlet /> : <Navigate to="/login" />;
  return content;
};

export default PrivateRoute;
