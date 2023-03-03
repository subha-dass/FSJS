import React from 'react'
import Nav from './Nav'
import Footer from './footer'
import ContactMid from './contactmid'
function Contact() {
  return (
    <div className='bg-black h-[100vh] w-[100vw] flex flex-col justify-between'>
        <Nav></Nav>
        <ContactMid></ContactMid>
        <Footer></Footer>
    </div>
  )
}

export default Contact