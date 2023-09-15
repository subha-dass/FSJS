import React from 'react'
import Carousel from './Carousel'
import Midscard from './Midscard';
import { useSelector} from 'react-redux'
import { useState } from 'react';
import Famous from './Famous';
import NewItem from './NewItem';
export default function Home() {
  const cards = [
    { title: 'SAMSUNG 6.5 kg 5 Star Inverter Fully Automatic Top Load Washing Machine (WA65T4262GG/TL, Diamond Drum, Gray)',
     price: '₹16,490.00',imgname:'img11.webp',slno:'4378' },
     { title: 'Redmi 11 Prime (4GB RAM, 64GB, Playful Green)',
     price: '₹14,490.00',imgname:'img21.webp',slno:'4379' },
     { title: 'boAt Aavante Bar 908 30W Soundbar with Remote (Signature Sound, 2.0 Channel, Black)',
     price: '₹10,490.00',imgname:'img51.webp',slno:'4380' },
     { title: 'treo All Fresh 400ml Glass Round Tiffin with Lid (Set of 3, BPA Free, Transparent)',
     price: '₹649.00',imgname:'img61.webp',slno:'4381' },
     { title: 'Lenovo IdeaPad 3 15IAU7 Intel Core i5 12th Gen (15.6 inch, 8GB, 512GB, Windows 11 Home, MS Office 2021, Intel Iris Xe, Full HD Display, Arctic Grey, 82RK00LWIN)',
     price: '₹54990.00',imgname:'img41.webp',slno:'4382' },
     { title: 'ogitech MK220 Wireless Keyboard & Mouse Combo (Spill Resistant, Black)',
     price: '₹1295.00',imgname:'img71.webp',slno:'4383' },
   
  ];
  const image = useSelector(state=>state.imageAll.image);
  
  const [startIndex, setStartIndex] = useState(0);
  const handleNext=()=>{
    const nextNode=startIndex+1;
    const avlchk=startIndex+4;
    
    if(nextNode<cards.length && avlchk<cards.length ){
      setStartIndex(nextNode);
    }else {
      setStartIndex(0);
    }
  }
  const handlePrev=()=>{
    const prevNode=startIndex-1;
    if(prevNode<0 ){
      console.log("checking ....",prevNode)
      setStartIndex((cards.length-4))
    }else{
      setStartIndex(prevNode)
    }
  }
  return (
    <div className='bg-gray-900'>
        <Carousel images={image}></Carousel>
        <div className='flex w-full justify-center items-center my-[10px]'><div className='w-[90%]'><h1 className='text-white text-3xl'>Deals of the Day</h1></div></div>
        <div className='flex w-full h-[250px] justify-center items-center'>
          <div className='flex justify-center items-center h-[230px] w-[5%] '>
            <button className="text-white text-[30px]" onClick={handlePrev}>
              &lt;
            </button>
        </div>
          <div className='flex justify-between w-[90%] h-[230px]'>
            {cards.slice(startIndex, startIndex + 4).map((card,index)=>(
              <Midscard key={index} {...card}></Midscard>)
            )}
          </div>
          <div className='flex justify-center items-center h-[230px] w-[5%] '>
            <button className="text-white text-[30px]" onClick={handleNext}>
              &gt;
            </button>
        </div>
       
      </div>
        <div className='flex w-full justify-center items-center my-[15px]'>
          <div className='w-[90%]'><h1 className='text-white text-3xl'>New at Sigma</h1></div>
        </div>
        <Famous/>
        <NewItem/>
    </div>
     
  )
}
