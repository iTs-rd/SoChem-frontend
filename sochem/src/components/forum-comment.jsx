import React, { useState, useEffect } from 'react';
import './forum-home.css';
import API from '../api-service';
import { useCookies } from 'react-cookie';
var FontAwesome = require('react-fontawesome');


function Comment(props){
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [token, setToken] = useCookies(['mr-token']);
    useEffect(()=>{
        fetch(`http://127.0.0.1:8000/api/forum-comment?post_id=${props.postId}`, {
            method: 'GET',
            headers: {
              'Authorization': `Token ${token['mr-token']}`
            }
          }).then( resp => resp.json())
          .then( res => setComments(res))
          .catch( error => console.log(error))

    }, []);

    const newCommentChanged = evt =>{
        console.log(evt.target.value);
        setNewComment(evt.target.value);
    }
    const postNewComment = () =>{
        
        API.newComment({'comment':newComment, 'post_id':props.postId}, {'token':token['mr-token']})
        .then(res => setComments([res,...comments]))
            .catch( error => console.log(error))

        setNewComment('');
            
    }
    return(
        <div>
            {console.log(props.user)}
            {comments.map(comment => {
                return(
                    <div key={comment.id} id="allComments">
                        <h5 className="d-inline mr-2 text-secondary"><FontAwesome name="user-circle"/> <span className="text-secondary">{comment.author_name}</span></h5>
                        <h5><FontAwesome name="arrow-circle-right" className="mr-1"/>{comment.comment}</h5>
                        
                    </div>
                );
            })}
        {props.allowAdd ? 
            <form className="form-inline">
                <div className="mt-2 mr-2 mb-2">
                    <input id="newComment" type="text" value={newComment} className="form-control" onChange={newCommentChanged}/>
                </div>
                <h2 onClick={postNewComment} className="btn btn-primary mt-2 mb-2 p-1">Comment</h2>
            </form>
        : null}

        </div>
    );

}

export default Comment;

