import React from 'react'
import { useSelector} from 'react-redux'

export default function Famous() {
    const imagefab1 = useSelector((state)=>state.imageAll1.imagefab)
    const img1=['imgfab1.webp',
    'imgfab2.webp']
    console.log("image frab is",imagefab1);
    return (
    <div className='flex w-full h-[250px] justify-center items-center'>
        <div className='flex justify-between w-[90%] h-[250px]'>
        {imagefab1.map((image, index) => (
        <img
            key={index}
            className='h-[230px] bg-white w-[48%] bg-white'
            src={require(`./../image/${image}`)}
            alt={`Image ${index}`}
        />
        ))}

        </div>
    </div>
  )
}
