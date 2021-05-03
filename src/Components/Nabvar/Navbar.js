import React from 'react';
import { FontAwesomeIcon, fontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
const NavbarPage = () => {
    return (
        <Navbar style={{backgroundColor:"black"}} collapseOnSelect expand="lg" variant="dark">
            <Navbar.Brand style={{fontFamily: "'Antonio', sans-serif"}} href="/home">Tahiya Jahan <strong style={{color:"red"}}>Laboni</strong></Navbar.Brand>
            <Navbar.Toggle style={{backgroundColor:"blue"}} aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    
                </Nav>
                <Nav style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>
                    <Nav.Link className="navName" href="/home">Home</Nav.Link>
                    <Nav.Link className="navName" href="/about">About</Nav.Link>
                    <Nav.Link className="navName" href="/skill">Skills</Nav.Link>
                    <Nav.Link className="navName" href="/project">Project</Nav.Link>
                    <Nav.Link className="navName" href="/blog">Blog</Nav.Link>
                    <Nav.Link className="navName" href="/contact">Contact</Nav.Link>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarPage;