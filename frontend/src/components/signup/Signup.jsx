import React, { useEffect, useState } from 'react'
import './signup.css'
import Header from '../header/Header';
import { createAccount, getLoginData } from '../../api/UserApi';


function Signup({getId}) {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [passcode, setPasscode] = useState("");

    const signup = async ()=> {
        if (email, passcode, name, lastName, username){
            try{
                createAccount({
    "name": name,
    "lastname": lastName,
    "username": username,
    "profession": "Wethinkcode student",
    "email": email,
    "password": "1231234edfsdfgd@sfg"
}) .then(()=>{
                    window.location.assign("/feed")
                    console.log(sessionStorage.getItem("userData"))
                })
            } catch{
                alert("Account not created please enter the correct details")
            }
        } else {
            alert("Fill in all input boxes")
        }
    }
    
    return <>
        <Header />
        <article className='signupApp'>
            <div className="signupContainer">
                <div className="signupForm">
                    <input type="text" onChange={e => setName(e.target.value)} placeholder='First Name' value={name} />
                    <input type="text" onChange={e => setLastName(e.target.value)} placeholder='Last Name' value={lastName} />
                    <input type="text" onChange={e => setUsername(e.target.value)} placeholder='Username' value={username} />
                    <input type="text" onChange={e => setEmail(e.target.value)} placeholder='Email@gmail.com' value={email} />
                    <input type="text" onChange={e => setPasscode(e.target.value)} placeholder='Password' value={passcode} />

                    <button onClick={()=> signup()}>
                        Signup
                    </button>

                    <p>
                        Already have an account? <a href="/login">Login</a> instead.
                    </p>
                </div>
            </div>
        </article>
    </>
}

export default Signup;