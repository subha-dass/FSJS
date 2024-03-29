import { configureStore } from '@reduxjs/toolkit' 
import CounterSlice from './CounterSlice'
import { saveState, loadState } from './localstorage'
import imageSlice from './imageSlice';
import imagefeb from './imagefeb';
const persistedState = loadState();

const store= configureStore({ 
reducer: {
    counter:CounterSlice,
    imageAll:imageSlice,
    imageAll1:imagefeb,},
    preloadedState: persistedState
 //add reducers here 
}) 
store.subscribe(() => {
    saveState(store.getState()); // Save state to local storage whenever the store changes
  });
  

  export default store;