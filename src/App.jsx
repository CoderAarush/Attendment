import Headerbanner from "./Headerbanner.jsx";
import './App.css';
import Welcome from "./welcome.jsx";
import Create from "./create.jsx";
import Verify from './Verify.jsx';
import Verification_failed from "./verification_failed.jsx";
import User_console from "./User_console.jsx";
import Admin_console from "./Admin_console.jsx";
import Employee_stats from "./Employee_stats.jsx";
import Entermobile from "./Entermobile.jsx";
import Login from "./Login.jsx";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  function signin() {
    navigate('/welcome'); // Navigate to User_console component
  }

  function mobile(){
    console.log('User is signing in with mobile');
    navigate('/entermobile');
  }

  return (
    <div className="App">
      <Headerbanner />
      <h1> Let's Get </h1>
      <h1 id="started"> Started! </h1>
      <button onClick={signin} id="btn1">SIGN IN</button>
      <h4>Or sign in with</h4>
      <div style={{ display: 'flex', gap: '80px', marginTop: '0px' }}>
        <button className="mybuttons" onClick={signin}>Email</button>
        <button className="mybuttons" onClick={mobile}>Mobile</button>
      </div>
      <hr />
      <h3>Don't have an account?</h3>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <button onClick={() => {
          navigate('/create');
        }} className="mybuttons">Create Account</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/console" element={<User_console />} />
        <Route path="/admin" element={<Admin_console />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/verify" element = {<Verify/>}/>
        <Route path="/create" element={<Create />} />
        <Route path="/failed" element={<Verification_failed />} />
        <Route path="/stats" element={<Employee_stats />} />
        <Route path="/entermobile" element={<Entermobile />} />
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
