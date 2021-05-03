import React from 'react';
import Particles from "react-particles-js";
import Header from '../Header/Header';
import NavbarPage from '../Nabvar/Navbar';
const Home = () => {
  return (
    <div>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "square",
              stroke: {
                width: 6,
                color: "#f9ab00"
              }
            }
          }
        }}
      ></Particles>
      <NavbarPage></NavbarPage>
      <Header></Header>
    </div>
  );
};

export default Home;