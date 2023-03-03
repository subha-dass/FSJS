import React from 'react'
import './../style/style.css'
function footer() {
  return (
    <div className='h-[130px] w-full mt-[32px] bg-gray-900 flex justify-end pr-[80px] max-sm:h-[80px]'>
        <div className=' w-[450px] pl-[10px] pt-[10px] flex flex-col items-start max-sm:flex max-sm:flex-row justify-evenly'>
            <div >
              <p className=' text-2xl text-[#43853D] max-sm:text-xl'>Contact</p>
              <p className=' text-base text-[#43853D] max-sm:text-sm'>9064135293</p>
              <p className=' text-[#43853D] text-base max-sm:text-sm'>subhadas5089@gmail.com</p>
            </div>
            <div className=' text-3xl'><a href='https://github.com/subha-dass?tab=overview&from=2023-01-01&to=2023-01-31'><i className="fa-brands fa-github text-white mr-[10px]"></i></a>
            <a href='https://www.linkedin.com/in/subha-das-5a7807195/'><i className="fa-brands fa-linkedin text-white"></i></a></div>
        </div>
    </div>
  )
}

export default footer