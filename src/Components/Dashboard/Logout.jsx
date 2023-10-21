import React from 'react'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'


const Logout = () => {
  return (
    <div style={{display:'flex'}}>
      <Sidebar/>
     <div>
      <div className="container mt-5">
        <div className="row ">
          <div className="col-md-6 shadow-lg mt-2" style={{width:'300px',height:"150px",marginLeft:"500px"}}>
            <h4 className='text-center mt-4'>Are you want to logout?</h4><br></br>
            <div style={{marginLeft:"10px"}}>
          <Link to='/dhome'> <button className='btn btn-primary mx-4' >Cancel</button></Link> 
           <Link to='/login'> <button className='btn btn-danger mx-4'>Logout</button></Link>
           </div>
          </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Logout
