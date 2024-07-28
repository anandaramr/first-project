import AuthContext from "../Auth/AuthContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../Components/Menu"

function Nav(){

    const { user, isLoading, authorize } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        authorize()
    })

    const notLoggedIn = <div>
        <button className="border-2 border-white rounded px-2 text-md text-white hover:bg-white hover:text-black  hover:shadow-lg font-semibold duration-150 py-1 mx-2 top-1 relative" onClick={() => navigate('/login')}>Login</button>
        <button className="border-2 border-white rounded px-2 text-md text-white hover:bg-white hover:text-black  hover:shadow-lg font-semibold duration-150 py-1 mx-2 top-1 relative" onClick={() => navigate('/signup')}>Sign Up</button>
    </div>

    const loading = <div>
        <div className="animate-pulse bg-rose-100 inline rounded w-[10%] px-2 py-1 mx-2 text-transparent top-2 relative">Login</div>
        <div className="animate-pulse bg-rose-100 inline rounded w-[10%] px-2 py-1 mx-2 text-transparent top-2 relative">Sign Up</div>
    </div>

    return(
        <div className="fixed w-full">
            
            <div className=" bg-gray-900  items-center opacity-80 h-[11vh] shadow-[0px_-10px_15px_black] flex justify-between p-4 cursor-default select-none">
            
                <div></div>

                <p className="font-playwrite size inline-block text-3xl text-white" >Life of Pine</p>
                {isLoading && loading}
                {!isLoading && (user ? <span className="material-symbols-outlined text-white flex items-center text-3xl">account_circle</span> : notLoggedIn)}
            </div>
            
            <div className="group select-none cursor-default h-svh w-fit">
                <span  className="material-symbols-outlined flex items-center absolute top-2 p-4 text-3xl text-white" >menu</span>
                <Menu />
            </div>
        </div>
    )
}
export default Nav;