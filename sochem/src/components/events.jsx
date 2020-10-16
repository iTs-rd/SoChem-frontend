import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import './events.css';
import { useCookies } from 'react-cookie';

function Events() {

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
                <h1>Say Hello</h1>
                <h1>Say Hello</h1>
                <h1>Say Hello</h1>
                <h1>Say Hello</h1>
                <h1>Say Hello</h1>
                <h1>Say Hello</h1>
                <h1>Say Hello</h1>
                <h1>Say Hello</h1>
                <h1>Say Hello</h1>
                <h1>Say Hello</h1>
                <h1>Say Hello</h1>
                <h1>Say Hello</h1>
                <h1>Say Hello</h1>
                <h1>Say Hello</h1>
                <h1>Say Hello</h1>
                <h1>Say Hello</h1>
                <h1>Say Hello</h1>
            </div>
        </div>
    )
}

export default Events;