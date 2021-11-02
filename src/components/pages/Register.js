import React, { useState } from 'react';
import BaseLogin from '../imports/BaseLogin'
import RegisterForm from '../imports/RegisterForm'
export default function Register() {

    const [username, setUsername]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [passwordCheck, setPasswordCheck]=useState("");

    //on form submit click handler
    const handleSubmit=(event)=>{
        event.preventDefault();
        const newUser={
            username,
            email,
            password,
            passwordCheck
        }
        console.log(newUser);
    }

    let registerData={
        handleSubmit,
        setUsername,
        setEmail,
        setPassword,
        setPasswordCheck
    }

    return (
        <div id="login">
            <div className="container">
                <div className="row login-box">
                    <BaseLogin/>
                    <RegisterForm registerState={registerData}/>
                </div>
            </div>
        </div>
    )
}
