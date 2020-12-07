import React, { useState, useEffect } from 'react';
import './forum-home.css';
import API from '../api-service';
import { useCookies } from 'react-cookie';
var FontAwesome = require('react-fontawesome');


function AllForumPosts(props){

    const [userDetails, setUserDetails] = useState(null);
     useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/user-extension?id=${props.post.author}`, {
            method: 'GET',
            headers: {
              'Authorization': `Token ${props.token['mr-token']}`
            }
          }).then( resp => resp.json())
          .then( res => setUserDetails(res))
          .catch( error => console.log(error))
     }, [])

    return (
            <div>
                {console.log(userDetails)}
                <div className="jumbotron p-2 mb-1 mt-1" id="heading-forum-post">
                    <h3 className="text-light">{props.post.heading}</h3>
                    <span className="text-light">
                        {userDetails && userDetails.length &&  <img id="comment-user-image" src={userDetails[0].profile_photo}/>} 
                        {props.user && props.post.author_name}
                    </span>
                    <span className="ml-5 text-light"><FontAwesome name="clock"/>{props.post.time}   {props.post.date}</span>
                </div>
                <h4 className="jumbotron p-2 mb-2">
                    {props.post.body}
                </h4>
            </div>
    );
}

export default AllForumPosts;