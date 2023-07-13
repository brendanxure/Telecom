import axios from "axios"


const API = "http://localhost:4000/user"

const findAllUsers = async(accesstoken)=> {
    const config = {
        headers: {
            Authorization: `Bearer ${accesstoken}`
        }
    }
    const response = await axios.get(`${API}/get-all-user`, config)
    return response.data
}

const UsersService = {
    findAllUsers
}

export default UsersService