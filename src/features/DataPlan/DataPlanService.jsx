import axios from "axios";

const API = "http://localhost:4000/api/dataplan/"

//create data plan

const newDataPlan = async(dataPlan, accesstoken) => {
    const config = {
        headers: {
            Authorization: `Bearer ${accesstoken}`
        }
    }
    const response = await axios.post(`${API}create-dataplan`, dataPlan, config)
    return response.data
}

//get all data plan 

const allDataplan = async(accesstoken) => {
    const config = {
        headers: {
            Authorization: `Bearer ${accesstoken}`
        }
    }
    const response = await axios.get(`${API}get-all-dataplan`, config)
    return response.data
}

//get data by ID

const dataPlanById = async(dataPlan, accesstoken) => {
    const {_id} = dataPlan
    const config = {
        headers: {
            Authorization: `Bearer ${accesstoken}`
        }
    }
    const response = await axios.get(`${API}get-dataplan/${_id}`, config)
    return response.data
}

// update data by ID

const changeDataPlanById = async(newDataPlan, accesstoken) => {
    const {_id} = newDataPlan
    const config = {
        headers: {
            Authorization: `Bearer ${accesstoken}`
        }
    }
    const response = await axios.put(`${API}update-dataplan/${_id}`, newDataPlan, config)
    return response.data
}

//delete data by ID

const removeDataPlanById = async(dataPlanId, accesstoken) => {
   const config = {
        headers: {
            Authorization: `Bearer ${accesstoken}`
        }
    }
    const response = await axios.delete(`${API}delete-dataplan/${dataPlanId}`, config)
    return response.data
}

const DataPlanService = {
    newDataPlan, allDataplan, dataPlanById, changeDataPlanById, removeDataPlanById
}

export default DataPlanService