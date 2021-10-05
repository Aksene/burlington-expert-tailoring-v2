import React from 'react'
import TopHeroSection from '../../TopHeroSection'
import ServicesHeaderHero from '../../ServicesHeaderHero'
import { servicesHeader } from './Data'
import ServicesBodySection from '../../ServicesBodySection'

function Services() {
    return (
        <div>
           <TopHeroSection {...servicesHeader}/>
           <ServicesHeaderHero/>
           <ServicesBodySection/>
        </div>
    )
}

export default Services
