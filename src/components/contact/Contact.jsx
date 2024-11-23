import React from 'react';
import './Contact.css'; // Create a separate CSS file for styling

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-headings">
                <h1 className="heading-main">Get in Touch</h1>
                <h2 className="heading-secondary">If you have any questions, just fill in the contact form, and we will answer you shortly.</h2>
            </div>
            <div className="contact-inputs">
                <input type="text" placeholder="Name" className="input-field" />
                <input type="email" placeholder="Email" className="input-field" />
                <input type="tel" placeholder="Phone" className="input-field" />
            </div>
            <textarea
                placeholder="Your Message"
                className="message-box"
                rows="5"
            ></textarea>
            <button className="send-button">Send Message</button>
        </div>
    );
};

export default Contact;
