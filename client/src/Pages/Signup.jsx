import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Signup(){

    const navigate = useNavigate()
    const [ error, setError ] = useState("")
    const [ usernameExists, setUsernameExists ] = useState(false)

    const validateUsername = async (evt) => {
        evt.target.classList.remove('border-b-rose-500')
        evt.target.classList.add('focus-within:border-b-emerald-400')

        const val = evt.target.value
        if(!val) return;

        await axios.get(`http://localhost:3000/api/user/search/${val}`)
        .then(res => {
            setUsernameExists(res.data.found)
            if(res.data.found) {
                evt.target.classList.remove('focus-within:border-b-emerald-400')
                evt.target.classList.add('border-b-rose-500')
            }
        })
    }

    const signup = () => {
        const username = document.querySelector("#username").value
        const password = document.querySelector("#password").value
        const confirm = document.querySelector("#confirm").value
        const email = document.querySelector("#mail").value

        if(!username || !password){
            setError("Username and password required")
            return
        }

        if(usernameExists){
            setError("Username already exists")
            return
        }

        if(password!=confirm){
            setError("Passwords do not match")
            return
        }

        const data = { username, password, email }
        axios.post('http://localhost:3000/api/user/signup', data)
        .then(res => {
            document.cookie = `auth=${res.data.accessToken}`
            document.cookie = `token=${res.data.refreshToken}`
            navigate('/')
        })
        .catch(() => setError("Server error"))
    }

    return(
            <div className="flex justify-center items-center min-h-full border-2 bg-orange-100">
            <div className="flex flex-col justify-center items-center text-center">

                <h1 className="font-playwrite font-bold text-3xl">Mariot!</h1>
                <div className="border-black border-2 rounded-lg shadow-lg font-poppins px-20 p-7 m-5 text-center flex flex-col justify-center w-auto h-auto bg-orange-200">

                    <div className="mb-2">
                        {error && <p className="text-rose-500 text-sm border-2 border-rose-600 rounded"><span className="material-symbols-outlined text-sm relative top-[0.15rem] px-1">error</span>{error}</p>}
                    </div>

                    <div className="p-1">
                        <input type="text" spellCheck="false" onChange={(evt) => validateUsername(evt)} id="username"  placeholder="username" autoComplete="off" className="border-b-2 w-72 px-2 py-2 bg-inherit outline-none focus-within:border-b-emerald-400 duration-200"></input>
                    </div>
                    <div className="p-1">
                        <input type="text" spellCheck="false" id="mail"  placeholder="email" autoComplete="off" className="border-b-2 w-72 px-2 py-2 bg-inherit outline-none focus-within:border-b-emerald-400 duration-200"></input>
                    </div>
                    <div className="p-1">
                        <input type="text" spellCheck="false" id="password"  placeholder="password" autoComplete="off" className="border-b-2 w-72 px-2 py-2 bg-inherit outline-none focus-within:border-b-emerald-400 duration-200"></input>
                    </div>
                    <div className="p-1">
                        <input type="text" spellCheck="false" id="confirm" placeholder="confirm password" autoComplete="off" className="border-b-2 w-72 px-2 py-2 bg-inherit outline-none focus-within:border-b-emerald-400 duration-200"></input>
                    </div>

                    <div>
                        <button onClick={signup} className="mt-6 border-2 rounded-md hover:bg-black hover:text-white text-black border-black  py-1 px-2 duration-150">Sign up</button>
                    </div>

                </div>

            </div>
            </div>
        )
}