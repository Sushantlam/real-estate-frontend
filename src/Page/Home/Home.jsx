import React from 'react'
import Hero from '../../Component/Hero/Hero'
import Hot from '../../Component/Hotproperty/Hot'
import Checkus from '../../Component/Checkus/Checkus'

const Home = () => {
  return (
    <>
        <Hero/>
        <div className='hot'>
        <Checkus/>
        </div>
    </>
  )
}

export default Home