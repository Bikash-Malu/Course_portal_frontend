import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Swal from 'sweetalert2'
import { signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from './firebaseconfig'
const Login = (props) => {
  const navigate1=useNavigate();
  const[value,setvalue]=useState({
    email:"",
    password:"",
  });
  const[errormsg,seterrormsg]=useState("")
  const[submitdisable,setsubmitdisable]=useState(false)
  const handelsubmit=(e)=>{
    if(!value.email||!value.password){
      seterrormsg("fill all the filed");
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong! fill all the field',
        
      })
       e.preventDefault();
      return;
    }
    else{
    seterrormsg("");
    setsubmitdisable(true)
    Swal.fire(
      'Good job!',
      'login successfully',
      'success'
    )
    signInWithEmailAndPassword(auth,value.email,value.password).then(async()=>{
      setsubmitdisable(false);
      navigate1('/dashboard');
      e.preventDefault();
      
    }).catch((err)=>{setsubmitdisable(false)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong! check it',
        
      })
    seterrormsg(err);
    }
    )

    console.log(value)
    e.preventDefault();
    
  }
}


  return (
    <div>
        <form className='h-50' style={{height:'100px'}} onSubmit={handelsubmit}>
      <section className="h-50 gradient-custom mt-5"style={{height:"300px",background:"linear-gradient(to right,bisque,pink,bisque,#FDE5D4)"}}>
        <Navbar/>
      <title>{props.title}</title>
  <div className="container py-5 h-70">
    <div className="row d-flex justify-content-center align-items-center h-50">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white">
          <div className="card-body p-5 text-center">

            <div className="mb-md-5 mt-md-4 pb-5">

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>
              <label className="form-label">Email</label>
              <div className="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" className="form-control form-control-lg" name='email' onChange={event=>setvalue(prev=>({...prev,email:event.target.value}))}placeholder='enter your email' />
              
              </div>
              <label className="form-label" >Password</label>
              <div className="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" className="form-control form-control-lg" name='password' onChange={event=>setvalue(prev=>({...prev,password:event.target.value}))} placeholder='enter youe password' />
                
              </div>

             
<h5>{errormsg}</h5>
            <button disabled={submitdisable} className="btn btn-outline-light btn-lg px-5" type='submit'> Login </button>

              

            </div>

            <div>
              <p className="mb-0" style={{color:'white'}}><b>Don't have an account? </b><Link className="nav-link" to="/signup">go to sign up</Link>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</form>
<Footer/>
    </div>
  )
}

export default Login
