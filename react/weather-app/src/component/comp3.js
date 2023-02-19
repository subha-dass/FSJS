import React from 'react'
import '../css/box.css'
export default function comp3(props) {
  const {src}=props.com3
  return (
    <div>
        <img src={src} alt='ico'></img>
        <h5>{props.com3.value1}</h5>
    </div>
  )
}
