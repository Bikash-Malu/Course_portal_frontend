import{ React, useState} from 'react'
import{FaBars, FaUserAlt,FaBookReader} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import {AiFillHome,AiOutlineBook} from 'react-icons/ai'
import {FiLogOut} from 'react-icons/fi'
import{RiLockPasswordFill} from 'react-icons/ri'
import{PiStudentLight} from 'react-icons/pi'
import './Dashboard.css'
const Dashboard= ({Children}) => {
    const[isopen,setisopen]=useState(false);
    const toggle=()=>{
        setisopen(!isopen);
    }
   
    const menuItem=[
        {
            path:"/Ahome",
            name:"Home",
            icon:<AiFillHome/>
        },
        {
            path:"/Aabout",
            name:"Profile",
            icon:<FaUserAlt/>
        },
        {
            path:"/acourse",
            name:"Course",
            icon:<FaBookReader />
        },
        {
            path:"/dstudent",
            name:"Sudent",
            icon:<PiStudentLight/>
        },
        {
            path:"/Apassword",
            name:"Password",
            icon:<RiLockPasswordFill/>
        },
        {
            path:"/Alogout",
            name:"Logout",
            icon:<FiLogOut/>
        },
    ]
  return (
    <div className='container1' style={{backgroundColor:"black",display:'inline-block'}}>
        
      <div style={{width:isopen?"300px":"50px"}} className="Dashboard">
        <div className="top_section">
            <h5 style={{display:isopen?"block":"none",color:'white'}} className="logo" > dashboard</h5>
            <div style={{marginLeft:isopen?"100px":"0px"}} className="bars">
                <FaBars onMouseEnter={toggle} id="main1" style={{color:'white'}}/>
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

export default Dashboard;
