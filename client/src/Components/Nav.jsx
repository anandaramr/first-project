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

    const div = <div>
        <button className="border-2 border-red-300 rounded px-2 text-sm hover:bg-red-300 text-pink-800 hover:text-white hover:shadow-lg font-semibold duration-150 py-1 mx-2 top-1 relative" onClick={() => navigate('/login')}>Login</button>
        <button className="border-2 border-red-300 rounded px-2 text-sm hover:bg-red-300 text-pink-800 hover:text-white hover:shadow-lg font-semibold duration-150 py-1 mx-2 top-1 relative" onClick={() => navigate('/signup')}>Sign Up</button>
    </div>

    const loading = <div>
        <div className="animate-pulse bg-rose-100 inline rounded w-[10%] px-2 py-1 mx-2 text-transparent top-2 relative">Login</div>
        <div className="animate-pulse bg-rose-100 inline rounded w-[10%] px-2 py-1 mx-2 text-transparent top-2 relative">Sign Up</div>
    </div>

    return(
        <div className="">
            <div className="bg-red-200 flex justify-between p-4 shadow-md cursor-default select-none">
                <div></div>
                <p className="font-playwrite size inline-block text-3xl" >Mariot</p>
                {isLoading && loading}
                {!isLoading && (user ? <span className="material-symbols-outlined flex items-center text-3xl">account_circle</span> : div)}
            </div>
            
            <div className="group select-none cursor-default">
                <span  className="material-symbols-outlined flex items-center absolute top-0 p-4 text-3xl" >menu</span>
                <Menu />
            </div>
        </div>
    )
}
export default Nav;