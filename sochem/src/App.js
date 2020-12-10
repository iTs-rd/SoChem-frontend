import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { useCookies } from 'react-cookie';
import Footer from './components/footer';
import logo from './components/sochemlogo.png';
import Moment from 'moment';
import bg from './components/images/img3.jpg';
import slide1 from './components/images/slide-home-1.jpg'
import slide2 from './components/images/slide-home-2.jpg'
import slide3 from './components/images/slide-home-3.jpg';
import slide4 from './components/images/slide-home-4.jpg';
import slide5 from './components/images/slide-home-5.jpg';
import slide6 from './components/images/slide-home-6.jpg';
import slide7 from './components/images/slide-home-7.jpg';
import slide8 from './components/images/slide-home-8.jpg';
import slide9 from './components/images/slide-home-9.jpg';
import slide10 from './components/images/slide-home-10.jpg';
import slide11 from './components/images/slide-home-11.jpg';
import Navbar from './components/navbar';
import { ListGroupItem } from 'react-bootstrap';

var FontAwesome = require('react-fontawesome');

function App() {

  const [posts, setPosts] = useState([]);
  const [token, setToken] = useCookies(['mr-token']);

  useEffect(()=>{
    if(token['mr-token']){
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
    }
  },[])
  return (
    <div>
      <Navbar/>
      <div className="" style={{marginTop:95}}>
          <div className="row p-2 cont-home-sochem">
              <div className="col-12 col-md-4 text-center">
                  <img src={logo} style={{width:200, height:200}}/>
              </div>
              <div className="col-12 col-md-8 mt-4 ml-3 ml-md-0">
                  <h4 id="about-sochem-home">
                    <FontAwesome name="quote-left" className="mr-3"/> 
                          <span style={{fontSize:38}} className="text-light mr-2">The Society of Chemical Engineers</span> is simply dummy text of the printing and 
                          typesetting industry. Lorem Ipsum has been the industry's 
                          standard dummy text ever since the 1500s, when an unknown 
                          printer took a galley of type and scrambled it to make a type
                          specimen book. 
                    <FontAwesome name="quote-right" className="ml-3"/>
                  </h4>
              </div>
          </div> 
          <div className="jumbotron p-0 mt-1">
              <img src={bg} className="top-image-home" />
          </div>
          <div className="row container d-flex justify-content-around ml-auto mr-auto border p-4 bg-light"> 
            <div className="col-11 col-md-4  border rounded shadow">
                <div className="rounded text-center p-1 m-0" style={{backgroundColor:'black'}}>
                  <h4 className="text-light">Updates</h4>
                </div>
            </div>
            <div className="col-11 col-md-7  ml-0 ml-md-4 border rounded mt-3 mt-md-0 shadow">
                <div className="rounded text-center p-1 mb-4" style={{backgroundColor:'black'}}>
                  <h4 className="text-light">Latest post from Forum</h4>
                </div>
                {token['mr-token'] ?
                <div style={{fontSize:28}}>
                      {posts.map((post, index) => {
                          return (
                              <div className="alternate-bgcolor">
                                  {index<=5 ? 
                                    <span>
                                        <FontAwesome name="comment"/> {post.heading}
                                        <br/>
                                        <span  id="home-forum-name" className="text-secondary" style={{fontSize:22}}><FontAwesome name="user"/> {post.author_name}
                                        &nbsp;
                                        | &nbsp; <FontAwesome name="clock"/> {Moment(post.date).format('hh:mm DD-MM-YYYY')}
                                        </span>
                                    </span> : null}
                              </div>
                          );
                      })}
                </div>
                :
                <h4 className="text-secondary text-center">You need to login to view this section.</h4 >}
            </div>
          </div>
      </div>
      <hr/>
      <div className="container d-none d-sm-block">
      <div id="carouselExampleIndicators" class="carousel carousel-home slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100 carousel-img" src={slide3} alt="First slide"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100 carousel-img" src={slide1} alt="Second slide"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100 carousel-img" src={slide2} alt="Third slide"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100 carousel-img" src={slide4} alt="Third slide"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100 carousel-img" src={slide5} alt="Third slide"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100 carousel-img" src={slide6} alt="Third slide"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100 carousel-img" src={slide7} alt="Third slide"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100 carousel-img" src={slide8} alt="Third slide"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100 carousel-img" src={slide9} alt="Third slide"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100 carousel-img" src={slide10} alt="Third slide"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100 carousel-img" src={slide11} alt="Third slide"/>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      </div>
      <Footer/>

    </div>
  );
}

export default App;
