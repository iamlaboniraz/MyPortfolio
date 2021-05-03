import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from './Components/Nabvar/Navbar';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Project from './Components/Project/Project';
import Blog from './Components/Blog/Blog';
import Services from './Components/Services/Services';
import Experience from './Components/Experience/Experience';
function App() {
  return (
  <>
  

  <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/skill">
            <Skills></Skills>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/project">
            <Project></Project>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/service">
            <Services></Services>
          </Route>
          <Route path="/experience">
            <Experience></Experience>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>


  
  </>
  );
}

export default App;
