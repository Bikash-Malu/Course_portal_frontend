import React, { useState } from 'react'
import "./Resister.css"
import Swal from 'sweetalert2'
import { v4 as uuidv4 } from 'uuid';
export default function Resister() {
    const[user,setUser]=useState({
      id:uuidv4(),
        name:"",
        lname:"",
        dob:"",
       
        email:"",
        phone:"",
        
    });
    let name,value;
    const getuser=(e)=>{
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value})
        console.log(getuser)
    };
    const post1=async(e1)=>
    {
      e1.preventDefault();
      const{id,name,lname,dob,email,phone}=user;
      if(id && name && lname && dob && email && phone)
      {
        const res=await fetch("https://react-a82be-default-rtdb.firebaseio.com/muna.json",{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify({
            id,
            name,
            lname,
            dob,
            email,
            phone,
           
          }),
         }
         );
         if(res){
          setUser({
            id:"",
            name:"",
            lname:"",
            dob:"",
          
            email:"",
            phone:"",
            
        });
        Swal.fire({
          position:'center',
          icon: 'success',
          title: 'Your Form submitted successfully!!',
          showConfirmButton: false,
          timer: 1500
        })
      } 
    }
   else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong! fill all the field!!',
        })  
      }
    };
  return (
    <section className="vh-100 gradient-custom">
    <div className="container py-5 h-100">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-12 col-lg-9 col-xl-7">
          <div className="card shadow-2-strong card-registration" >
            <div className="card-body p-4 p-md-5">
              <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
              <form method='post'>
  
                <div className="row">
                  <div className="col-md-6 mb-4">
  
                    <div className="form-outline">
                    <label className="form-label" for="firstName">First Name</label>
                      <input type="text" value={user.name} id="firstName" className="form-control form-control-lg" onChange={getuser} name='name'/>
              
                    </div>
  
                  </div>
                  <div className="col-md-6 mb-4">
  
                    <div className="form-outline">
                    <label className="form-label" for="lastName">Last Name</label>
                      <input type="text" value={user.lname} id="lastName" className="form-control form-control-lg" onChange={getuser} name='lname'/>
                      
                    </div>
  
                  </div>
                </div>
  
                <div className="row">
                  <div className="col-md-6 mb-4 d-flex align-items-center">
  
                    <div className="form-outline datepicker w-100">
                    <label for="birthdayDate" className="form-label">Date of Birth</label>
                      <input type='date' value={user.dob} className="form-control form-control-lg" id="birthdayDate" onChange={getuser} name='dob' />
                     
                    </div>
  
                  </div>
                  <div className="col-md-6 mb-4 pb-2">
                  <label className="form-label" for="phoneNumber">Phone Number</label>
                    <div className="form-outline">
                   
                      <input type="text" value={user.phone} id="phoneNumber" className="form-control form-control-lg" onChange={getuser}name='phone' />
                     
                    </div>
  
                  </div>
                </div>
  
                <div className="row">
                  <div className="col-md-6 mb-4 pb-2">
  
                    <div className="form-outline">
                    <label className="form-label" for="emailAddress">Email</label>
                      <input type="email" value={user.email} id="emailAddress"name='email' className="form-control form-control-lg"  placeholder='Enter your email' onChange={getuser}/>
                    
                    </div>
  
                  </div>
                  
                </div>
  
               
  
                <div className="mt-4 pt-2">
                 <button onClick={post1} type='submit' className='btn btn-outline-warning text-center'>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
