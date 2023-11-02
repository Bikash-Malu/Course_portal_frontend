import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <header class="header-area header-sticky" style={{marginTop:'-45px',background:'linear-gradient(to bottom, #4b6cb7 50%, #000000 90%)',color:''}}>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <nav class="main-nav">
                 
                    <a href="index.html" class="logo">
                       Course registration
                    </a>
                  
                    <ul class="nav">
                        <li ><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li ><Link to='/service'>Courses</Link></li>
                        {/* <li class="has-sub">
                            <a href="javascript:void(0)">Pages</a>
                            <ul class="sub-menu">
                                <li><a href="meetings.html">Upcoming Meetings</a></li>
                                <li><a href="meeting-details.html">Meeting Details</a></li>
                            </ul>
                        </li> */}
                        <li ><Link to='/login'>Login</Link></li> 
                        <li ><Link to='/signup'>Sign up</Link></li> 
                    </ul>        
                    <a className='menu-trigger' href=''>
                        <span>Menu</span>
                    </a>
                   
                </nav>
            </div>
        </div>
    </div>
</header>
  )
}
