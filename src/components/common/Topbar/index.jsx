import React from 'react'
import LinkedInLogo from "../../../assets/LinkedInLogo.png";
import user from "../../../assets/user.png"
import { 
    AiOutlineHome,
    AiOutlineUser,
    AiOutlineSearch,
    AiOutlineMessage,
    AiOutlineNotification } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { GoPeople } from "react-icons/go";
import { BsBriefcase } from "react-icons/bs";
import "./index.scss"

export default function Topbar() {
    let navigate = useNavigate()
    const goToRoute = (route) => {
        navigate(route);

    }
  return (
  <div className='topbar-main'>
    <img className='linkedin-logo' src={LinkedInLogo} alt="LinkedinLogo"/>
    <div className='react-icons'>
        <AiOutlineSearch size={30} className='react-icon'/>
        <AiOutlineHome 
          size={30} 
          className='react-icon'
          onClick={() => goToRoute("/home")}
         />
        <GoPeople 
          size={30} 
          className='react-icon'
          onClick={() => goToRoute("/profile")}
         />
        <BsBriefcase size={30} className='react-icon'/>
        <AiOutlineMessage size={30} className='react-icon'/>
        <AiOutlineNotification size={30} className='react-icon'/>
        
    </div>
    <img className='user-logo' src={user} alt="user"/>
  </div>
  );
}
