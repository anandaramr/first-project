export default function SignCard()
{
    return(
        <div className="flex flex-col justify-center items-center text-center">
            <h1 className="font-playwrite font-bold text-3xl">Mariot!</h1>
            <div className="border-black border-2 rounded-lg shadow-lg font-poppins px-20 p-7 m-5 text-center flex flex-col justify-center w-auto h-auto bg-orange-200">
                <div className="p-1">
                    <input type="text" id="username"  placeholder="username" autoComplete="off" className="border-b-2 w-72 px-2 py-2 bg-inherit outline-none "></input>
                </div>

                <div className="p-1">
                    <input type="text" id="email"  placeholder="email" autoComplete="off" className="border-b-2 w-72 px-2 py-2 bg-inherit outline-none"></input>
                </div>

                <div className="p-1">
                    <input type="password" id="password"  placeholder="password" autoComplete="off" className="border-b-2 w-72 px-2 py-2 bg-inherit outline-none"></input>
                </div>

                <div className="p-1">
                    <input type="password" id="confirm"  placeholder="confirm password" autoComplete="off" className="border-b-2 w-72 px-2 py-2 bg-inherit outline-none"></input>
                </div>
                
                <div>
                    <button className="mt-6 border-2  rounded-md hover:bg-black hover:text-white text-black border-black  py-1 px-2 ">Sign up</button>
                </div>
                
            </div>
            
        </div>
    )
}