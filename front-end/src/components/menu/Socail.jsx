import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";
const socail = [
    {
        icon: <FaGithub />,
        path: "/"
    },
    {
        icon: <FaFacebookF />,
        path: "https://web.facebook.com/profile.php?id=100057433147679"
    },
    {
        icon: <IoLogoLinkedin />,
        path: "https://www.linkedin.com/in/vet-vannak-9891b4287/"
    },
    {
        icon: <FaTelegram />,
        path: "https://t.me/Vannak_27"
    },
]

const  Socail =() => {
  return (
    <div className='flex text-[30px] gap-[10px] items-center'>
        {socail.map((item,index)=>{
            return <a key={index} className=' border-white active:scale-[0.98] hover:scale-[1.05] bg-[#232329]  w-[40px] h-[40px] rounded-[4px] shadow-lg hover:text-primary hover:bg-accent-hover flex justify-center items-center  duration-500 cursor-pointer text-accent-DEAULT hover:shadow-xl' target='_blank' href={item.path}>{item.icon} </a>
        })}
    </div>
  )
}

export default Socail
