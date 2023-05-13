import axios from "axios";

const API = "http://localhost:4000/user/"

//Register user
const register = async (userData)=> {
    const response = await axios.post(`${API}register`, userData)

    if (response.data) {
        localStorage.setItem("userTelecom", JSON.stringify(response.data))
    }
    return response.data
}

//Login user
const login = async (userData)=> {
    const response = await axios.post(`${API}login`, userData)

    if (response.data) {
        localStorage.setItem("userTelecom", JSON.stringify(response.data))
    }
    return response.data
}

//logout user
const logout = async () => {
    return localStorage.removeItem("userTelecom")
}

const AuthService = {
    register, 
    login,
    logout
}

export default AuthService