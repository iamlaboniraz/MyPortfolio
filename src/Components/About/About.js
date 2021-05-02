import React from 'react';
import img from "../../images/67874995_731516630651724_9070717646340620288_o.jpg"
import Navbar from '../Nabvar/Navbar';
import "./About.css";
import resume1 from "../../Resume(Tahiya-Jahan-Laboni).exe";
import resume from "../../Resume(Tahiya-Jahan-Laboni).pdf";
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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut voluptatum eveniet doloremque
                         autem excepturi eaque, sit laboriosam voluptatem nisi delectus. Facere explicabo hic minus 
                         accusamus alias fuga nihil dolorum quae. Explicabo illo unde, odio consequatur ipsam possimus 
                         veritatis, placeat, ab molestiae velit inventore exercitationem consequuntur blanditiis omnis 
                         beatae. Dolor iste excepturi ratione soluta quas culpa voluptatum repudiandae harum non.</p>
                    <a href="https://github.com/iamlaboniraz"><h3>Github Profile</h3></a>
                    <a href="https://github.com/iamlaboniraz"><h3>LinedIn Profile</h3></a>
                    
                    <a className="resumeDesign" target="_blank" href={resume}>Check My Resume</a>
                    <a className="resumeDesign" target="_blank" href={resume1}>Download Resume(PDF)</a>
                </div>
              </div>
          </div>
          </div>
      </section>
      </>
    );
};

export default About;