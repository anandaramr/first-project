import { useNavigate } from "react-router-dom"

function Item({name,content,active}){
    const navigate = useNavigate()
    const val = (active) ? "bg-white text-[#071c11]" : "hover:bg-white hover:text-[#071c11]"
    const path = content == 'Home' ? "" : content

    return(
        <div onClick={() => navigate(`/${path.toLowerCase()}`)} className={`ml-5 px-4 md:px-6 w-[70%] py-2 ${val} duration-100 my-4 rounded-3xl`}>
            <span className="material-symbols-outlined pr-2 relative top-1">{name}</span>
            {content}
        </div>
    )
}
export default Item