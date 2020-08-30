import React from 'react';
import './Footer.css'
import Newsletter from "./Newsletter/Newsletter";
import Copyright from "./Copyright/Copyright";

const Footer = () => {
    return (
        <section className="footer">
            <div className="container">
                <Newsletter />
                <div className="line"></div>
                <Copyright />
                <div className="line"></div>
                <ul className='socials'>
                    <li><a href=""><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href=""><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href=""><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                    <li><a href=""><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                </ul>
                <p className="copyright-text">
                    <i className="fa fa-copyright"></i> &nbsp;
                    2020 Luvvos. All Rights Reserved.
                </p>
            </div>
        </section>
    );
};

export default Footer;