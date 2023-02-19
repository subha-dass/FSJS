import React, {  useState } from 'react'
import '../css/box.css'
import Comp1 from './comp1'
import Comp2 from './comp2'
import Comp3 from './comp3'
import Comp4 from './comp4'
function BoxElement() {
  const obj={
    value1:'__',
    value2:'__',
    value3:'__'
  }
  const obj1={
    value1:'__',
    value2:'__',
    value3:'__',
  }
  const image1={
    src:' ',
    value1:'__'
  }
  const err={
    message:''
  }
  const initial={
    value:''
  }
  const [data,setData]=useState(initial)
  const [data1,setData1]=useState(obj)
  const [data2,setData2]=useState(obj1)
  const [data3,setData3]=useState(image1)
  const [data4,setData4]=useState(err)
  const changedata=(e)=>{
    const {value}=e.target
    setData({value:value})
  }
  const fetchdata =async (e)=>{
    const {value}=data
    const fetch_data=await fetch(`https://api.weatherapi.com/v1/current.json?key=9735e0c98f4f40fa8c9140348231102&q=${value}`)
    const dat=await fetch_data.json()
    if(dat.error){
      setData4({message:dat.error.message})
    }
    console.log(dat)
    // setData(data)
    setData1({value1:dat.location.country,
              value2:dat.location.region,
              value3:dat.location.name})
    setData2({value1:dat.current.humidity,
              value2:dat.current.wind_kph,
              value3:dat.current.temp_c})
    setData3({
              src:dat.current.condition.icon,
              value1:dat.current.condition.text
    })
    
  }
  return (
    <>
        <h1 className='app1' >Weather App</h1>
        <input
        className='inp-1'
        type='text'
        placeholder='Enter City Name'
        onChange={changedata}
        />
        <button className='app2' onClick={fetchdata}>Submit</button>
        <Comp4 com4={data4}/>
        <Comp1 com1={data1}/>
        <Comp2 com2={data2}/>
        <Comp3 com3={data3}/>
    </>
  )
}

export default BoxElement