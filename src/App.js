import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import Package from "./Package";
import Recharge from "./Recharge";
import User from "./User";
import Withdraw from "./Withdraw";
import Addbank from "./Addbank";
import Record from "./Record";
import Reward from "./Reward";
import Password from "./Password";
import PrivateRoutes from "./components/PrivateRoutes";
import About from "./About";
function App() {
 const ls =  localStorage.getItem('Auth');
 console.log(ls+'d');
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route element={<PrivateRoutes />}>
        <Route path={"/home"} element={<Home />} />
          
            </Route>
          
            <Route element={<PrivateRoutes />}>
        <Route path={"/about"} element={<About />} />
          
            </Route>
            <Route path={"/"} element={<Login />} />
            <Route path={"/signup"} element={<Signup />} />
            <Route path={"/package"} element={<Package />} />
            <Route path={"/recharge"} element={<Recharge />} />
            <Route path={"/userinfo"} element={<User />} />
            <Route path={"/withdraw"} element={<Withdraw />} />
            <Route path={"/addbank"} element={<Addbank />} />
            <Route path={"/record"} element={<Record />} />
            <Route path={"/reward"} element={<Reward />} />
            <Route path={"/password"} element={<Password />} />
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
