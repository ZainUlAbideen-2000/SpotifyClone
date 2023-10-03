import { configureStore } from '@reduxjs/toolkit';
import songReducer from '../reducer/songReducer';


export const store = configureStore({
    reducer: {
        song: songReducer,
    },
});