import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

function Form(props){

    const [heading, setHeading] = useState('');
    const [body, setBody] = useState('');
    const [token, setToken] = useCookies(['mr-token']);
    const headingChanged = evt =>{
        setHeading(evt.target.value);
    }
    const bodyChaned = evt =>{
        setBody(evt.target.value);
    }
    const submitClicked = () =>{
        fetch('https://api.sochem.org/api/forum-post/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token['mr-token']}`,
            },
            body: JSON.stringify({
                'heading': heading,
                'body': body,
            })
            }).then( resp => resp.json()).then(res => props.addPost(res))
            .catch( error => console.log(error))
        props.cancelClicked();
    }

    return (
        <div className="container jumbotron mt-5">
            <form>
                <div className="form-group">
                    <label for="title">Title</label>
                    <input type="text" className="form-control" id="title" onChange={headingChanged} placeholder="Mention your query briefly."/>
                </div>
                <div className="form-group">
                    <label for="body">Body</label>
                    <textarea rows="6" type="text" className="form-control" id="body" placeholder="Feel free to ask anything." onChange={bodyChaned}/>
                </div>
                <h3 className="btn btn-success" onClick={submitClicked}>Submit</h3>
                <h3 className="btn btn-warning ml-4" onClick={props.cancelClicked}>Cancel</h3>
            </form>
        </div>
    );
}

export default Form;

