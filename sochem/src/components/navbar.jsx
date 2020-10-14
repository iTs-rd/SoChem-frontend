import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from './sochemlogo.png';
import { useCookies } from 'react-cookie';


function Navbar(){   
    const [ token, setToken, deleteToken] = useCookies(['mr-token']); 
    const [ isLogin, setIsLogin ] = useState(true);

    const logoutUser = () => {
        deleteToken(['mr-token']);
        setIsLogin(false);
    }

    useEffect ( () => {
        if(!token['mr-token']) setIsLogin(false);
    }, [],[token])

    return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand pl-4" id="nbrand" name="home" onClick={()=> {window.location='/home'}}><img id="sochem-logo" src={logo}/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>                
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" name="home" onClick={()=> {window.location='/home'}}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" name="events" onClick={()=> {window.location='/home'}}>Events</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" name="forum" onClick={()=> {window.location='/forum'}}>Forum</a>
                            </li>
                        </ul>
                        
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            { !(isLogin) ?
                                <a className="nav-link" name="login" onClick={()=> {window.location='/login'}}>Login</a> :
                                <a className="nav-link" name="logout" onClick={logoutUser}>LogOut</a> 
                            }
                            </li>
                        </ul>
                    </div>
                </nav>       
        </div>
    );
}

export default Navbar;