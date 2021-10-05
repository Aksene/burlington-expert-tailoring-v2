import React from 'react'
import machine from './images/machine.png'
import mannequin from './images/mannequin.png'
import ruler from './images/ruler.png'
import scissor from './images/scissor.png'
import thimble from './images/thimble.png'
import zipper from './images/zipper.png'
import './ServicesHeaderHero.css'


function ServicesHeaderHero() {
    return (
        <div className="services__header-container">
            <div className="services__header-text">
                <h1>Stop by today to get your clothes fitting the way they were meant to fit. Right fit, on time.</h1>
                <p1>- We specialize in alterations and re-weaving {"\n"}</p1>
                <p1>- We provide same-day and store alteration contracts.</p1>
            </div>
            <div className="services__header-image-grid">
                <div className="section__header-machine">
                    <img src={machine} alt="machine" />
                </div>
                <div className="section__header-mannequin">
                    <img src={mannequin} alt="mannequin" />
                </div>     
                <div className="section__header-zipper">
                    <img src={zipper} alt="zipper" />
                </div>     
                <div className="section__header-thimble">
                    <img src={thimble} alt="thimble" />
                </div>     
                <div className="section__header-scissor">
                    <img src={scissor} alt="scissor" />
                </div>     
                <div className="section__header-ruler">
                    <img src={ruler} alt="ruler" />
            </div>
            </div>               
        </div>
    )
}

export default ServicesHeaderHero
