import React from 'react'
import Carditems from '../Carditems'
import '../Cards.css'
import Fade from 'react-reveal/Fade'

function Projects() {
    return (
        <div className='cards'>
            <h1>Check Out My Projects!</h1>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            <Fade left>
                            <Carditems 
                            src='/LogoTwo.png'
                            text= 'Backcountry Taxidermy Company website'
                            label='Website'
                            href='https://backcountrytax.com'
                            />
                            </Fade>
                            <Fade right>
                            <Carditems 
                            src='/4:5.png'
                            text= '4/5 Gaming my final project from Dev Point Labs'
                            label='Website'
                            href='https://ignindiegames.herokuapp.com/'
                            />
                            </Fade>
                        </ul>
                        <ul className="cards__items">
                            <Fade top>
                            <Carditems 
                            src='/DontBloat.webp'
                            text= 'Dont Bloat The Chicken. A game i made with C#'
                            label='Mobile Game'
                            href='https://play.google.com/store/apps/details?id=com.MountainViewGaming.DontBloatTheChicken&hl=en_US&gl=US'

                            />
                            </Fade>
                        </ul>
                    </div>
                </div>
        </div>
    )
}

export default Projects
