import React, { useState, useEffect, useRef, useContext } from "react";

import "../src/assets/css/styles.css";
import Navbar from './components/Navbar';
import swal from 'sweetalert';
import { Context } from "./context/Store";
const Package = () => {
  const {getPackage,packages,updatePackage} =
  useContext(Context);

useEffect(() => {
  getPackage();
console.log(packages);
}, [])

  
 const alert = (props,name)=>{
  swal({
    title: "Are you sure to upgrade Pkg- "+name+'?',
    text: "Once you upgrade package, you will not be able to downgrade",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {

    if (willDelete) {
      updatePackage(props);
      swal("Successfully upgraded", {
        icon: "success",
      });
    

    } else {
     
    }
  });
 }
  return (
    <>
        <Navbar/>

<section className="container section section__height" id="about">

{
  
  packages.map((item,i)=>{

return(
<div className="card mt-3" style={{width: '100%'}}>
    <div className="card-head">
    <i className="fas fa-archive item-card-logo" style={{fontSize: 20}} />
        <h5 className="item-card">Generation time : 24 hours</h5>
      <button className="item-card-button" onClick={()=>alert(item.id,item.name)}>Upgrade</button>
    </div>
    <hr className="hr" />
    <div className="card-body">
      <div className="item-body-info">
        <div className="item-body-list">
          <span className="i-2">Name</span>
          <span className="i-1">{item.name}</span>
        </div>
        <div className="item-body-list">
          <span className="i-2">Daily Income</span>
          <span className="i-1">{item.income}Tk</span>
        </div>
        <div className="item-body-list">
          <span className="i-2">Rent Price</span>
          <span className="i-1">{item.rent}Tk</span>
        </div>
        <div className="item-body-list">
          <span className="i-2">Minimum Withdraw</span>
          <span className="i-1">{item.m_withdraw}Tk</span>
        </div>
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

export default Package