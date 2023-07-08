import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import DataTransactionService from './DataTransactionService'

const initialState = {
    dataTransaction: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
    dataTransactionNetwork: ""
}

//get all data transactions
export const getAllDataTransaction = createAsyncThunk('datatransaction/user', async(_, thunkAPI)=> {
    try {
       const accesstoken = thunkAPI.getState().auth.user.accessToken
       return await DataTransactionService.findAllDataTransaction(accesstoken)
    } catch (error) {
        const message = error.response.data
        return thunkAPI.rejectWithValue(message)
    }
})

const DataTransactionSlice = createSlice({
  name: "dataTransaction",
  initialState,
  reducers: {
    resetDataTransactions: (state) => {
        state.isLoading = false
        state.isError= false
        state.isSuccess= false
        state.message=""
    },
    dataTransactionByDates: (state, action) => {
        state.dataTransaction = action.payload
    },
    setDataTransactionNetwork: (state, action) => {
        state.dataTransactionNetwork = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(getAllDataTransaction.pending, (state)=> {
        state.isLoading = true
    })
    .addCase(getAllDataTransaction.fulfilled, (state, action)=> {
        state.isLoading = false
        state.isSuccess = true
        state.dataTransaction = action.payload 
    })
    .addCase(getAllDataTransaction.rejected, (state, action)=> {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
    })
}
});

export const dataTransactions = state => state.dataTransaction

export const {resetDataTransactions, dataTransactionByDates, setDataTransactionNetwork} = DataTransactionSlice.actions

export default DataTransactionSlice.reducer