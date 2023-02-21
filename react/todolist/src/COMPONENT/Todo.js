import React,{useState} from 'react'
import '../Style/Style.css'
function Todo() {
    const value=''
    const list=[]
    const [data,setData]=useState(list)
    const [data1,setData1]=useState(value)
    function onChangedata(e){
        setData1(e.target.value)
        console.log(e.target.value)
    }
    function additems(){
        setData([...data,data1])
        console.log(data)      
    }
    // function rightbtn(){
    //     setData(data.pop())
    // }
   const cross=(e,i)=>{
    console.log(i)
    const newdata=data.filter((item,index)=>index!==i)
    setData([...newdata])
   }
   function resetitem(){
    setData([])
    setData1("")
   }
  return (
    <div>
        <h1>Todo List</h1>
        <div>
            <input 
            className='app'
            placeholder='Enter the Item want to add'
            onChange={onChangedata}
            value={data1}
            />
            <button className='btn' onClick={additems}>Add</button>
            <button className='btn' onClick={resetitem}>Reset</button>
        </div>
        <div >
            <ul className='app3'>{data.map((d,i)=>(<li key={i} className='app2'>{d}<div className='btn-4'><button className='btn-1' onClick={(e)=>cross(e,i)}><span>&#10060;</span></button></div></li>))}</ul>
        </div>
        
    </div>
  )
}

export default Todo