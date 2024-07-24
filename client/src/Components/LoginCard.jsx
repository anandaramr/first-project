export default function LoginCard()
{
    return(
        <div className="border-black border-2 rounded-lg shadow-md p-10 m-5 text-center flex flex-col justify-center max-w-sm">
            <h1>Sign in to Mariot!</h1>
            <div >
                <label htmlFor="name">User name:</label>
                <input type="text" id="name"  placeholder="username" className="border-1 "></input>
            </div>
            <div>
                <label htmlFor="pass">Password: </label>
                <input type="text" id="pass"  placeholder="password" className="border-1 "></input>
            </div>
            <button className=" bg-blue-950 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded p-5">Login</button>
        </div>
    )
}