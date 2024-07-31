import Item from './Item.jsx'

function Menu()
{
    return(
        <div className="text-white opacity-60 bg-gray-900 font-poppins text-lg absolute -left-[20%] h-svh w-[20%] duration-200 ease-out pointer group-hover:left-0">
            <div className='mt-10 space-y-6'>
            <Item name={"roofing"} content={"Auditorium"}/>
            <Item name={"night_shelter"} content={"Rooms"}/>
            <Item name={"Sprint"} content={"Sports"}/>
            </div>
        </div>
    )
}
export default Menu