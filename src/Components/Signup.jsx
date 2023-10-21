import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Swal from 'sweetalert2'
import { createUserWithEmailAndPassword ,updateProfile} from 'firebase/auth'
import { auth } from './firebaseconfig'
const Signup = (props) => {
  const navigate=useNavigate();
  const[value,setvalue]=useState({
    fname:"",
    lname:"",
    email:"",
    role:"",
    password:""
  });
  const[errormsg,seterrormsg]=useState("")
  const[submitdisable,setsubmitdisable]=useState(false)
  const submission=(e)=>{
    if(!value.fname||!value.lname||!value.email||!value.role||!value.password){
      seterrormsg("fill all the filed");
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong! fill all the field',
        
      })
      e.preventDefault();
      return;
    }
    seterrormsg("");
    setsubmitdisable(true)
    Swal.fire(
      'Good job!',
      'signup successfully',
      'success'
    )
    createUserWithEmailAndPassword(auth,value.email,value.password,value.role).then(async(res)=>{
      setsubmitdisable(false)
      const user=res.user;
    await updateProfile(user,{
        displayName:value.fname,
      })
      navigate('/login')
    })
    e.target.fname.value=""
    e.target.lname.value=""
    e.target.email.value=""
    e.target.role.value=""
    e.target.password.value=""
    e.preventDefault();
    console.log(value)
     e.preventDefault();
  }
  return (
    <div>
      <title>{props.title}</title>
      
      <section className="login" style={{background:"linear-gradient(to right,bisque,pink,bisque,#FDE5D4)"}}>
        <Navbar/>

<div className="px-4 py-5 px-md-5 text-center text-lg-start">
  <div className="container mt-5">
    <div className="row gx-lg-5 align-items-center">
      <div className="col-lg-6 mb-5 mb-lg-0">
        <h1 className="my-5 display-3 fw-bold ls-tight">
          The best offer <br />
          <span className="text-primary">for your business</span>
        </h1>
        <p >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eveniet, itaque accusantium odio, soluta, corrupti aliquam
          quibusdam tempora at cupiditate quis eum maiores libero
          veritatis? Dicta facilis sint aliquid ipsum atque?
        </p>
      </div>

      <div className="col-lg-6 mb-5 mb-lg-0">
        <div className="card">
          <div className="card-body py-5 px-md-5">
            <form onSubmit={submission} >
              {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                  <label className="form-label" >First name</label>
                    <input type="text" id="form3Example1" className="form-control" name='fname' onChange={(e)=>setvalue((prev)=>({...prev,fname:e.target.value}))}placeholder='enter first name' />
                    
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                  <label className="form-label" >Last name</label>
                    <input type="text" id="form3Example2" className="form-control" name='lname' onChange={(e)=>setvalue((prev)=>({...prev,lname:e.target.value}))} placeholder='enter last name' />
                  
                  </div>
                </div>
              </div>
              <div className="form-outline mb-4">
              <label className="form-label">Email address</label>
                <input type="email" id="form3Example3" className="form-control" name='email' onChange={(e)=>setvalue((prev)=>({...prev,email:e.target.value}))}  placeholder='enter email'/>
               
              </div>
              <label className="form-label">Select your role</label>
              <div class="form-check">
              
  <input class="form-check-input" type="radio" name="role" id="flexRadioDefault1" value="Student" onChange={(e)=>setvalue((prev)=>({...prev,role:e.target.value}))}/>
  <label class="form-check-label" for="flexRadioDefault1">
   Student
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="role" id="flexRadioDefault2" value="Admin"  onChange={(e)=>setvalue((prev)=>({...prev,role:e.target.value}))} />
  <label class="form-check-label" for="flexRadioDefault2">
   Admin
  </label>
</div>
              <div className="form-outline mb-4">
              <label className="form-label" >Password</label>
                <input type="password" id="form3Example4" className="form-control" name='password' onChange={(e)=>setvalue((prev)=>({...prev,password:e.target.value}))} placeholder='enter password' />
                
              </div>
             <h6 style={{color:"red"}}>{errormsg}</h6>

           
              <button type="submit" className="btn btn-primary btn-block mb-4" disabled={submitdisable}>
                Sign up
              </button>

          
              <div className="text-center">
             <span> <b>Already have account?</b></span>  <span><Link className="nav-link" to="/login">click here to login</Link> </span>
               
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</section>
<Footer/>
    </div>

  )
}


export default Signup

