import Item from './Item.jsx'

function Menu()
{
    return(
        <div className="text-white  opacity-60 bg-gray-900 shadow-[-5px_16px_13px_white]  font-poppins text-lg   absolute -left-[20%]  h-full w-[20%] duration-200 ease-out pointer group-hover:left-0  ">
            <div>
            <Item name={"roofing"} content={"Auditorium"}/>
            <Item name={"night_shelter"} content={"Rooms"}/>
            <Item name={"Sprint"} content={"Sports"}/>
            </div>
        </div>
    )
}
export default Menu