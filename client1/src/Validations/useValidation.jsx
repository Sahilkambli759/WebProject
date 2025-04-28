import { useState } from "react"
export const useValidation=()=>{
    const[error,setError]=useState({
        email:"",
        password:"",
        phone:""

    });
    const emailValidation=(email)=>{
        const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            setError(prevData=>({...prevData,email:"invalid email address"}))
            return false
        }
        else{
            setError(prevData=>({...prevData,email:""}))
            return true
        }
    }
    const passwordValidation=(password)=>{
        let errors=[]
        if(!/\d/.test(password)){
            errors.push("the passoword must contain atleast 1 digits ")
        }
         if(!/[@#%^&*]/.test(password)){
            errors.push("the password must contain at least speacial characeters")
        }
        if (!/[A-Z]/.test(password)){
            errors.push("passowrd must contain atleast on capital letter")
        }
        if (errors.length > 0) {
            setError(prevData => ({ ...prevData, password: errors.join(" ") }));
            return false;
        }

        setError(prevData => ({ ...prevData, password: "" }));
        return true;
        
    }
    const phoneValidation=(phone)=>{
        const phoneValidation1=/^[6-9]\d{9}$/;
        if(!phoneValidation1.test(phone)){
            setError(prevData=>({...prevData,phone:"invalid phone number"}))
            return false
        }
        else{
            setError(prevData=>({...prevData,phone:""}))
            return true 
        }
    }
    return {error,passwordValidation,emailValidation,phoneValidation,setError}
}