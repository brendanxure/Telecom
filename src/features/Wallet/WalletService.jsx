import axios from "axios";

const API = "http://localhost:4000/api/wallet/"


//getWallet History
const getWalletHistory = async(accesstoken)=> {
    const config = {
        headers: {
            Authorization: `Bearer ${accesstoken}`
        }
    }
    const response = await axios.get(`${API}get-wallet-history`, config)
    return response.data
}

const WalletService = {
     getWalletHistory
}

export default WalletService