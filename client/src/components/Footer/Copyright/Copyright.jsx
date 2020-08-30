import React from 'react';
import './Copyright.css'

const Copyright = () => {
    return (
        <div className="copyright row">
            <div className="about col-lg-4">
                <div className="img-block">
                    <img src="/images/logo.png" alt="logo"/>
                    <span className="brand-name">Luvvos</span>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et 
                    dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra lacus vel facilisis.
                </p>
            </div>
            <div className="links col-lg-4">
                <h4>Quick Links</h4>
                <div className="links-item">
                    <ul className="col-md-6">
                        <li><a href="">HOME</a></li>
                        <li><a href="">ABOUT</a></li>
                        <li><a href="">NEWS</a></li>
                    </ul>
                    <ul className="col-md-6">
                        <li><a href="">CONTACT</a></li>
                        <li><a href="">THE PLACES</a></li>
                        <li><a href="">lOGIN</a></li>
                    </ul>
                </div>
            </div>
            <div className="contacts col-lg-4">
                <h4>Contact Info</h4>
                <ul className="footer-contact-info">
                    <li><span>Location:</span> 98 William St, Washington, USA</li>
                    <li><span>Email:</span> <a href="#">info@gmail.com</a></li>
                    <li><span>Phone:</span> <a href="#">+(789) 412 789</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Copyright;