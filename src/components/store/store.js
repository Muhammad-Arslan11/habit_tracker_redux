import {configureStore} from '@reduxjs/toolkit';
import habitSlice from './habit-slice.js';

export const store = configureStore({
    reducer: {habits: habitSlice},
})