import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { useCookies } from 'react-cookie';
import Footer from './components/footer';
import logo from './components/sochemlogo.png';
import Navbar from './components/navbar';
import { ListGroupItem } from 'react-bootstrap';

var FontAwesome = require('react-fontawesome');

function App() {

  const [posts, setPosts] = useState([]);
  const [token, setToken] = useCookies(['mr-token']);

  useEffect(()=>{
         
    fetch('http://127.0.0.1:8000/api/forum-post/', {
        method: 'GET',
        headers: {
          'Authorization': `Token ${token['mr-token']}`
        }
      }).then( resp => resp.json())
      .then( res => {
          setPosts(res);
        })
      .catch( error => console.log(error));
  })
  return (
    <div>
      <Navbar/>
      <div className="container">
          <div className="row mb-5" style={{marginTop:120}}>
              <div className="col-12 col-md-4 text-center">
                  <img src={logo} style={{width:200, height:200}}/>
              </div>
              <div className="col-12 col-md-8 mt-4">
                  <h4 id="about-sochem-home">
                    <FontAwesome name="quote-left" className="mr-3"/> 
                          <span style={{fontSize:38}} className="text-info mr-2">The Society of Chemical Engineers</span> is simply dummy text of the printing and 
                          typesetting industry. Lorem Ipsum has been the industry's 
                          standard dummy text ever since the 1500s, when an unknown 
                          printer took a galley of type and scrambled it to make a type
                          specimen book. 
                    <FontAwesome name="quote-right" className="ml-3"/>
                  </h4>
              </div>
          </div> 
          
          <div className="row mt-5">
            <div className="col-11 col-md-4 mr-5 border p-3 rounded ml-3">
                <div className="bg-dark rounded text-center p-1">
                  <h4 className="text-light">Updates</h4>
                </div>
            </div>
            <div className="col-11 col-md-7  ml-0 ml-md-4 border p-3 rounded ml-3 mt-3 mt-md-0">
                <div className="bg-dark rounded text-center p-1 mb-4">
                  <h4 className="text-light">Latest post from Forum</h4>
                </div>
                <div style={{fontSize:28}}>
                      {posts.map((post, index) => {
                          return (
                              <div className="alternate-bgcolor">
                                  {index<=5 ? 
                                    <span>
                                        <FontAwesome name=""/> {post.heading}
                                        <br/>
                                        <span  id="home-forum-name" style={{fontSize:22}}><FontAwesome name="user"/> {post.author_name}</span>
                                    </span> : null}
                              </div>
                          );
                      })}
                </div>
            </div>
          </div>
      </div>
      <Footer/>

    </div>
  );
}

export default App;
