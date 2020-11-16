import React from 'react';
import './style.css';
import {SiJavascript, SiCss3} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {IoLogoHtml5} from 'react-icons/io'
import Evan from '../../assets/images/evan.jpg'
function About() {
    return (
        <div className='about' id='about'>

            <h1 className='about--header'>Skills</h1>
            <div className='about--container'>
                <div className='about--row'>
                    <div className='about--columns'>
                        <div className='about--skills'><FaReact style={{color:'#14213d', height:'50%', width:'50%'}} /></div>
                        <div className='about--skills'><SiJavascript style={{height:'50%', width:'50%'}} /></div>
                    </div>
                    <div className='about--columns'>
                        <div className='about--skills'><IoLogoHtml5 style={{height:'50%', width:'50%'}} /></div>
                        <div className='about--skills'><SiCss3 style={{height:'50%', width:'50%'}} /></div>
                    </div>
                </div>
                <div className='about--summary'>
                    <div className='about--img'><img className='image--profile' src={Evan} alt='Profile Picture'/></div>
                    <div className='about--statement'>
                        <h2 className='about--statementHeader'>Full Stack Developer</h2>
                        <p className='about--statementBody'>A passion for integrating technologies to solve problems and improve upon existing methods. Enjoys leveraging background in digital marketing to provide unique perspectives on how end-users interact with websites and software platforms. Passionate about approaching programming challenges from different angles, and collaborating with others to create meaningful web applications. Fluent in English,Kurdish  and Arabic. </p> 
                        </div>
                </div>
            </div>
        </div>
    )
}

export default About
