import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
  const [statenav,setStatenav]=useState(false)
  const valt=()=>{
    if(statenav){
      setStatenav(false)
    }
    else{
      setStatenav(true)
    }
  }
  return (
    <div className='h-[50px] w-[100vw] flex justify-end max-sm:w-[100vw] max-sm:justify-start'>
            <ul className='flex  items-center h-full w-[420px] font-[15px] justify-between mr-[40px] max-sm:ml-[10px] max-sm:w-[80vw] max-sm:justify-between max-sm:p-0 max-sm:font-[10px]'  >
                <li className='max-sm:text-[15px] font-bold hover:text-[20px] '><Link to="/">Home</Link></li>
                <li className='max-sm:text-[15px] hover:text-[20px]  '><Link to="/New" >New Song</Link></li>
                <li className='max-sm:text-[15px] hover:text-[20px]  '><Link to="/Old" >Old Song</Link></li>
                <li className='max-sm:text-[15px] hover:text-[20px]  '><Link to="/Trending" >Trending Song</Link></li>
            </ul>
            
        
    </div>
  )
}

export default Navbar