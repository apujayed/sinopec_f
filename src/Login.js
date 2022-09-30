import React, { useState, useEffect, useRef, useContext } from "react";
import logo from "../src/assets/img/logo.png"; // Tell webpack this JS file uses this image
import { NavLink, useNavigate , Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import Axios from "axios";
import { Context } from "./context/Store";

import NextNProgress from "nextjs-progressbar";


const Login = () => {
    const {serverUrl} =
    useContext(Context);
    const [userdata, setUserdata] = useState([]);
    const navigate = useNavigate();
const cookie =localStorage.getItem("cookies");
    



const LoginVerify  = async(props)  => {
  sessionStorage.setItem('Auth', 'apu');
  // e.preventDefault();
  Axios.post(serverUrl+`/login`, {
    data: props,
  }).then((response) => {
    setUserdata(response.data);
// console.log(response.data.length);
if(response.data.length===1){
  const jsonObj = JSON.stringify(response.data);
  sessionStorage.setItem('Auth', true);
  localStorage.setItem("userInfo", jsonObj);
  setTimeout(() => {
    navigate('/home')
  }, 1000);

   } else{
    sessionStorage.setItem('Auth', 'apu');
    console.log('clear');
    
   }
  });
};


    const login = async (loginData)=>{
        await LoginVerify(loginData);
        
        console.log(cookie);
      
     
    }

    const [loginData, setLogindata] = useState({
        user: "",
        pass: "",
     
      });
      
      let name, value;
    const getUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
      
        setLogindata({ ...loginData, [name]: value });
      };
  return (
    <>
    <NextNProgress
  color="#29D"
  startPosition={0.3}
  stopDelayMs={200}
  height={3}
  showOnShallow={true}
/>
      <div className="container justify-content-center align-item-center">
        <div className="logo">
          <img src={logo} alt width="30%" height="30%" />
        </div>
        <div className="form-user">
          <div className="row badd">
            <div className="col-2 uname">
              <i
                style={{ color: "black", fontSize: 17 }}
                className="fa fa-phone"
                aria-hidden="true"
              />
            </div>
            <div className="col-10">
              <input
            //   id="user"
              name="user"
              onChange={getUserData}
              value={loginData.user}
                className="inputfield"
                placeholder="Please enter your email"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="form-user">
          <div className="row badd">
            <div className="col-2 uname">
              <i
                style={{ color: "black", fontSize: 17 }}
                className="fa fa-eye"
                aria-hidden="true"
              />
            </div>
            <div className="col-10 ">
              <input
            //   id="pass"
              name="pass"
              value={loginData.pass}
              onChange={getUserData}
                className="inputfield"
                placeholder="Please enter your password"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="send">
     
          <button className="send-button" onClick={()=>login(loginData)}>Login</button>
        </div>
    
          <p className="SignNavi">Create Account</p>
      
      </div>
    </>
  );
};

export default Login;
