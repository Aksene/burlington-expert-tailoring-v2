import React from 'react'
import TopHeroSectionSubtitle from '../../TopHeroSectionSubtitle'
import AboutMeBody from '../../AboutMeBody'
import { aboutMeHeader } from './Data'
import {AboutMeSliderData} from "./AboutMeSliderData"
import {JazzSliderData} from "./JazzSliderData"




function AboutMe() {
    return (
        <div>
            <TopHeroSectionSubtitle {...aboutMeHeader}/>
            <AboutMeBody slides={AboutMeSliderData} slidesJazz={JazzSliderData}/>
            
        </div>
    )
}

export default AboutMe
