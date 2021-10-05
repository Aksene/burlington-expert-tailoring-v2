import React from 'react'
import './TopHeroSection.css'


function TopHeroSection({header, subtitle}) {
    return (
        <div className="top-container">
            <div className="top-bg">
                <div className="top-text">
                    <h1 className="section-title"> {header}</h1>
                    <p1 className="section-subtitle"> {subtitle}</p1>
               </div>
            </div>
        </div>
    )
}

export default TopHeroSection
