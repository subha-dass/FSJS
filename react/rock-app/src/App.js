import React,{useState} from 'react';
import './App.css';
import Rock from './Component/rock'
import Winbox from './Component/wining'
import Move from './Component/move';
function App() {
  const value={value:0,value1:0,value2:10}
  const [data1,setData1]=useState("")
  const [data,setData]=useState(value)

  return (
    <div className="App">
      <Rock/>
      <Winbox data1={data}/>
      <Move val={{data,setData}} val1={{data1,setData1}}/>
    </div>
  );
}

export default App;
