import React, { useState, useEffect, useRef, useContext } from "react";
import { Context } from "./context/Store";
import "../src/assets/css/styles.css";
import Navbar from './components/Navbar';
const Recharge = () => {
  function goBack() {
    window.history.back();
}
const str = localStorage.getItem("userInfo");

// convert string to valid object
const parsedObj = JSON.parse(str);
const userId = parsedObj[0].id;
const uname = parsedObj[0].name;
const num = parsedObj[0].phone;
const pkg = parsedObj[0].pname;
  const {getRecharge,recharge} =
  useContext(Context);
  useEffect(() => {
    getRecharge(userId);

  }, [])
  return (
    <>
    
      <Navbar/>
   <section className="container section section__height" id="skills">
    <div className="top-head">
    <i style={{color: 'black', fontSize: 20}} onClick={goBack} className="fa fa-arrow-left arrow" aria-hidden="true" />
    Recharge
    </div>

  <div className="container">
    <div className="  row ">
      <div className="col-4 amount-box">
        <span>1200</span>
      </div>
      <div className="col-4 amount-box">
        <span>1200</span>
      </div>
      <div className="col-4 amount-box">
        <span>1200</span>
      </div>
      <div className="col-4 amount-box">
        <span>1200</span>
      </div>
      <div className="col-4 amount-box">
        <span>1200</span>
      </div>
      <div className="col-4 amount-box">
        <span>1200</span>
      </div>
    </div>
  </div>
  <div className="amount-tot">
    <span>1200</span>
  </div>
  <span style={{color: '#a4a4a4'}}>Recharge Record</span>

  
{
  
  recharge.map((item,i)=>{

return(
  <div className="container record">
  <div className="item-list">
    <div className="left">
      <span className="name">{item.amount}</span>
      <span className="date">{item.status}</span>
    </div>
    <div className="right">
      <span className="name">{item.timestamp}</span>
    </div>
  </div>
</div>

)
})
  }


 
</section>


    </>
  )
}

export default Recharge