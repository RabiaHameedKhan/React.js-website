import React from 'react';
import './Footer.css'; 
import { FaFacebook, FaTwitter, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-headings">
                <h3>UI Design |</h3>
                <h3>Windows/Mac OS Apps </h3>
                <h3>Android/iOS Apps </h3>
                <h3>Cloud Solutions </h3>
                <h3>Customer Support </h3>
            </div>
            <hr className="footer-line" />
            <div className="footer-sections">
                <div className="footer-left">
                    <h4>© 2024 RatherApp</h4>
                </div>
                <div className="footer-middle">
                    <FaFacebook className="footer-icon" />
                    <FaTwitter className="footer-icon" />
                    <FaEnvelope className="footer-icon" />
                    <FaInstagram className="footer-icon" />
                </div>
                <div className="footer-right">
                    <p>© All rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
