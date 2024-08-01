import { Link } from "react-router-dom"
import Nav from "../Components/Nav"
function Profile()
{
    return(
        <div className="">
            <Nav path="Profile"/>
            <img className="w-full object-cover h-svh centre  absolute -z-10 opacity-50 blur-sm "src="../assets/pro.jpg" alt="profile background"/>
            <div className="flex-col flex items-center justify-center h-svh space-y-16 ">
            <h2 className="font-poppins text-white text-center text-5xl">Profile</h2>
            <div className="flex-col  border-2 w-[40%]  rounded-lg p-8  text-[20px] bg-white space-y-4 font-poppins">
            <p className="">Username:<span className="p-3 italic font-montserrat text-[18px] hover:text-[20px]">kulli</span></p>
            <p className="">Name:<span className="p-3 italic font-montserrat text-[18px] hover:text-[20px]">Devika</span></p>
            <p className="">Email:<span className="p-3 italic font-montserrat text-[18px] hover:underline hover:text-[20px]">kblah@undampori.com </span></p>
            <p className="">Gym-Membership:<span className="p-3 italic font-montserrat text-[18px] hover:text-green-400 hover:text-[20px]">Active</span></p>
            <p className="">Room:<span className="p-3 italic font-montserrat text-[18px] hover:text-red-400 hover:text-[20px]">Nil</span></p>
            {/* <p className="text-center">More</p> */}
            </div>  
        </div>
        </div>
    )
}
export default Profile