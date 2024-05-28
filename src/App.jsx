import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './layout.scss'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Hot from './Component/Hotproperty/Hot'

function App() {
  

  return (
    <>
      <div className='layout'>
        <div className='navbar'>
        <Navbar/>
        </div>
        <div className='hero'>
        <Hero/>
        </div>

        <div className='hot'>
        <Hot/>
        </div>
     
       
        </div>
    </>
  )
}

export default App
