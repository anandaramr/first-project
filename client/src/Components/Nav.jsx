import Menu from "../Components/Menu"
function Men(){

}

function Nav()
{
    return(
        <div className="">
        <div className="bg-red-200 flex justify-between p-4 shadow-md ">
            <div></div>
            <p className="font-playwrite size inline-block text-3xl " >Mariot</p>
            <span className="material-symbols-outlined flex items-center">account_circle</span>
        </div>
        <div className="group">
        <span  className="material-symbols-outlined flex items-center absolute top-0 p-4 text-3xl" >menu</span>
        <Menu />
        </div>
        </div>
    )
}
export default Nav;