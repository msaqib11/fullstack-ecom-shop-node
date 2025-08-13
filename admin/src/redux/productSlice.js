import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:[],
    isFetching:false,
    error:false
}

const productSlice = createSlice({
    name : "product",
    initialState,
    reducers : {

        //ADD PRODUCT
        fetchProductsStart : (state)=>{
            state.isFetching = true;
            state.error = false;
        },
        fetchProductsSuccess: (state,action)=>{
            state.isFetching = false;
            state.error = false;
            state.products = action.payload;
        },
        fetchProductsFailure: (state)=>{
            state.isFetching = false;
            state.error = true;
        }
    }
})


export const { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } = productSlice.actions;
export default productSlice.reducer;