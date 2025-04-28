import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
export const RootLayout=()=>{

    return(
        <>
        <div>
            <main><Outlet/></main>
            <footer><Footer/></footer>
            
        </div>
        
        </>
    );

}