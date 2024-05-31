import React from 'react'
import './Singlepage.scss'
import Slider from '../../Component/Slider/Slider'
import {singlePostData, userData} from '../../Dummydata/dummyData.js'
import { FaBath, FaBed, FaBus, FaLocationDot, FaLocationPin, FaSchool, FaSquare } from "react-icons/fa6";
import { FaSave } from "react-icons/fa";
import { LuUtilityPole } from "react-icons/lu";
import { MdOutlinePets } from "react-icons/md";
import { SiFeedly } from "react-icons/si";
import { IoRestaurant } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import Footer from '../../Component/Footer/Footer.jsx';

const Singlepage = () => {
  
  return (
    <>
    <div className='single'>
      <div className='details'>
        <div className="wrapper">
          <Slider images={singlePostData.images}/>
          <div className="info">
            <div className="top">
              <div className='post'>
              <h1>{singlePostData.title}</h1>
              <div className='address'>
              <FaLocationDot size={20} />
                <span>{singlePostData.address}</span>

              </div>
              <div className="price">Rs {singlePostData.price}</div>
          
            </div>
            <div className="user">
            <img src="./Sushant.jpg" alt="" />
            <span>{userData.name}</span>
           </div>
            </div>
            <div className="bottom">
              {singlePostData.description}
            </div>
          </div>
        </div>

      </div>
      <div className=' features'>
      <div className="wrapper">
      <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
            <LuUtilityPole size={30} />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
            <MdOutlinePets size={30} />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className="feature">
            <SiFeedly size={30} />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
            <FaSquare size={30} />
              <span>80 sqft</span>
            </div>
            <div className="size">
            <FaBed size={30} />
              <span>2 beds</span>
            </div>
            <div className="size">
            <FaBath size={30} />
              <span>1 bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
            <FaSchool size={30} />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
            <FaBus size={30} />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
            <IoRestaurant size={30} />
              <div className="featureText">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>
         
          <div className="buttons">
            <button>
            <IoIosSend size={30} />
              Send a Message
            </button>
            <button>
            <FaSave size={30} />
              Save the Place
            </button>
          </div>
        </div>
      </div>

    </div>
     <Footer/>
     </>
  )
}

export default Singlepage