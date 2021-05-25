import React from 'react'
import { Button } from './Button'
import './Hero.css'
import '../App.css'

function Hero() {
    return (
        <div className='hero-container'>
            <h1>Welcome</h1>
            <p style={{justifyContent: 'center'}}>Web Developer, Software Developer, Amature Game Developer, and Engineer </p>
                <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--primary'  
                buttonSize='btn--large' ><i class="fab fa-linkedin-in"  ></i> | Linkedin</Button>
            </div>
        </div>
    )
}

export default Hero
