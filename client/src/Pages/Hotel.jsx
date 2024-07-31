import HotelCard from "../Components/HotelCard";
import Nav from "../Components/Nav";


export default function Hotel()
{
    return(<div className="flex flex-col justify-center items-center h-svh z-0 ">
        <Nav/>
        <HotelCard/>
    </div>)
}