import Welcome from "./Welcome"
function Cover()
{
    return(
        <div>
        <img className="absolute top-0 -z-20 blur-sm" src="../assets/back2.avif" alt="cover"/>
        <Welcome/>
        </div>
    )
}
export default Cover
