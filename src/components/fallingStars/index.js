import React from 'react';
import './style.css';
import {Router,Route} from 'react-router-dom'
import {Link as RouteS } from 'react-scroll'
export default function FallingStars() {
    return (


        
        <div className="container">
                
                <div className="night" style={{background:"cover", width:"100%"}} >
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
            </div>
            <RouteS className='stars--btn' to='about' smooth='true' duration='500' spy={true} exact='true'><h1 className='starts--header'>View My Work</h1></RouteS>
        </div>
    )
}
