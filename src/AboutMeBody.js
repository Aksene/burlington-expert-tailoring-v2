import React, {useState} from 'react'
import './AboutMeBody.css'
import { Link } from 'react-router-dom';
import {AboutMeSliderData} from "./components/AboutMe/AboutMeSliderData"
import {JazzSliderData} from "./components/AboutMe/JazzSliderData"

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';



function AboutMeBody({slides, slidesJazz}) {
    const [current, setCurrent] = useState(0)
    const [currentJazz, setCurrentJazz] = useState(0)
    const length = slides.length
    const length2 = slidesJazz.length

    // Slider button logic
    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current -1)
    }

    const nextSlideJazz = () => {
        setCurrentJazz(currentJazz === length2 -1 ? 0 : currentJazz + 1)
    }

    const prevSlideJazz = () => {
        setCurrentJazz(currentJazz === 0 ? length2 -1 : currentJazz -1)
    }

    console.log(current)

    // Slider Logic
    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    if(!Array.isArray(slidesJazz) || slidesJazz.length <= 0) {
        return null
    }

    return (
        <div className="aboutMe__body-container">
            <div className="aboutMe__body-grid">
                <div className="aboutMe-table">
                    <div className="aboutMe__body-aboutMe">
                        <div className="aboutMe__body-subject">
                            <h1 className="aboutMe__body-title">About me</h1>
                            <p1 className="aboutMe__body-subtitle">My practice, experience and values</p1>
                        </div>
                        <div className="aboutMe__body-text-aboutMe">
                            <p1 className="aboutMe__body-aboutMe-text">
                            The most important words in the art of alteration are detail, fit, speed and value. At Burlington Expert Tailoring we take this to heart. 
                            We get this belief from our founder, Mor Sene, a tailor trained in Paris. He was also trained by master tailors in the Boston area. His first 
                            mentor was Luigi Mauro. His second was Charlie Davidson. Mr. Sene caters to men as well as women. He is expert in classic as well as contemporary 
                            styles. He understands the distinct considerations of American, European, African and Asian styles.
                            {"\n"}{"\n"}"I want my customers to feel comfortable," says Mr. Sene, who completed thousands of alterations during his 12 years at Filene's. 
                            "At the same time I want them to feel as if their clothes are in line with their personality or right for the occasion. 
                            Getting all of this right with an alteration is a very complex and subtle thing." Male or female. Classic or contemporary. 
                            American, European, African and Asian designs. thrives on the values French-trained tailor who over twelve years experience at the world-famous Andover Tailoring
                            {"\n"}- Colin Channer
                            </p1>
                            <section className="slider">
                                <FaArrowAltCircleLeft className="left-arrow"  onClick={prevSlide}/>
                                <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
                                    {AboutMeSliderData.map((slide, index) => {
                                        return (
                                            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                                {index === current &&(<img src={slide.aboutMe} alt="AboutMe" 
                                        className="aboutMe__body-aboutMe-img" /> )}        
                                            </div>
                                        )
                                    })}
                            </section>
                        </div>
                    </div>
                    <div className="aboutMe__body-article">
                        <div className="aboutMe__body-article-subject">
                                <h1 className="aboutMe__body-title">Burlington Patch</h1>
                                <p1 className="aboutMe__body-subtitle">Burlington Expert Tailoring: </p1>
                                <p1 className="aboutMe__body-subtitle2">A Lifetime of Experience Around the World</p1>
                        </div>
                        <div className="aboutMe__body-article-text">
                            <p1 className="aboutMe__body-text">
                                To read the article written by Lucille Samaras{"  "} 
                                <Link className="aboutMe__body-text-link" to="//patch.com/massachusetts/burlington/burlington-expert-tailoring" target='_blank'>
                                 CLICK HERE
                                </Link>
                                 
                            </p1>  
                        </div>
                    </div>
                    <div className="aboutMe__body-line-divider">
                            <hr className="aboutMe__body-line-divider-style" />
                    </div>
                    <div className="aboutMe__body-hobby">
                        <div className="aboutMe__body-hobby-subject">
                                <h1 className="aboutMe__body-title">What do Master Tailors enjoy? </h1>
                                <p1 className="aboutMe__body-subtitle">Well Jazz music of course!!</p1>
                        </div>
                        <div className="aboutMe__body-hobby-img">
                        <section className="sliderJazz">
                                <FaArrowAltCircleLeft className="left-arrowJazz"  onClick={prevSlideJazz}/>
                                <FaArrowAltCircleRight className="right-arrowJazz" onClick={nextSlideJazz} />
                                    {JazzSliderData.map((slideJazz, index) => {
                                        return (
                                            <div className={index === currentJazz ? 'slideJazz active' : 'slideJazz'} key={index}>
                                                {index === currentJazz &&(<img src={slideJazz.jazz} alt="Jazz" 
                                        className="aboutMe__body-hobby-img" /> )}        
                                            </div>
                                        )
                                    })}
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMeBody
