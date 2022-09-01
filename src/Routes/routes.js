import React from "react";
import LoggedIn from "../components/LoggedIn";
import Login from "../components/Login";
import Propose from "../components/Propose";
import Register from "../components/Register";

const routes = [
    {
        path:"/register",
        component: Register
    },
    {
        path:"/login",
        component: Login
        
    },
    {
        path:"/loggedIn",
        component: LoggedIn
        
    },
    {
        path:"/propose",
        component: Propose
        
    }
]
export default routes