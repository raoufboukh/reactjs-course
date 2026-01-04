import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchProducts = createAsyncThunk('prodSlice/fetchProducts',async() => {
    const response = await fetch('http://localhost:9000/products');
    const data = await response.json();
    return data;
})
export const prodSlice = createSlice({
    initialState:[],
    name: 'prodSlice',
    reducers:{},
    extraReducers:(builder) =>{
        builder.addCase(fetchProducts.fulfilled,(state,action) => {
            // console.log(action);
            return action.payload;
        })
    }
})


// export const {} = prodSlice.actions;
export default prodSlice.reducer;