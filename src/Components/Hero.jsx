import { React, useState } from 'react'







function QueryForm(value, handleChange) {
    return (
        <>
            <form onSubmit={handleSubmit} className='w-[80vw] h-[10vh] bg-[#2e2e2e] rounded-2xl flex flex-row justify-center items-center gap-5'>
                <input type="text" name="query" id="query" className="w-[70vw] font-[play]  text-3xl text-white bg-transparent focus:outline-0" placeholder='Shall we start talking ... ? 😁' value={value} onChange={(e) => handleChange(e)} />
                <input type="submit" value="&uarr;" className='bg-[#3e3e3e] text-white h-10 w-10 text-2xl rounded-4xl cursor-pointer' />
            </form>
        </>
    );
}



function Hero() {


    const sendMessage = async () => {
        setThinking(true);
        const response = await fetch("http://127.0.0.1:5000/chat",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ message: input })
            }
        );

        const data = await response.json();
        setThinking(false);


        // let ChatUserArr = chatHistoryUserArray;
        // let ChatKhushiArr = chatHistoryKhushiArray;

        let chatHistory = chatHistoryArray;

        chatHistory.push(["user",input]);

        chatHistory.push(["khushi",data.response]);
        
        // setChatHistoryUserArray(ChatUserArr);
        // setChatHistoryKhushiArray(ChatKhushiArr);

        setChatHistoryArray(chatHistory);
        setChat(data.response);

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submited");
        setInput('');
        sendMessage();
    }



    const handleInputChange = (e) => {
        setInput(input => e.target.value);
    }

    let [input, setInput] = useState('');
    let [chat, setChat] = useState('');
    // let [chatHistoryUserArray, setChatHistoryUserArray] = useState([]);
    // let [chatHistoryKhushiArray, setChatHistoryKhushiArray] = useState([]);
    let [chatHistoryArray, setChatHistoryArray] = useState([]);
    let [turn, setTurn] = useState(true);

    let [thinking, setThinking] = useState(false);



    return (
        <>
        {
            thinking ?

            <p className='animate-bounce z-0 text-center h-[5vh] bg-[#1e1e1e] text-white text-2xl p-4 font-[playfair_display] '>Thinking...</p> : <p className='text-center z-0 h-[5vh] bg-[#1e1e1e] text-white text-2xl p-4 font-[playfair_display]'></p>
        }
            <div id="container" className=' h-[80vh] bg-[#1E1E1E] flex flex-col w-full justify-center items-center gap-5' >
                <div id="dialogueBox" className='h-[50vh] w-[80vw] bg-[#2e2e2e] rounded-2xl overflow-y-scroll snap-end'>
                    <div className="text-xl text-white rounded-xl flex flex-col justify-center">
                        {chat ? 
                            chatHistoryArray.map((element)=>{
                                if(element[0]==="user"){
                                    return(<p className='ml-auto mr-3 mt-2 bg-[#0f0f0f] p-3 rounded-2xl'>{element[1]}</p>);
                                } else {
                                   return(<p className='m-4'><b className='bg-purple-700 rounded-2xl p-1'>🌷KhushiSRT: </b>{element[1]}</p>)
                                }
                            })
                            : <p className='m-auto mt-[20vh] text-3xl font-[play]'>How can I help You today?...😄</p>}
                    </div>
                </div>
                {/* <QueryForm value={input} handleChange={handleInputChange} /> */}
                <form onSubmit={handleSubmit} className='w-[80vw] h-[10vh] bg-[#2e2e2e] rounded-2xl flex flex-row justify-center items-center gap-5'>
                    <input type="text" name="query" id="query" className="w-[70vw] font-[play]  text-3xl text-white bg-transparent focus:outline-0" placeholder='Shall we start talking ... ? 😁' value={input} onChange={(e) => handleInputChange(e)} />
                    <input type="submit" value="&uarr;" className='bg-[#3e3e3e] text-white h-10 w-10 text-2xl rounded-4xl cursor-pointer' />
                </form>
            </div>
        </>
    )
}

export default Hero