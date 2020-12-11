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
                                <span class="highlight">Using ReactJs, Unsplash's powerful image API, JWT authentication, and MaterializeCss to empower the user to curate their own collection of personal collection of photography from some of the world's most talented photographers.</span>
                                </div>

                                <a className="projects--btn" href="https://github.com/dchoi20/Vibe">
                                     Learn More
                                </a>
                            </div>
                            <div className="projects--card">
                                
                                    <img className='projects--image' src={MoneyTrend} alt="Money Trend" ></img>
                                
                                <div className="projects--content">
                                <span class="highlight">MoneyTrend allows a user to create an account as a unique user. They can then add in their incomes, with dollar amounts and details. The expenses page allows the user to create a table of their budget, categorized for their convenience.</span>
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
                                
                                    <img className='projects--image' id='projects--readme' src={ReadMe} alt="ReadMe" ></img>
                                
                                <div className="projects--content" >
                                <span className="highlight">Using NodeJs and Inquirer, I managed to create A simple Node App for future Developers so they can create their .MD files for their future projects in a much easier way than writing it from scratch</span>
                                </div>
                                <a className="projects--btn" href="https://github.com/EvanMohammed/README.md-Generator">
                                    Learn More
                                </a>
                            </div>
                            <div className="projects--card">
                                
                                    <img className='projects--image' src={Fitness} alt="Vibe" ></img>
                                
                                <div className="projects--content">
                                <span class="highlight"> An App to manage your Personal Workout and collecting data as well by using the following libraries,  HTML / CSS / JavaScript/ MongoDB.</span>
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
