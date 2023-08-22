import React from 'react'
import Carousel from './Carousel'
import { useSelector} from 'react-redux'
export default function Home() {
  const image = useSelector(state=>state.imageAll.image);
  console.log(image);
  return (
    <div>
        <Carousel images={image}></Carousel>
    </div>
  )
}
