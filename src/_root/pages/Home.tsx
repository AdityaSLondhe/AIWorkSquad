import React, { useState } from 'react'
import { User } from '../RootLayout';
import { PiSealQuestionLight } from "react-icons/pi";
import { PiChats } from "react-icons/pi";
import { PiPaperPlaneRight } from "react-icons/pi";

interface HomeProps {
  user?: User;
}


const Home:React.FC<HomeProps> = ({user}) => {

  const [messagges, setMessagges] = useState(
  [{
    from: "user",
    text : "What is Marketing?"
  },
  {
    from: "bot",
    text : "Marketing is the process of interesting potential customers and clients in your products and/or services and persuading them to choose them over those of your competitors."
  },{
    from: "user",
    text : "Give me a list of 5 marketing strategies that work for you in 2021 ?"
  }])

  const handleClick=()=>{
    const val = document.getElementById("input_text")?.value;
    console.log(val)
    if(!!val){
      setMessagges(oldMessages=>[...oldMessages , {from:"user",text:val? val:""}])
      document.getElementById("input_text")!.value = "";
    }
  }
  return (
    <div className='w-3/4 bg-blue flex flex-col h-full translate-y-10 sm:w-full sm:px-6'>
      <div className='flex flex-col space-y-3 overflow-scroll scroll-smooth custom-scrollbar h-full'>
        <div className=' w-full border-2 border-gray-400 rounded-md p-5 flex flex-col px-10 space-y-3'>
          <h1 className='h3-semibold'>Introduce yourself to AIWorkSquad</h1>
          <p className=' font-thin opacity-70'>Im Nithin. CEO of an IT startup company in india</p>
        </div>
        {messagges.map((message, index) => {
          return (
            <div key={index} className={`w-full flex ${message.from === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`w-auto max-w-3xl p-5 flex space-x-3 rounded-md border-2 border-[#12A9BCFF] ${message.from === 'user' ? 'bg-[#12A9BCFF]' : 'bg-white'}`}>
                {message.from === 'user'? null: <PiChats className=' w-9 h-9 text-[#12A9BCFF]'/>}
                <p className={`${message.from === 'user' ? 'text-white' : 'text-[#12A9BCFF]'}`}>{message.text}</p>
                {message.from === 'user'? <PiSealQuestionLight className=' w-6 h-6 text-white'/>: null}
              </div>
            </div>
          )
        })}
      </div>
      <div className='mt-auto w-full border-2 border-gray-300 h-fit p-3 rounded-md'>
        <div className='flex flex-1 flex-start space-x-3'>
          <PiSealQuestionLight className=' w-8 h-8 text-[#12A9BCFF]'/>
          <form action="" className=' w-full'>
            <input type="text" id='input_text' className='text-[#12A9BCFF] h-10 w-full focus:outline-none text-lg' 
            placeholder={`Enter your ${user?.department} query here...`}/>
          </form>
          <PiPaperPlaneRight className=' w-6 h-6 text-[#12A9BCFF] cursor-pointer' onClick={handleClick}/>
        </div> 
      </div>
    </div>
  )
}

export default Home