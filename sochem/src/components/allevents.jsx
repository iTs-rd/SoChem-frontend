import React, { useState, useEffect } from 'react';
import './allevents.css';
var FontAwesome = require('react-fontawesome');


function Allevents(props) {

    return (
        <div>
            {props.eventlist.map( (evt, index) => {
                return (
                     <div className="container jumbotron box p-0">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <img src={evt.cover1} class="img-fluid"></img>
                                </div>
                                <div className="col-12 col-md-6">
                                    <h1 className="mb-2 mb-md-5 mt-3 ml-2">{evt.title}</h1>
                                    <h3 className="mt-0 mt-md-5 ml-2"><FontAwesome name="map-marker"/> {evt.venue}</h3>
                                    <h3><FontAwesome name="calendar" className="ml-2"/> {evt.date}</h3>
                                </div>
                            </div>
                     </div>
                );
            })}
        </div>
    )
}

export default Allevents;