import axios from "axios";

const API = "http://localhost:4000/api/wallet/"


//getWallet
const getWallet = async(accesstoken)=> {
    const config = {
        headers: {
            Authorization: `Bearer ${accesstoken}`
        }
    }
    const response = await axios.get(`${API}get-wallet`, config)
    return response.data
} 



const WalletService = {
    getWallet
}

export default WalletService