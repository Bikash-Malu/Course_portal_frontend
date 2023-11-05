import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
const Dabout = (props) => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [id, setid] = useState(null);
  const [gender, setgender] = useState(null);
  const [coursename, setcourse] = useState(null);
  const [password, setpassword] = useState(null);

  const [data, setdata] = useState([]);
  useEffect(() => {
    getList();
  }, []);
  function getList() {
    fetch("http://localhost:9190/api/get").then((result) => {
      result.json().then((resp) => {
        setdata(resp);
        setfirstname(resp[0].firstname);
        setlastname(resp[0].lastname);
        setemail(resp[0].email);
        setid(resp[0].id);
        setgender(resp[0].gender);
        setcourse(resp[0].coursename);
        setpassword(resp[0].password);
        console.log(resp);
      });
    });
  }
  return (
    <div style={{display:'flex'}}>
      <title>{props.title}</title>
      <Sidebar></Sidebar>
      
      
      <div className='container'>
       
       
      <table class="table table-dark table-striped-columns mt-4 text-center">
  <thead>
    <tr>
      <th scope="col"></th>
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
