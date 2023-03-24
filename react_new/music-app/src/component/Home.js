import React from 'react'
import Carousle from './Carousle'
import Playmusic from './Playmusic'
import {useSelector,useDispatch} from 'react-redux'
import MusicCard from './MusicCard'
import { useState } from 'react'
import { music, newvalue,musicname } from '../central/musicSlice'
function Home() {
  const musicval=useSelector(state=>state.musiclist.playmusic)
  const [cards]=useState([5,6,7])
  const [cards1]=useState([8,9,10])
  const dispatch=useDispatch()
  const playcard=(card)=>{
      console.log(card)
      const m1="m"+card
      dispatch(newvalue(m1))
      console.log(m1)
      dispatch(music())
      dispatch(musicname("0"))
  }
  return (
    <div>
        <Carousle />
        {musicval?<Playmusic/>:""}
        <div className=''>
          <p className='my-[20px] text-[30px] font-bold max-sm:text-[15px] max-sm:ml-[10px]'>New Song</p>
          {/* <MusicCard></MusicCard> */}
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
          <p className='my-[20px] text-[30px] font-bold max-sm:text-[15px] max-sm:ml-[10px]'>Old Song</p>
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
    </div>
    
  )
}

export default Home