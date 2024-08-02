import { useNavigate } from "react-router-dom"

function Card({heading,comp,source}){

    const navigate = useNavigate()

    const click = () => {
        navigate(`/${heading.toLowerCase()}`)
    }

    return(
        <div className="font-raleway mt-1 flex flex-col sm:flex-row justify-evenly items-center">
            <img className="size-[92%] xsm:size-[80%] sm:size-[40%] rounded-3xl sm:m-3 lg:m-6 hover:scale-[1.05] duration-200" onClick={click} src={source} alt="heading"/>
            <div className=" flex justify-start flex-col items-start">
            <h2 className="font-semibold text-2xl mx-4 lg:mx-10 mt-10 mb-1 sm:my-1 lg:my-5">{heading}</h2>
            <p className="line-clamp-5 lg:line-clamp-6 mx-4 lg:mx-10 text-xs md:text-sm lg:text-base">{comp}</p>
            <button onClick={click} className="group self-center sm:self-start mx-4 lg:mx-10 my-5 p-2 font-poppins border-2 rounded border-slate-900 hover:bg-slate-900 hover:text-white duration-150">
                {heading} 
                <span className="group-hover:pl-3 pl-2 duration-[inherit]">{">>"}</span>
                </button>
            </div>
        </div>
    )
}
export default Card