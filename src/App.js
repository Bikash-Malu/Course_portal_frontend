
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

// import Login from './Components/Login';
function App() {
  return (
   
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

    <Route path="/dhome" element={<Home title="dashbaord"/>}/>
    <Route path="/dabout" element={<Dabout title="dashbaord"/>}/>
    <Route path="/dsubject" element={<Subject title="dashbaord"/>}/>
    <Route path="/dregistration" element={<Registration title="dashbaord"/>}/>
    <Route path="/dpassword" element={<Changepass title="dashbaord"/>}/>
    <Route path="/dlogout" element={<Logout title="dashbaord"/>}/>
    <Route path="/desc/:name" element={<Desc title="dascription"/>}/>
  
    </Routes>
    {/* <Footer/> */}
    </Router>
  );
}
export default App;
