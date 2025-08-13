import { API_BASE_URL } from "./config/env.js";
import axios from "axios";
import store from "./redux/store.js";

const publicRequest = axios.create({
    baseURL: API_BASE_URL,

})


const userRequest = axios.create({
    baseURL: API_BASE_URL,

})

userRequest.interceptors.request.use((config) => {
    const token = store.getState()?.user?.currentUser?.accessToken
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config
},
    (error) => Promise.reject(error)
)

export { publicRequest, userRequest };