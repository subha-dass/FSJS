import { createSlice } from '@reduxjs/toolkit'
  
export const counterSlice = createSlice({ 
name: 'counter', 
initialState: { 
value: 0 ,
cartCount: 0,
setShowOverlay:false,
islogin:false,
isSignin:false,
isloggedin:false,
issignedin:false,

}, 
reducers: { 
overvalue: (state,action) => { 
state.setShowOverlay =!state.setShowOverlay
}, 
isloginfun:state=>{
    state.islogin=!state.islogin
    state.isSignin=false
},
isSigninfun:state=>{
    state.isSignin=!state.isSignin
    state.islogin=false
},
iscommon:state=>{
    state.isSignin=false;
    state.islogin=false;
},
decrease: state => { 
state.value -= 1 
} ,
loggedin: state =>{
    state.isloggedin=!state.isloggedin
    state.issignedin=false
    state.islogin=false
    state.setShowOverlay=false
    if(state.isloggedin===false){state.cartCount=0}
},
siggnedin: state =>{
    state.issignedin=!state.issignedin
    state.isloggedin=true;
    state.isSignin=false;
    // state.setShowOverlay=false;
},
cartCountUpdate: (state,action) =>{
    if(state.cartCount<=15){
        state.cartCount=action.payload

    }
}
} 
}) 
// case under reducers becomes an action 
export const { overvalue, decrease,isloginfun,isSigninfun,iscommon,loggedin,siggnedin,cartCountUpdate } = counterSlice.actions 
export default counterSlice.reducer 