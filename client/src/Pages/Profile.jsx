import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Nav from "../Components/Nav"
import axios from "axios"
import AuthContext from "../Auth/AuthContext"

function Profile(){

    const { user, isLoading } = useContext(AuthContext)
    const [ details, setDetails ] = useState("")

    useEffect(() => {
        if(user) axios.get(`http://localhost:3000/api/user/search/${user}`)
        .then((res) => {
            setDetails(res.data.details)
        })
    }, [user])

    return(
        <div className="select-none">
            <Nav />
                <img className="w-full object-cover h-svh centre saturate-[0.9] absolute -z-10 opacity-40 blur-sm"src="../../assets/pro.jpg" alt="profile background"/>
                <div className="flex-col flex items-center justify-center h-svh space-y-16 ">
                    <h2 className="font-poppins text-white text-center text-5xl">Profile</h2>
                {!isLoading && user && 
                    <div className="flex-col  border-2 w-[40%]  rounded-lg p-8  text-[20px] bg-white space-y-4 font-poppins">
                        <p className="">Username:<span className="p-3 italic font-montserrat text-lmd select-text">{details?.username}</span></p>
                        <p className="">Name:<span className="p-3 italic font-montserrat text-lmd select-text">{details?.name}</span></p>
                        <p className="">Email:<span className="p-3 italic font-montserrat text-lmd underline decoration-2 hover:text-rose-500 hover:decoration-rose-500 select-text duration-100">{details?.email} </span></p>
                        <p className="">Gym-Membership:<span className="p-3 italic font-montserrat text-lmd select-text duration-150 hover:text-rose-500">{details?.sports?.active ? "Active" : "Inactive"}</span></p>
                        <p className="">Room:<span className="p-3 italic font-montserrat text-lmd select-text duration-150 hover:text-rose-500">{details?.room?.active ? "Active" : "Inactive"}</span></p>
                    </div>}
                
                {isLoading && <div className="w-[40%] h-[36.5svh] rounded bg-white animate-pulse"></div>}

                {!isLoading && !user &&
                    <div className="w-[40%] h-[30svh] bg-white font-poppins flex justify-center items-center text-xl">
                        <p>You&apos;re not signed in! <Link to='/login' className="text-rose-400 underline">Login&#8599;</Link> for more</p>
                    </div>
                }
                </div>

        </div>
    )
}
export default Profile