import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'



const balance = JSON.parse(localStorage.getItem("userTelecomBalance"))


const WalletSlice = createSlice({
  name: "wallet",
  initialState : {
    balance: balance ? balance : 0
  },
  reducers: {
    updateWalletBalance: (state, action) => {
        state.balance = action.payload;
      },
  },
});

export const walletBalance = state => state.wallet

export const {reset,updateWalletBalance} = WalletSlice.actions

export default WalletSlice.reducer