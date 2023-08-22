import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function CartBoard() {
    const [products,setProducts]=useState([])
    const [cart,setCart]=useState(false)
    const token = sessionStorage.getItem('jwtToken');
    const [itemqn,setItemqn]=useState(0)
    const [totalamount,setTotalamount]=useState(0)

   
    useEffect(()=>{
        console.log(token)
        axios.get("http://localhost:7078/cart/fetch",{
            headers: {
                Authorization: `Bearer ${token}`}
            })
        .then(response => {
            setProducts(response.data)
            console.log(response.data)
            let totalsum=0
            response.data.forEach(Number=>totalsum+=Number.price)
            console.log("total sum",totalsum)
            setTotalamount(totalsum)}
            
        )
        .catch(error => console.error('Error fetching data:', error));
        console.log("pring products value",products.length)
        if(products.length==0){
            console.log("empty cart")
            setCart(false)
        }else{
            // setProducts(products.productlist)
            console.log(products," fff",products[0].productlist)
            setCart(true)
            
        }
            
    },[])


  return (
    <div className='h-[100vh] w-[100%] flex justify-evenly mt-[15px]'>
        <div className='h-[98%] w-[65%] overflow-y-auto'>
            <h1 className='text-[25px] ml-[10px] '>Product List</h1>
            {products.map(product=>
                <ul className='list-none border-[1px] border-gray-300  h-[25vh] mt-[1px] flex  flex-col justify-evenly '>
                    <li key={product.id} className='text-white  mt-[4px] h-[70px] w-[90px] flex '>
                    <img className=' ml-[2px]' src={`data:image/jpeg;base64,${product.image}`}></img>
                        <div className='flex flex-col justify-evenly '>
                            <h1 className='text-black ml-[25px] h-[20px] w-[600px] mt-[2px]'>{product.itemName}</h1>
                            <h1 className='text-black ml-[25px] h-[20px] w-[600px] mt-[2px]'><span>&#8377;</span>{product.price}</h1>
                        </div>
                        
                    </li>
                    <li className='h-[50px] flex items-center'>
                        <button className='rounded-full h-[25px] w-[25px] ml-[2px] border-[1px] border-black '>+</button>
                        <button className=' h-[25px] w-[25px]  border-[1px] border-black ml-[5px] '>{itemqn}</button>
                        <button className='rounded-full h-[25px] w-[25px]  border-[1px] border-black ml-[5px]'>-</button>
                        <button className='text-[#12DAA8] text-[20px] ml-[30px]'>Remove</button>
                    </li>
                </ul>
                
            )}
        </div>
        <div className='h-[45%] w-[28%] bg-[#d9e0de] '>
            <div className='flex flex-col space-y-4 justify-center  h-full w-full'>
                <h1 className='text-[20px] font-semibold text-[#3b4442] ml-[10px]'>Price Details</h1>
                <div className='border-[1px] border-white w-full'></div>
                <h1 className='ml-[10px]'>Price ({products.length} items)</h1>
                <div className='ml-[10px] flex justify-between pr-[20px]'>
                <h1 >Discount</h1>
                <h1>-<span>&#8377;</span>0</h1>
                </div>
                <div className='ml-[10px] flex justify-between pr-[20px]'>
                <h1 >Delivery</h1>
                <h1>Free</h1>
                </div>
                <div className='border-[1px] border-white w-full'></div>
                <div className='flex justify-between pr-[20px]'>
                    <h1 className='text-[25px]'>Total Amount</h1>
                    <h1 className='text-[25px]'><span>&#8377;</span>{totalamount}</h1>
                </div>
            </div>
        </div>
        
    </div>
  )
}
