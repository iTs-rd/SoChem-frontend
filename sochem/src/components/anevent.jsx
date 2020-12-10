import React, { useState, useEffect } from 'react';
var FontAwesome = require('react-fontawesome');

function Anevent(props) {

    return (
        <div>
            <div className="container-fluid jumbotron pt-4">
              <h1>{props.event.title}</h1>
              <hr></hr>
              <h4><FontAwesome name="map"/> {props.event.venue} &nbsp;
              <FontAwesome name="calendar"/> {props.event.date}</h4>
              <br/>

              <div class="container">
                <div class="row">
                    <div className="col-12">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src={props.event.cover1} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img src={props.event.cover2} class="d-block w-100" alt="..."/>
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
                    <div className="col-12 mt-5">
                       <h5><div dangerouslySetInnerHTML={{ __html: props.event.description }}/></h5>
                    </div>
                </div>
              </div>

            </div>
        </div>
    )
}

export default Anevent;