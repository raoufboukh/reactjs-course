import { createSlice } from "@reduxjs/toolkit";


export const Slice = createSlice({
    initialState: 1000,
    name:'bankReducer',
    reducers:{
        withdraw: (state , action) => {
            return state  = state - action.payload;
        },
        deposite: (state , action) => {
            return state  = state + action.payload;
        }
    }
})


export const {withdraw , deposite} = Slice.actions;
export default Slice.reducer;