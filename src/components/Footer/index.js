import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import './style.css'

import {animateScroll as scroll} from 'react-scroll';



function Footer() {

  const toggleHome = ()=> {
    scroll.scrollToTop()
  }
  return (
    <div className='footer--container'>
      <div className='footer--wrapper'>
     

        <div className='footer--socialMedia'>
          
            <div className='footer--home' to="home"  onClick={toggleHome}>EVAN MOHAMMED</div>
            <div className='footer--copyRight'>
              Evan Mohammed © {new Date().getFullYear()} All rights reserved.
            </div>
            <div className='footer--icons'>
              <a className='footer--link'
                href="https://github.com/EvanMohammed"
                target="_blank"
                rel="noreferrer"
                aria-label="github"
              >
              <FaGithub /> 
              </a>
              <a className='footer--link'
                href="https://www.instagram.com/evan_mohammed92/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instgram"
              >
                <FaInstagram />
              </a>
              
              <a className='footer--link'
                href="https://twitter.com/ivanbakr"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a className='footer--link'
                href="https://www.linkedin.com/in/evan-mohammed-b50415b7/"
                target="_blank"
                rel="noreferrer"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </a>
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default Footer;