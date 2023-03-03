import React from 'react'
import '../style/style.css'
import Img1 from '../image/73764750.jpg'
function mid() {
  return (
    <div className='flex w-full flex-row justify-evenly items-center mt-[100px] h-[400px] max-sm:flex max-sm:flex-col max-sm:justify-between'>
        <div>
            <div className='w-[380px] h-[380px] rounded-[190px] bg-white bg-[url(Img1)] bg-auto bg-cover max-sm:w-[200px] max-sm:h-[200px] max-sm:rounded-[100px]' style={{backgroundImage:`url(${Img1})`}}>

            </div>
        </div>
        <div>
            <p className='app1 text-[#43853D]'>Hi, my name is</p>
            <p className='text-[70px] text-[#43853D] max-sm:text-[20px]'>Subha Das</p>
            <p className='text-[#43853D] text-2xl max-sm:text-sm'>I am an aspiring <span className='text-3xl max-sm:text-base'>Full Stack JavaScript Developer,</span></p>
            <p className='text-[#43853D] text-2xl max-sm:text-sm'>who is currently working as <span className='text-3xl max-sm:text-base'>Product Developer</span> for </p>
            <p className='text-[#43853D] text-2xl max-sm:text-sm'><span className='text-3xl max-sm:text-base'>Comviva Technology.</span></p>
        </div>
        
    </div>
  )
}

export default mid