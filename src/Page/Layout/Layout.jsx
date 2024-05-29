import React from 'react'
import './Layout.scss'
import Navbar from '../../Component/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../Component/Footer/Footer'

const Layout = () => {
  return (
    <>
     <div className='layout'>
        <div className='navbar'>
        <Navbar/>
        </div>
        <div className='hero'>
        <Outlet/>
        <Footer/>
        </div>

        
     
      
        </div> 
         
         </>
  )
}

export default Layout