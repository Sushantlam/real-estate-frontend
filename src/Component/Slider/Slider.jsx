import React, { useState } from 'react'
import './Single.scss'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";


const Slider = ({images}) => {
    console.log(images);
    const [imgIndex, setImgIndex]= useState(null)

    function changeImg(dir){
        if(dir==="left"){
            if(imgIndex===0){
                setImgIndex(images.length-1)
            }
            else{
                setImgIndex(imgIndex-1)
            }
            
        }else{
            if(imgIndex===images.length-1){
                setImgIndex(0)
            }else{
                setImgIndex(imgIndex+1)
            }
        }
    }
   
  return (
    <div className=' images'>
       {imgIndex !== null && (<div className="fullImage">
            <div className="left">
            <FaArrowLeft size={40} color='white' onClick={()=> changeImg("left")} />
            </div>
            <div className="imageContainer">
                <img src={images[imgIndex]} alt="" />
            </div>
            <div className="right">
            <FaArrowRight size={40} color='white' onClick={()=> changeImg("right")} />
            </div>
            <div className="close">
            <MdOutlineClose size={40} color='white' onClick={() => setImgIndex(null)} />   </div>
        </div>)}
        <div className='bigImage'>
            <img src={images[0]} alt="" onClick={()=>setImgIndex(0)} />

        </div>
        <div className='slideImage'>
            {images.slice(1).map((image, index)=>{
                return( <img src={image} key={index} alt="" onClick={()=> setImgIndex(index+1)} /> )
            })}
            
            </div>

    </div>
  )
}

export default Slider