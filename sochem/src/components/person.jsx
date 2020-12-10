import React, { useState, useEffect } from 'react';
import API from '../api-service'; 
import { useCookies } from 'react-cookie';
import Footer from './footer';
var FontAwesome = require('react-fontawesome');

function Person(props){
    const [user, setUser] = useState(null);
    const [userDetail, setUserDetail] = useState(null);
    const [token, setToken] = useCookies(['mr-token']);
    useEffect(()=>{
        fetch(`https://api.sochem.org/api/users/${props.userId.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token['mr-token']}`,
            },
            }).then( resp => resp.json()).then(res => setUser(res))
            .catch( error => console.log(error)) 
    },[])

    useEffect(()=>{
        fetch(`https://api.sochem.org/api/user-extension?id=${props.userId.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token['mr-token']}`,
            },
            }).then( resp => resp.json()).then(res => setUserDetail(res))
            .catch( error => console.log(error)) 
    }, [user])
    return(
        <div className="row">
            <div className="col-md-5 col-11 ml-0 ml-md-5" style={{marginTop:'auto'}}>
                {userDetail && <img className="card-img-top image-card-profile-main" src={userDetail[0].profile_photo} alt="Card image cap"/>}
            </div>
            <div className="col-md-6 col-8 text-left ml-0">
            <a href="#" className="d-md-inline d-none"><FontAwesome id="cross-person" style={{fontSize:'1.5rem'}} name="times-circle" onClick={() => props.setShowDetails(null)}/></a>
                {user && userDetail &&
                    <div class="card" style={{width:'auto'}}>
                    <div class="card-body">
                        <h1 class="card-title">{user.first_name} {user.last_name}</h1>
                        <hr className="mb-5"/>
                        <h3 class="card-text mt-4"><FontAwesome name="quote-left"/> {userDetail[0].bio} <FontAwesome name="quote-right"/></h3>
                        <h3 class="mt-4 "><FontAwesome name="info"/> {userDetail[0].batch}</h3>
                        <h3 class="mt-4 card-text."><FontAwesome name="at"/> {user.email}</h3>
                    </div>
                    </div>
                }
            </div>
        </div>

    );
}

export default Person;