import React from 'react'
import Hero from '../../Component/Hero/Hero'
import Hot from '../../Component/Hotproperty/Hot'

const Home = () => {
  return (
    <>
        <Hero/>
        <div className='hot'>
        <Hot/>
        </div>
    </>
  )
}

export default Home