import { createSlice } from '@reduxjs/toolkit' //next js redux toolkit  
export const counterSlice = createSlice({ 
name: 'counter', 
initialState: { 
value:{
    m1:["Saadda Haq (Featuring Orianthi Panagaris On Guitars) - Rockstar 128 Kbps.mp3","Sadda Haq","Mohit Chauhan"],
    m2:["Dard Tere.mp3","Dard Tere","Ishaan Khan"],
    m3:["Tu Mera Hogaya Hai - Tadap.mp3","Tu Mera Hogaya Hai","Jubin Nautiyal"],
    m4:["Tera-Hi-Naam(PagalWorld).mp3","Tere Naam","Sarit Dutta"],
    m5:["Tera-Hi-Naam(PagalWorld).mp3","Bhagwan Hai Kahan","Sarit Dutta","OIP.jpg"],
    m6:["Dard Tere.mp3","Bhagwan Hai1 Kahan","Sarit Dutta","R.jpg"],
    m7:["Tu Mera Hogaya Hai - Tadap.mp3","Bhagwan Hai Kahan","Sarit Dutta","new-bollywood-songs-nadiyon-paar-51623939732.webp"],
    m8:["Tera-Hi-Naam(PagalWorld).mp3","Bhagwan Hai Kahan","Sarit Dutta","download (1).jpg"],
    m9:["Tera-Hi-Naam(PagalWorld).mp3","Bhagwan Hai Kahan","Sarit Dutta","download (1).jpg"],
    m10:["Tera-Hi-Naam(PagalWorld).mp3","Bhagwan Hai Kahan","Sarit Dutta","download (1).jpg"],
    m11:["Tera-Hi-Naam(PagalWorld).mp3","Bhagwan Hai Kahan","Sarit Dutta","download (1).jpg"],
    m12:["Tera-Hi-Naam(PagalWorld).mp3","Bhagwan Hai Kahan","Sarit Dutta","download (1).jpg"],
    m13:["Tera-Hi-Naam(PagalWorld).mp3","Bhagwan Hai Kahan","Sarit Dutta","download (1).jpg"],
    m14:["Tera-Hi-Naam(PagalWorld).mp3","Bhagwan Hai Kahan","Sarit Dutta","download (1).jpg"],
    m15:["Tera-Hi-Naam(PagalWorld).mp3","Bhagwan Hai Kahan","Sarit Dutta","download (1).jpg"],
    m16:["Tera-Hi-Naam(PagalWorld).mp3","Bhagwan Hai Kahan","Sarit Dutta","download (1).jpg"],
} ,
currentValue:"0",
playmusic:false,
playmusic1:false,
nextIt:"5",
}, 
reducers: { 
    next:(state,action)=>{
        let keys=Object.keys(state.value)
        let nextIndex=keys.indexOf(action.payload)+1
        if(nextIndex<=10){
            console.log(nextIndex+" "+keys)
            let nextItem=keys[nextIndex]
            
            console.log(nextItem,state.nextIt)
            state.nextIt=nextItem
            console.log(state.nextIt+"change value")
            state.currentValue=nextItem
        }
        else{
            nextIndex=0
            console.log(nextIndex+" "+keys)
            let nextItem=keys[nextIndex]
            
            console.log(nextItem,state.nextIt)
            state.nextIt=nextItem
            console.log(state.nextIt+"change value")
            state.currentValue=nextItem
        }
        
    },
    newvalue:(state,action)=>{
        state.currentValue=action.payload
        
    },
    music:(state)=>{
        state.playmusic=true
    },
    musicname:(state,action)=>{
        if(state.playmusic1 && action.payload=="1")
            state.playmusic1=false
        else if(!state.playmusic1 && action.payload!=="1")
            state.playmusic1=true
    },
} 
} ) 
export const { prev,newvalue,music,musicname,next } = counterSlice.actions 
export default counterSlice.reducer 