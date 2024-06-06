import React, { useContext, useState } from "react";
import "./Navbar.scss";
import { TbMenu2 } from "react-icons/tb";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const Navbar = () => {
  const [open, setOpen ] = useState(false)

  const {currentUser} = useContext(AuthContext)
  console.log(currentUser);
   
  return (
    <nav>
      <div className="left">
       <Link to="/"> <span  className="logo">
          Lama
        </span></Link>
      <Link to="/">  <a href="">Home </a></Link>
      <Link to="/list">  <a href="">List </a></Link>
      </div>
      <div className="right">
       {currentUser? ( <div className="user">
        <div className="photoProfile">
        <img src="./Sushant.jpg" alt="" />
        <span>Sushant</span>
        </div>

        <Link to="/profile">   <div className=" profile">
         <button>Profile</button>
        </div>
        </Link>

       </div>): (<div><a href="/register" className="">
          Signup
        </a>
        <a href="/login" className="register">
          Login
        </a></div>)}
        <div className="menuIcon">
        <TbMenu2 className="icon"   onClick={()=>setOpen((prev) => !prev)}/>
        </div>
        <div className={open ? "menu active" : "menu"}>
        <Link to="/">  <a href="">Home </a></Link>
      <Link to="/list">  <a href="">List </a></Link>
      <Link to="/profile">   <div className=" profile">
         <button>Profile</button>
        </div>
        </Link>  </div>
      </div>
    </nav>
  );
};

export default Navbar;
