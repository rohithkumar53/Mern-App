import React from 'react';
import BaseLogin from '../imports/BaseLogin'
import RegisterForm from '../imports/RegisterForm'
export default function Register() {
    return (
        <div id="login">
            <div className="container">
                <div className="row login-box">
                    <BaseLogin/>
                    <RegisterForm/>
                </div>
            </div>
        </div>
    )
}
