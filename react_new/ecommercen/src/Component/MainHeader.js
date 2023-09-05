import React from 'react'
// import Home from './Home';
import MainHeader from '../Component/MainHeader';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import axios from 'axios';
import Navbar from '../Component/Navbar';
import Overlay from '../Component/Overlay';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import io from 'socket.io-client';
import { useState } from 'react';
import { overvalue, isSigninfun, isloginfun,iscommon,loggedin,siggnedin,cartCountUpdate } from '../StoreRedux/CounterSlice'
import { useSelector, useDispatch } from 'react-redux'
import { Link,useNavigate } from 'react-router-dom';

export default function () {
  
  const navigate = useNavigate();

  const showOverlay = useSelector(state => state.counter.setShowOverlay);
  const isLoginForm = useSelector(state => state.counter.islogin);
  const isSignin = useSelector(state => state.counter.isSignin);
  const isloggedin= useSelector(state=>state.counter.isloggedin);
  const issiggnedin= useSelector(state=>state.counter.issignedin);
  const dispatch = useDispatch();
  const [usernam,setusernam]=useState({username:"",password:""});
  const [formpost,setformPost]=useState({
    name:"",
    username:"",
    email:"",
    password:""
  })
 
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      console.log(formpost)
      const response = await axios.post('http://localhost:7085/signin/create', formpost);
      
      console.log("Response Data"+response.data)
      const jwttoken=response.data.substring(11);
      sessionStorage.setItem('jwtToken', jwttoken);
      // Do something with the token, like storing it in local storage
      navigate("/");
      console.log("navigating.....")
      dispatch(siggnedin())
      dispatch(isloginfun())
      console.log("insid signin form",loggedin,siggnedin)
      // Redirect the user to a protected page or do other actions after successful login
      // For example: window.location.replace('/dashboard');
    } catch (error) {
      // Handle login error, show error message, etc.
      console.error('Create account failed:', error);
    }
  };
  const handleSubmit=async (e)=>{
    e.preventDefault();
    try{
    console.log("insid login form",isloggedin,issiggnedin)
    const basicAuthHeader = 'Basic ' + btoa(usernam.username + ':' + usernam.password);
    // console.log("basicAuth"+basicAuthHeader)
    const apiUrl = 'http://localhost:7085/login/user'; // Replace with your login endpoint URL
    // const logincheck=false;
    const rp=await axios.post(apiUrl,usernam, {
      headers: {
        'Authorization': basicAuthHeader,
        'Content-Type': 'application/json', // Set the appropriate content type for your request
      },
    })
        
      
        const resp=rp.data;
        console.log('Login successful'+rp.data);
        const countarr=resp.split(" ");
        const countcart=countarr[countarr.length - 1];
        const jwttoken=countarr[2];
        sessionStorage.setItem('jwtToken', jwttoken);
        console.log(countcart);
        // Perform any additional logic (e.g., redirect to a dashboard page)
        dispatch(loggedin())
        dispatch(cartCountUpdate(countcart))
        navigate("/")
  }
      catch(error){
        // Handle login error
        console.error('Login failed');
      }
     
      
      
  }
  return (
    <div>
    <Navbar ></Navbar>
      <Overlay showOverlay={showOverlay}>
        {/* Your existing page content goes here */}
        <div className='h-full w-full flex flex-col justify-center items-center'>
          <span class="material-symbols-outlined text-white absolute top-[10px] right-[10px]" onClick={() => {dispatch(overvalue()); dispatch(iscommon())}}>
            close
          </span>
          {(!isLoginForm && !isSignin) && <div className='h-full w-full flex flex-col justify-center items-center'>
            <div className='text-white text-xl h-[50px] w-[150px] flex justify-center items-center  border-[1px] border-white' onClick={() => dispatch(isloginfun())}>Login</div>
            <div className='text-white mt-[10px] mb-[10px]'><b>or</b></div>
            <div className='text-white text-xl h-[50px] w-[150px] flex justify-center items-center  border-[1px] border-white' onClick={() => dispatch(isSigninfun())}>Signin</div></div>}
          {isLoginForm && <><form className='flex flex-col h-[180px] bg-black justify-evenly items-center' onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" className='h-[30px] w-[200px] border-2 caret-white focus:outline-none bg-black p-[5px] text-white' value={usernam.username} onChange={(e) => setusernam({ ...usernam, username: e.target.value })} />
            <input type="password" placeholder="Password" className='h-[30px] w-[200px] border-2 caret-white focus:outline-none bg-black p-[5px] text-white' value={usernam.password} onChange={(e) => setusernam({ ...usernam, password: e.target.value })} />
            <button type="submit" className='h-[30px] w-[100px] bg-[#12DAA8] rounded-[2px] mt-[5px]'>Login</button>
            <p className='text-white mt-[25px]'>Don't have account <a className='text-[#12DAA8]' onClick={() => dispatch(isSigninfun())}>click on</a></p>
            
          </form> 
          </>}
          {isSignin && <form className="flex flex-col h-[280px] bg-black justify-evenly items-center" onSubmit={handleLogin}>
            <input className=' h-[30px] w-[200px] border-2 caret-white focus:outline-none bg-black p-[5px] text-white' type='text' placeholder='Name' value={formpost.name} onChange={(e) => setformPost({ ...formpost, name: e.target.value })}></input>
            <input className='h-[30px] w-[200px] border-2 caret-white focus:outline-none bg-black p-[5px] text-white' type='text' placeholder='UserName' value={formpost.username} onChange={(e) => setformPost({ ...formpost, username: e.target.value })}></input>
            <input className='h-[30px] w-[200px] border-2 caret-white focus:outline-none bg-black p-[5px] text-white' type='text' placeholder='Email' value={formpost.email} onChange={(e) => setformPost({ ...formpost, email: e.target.value })}></input>
            <input className='h-[30px] w-[200px] border-2 caret-white focus:outline-none bg-black p-[5px] text-white' type='text' placeholder='Password' value={formpost.password} onChange={(e) => setformPost({ ...formpost, password: e.target.value })}></input>

            <button className='h-[30px] w-[100px] bg-[#12DAA8] rounded-[2px] mt-[5px]' type='submit'><b>Create</b></button>
            <p className='text-white mt-[25px]'>Already have account <a className='text-[#12DAA8]' onClick={() => dispatch(isloginfun())}>click on</a></p>
          </form>}
        </div>
      </Overlay>
      <Outlet></Outlet>
      </div>
  )
}
