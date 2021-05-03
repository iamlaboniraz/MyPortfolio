import { faFacebook, faGithub, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Typed from 'react-typed';
import resume from "../../Resume(Tahiya-Jahan-Laboni).rar";
const Header = () => {
    return (
        <>
            <div className="header-wraper">
                <div className="main-info">
                    <h1>This is Tahiya Jahan Laboni</h1>
                    <Typed
                        className="typed-text"
                        strings={["React Developer", "Web Developer", "Full Stack Developer", "Programmer", "Python Programmer", "Django/Python Developer"]}
                        typeSpeed={40}
                        backSpeed={60}
                        loop
                    >
                    </Typed>
                    <a href={resume} className="btn-main-offer" target="_blank">Download my Resume</a>
                </div>
            </div>

            {/* footer */}
            <footer class="bg-light text-center text-white">
                <div class="container p-4 pb-0">
                    <section class="mb-4 mt-5">
                        <a
                            class="btn btn-primary btn-floating m-1"
                            style={{ backgroundColor: "#3b5998" }}
                            href="#!"
                            role="button"
                        >
                            <FontAwesomeIcon icon={faGoogle} /></a>
                        <a
                            class="btn btn-primary btn-floating m-1"
                            style={{ backgroundColor: "#55acee" }}
                            href="#!"
                            role="button"
                        ><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a
                            class="btn btn-primary btn-floating m-1"
                            style={{ backgroundColor: "#dd4b39" }}
                            href="#!"
                            role="button"><FontAwesomeIcon icon={faGithub} /></a>

                        <a
                            class="btn btn-primary btn-floating m-1"
                            style={{ backgroundColor: "#ac2bac" }}
                            href="#!"
                            role="button"
                        ><FontAwesomeIcon icon={faFacebook} /></a>

                    </section>
                </div>
                <div class="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    <a class="text-white" href="https://mdbootstrap.com/">@Tahiya Jahan Laboni</a>
                </div>
            </footer>
        </>
    );
};

export default Header;