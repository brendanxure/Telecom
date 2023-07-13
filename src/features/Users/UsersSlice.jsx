import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import UsersService from './UsersService'

const initialState = {
    AllUsers : [],
    isLoadingAllUsers: false,
    isSuccessAllUsers: false,
    isErrorAllUsers: false,
    isMessageAllUsers: "" 
}

//get all users
export const getAllUsers = createAsyncThunk('allUsers/get', async(_, thunkAPI)=> {
    try {
        const accesstoken = thunkAPI.getState().auth.user.accessToken
        return await UsersService.findAllUsers(accesstoken)
    } catch (error) {
        const message = error.response.data
        return thunkAPI.rejectWithValue(message)
    }
})

const UsersSlice = createSlice({
  name: 'allUser',
  initialState,
  reducers: {
    resetAllUsers: (state) => {
        state.isLoadingAllUsers = false
        state.isErrorAllUsers= false
        state.isSuccessAllUsers= false
        state.isMessageAllUsers=""
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(getAllUsers.pending, (state)=> {
        state.isLoadingAllUsers = true
    })
    .addCase(getAllUsers.fulfilled, (state, action)=> {
        state.isLoadingAllUsers = false
        state.isSuccessAllUsers = true
        state.AllUsers = action.payload 
    })
    .addCase(getAllUsers.rejected, (state, action)=> {
        state.isLoadingAllUsers = false
        state.isErrorAllUsers = true
        state.isMessageAllUsers = action.payload
    })
}
});

export const allUsers = state => state.allUser

export const {resetAllUsers} = UsersSlice.actions

export default UsersSlice.reducer