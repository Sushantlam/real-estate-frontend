import React, { useState } from "react";
import "./Navbar.scss";
import { TbMenu2 } from "react-icons/tb";

const Navbar = () => {

    const [open, setOpen ] = useState(false)
  return (
    <nav>
      <div className="left">
        <span href="/" className="logo">
          Lama
        </span>
        <a href="">Home </a>
        <a href="">About</a>
        <a href="">Contact</a>
      </div>
      <div className="right">
        <a href="" className="">
          Signup
        </a>
        <a href="" className="register">
          Login
        </a>
        <div className="menuIcon">
        <TbMenu2 className="icon" onClick={()=>setOpen((prev) => !prev)}/>
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
