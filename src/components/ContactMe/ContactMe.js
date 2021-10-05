import React from 'react'
import TopHeroSection from '../../TopHeroSection'
import ContactMeBody from '../../ContactMeBody'
import { aboutMeHeader } from './Data'


function ContactMe() {
    return (
        <div>
            <TopHeroSection {...aboutMeHeader}/>
            <ContactMeBody/>            
        </div>
    )
}

export default ContactMe
