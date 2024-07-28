import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Login(){

    const navigate = useNavigate()

    const login = () => {
        const username = document.querySelector("#username").value
        const password = document.querySelector("#password").value
        const data = { username, password }

        axios.post('http://localhost:3000/api/user/login', data)
        .then(res => {
            document.cookie = `auth=${res.data.accessToken}`
            document.cookie = `token=${res.data.refreshToken}`
            navigate('/')
        })
    }

    return(
        <div className="flex justify-center items-center min-h-full border-2 bg-orange-100">
            <div className="flex flex-col justify-center text-center">
                <h1 className="font-playwrite p-4 font-bold text-3xl">Mariot!</h1>
                <div className="border-black border-2 rounded-lg shadow-xl font-poppins p-7 px-20 m-5 text-center flex flex-col justify-center bg-orange-200">
                    <div className="p-1">   
                        <input type="text" id="username"  placeholder="username" autoComplete="off" className="w-72  border-b-2  px-2 py-2 bg-inherit outline-none "></input>
                    </div>
                    <div className="p-1 mt-2">   
                        <input type="text" id="password"  placeholder="password" autoComplete="off" className="w-72 border-b-2 px-2 py-2 border-1 bg-inherit outline-none"></input>
                    </div>
                    <div className="flex justify-center items-center">
                        <button onClick={login} className="mt-6 border-2 my-3 rounded-md hover:bg-black hover:text-white text-black border-black py-1 px-2">Login</button>
                    </div>
                    <p className="mt-3 text-xs">Don&apos;t have an account?<Link to="/signup" className="underline p-1">Sign Up!</Link></p>
                </div>
            
            </div>
        </div>
    )
}