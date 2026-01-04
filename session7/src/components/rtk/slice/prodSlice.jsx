import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("prodSlice/fetchProducts", async () =>{
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
})

export const prodSlice = createSlice({
    initialState: [{id:1,title:"r3da"}],
    name:"prodSlice",
    reducers:{
        addProduct: (state,action) => {
            console.log(action);
            state.push(action.payload)
        },
        getProduct: (state , action) => {
            return state;
        }
    },

    extraReducers: (builder) =>{
        // builder.addCase(fetchProducts.pending, (state, action) => {

        // })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            console.log(action)
            return state = action.payload;
        })
    }
})


export const {addProduct , getProduct} = prodSlice.actions;
export default prodSlice.reducer;