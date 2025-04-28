import { createBrowserRouter, createRoutesFromElements, Route, Router } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Landingpage } from "../pages/Landingpage";
import { RootLayout } from "./RootLayout";
import { Dashboard } from "../pages/Dashboard";
import { ProtectedRoute } from "../components/ProtectedRoute";

export const router=createBrowserRouter(createRoutesFromElements(
<Route path="/" element={<RootLayout/>}>
    <Route index element={<Landingpage/>}/>
    <Route path="login" element={<Login/>}/>
    <Route path="register" element={<Register/>}/>
    <Route path="/" element={<ProtectedRoute/>}>
       <Route path="dashboard"element={<Dashboard/>}/>
    </Route>
</Route>
));
