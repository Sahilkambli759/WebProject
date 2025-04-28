import React from "react";
import '../Css/commonpages.css';
import { useAuth } from "../Contexts/AuthContexts";
export const Dashboard=()=>{
    const {logout}=useAuth();
    const {user}=useAuth();
    return(
        <>
        <h1> this is the dasboard {user.email}</h1>
        <button onClick={()=>logout()}> logout </button>
        </>
    );

}