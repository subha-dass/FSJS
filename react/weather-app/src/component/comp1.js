import React from 'react'
import '../css/box.css'
function comp1(props) {
  return (
    <div className='com2'>
        <div className='div-1'>
            <h5>Country Name</h5>
            <h5>{props.com1.value1}</h5>
        </div>
        <div className='div-1'>
            <h5>State Name</h5>
            <h5>{props.com1.value2}</h5>
        </div>
        <div className='div-1'>
            <h5>City Name</h5>
            <h5>{props.com1.value3}</h5>
        </div>
    </div>
  )
}

export default comp1