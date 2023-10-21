import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav" style={{color:'black',background:"linear-gradient(to right,black,#6C5F5B,black)"}}>
    <div className="container px-4 px-lg-5">
        <Link className="navbar-brand" to="/">Student <span>   </span> Subject  Registration</Link>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto my-2 my-lg-0">
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/service">Course</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/contact">Login</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/signup">Sign up</Link></li>
            </ul>
        </div>
    </div>
</nav>
  )
}
