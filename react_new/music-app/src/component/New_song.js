import React from 'react'
import Playmusic from './Playmusic'
import {useSelector,useDispatch} from 'react-redux'
import MusicCard from './MusicCard'
import { useState } from 'react'
import { music, newvalue,musicname } from '../central/musicSlice'
function New_song() {
  const musicval=useSelector(state=>state.musiclist.playmusic)
  const [cards]=useState([11,12,13])
  const [cards1]=useState([14,15,16])
  const dispatch=useDispatch()
  const playcard=(card)=>{
      console.log(card)
      const m1="m"+card
      dispatch(newvalue(m1))
      console.log(m1)
      dispatch(music())
      console.log(musicval)
      dispatch(musicname("0"))

  }
  return (
    <div>
        {musicval?<Playmusic/>:""}
         <p className='my-[20px] text-[30px] font-bold max-sm:text-[15px] max-sm:ml-[10px]'>New Song</p>
         <div>
            <ul className='flex justify-evenly'>
              {cards.map((card)=>{
                let i=5
                let mval="m"+card
                console.log(card," ",mval,i);
                return <li key={card} onClick={()=>playcard(card)}>
                  <MusicCard prop={mval} ></MusicCard>
                </li>
              })}
            </ul>
          </div>
          <div>
            <ul className='flex justify-evenly'>
              {cards1.map((card)=>{
                let i=5
                let mval="m"+card
                console.log(card," ",mval,i);
                return <li key={card} >
                  <MusicCard prop={mval} onClick={()=>playcard(card)}></MusicCard>
                </li>
              })}
            </ul>
          </div>
    </div>
  )
}

export default New_song