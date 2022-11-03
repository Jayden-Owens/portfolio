import React from 'react'
import { Button } from './Button'
import './Hero.css'
import '../App.css'

function Hero() {
    return (
        <div className='hero-container'>
            <h1>Welcome To My Portfolio</h1>
                <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--primary'  
                buttonSize='btn--large' ><i class="fab fa-linkedin-in"  ></i> | Linkedin</Button>
            </div>
        </div>
    )
}

export default Hero
