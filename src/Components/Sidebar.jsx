import{ React, useState} from 'react'
import{FaBars, FaCommentAlt, FaUserAlt } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import {AiFillHome,AiOutlineBook} from 'react-icons/ai'
import {FiLogOut} from 'react-icons/fi'
import{RiLockPasswordFill} from 'react-icons/ri'
import{BsBook} from 'react-icons/bs'
import './sidebar.css'
const Sidebar = ({Children}) => {
    const[isopen,setisopen]=useState(false);
    const toggle=()=>{
        setisopen(!isopen);
    }
   
    const menuItem=[
        {
            path:"/dhome",
            name:"Home",
            icon:<AiFillHome/>
        },
        {
            path:"/dabout",
            name:"Profile",
            icon:<FaUserAlt/>
        },
        {
            path:"/dsubject",
            name:"Subject",
            icon:<BsBook/>
        },
        {
            path:"/dregistration",
            name:"Registration",
            icon:<AiOutlineBook/>
        },
        {
            path:"/dpassword",
            name:"Password",
            icon:<RiLockPasswordFill/>
        },
        {
            path:"/dlogout",
            name:"Logout",
            icon:<FiLogOut/>
        },
    ]
  return (
    <div className='container1'>
      <div style={{width:isopen?"300px":"50px"}} className="sidebar">
        <div className="top_section">
            <h5 style={{display:isopen?"block":"none"}} className="logo"> dashboard</h5>
            <div style={{marginLeft:isopen?"100px":"0px"}} className="bars">
                <FaBars onMouseEnter={toggle}/>
            </div>
        </div>
        {
            menuItem.map((item,index)=>(
                <NavLink to={item.path} key={index} className='link' activeclassName='active'>
                    <div className="icon">{item.icon}</div>
                    <div className="link_text">{item.name}</div>
                </NavLink>
            ))
        }
      </div>
     <main>{Children}</main>
    </div>
  )
}

export default Sidebar
