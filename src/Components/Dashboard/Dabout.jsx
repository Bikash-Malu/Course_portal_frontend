import React from 'react'
import Sidebar from '../Sidebar'

const Dabout = () => {
  return (
    <div style={{display:'flex'}}>
      <Sidebar></Sidebar>
      
      
      <div className='container'>
       
       
      <table class="table table-dark table-striped-columns mt-4 text-center">
  <thead>
    <tr>
      <th scope="col">sl no.</th>
      <th scope="col">1</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">First Name</th>
      <th scope="row">Bikash</th>
     
    </tr>
    <tr>
      <th scope="row">Last Name</th>
      <th scope="row">Malu</th>
     
    </tr>
    <tr>
      <th scope="row">Email</th>
      <td colspan="2">bikashmalu1@gmail.com</td>
      
    </tr>
    <tr>
      <th scope="row">password</th>
      <td colspan="2">Bikash</td>
      
    </tr>
  </tbody>
</table>
      </div>
    </div>
  )
}

export default Dabout
