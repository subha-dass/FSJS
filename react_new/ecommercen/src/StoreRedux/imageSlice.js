import React from 'react'
import { createSlice } from '@reduxjs/toolkit'


export const imageSlice = createSlice({ 
    name: 'imageAll', 
    initialState: {
        image:[
            'img1.webp',
            'img2.webp',
            'img3.webp',
            'img4.webp'
        ]
    },
    reducers: { }
})

export default imageSlice.reducer 