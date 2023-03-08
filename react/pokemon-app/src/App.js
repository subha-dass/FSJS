
import './style/style.css'
import axios from 'axios'
import {useState} from 'react'
function App() {
  const url={
    img:"",
    species:"",
    name:"",
    attack:"",
    defense:""
  }
  const [imgup,setImgup]=useState(url)
  const clickaction= async (e)=>{
    console.log(`https://pokeapi.co/api/v2/pokemon/${e.target.value}`)
    const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${e.target.value}`)
    console.log(res.data)
    setImgup({
      img:res.data.sprites.front_default,
      species:res.data.species.name,
      name:e.target.value,
      attack:res.data.stats[1].base_stat,
      defence:res.data.stats[2].base_stat
    })
    console.log(imgup)
   
  }
  return (
    <div className="APP1 text-3xl h-[100vh] w-[100vw] flex">
      <div className="w-[50%] h-[100vh] bg-blue-600 flex flex-col gap-[15px] items-center justify-center">
        <button className="border-[2px] h-[55px] w-[315px] border-[#a8a22d] hover:text-white rounded-[30px] text-[#a8a22d]" onClick={clickaction} value="pikachu">Pikachu</button>
        <button className="border-[2px] h-[55px] w-[315px] border-[#a8a22d] hover:text-white rounded-[30px] text-[#a8a22d]" onClick={clickaction} value="ditto">Ditto</button>
        <button className="border-[2px] h-[55px] w-[315px] border-[#a8a22d] hover:text-white rounded-[30px] text-[#a8a22d]" onClick={clickaction} value="bulbasaur">Bulbasaur</button>
        <button className="border-[2px] h-[55px] w-[315px] border-[#a8a22d] hover:text-white rounded-[30px] text-[#a8a22d]" onClick={clickaction} value="charmander">Charmander</button>
        <button className="border-[2px] h-[55px] w-[315px] border-[#a8a22d] hover:text-white rounded-[30px] text-[#a8a22d]" onClick={clickaction} value="charmeleon">Charmeleon</button>
        <button className="border-[2px] h-[55px] w-[315px] border-[#a8a22d] hover:text-white rounded-[30px] text-[#a8a22d]" onClick={clickaction} value="squirtle">Squirtle</button>
      </div>
      <div className="w-[50%] h-[100vh] bg-[#a8a22d] flex items-center justify-center">
        <div className="h-[400px] w-[450px] flex flex-col items-center justify-center">
          <img src={imgup.img} className="h-[120px] w-[250px] bg-[#a8a22d]" alt='ico'></img>
          <p className='tet-2xl mt-[8px] text-blue-600'>Name:{imgup.name}</p>
          <p className='tet-2xl mt-[5px] text-blue-600'>Species:{imgup.species}</p>
          <p className='tet-2xl mt-[5px] text-blue-600'>Attack:{imgup.attack}</p>
          <p className='tet-2xl mt-[5px] text-blue-600'>Defence:{imgup.defence}</p>
          
        </div>
      </div>
    </div>
  );
}

export default App;
