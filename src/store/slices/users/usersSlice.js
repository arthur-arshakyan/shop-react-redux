import {createSlice} from "@reduxjs/toolkit";
import {fetchAddBlockUser, fetchAllBlockedUsers, fetchAllUsers, fetchDelBlockUser, fetchDeleteUser, fetchEditUser, fetchPostAddUser} from "./userAPI";
import { fetchDecreaseProduct, fetchDeleteCartProduct, fetchPatchProduct } from "../products/productsAPI";

const usersSlice = createSlice({
    name:'users',
    initialState:{
        isAdmin:false,
        isBlocked:false,
        usersData:[],
        blockedUsers:[],
        currentUser:null
    },
    reducers:{
        logIn(state,{payload}){
            state.currentUser = payload
        },
        logOut:(state) => {
            state.currentUser = null
            state.isBlocked = false
            state.isAdmin = false
        },
        isAuthAdmin(state,){
            state.isAdmin = true
        },
        isAuthBlockedUser:(state) => {
            state.isBlocked = true
        },
        addToCart:(state, {payload}) => {
            state.currentUser.cardProducts.push(payload)
        }
    },
    extraReducers:{
        [fetchAllUsers.fulfilled] : (state,{payload}) => {
            state.usersData = payload
        },
        [fetchPostAddUser.fulfilled]:(state,{payload}) => {
            state.usersData.push(payload)
        },
        [fetchDeleteUser.fulfilled] : (state,{payload}) => {
            state.usersData = state.usersData.filter(user => user.id !== payload)
        },
        [fetchEditUser.fulfilled] : (state,{payload}) => {
            state.usersData = state.usersData.map(user=> user.id === payload.id ? payload : user)
        },
        [fetchAddBlockUser.fulfilled] : (state,{payload})=> {
            state.blockedUsers.push(payload)
        },
        [fetchDelBlockUser.fulfilled] : (state,{payload})=> {
            state.blockedUsers = state.blockedUsers.filter(user=> user.id !== payload)
        },
        // [fetchPatchProduct.fulfilled] : (state, {payload}) => {
        //     state.productsData = state.productsData.map(product => product.id === payload.id ? payload : product)
        // }
        [fetchAllBlockedUsers.fulfilled] : (state,{payload}) => {
            state.blockedUsers = payload
        },
        [fetchPatchProduct.fulfilled] : (state,{payload}) => {
            state.currentUser = payload
        },
        [fetchDecreaseProduct.fulfilled] : (state, {payload}) => {
            state.currentUser = payload
        },
        [fetchDeleteCartProduct.fulfilled] : (state, {payload}) => {
            state.currentUser = payload
        }
    },
})

export const selectUsers = (state) => state.users;

export const {logIn, logOut, isAuthAdmin, isAuthBlockedUser, addToCart} = usersSlice.actions;

export const usersReducer = usersSlice.reducer;