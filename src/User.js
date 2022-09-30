import React, { useState, useEffect, useRef, useContext } from "react";
import "../src/assets/css/styles.css";
import Navbar from './components/Navbar';
import { Context } from "./context/Store";
import { NavLink, Link,useNavigate } from "react-router-dom";
const User = () => {
  const {getUserbalance,userBal} = useContext(Context);
  const navigate = useNavigate();
  const Logout = () =>{
    sessionStorage.setItem('Auth', 'apu');
    navigate('/')
  }

  const str = localStorage.getItem("userInfo");

// convert string to valid object
const parsedObj = JSON.parse(str);
const userId = parsedObj[0].id;
const uname = parsedObj[0].name;
const num = parsedObj[0].phone;
const pkg = parsedObj[0].pname;

let lastFourDigits = num.substr(-4);
const cusid= userId+lastFourDigits;

useEffect(() => {
  getUserbalance(userId);

}, [])

console.log(userBal);
  return (
    
    <>
    
    <Navbar/>
 <section className="container section section__height" id="portfolio">

  <div className="container ">
    <div className="user-head">
      <div data className="head_info">
        <div style={{position: 'absolute', right: 14, top: 16}} className="noti">
          <i style={{color: 'white'}} className="fa fa-bell" aria-hidden="true" />
        </div>
        <div className="user-icon">
          <i style={{color: 'white', marginTop: 125}} className="fa fa-bell" aria-hidden="true" />
          <div className="row">
            <span className="id" style={{color: 'white',fontStyle:'bold',fontSize:'14px'}}>
              ID: {cusid}
            </span>
            <div className="ac-in">
              <span className="ac" style={{color: 'white',fontStyle:'bold',fontSize:'12px'}}>
                PACKAGE: {pkg}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="money-info ">
      <div className="pd">
        <div className="nav-name">
          {userBal.recharge}
        </div>
        <div className="count">
          Recharge
        </div>
      </div>
      <div className="pd">
        <div className="nav-name">
        {userBal.reward}
        </div>
        <div className="count">
          Reward
        </div>
      </div>
      <div className="pd">
        <div className="nav-name">
        {userBal.withdraw}
        </div>
        <div className="count">
          Withdraw
        </div>
      </div>
    </div>
    <div className="container acinfo">
      <div className="row mt-3">
        <div className="col-4 bottom-item">
          <div className="b-icon">
            <i style={{color: '#68cc94', fontSize: 25}} className="fa fa-cloud-download" aria-hidden="true" />
          </div>
          <div className="b-name">App download</div>
        </div>
        <div className="col-4 bottom-item">
          <div className="b-icon">
          <Link to="/record" class=" ">
            <i style={{color: '#d98282', fontSize: 25}} className="fa fa-book" aria-hidden="true" />
            </Link>
          </div>
          <div className="b-name">Record</div>
        </div>
        <div className="col-4 bottom-item">
          <div className="b-icon">
          <Link to="/reward" class=" ">
            <i style={{color: '#e07eda', fontSize: 25}} className="fa fa-gift" aria-hidden="true" />
            </Link>
          </div>
          <div className="b-name">Gift</div>
        </div>
        
        <div className="col-4 bottom-item">
        
          <div className="b-icon">
          <Link to="/addbank" class=" ">
            <i style={{color: '#5b9bf0', fontSize: 25}} className="fa fa-university" aria-hidden="true" />
            </Link>
          </div>
       
          <div className="b-name">Banks</div>
        </div>
       

        <div className="col-4 bottom-item">
          <div className="b-icon">
            <i style={{color: '#89573c', fontSize: 35}} className="fa fa-tablet" aria-hidden="true" />
          </div>
          <div className="b-name">Devices</div>
        </div>

        <div className="col-4 bottom-item">
          <div className="b-icon">
            <i style={{color: '#8e8fe8', fontSize: 35}} className="fa fa-users" aria-hidden="true" />
          </div>
          <div className="b-name">Team</div>
        </div>

        <div className="col-4 bottom-item">
          <div className="b-icon">
          <Link to="/password" class=" ">
            <i style={{color: '#696969', fontSize: 35}} className="fa fa-key" aria-hidden="true" />
            </Link>
          </div>
          <div className="b-name">Password</div>
        </div>

        <div className="col-4 bottom-item">
          <div className="b-icon">
            <i style={{color: '#b5b172', fontSize: 35}} className="fa fa-dollar" aria-hidden="true" />
          </div>
          <div className="b-name">Withdraw</div>
        </div>

        <div className="col-4 bottom-item">
          <div className="b-icon" onClick={Logout}>
            <i style={{color: '#b5b5b5', fontSize: 25}} className="fa fa-sign-out" aria-hidden="true" />
          </div>
          <div className="b-name">Signout</div>
        </div>

        

      </div>
    </div>
  </div></section>


    </>
  )
}

export default User