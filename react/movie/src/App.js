
import './App.css';
import axios from 'axios'
import {useState} from 'react'
function App() {
  const obj={
    actor:"",
    title:"",
    country:"",
    imgurl:"",
    language:"",
    year:"",
    director:"",
    imdbrat:""
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
    const res=await axios(`https://www.omdbapi.com/?t=${state1}&apikey=e3501404`)
    console.log(res)
    setState2({
      actor:res.data.Actors,
      title:res.data.Title,
      country:res.data.Country,
      imgurl:res.data.Poster,
      language:res.data.Language,
      year:res.data.Year,
      director:res.data.Director,
      imdbrat:res.data.imdbRating
    })
  }
  return (
    <div className=" h-[100vh] w-[100vw] ">
      <div className="mt-[50px] ml-[50px]">
        <h1 className="text-[25px]">Enter Movie Name</h1>
        <input type="text" placeholder="Search" className="border-[2px] h-[35px] w-[350px] mt-[20px] bg-gray-300 placeholder-black" onChange={changin}></input>
        <button className="h-[36px] w-[150px] bg-red-300 ml-[50px] hover:bg-red-900 hover:text-white " onClick={changefun}>Search</button>
      </div>
      <div className='flex   mt-[50px] ml-[50px] gap-[30px]'>
        <img src={state2.imgurl} className="h-[500px] w-[400px]"></img>
        <div className='h-[500px] w-[600px] flex items-center'>
          <table className="mt-[50px] text-[20px] h-[200px] w-[800px] ">
            <tr >
              <td>Title:{state2.title}</td>
              <td>Actors:{state2.actor}</td>
            </tr>
            <tr>
              <td>Country:{state2.country}</td>
              <td>Language:{state2.language}</td>
            </tr>
            <tr>
              <td>Year:{state2.year}</td>
              <td>Director:{state2.director}</td>
            </tr>
            <tr>imdbRating:{state2.imdbrat}</tr>
          </table>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
