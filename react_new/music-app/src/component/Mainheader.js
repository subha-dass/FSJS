import React from 'react'
import Navbar from './Navbar'
import {Outlet} from 'react-router-dom'
import Footer from './Footer'
function Mainheader() {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Mainheader