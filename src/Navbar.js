import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import  { IconContext } from 'react-icons/lib'
import { FaBars, FaTimes } from 'react-icons/fa';
import BET from './images/BET.png';
import './Navbar.css'



function Navbar() {
    const [click, setClick ] = useState(false);
    const [button, setButton] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener("resize", showButton)


    return (
        <IconContext.Provider value={{color: '#242424'}}>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <img src={BET} alt="Logo" className="navbar-icon"/>
                    </Link>
                    <p1 className="navbar-slogan">
                    Right Fit, On Time
                    </p1>

                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes/> : <FaBars/>}
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                    {/* <ul className={"nav-menu-active"}> */}
                        <li className="nav-item">
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            Homepage
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/services' className="nav-links" onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/get-to-know-me' className="nav-links" onClick={closeMobileMenu}>
                                Get to know me
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='contact-me' className="nav-links" onClick={closeMobileMenu}>
                                Contact Me
                            </Link>
                        </li>
                    </ul>
                    <div className="navbar-footer">
                        <div className="contact-info">
                            <p1 className="info">
                                tel: (781)-272-7900
                            </p1>
                        </div>
                        <div className="credit-info">
                            <Link to='//abdous-world.vercel.app/' target='_blank' className="credit-link">
                                <p2 className="credit">Powered by Abdou's World</p2>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    )
}

export default Navbar;
