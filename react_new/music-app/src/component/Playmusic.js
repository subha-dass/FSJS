import React from 'react'
import { useRef,useState,useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux'
import {musicname,newvalue,next} from '../central/musicSlice'

function Playmusic() {
  const [state1,setState1]=useState(true)
  const musicval=useSelector(state=>state.musiclist.playmusic1)
  const val=useSelector(state=>state.musiclist.value)
  const val1=useSelector(state=>state.musiclist.currentValue)
  const nextval=useSelector(state=>state.musiclist.nextIt)
  const val3=val[`${val1}`][0]
  const val4=val[`${val1}`][1]
  const val5=val[`${val1}`][2]
  const playBtn=useRef("")
  const song=useRef()
  const progress=useRef()
  useEffect(()=>{
    
    if(musicval){
      song.current.play().then((e)=>console.log("load sucess")).catch((error)=>{song.current.pause();song.current.currentTime=0;})
      setState1(false)
    }
},[val3,musicval,nextval])
  const dispatch=useDispatch()
  
  
  const playpause=()=>{
    if(state1){
      song.current.play().then((e)=>console.log("load sucess")).catch((error)=>{song.current.pause();song.current.currentTime=0;})
      setState1(false)
    }
    else {
      song.current.pause()
      setState1(true)
      dispatch(musicname("1"))
      
    }
  }
  const progresschange=()=>{
    song.current.currentTime= progress.current.value
  }
  if(!state1){
    setInterval(()=>{progress.current.value=song.current.currentTime},500)
  }
  // useEffect(()=>{dispatch(newvalue(nextval))},[nextval])
  const Playnext=(curr)=>{
    console.log(curr+"curent value")
    dispatch(next(curr))
    console.log(nextval)
    dispatch(musicname("0"))
    
  }
  return (
    <div className='fixed left-[130px] bottom-0 flex justify-center max-sm:w-[100vw] max-sm:fixed max-sm:left-[0px] max-sm:h-[50px]'>
        <div className='flex flex-col items-center h-[100px] bg-black w-[80vw] rounded-[40px] max-sm:w-[100vw] max-sm:h-[50px] max-sm:rounded-[0px]'>
            <input type='range' className='w-[80%] mt-[10px] p-0 max-sm:h-[3px]' ref={progress} onChange={progresschange}></input>
            <div className='mt-[10px] w-[80%] max-sm:mt-[4px]'>
              <div className='flex gap-[300px] max-sm:gap-[40px]'>
                <div className='flex flex-col text-white'>
                  <h1 className="max-sm:text-[10px]">{val4}</h1>
                  <h4 className='max-sm:text-[10px]'>{val5}</h4>
                </div>
                <div >
                  <span className="material-symbols-outlined text-white text-[50px] max-sm:text-[20px] max-sm:text-white">skip_previous</span>
                  <button onClick={playpause}><span className={"material-symbols-outlined text-white text-[50px] mx-[4px] max-sm:text-[20px]"} ref={playBtn}>{state1?"play_circle":"pause_circle"}</span></button>
                  <span className="material-symbols-outlined text-white text-[50px] max-sm:text-[20px]" onClick={()=>Playnext(val1)}>skip_next</span>
                </div>
              </div>
            </div>
            <audio preload={"metadate"}   ref={song} src={require("../music/"+val3)} >
            </audio>
        </div>
    </div>
    
  )
}

export default Playmusic;