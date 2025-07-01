import { useState,useEffect } from "react"
import axiosInstance from "../api/axios.js"


function useFetch(url, options = {}) {
    const [data, setData] = useState([])
    const [isloading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    async function fetchData() {
        setIsLoading(true)
        try {
            const response = await axiosInstance.get(url, options)
            setData(response.data)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            setError(error)
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        fetchData()
    },[url])

    const refetch = () => {
        fetchData()
    }

    return {data, isloading, error, refetch}    
}

export default useFetch