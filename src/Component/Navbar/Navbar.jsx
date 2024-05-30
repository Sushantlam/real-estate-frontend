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
        <span href="/" className="logo">
          Lama
        </span>
        <a href="">Home </a>
        <a href="">About</a>
        <a href="">Contact</a>
      </div>
      <div className="right">
       {user? ( <div className="user">
        <div className="photoProfile">
        <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
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
