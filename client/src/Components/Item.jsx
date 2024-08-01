import { useNavigate } from "react-router-dom"

function Item({name,content}){

    const navigate = useNavigate()

    return(
        <div onClick={() => navigate(`/${content.toLowerCase()}`)} className="ml-[8%] px-8 py-2 basis-1/2 w-fit duration-100 hover:bg-[#ffffff] hover:text-[#071c11] my-4 rounded-3xl">
            <span className="material-symbols-outlined pr-2 relative top-1">{name}</span>
            {content}
        </div>
    )
}
export default Item