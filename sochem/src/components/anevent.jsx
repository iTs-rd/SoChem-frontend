import React, { useState, useEffect } from 'react';

function Anevent(props) {

    return (
        <div>
            <div className="jumbotron text-center" style={{background:'#dbdbdb'},{marginTop:'95px'}}>
                <h1>SoChem Event</h1>
            </div>

            <div className="container-fluid jumbotron">
              <h1>{props.event.title}</h1>
              <hr></hr>
              {props.event.venue},{props.event.date}
              <br/>

              <div class="container">
                <div class="row">
                    <div className="col-sm">
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
                    <div className="col-sm">
                       {props.event.description}
                       Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    </div>
                </div>
              </div>

            </div>
        </div>
    )
}

export default Anevent;