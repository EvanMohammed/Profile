import React , { useState } from 'react'
import About from '../About'
import Contact from '../Contact'
import NavBar from '../NavBar'
import Projects from '../Projects'
import {Router,Switch,Route} from 'react-router-dom';
import FallingStars from '../fallingStars'
import Footer from '../Footer'
import Sidebar from '../SideBar'


function Home() {
    const [isOpen, setIsOpen]= useState (false);
        const toggle = () => {

            setIsOpen (!isOpen)
        }
    
    return (
        <div className='home' id='home'>
                <FallingStars />
               
                <Sidebar toggle={toggle} isOpen={isOpen} />
                <NavBar toggle={toggle}/>
                <About />
                <Projects />
                <Contact />
                <Footer />
            {/* <Route path='/' component={NavBar} exact />
            <Route path='/' component={About} exact />
            <Route path='/' component={Projects} exact />
        <Route path='/' component={Contact} exact /> */}
        </div>
         
    )
}

export default Home
