import Item from './Item.jsx'

function Menu()
{
    return(
        <div className="bg-red-200 opacity-80 shadow-[-5px_16px_15px_black] font-poppins text-lg  absolute -left-[20%]  h-full w-[20%] duration-200 ease-out pointer group-hover:left-0 ">
            <div>
            <Item name={"roofing"} content={"Auditorium"}/>
            <Item name={"night_shelter"} content={"Rooms"}/>
            <Item name={"Sprint"} content={"Sports"}/>
            </div>
        </div>
    )
}
export default Menu