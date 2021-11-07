import React, { useState } from 'react';
import {registerAction} from "../../container/actions";
import {useDispatch} from "react-redux";
import BaseLogin from '../imports/BaseLogin';
import RegisterForm from '../imports/RegisterForm';
import { useHistory } from 'react-router-dom';
export default function Register() {

    const dispatch= useDispatch();
    const history=useHistory();

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
        
        const validate= dispatch(registerAction(newUser));
        validate
            .then(data => {
                history.push("/login");
            })
            .catch(error => {console.log(error)})
        
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
