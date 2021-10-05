import React from 'react'
import './TopHeroSectionSubtitle.css'


function TopHeroSectionSubtitle({header, subtitle}) {
    return (
        <div className="services__topSubtitle-container">
            <div className="topSubtitle-bg">
                <div className="topSubtitle-text">
                    <div className="topSubtitle-text-container">
                        <h1 className="section-title"> {header}</h1>
                        <p1 className="section-subtitle"> {subtitle}</p1>
                    </div>
               </div>
            </div>
        </div>
    )
}

export default TopHeroSectionSubtitle
