import { createContext, useState } from "react";
import { axiosJWT } from "./axios";
import axios from 'axios'
import { getCookie } from "../../utils";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext()
export default AuthContext

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()
    
    function authorize(){
        axiosJWT.get('http://localhost:3000/api/user')
        .then(res => {
            setUser(res.data.user)
            setIsLoading(false)
        })
        .catch(() => setIsLoading(false))
    }

    function logout(){
        const token = getCookie('token')
        axios.post('http://localhost:3000/api/user/logout', {token})
        .then(() => {
            document.cookie = "auth= ; Expires=Thu, 01 Jan 1970 00:00:01 GMT"
            document.cookie = "token= ; Expires=Thu, 01 Jan 1970 00:00:01 GMT"
            navigate('/login')
        })
    }

    const context = {user, isLoading, authorize, logout}

    return(
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    )
}