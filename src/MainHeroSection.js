import React from 'react'
import './MainHeroSection.css'
import { Button } from './Button'
import { Link } from 'react-router-dom';
import ContactMe from './images/ContactMe.jpg';
import bg from './images/Background.jpeg'



function MainHeroSection() {
    return (
        <div className="hero-container">
            <div className="bg">
                <img src={bg} alt="Background" />
            </div>
            <h1 className="hero-header">Welcome to the family!</h1>
            <div class="hero-header-hl"/>
            <div className="grid-container">
                <div className="grid-child-left">
                    <img src={ContactMe} alt="Logo" className="hero-main-img" />
                    <div class="hero-slogan-vl">
                        <p1 className="hero-slogan">Stop by today to get your clothes fitting the way they were meant to. Right fit, on time.</p1>
                    </div>
                    <div className="hero-button-grid">
                            <div className="grid-button">
                                <Link to="/services" target='_blank'>
                                        <Button 
                                            className='btn--primary' 
                                            buttonSize='btn--medium' 
                                            buttonColor='brown'
                                        >
                                            Services
                                        </Button>
                                </Link>
                            </div>
                            <div className="grid-button">
                                <Link to="/contact-me" target='_blank'>
                                    <Button 
                                        className='btn--wide' 
                                        buttonSize='btn--medium' 
                                        buttonColor='white'
                                    >
                                        Contact Me
                                    </Button>
                                </Link>
                            </div>   
                            <div className="grid-button">
                                <Link to="/get-to-know-me" target='_blank'>
                                    <Button 
                                        className='btn--wide' 
                                        buttonSize='btn--medium' 
                                        buttonColor='white'
                                    >
                                        Get to know me
                                    </Button>
                                </Link>
                            </div>
                            <div className="grid-button">
                                <Link to="//www.facebook.com/Burlington-Expert-Tailoring-225017557535881/" target='_blank'>
                                    <Button 
                                        className='btn--wide' 
                                        buttonSize='btn--medium' 
                                        buttonColor='brown'
                                    >
                                        Check out our Facebook!
                                    </Button>
                                </Link>
                            </div>
                    </div>
                </div>
                <div className="grid-child-right">
                    <div class="hero-about-us-vl">
                        <p1 className="hero-about-us-text">
                            Burlington Expert Tailoring® is one of the most trusted tailors in the area and is a great provider of tailoring services in Massachusetts and throughout New England. Here at Burlington Expert Tailoring® we handle most requests on a variety of clothing including suits, coats, trousers, pants and much more. Men's and women clothing are both accepted. 
                            {"\n"}   - Mr. Mor Sene (Master Tailor)
                        </p1>
                    </div>
                    <div className="hero-souncloud">
                        <iframe className="hero-soundcloud-player" width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1233933211&amp;color=%23bda839&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>
                        <div className="hero-soundcloud-text-container">
                            <a className="soundcloud-text" href="https://soundcloud.com/abdou-k-sene" title="Burlington Expert Tailor" target="_blank">Burlington Expert Tailor</a> · <a className="soundcloud-text" href="https://soundcloud.com/abdou-k-sene/sets/some-jazz" title="Some Jazz" target="blank">Some Jazz</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MainHeroSection
