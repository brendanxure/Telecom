import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import WalletService from './WalletService'

const initialState = {
    walletHistory: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

//get wallet history 

export const userWalletHistory = createAsyncThunk('walletHistory/get', async(_, thunkAPI)=> {
    try {
        const accessToken = thunkAPI.getState().auth.user.accessToken
        return await WalletService.getWalletHistory(accessToken)
    } catch (error) {
        const message = error.response.data
        return thunkAPI.rejectWithValue(message)   
    }
})

const WalletHistorySlice = createSlice({
  name: "walletHistory",
  initialState,
  reducers: {
    reset: (state) => {
        state.isLoading = false
        state.isError= false
        state.isSuccess= false
        state.message=""
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(userWalletHistory.pending, (state)=> {
        state.isLoading = true
    })
    .addCase(userWalletHistory.fulfilled, (state, action)=> {
        state.isLoading = false
        state.isSuccess = true
        state.walletHistory = action.payload
    })
    .addCase(userWalletHistory.rejected, (state, action)=> {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
    })
  } 
});

export const getUserWalletHistory = state => state.walletHistory

export const {reset} = WalletHistorySlice.actions

export default WalletHistorySlice.reducer