import axios from "axios";

const API = "http://localhost:4000/api/wallet/"

// Commence Payment in paystack

const makePayment = async(amount, accesstoken) => {
    const config = {
        headers: {
            Authoriztion: `Bearer ${accesstoken}`
        }
    }
    const response = await axios.post(`${API}initialize`, amount, config)

    return response
}
const verifyPayment = async(reference, accesstoken)=> {
    const config = {
        headers: {
            Authoriztion: `Bearer ${accesstoken}`
        }
    }
    const response = await axios.get(`${API}/verify/${reference}`, config)
    return response
}


const InitializePayService = {
    makePayment,
    verifyPayment
}

export default InitializePayService