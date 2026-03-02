import {React, useState} from 'react'







function QueryForm (value, handleChange) {
    return (
        <>
        <form  onSubmit={handleSubmit}  className='w-[80vw] h-[10vh] bg-[#2e2e2e] rounded-2xl flex flex-row justify-center items-center gap-5'>
            <input type="text" name="query" id="query" className="w-[70vw] font-[play]  text-3xl text-white bg-transparent focus:outline-0" placeholder='Shall we start talking ... ? 😁' value={value} onChange={(e)=>handleChange(e)} />
            <input type="submit" value="&uarr;" className='bg-[#3e3e3e] text-white h-10 w-10 text-2xl rounded-4xl cursor-pointer'/>
        </form>
        </>
    );
}



function Hero() {

    
    const sendMessage = async () =>{
        const response = await fetch("http://127.0.0.1:5000/chat",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ message: input})
            }
        );
        
        const data = await response.json();
        console.log(data)
        
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submited");
        sendMessage();
    }

    

    const handleInputChange = (e)=>{
        setInput(input => e.target.value);
    }

    let [input, setInput] = useState('');
    let [chat, setChat] = useState('');



  return (
    <>
    <div id="container" className=' h-[85vh] bg-[#1E1E1E] flex flex-col w-full justify-center items-center gap-5' >
        <div id="dialogueBox" className='h-[50vh] w-[80vw] bg-[#2e2e2e] rounded-2xl overflow-y-scroll flex flex-col justify-center items-center'>
            <p className="text-xl text-white">{chat}</p>
        </div>
    {/* <QueryForm value={input} handleChange={handleInputChange} /> */}
    <form  onSubmit={handleSubmit}  className='w-[80vw] h-[10vh] bg-[#2e2e2e] rounded-2xl flex flex-row justify-center items-center gap-5'>
            <input type="text" name="query" id="query" className="w-[70vw] font-[play]  text-3xl text-white bg-transparent focus:outline-0" placeholder='Shall we start talking ... ? 😁' value={input} onChange={(e)=>handleInputChange(e)} />
            <input type="submit" value="&uarr;" className='bg-[#3e3e3e] text-white h-10 w-10 text-2xl rounded-4xl cursor-pointer'/>
        </form>
    </div>
    </>
  )
}

export default Hero