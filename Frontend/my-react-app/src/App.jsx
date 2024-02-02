import React from "react";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import {BrowserRouter as Router , Route, Routes} from "react-router-dom"
import Dashboard from "./components/Dashboard";
import SendMoney from "./components/SendMoney";
import Me from "./components/Me";

function App(){
    return(
      <Router>
        <Routes>
            <Route path="/" element={<Me/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/sendmoney" element={<SendMoney/>}/>
        </Routes>
      </Router>
    )
}

export default App