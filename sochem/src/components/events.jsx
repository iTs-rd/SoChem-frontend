import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import './events.css';
import { useCookies } from 'react-cookie';
import API from '../api-service';

function Events() {

    const [ eventlist, setEventlist] = useState([]);

    const [ token, setToken ] = useCookies(['mr-token']);

    useEffect( () => {
        if(!token['mr-token']) window.location.href = '/home';
        console.log(eventlist);
        allEvents();
        console.log(eventlist);
    },[])

    const allEvents = () => {
        API.getEvents({'token':token['mr-token']})
           .then( resp => setEventlist(resp))
           .catch( error => console.log(error))
    }
    return (
        <div>
            <Navbar/>
            <div class="sidenav">
            <a href="#">Upcoming Events</a>
            <h1 id="past"><strong>Past Events</strong></h1>
            <a href="#">Holi Celebration</a>
            <a href="#">Makar Sankranti</a>
            <a href="#">Group Discussion</a>
            <a href="#">Internship Session</a>
            <a href="#">Diwali Celebration</a>
            <a href="#">Industrial Tour</a>
            <a href="#">Case Study</a>
            <a href="#">Orientation</a>
            </div>
            <div class="main">
                    {eventlist.map(event =>{
                        return(
                            <div>
                                {event.venue}
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default Events;