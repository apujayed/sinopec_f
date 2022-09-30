import React from 'react'
import logo from '../src/assets/img/logo.png'; // Tell webpack this JS file uses this image

const Signup = () => {
  function goBack() {
    window.history.back();
}
  return (
    <>
     <div className='container'>
     <div className="top-head">
    <i style={{color: 'black', fontSize: 20}} onClick={goBack} className="fa fa-arrow-left arrow" aria-hidden="true" />
    Recharge
    </div>
<div className="logo">
<img src={logo}alt  width="30%" height="30%" />
</div>

     <div className="form-user">
        <div className="row badd">
          <div className="col-2 uname">
          <i style={{color: 'black', fontSize: 17}} className="fa fa-user" aria-hidden="true" />
          </div>
          <div className="col-10 ">
            <input className="inputfield" placeholder="Name" type="text" />
          </div>
        </div>
      </div>
      <div className="form-user">
        <div className="row badd">
          <div className="col-2 uname">
          <i style={{color: 'black', fontSize: 17}} className="fa fa-phone" aria-hidden="true" />
          </div>
          <div className="col-10 ">
            <input className="inputfield" placeholder="Phone number" type="text" />
          </div>
        </div>
      </div>
      <div className="form-user">
        <div className="row badd">
          <div className="col-2 uname">
          <i style={{color: 'black', fontSize: 17}} className="fa fa-eye" aria-hidden="true" />
          </div>
          <div className="col-10 ">
            <input className="inputfield" placeholder="Password" type="text" />
          </div>
        </div>
      </div>
      <div className="form-user">
        <div className="row badd">
          <div className="col-2 uname">
            
            <i style={{color: 'black', fontSize: 17}} className="fa fa-eye" aria-hidden="true" />
          </div>
          <div className="col-10 ">
            <input className="inputfield" placeholder="Re-enter password" type="text" />
          </div>
        </div>
      </div>

      <div className="form-user">
        <div className="row badd">
          <div className="col-2 uname">
          <i style={{color: 'black', fontSize: 17}} className="fa fa-gift" aria-hidden="true" />
          </div>
          <div className="col-10 ">
            <input className="inputfield" placeholder="Refer code" type="text" />
          </div>
        </div>
      </div>
      <div className="send">
      <button className="send-button">Signup</button>
    </div>
     </div>
    </>
  )
}

export default Signup