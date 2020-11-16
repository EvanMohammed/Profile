import React from 'react'
import './style.css'
import VibeApp from '../../assets/images/vibeApp.gif'
import MoneyTrend from '../../assets/images/moneytrend.gif'
import ReadMe from '../../assets/images/readme.gif'
import Fitness from '../../assets/images/fitness.jpg'
export default function Projects() {
    return (
        <div className='projects' id='projects'>
            <h1 className='projects--header'>Projects</h1>
            <div className='projects--container'>
                < div className='projects--row'>
                    <div className='projects--columns'>
                        <div className='projects--group'>
                            <div className="projects--card">
                                
                                    <img className='projects--image' src={VibeApp} alt="Vibe" ></img>
                                
                                <div className="projects--content">
                                <span class="highlight">React JS / MongoDB/ CSS/ Bootstrap</span>
                                </div>
                                <a className="projects--btn" href="https://github.com/dchoi20/Vibe">
                                     Learn More
                                </a>
                            </div>
                            <div className="projects--card">
                                
                                    <img className='projects--image' src={MoneyTrend} alt="Vibe" ></img>
                                
                                <div className="projects--content">
                                <span class="highlight">JavaScript / MySQL /Scss</span>
                                </div>
                                <a className="projects--btn" href="https://github.com/EvanMohammed/MoneyTrend">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='projects--container'>
                < div className='projects--row'>
                    <div className='projects--columns'>
                        <div className='projects--group'>
                            <div className="projects--card">
                                
                                    <img className='projects--image' id='projects--readme' src={ReadMe} alt="Vibe" ></img>
                                
                                <div className="projects--content" >
                                <span class="highlight">NodeJs / Inquirer</span>
                                </div>
                                <a className="projects--btn" href="https://github.com/EvanMohammed/README.md-Generator">
                                    Learn More
                                </a>
                            </div>
                            <div className="projects--card">
                                
                                    <img className='projects--image' src={Fitness} alt="Vibe" ></img>
                                
                                <div className="projects--content">
                                <span class="highlight">MongoDB / ChartJs /API</span>
                                </div>
                                <a className="projects--btn" href="https://github.com/EvanMohammed/Workout-Tracker">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
