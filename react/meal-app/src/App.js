
import './App.css';
import axios from 'axios'
import {useState} from 'react'
function App() {
  const obj={
    name:"",
    strInstructions:"",
    country:"",
    imgurl:"",
    catagory:"",
    youtube:""
  }
  const [state1,setState1]=useState("")
  const [state2,setState2]=useState(obj)
  const changin=(e)=>{
    setState1(e.target.value)
    console.log(state1)
  }
  const changefun=async (e)=>{
    if (state1.length==0){
      alert("Please Enter movie name")
    }
    const res=await axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${state1}`)
    console.log(res)
    setState2({
      name:res.data.meals[0].strMeal,
      strInstructions:res.data.meals[0].strInstructions,
      country:res.data.meals[0].strArea,
      imgurl:res.data.meals[0].strMealThumb,
      catagory:res.data.meals[0].strCategory,
      youtube:res.data.meals[0].strYoutube
    })
  }
  return (
    <div className=" h-[100vh] w-[100vw] ">
      <div className="mt-[50px] ml-[50px]">
        <h1 className="text-[25px]">Enter Food  Name</h1>
        <input type="text" placeholder="Search" className="border-[2px] h-[35px] w-[350px] mt-[20px] bg-gray-300 placeholder-black" onChange={changin}></input>
        <button className="h-[36px] w-[150px] bg-red-300 ml-[50px] hover:bg-red-900 hover:text-white " onClick={changefun}>Search</button>
      </div>
      <div className='flex   mt-[50px] ml-[50px] gap-[30px]'>
        <img src={state2.imgurl} className="h-[500px] w-[400px]"></img>
        <div className='h-[500px] w-[600px] flex items-center'>
          <table className="mt-[50px] text-[20px] h-[200px] w-[800px] ">
            <tr className='mt-[10px]'>
              <td>Name:{state2.name}</td>
              
            </tr>
            <tr className='mt-[10px]'>
              <td><td>Instructions:{<div className="overflow-scroll h-[200px] w-[300px]">{state2.strInstructions}</div>}</td></td>
            </tr>
            <tr className='mt-[10px]'>
              <td>Country:{state2.country}</td>
            </tr>
            <tr className='mt-[10px]'><td>Catagory:{state2.catagory}</td></tr>
          </table>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
