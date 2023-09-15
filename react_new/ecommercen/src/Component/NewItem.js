import React from 'react'
import { useSelector } from 'react-redux'

export default function NewItem() {
    const imagefab2 = useSelector((state)=>state.imageAll1.imagefeb1)
    console.log("img fab 2",imagefab2)
  return (
    <div className='flex w-full h-[250px] justify-center items-center'>
    <div className='flex justify-between w-[90%] h-[250px]'>
    {imagefab2.map((image, index) => (
    <img
        key={index}
        className='h-[230px] bg-white w-[23%] bg-white'
        src={require(`./../image/${image}`)}
        alt={`Image ${index}`}
    />
    ))}

    </div>
</div>
  )
}
