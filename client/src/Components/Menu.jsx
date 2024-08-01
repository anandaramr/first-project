import Item from './Item.jsx'

function Menu({path})
{
    return(
        <div className="text-white opacity-60 bg-gray-900 font-poppins text-lg absolute -left-[20%] h-svh w-[20%] duration-200 ease-out pointer group-hover:left-0">
            <div className='mt-10 space-y-6'>
            <Item name={"home"} content={"Home"} active={(path=="Home"?true:false)}/>
            <Item name={"roofing"} content={"Auditorium"} active={(path=="Auditorium"?true:false)}/>
            <Item name={"night_shelter"} content={"Rooms"} active={(path=="Rooms"?true:false)}/>
            <Item name={"Sprint"} content={"Sports"} active={(path=="Sports"?true:false)}/>
            </div>
        </div>
    )
}
export default Menu