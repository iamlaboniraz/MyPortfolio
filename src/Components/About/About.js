import React from 'react';
import img from "../../images/67874995_731516630651724_9070717646340620288_o.jpg"
import Navbar from '../Nabvar/Navbar';
import "./About.css";
import { faGraduationCap, faLaptop, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

import resume1 from "../../Resume(Tahiya-Jahan-Laboni).exe";
// import resume from "../../Resume(Tahiya-Jahan-Laboni).pdf";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const About = () => {
    return (
       <>
        <Navbar></Navbar>
        <section class="about" id="about">
            <div className="container">
          <div class="max-width">
              <h2 class="title">About me</h2>
              <div class="about-content">
                  <div class="column left">
                      <img src={img} alt=""/>
                  </div>
                  <div class="column right">
                    <div class="text">I'm Banladeshi and I'm a <span class="typing-2">Programmer</span></div>
                    <p>This is Tahiya Jahan Laboni. I'm from Dhaka,Bangladesh. I finished my BSC in CSE from
                         Notre Dame University Bangladesh in December 2019. I also completed my internship from Divine IT Ltd for 4 months. 
                         I worked in CNC Group in Bangladesh office as a Python Programmer since February-2020 to January-2021. 
                        I love to do Coding and learn new thing.
                        <a style={{color:"red"}} className="experienceButton" href="/experience"> Read More</a>
                        </p>
                    
                    <a href="https://github.com/iamlaboniraz"><h3>Github Profile</h3></a>
                    <a href="https://github.com/iamlaboniraz"><h3>LinedIn Profile</h3></a>
                    
                    <a className="resumeDesign" target="_blank" href="https://drive.google.com/file/d/1LH3m1QhAtWIpuwWcIIi38SbHKVxYBDEw/view">Check My Resume</a>
                    <a className="resumeDesign" target="_blank" href={resume1}>Download Resume(PDF)</a>
                </div>
              </div>
          </div>
          </div>
      </section>
      <hr className="break" />

      {/* about my experience, education, short courses */}
      <section class="section gray-bg" id="resume">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="section-title mt-5">
                                <h2>Experience</h2>

                                {/* <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites</p> */}
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 m-15px-tb mt-2">
                            <div class="resume-box">

                                <ul>
                                    <li>
                                        <div class="icon">
                                            <i class="fas fa-user-graduate"></i>
                                        </div>
                                        <span class="time">Dec-2020 - Jan-2021</span>
                                        <h5>Python Programmer - CNC GROUP</h5>
                                        <p>
                                            <li>Design & development Hotel management website using Django and Restful API</li> 
                                        <li>UI design and development using HTML/CSS, Bootstrap, JavaScript</li> 
                                        <li> Under development of mobile application using Python Kivy framework.</li>
                                        <h5><strong style={{color:"green"}}>Technology -</strong>  Python, Django, React, Python Kivy,HTML/CSS, Bootstrap, Javascript</h5>
                                        </p>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-6 m-15px-tb mt-2">
                            <div class="resume-box">
                                <ul>
                                    <li>
                                        <div class="icon">
                                            <i class="fas fa-briefcase"></i>
                                        </div>
                                        <span class="time">Sept-209 - Dec-2019</span>
                                        <h5>Software Engineer, Intern - Divine IT Ltd</h5>
                                        <p>
                                            <li>Developed an e-courier project for RMG industry with traceability concept by using Django</li>
                                            <li>Senior software engineer supervised me and I was prepared myself as a full stack developer</li>
                                            <li>I worked and learn Python, Django, PostgreSQL, JavaScript in a professional way</li>
                                            <h5><strong style={{color:"green"}}>Technology -</strong> Python, Django, React, NodeJs HTML/CSS, Bootstrap, Javascript, Java</h5>
                                       
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <hr className="education" />

                {/* Education */}
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="section-title mt-5">
                                <h2 style={{ color: "#074d0b" }}>Education</h2>

                                {/* <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites</p> */}
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 m-15px-tb mt-2">
                            <div style={{ boxShadow: "10px 10px 40px rgb(139, 21, 21)" }} class="resume-box">

                                <ul>
                                    <li>
                                        <div class="icon">
                                            <i class="fas fa-user-graduate"></i>
                                        </div>
                                        <span class="time">Jan-2016 - Dec-2019</span>
                                        <h5><FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon> BSC in CSE - Notre Dame University Bangladesh</h5>
                                        <p>
                                        <li><FontAwesomeIcon icon={faUserGraduate}></FontAwesomeIcon> <strong style={{color:"red"}}>Result - </strong>  CGPA: 3.80 out of 4.00</li>
                                            <li><FontAwesomeIcon icon={faLaptop}></FontAwesomeIcon>  <strong style={{color:"red"}}>Concentration -</strong> Programming</li>
                                        </p>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-6 m-15px-tb mt-2">
                            <div style={{ boxShadow: "10px 10px 40px rgb(139, 21, 21)" }} class="resume-box">
                                <ul>
                                    <li>
                                        <div class="icon">
                                            <i class="fas fa-briefcase"></i>
                                        </div>
                                        <span class="time">2014 - 2015</span>
                                        <h5><FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon> Science- Hazi Misir Ali Degree college</h5>
                                        <p>
                                        <li><FontAwesomeIcon icon={faUserGraduate}></FontAwesomeIcon> <strong style={{color:"red"}}>Result - </strong>  GPA: 4.92 out of 5.00</li>
                                        <li><FontAwesomeIcon icon={faLaptop}></FontAwesomeIcon>  <strong style={{color:"red"}}>Concentration -</strong> Science</li>
                                       
                                        </p>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="shortCourse" />

                {/* Additional short course */}
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="section-title mt-5">
                                <h2 style={{ color: "#0c6a8f" }}>Short Courses</h2>

                                <p>I did some additional short courses for learning new thing</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 m-15px-tb mt-2">
                            <div style={{ boxShadow: "10px 10px 40px rgb(79, 92, 211)", borderRadius: "10px", marginBottom: "60px" }} class="resume-box">

                                <ul>
                                    <li>
                                        <div class="icon">
                                            <i class="fas fa-user-graduate"></i>
                                        </div>
                                        <span class="time">3-Months</span>
                                        <h5>Advance python-3  - (BITM) Leads training center</h5>
                                        <p>
                                            <li><strong style={{color:"green"}}>Learning -
                                            </strong> Python, Django, Django Rest API, HTML/CSS, Bootstrap
                                            </li>
                                        </p>
                                    </li>

                                    <li>
                                        <div class="icon">
                                            <i class="fas fa-user-graduate"></i>
                                        </div>
                                        <span class="time">2-Months</span>
                                        <h5>Database Management & Administration   - BK-IAC, CSE, BUET</h5>
                                        <p>
                                            <li><strong style={{color:"green"}}>Learning -
                                            </strong> Oracle
                                            </li>
                                        </p>
                                        </li>

                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-6 m-15px-tb mt-2">
                            <div style={{ boxShadow: "10px 10px 40px rgb(79, 92, 211)", borderRadius: "10px", marginBottom: "60px" }} class="resume-box">
                                <ul>
                                    <li>
                                        <div class="icon">
                                            <i class="fas fa-briefcase"></i>
                                        </div>
                                        <span class="time">Jan-2020 - Present</span>
                                        <h5>Complete Web Development Course with Jhankar Mahbub - Programming Hero</h5>
                                        <p>
                                        <li><strong style={{color:"green"}}>Learning -
                                            </strong> HTML/CSS, JavaScript, JQuery, ES6, React, NodeJs API, GitHub, Hosting, MongoDB 
                                            </li>
                                        </p>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <i class="fas fa-user-graduate"></i>
                                        </div>
                                        <span class="time">2-Months</span>
                                        <h5>English language course  - British Council</h5>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
      </>
    );
};

export default About;