let data1
const country=document.querySelector('.p1')
const state=document.querySelector('.p2')
const cityName=document.querySelector('.p3')
const humidity=document.querySelector('.p4')
const wind=document.querySelector('.p5')
const temp=document.querySelector('.p6')
const image=document.querySelector('.img-1')
const imname=document.querySelector('.p7')
const inputdata=document.querySelector(".inp-1")
const  getdata=async (event)=>{
    const city=inputdata.value
    if(!city){
        alert("Enthe the city name")
    }
    const fetch_data=await fetch(`https://api.weatherapi.com/v1/current.json?key=9735e0c98f4f40fa8c9140348231102&q=${city}`)
    const data=await fetch_data.json()
    // data1=data
    console.log(data);
    country.innerText=data.location.country
    state.innerText=data.location.region
    console.log(data.location.name ,city)
    cityName.innerText=data.location.name
    humidity.innerText=data.current.humidity
    wind.innerText=data.current.wind_kph+"kmph"
    temp.innerText=data.current.temp_c+'\xB0'
    image.src=data.current.condition.icon
    imname.innerText=data.current.condition.text
}