
import { BrowserRouter as Router} from 'react-router-dom';
import { Routes, Route} from 'react-router-dom';
import About from './Components/About';
import Service from './Components/Service';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Banner from './Components/Banner';

import Home from './Components/Dashboard/Home';
import Subject from './Components/Dashboard/Subject';
import Sidebar from './Components/Sidebar';
import Dabout from './Components/Dashboard/Dabout';
import Registration from './Components/Dashboard/Registration';
import Changepass from './Components/Dashboard/Changepass';
import Logout from './Components/Dashboard/Logout';
import Desc from './Components/Dashboard/Desc';
import { useGlobalContext } from './Components/Dashboard/context';
import Search from './Components/Dashboard/Search';
import Dashboard from './Components/AdminDashboard/Dashboard';
import Student from './Components/AdminDashboard/Student';
import Ahome from './Components/AdminDashboard/Ahome';
import Apassword from './Components/AdminDashboard/Apassword';
import AProfile from './Components/AdminDashboard/AProfile';
import Alogout from './Components/AdminDashboard/Alogout';
import Signup1 from './Components/Signup1';
import Login1 from './Components/Login1';
import Private from './Components/Private';
import Resister from './Components/Resister';

// import Login from './Components/Login';
function App() {

  return (
   <>
    <Router>
    {/* <Navbar/> */}

    <Routes>
    <Route path="/about" element={<About title="About us"/>}>
    </Route>
    <Route path="/service" element={<Service title="Courses"/>}>
    </Route>
    <Route path="/contact" element={<Login title="Login"/>}>
    </Route>
    <Route path="/signup" element={<Signup title="sign up"/>}>
    </Route>
    <Route path="/login" element={<Login title="login"/>}>
    </Route>
    <Route path="/" element={<Banner title="Welcome to Student Subject Registration"/>}/>
    <Route path="/dashboard" element={<Sidebar title="dashbaord"/>}/>
    <Route path="/log" element={<Resister title="login"/>}/>

   
    <Route path="/dabout" element={<Dabout title="studentabout"/>}/>
    <Route path="/dsubject" element={<Subject title="studentsubject"/>}/>
    <Route path="/dregistration" element={<Registration title="sudentregistartion"/>}/>
    <Route path="/dpassword" element={<Changepass title="dashbaord"/>}/>
    <Route path="/dlogout" element={<Logout title="dashbaord"/>}/>
    <Route path="/desc/:name" element={<Desc title="dascription"/>}/>
    <Route path="/search" element={<Search/>}/>
    <Route path="/bikash" element={<Dashboard/>}/>
    <Route path="/dstudent" element={<Student/>}/>
    <Route path="/Ahome" element={<Ahome/>}/>
    <Route path="/Apassword" element={<Apassword/>}/>
    <Route path="/Aabout" element={<AProfile/>}/>
    <Route path="/Alogout" element={<Alogout/>}/>
    <Route path="/RS" element={<Signup1 title="signup"/>}/>
    <Route path="/RS1" element={<Login1/>}/>
    <Route path="/private" element={< Private/>}> </Route>
    <Route path="/dhome" element={<Home title="studenthome"/>}/>
   

  
    </Routes>
    {/* <Footer/> */}
    </Router>
    </>
  );
}
export default App;
