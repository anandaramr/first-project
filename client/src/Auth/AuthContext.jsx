import { createContext, useState } from "react";
import { axiosJWT } from "./axios";

const AuthContext = createContext()
export default AuthContext

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    
    function authorize(){
        axiosJWT.get('http://localhost:3000/api/user')
        .then(res => {
            setUser(res.data.user)
            setIsLoading(false)
        })
    }

    const context = {user, isLoading, authorize}

    return(
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    )
}