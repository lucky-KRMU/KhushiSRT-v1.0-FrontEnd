import {React, useState} from 'react'

function Hero() {

    let [chat, setChat] = useState('');

  return (
    <>
    <div id="container" className=' h-[85vh] bg-[#1E1E1E] flex flex-col w-full justify-center items-center' >
        <div id="dialogueBox" className='h-[50vh] w-[80vw] bg-[#2e2e2e] rounded-2xl overflow-y-scroll'>
            {chat}
        </div>
    </div>
    </>
  )
}

export default Hero