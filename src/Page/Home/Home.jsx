import React from 'react'
import Hero from '../../Component/Hero/Hero'
import Hot from '../../Component/Hotproperty/Hot'
import Checkus from '../../Component/Checkus/Checkus'
import Footer from '../../Component/Footer/Footer'
import Bluebg from '../../Component/Bluebg/Bluebg'

const Home = () => {
  return (
    <>
        <Hero/>
        <div className='hot'>
        <Checkus/>
        <Bluebg/>
       
        </div>
    </>
  )
}

export default Home