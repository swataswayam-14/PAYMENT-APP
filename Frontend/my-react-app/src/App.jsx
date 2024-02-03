import React from "react";
import SignUp from "./SignUpUpgraded";
import SignIn from "./SignInUpgraded";
import {BrowserRouter as Router , Route, Routes} from "react-router-dom"
import Dashboard from "./components/Dashboard";
import SendMoney from "./components/SendMoney";
import Me from "./components/Me";
import ProtectedRoute from "./ProtectedRoute";
import CheckBalance from "../CheckBalance";
import YourDashboard from "../YourDashboard";
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
              path="/checkbalance"
              element={
                <ProtectedRoute>
                  <CheckBalance/>
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
              <Route
              path="/yourdashboard"
              element={
                <ProtectedRoute>
                  <YourDashboard/>
                </ProtectedRoute>
              }
            />
        </Routes>
      </Router>
    )
}

export default App