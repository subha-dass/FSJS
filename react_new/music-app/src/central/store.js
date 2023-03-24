import { configureStore } from "@reduxjs/toolkit";
import MusicList from './musicSlice'

export const store=configureStore({
    reducer:{
        musiclist:MusicList,
    }
})