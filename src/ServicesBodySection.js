import React from 'react'
import './ServicesBodySection.css'

function ServicesBodySection() {
    return (
        <div className="services__body-container">
            <div className="services__body-grid">
                <div className="services__body-table">
                    <div className="body-headers-grid">
                        <h1 className="body-services-header">Services</h1>
                        <h1 className="body-price-header">Price</h1>
                    </div>
                    <div className="line-divider">
                        <hr className="line-divider-style" />
                    </div>
                    <div className="body-pants-hem-grid">
                        <div className="pants-hem">
                            <p1>Regular pants hem{"\n"}</p1>
                            <p1 className="body-per-item-text">*per item</p1>
                        </div>
                        <div className="pants-hem-price">
                            <p1>$10.00{"\n"}{"\n"}</p1>
                        </div>
                    </div>
                    <div className="line-divider">
                            <hr className="line-divider-style" />
                    </div>
                    <div className="body-jacket-grid">
                        <div className="jacket-sleeves">
                            <p1>Jacket sleeves (up or down){"\n"}</p1>
                            <p1>*per item</p1>
                        </div>
                        <div className="jacket-sleeves-price">
                            <p1>$25.00{"\n"}{"\n"}</p1>
                        </div>
                    </div>
                    <div className="line-divider">
                            <hr className="line-divider-style" />
                    </div>
                    <div className="body-take-in-grid">
                        <div className="take-in">
                            <p1>Take in waist on pants{"\n"}</p1>
                            <p1>*per item</p1>
                        </div>
                        <div className="jacket-sleeves-price">
                            <p1>$25.00{"\n"}{"\n"}</p1>
                        </div>
                    </div>
                    <div className="line-divider">
                            <hr className="line-divider-style" />
                    </div>
                    <div className="body-skirt-grid">
                        <div className="skirt-hem">
                            <p1>Skirt unlined them{"\n"}</p1>
                            <p1>*per item</p1>
                        </div>
                        <div className="take-in-price">
                            <p1>$15.00{"\n"}{"\n"}</p1>
                        </div>
                    </div>
                    <div className="line-divider">
                            <hr className="line-divider-style" />
                    </div>
                    <div className="body-jean-grid">
                        <div className="jean-hem">
                            <p1>Original jean hem{"\n"}</p1>
                            <p1>*per item</p1>
                        </div>
                        <div className="skirt-hem-price">
                            <p1>$15.00{"\n"}{"\n"}</p1>
                        </div>
                    </div>
                    <div className="line-divider">
                            <hr className="line-divider-style" />
                    </div>
                    <div className="body-else-grid">
                        <div className="everything-else">
                            <p1>Everything else{"\n"}</p1>
                            <p1 className="body-per-item-text">*per item</p1>
                        </div>
                        <div className="everything-else-price">
                            <p1>Visit the store for pricing</p1>
                        </div>
                    </div>
                    <div className="line-divider">
                            <hr className="line-divider-style" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesBodySection
