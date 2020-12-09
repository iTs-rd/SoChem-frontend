import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Navbar from './navbar';
import { useReducer } from 'react';
var FontAwesome = require('react-fontawesome');


function PeopleBlock(props){

    const [token, setToken] = useCookies();
    const [user, setUser] = useState({});
    const [userDetails, setUserDetails] = useState({});
    useEffect(() => {

        fetch(`http://127.0.0.1:8000/api/users/${props.user_id}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token['mr-token']}`,
            }
            }).then( resp => resp.json()).then(res => setUser(res))
            .catch( error => console.log(error))

        fetch(`http://127.0.0.1:8000/api/user-extension?id=${props.user_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token['mr-token']}`,
            }
            }).then( resp => resp.json()).then(res => setUserDetails(res))
            .catch( error => console.log(error))
    }, [])

    return(
        <div className="bg-light p-2">
            <h4>
            <div className="row">
                <div className="col-md-4 col-12">{userDetails && userDetails.length && <img id="comment-user-image" src={userDetails[0].profile_photo}/>}
                {user.first_name} {user.last_name}</div>
                <div className="col-md-2 col-12 mt-4 mt-md-0">{userDetails && userDetails.length && userDetails[0].batch}</div>
                <div className="col-md-5 col-12">{user.email}</div>
                <div className="col-md-1 col-12"><a onClick={() => props.setShowDetails(user)} href="#" ><FontAwesome name="link"/></a></div>
            </div>
            </h4>
            <hr/>
        </div>
    );
}

export default PeopleBlock;