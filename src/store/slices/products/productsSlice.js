import { createSlice } from "@reduxjs/toolkit";
import { fetchDecreaseProduct, fetchDeleteProduct, fetchEditProduct, fetchPatchProduct, fetchPostAddProduct, fetchProducts } from "./productsAPI";

const productsSlice = createSlice({
    name:'products',
    initialState:{
        productsData: [],
        filteredProducts: {
            products:[],
            notFound:false,
            opacity:false
        }
    },
    reducers:{
        filterProducts(state,{payload}){
            state.filteredProducts.products = payload;
            state.filteredProducts.notFound = false
        },
        resetFilteredProducts(state,{payload}){
            state.filteredProducts.notFound = true;
        },
        setOpacity(state,{payload}){
            state.filteredProducts.opacity = payload
        }
    },
    extraReducers:{
        [fetchProducts.fulfilled] : (state,{payload}) => {
            state.productsData = payload
        },
        [fetchPostAddProduct.fulfilled]:(state,{payload}) => {
            state.productsData.push(payload)
        },
        [fetchDeleteProduct.fulfilled] : (state,{payload}) => {
            state.productsData = state.productsData.filter(product => product.id !== payload)
        },
        [fetchEditProduct.fulfilled] : (state,{payload}) => {
            state.productsData = state.productsData.map(product => product.id === payload.id ? payload : product)
        }
    }
})

export const selectProducts = state => state.products
export const {filterProducts,resetFilteredProducts,setOpacity} = productsSlice.actions;
export const productsReducer = productsSlice.reducer