import React from 'react'
import Navbar from './components/Navbar'
import { NavLink, Link } from "react-router-dom";
import cover from '../src/assets/img/sinopec_c.jpg'; // Tell webpack this JS file uses this image

import "../src/assets/css/styles.css";
const Home = () => {
  return (
  
<>
<Navbar/>
<section className="container section section__height" id="home">
  <img src={cover}alt width="100%" height="100%" />
  <marquee className="mar_q">This text will scroll from right to left</marquee>
  <div className=" ">
    <div className="row g-2 px-3 py-2">
      <div className="col-6">
      <Link to="/recharge" class=" ">
        <div className="border list-item">
          <span className="col-6 list-name">Recharge</span>
          <i className="fas fa-wallet" style={{fontSize: 30}} />
        </div>
        </Link>
      </div>
      <div className="col-6 list-name">
      <Link to="/withdraw" class=" ">
        <div className="border list-item">
          <span className="col-6 list-name">Withdraw</span>
          <i className="fas  fa-money-bill-transfer" style={{fontSize: 30}} />
        </div>
        </Link>
      </div>
      <div className="col-6 list-name">
      <Link to="/recharge" class=" ">
        <div className="border list-item">
          <span className="col-6 list-name">Faq</span>
          <i className="fas fa-circle-down" style={{fontSize: 30}} />
        </div>
        </Link>
      </div>
      
      <div className="col-6 list-name">
      <Link to="../src/assets/img/sinopec_c.jpg" target="_blank" download class=" ">
        <div className="border list-item">
          <span className="col-6 list-name">Apk</span>
          <i className="fas fa-circle-down" style={{fontSize: 30}} />
        </div>
        </Link>
      </div>
    </div>
  </div>
  <div className="nav-pic row g-2 mt-3">
    <div className="col-12">
      <div data-v-58a58382 className="nav-item" style={{backgroundColor: 'rgb(94 238 117)', color: '#36a72c'}}>
        <i className="fas fa-database img-cls" style={{fontSize: 20}} /><span className="span-cls">Text tes</span>
      </div>
    </div>
    <div className="col-12">
      <div data-v-58a58382 className="nav-item" style={{backgroundColor: 'rgb(231 222 115)', color: '#9c710d'}}>
        <i className="fas fa-user img-cls" style={{fontSize: 20}} /><span className="span-cls">Text tes</span>
      </div>
    </div>
    <div className="col-12">
      <div data-v-58a58382 className="nav-item" style={{backgroundColor: 'rgb(148 97 235)', color: '#6905b2'}}>
        <i className="fas fa-bolt img-cls" style={{fontSize: 20}} /><span className="span-cls">Text tes</span>
      </div>
    </div>
  </div>
</section>

</>
  )
}

export default Home