import { createSlice } from '@reduxjs/toolkit' //next js redux toolkit  
export const counterSlice = createSlice({ 
name: 'counter', 
initialState: { 
value:{
    m1:["Saadda Haq (Featuring Orianthi Panagaris On Guitars) - Rockstar 128 Kbps.mp3","Sadda Haq","Mohit Chauhan"],
    m2:["Dard Tere.mp3","Dard Tere","Ishaan Khan"],
    m3:["Tu Mera Hogaya Hai - Tadap.mp3","Tu Mera Hogaya Hai","Jubin Nautiyal"],
    m4:["Tera-Hi-Naam(PagalWorld).mp3","Tere Naam","Sarit Dutta"],
    m5:["Tera-Hi-Naam(PagalWorld).mp3","Nanga Punga Dost","Shreya Ghoshal","OIP.jpg"],
    m6:["Dard Tere.mp3","Raabta","Arijit Singh","R.jpg"],
    m7:["Tu Mera Hogaya Hai - Tadap.mp3","Nadiyon Paar","Sachin Jigar","new-bollywood-songs-nadiyon-paar-51623939732.webp"],
    m8:["Tera-Hi-Naam(PagalWorld).mp3","Filhall"," B Praak","download (1).jpg"],
    m9:["Tera-Hi-Naam(PagalWorld).mp3"," Dhadak","Ajay - Atul","Dhadak.png"],
    m10:["Tera-Hi-Naam(PagalWorld).mp3","Hamari Adhuri Kahani","Arijit Singh","images.jpg"],
    m11:["Tera-Hi-Naam(PagalWorld).mp3","Nanga Punga Dost","Shreya Ghoshal","OIP.jpg"],
    m12:["Dard Tere.mp3","Raabta","Arijit Singh","R.jpg"],
    m13:["Tu Mera Hogaya Hai - Tadap.mp3","Nadiyon Paar","Sachin Jigar","new-bollywood-songs-nadiyon-paar-51623939732.webp"],
    m14:["Tera-Hi-Naam(PagalWorld).mp3","Filhall"," B Praak","download (1).jpg"],
    m15:["Tera-Hi-Naam(PagalWorld).mp3"," Dhadak","Ajay - Atul","Dhadak.png"],
    m16:["Tera-Hi-Naam(PagalWorld).mp3","Hamari Adhuri Kahani","Arijit Singh","images.jpg"],
    m17:["Tera-Hi-Naam(PagalWorld).mp3","Kya Kare Kya Na Kare","Udit Narayan","download.jfif"],
    m18:["Tera-Hi-Naam(PagalWorld).mp3","Tu Cheez Badi Hai Mast Mast","Kavita Krishnamurthy and Udit Narayan","mqdefault.jpg"],
    m19:["Tera-Hi-Naam(PagalWorld).mp3","Yeh Kaali Kaali Ankhein","Kumar Sanu","hqdefault.jpg"],
    m20:["Tera-Hi-Naam(PagalWorld).mp3","Husn hai Suhana","bhijeet & Chandana Dixit ","3c501dcc6da60bab62172e95d3d74ed3.jpeg"],
    m21:["Tera-Hi-Naam(PagalWorld).mp3","Akhiyaan Milaoon Kabhi","Alka Yagnik","1543668651399033.jpg"],
    m22:["Tera-Hi-Naam(PagalWorld).mp3","Mere Khwabon Mein","Lata Mangeshkar","maxresdefault (1).jpg"],
    m23:["Tera-Hi-Naam(PagalWorld).mp3","Bhagwan Hai Kahan","Sarit Dutta","images.jpg"],
    m24:["Dard Tere.mp3","Raabta","Arijit Singh","R.jpg"],
    m25:["Tera-Hi-Naam(PagalWorld).mp3","Hamari Adhuri Kahani","Arijit Singh","images.jpg"],
    m26:["Tera-Hi-Naam(PagalWorld).mp3","Until I Found You (with Em Beihold) "," Em Beihold VersionStephen Sanchez","download (2).jfif"],
    m27:["Tera-Hi-Naam(PagalWorld).mp3","Bhagwan Hai Kahan","Sarit Dutta","artworks-qR1EymomQm0zacvg-4yWCHw-t500x500.jpg"],
    m28:["Tera-Hi-Naam(PagalWorld).mp3","Naatu Naatu (From Rrr)","Rahul Sipligunj, Kala Bhairava, M. M. Keeravani","download (1).jfif"],
    m29:["Tera-Hi-Naam(PagalWorld).mp3","Maan Meri Jaan","King","hqdefault (1).jpg"],
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
    prev:(state,action)=>{
        let keys=Object.keys(state.value)
        let nextIndex=keys.indexOf(action.payload)-1
        if(nextIndex>=0){
            console.log(nextIndex+" "+keys)
            let nextItem=keys[nextIndex]
            
            console.log(nextItem,state.nextIt)
            state.nextIt=nextItem
            console.log(state.nextIt+"change value")
            state.currentValue=nextItem
        }
        else{
            nextIndex=10
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