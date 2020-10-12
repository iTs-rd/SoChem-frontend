import React, { Component } from 'react';
import './navbar.css';


class Navbar extends Component {    

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand pl-4" id="nbrand" name="home" onClick={()=> {window.location='/home'}}>SoChem</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>                
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className={this.props.clicked === "home" ? "active nav-item" : "nav-item"}>
                                <a className="nav-link" name="home" onClick={()=> {window.location='/home'}}>Home</a>
                            </li>
                            <li className={this.props.clicked === "events" ? "active nav-item" : "nav-item"}>
                                <a className="nav-link" name="events" onClick={()=> {window.location='/home'}}>Events</a>
                            </li>
                            <li className={this.props.clicked === "forum" ? "active nav-item" : "nav-item"}>
                                <a className="nav-link" name="forum" onClick={()=> {window.location='/home'}}>Forum</a>
                            </li>
                        </ul>

                        <ul className="navbar-nav">
                            <li className={this.props.clicked === "login" ? "active nav-item" : "nav-item"}>
                                <a className="nav-link" name="login" onClick={()=> {window.location='/home'}}>Login</a>
                            </li>
                        </ul>
                    </div>
                </nav>       
        </div>
        );
    }
}

export default Navbar;