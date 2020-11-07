import React , { useState, useEffect } from 'react';
import Navbar from './navbar';
import { useCookies } from 'react-cookie';
import logo from './sochemlogo.png';
import coding from './images/cloud-coding.png';
import books from './images/cloud-books.png';
import online from './images/cloud-online.png';
import hulm from './images/cloud-hulm.png';
import core from './images/cloud-core.png'
import gate from './images/cloud-gate.png';
import gre from './images/cloud-gre.png';
import oe from './images/cloud-oe.png';


function Cloud(){

    const [ token, setToken ] = useCookies(['mr-token']);
    useEffect( () => {
        if(!token['mr-token']) window.location.href = '/login';
    },[token])


    return(
        <div className="body-font">
            <Navbar/>
            <div className="jumbotron" style={{background:'#dbdbdb'},{marginTop:'95px'}}>
                <h1 className="jumbotron-heading-top">SoChem Cloud</h1>
            </div>
            <div className="container text-center">
                    <a href="https://drive.google.com/drive/u/5/folders/15iEbYDjKoCVh-AmlbUN0-3YZiKoCG1gr">
                            <div class="card">
                            <img class="card-img-top" src={books} alt="Card image cap"/>
                            <div class="card-body">
                                <p class="card-text text-center">Books/Novels</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://drive.google.com/drive/u/5/folders/1cCApJe4LYWJ43wyr0p3HMsjK5xPE-RTa">
                        <div class="card">
                            <img class="card-img-top" src={core} alt="Card image cap"/>
                            <div class="card-body">
                                <p class="card-text text-center">Core Courses</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://drive.google.com/drive/u/5/folders/19doEA6GO4HF8oqWTgPJbOx9xTCvJlJqE">
                        <div class="card">
                            <img class="card-img-top" src={gate} alt="Card image cap"/>
                            <div class="card-body">
                                <p class="card-text text-center">Gate Preparation</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://drive.google.com/drive/u/5/folders/1ojVB0uXyx5JaX8JlSg0JHZaD5cDkKO5S">
                        <div class="card">
                            <img class="card-img-top" src={gre} alt="Card image cap"/>
                            <div class="card-body">
                                <p class="card-text text-center">GRE Preparation</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://drive.google.com/drive/u/5/folders/1-20gmIL9mSEOeXkBj9cSGq7M0qGfLWkZ">
                        <div class="card">
                            <img class="card-img-top" src={hulm} alt="Card image cap"/>
                            <div class="card-body">
                                <p class="card-text text-center">HULM</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://drive.google.com/drive/u/5/folders/1ojVB0uXyx5JaX8JlSg0JHZaD5cDkKO5S">
                    <div class="card">
                        <img class="card-img-top" src={online} alt="Card image cap"/>
                        <div class="card-body">
                            <p class="card-text text-center">Online Courses</p>
                        </div>
                    </div>
                    </a>
                    <a href="https://drive.google.com/drive/u/5/folders/1l-Ww9Wx73wrIBdh-gztKfp-fX_sjanh5">
                    <div class="card">
                        <img class="card-img-top" src={oe} alt="Card image cap"/>
                        <div class="card-body">
                            <p class="card-text text-center">Open Electives</p>
                        </div>
                    </div>
                    </a>
                    <a href="https://drive.google.com/drive/u/5/folders/1kP586gtLGQI4b-EiyGewZbL6D9WBNOXh">
                    <div class="card">
                        <img class="card-img-top" src={coding} alt="Card image cap"/>
                        <div class="card-body">
                            <p class="card-text text-center">Programming</p>
                        </div>
                    </div>
                    </a>
                
            
            </div>
        </div>
    );
}

export default Cloud;