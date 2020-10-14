import React, { useState, useEffect } from 'react';
import Comment from './forum-comment';
import Navbar from './navbar';
import './forum-home.css';
import Form from './forum-form';
import API from '../api-service'; 
import { useCookies } from 'react-cookie';

var FontAwesome = require('react-fontawesome');


function Forum(){

    const [posts, setPosts] = useState([]);
    const [showComment, setShowComment] = useState(null);
    const [showNewPost, setShowNewPost] = useState(false);
    const [user, setUser] = useState();

    const [ token, setToken ] = useCookies(['mr-token']);

     useEffect(()=>{
        fetch('http://127.0.0.1:8000/forum-post/', {
            method: 'GET',
            headers: {
              'Authorization': `Token 5b77e17acaa7493b4f76430799db16a76ac9ba6d`
            }
          }).then( resp => resp.json())
          .then( res => {
              setPosts(res);
            })
          .catch( error => console.log(error));

          API.userFromToken(token['mr-token'])
          .then(res => setUser(res))
          .catch( error => console.log(error));
          
    }, []);
    
    const toggleComment = id =>{

        if(showComment===id) setShowComment(null);
        else setShowComment(id);
    }
    const newPostToggle = () =>{
        setShowNewPost(true);
    }
    const cancelClicked = () =>{
        setShowNewPost(false);
    }
    const addPost = post =>{
        setPosts([post, ...posts]);
    }
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-0 pt-1">
                        {showNewPost ? null : <button className="btn btn-success btn-lg mt-5" onClick={newPostToggle}>Add New Post</button>}
                        {showNewPost ? <Form cancelClicked={cancelClicked} addPost={addPost}/> : null}
                    </div>
                    <div className="col-md-8 col-12">
                        {posts.length===0 ? <h1 style={{marginTop:300, marginLeft:150}}>No post to show :(</h1> : null}
                        {posts.map((post, index) => {
                            return (
                                <div className="border mt-4 rounded p-2" key={post.id}>
                                    <div className="jumbotron p-2 mb-1 mt-1" id="heading">
                                        <h3>{post.heading}</h3>
                                        <span><FontAwesome name="user"/> {user && user['first_name']} {user && user.last_name}</span>
                                        <span className="ml-5"><FontAwesome name="clock"/>{post.time}   {post.date}</span>
                                    </div>
                                    <h4 className="jumbotron bg-light p-2 mb-2">
                                            {post.body}
                                    </h4>
                                    <span className="mb-5">
                                    <h5 className="text-warning" onClick={()=>toggleComment(post.id)}><FontAwesome name="comment"/>
                                    <span className="ml-2 text-dark">{showComment==post.id ? <FontAwesome name="arrow-up"/> : <FontAwesome name="arrow-down"/>}</span>
                                    </h5>
                                    
                                    {showComment==post.id ? <Comment postId={post.id} user={user}/> : null}
                                    </span>
                                    
                                </div>   
                            );
                        })}
                        
                    </div>
                </div>
            </div>
        </div>
        

    );
}

export default Forum;

