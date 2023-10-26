import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import { useGlobalContext } from './context'
import './Registration.css'
import Search from './Search'
import Pagination from './Pagination'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Registration = (e) => {
  const notify = () =>toast("Selected the course")
  // e.preventDefault();
  const[text2,settext]=useState(false)
 let text1;
 if(text2===true){
  text1="seleced"
 }
 else{
  text1="add"
 }
 const{hits,nbpages,isloading}=useGlobalContext();
  if(isloading){
    return(
      <>
      <h1>loading....</h1>
      </>
    );
    
  }
  return (
    <div style={{display:'flex'}}>
      <Sidebar/>
      <div style={{fontSize:'20px'}} >
        <Search/>
        <Pagination/>
        {/* <h1>api fech</h1> */}
        {hits.map((curPost)=>{
          const{title,author,objectID,url,num_comments}=curPost;
          return<>
          <div className="card mt-3" style={{marginLeft:'400px'}}>
            
            <h4>Subject name:-{title}</h4>
            <h5>course code:-{objectID}</h5>
            <p>faculty name:- {author}</p>
            <div className="card-button">
              <a href={url} target='_blank'>Read more</a> 

            <input class="form-check-input" type="checkbox"  style={{color:'black'}} id="flexCheckDefault"onChange={()=>settext(!text2)} onClick={notify}/>
            </div>
          </div>
          <ToastContainer/>
          </>
        })}
       
      </div>
    </div>
  )
}

export default Registration
