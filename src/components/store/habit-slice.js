import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    habits:[],
};

const habitSlice = createSlice({
    name: 'habit',
    initialState,
    reducers:{
        addHabit: ()=>{
            
        }
    }
});

export const {addHabit} = habitSlice.actions;
export default habitSlice.reducers;

