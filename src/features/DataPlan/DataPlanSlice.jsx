import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import DataPlanService from './DataPlanService'

const initialState = {
    dataPlans: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
}

//create Data Plan
export const createDataPlan = createAsyncThunk('createData/admin', async(dataPlan, thunkAPI)=> {
    try {
        const accesstoken = thunkAPI.getState().auth.user.accessToken
        return await DataPlanService.newDataPlan(dataPlan, accesstoken)
    } catch (error) {
        const message = error.response.data
        return thunkAPI.rejectWithValue(message)      
    }
})

//get All Data Plan
export const getAllDataPlan = createAsyncThunk('getAllData/admin', async(_, thunkAPI)=> {
    try {
        const accesstoken = thunkAPI.getState().auth.user.accessToken
        return await DataPlanService.allDataplan(accesstoken)
    } catch (error) {
        const message = error.response.data
        return thunkAPI.rejectWithValue(message)
    }
})

//get Data Plan by ID
export const getDataPlanById = createAsyncThunk('getDataById/admin', async(dataPlan, thunkAPI)=> {
    try {
        const accesstoken = thunkAPI.getState().auth.user.accessToken
        return await DataPlanService.dataPlanById(dataPlan, accesstoken)
    } catch (error) {
        const message = error.response.data
        return thunkAPI.rejectWithValue(message)
    }
})

//update Data Plan
export const updateDataPlanById = createAsyncThunk('updateData/admin', async(dataPlan, thunkAPI)=> {
    try {
        const accesstoken = thunkAPI.getState().auth.user.accessToken
        return await DataPlanService.changeDataPlanById(dataPlan, accesstoken)
    } catch (error) {
        const message = error.response.data
        return thunkAPI.rejectWithValue(message)
    }
})

//delete Data Plan
export const deleteDataPlanById = createAsyncThunk('deleteData/admin', async(dataPlanID, thunkAPI)=> {
    try {
        const accesstoken = thunkAPI.getState().auth.user.accessToken
        return await DataPlanService.removeDataPlanById(dataPlanID, accesstoken)
    } catch (error) {
        const message = error.response.data
        return thunkAPI.rejectWithValue(message)
    }
})

const DataPlanSlice = createSlice({
  name: "dataPlan",
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
    .addCase(createDataPlan.pending, (state)=> {
        state.isLoading = true
    })
    .addCase(createDataPlan.fulfilled, (state, action)=> {
        state.isLoading = false
        state.isSuccess = true
        state.dataPlans.push(action.payload) 
    })
    .addCase(createDataPlan.rejected, (state, action)=> {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
    })
    .addCase(getAllDataPlan.pending, (state)=> {
        state.isLoading = true
    })
    .addCase(getAllDataPlan.fulfilled, (state, action)=> {
        state.isLoading = false
        state.isSuccess = true
        state.dataPlans = action.payload
    })
    .addCase(getAllDataPlan.rejected, (state, action)=> {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
    })
    .addCase(getDataPlanById.pending, (state)=> {
        state.isLoading = true
    })
    .addCase(getDataPlanById.fulfilled, (state, action)=> {
        state.isLoading = false
        state.isSuccess = true
        state.dataPlans = action.payload
    })
    .addCase(getDataPlanById.rejected, (state, action)=> {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
    })
    .addCase(updateDataPlanById.pending, (state)=> {
        state.isLoading = true
    })
    .addCase(updateDataPlanById.fulfilled, (state, action)=> {
        const {_id} = action.payload
        state.isLoading = false
        state.isSuccess = true
        const updateData = state.dataPlans.filter(dataPlan=> dataPlan?._id !== _id)
        state.dataPlans = [...updateData, action.payload]
    })
    .addCase(updateDataPlanById.rejected, (state, action)=> {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
    })
    .addCase(deleteDataPlanById.pending, (state)=> {
        state.isLoading = false
    })
    .addCase(deleteDataPlanById.fulfilled, (state, action)=> {
        const {_id} = action.payload
        state.isLoading = false
        state.isSuccess = true
        const updatedData = state.dataPlans.filter(dataPlan=> _id !== dataPlan?._id)
        state.dataPlans = updatedData
    })
    .addCase(deleteDataPlanById.rejected, (state, action)=> {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
    })
  }
});

export const dataPackage = state => state.dataPlan 

export const {reset} = DataPlanSlice.actions

export default DataPlanSlice.reducer