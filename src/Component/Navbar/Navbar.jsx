import React, { useState } from "react";
import "./Navbar.scss";
import { TbMenu2 } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [open, setOpen ] = useState(false)
    const user = true
  return (
    <nav>
      <div className="left">
       <Link to="/"> <span  className="logo">
          Lama
        </span></Link>
      <Link to="/">  <a href="">Home </a></Link>
      <Link to="/list">  <a href="">List </a></Link>
      <Link to="/about">  <a href="">About </a></Link>
      <Link to="/contact">  <a href="">Contact </a></Link>
      </div>
      <div className="right">
       {user? ( <div className="user">
        <div className="photoProfile">
        <img src="./Sushant.jpg" alt="" />
        <span>Sushant</span>
        </div>

        <Link to="/profile">   <div className=" profile">
         <button>Profile</button>
        </div>
        </Link>

       </div>): (<div><a href="" className="">
          Signup
        </a>
        <a href="" className="register">
          Login
        </a></div>)}
        <div className="menuIcon">
        <TbMenu2 className="icon"   onClick={()=>setOpen((prev) => !prev)}/>
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="">Home </a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Signup </a>
          <a href="">Login</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
