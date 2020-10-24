import React, { useState, useEffect } from 'react';
import './allevents.css';

function Allevents(props) {

    return (
        <div>
            {props.eventlist.map( evt => {
                return (
                     <div className="container jumbotron px-0 py-0 box">
                         <div className="row">
                             <div className="col-4">
                                 <img src={evt.cover1} class="img-fluid"></img>
                             </div>
                             <div className="col-8">
                                 <h1>{evt.title}</h1>
                             </div>
                         </div>
                     </div>
                );
            })}
        </div>
    )
}

export default Allevents;