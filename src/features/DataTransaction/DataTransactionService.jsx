import axios from "axios";

const API = 'http://localhost:4000/api/data'

const findAllDataTransaction = async(accesstoken)=> {
    const config = {
        headers: {
            Authorization: `Bearer ${accesstoken}`
        }
    }
    const response = await axios.get(`${API}/get-data-transactions`, config)
    return response.data
}

const DataTransactionService = {
    findAllDataTransaction
}

export default DataTransactionService