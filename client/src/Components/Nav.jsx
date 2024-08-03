import AuthContext from "../Auth/AuthContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../Components/Menu"

function Nav({path}){

    const { user, isLoading, authorize, logout } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        authorize()
    })

    const openSettings = (evt) => {
        const popup = document.querySelector('#settings')
        const exists = !popup.classList.contains('scale-0')
        
        popup.classList.toggle('scale-0')
        evt.target.animate([{ transform: `rotate(${exists ? "-60deg" : "60deg"})` }], { duration: 100, iterations: 1 })
    }

    const closeSettings = () => {
        const popup = document.querySelector('#settings')
        popup.classList.add('scale-0')
    }

    const profile = (evt) => {
        evt.preventDefault()
        navigate('/profile')
    }

    const doLogout = (evt) => {
        evt.preventDefault()
        logout()
    }

    const settings = <button onClick={openSettings} onBlur={(evt) => closeSettings(evt)} className="relative flex basis-1/5 xsm:basis-1/3 justify-end sm:px-3 cursor-default">
        <span className="material-symbols-outlined text-white text-3xl mx-3 hover:text-emerald-400 duration-150">settings</span>
    </button>

    const notLoggedIn = <div className="relative top-1 sm:px-6 flex flex-row-reverse flex-nowrap basis-1/5 xsm:basis-1/3">
        <button className="border-2 border-white rounded text-sm xsm:text-base px-2 text-md text-white hover:bg-white hover:text-black hover:shadow-lg font-semibold duration-150 py-1 mx-2 flex-shrink-0" onClick={() => navigate('/login')}>Login</button>
        <button className="hidden md:block border-2 border-white rounded px-2 text-md text-white hover:bg-white hover:text-black hover:shadow-lg font-semibold duration-150 py-1 mx-2 flex-shrink-0" onClick={() => navigate('/signup')}>Sign Up</button>
    </div>

    const loading = <div className="basis-1/5 xsm:basis-1/3 flex flex-row-reverse px-6"><div className="relative top-1 w-full xsm:w-[35%] h-[3svh] xsm:h-[5svh] flex flex-nowrap animate-pulse bg-white rounded"></div></div>

    return(
        <div className="fixed w-full z-20 top-0 h-[11svh] cursor-default">
            
            <div className=" bg-gray-900 w-full items-center opacity-80 h-[11vh] shadow-[0px_-10px_15px_black] flex justify-between select-none">
            
                <div className="basis-1/5 xsm:basis-1/3 m-1"></div>

                <p className="basis-3/5 xsm:basis-1/3 font-playwrite size inline-block text-center text-2xl xsm:text-3xl text-white" >Life of Pine</p>
                {isLoading && loading}
                {!isLoading && (user ? settings : notLoggedIn)}
            </div>
            
            <div className="group select-none h-svh w-fit">
                <span className="material-symbols-outlined flex items-center absolute top-0 p-4 py-6 pr-14 text-3xl text-white" >menu</span>
                <Menu path={path} />
            </div>

            <div id="settings" className="scale-0 bg-white rounded py-3 px-2 text-black font-montserrat text-md absolute top-[10svh] right-3 space-y-1">
                <div id="profile" onMouseDown={profile} className="hover:bg-slate-200 px-3 py-1 rounded duration-150">
                    <span className="material-symbols-outlined pr-3 pl-1 text-2xl">account_circle</span>
                    <span className="relative -top-1 pr-1">Profile</span>
                </div>
                <div id="logout" onMouseDown={doLogout} className="hover:text-rose-500 hover:bg-slate-200 px-3 py-1 rounded duration-150">
                    <span className="material-symbols-outlined pr-3 pl-1 text-2xl">logout</span>
                    <span className="relative -top-1 pr-1">Logout</span>
                </div>
            </div>
        </div>
    )
}
export default Nav;