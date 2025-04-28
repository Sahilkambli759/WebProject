import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import { AnimatePresence } from "framer-motion";
import { AuthProvider } from "./Contexts/AuthContexts";

function App() {
  return(
      <AnimatePresence mode="wait">
        <AuthProvider> 
          <RouterProvider router={router}/>
        </AuthProvider>
      </AnimatePresence>
  
  )
}

export default App;
