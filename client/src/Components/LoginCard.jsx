export default function LoginCard()
{
    return(
        <div className="border-black border-2 rounded-lg shadow-lg font-poppins p-7 m-5 text-center flex flex-col justify-center w-auto h-auto bg-orange-200">
            <h1 className="bold">Sign in to <span className="font-playwrite">Mariot!</span></h1>
            <div >
                <label htmlFor="name">User name:</label>
                <input type="text" id="name"  placeholder="username" autoComplete="off" className="border-1 bg-inherit outline-none "></input>
            </div>
            <div>
                <label htmlFor="pass">Password: </label>
                <input type="text" id="pass"  placeholder="password" autoComplete="off" className="border-1 bg-inherit outline-none"></input>
            </div>
            <button className="   hover:bg-black hover:text-white text-black border-black  py-1 px-2 rounded">Login</button>
            <p>Don't have an account?<a href="" className="underline">sign up!</a></p>
        </div>
    )
}