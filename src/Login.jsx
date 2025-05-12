import Headerbanner from './Headerbanner.jsx';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import './Login.css';

export default function Login(){

    const [id, setId] = useState('');
    const [pin, setPin] = useState('');
    const navigate = useNavigate();


    return(
        <div className="Loginwrapper">
            <Headerbanner />
            <h1>LOGIN USING OTHER PLATFORMS</h1>

            <input type="text" placeholder='Enter id' onChange={(e) => {
                setId(e.target.value);
            }}></input>

            <input type="text" placeholder='Enter pin' onChange={(e) => {
                setPin(e.target.value);
            }}></input>

            <button onClick={
                () => {
                    const text = window.prompt("Are you an admin or a member?");
                    if(text === "member")
                        navigate('/console');
                    else
                        navigate('/admin');
                }
            }>SIGN IN</button>
        </div>
    )
}