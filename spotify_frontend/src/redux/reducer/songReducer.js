// reducers/songReducer.js

import { createSlice } from '@reduxjs/toolkit';

const songSlice = createSlice({
    name: 'song',
    initialState: {
        name: '', 
        thumbnail: '', 
        playlistUrl: '', 
        uploadedFileName: '', 
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setThumbnail: (state, action) => {
            state.thumbnail = action.payload;
        },
        setPlaylistUrl: (state, action) => {
            state.playlistUrl = action.payload;
        },
        setUploadedFileName: (state, action) => {
            state.uploadedFileName = action.payload;
        },
    },
});

export const { setName, setThumbnail, setPlaylistUrl, setUploadedFileName } = songSlice.actions;

export default songSlice.reducer;
