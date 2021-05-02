import React from 'react';
import {FontAwesomeIcon, fontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {fabars} from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
            <div className="container-fluid">
                <a style={{color:"white",marginTop:"5px"}} className="navbar-brand" href="#">Tahiya Jahan Laboni</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}></FontAwesomeIcon>
                    {/* <span className="navbar-toggler-icon"></span> */}
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" aria-current="page" href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/skill">Skills</a>
                        </li> 
                        <li className="nav-item">
                            <a className="nav-link" href="/project">Project</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/blog">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/service">Service</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>


                    </ul>

                </div>
            </div>
            </div>
        </nav>
    );
};

export default Navbar;