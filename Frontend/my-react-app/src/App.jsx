import React from "react";
import SignUp from "./SignUpUpgraded";
import SignIn from "./SignInUpgraded";
import {BrowserRouter as Router , Route, Routes} from "react-router-dom"
import Dashboard from "./components/Dashboard";
import SendMoney from "./components/SendMoney";
import Me from "./components/Me";
import ProtectedRoute from "./ProtectedRoute";
function App(){
    return(
      <Router>

        <Routes>
            <Route path="/" element={<Me/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/sendmoney"
              element={
                <ProtectedRoute>
                  <SendMoney/>
                </ProtectedRoute>
              }
            />
        </Routes>
      </Router>
    )
}

export default App