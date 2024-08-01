import { useNavigate } from "react-router-dom"
function Item({name,content,active}){
    const navigate = useNavigate()
    const val=(active)?"bg-[#ffffff] text-[#071c11]":"hover:bg-[#ffffff] hover:text-[#071c11]"
    const path=content=='Home'?"":content;
    return(
        <div onClick={() => navigate(`/${path.toLowerCase()}`)} className={`ml-[8%] px-8 py-2 basis-1/2 ${val} w-fit duration-100  my-4 rounded-3xl`}>
            <span className="material-symbols-outlined pr-2 relative top-1">{name}</span>
            {content}
        </div>
    )
}
export default Item