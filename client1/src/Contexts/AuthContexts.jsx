import { children, createContext, useContext, useState ,useEffect} from "react";
import axios from "axios";

import {jwtDecode}  from "jwt-decode";
const AuthContext=createContext();
export const useAuth=()=>useContext(AuthContext);

export const AuthProvider=({children})=>{
    const [user,setUser]=useState(null);
    useEffect(()=>{
        const token=sessionStorage.getItem("token")
        if(token){
            const decode=jwtDecode(token);
            setUser(decode);
        }

    },[])
    const login=async(form)=>{
        try {
            console.log(form.body);
            const response=await axios.post("http://localhost:4000/main/login",form);
        
            console.log(response.data)
            if (!response.data.token) {
                throw new Error("No token received");
            }
            sessionStorage.setItem("token",response.data.token);
            console.log(response.data.token);
            const decode=jwtDecode(response.data.token)
            console.log("User state after login:", decode);
            console.log(decode);
            setUser(decode);
         } catch (error) {
            console.error("error in sending data",error.message)
         } 
    }
    const logout=()=>{
        sessionStorage.removeItem("token")
        setUser(null);
        
    }
    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    );

}

