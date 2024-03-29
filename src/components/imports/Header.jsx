import React from 'react'
import {Link} from 'react-router-dom';
import Logout from './Logout';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../../container/actions';
export default function Header() {
    const dispatch= useDispatch();
    const logout = ()=> {
        dispatch(logoutAction()); 
    }
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light primary-gradient shadow">
                <Link className="nav-link nav-brand mx-auto" to="/"> 
                    <h3 className="text-light m-0">MERN Stack Application</h3>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-expanded="false">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="me-auto"></div>
                    <ul className="navbar-nav">
                        <Logout onLogout={logout}/>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
