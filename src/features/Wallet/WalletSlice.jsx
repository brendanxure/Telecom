import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import WalletService from './WalletService'

const initialState = {
    wallet : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

//getting user wallet
export const userWallet = createAsyncThunk("userwallet/get", async(_, thunkAPI) => {
    try {
        const accesstoken = thunkAPI.getState().auth.user.accessToken
        return await WalletService.getWallet(accesstoken)
    } catch (error) {
        const message = error.response.data
        return thunkAPI.rejectWithValue(message)
    }
})

const WalletSlice = createSlice({
  name: "wallet",
  initialState : {
    balance: 0,
  },
  reducers: {
    reset: (state) => {
        state.isLoading = false
        state.isError= false
        state.isSuccess= false
        state.message=""
    },
    updateWalletBalance: (state, action) => {
        state.balance = action.payload;
      },
  },
  extraReducers: (builder) => {
    builder
    .addCase(userWallet.pending, (state)=> {
        state.isLoading = true
    })
    .addCase(userWallet.fulfilled, (state, action)=> {
        state.isLoading = false
        state.isSuccess = true
        state.wallet = action.payload
    })
    .addCase(userWallet.rejected, (state, action)=> {
        state.isLoading = false
        state.isError= true
        state.message= action.payload 
    })
  }
});

export const getUserWallet = state => state.wallet

export const {reset,updateWalletBalance} = WalletSlice.actions

export default WalletSlice.reducer