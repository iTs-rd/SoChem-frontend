import React, { useState, useEffect } from 'react';
import './forum-home.css';
var FontAwesome = require('react-fontawesome');


function Comment(props){
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(()=>{
        console.log('reload');
        fetch(`http://127.0.0.1:8000/forum-comment?post_id=${props.postId}`, {
            method: 'GET',
            headers: {
              'Authorization': `Token 5b77e17acaa7493b4f76430799db16a76ac9ba6d`
            }
          }).then( resp => resp.json())
          .then( res => setComments(res))
          .catch( error => console.log(error))

    }, []);

    const newCommentChanged = evt =>{
        setNewComment(evt.target.value);
    }
    const postNewComment = () =>{
        
        fetch('http://127.0.0.1:8000/forum-comment/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token 5b77e17acaa7493b4f76430799db16a76ac9ba6d`,
            },
            body: JSON.stringify({
                'comment': newComment,
                'post_id': props.postId,
            })
            }).then( resp => resp.json()).then(res => setComments([res,...comments]))
            .catch( error => console.log(error))

            setNewComment('');
            
    }
    return(
        <div>
            {comments.map(comment => {
                return(
                    <div key={comment.id} id="allComments">
                        <h5 className="d-inline mr-2"><FontAwesome name="user-circle"/> {props.user.first_name} {props.user.last_name}</h5>
                        <h5><FontAwesome name="arrow-circle-right" className="mr-1"/>{comment.comment}</h5>
                        
                    </div>
                );
            })}
        <form className="form-inline">
            <div className="mt-2 mr-2 mb-2">
                <input id="newComment" type="text" value={newComment} className="form-control" onChange={newCommentChanged}/>
            </div>
            <h2 onClick={postNewComment} className="btn btn-primary mt-2 mb-2 p-1">Comment</h2>
        </form>

        </div>
    );

}

export default Comment;

