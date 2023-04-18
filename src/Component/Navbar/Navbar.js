import React from "react";
import { Link } from "react-router-dom";
import Style from './Navbar.module.css'

export default function Navbar() {
   return (

    <div className={Style.Navbar}>
  <Link className={Style.link} to='/'>Home</Link>
  <Link className={Style.link} to='/contact'>Contact</Link>
  <Link className={Style.link} to='/task'>Task</Link>
    </div>
   )  
}