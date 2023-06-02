import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import InitializePayService from './InitializePayService'

const initialState = {
    payment : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

//commence payment for funding wallet
export const initializePaystackPayment = createAsyncThunk("initializePay/paystack", async(amount, thunkAPI) => {
    try {
        const accesstoken = thunkAPI.getState().auth.user.accessToken
        return await InitializePayService.makePayment(amount, accesstoken)
    } catch (error) {
        const message = error.response.data
        return thunkAPI.rejectWithValue(message)
    }
})

const InitializePaySlice = createSlice({
  name: initializePay,
  initialState,
  reducers: {
    reset: (state) => {
        state.payment= null
        state.isLoading = false
        state.isError= false
        state.isSuccess= false
        state.message=""
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(initializePaystackPayment.pending, (state)=> {
        state.isLoading = true
    })
    .addCase(initializePaystackPayment.fulfilled, (state, action)=> {
        state.isLoading = false
        state.isSuccess = true
        state.payment = action.payload
    })
    .addCase(initializePaystackPayment.rejected, (state, action)=> {
        state.isLoading = false
        state.isError= true
        state.message= action.payload 
    })
  }
});

export const makePayment = state => state.initializePay

export const {reset} = InitializePaySlice.actions

export default InitializePaySlice.reducer