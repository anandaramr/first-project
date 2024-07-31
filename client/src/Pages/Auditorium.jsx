
import AuditCard from "../Components/AuditCard"
import Nav from "../Components/Nav"

export default function Auditorium()
{
    return(
        <div className="flex flex-col justify-center items-center h-svh z-0">
            <Nav/>
            <AuditCard/>      
        </div>
    )
}
