import React from "react";
import {Link as Router} from 'react-router-dom';
import {Link as Scroll} from 'react-scroll';
import {animateScroll as scroll} from 'react-scroll'
import Resume from '../../assets/resume/Evanresume.pdf'
import "./style.css";
function HamburgerBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navBar">
       <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Router className="nav-link" to="home">
              Home <span className="sr-only"></span>
            </Router>
          </li>
          <li className="nav-item">
            <Scroll className="nav-link" to='about' smooth={true} duration={500} spy={true} exact='true'>
              About
            </Scroll>
          </li>
          <li className="nav-item">
            <Scroll className="nav-link" to='projects' smooth={true} duration={500} spy={true} exact='true' to="projects">
              Projects
            </Scroll>
            <Router className="nav-link" target="_blank" to={Resume}>
              Projects
            </Router>
            <Scroll className="nav-link" to='contact' smooth={true} duration={500} spy={true} exact='true' to="contact">
              Projects
            </Scroll>
          </li>
          
         
        </ul>
       
      </div>
    </nav>
  );
}

export default HamburgerBar;
