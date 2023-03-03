import React from 'react'
import '../style/style.css'
import Nav from './Nav'
import Mid from './mid'
import Footer from './footer'
function Home() {
  return (
    <div className='bg-black h-[100vh] w-[100vw] flex flex-col justify-between'>
    <Nav></Nav>
      <Mid></Mid>
      <Footer></Footer>
    </div>
  )
}

export default Home