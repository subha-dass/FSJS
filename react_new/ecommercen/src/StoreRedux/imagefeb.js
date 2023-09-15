import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
export const imagefeb = createSlice({ 
    name: 'imageAll1', 
    initialState: {

        imagefab:[
        'imgfab1.webp',
        'imgfab2.webp'
        ],
        imagefeb1:[
            'imgfeb31.webp',
            'imgfeb32.webp',
            'imgfeb33.webp',
            'imgfeb34.webp'
        ]
    },
    reducers: { }
})

export default imagefeb.reducer 
