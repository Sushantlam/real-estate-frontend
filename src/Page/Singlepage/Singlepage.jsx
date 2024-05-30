import React from 'react'
import './Singlepage.scss'
import Slider from '../../Component/Slider/Slider'
import {singlePostData, userData} from '../../Dummydata/dummyData.js'
import { FaLocationDot, FaLocationPin } from "react-icons/fa6";

const Singlepage = () => {
  
  return (
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
            <img src={userData.img} alt="" />
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
         
        </div>
      </div>

    </div>
  )
}

export default Singlepage