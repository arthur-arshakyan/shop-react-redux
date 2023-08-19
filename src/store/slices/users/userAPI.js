import {createAsyncThunk} from "@reduxjs/toolkit";
import {sendRequest} from "../../../helpers/sendRequest";

const {sendRequestGet, sendRequestPost, sendRequestDelete,sendRequestPatch} = sendRequest()

export const fetchAllUsers = createAsyncThunk(
    'users/fetchAllUsers',
    async ()=>{
        const result = await sendRequestGet('http://localhost:3001/users')

        return result
    }
)

export const fetchPostAddUser = createAsyncThunk(
    'users/fetchPostAddUser',
    async (data)=>{
        const result = await sendRequestPost('http://localhost:3001/users', data)
        return result
    }
)

export const fetchDeleteUser = createAsyncThunk(
    'users/fetchDeleteUser',
    async (id)=>{
        const result = await sendRequestDelete(`http://localhost:3001/users/${id}`)
        return id
    }
)

export const fetchEditUser = createAsyncThunk(
    'users/fetchEditUser',
    async (data)=>{
        const result = await sendRequestPatch(`http://localhost:3001/users/${data.id}`,data)
        return result
    }
)

export const fetchAddBlockUser = createAsyncThunk(
    'users/fetchAddBlockUser',
    async (data)=>{
        const result = await sendRequestPost('http://localhost:3001/blockedUsers',data)
        return result
    }
)

export const fetchDelBlockUser = createAsyncThunk(
    'users/fetchDelBlockUser',
    async (id)=>{
        const result = await sendRequestDelete(`http://localhost:3001/blockedUsers/${id}`)
        return id
    }
)

export const fetchAllBlockedUsers = createAsyncThunk(
    'users/fetchAllBlockedUsers',
    async ()=>{
        const result = await sendRequestGet('http://localhost:3001/blockedUsers')
        return result
    }
    
)

export const fetchPatchProduct = createAsyncThunk(
    'users/fetchPatchProduct',
    async (data)=>{
        const result = await sendRequestPatch(`http://localhost:3001/products/${data.id}`, {})
        return result
    }
)