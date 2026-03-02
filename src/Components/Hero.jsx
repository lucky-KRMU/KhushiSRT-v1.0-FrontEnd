import {React, useState} from 'react'



const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submited");
}



function QueryForm () {
    return (
        <>
        <form  onSubmit={handleSubmit}  className='w-[80vw] h-[10vh] bg-[#2e2e2e] rounded-2xl flex flex-row justify-center items-center gap-5'>
            <input type="text" name="query" id="query" className="w-[70vw] font-[play]  text-3xl text-white bg-transparent focus:outline-0" placeholder='Shall we start talking ... ? 😁'/>
            <input type="submit" value="&uarr;" className='bg-[#3e3e3e] text-white h-10 w-10 text-2xl rounded-4xl cursor-pointer'/>
        </form>
        </>
    );
}

async function demoChatFunc () {
    
}

function Hero() {

    let [chat, setChat] = useState('');

  return (
    <>
    <div id="container" className=' h-[85vh] bg-[#1E1E1E] flex flex-col w-full justify-center items-center gap-5' >
        <div id="dialogueBox" className='h-[50vh] w-[80vw] bg-[#2e2e2e] rounded-2xl overflow-y-scroll'>
            {chat}
        </div>
    <QueryForm />
    </div>
    </>
  )
}

export default Hero