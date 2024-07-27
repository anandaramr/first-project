export default function Header()
{
    return(
        <header >
            <div className="flex justify-between items-center p-5">
                <h1 className=" top-0 left-20 text-xl  ">Mariot</h1>
                <div className="flex justify-center ">
                    <button className=" bg-blue-950 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded p-5">
                        Login
                    </button>
                    <a href="">SIgn in</a>
                </div>
            </div>
        </header>
    )
   
}