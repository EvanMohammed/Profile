import React from 'react'
import './style.css'
import {FaBars} from 'react-icons/fa'
import {Link as Router} from 'react-router-dom';
import {Link as Scroll} from 'react-scroll';
import {animateScroll as scroll} from 'react-scroll'
import Home from '../Home/index';
import About from '../About/index';
import Projects from '../Projects/index';
import Contact from '../Contact/index';
import Sidebar from '../SideBar';
import PDF from '../../assets/resume/EvanResume.pdf'
const NavBar = ({ toggle}) => {
    const toggleHome = () => {
        scroll.scrollToTop()
    }
    return (
        <div className="navBar">
           
            <ul className="navBar--container">
                <Router className='navBar--list' to={Home} to='/' onClick={toggleHome}>Home</Router>
                <Scroll className='navBar--list' to='about' smooth={true} duration={500} spy={true} exact='true'>About</Scroll>
                <Scroll className='navBar--list' to='projects' smooth={true} duration={500} spy={true} exact='true'>Projects</Scroll>
                <a className='navBar--list' target="_blank" rel="noreferrer" href={PDF}>Resume</a>
                <Scroll className='navBar--list' to='contact' smooth={true} duration={500} spy={true} exact='true'>Contact</Scroll>
                
            </ul>
            <div>

            <FaBars className='navBar--icon' onClick={toggle} />
            </div>
        </div>
    )
}

export default NavBar
