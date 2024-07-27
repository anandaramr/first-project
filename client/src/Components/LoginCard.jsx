
export default function LoginCard()
{
    
    const name = document.getElementById("name")
    const pass=document.getElementById("pass")

    const log = ()=>
    {
        
        const uvalue=name.value;
        const pvalue=pass.value;
    }
    return(
        <div className="flex flex-col justify-center text-center">
            <h1 className="font-playwrite p-4  font-bold text-3xl">Mariot!</h1>
            <div className="border-black border-2 rounded-lg shadow-xl font-poppins p-7 px-20 m-5 text-center flex flex-col justify-center w-auto h-auto bg-orange-200">
                <div className="p-1">   
                    <input type="text" id="name"  placeholder="username" autoComplete="off" className="w-72  border-b-2  px-2 py-2 bg-inherit outline-none "></input>
                </div>
                <div className="p-1 mt-2">   
                    <input type="password" id="pass"  placeholder="password" autoComplete="off" className=" w-72 border-b-2 px-2 py-2 border-1 bg-inherit outline-none"></input>
                </div>
                <div className="flex justify-center items-center">
                    <button onClick={log} className=" mt-6 border-2  my-3 rounded-md hover:bg-black hover:text-white text-black border-black  py-1 px-2 ">Login</button>
                </div>
                <p className="mt-3 text-xs">Don't have an account?<a href="" className=" underline p-1 ">sign up!</a></p>
            </div>
            
        </div>
    )
}