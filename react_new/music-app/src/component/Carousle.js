
import { Carousel } from 'antd';
import React from 'react'
import Img from '../img/1004491_6123951_35.jpg'
import IMg1 from '../img/85679387.webp'
import IMg2 from '../img/maxresdefault.jpg'
import IMg3 from '../img/tadap-posters-.jpg'
import { music, newvalue,musicname } from '../central/musicSlice'
import { useSelector,useDispatch } from 'react-redux'
function Carousle() {
    const contentStyle = {
        height: '580px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
        borderRadius:'20px',
        backgroundRepeat:'no-repeat',
        
        backgroundSize:'cover',
        backgroundImage:`url(${Img})`
        
      };
    const contentStyle1 = {
        height: '580px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
        borderRadius:'20px',
        backgroundRepeat:'no-repeat',
        
        backgroundSize:'cover',
        backgroundImage:`url(${IMg1})`
        
      };
    const contentStyle2 = {
        height: '580px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
        borderRadius:'20px',
        backgroundRepeat:'no-repeat',
        
        backgroundSize:'cover',
        backgroundImage:`url(${IMg2})`,
      };
    const contentStyle3 = {
        height: '580px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
        borderRadius:'20px',
        backgroundRepeat:'no-repeat',
        
        backgroundSize:'contain',
        backgroundSize:'cover',
        backgroundImage:`url(${IMg3})`, 
      };
      const m1=useSelector(state=>state.musiclist)
      const dispatch=useDispatch()
      // console.log(m1)
      const music1=(m1,m2)=>{
        dispatch(newvalue(m1))
        dispatch(music())
        dispatch(musicname("0"))
        
      }
  return (
        <Carousel autoplay >
            <div onClick={()=>music1("m1",m1)}>
            <h3 style={contentStyle} ></h3>
            </div>
            <div onClick={()=>music1("m2",m1)}>
            <h3 style={contentStyle1}></h3>
            </div>
            <div onClick={()=>music1("m3",m1)}>
            <h3 style={contentStyle3}></h3>
            </div>
            <div onClick={()=>music1("m4",m1)}>
            <h3 style={contentStyle2}></h3>
            </div>
        </Carousel>
  
  )
}


export default Carousle;