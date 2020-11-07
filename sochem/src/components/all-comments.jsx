import React, { useState, useEffect } from 'react';
import './forum-home.css';
import API from '../api-service';
import { useCookies } from 'react-cookie';
var FontAwesome = require('react-fontawesome');

function AllComments(props){

    const [userDetails, setUserDetails] = useState(null);
     useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/user-extension?id=${props.comment.author}`, {
            method: 'GET',
            headers: {
              'Authorization': `Token ${props.token['mr-token']}`
            }
          }).then( resp => resp.json())
          .then( res => setUserDetails(res))
          .catch( error => console.log(error))
     }, [])

    return (
        <div key={props.comment.id} id="allComments" className="mb-3">
        {userDetails && userDetails.length && <img id="comment-user-image" src={"http://127.0.0.1:8000"+userDetails[0].profile_photo}/>}
        <span className="text-secondary" style={{fontSize:20}}>{props.comment.author_name} | {props.comment.date}</span>
        <hr/>
        <h5 className="mt-3"><FontAwesome name="arrow-circle-right" className="mr-1"/>{props.comment.comment}</h5>
        
        </div>
    );
}

export default AllComments;