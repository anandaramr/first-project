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

    const openSettings = () => {
        const popup = document.querySelector('#settings')
        popup.classList.toggle('scale-100')
    }

    const closeSettings = () => {
        const popup = document.querySelector('#settings')
        popup.classList.remove('scale-100')
    }

    const profile = (evt) => {
        evt.preventDefault()
        navigate('/profile')
    }

    const logout = (evt) => {
        evt.preventDefault()
        navigate('/login')
    }

    const account = <button onClick={openSettings} onBlur={(evt) => closeSettings(evt)} className="relative w-[12%] flex justify-end px-3 cursor-default">
        <span className="material-symbols-outlined text-white text-3xl mx-3 hover:text-emerald-400 duration-150">settings</span>
    </button>

    const notLoggedIn = <div className="relative top-1 w-[12%] h-fit">
        <button className="border-2 border-white rounded px-2 text-md text-white hover:bg-white hover:text-black  hover:shadow-lg font-semibold duration-150 py-1 mx-2" onClick={() => navigate('/login')}>Login</button>
        <button className="border-2 border-white rounded px-2 text-md text-white hover:bg-white hover:text-black  hover:shadow-lg font-semibold duration-150 py-1 mx-2" onClick={() => navigate('/signup')}>Sign Up</button>
    </div>

    const loading = <div className="w-[12%] h-fit">
        <div className="animate-pulse bg-rose-100 inline rounded w-[10%] px-3 py-2 mx-2 text-transparent top-1 relative">Login</div>
        <div className="animate-pulse bg-rose-100 inline rounded w-[10%] px-3 py-2 mx-2 text-transparent top-1 relative">Sign Up</div>
    </div>

    return(
        <div className="fixed w-full z-20 top-0 h-[11svh] cursor-default">
            
            <div className=" bg-gray-900 w-full items-center opacity-80 h-[11vh] shadow-[0px_-10px_15px_black] flex justify-between select-none">
            
                <div className="w-[12%] m-1"></div>

                <p className="font-playwrite size inline-block text-3xl text-white" >Life of Pine</p>
                {isLoading && loading}
                {!isLoading && (user ? account : notLoggedIn)}
            </div>
            
            <div className="group select-none h-svh w-fit">
                <span className="material-symbols-outlined flex items-center absolute top-0 p-4 py-6 pr-14 text-3xl" >menu</span>
                <Menu />
            </div>

            <div id="settings" className="scale-0 bg-white rounded py-3 text-black font-montserrat text-md absolute top-[10svh] right-3 space-y-2">
                <div id="profile" onMouseDown={(evt) => profile(evt)} className="hover:bg-slate-100 px-3 py-2 duration-150">
                    <span className="material-symbols-outlined pr-3 pl-1 text-2xl">account_circle</span>
                    <span className="relative -top-1 pr-1">Profile</span>
                </div>
                <div id="logout" onMouseDown={logout} className="hover:text-rose-500 hover:bg-slate-100 px-3 py-2 duration-150">
                    <span className="material-symbols-outlined pr-3 pl-1 text-2xl">logout</span>
                    <span className="relative -top-1 pr-1">Logout</span>
                </div>
            </div>
        </div>
    )
}
export default Nav;