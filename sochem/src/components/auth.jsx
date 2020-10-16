import React , { useState, useEffect } from 'react';
import Navbar from './navbar';
import API from '../api-service'; 
import { useCookies } from 'react-cookie';
 
function Auth(){

    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ isLogin, setIsLogin ] = useState(true);

    const [ token, setToken ] = useCookies(['mr-token']);

    useEffect( () => {
        console.log(token);
        if(token['mr-token']) window.location.href = '/home';
    }, [token])
 
    const loginClicked = () => {
        API.loginUser({username, password})
           .then( resp => setToken('mr-token', resp.token))
           .catch( error => console.log(error))
    }
    const registerClicked = () => {
        API.registerUser({username, password})
        .then( () => loginClicked())
        .catch( error => console.log(error))
    }

    return (
            <div>
                <Navbar/>
                <div className="container jumbotron" style={{marginTop:'100px'}}>

                    {isLogin ? <h1>Login</h1> : <h1>Register</h1>}

                    <span>Username</span><br/>
                        <input type="text" name="username" value={username} 
                            onChange={evt=> setUsername(evt.target.value)} /><br/>
                    <span>Password</span><br/>
                        <input type="password" name="password" value={password} 
                            onChange={evt=> setPassword(evt.target.value)} /><br/>
                    {isLogin ? 
                       <button onClick={loginClicked}>Login</button> : 
                       <button onClick={registerClicked}>Register</button>
                    }
                    {isLogin ? 
                       <p onClick={ () => setIsLogin(false) }>Don't have an account? Register here!</p> : 
                       <p onClick={ () => setIsLogin(true) }>Already have an account? Login here!</p>
                    }
                </div>
            </div>
    )
}

export default Auth;