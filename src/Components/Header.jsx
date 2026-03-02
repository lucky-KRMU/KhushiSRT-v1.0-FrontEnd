import {React} from "react";

function Header (){
    return (
        <>
        <header className="h-[15vh] w-full bg-[#1E1E1E] p-1">
        <img src="src\assets\Media\Images\Logo-simple.jpg" alt="Img Not found" className="h-[14vh] w-[14vh] duration-1000 animate-spin [animation-duration:5s]" />
        <div id="text">
        <h1>
            <span className="font-[playfair_display]">Khush<i>i</i></span>
            <span className="font-[play]">SRT</span>
        </h1>
        <h3><i>She will reply.</i></h3>   
        </div>
        </header>
        </>
    );
}

export default Header
