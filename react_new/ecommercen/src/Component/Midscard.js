import React from 'react'

export default function Midscard({title,price,imgname}) {
  console.log(title,imgname);
  return (
    <div className='bg-black w-[24%] flex justify-center items-center'>
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
