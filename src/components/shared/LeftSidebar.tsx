import { useState } from 'react'
import { BiMessageAlt } from "react-icons/bi";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteForever } from "react-icons/md";
import { LuHistory } from "react-icons/lu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { BsPersonAdd } from "react-icons/bs";
import { MdOpenInNew } from "react-icons/md";
import { TbFilePencil } from "react-icons/tb";
import { GoShieldCheck } from "react-icons/go";

const LeftSideBar = () => {

  const [chats, setChats] = useState(["New Chat","What is Marketing","Give me a list of 5 marketing strategies that work for you in 2021 ?"]);
  const links = [
    {
      img:<BsPersonAdd/>,
      title: "Upgrade to Plus"
    },
    {
      img: <MdOpenInNew/>,
      title: "Updates and FAQ"
    },
    {
      img: <TbFilePencil/>,
      title: "Terms and Conditions"
    },
    {
      img: <GoShieldCheck/>,
      title: "Privacy Policy"
    },

  ]
  const handleClick=() => {
    // const message=
  }
  return (
    <div className='leftsidebar'>
      <div className=" border-2 border-gray-200 rounded-md w-full h-full flex flex-col flex-start p-4">
        <div onClick={handleClick} className='w-full border-[#8191C9FF] rounded-md border-2 text-center p-2 cursor-pointer'>
          <p>+ New Chat</p>
        </div>
        <div className='flex p-2 space-x-2 flex-center cursor-pointer'>
          <LuHistory/>
          <p>History</p>
        </div>
        <ul>
          {chats.map((chat,index) =>(
            <li key={index} className='flex flex-between w-full h-fit space-x-3 space-y-3'>
              <BiMessageAlt className='mt-3 '/>
              <HoverCard>
              <HoverCardTrigger><p className='max-h-12 whitespace-nowrap overflow-hidden overflow-ellipsis w-32 cursor-pointer'>{chat}</p></HoverCardTrigger>
              <HoverCardContent className=' bg-white'>{chat}</HoverCardContent>
              </HoverCard>
              <CiEdit className=' ml-auto'/>
              <MdOutlineDeleteForever/>
            </li>
          ))}
        </ul>
        <div className='flex flex-col w-full h-fit mt-auto'>
          {links.map((link,index) =>(
            <div key={index} className='flex flex-start space-x-3 my-2 cursor-pointer'>
              {link.img}
              <p className=' font-light opacity-65'>{link.title}</p>
             </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LeftSideBar