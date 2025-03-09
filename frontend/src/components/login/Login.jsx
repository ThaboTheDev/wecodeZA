import React, { useEffect, useState } from 'react'
import './login.css'
import Header from '../header/Header';
import { getLoginData } from '../../api/UserApi';


function Login({getId}) {
    const [email, setEmail] = useState("");
    const [passcode, setPasscode] = useState("");

    const login = async ()=> {
        console.log("ghn")
        if (email, passcode){
            try{
                getLoginData({
                    password: passcode,
                    email: email
                }) .then(()=>{
                    window.location.assign("/feed")
                    console.log(sessionStorage.getItem("userData"))
                })
            } catch{
                alert("Wrong login details, Try again!")
            }
        } else {
            alert("Fill in all input boxes")
        }
    }
    console.log(email)
    return <>
        <Header />
        <article className='loginApp'>
            <div className="loginContainer">
                <div className="loginForm">
                    <input type="text" onChange={e => setEmail(e.target.value)} placeholder='Email@gmail.com' value={email} />
                    <input type="text" onChange={e => setPasscode(e.target.value)} placeholder='Password' value={passcode} />

                    <button onClick={()=> login()}>
                        login
                    </button>

                    <p>
                        Don't hav an account? <a href="/signup">SignUp</a> instead.
                    </p>
                </div>
            </div>
        </article>
    </>
}

export default Login;