import React from 'react'
import "../src/assets/css/styles.css";
import Navbar from './components/Navbar';
const Addbank = () => {
  function goBack() {
    window.history.back();
}
  return (
    <>
    <Navbar/>
    
   <section className="container section section__height" id="contactme">
 
  <div className="container">
  <div className="top-head">
    <i style={{color: 'black', fontSize: 20}} onClick={goBack} className="fa fa-arrow-left arrow" aria-hidden="true" />
    Add Bank
    </div>
    <div className="bank-add">
      <div className="form-user">
        <div className="row badd">
          <div className="col-4 uname">
            <span style={{color: 'red'}}>*</span>
            <span>Username</span>
          </div>
          <div className="col-8 ">
            <input className="inputfield" placeholder="Please enter your username" type="text" />
          </div>
        </div>
      </div>
      <div className="form-user">
        <div className="row badd">
          <div className="col-4 uname">
            <span style={{color: 'red'}}>*</span>
            <span>A/C No</span>
          </div>
          <div className="col-8 ">
            <input className="inputfield" placeholder="Please enter your ac no" type="text" />
          </div>
        </div>
      </div>
      <div className="form-user">
        <div className="row badd">
          <div className="col-4 uname">
            <span style={{color: 'red'}}>*</span>
            <span>Bank</span>
          </div>
          <div className="col-8 ">
            <input className="inputfield" placeholder="Please enter your bank name" type="text" />
          </div>
        </div>
      </div>
      <div className="form-user">
        <div className="row badd">
          <div className="col-4 uname">
            <span style={{color: 'red'}}>*</span>
            <span>Mail</span>
          </div>
          <div className="col-8 ">
            <input className="inputfield" placeholder="Please enter your email" type="text" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Addbank