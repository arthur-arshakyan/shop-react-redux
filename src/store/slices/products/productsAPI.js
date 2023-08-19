import { createAsyncThunk } from "@reduxjs/toolkit";
import {sendRequest} from "../../../helpers/sendRequest";


const {sendRequestGet,sendRequestDelete, sendRequestPatch, sendRequestPost} = sendRequest()

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const result = await sendRequestGet('http://localhost:3001/products');
        return result
    }
)

export const fetchPostAddProduct = createAsyncThunk(
    'products/fetchPostAddProducts',
    async (data)=>{
        const result = await sendRequestPost('http://localhost:3001/products', data)
        return result
    }
)

export const fetchEditProduct = createAsyncThunk(
    'users/fetchEditProduct',
    async (data)=>{
        const result = await sendRequestPatch(`http://localhost:3001/products/${data.id}`,data)
        return result
    }
)

export const fetchDeleteProduct = createAsyncThunk(
    'products/fetchDeleteProduct',
    async (id) => {
        const result = await sendRequestDelete(`http://localhost:3001/products/${id}`)
        return id
    }
)

export const fetchPatchProduct = createAsyncThunk(
    'users/fetchPatchProduct',
    async (data)=>{
        const user = await sendRequestGet(`http://localhost:3001/users/${data.id}`)
        
        if(user.cartProducts.find(prod => prod.id === data.product.id)){
            user.cartProducts = user.cartProducts.map(prod => prod.id === data.product.id 
            ?
            {
                ...prod, productQuantity: +prod.productQuantity + 1, total: +(prod.productQuantity + 1) * prod.price
            }
            :
            prod
        )}else{
            user.cartProducts.push({...data.product, productQuantity: 1, total : data.product.price})
        }

        const result = await sendRequestPatch(`http://localhost:3001/users/${data.id}`,
            {
                cartProducts: user.cartProducts
            }
        )
        return result
    }
)

export const fetchDeleteCartProduct = createAsyncThunk(
    'users/fetchDeleteCartProduct',
    async (data) => {
        const user = await sendRequestGet(`http://localhost:3001/users/${data.id}`)
        user.cartProducts = user.cartProducts.filter(prod => prod.id !== data.product.id)

        const result = await sendRequestPatch(`http://localhost:3001/users/${data.id}`,
            {
                cartProducts: user.cartProducts
            }
        )
        return result
    }
)

export const fetchDecreaseProduct = createAsyncThunk(
    'users/fetchDecreaseProduct',
    async (data) => {
        const user = await sendRequestGet(`http://localhost:3001/users/${data.id}`)
        if(data.product.productQuantity === 1){
            user.cartProducts = user.cartProducts.filter(prod => prod.id !== data.product.id)
        }else{
            user.cartProducts = user.cartProducts.map(prod => prod.id === data.product.id
            ?
            {
                ...prod, productQuantity: +prod.productQuantity - 1, total: +(prod.productQuantity - 1) * prod.price
            }
            :
            prod
            )
        }

        const result = await sendRequestPatch(`http://localhost:3001/users/${data.id}`,
            {
                cartProducts: user.cartProducts
            }
        )
        return result
    }
)