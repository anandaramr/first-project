import Nav from "../Components/Nav"
import Cover from "../Components/Cover"
import Card from "../Components/Card"
export default function Home(){

    return (
        <div className="">
            <Nav/>
            <Cover/>
            <span className="material-symbols-outlined absolute top-[80svh] select-none cursor-default animate-[2s_linear_infinite_bounce]  text-white text-7xl w-full text-center">keyboard_arrow_up</span>
            <div className="flex justify-center absolute top-[90svh] ">
            <Card/>
            </div>
        </div>
    )
}