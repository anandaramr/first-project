import Welcome from "./Welcome"

function Cover()
{
    return(
        <div className="select-none fixed w-full h-svh">
        <img className="absolute top-0 -z-20 blur-sm size-[100%]" src="../assets/lifeofpine.jpg" alt="cover"/>
        <Welcome/>
        </div>
    )
}
export default Cover
