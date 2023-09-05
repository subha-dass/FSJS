import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrease, overvalue,loggedin } from '../StoreRedux/CounterSlice';

import { Link,Navigate,useNavigate } from 'react-router-dom';
export default function () {
  const navigate = useNavigate();
  const loginform1 = useSelector(state => state.counter.isloggedin);
  const loginf=useSelector(state => state.counter.islogin);
  const signinform1 = useSelector(state => state.counter.issignedin);
  const cartCount1= useSelector(state => state.counter.cartCount);
  console.log(cartCount1)
  // const signinform=issiggnedin;
  console.log("loginform ",loginform1,signinform1," ",loginf)
  const dispatch = useDispatch() ;
    //const [showOverlay, setShowOverlay] = useState(false);
    // const handleToggleOverlay = () => {
    //     setShowOverlay((prev) => !prev);
    //   };
    const onlogout=()=>{
      navigate("/")
    }
    const carthandle=()=>{
      navigate("/cart")
    }
  return (
    <div className='h-[60px] bg-black w-full flex items-center sticky top-0 mt-0'>
        <ul className='ml-[10%] w-[12%]'><i className='Oswald sans-serif text-white text-3xl'>Sigma.<span className='text-xl'>com</span></i></ul>
        <ul className='ml-[7%] h-[60%] w-[28%]'>
            <div className='h-[100%] w-[100%] bg-white flex items-center rounded-md'><input className='h-[90%] w-[90%] bg-white px-[30px] border-none focus:outline-none ml-[6px]' placeholder='Serach'/>
            <span class="material-symbols-outlined cursor-pointer">search</span></div>
        </ul>
        <ul className='ml-[28%] flex justify-between w-[100px]'>
       {(!loginform1 && !signinform1 )?(<ul ><span class="material-symbols-outlined text-white text-3xl cursor-pointer" onClick={()=>dispatch(overvalue())}>login</span></ul>):(<ul ><span class="material-symbols-outlined text-white text-3xl cursor-pointer" onClick={()=>{dispatch(loggedin());onlogout()}} >logout</span></ul>)}
        <ul className='w-[20px]'><span class="material-symbols-outlined text-white text-2xl cursor-pointer absolute" onClick={()=>carthandle()}>shopping_cart</span>
            <ul className='rounded-full bg-yellow-600 flex justify-center items-center   absolute w-[15px] h-[15px] text-[10px]'>{cartCount1}</ul>
        </ul>
        </ul>
    </div>
  )
}
