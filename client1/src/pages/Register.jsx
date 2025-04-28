import React, { useState } from "react";
import '../Css/commonpages.css';
import axios from "axios";
import { useAuth } from "../Contexts/AuthContexts";
import { useNavigate } from "react-router-dom";
import { useValidation } from "../Validations/useValidation";
export const Register=()=>{
    const [form,setForm]=useState({
        username:"",
        email:"",
        password:""
    });
    const {error,setError,emailValidation,passwordValidation}=useValidation();
    const {login}=useAuth();
    const navigate=useNavigate();
    const [message,setmessage]=useState(false);
    const handleChange=(e)=>{
        e.preventDefault();
        const {name,value}=e.target;
        setForm(prevData=>({...prevData,[name]:value}));
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const email1=emailValidation(form.email)
            const password1=passwordValidation(form.password)
            if(!email1||!password1){
                return
            }
            const response=await axios.post("http://localhost:4000/main/register",form);
            console.log(response.data);
            await login(form);
            navigate("/dashboard"); 
        } catch (error) {
            console.error("error in submitting the data",error.message);
        }
    }
    
    return(
        <div className="registerContainer">
        {!message&&
        <form onSubmit={handleSubmit} className="formAlign">
            <h1> Register</h1>
            <div className="formrow">
            <input placeholder="enter the username" name="username" value={form.username} onChange={handleChange}/>
            
            <input onBlur={()=>emailValidation(form.email)} placeholder="enter the email" name="email" value={form.email} onChange={handleChange}/>
            {error.email &&(<p style={{color:"red"}}>  {error.email}</p>)}
            <input onBlur={()=>passwordValidation(form.password)} type="password"placeholder="enter the password" name="password"value={form.password} onChange={handleChange}/>
            {error.password &&(<p style={{color:"red"}}>  {error.password}</p>)}
            </div>
            <button type="submit">submit</button>
        </form>}
        {message && <h1> user registered successfully </h1>}
        </div>
    );

}