import './Create.css';
import HeaderBanner from './Headerbanner';
import {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

export default function Create(){
    const [email, setEmail] = useState('');
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [confirmed, setConfirmed] = useState('');
    const [submitted, setSubmitted] = useState('');
    const[admin, setAdmin] = useState('');
    const navigate = useNavigate();

    async function clickHandler(){
        setSubmitted({
            email,
            user,
            password,
            confirmed,
            
        })

        console.log(`The user, ${user} has entered their email as: ${email} with password: ${password}. They have confirmed the password with the phrase ${confirmed}`);
        if(confirmed === password){
            try{
                const res = await axios.post('http://localhost:5000/save-login', {
                  email,
                  password,
                  user,
                  admin
                });
          
                console.log(res.data);
          
              }
          
              catch(err){
                console.log(err);
              }
            if(admin === "admin")
                navigate('/admin');
            else
                navigate('console');
        }
        else
            console.error("Confirmed password and original do not match");
    }
    return(
        <div className="myCreatePage">
            <HeaderBanner />
            <h1>Create an account!</h1>
            <input placeholder='Username' type='text' value={user} onChange={(e) => {
            setUser(e.target.value);}}></input>
            <input placeholder='Email Id' type='text' value={email} onChange={(e) => {
            setEmail(e.target.value);}}></input>
            <input placeholder='Password' type='text' value={password} onChange={(e) => {
            setPassword(e.target.value);}}></input>
            <input placeholder='Confirm password' type='text' value={confirmed} onChange={(e) => {
            setConfirmed(e.target.value);}}></input>
            <input placeholder="Admin or member" type='text' value={admin} onChange={(e) => setAdmin(e.target.value)}></input>
            <button onClick={clickHandler}> VERIFY </button>
            <Link to="/welcome"><h3>Already have an account? Sign in </h3></Link>
        </div>
    )
}