import React, { useState } from 'react'

function Midabout() {
    const [data1,setData1]=useState({value:false})
    const show=(e)=>{
        setData1({value:!data1.value})
    }
    const [data2,setData2]=useState({value:false})
    const show1=(e)=>{
        setData2({value:!data2.value})
    }
    const [data3,setData3]=useState({value:false})
    const show2=(e)=>{
        setData3({value:!data3.value})
    }
    const [data4,setData4]=useState({value:false})
    const show3=(e)=>{
        setData4({value:!data4.value})
    }
  return (
    <div className='mt-[40px] h-[500px] w-full flex items-center justify-center '>
        <div className='border-2 border-gray-900  w-4/5 '>
            <div className='border-2 border-gray-900 m-[8px] max-sm:m-[4px] '>
                <h1 className='text-[24px] text-[#43853D] p-2 hover:cursor-pointer hover:text-[27px] max-sm:text-[18px] max-sm:hover:text-[20px]' onClick={show}>Experience(Employee)</h1>
                <p className={"text-[#43853D] "+(data1.value?'block p-2 text-xl':'hidden')} >I am working for Comviva Technology for around eight months.So I have a good exposure of work culture.</p>
            </div>
            <div className='border-2 border-gray-900 m-[8px]  hover:cursor-pointer max-sm:m-[4px]'><h1 className=' max-sm:text-[18px] max-sm:hover:text-[20px] hover:text-[27px] text-[24px] text-[#43853D] p-2' onClick={show1}>Hobby</h1>
                <p className={"text-[#43853D] "+(data2.value?'block p-2 text-xl':'hidden')}> Traveling,Cooking</p>
            </div>
            <div className='border-2 border-gray-900 m-[8px]  hover:cursor-pointer max-sm:m-[4px]' onClick={show2}><h1 className=' max-sm:text-[18px] max-sm:hover:text-[20px] hover:text-[27px] text-[24px] text-[#43853D] p-2'>Skills</h1>
                <ul className={"text-[#43853D] "+(data3.value?'block p-2 text-xl':'hidden')}>
                    <li>HTML,CSS and Tailwindcss</li>
                    <li>JavaScript,React.js</li>
                    <li>Java,Jsp,Servlet,hibernate</li>
                    <li>Git</li>
                    <li>Sql</li>
                </ul>
            </div>
            <div className='border-2 border-gray-900 m-[8px]  hover:cursor-pointer max-sm:m-[4px]' onClick={show3}>
                <h1 className='hover:text-[24px] text-[27px] text-[#43853D] p-2  max-sm:text-[18px] max-sm:hover:text-[20px]'>Project</h1>
                <p className={"text-[#43853D] "+(data4.value?'block p-2 text-xl':'hidden')}>Please visit the <a href='https://github.com/subha-dass/FSJS' className='hover:text-[30px]'><u>link...</u></a></p>
            </div>
        </div>
        
        

    </div>
  )
}

export default Midabout