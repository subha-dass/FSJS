import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Midscard({title,price,imgname,slno}) {
  console.log(title,imgname);
  const navigate=useNavigate();
  const getData=(()=>{
    navigate(`/user/${slno}`)
  })
  return (
    <div className='bg-black w-[24%] flex justify-center items-center hover:w-[25%]' onClick={getData}>
    <div className='text-white h-full w-[90%]  flex flex-col justify-center items-center bg-black relative'>
        <span class="material-symbols-outlined text-white absolute top-[2px] right-[5px]">
          favorite
        </span>
    <img className='h-[180px] w-[160px]' src={require(`./../image/${imgname}`)}></img>
      <div className='w-full py-[2px] overflow-hidden' ><div className='whitespace-nowrap overflow-hidden text-ellipsis hover:text-[#12DAA8] hover:text-2xl'>{title}</div> </div>
      <div className='w-full'><div className='whitespace-nowrap overflow-hidden'>{price}</div> </div>
    </div></div>
  )
}
