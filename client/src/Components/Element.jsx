function Card({heading,comp,source})
{
    return(
        <div className="font-raleway flex justify-evenly ">
            <img className="size-[40%] rounded-3xl m-6" src={source} alt="heading"/>
            <div className=" flex justify-start flex-col ">
            <h2 className="font-semibold text-2xl mx-10 my-14">{heading}</h2>
            <p className="line-clamp-6 mx-10">{comp}</p>
            </div>
        </div>
    )
}
export default Card