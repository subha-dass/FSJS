import React from 'react'
import '../css/box.css'
function comp2(props) {
  return (
    <div className='com2'>
        <div className='div-1'>
            <h5>Humidity</h5>
            <h5>{props.com2.value1}</h5>
        </div>
        <div className='div-1'>
            <h5>Wind Speed</h5>
            <h5>{props.com2.value2}kph</h5>
        </div>
        <div className='div-1'>
            <h5>Temperature</h5>
            <h5>{props.com2.value3}<span>&#176;C</span></h5>
        </div>
    </div>
  )
}

export default comp2