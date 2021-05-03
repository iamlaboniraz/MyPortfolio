import React from 'react';
import Navbar from '../Nabvar/Navbar';
import "./Skills.css";
const Skills = () => {
    return (
        <>
            <Navbar></Navbar>
            <section class="skills" id="skills">
                <div className="container">
                    <div class="max-width">
                        <h2 class="title">My skills</h2>
                        <div class="skills-content">
                            <div class="column left">
                                <div class="text">My creative skills & Habituate with</div>
                                <hr/>
                                <p>
                                <strong style={{color:"red"}}>Habituate with -</strong> 
                                <li>
                                    Python, ReactJs, NodeJS, GraphQL, Data structure & algorithm, HTML/CSS, Bootstrap, JavaScript, GitHub, Material-UI, React-Bootstrap, DBMS (Oracle, MySQL, PostgreSQL, MongoDB), Hosting (Firebase, Heroku, Netlify)
                                </li>
                                </p>

                                <p>
                                <strong style={{color:"red"}}>Familiar with	: </strong>
                                <li>
                                    C, Java, PHP, Redux, Firebase, Machine Learning    
                                </li>
                                </p>

                                <p>
                                <strong style={{color:"red"}}>Framework : </strong>
                                <li>
                                   Django, Kivy
                                </li>
                                </p>

                                <p>
                                <strong style={{color:"red"}}>Currently Learning :</strong> 
                                <li>
                                    Data Science, React Native, IELTS Preparation
                                </li>
                                </p>
                                <a href="/service">Check my services</a>
                            </div>
                            <div class="column right">
                                <div class="bars">
                                    <div class="info">
                                        <span>Python, Django Rest Framework, HTML/CSS</span>
                                        <span>90%</span>
                                    </div>
                                    <div class="line html"></div>
                                </div>

                                <div class="bars">
                                    <div class="info">
                                        <span>JavaScript, React, GraphQL</span>
                                        <span>80%</span>
                                    </div>
                                    <div class="line js"></div>
                                </div>

                                <div class="bars">
                                    <div class="info">
                                        <span>Bootstrap, Data structure & Algorithm</span>
                                        <span>80%</span>
                                    </div>
                                    <div class="line js"></div>
                                </div>
                                <div class="bars">
                                    <div class="info">
                                        <span>MySQL</span>
                                        <span>70%</span>
                                    </div>
                                    <div class="line mysql"></div>
                                </div>
                               
                                
                                <div class="bars">
                                    <div class="info">
                                        <span>Python Kivy</span>
                                        <span>60%</span>
                                    </div>
                                    <div class="line css"></div>
                                </div>
                               
                                <div class="bars">
                                    <div class="info">
                                        <span>PostgreSQL</span>
                                        <span>50%</span>
                                    </div>
                                    <div class="line php"></div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Skills;