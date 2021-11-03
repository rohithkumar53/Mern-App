import React from 'react';
import { useLocation, useHistory, Link } from 'react-router-dom';

export default function BaseLogin() {
    let defaultClass="nav-link link-btn btn-primary default-bg";
    let active=" active";
    let location=useLocation();
    let history=useHistory();

    let register=()=> {history.push("/register")};
    let login=()=> {history.push("/login")};

    return (
        <div className="col-sm-5 bg-img align-self-center">
            <div className="info">
                <div className="logo clearfix">
                    <Link to="/" className='nav-brand'>Logo</Link>
                </div>
                <div className="btn-section clearfix"> 
                    <button onClick={login} className={location.pathname==="/login"? defaultClass+active : defaultClass}>Login</button>
                    <button onClick={register} className={location.pathname==="/register"? defaultClass+active : defaultClass}>Register</button>
                </div>
            </div>
        </div>
    )
}
