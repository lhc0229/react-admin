import axios from 'axios'
import { getToken } from "@/utils/token";

const service = axios.create({
    baseURL: 'http://127.0.0.1:3000',
    timeout: 5000
})

service.interceptors.request.use(
    config => {
        const token = getToken()
        if (token) {
            // config.headers['X-Token'] = getToken()
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)


service.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        return Promise.reject(error)
    }
)

export default service