import React from "react";
import { useState } from "react";
import '../Css/commonpages.css';
import { useAuth } from "../Contexts/AuthContexts";
import { useNavigate } from "react-router-dom";

import { useValidation } from "../Validations/useValidation";
export const Login=()=>{
const [form,setForm]=useState({
        email:"",
        password:""
    });

    const {error,setError,emailValidation,passwordValidation}=useValidation();    
    const navigate=useNavigate();
    const {login,user}=useAuth();
    if (user) {
        navigate("/dashboard");
        return null; // ✅ Prevents rendering the login page
    }
    const handleChange=(e)=>{
        
        const {name,value}=e.target;
        setForm(prevData=>({...prevData,[name]:value}));
    }
    const handleSubmit=async(e)=>{
      e.preventDefault();
    //   passwordValidation(form.password);
    //   emailValidation(form.email);
      await login(form);
      navigate("/dashboard");
    }
    return(
        <div className="loginContainer">
        <form onSubmit={handleSubmit} className="formAlign">
            
            <h1> Login Page</h1>
            <div className="formrow">
            <input placeholder="enter the email" onBlur={()=>emailValidation(form.email)} name="email" value={form.email} onChange={handleChange}/>
            {error.email &&(<p style={{color:"red"}}>  {error.email}</p>)}
            <br/>
            <input placeholder="enter the password"  onBlur={()=>passwordValidation(form.password)} name="password" value={form.password} onChange={handleChange}/>
            {error.password&&(<p style={{color:"red"}}>  {error.password}</p>)}
            </div>
            <button className="loginButton" type="submit">login</button>
        </form>

        </div>
    );

}