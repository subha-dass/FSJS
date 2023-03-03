import React, { useState } from 'react'
import { Link } from 'react-router-dom';


function Nav() {
  const URL_RESUME='http://localhost:3000/Subha_feb.pdf';
  const [click,setClick]=useState({value:true})
  const handleclick=(e)=>{
    setClick({value:!click.value})
  }
  const btndownload=(url)=>{
    console.log("hi")
    const atag=document.createElement('a')
    atag.href=url
    atag.setAttribute('download','resume_subha.pdf')
    document.body.appendChild(atag)
    atag.click()
    atag.remove()
  }
  return (
    <div > 
        <nav className="h-[50px] w-[100vw] flex flex-row justify-end ">
            <ul className={"flex  flex-row justify-evenly items-center h-full w-[450px]  max-sm:block max-sm:w-[300px] max-sm:fixed max-sm:pt-[05px] max-sm:pl-[15px] max-sm:bg-gray-900 max-sm:top-[50px] " + (click.value?'right-[-500px]':'right-[0px]')}>
                <li className='text-[#43853D] font-semibold hover:font-bold text-xl max-sm:my-[15px] '><Link to='/'>Home</Link></li>
                <li className='text-[#43853D] font-semibold hover:font-bold text-xl max-sm:my-[15px] '><Link to='/about'>About</Link></li>
                <li className='text-[#43853D] font-semibold hover:font-bold text-xl max-sm:my-[15px] '><Link to='/contact'>Contact</Link></li>
                <button className='border-[1px] border-[#43853D] h-[30px] w-[90px]  max-sm:my-[15px] text-[#43853D] hover:w-[94px] hover:font-bold' onClick={btndownload}>Resume</button>
            </ul>
            <div className='flex items-center h-full w-[80px] text-[#43853D] sm:hidden'  onClick={handleclick}><i  className={click.value ? "fas fa-bars text-xl hover:text-2xl":"fas fa-times text-xl hover:text-2xl"}></i></div>
        </nav>
    </div>
  );

}

export default Nav