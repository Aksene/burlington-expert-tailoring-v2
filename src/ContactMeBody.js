import React from 'react'
import './ContactMeBody.css'
import ContactMe from './images/ContactMe.jpg'
import { Link } from 'react-router-dom';
import { Button } from './Button'


function ContactMeBody() {
    return (
        <div className="contactMe__body-container">
           <div className="contactMe__body-grid">
               <div className="contactMe__body-logo">
                   <img src={ContactMe} alt="BET Logo" className="contactMe__body-logo" />
               </div>
               <div className="contactMe__body-subgrid">
                    <div class="column1">
                        <form className="container1" action="https://submit-form.com/WxAHMHxW">
                            <label for="name">Your Name: </label>
                            <input type="text" id="name" name="name" placeholder="Name" required="required" />
                            <label for="email">E-mail: </label>                
                            <input type="text" id="email" name="email" placeholder="@" required="required" />
                            <label for="message">Message: </label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Message"
                                required="required"
                            ></textarea>
                            <Button 
                                buttonSize='btn--medium' 
                                buttonColor='brown'
                                className="contactMe__submit-button"
                            >

                            Send</Button>
                        </form>
                    </div>
                    <div className="contactMe__body-info">
                        <div className="container2">
                            <div className="container2-grid-address"></div>
                                <label for="address">Address: {"\n"}</label>
                                <text for="address">264 Cambridge St, Burlington, MA 01803</text>
                            <div className="container2-grid-number"></div>    
                                <label for="number">My Number: </label>
                                <text for="number">(781) 272-7900</text>
                            <div className="container2-grid-email"></div>
                                <label for="email">My E-mail: {"\n"}</label>                
                                <text for="email">morsenetex@yahoo.com</text>
                            <div className="container2-grid-facebook"></div>
                                <label for="facebook">Like me on facebook:{"\n"}</label>                
                                <Link to="//www.facebook.com/Burlington-Expert-Tailoring-225017557535881/" target='_blank'>
                                    <label for="facebookLink">Facebook </label>
                                </Link>
                            </div>
                    </div>
               </div>
               <div className="contactMe__body-map">  
               <iframe className="contactMe__body-google-maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2940.9153911441545!2d-71.20556878416342!3d42.51460597917686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e39fe6082d3c2f%3A0x9afd88829ea7b288!2s264%20Cambridge%20St%2C%20Burlington%2C%20MA%2001803!5e0!3m2!1sen!2sus!4v1633217026121!5m2!1sen!2sus" width="950" height="400" allowfullscreen="" loading="lazy">                   
                </iframe>
              
               </div>
               <div className="contactMe__body-footer">
                   <p1>I am looking forward to hearing from you</p1>
               </div>
           </div> 
        </div>
    )
}

export default ContactMeBody
