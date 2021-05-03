import React from 'react';
import Navbar from '../Nabvar/Navbar';
import django from "../../images/django.png";
import python from "../../images/python.png";
import react from "../../images/react.png";
import kivy from "../../images/kivy.png";
import html from "../../images/html&css.jpg";
import node from "../../images/node.png";
import javaScript from "../../images/javaScript.jpg";
import "./Services.css";
const Services = () => {
    return (
        <>
            <Navbar></Navbar>
            <div id="container">
                <div id="heading">
                    <h1>My Service</h1>
                </div>
                <div class="item">
                    <div class="front"> <img id="team1" alt='some value' class="team" src={python} /> </div>
                    <div class="back">
                        <p class="title_name">Python</p>
                        <p class="job">Django, Django Rest API, Kivy</p>
                         {/* <a href="#"><i class="fab fa-facebook-square social fa-2x"></i></a>
                         <a href="#"><i class="fab fa-linkedin social fa-2x"></i></a> 
                         <a href="#"><i class="fab fa-twitter-square social fa-2x"></i></a> */}
                    
                    </div>
                </div>
                <div class="item">
                    <div class="front"> <img id="team2" alt='some value' class="team" src={django}/> </div>
                    <div class="back">
                        <p class="title_name">Django Rest Framework</p>
                        <p class="job">Django, Django Rest API</p> 
                        {/* <a href="#"><i class="fab fa-facebook-square social fa-2x"></i></a> 
                        <a href="#"><i class="fab fa-linkedin social fa-2x"></i></a>
                         <a href="#"><i class="fab fa-twitter-square social fa-2x"></i></a> */}
                    </div>
                </div>
                <div class="item">
                    <div class="front"> <img id="team3" alt='some value' class="team" src={react} /> </div>
                    <div class="back">
                        <p class="title_name">React</p>
                        <p class="job">ReactJs, NodeJs, MongoDB</p> 
                        {/* <a href="#"><i class="fab fa-facebook-square social fa-2x"></i></a> 
                        <a href="#"><i class="fab fa-linkedin social fa-2x"></i></a> 
                        <a href="#"><i class="fab fa-twitter-square social fa-2x"></i></a> */}
                    </div>
                </div>
                <div class="item">
                    <div class="front"> <img id="team4" alt='some value' class="team" src={kivy} /> </div>
                    <div class="back">
                        <p class="title_name">Python Kivy</p>
                        <p class="job">Kivy Framework</p>
                         {/* <a href="#"><i class="fab fa-facebook-square social fa-2x"></i></a> 
                         <a href="#"><i class="fab fa-linkedin social fa-2x"></i></a> 
                         <a href="#"><i class="fab fa-twitter-square social fa-2x"></i></a> */}
                    </div>
                </div>
                <div class="item">
                    <div class="front"> <img id="team5" alt='some value' class="team" src={node} /> </div>
                    <div class="back">
                        <p class="title_name">NodeJs</p>
                        {/* <p class="job">Interface Designer</p> <a href="#"><i class="fab fa-facebook-square social fa-2x"></i></a> <a href="#"><i class="fab fa-linkedin social fa-2x"></i></a> <a href="#"><i class="fab fa-twitter-square social fa-2x"></i></a> */}
                    </div>
                </div>
                <div class="item">
                    <div class="front"> <img id="team6" alt='some value' class="team" src={html} /> </div>
                    <div class="back">
                        <p class="title_name">HTML/CSS</p>
                        {/* <p class="job">Interface Designer</p> <a href="#"><i class="fab fa-facebook-square social fa-2x"></i></a> <a href="#"><i class="fab fa-linkedin social fa-2x"></i></a> <a href="#"><i class="fab fa-twitter-square social fa-2x"></i></a> */}
                    </div>
                </div>
                <div class="item">
                    <div class="front"> <img id="team6" alt='some value' class="team" src={javaScript} /> </div>
                    <div class="back">
                        <p class="title_name">javaScript</p>
                        {/* <p class="job">Interface Designer</p> <a href="#"><i class="fab fa-facebook-square social fa-2x"></i></a> <a href="#"><i class="fab fa-linkedin social fa-2x"></i></a> <a href="#"><i class="fab fa-twitter-square social fa-2x"></i></a> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;