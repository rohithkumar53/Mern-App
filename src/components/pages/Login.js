import React, {useState} from 'react'
import BaseLogin from '../imports/BaseLogin';
import LoginForm from '../imports/LoginForm';
import { useDispatch } from 'react-redux';
export default function Login() {
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");

    const dispatch = useDispatch();
    //handle submit handler function
    const handleSubmit=(event)=>{
        event.preventDefault();
        const userCredential={
            email,
            password
        }
        dispatch({type:"REGISTER_SUCCESS", payload:"login dispatch"});
        console.log(userCredential);
    }

    return (
        <div id="login">
            <div className="container">
                <div className="row login-box">
                    <BaseLogin/>
                    <LoginForm loginState={{handleSubmit,setEmail,setPassword}}/>
                </div>
            </div>
        </div>
    )
}

