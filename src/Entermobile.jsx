/*import Headerbanner from './Headerbanner.jsx';
import {useState} from 'react';
import './Entermobile.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Verify  from './Verify.jsx';

const MainEntermobile = () => {
    const [mobile, setMobile] = useState('');
    const navigate = useNavigate();
    return(
        <div className="mobilewrapper">
            <Headerbanner />
            <h1>Enter Mobile Number</h1>
            <input placeholder='Mobile number' type="text" onChange={(e) =>{
                setMobile(e.target.value)
            }}></input>
            <button onClick={() => {
                console.log(mobile);
                if(mobile.length != 10)
                    console.error('The mobile number is not long enough');
                else
                    navigate("/verify");

            }}>SEND OTP</button>
        </div>
    )
}

function Entermobile(){
    return(
        <Router>
            <Routes>
                <Route path="/entermobile" element={<MainEntermobile />}></Route>
                <Route path="/verify" element={<Verify />}></Route>
            </Routes>
        </Router>
    )
}


export default Entermobile;*/

import Headerbanner from './Headerbanner.jsx';
import { useState } from 'react';
import './Entermobile.css';
import { useNavigate } from 'react-router-dom';

const Entermobile = () => {
    const [mobile, setMobile] = useState('');
    const navigate = useNavigate();

    return (
        <div className="mobilewrapper">
            <Headerbanner />
            <h1>Enter Mobile Number</h1>
            <input
                placeholder='Mobile number'
                type="text"
                onChange={(e) => setMobile(e.target.value)}
            />
            <button
                onClick={() => {
                    console.log(mobile);
                    if (mobile.length !== 10)
                        console.error('The mobile number is not long enough');
                    else
                        navigate("/verify");
                }}
            >
                SEND OTP
            </button>
        </div>
    );
};

export default Entermobile;