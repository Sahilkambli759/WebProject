import React from "react";
import { useAuth } from "../Contexts/AuthContexts";
import { Navigate, Outlet } from "react-router-dom";
export const ProtectedRoute=()=>{
    const {user}=useAuth();
  return(user?<Outlet/>:<Navigate to="login"/>);
}