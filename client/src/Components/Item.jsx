function Item({name,content})
{
    return(
        <div className="ml-[8%] px-8 py-2 basis-1/2 w-fit hover:bg-red-100 my-4   hover:rounded-3xl ">
            <span className="material-symbols-outlined pr-2">{name}</span>
            {content}
        </div>
    )
}
export default Item