import {useState} from 'react';
import './Verify.css';
import HeaderBanner from './Headerbanner';
import { useNavigate } from 'react-router-dom';

export default function Verify(){
    const [verificationCode, setCode] = useState('');
    const navigate = useNavigate();

    const encrypted_code = "12345";


    function login(){
        if(verificationCode === encrypted_code){
        console.log('User has signed in');
        const text = window.prompt("Are you an admin or a member: ");
        if(text === "admin")
            navigate("/admin");
        else
            navigate("/console");}
        else{
            console.error("Incorrect code")
            navigate('/failed');
        }
    }

    return(
        <div className="Verification-page">
            <HeaderBanner />
            <h1>Enter Verification Code</h1>
            <input placeholder="Verification Code" type="text" onChange={(e) => {
                setCode(e.target.value);
            }}></input>
            <button onClick={login}>LOG IN</button>
        </div>
    );
}