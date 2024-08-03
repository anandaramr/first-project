import axios from "axios";
import { getCookie } from "../../utils";
import { jwtDecode } from 'jwt-decode'

export const axiosJWT = axios.create()

axiosJWT.interceptors.request.use(async (config) => {
    const date = new Date()
    const token = getCookie('auth')
    const controller = new AbortController()

    if(!token) controller.abort()

    const decodedToken = jwtDecode(token)
    if(decodedToken.exp*1000 < date.getTime()){
        await refresh()
    }

    config.headers["authorization"] = `BEARER ${getCookie('auth')}`
    return config;
}, err => Promise.reject(err))

async function refresh(){
    const token = getCookie('token')
    const data = { token }

    await axios.post('http://localhost:3000/api/user/refresh', data)
    .then(res => {
        document.cookie = `auth=${res.data.accessToken}`
        document.cookie = `token=${res.data.refreshToken}`
    })
    .catch(err => {
        console.log(err)
    })
}