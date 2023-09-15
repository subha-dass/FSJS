import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';
export default function SingleCard() {
    const { userId } = useParams();
    const [products,setProducts]=useState([])
    const [imageslist,setImageslist]=useState([])
    const [startIndex,setStartIndex]=useState(0)
    const [imageSet,setImageSet]=useState([])
    const [discount,setDiscount]=useState()
    console.log("slno is",userId);
    useEffect(()=>{
        axios.post(`http://localhost:7089/product/sel/${userId}`)
    .then(response=>{
      console.log(response.data)
      setProducts([response.data.productModel])
    //   console.log(products)
    //   setImageslist([response.data.images])
    //   console.log(products," ",imageslist)
        setImageslist([...response.data.images])
        setImageSet(response.data.images[0])
    })
     .catch(error => {
      // Handle any errors here
      console.error('Error:', error);
    });
    },[])
    useEffect(()=>{
      console.log("product details",products[0])
      const discountAmount = (products[0]?.discount / 100) * products[0]?.price;
      const originalprice=products[0]?.price-discountAmount
      setDiscount(originalprice)
    },[products])
    const imagenewSet=(index)=>{
        setImageSet(imageslist[index])
    }
    const handleNext=()=>{
        const nextNode=startIndex+1;
        const avlchk=startIndex+2;
        
        if(nextNode<imageslist.length && avlchk<imageslist.length ){
          setStartIndex(nextNode);
        }else {
          setStartIndex(0);
        }
      }
      const handlePrev=()=>{
        const prevNode=startIndex-1;
        if(prevNode<0 ){
          console.log("checking ....",prevNode)
          setStartIndex((imageslist.length-2))
        }else{
          setStartIndex(prevNode)
        }
      }
  return (
    <div className='bg-gray-900 h-[91vh] w-full'>
        <div className='flex h-full w-full justify-around items-center '>
            <div className='w-[45%] h-[94%]  flex justify-around items-center'>
                <div className=' h-full flex flex-col items-center justify-center w-[16%]'>
                    <div className=' h-[10%] w-full flex justify-center items-center'>
                    <button className='text-3xl flex justify-center items-center text-white transform rotate-90 scale-125' onClick={handleNext}>&lt;</button>
                    </div>
                    <div className=' h-[55%] w-full flex-col flex justify-around items-center'>
                        {imageslist.slice(startIndex,startIndex+2).map((image,index)=>(
                            <img 
                            onClick={()=>imagenewSet(index)}
                            key={index}
                            className='h-[30%] w-[90%] border-[1px] border-white'
                            src={`data:image/jpeg;base64,${image}`}>
                            </img>
                        ))}
                    </div>
                    <div className=' h-[10%] w-full flex justify-center items-center'>
                        <button className='text-3xl flex justify-center items-center text-white transform rotate-90 scale-125' onClick={handlePrev}>&gt;</button>
                    </div>
                </div>
                <div className=' w-[82%] h-full flex flex-col justify-around items-center'>
                    <div className='border-[1px] w-[70%] h-[60%]'>
                      <img className=' w-full h-full'  src={`data:image/jpeg;base64,${imageSet}`}></img>
                    </div>
                    <div className=' w-[80%] h-[40px] flex justify-around items-center'>
                      <div className='w-[43%] h-full bg-[#12DAA8] text-black text-l rounded-[2px] font-bold flex justify-center items-center'>Buy Now</div>
                      <div className='w-[43%] h-full border-[1px] text-gray-300 text-l rounded-[2px] font-bold flex justify-center items-center'>Add to Cart</div>
                    </div>
                </div>
            </div>
            <div className='w-[49%] h-[94%] border-[1px] border-white overflow-y-auto'>
                <div className='text-white text-xl'>{products[0]?.productName|| 'Product Name Not Available'}</div>
                <div className='flex justify-start  h-[30px] w-[50%]'>
                  <div className='border-[2px] flex justify-center rounded-[3px] items-center border-[#FF02B9] w-[41%] text-[#FF02B9] h-full text-[10px]'>Extra 2250 Bank Discount*</div>
                  <div className='border-[2px] ml-[10px] flex justify-center rounded-[3px] items-center border-[#FF02B9] w-[41%] text-[#FF02B9] h-full text-[10px]'>Extra Rs. 500 Off in cart</div>
                </div>
                <div>
                  <div className='text-white text-3xl'><span>&#8377;</span>{products[0]?.price||'price not exist'}</div>
                  <div className='text-white'>(Incl. all Taxes)</div>
                </div>
            </div>
        </div>
    </div>
  )
}
