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

        //Retrive PRODUCT
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
        },

        //Delete product

        deleteProductStart : (state) => {
            state.isFetching = true,
            state.error = false
        },
        deleteProductSucess : (state,action) => {
            state.isFetching = false,
            state.error = false,
            state.products = state.products.filter(item => item._id !== action.payload);
        },
        deleteProductFailure : (state)=>{
            state.isFetching = false,
            state.error = true
        },

        //add product

        addProductStart : (state) => {
            state.isFetching = true,
            state.error = false
        },

        addProductSucess : (state,action) => {
            state.isFetching = false,
            state.error = false,
            state.products.push(action.payload);
        },
        addProductFailure : (state)=>{
            state.isFetching = false,
            state.error = true
        },

        //update product
        updateProductStart : (state) => {
            state.isFetching = true,
            state.error = false
        },
        updateProductSucess : (state,action) => {
            state.isFetching = false,
            state.error = false,
            state.products = state.products.map(item=>item._id === action.payload._id ? action.payload : item);
        },
        updateProductFailure : (state)=>{
            state.isFetching = false,
            state.error = true
        }
    
    }
})


export const { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure,deleteProductFailure,deleteProductStart,deleteProductSucess } = productSlice.actions;
export default productSlice.reducer;