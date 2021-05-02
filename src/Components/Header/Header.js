import React from 'react';
import Typed from 'react-typed';
import resume from "../../Resume(Tahiya-Jahan-Laboni).rar";
const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>This is Tahiya Jahan Laboni</h1>
                <Typed
                className="typed-text"
                strings={["Web Developer", "Full Stack Developer","Programmer"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                >
                </Typed>
                <a href={resume} className="btn-main-offer" target="_blank">Download my Resume</a>
            </div>
        </div>
    );
};

export default Header;