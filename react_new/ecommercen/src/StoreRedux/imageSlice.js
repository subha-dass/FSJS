import React from 'react'
import { createSlice } from '@reduxjs/toolkit'


export const imageSlice = createSlice({ 
    name: 'imageAll', 
    initialState: {
        inval:0,
        image:[
            'img1.webp',
            'img2.webp',
            'img3.webp',
            'img4.webp'
           
        ],
        imagefab:[
        'imgfab1.webp',
        'imgfab2.webp'
        ]
    },
    reducers: { }
})

export default imageSlice.reducer 