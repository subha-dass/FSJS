import React from 'react'
// import Img1 from './../img/OIP.jpg'
import { useSelector } from 'react-redux'
function MusicCard(props) {
    const mval=props.prop
    const imgval=useSelector(state=>state.musiclist.value)
    const imgval1=imgval[`${mval}`][3]
    const imgval2=imgval[`${mval}`][1]
    console.log(imgval1)
    console.log(mval)
  return (
    
    <div>
        <div>
            <div className=' rounded-[20px] h-[450px] w-[350px] flex flex-col  max-sm:h-[200px] max-sm:w-[100px]'>
                <img src={require("../img/"+imgval1)} className="w-[290px] h-[350px] rounded-[20px] mt-[25px] hover:h-[380px] hover:w-[350px]"></img>
                <p className='mt-[10px] ml-[2px] text-[20px] font-bold max-sm:text-[10px]'>{imgval2}</p>
            </div>
        </div>
    </div>
  )
}

export default MusicCard