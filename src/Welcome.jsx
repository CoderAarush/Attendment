import './Welcome.css';
import HeaderBanner from './Headerbanner';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import axios from 'axios';


export default function Welcome() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState('');

  const navigate = useNavigate();

 function handleSubmit(){
    setSubmitted({
      email,
      password,
    })

    console.log(`Email entered is: ${email}`);
    console.log(`Password is: ${password}`);

    navigate('/verify');
  };


  return (
    <div className="myContainer">
      <HeaderBanner />
      <h1> Welcome back! </h1>
      <input placeholder='Email Id' type='text' value={email} onChange={(e) => {
        setEmail(e.target.value);
      }}></input>
      <input placeholder='Password' type='text' value={password} onChange={(e) => {
        setPassword(e.target.value);
      }}></input>
      <br></br>
      <button id="btn1" onClick={handleSubmit}> LOG IN </button>
      <h3 style={{color:"#f054c6"}}> Forgot Password? </h3>
      <hr style={{
            height: '1px',              // Thick
            backgroundColor: 'white',    // High contrast on black
            border: 'none',
            width: '100%',               // Stretch across the page
            margin: '50px 0'            // Lots of space around it
          }} />
      <Link to="/login">
      <button id="btn2"> LOG IN WITH GOOGLE</button>
      <button id="btn3"> LOG IN WITH MICROSOFT</button>
        </Link>
      <Link to="/create"><h3 style={{color: '#f054c6'}}> Don't have an account? Sign up </h3></Link>
    </div>
  );
};