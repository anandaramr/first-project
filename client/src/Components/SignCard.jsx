export default function SignCard()
{
    return(
        <div className="border-black border-2 rounded-lg shadow-lg font-poppins p-7 m-5 text-center flex flex-col justify-center w-auto h-auto bg-orange-200">
            <h1 className="bold p-1">Welcome to <span className="font-playwrite">Mariot!</span></h1>
            <div className="p-1">
                <label htmlFor="name">User name:</label>
                <input type="text" id="name"  placeholder="username" autoComplete="off" className="border-1 bg-inherit outline-none "></input>
            </div>
            <div className="p-1">
                <label htmlFor="email">Email: </label>
                <input type="text" id="email"  placeholder="x@gmail.com" autoComplete="off" className="border-1 bg-inherit outline-none"></input>
            </div>
            <div className="p-1">
                <label htmlFor="pass">Password: </label>
                <input type="text" id="pass"  placeholder="password" autoComplete="off" className="border-1 bg-inherit outline-none"></input>
            </div>
            <div className="p-1">
                <label htmlFor="re-enter">Re-enter: </label>
                <input type="text" id="re-enter"  placeholder="password" autoComplete="off" className="border-1 bg-inherit outline-none"></input>
            </div>
            
            <button className="   hover:bg-black hover:text-white text-black border-black  py-1 px-2 rounded">Sign up</button>
        </div>
    )
}