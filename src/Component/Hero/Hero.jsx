import React from 'react'
import "./Hero.scss";
import bg from  "../../../public/bg.png";
import SearchBar from '../Search/Search';
const Hero = () => {
  return (
    <div className="homePage">
    <div className="textContainer">
      <div className="wrapper">
        <h1 id="title" >Find Home From Us From Where Your Dream Fulfils</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          explicabo suscipit cum eius, iure est nulla animi consequatur
          facilis id pariatur fugit quos laudantium temporibus dolor ea
          repellat provident impedit!
        </p>

        <SearchBar/>
       
        <div className="boxes">
          <div className="box">
            <h1>16+</h1>
            <h2>Years of Experience</h2>
          </div>
          <div className="box">
            <h1>200</h1>
            <h2>Award Gained</h2>
          </div>
          <div className="box">
            <h1>2000+</h1>
            <h2>Property Ready</h2>
          </div>
        </div>
      </div>
    </div>
    <div className="imgContainer">
      <img src="/bg.png" alt="" />
    </div>
  </div>
  )
}

export default Hero