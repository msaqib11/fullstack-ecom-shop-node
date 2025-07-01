import axios from "axios";
import { API_BASE_URL } from "../config/env.js";

const axiosInstance = axios.create({
    baseURL : API_BASE_URL,
    headers : {
        "content-type" : "application/json"
    },
})

export default axiosInstance