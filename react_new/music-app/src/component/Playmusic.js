import React from 'react'
import { useRef,useState,useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux'
import {musicname,newvalue,next,prev} from '../central/musicSlice'

function Playmusic() {
  const [state1,setState1]=useState(true)
  const [state2,setState2]=useState(0)
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
      song.current.play().then((e)=>{console.log("load sucess");progress.current.min=0;progress.current.max=song.current.duration;console.log(progress.current.max,progress.current.min);}).catch((error)=>{song.current.pause();song.current.currentTime=0;})
      setState2(song.current.currentTime)
      setState1(false)
    }
},[val3,musicval,nextval])
  const dispatch=useDispatch()
  
  
  const playpause=()=>{
    if(state1){
      song.current.play().then((e)=>console.log("load sucess")).catch((error)=>{song.current.pause();song.current.currentTime=0;})
      progress.current.min=0
      progress.current.max=song.current.duration
      console.log(progress.current.max,progress.current.min,song.current.duration+"hii")
      setState2(song.current.currentTime)
      setState1(false)
    }
    else {
      song.current.pause()
      console.log("pause")
      setState1(true)
      dispatch(musicname("1"))
      
    }
  }
  const progresschange=()=>{
    song.current.currentTime= progress.current.value
    console.log(song.current.currentTime)
    
  } 
  if(!state1){
      // setInterval(()=>{progress.current.value=song.current.currentTime},500)
      const interval1 = setInterval(() => {
        if (song.current != null && song.current.ended) {
          clearInterval(interval1);
          clearInterval(interval2);
        } else if (song.current != null) {
          progress.current.value = song.current.currentTime;
        }
      }, 500);
      // setInterval(()=>{setState2(song.current.currentTime)},500)
      const interval2 = setInterval(() => {
        if (song.current != null && song.current.ended) {
          clearInterval(interval1);
          clearInterval(interval2);
        } else if (song.current != null) {
          setState2(song.current.currentTime);
        }
      }, 500);
  }
  useEffect(()=>{
    setState2(song.current.currentTime)
    // console.log(state2+"useeffect",+" "+" "+song.current.duration)
    if(song.current.currentTime==song.current.duration){
      Playnext(val1)
    }
  },[state2])
  const Playnext=(curr)=>{
    console.log(curr+"curent value")
    dispatch(next(curr))
    console.log(nextval)
    dispatch(musicname("0"))
    
  }
  const Playprev=(curr)=>{
    console.log(curr+"curent value")
    dispatch(prev(curr))
    console.log(nextval)
    dispatch(musicname("0"))
  }
  return (
    <div className='fixed left-[130px] bottom-0 flex justify-center max-sm:w-[100vw] max-sm:fixed max-sm:left-[0px] max-sm:h-[50px]'>
        <div className='flex flex-col items-center h-[100px] bg-black w-[80vw] rounded-[40px] max-sm:w-[100vw] max-sm:h-[50px] max-sm:rounded-[0px]'>
            <input type='range' className='w-[80%] mt-[10px] p-0 max-sm:h-[3px]' ref={progress} onChange={progresschange} step="any"></input>
            <div className='mt-[10px] w-[80%] max-sm:mt-[4px]'>
              <div className='flex gap-[300px] max-sm:gap-[40px]'>
                <div className='flex flex-col text-white'>
                  <h1 className="max-sm:text-[10px]">{val4}</h1>
                  <h4 className='max-sm:text-[10px]'>{val5}</h4>
                </div>
                <div >
                  <span className="material-symbols-outlined text-white text-[50px] max-sm:text-[20px] max-sm:text-white"  onClick={()=>Playprev(val1)}>skip_previous</span>
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