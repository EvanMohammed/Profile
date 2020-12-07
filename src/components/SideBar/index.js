import React from 'react'
import { FaTimes } from "react-icons/fa";
import { Link as Router } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import './style.css';
import { SidebarContainer } from './SidebarElements.js';
import PDF from '../../assets/resume/EvanResume.pdf'


function Sidebar({ isOpen, toggle }) {




    return (
        <SidebarContainer className="sidebar--container" isOpen={isOpen} onClick={toggle}>
            <div className="sidebar--icon" onClick={toggle}>
                <div className="sidebar--close"><FaTimes /></div>
            </div>
            <div className="sidebar--wrapper">
                <div className="sidebar--wrapperMenu">
                    <Scroll className="sidebar--link" to="about" onClick={toggle}>
                        About
                    </Scroll>
                    <Scroll className="sidebar--link" to="projects" onClick={toggle}>
                        Projects
                    </Scroll>
                    <a className="sidebar--link" target="_blank" rel="noreferrer" href={PDF} onClick={toggle}>
                        Resume
                    </a>
                    <Scroll className="sidebar--link" to="contact" onClick={toggle}>
                        Contact Me
                    </Scroll>
                </div>
            </div>
        </SidebarContainer>
    )
}

export default Sidebar;