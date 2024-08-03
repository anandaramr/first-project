import GymCard from "../Components/GymCard"
import Nav from "../Components/Nav"


export default function Gym()
{
    return( <div className="flex flex-col justify-center items-center h-svh z-0">
        <Nav/>
        <GymCard/>
    </div>      
    )
}