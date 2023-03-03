import React from 'react'
import Nav from './Nav'
import Footer from './footer'
import Midabout from './Midabout'
function About() {
  return (
    <div className='bg-black h-[100vh] w-[100vw] flex flex-col justify-between'>
        <Nav/>
        <Midabout></Midabout>
        <Footer/>
    </div>
  )
}

export default About