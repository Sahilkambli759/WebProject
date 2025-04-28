import React from "react";
import { useNavigate } from "react-router-dom";
import '../Css/commonpages.css';
export const Landingpage=()=>{
     const navigate=useNavigate();
    return(
        <>
        <div className="landingContainer">
            <h1> welcome to landing page </h1>
            <p> please login or register to continue </p>
            <div className="btn-ctn">
                <button onClick={()=>navigate("register")}>register </button>
                <button onClick={(()=>navigate("login"))} >login </button>
            </div>
        </div>
        </>
    );

}