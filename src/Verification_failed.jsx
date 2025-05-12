import {useState} from 'react';
import HeaderBanner from './Headerbanner';
import './Verification_failed.css';

const Verification_failed = () => {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    return(
        <div className='myWrapper'>
            <HeaderBanner />
            <h1 id="h11">Verification failed</h1>
            <hr></hr>
            <h1> Retry </h1>
            <input placeholder='Email' type="text" onChange={(e) => {
                setEmail(e.target.value);
            }}></input>
            <input placeholder='Password' type="text" onChange={(e) => {
                setPwd(e.target.value);
            }}></input>
            <button onClick={() => {
                console.log(`Email: ${email} and Password is: ${pwd} `);
            }}> LOG IN </button>

        </div>
    )
}

export default Verification_failed; 