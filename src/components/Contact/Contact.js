import React from "react";
import "./Contact.css"
export const Contact = () => {
    return(
        <section className="contactPage">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
            <form className="contactForm">
                <input type="text" className="name" placeholder="Your Name"/>
                <input type="email" className="email" placeholder="Your Email"/>
                <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
                <button type="submit" value="Send" className="submitBtn">Submit</button>
            </form>
        </section>
    )
}