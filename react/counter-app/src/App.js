
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { increase,decrease,incrementval } from './counterSlice';
import { useState } from 'react';

function App() {
  const count=useSelector((state)=>state.counter.value)
  const [state1,setState1]=useState("")
  const dispatch = useDispatch()
  return (
    <div className="bg-black h-[100vh] w-[100vw] flex flex-col items-center justify-center">
      <div className='flex gap-[30px] mb-[20px]'>
        <input type='text' className='border-white border-[2px] text-white h-[40px] w-[230px] bg-black py-[10px] pl-[110px]' onChange={(e)=>{setState1(e.target.value)}}></input>
        <button className='border-white border-[2px] text-white h-[40px] w-[200px]' onClick={()=>{dispatch(incrementval(+state1))}}>Increment by value</button>
      </div>
       <div className='flex gap-[20px] items-center justify-center'>
        <button className='border-white border-[2px] text-white h-[40px] w-[150px]' onClick={()=>dispatch(increase())}>+</button>
        <p className='border-white border-[2px] text-white h-[40px] w-[120px] flex items-center justify-center'>{count}</p>
        <button className='border-white border-[2px] text-white h-[40px] w-[150px]' onClick={()=>dispatch(decrease())}>-</button>
       </div>
    </div>
  );
}

export default App;
