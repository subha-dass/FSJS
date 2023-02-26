import React from 'react'
import '../style/style.css'
function move(props) {
    const {data,setData}=props.val
    const {data1,setData1}=props.val1
    const randomNum=(min,max)=>{
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    function resetsys(e){
      setData({value:0,value1:0,value2:10})
      setData1("")
    }
    const changebtn=(e,i)=>{
        console.log(data.value2)
        if(data.value2>0){
            const randomnum=randomNum(1, 3)
            const num=e.target.value
            console.log(randomnum,num)
            if(randomnum>num){
              setData({value:data.value,value1:data.value1+1,value2:data.value2-1})
              console.log(data)
            }
            else if(randomnum<num){
              setData({value:data.value+1,value1:data.value1,value2:data.value2-1})
            }
            else{
              setData({value:data.value,value1:data.value1,value2:data.value2-1})
              
            }
            console.log(data.value,data.value1)
            if(data.value>data.value1 && data.value2===1){
              setData1("Player Win")
            }
            else if(data.value<data.value1 && data.value2===1){
              setData1("Computer Win")
            }
            else if(data.value===data.value1 && data.value2===1){
              setData1("Tie!!!")
            }
            console.log(data.value2,data1)
        }

    }
  return (
    <div>
        <div className='app3'>Your move time!!!</div>
        <h2>Moves Left:{data.value2}</h2>
        <div className='app4'>
            <button className='btn' value={1} onClick={(e)=>changebtn(e,"1")}>Rock</button>
            <button className='btn' value={2} onClick={(e)=>changebtn(e,"2")}>Papper</button>
            <button className='btn' value={3} onClick={(e)=>changebtn(e,"3")}>Scissor</button>
        </div>
        <div className='app5'>{data1}</div>
        <button className='btn' onClick={resetsys}>Reset</button>
    </div>
    
  )
}

export default move