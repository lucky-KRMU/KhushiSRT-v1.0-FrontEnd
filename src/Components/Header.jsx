import {React} from "react";
import { StarIcon } from "@heroicons/react/24/solid"

function Header (){
    return (
        <>
        <header className="h-[15vh] w-full bg-[#1E1E1E] p-1 flex flex-row justify-start align-center gap-[30vw]">
        <img src="src\assets\Media\Images\Logo-simple.jpg" alt="Img Not found" className="h-[14vh] w-[14vh] duration-1000 animate-spin [animation-duration:5s] order-1" />
        <div id="text" className="h-[15vh] w-[30vw] order-2 flex flex-col  text-[#E6D9FF] justify-center align-center gap-0">
            <div className="h-[7vh] w-[30vw] flex align-center justify-center text-5xl text-[#E6D9FF]">
                <h1 className="font-[playfair_display]">Khush<i>i</i></h1>
                <StarIcon className="text-5xl min-h-3.5" />
                <h1 className="font-[play]">SRT</h1>
            </div>
            <div className=" w-[30vw] font-[Inter] font-extralight flex justify-center align-baseline" >
            <h3 className="text-2xl"><i>She will reply.</i></h3>                 
            </div>
        </div>
        </header>
        </>
    );
}

export default Header
