function Card({heading,comp,source})
{
    return(
        <div className="font-raleway flex justify-evenly">
            <img className="size-[40%] rounded-3xl m-6 hover:scale-[1.05] duration-200" src={source} alt="heading"/>
            <div className=" flex justify-start flex-col items-start">
            <h2 className="font-semibold text-2xl mx-10 my-14">{heading}</h2>
            <p className="line-clamp-6 mx-10">{comp}</p>
            <button className="group mx-10 my-5 p-2 font-poppins border-2 rounded border-slate-900 hover:bg-slate-900 hover:text-white duration-150">
                {heading} 
                <span className="group-hover:pl-3 gorup-hover:font-extrabold pl-2 duration-[inherit]">{">>"}</span>
                </button>
            </div>
        </div>
    )
}
export default Card