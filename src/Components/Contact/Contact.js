import { faLocationArrow, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faGoogle, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import './Contact.css';
import bg1 from "../../images/about2.jfif";
import Navbar from '../Nabvar/Navbar';
const Contact = () => {
    return (
        <>
        <Navbar></Navbar>
        <div

            style={{
                backgroundImage: `url(${bg1})`,
                height: "900px",
                backgroundSize: "cover"
            }}
        >
                <div class=" container contact">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="contact-info">

                                <img style={{ width: '100px', height: "90px" }} src="https://image.ibb.co/kUASdV/contact-image.png" alt="image" />
                                <h2 className="contactTitle">Contact Me</h2>
                                <hr/>
                                <h4>Please contact me for your further require </h4>

                                <div>
                                    <p>
                                        <hr/>
                                        <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> <strong>Phone:</strong><br/> +8801950933069 <br />
                                        <FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon> <strong>Email:</strong> iamlaboniraz@gmail.com <br />
                                    </p>
                                    <p>
                                        <hr/>
                                        <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/iamlaboniraz" role="button"
                        ><FontAwesomeIcon icon={faGithub} /></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/tahiya-jahan-laboni/" role="button"
                        ><FontAwesomeIcon icon={faGithub} /></a>
                                    
                                          
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div class="col-md-9">
                            <form action="https://formspree.io/f/mrgrelqg" method="POST" class="contact-form">
                                <div class="form-group">
                                    <label class="control-label col-sm-2" for="fname">First Name:</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="fname" placeholder="Enter First Name" name="fname" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-sm-2" for="lname">Last Name:</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="lname" placeholder="Enter Last Name" name="lname" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-sm-2" for="email">Email:</label>
                                    <div class="col-sm-10">
                                        <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-sm-2" for="message">Comment:</label>
                                    <div class="col-sm-10">
                                        <textarea class="form-control" rows="5" name="message" id="message"></textarea>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-sm-offset-2 col-sm-10">
                                        <button type="submit" class="btn btn-default">Submit</button>
                                    </div>
                                </div>
                                
                            </form>
                            <div class="form-group">
                                    <div id="status" class="col-sm-10">
                                        
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            </>


    );
};

export default Contact;