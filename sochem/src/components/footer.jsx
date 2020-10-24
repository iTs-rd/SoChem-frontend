import React , { useState, useEffect } from 'react';

var FontAwesome = require('react-fontawesome');


function Footer(){
    return (
            <footer class="site-footer">
            <div class="container">
                <div class="row">
                <div class="col-12 text-center">
                    <h4 className="text-light">Developed, managed and hosted by SoChem Informatics Team.</h4>
                </div>
                </div>
                <hr/>
            </div>
            <div class="container">
                <div class="row">
                <div class="col-md-8 col-sm-6 col-xs-12">
                    <p class="copyright-text">The Society of Chemical Engineers 
                    </p>
                </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;