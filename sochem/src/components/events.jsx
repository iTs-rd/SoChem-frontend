import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import Anevent from './anevent';
import Allevents from './allevents';
import Footer from './footer';
import './events.css';

import API from '../api-service'; 
import { useCookies } from 'react-cookie';

function Events() {
    
    const [ eventlist, setEventlist] = useState([]);
    const [ eventnum, setEventnum ] = useState(null);
    const [ token, setToken ] = useCookies(['mr-token']);

    const allEvents = () => {
        API.getEvents({'token':token['mr-token']})
           .then( resp => setEventlist(resp))
           .catch( error => console.log(error))
    }

    const eventSelected = (num) => {
        setEventnum(num);
    }

    useEffect( () => {
        if(!token['mr-token']) window.location.href = '/home';
        {allEvents()}
    },[token])

    return (
        <div>
            <Navbar/>
            <div class="sidenav">
                <a href="" onClick={ () => {eventSelected(null)}}><h1 id="past"><strong>Past Events</strong></h1></a>
                <hr/>

                {eventlist.map( evt => {
                    return(
                        <a href="#" onClick={ () => {eventSelected(evt.id)}}>{evt.title}</a>
                    );
                })}    
            </div>
            <div class="main">
                {eventnum ?
                    eventlist.map( evt => {
                        return(
                            evt.id==eventnum ?
                            <Anevent event={evt}/>
                            : null
                        );
                    })
                :
                <Allevents eventlist={eventlist}/>
                }
            </div>
        </div>
    )
}

export default Events;