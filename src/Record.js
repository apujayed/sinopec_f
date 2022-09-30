import React from 'react'
import "../src/assets/css/styles.css";
import Navbar from './components/Navbar';

const Record = () => {
  function goBack() {
    window.history.back();
}
  return (
    <>
<Navbar/>
<section class="container section section__height" id="contactme">
<div className="top-head">
    <i style={{color: 'black', fontSize: 20}} onClick={goBack} className="fa fa-arrow-left arrow" aria-hidden="true" />
    Recharge
    </div>
<div class="container rec-d">
  <div class="record-data-r">

  <div class="left-record">
    <div class="name-r">
      <span>jayed</span>
    </div>
    <div class="name-r">
      <span>Regular</span>
    </div>
    <div class="rec-date">
      <span>Date</span>
    </div>
    
  </div>
  <div class="right-record">
    <span>454545</span>
  </div>

  </div>
</div>


      </section>


    </>
  )
}

export default Record