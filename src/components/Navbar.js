import React from 'react'
import { NavLink, Link } from "react-router-dom";
import "../assets/css/styles.css"
const Navbar = () => {
  return (
    <div>
    <header class="header" id="header">
     <nav class="nav container">
      
       <a href="#" class="nav__logo">Sinopec</a>

       <div class="nav__menu" id="nav-menu">
         <ul class="nav__list">
           <li class="nav__item">
             <Link to="/home" class="nav__link ">
               <i class="bx bx-home-alt nav__icon"></i>
               <span class="nav__name">Home</span>
             </Link>
           </li>

           <li class="nav__item">
           <Link to="/package" class="nav__link ">
               <i class="bx bx-package nav__icon"></i>
               <span class="nav__name">Package</span>
             </Link>
           </li>

           <li class="nav__item">
           <Link to="/recharge" class="nav__link ">
               <i class="bx bx-dollar nav__icon"></i>
               <span class="nav__name">Recharge</span>
               </Link>
           </li>

           <li class="nav__item">
           <Link to="/about" class="nav__link ">
               <i class="bx bx-briefcase-alt nav__icon"></i>
               <span class="nav__name">About</span>
               </Link>
           </li>

           <li class="nav__item">
           <Link to="/userinfo" class="nav__link ">
               <i class="bx bx-user-circle nav__icon"></i>
               <span class="nav__name">Account</span>
               </Link>
           </li>
         </ul>
       </div>

       <i class="bx bx-user-circle nav__icon nav__img"></i>
     </nav>
   </header>

  </div>
  )
}

export default Navbar