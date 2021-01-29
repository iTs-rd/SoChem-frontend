import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { useCookies } from 'react-cookie';
import Footer from './components/footer';
import logo from './components/sochemlogo.png';
import Moment from 'moment';
import bg from './components/images/image.jpg';
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
import Header from './components/header';
import { ListGroupItem } from 'react-bootstrap';
import Testimonials from './components/testimonials';

var FontAwesome = require('react-fontawesome');

function App() {

  const [posts, setPosts] = useState([]);
  const [token, setToken] = useCookies(['mr-token']);

  useEffect(()=>{
    if(token['mr-token']){
      fetch('https://api.sochem.org/api/forum-post/', {
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
      <div>
          <Header/>

          <div className="row container d-flex justify-content-around ml-auto mr-auto border bg-light pb-5"> 
            <div className="col-12 col-md-5  border rounded shadow px-4">
                <div className="rounded text-center p-1 m-0" style={{backgroundColor:'black'}}>
                  <h4 className="text-light home-updates-forum">Updates</h4>
                </div>
                {token['mr-token'] ?
                <div>
                <ul><li><h5 className="mx-2 my-4">Case Study PS out. Check Events section.</h5></li></ul>
                </div> : <h4 className="text-secondary text-center mt-3">Login to view this section.</h4 >}
            </div>
            <div className="col-12 col-md-6 border rounded mt-3 mt-md-0 shadow px-4">
                <div className="rounded text-center p-1 mb-4" style={{backgroundColor:'black'}}>
                  <h4 className="text-light home-updates-forum">Latest post from Forum</h4>
                </div>
                {token['mr-token'] ?
                <div style={{fontSize:'1rem'}}>
                      {posts.map((post, index) => {
                          return (
                              <div className="alternate-bgcolor" className="m-4">
                                  {index<=5 ? 
                                    <span>
                                        <a onClick={() =>  window.location ='/forum'} href="#" style={{fontSize:'1.5rem'}}><FontAwesome name="comment"/> {post.heading}</a>
                                        <br/>
                                        <span  id="home-forum-name" className="text-secondary" style={{fontSize:20}}><FontAwesome name="user"/> {post.author_name}
                                        &nbsp;
                                        | &nbsp; <FontAwesome name="clock"/> {Moment(post.date).format('hh:mm DD-MM-YYYY')}
                                        </span>
                                    </span> : null}
                              </div>
                          );
                      })}
                </div>
                :
                <h4 className="text-secondary text-center m-3">You need to login to view this section.</h4 >}
            </div>
          </div>
      </div>
      <div className="container text-center about-us-div">
              <h2 className="about-us">About Us</h2>
              <p className="home-about-text">
              The Society of Chemical Engineers a.k.a SoChem is a society run by the students of the department for the students of the department.
               Anyone who wishes to be involved with the department is welcome to join the society. 
               SoChem ensures that each and every student within the department gets the most out of their time with us at IIT(BHU) Varanasi.
                      <br></br>
              From fancy festival dinners, important job finding, and everything in-between, SoChem is there to give a helping hand. 
              As a society, we are incredibly active with respect to social skill development and industrial exposure.
                      <br></br>
                  <br></br>
              Name the festival, we host a celebratory event for it! 
              It is the perfect opportunity to celebrate with your friends! This provides for a chance to mingle with representatives 
              across all the years within the department. These events are a chance for you to do some networking and have fun. 
              <br></br>
              <br></br>
              The department as a whole has strong links with various industries in the engineering and financial sectors.
              The society organizes presentations from company representatives and application days, held within the department
              itself, directly aimed at chemical engineering students.
                      <br></br>
                In addition to all the events, we host many sessions for students of all years (Bachelor's to PhD) to equip them with the
                 skills necessary to climb the ladder in whichever domain they wish to excel in. 

              </p>
          </div>
      <Testimonials/>
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
