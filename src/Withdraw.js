import React, { useState, useEffect, useRef, useContext } from "react";
import { Context } from "./context/Store";
import "../src/assets/css/styles.css";
import Navbar from './components/Navbar';
import swal from 'sweetalert';
const Withdraw = () => {
  const {getWithdrawrecord,withdraw,userBal,withDrawreq} = useContext(Context);


  const alert = (props,name)=>{
    swal({
      title: "Your withdraw amount - "+name+'?',
      text: "Are you sure to withdraw",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
     
      if (willDelete) {
        // updatePackage(props);

        if(pass===withdrawData.pass){
          withDrawreq(withdrawData);
          swal("Request Successfull", {
            icon: "success",
          });
          getWithdrawrecord(userId);
        } else{
          swal("wrong Credential", {
            icon: "warning",
          });
        }
       
      
  
      } else {
       
      }
    });
   }
  function goBack() {
    window.history.back();
}  const str = localStorage.getItem("userInfo");

// convert string to valid object
const parsedObj = JSON.parse(str);
const userId = parsedObj[0].id;
const uname = parsedObj[0].name;
const num = parsedObj[0].phone;
const pkg = parsedObj[0].pname;
const pass = parsedObj[0].password;

const balanc = userBal.reward - userBal.withdraw;

const [withdrawData, setWIthdrawdata] = useState({
  user_id:userId,
  acno: "",
  pass: "",
  amount:"",

});

let name, value;
const getUserData = (event) => {
  name = event.target.name;
  value = event.target.value;

  setWIthdrawdata({ ...withdrawData, [name]: value });
};


useEffect(() => {
  getWithdrawrecord(userId);

}, [])

  return (
    <>
    <Navbar/>
 <section>

  <div className="container withdraw">
  <div className="top-head">
    <i style={{color: 'black', fontSize: 20}} onClick={goBack} className="fa fa-arrow-left arrow" aria-hidden="true" />
    Withdraw
    </div>
    <div className="w-amount">
      <span style={{fontSize: 16, color: '#28d0a7', fontWeight: 700}}>Tk</span>
      <span style={{fontSize: 30, color: '#28d0a7', fontWeight: 700}}>{balanc}</span>
    </div>
    <div className="wtype">
      <span style={{fontSize: 20, color: '#000', fontWeight: 700}}>Bank</span>
    </div>
    <div className="s-button">
      <select name="acno" onChange={getUserData} value={withdrawData.acno} className="drop_bank" >
        <option value>Select your bank</option>
        <option value="saab">01796194791</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </div>
    <div className="amount-box">
      <input type="text" name="amount" onChange={getUserData} value={withdrawData.amount} className="amount-field" placeholder="Please enter the withdrawal value" />
    </div>
    <div className="row badd">
        <div className="col-2 uname">
          <i style={{color: 'black', fontSize: 20}} className="fa fa-eye" aria-hidden="true" />
        </div>
        <div className="col-10">
          <input className="inputfield" name="pass" onChange={getUserData} value={withdraw.pass} placeholder="Please enter new password" type="password" />
        </div>
      </div>
    <div className="send">
      <button className="send-button" onClick={alert}>Send</button>
    </div>
  </div>
  <div style={{marginTop:'20px'}} className="wtitle">
    <span style={{fontSize: 16, color: '#000',marginLeft:'15px'}}>Withdraw Record</span>
  </div>
  <div className="container rec-d">
  {
  
  withdraw.map((item,i)=>{
    return(

    <div className="record-data-r">
      <div className="left-record">
        <div className="name-r">
          <span>{item.amount}</span>
        </div>
        <div className="rec-date">
          <span>{item.timestamp}</span>
        </div>
      </div>
      <div className="right-record">
        <span className={item.status==='Confirmed'?'status_s':'status_p'}>{item.status}</span>
      </div>
    </div>
 
    )
})
}
</div>
</section>



    </>
  )
}

export default Withdraw