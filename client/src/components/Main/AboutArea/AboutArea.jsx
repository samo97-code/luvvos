import React from 'react';
import './AboutArea.css'

const AboutArea = () => {
    return (
        <section className="about-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col col-md-6 col-xs-12">
                        <div className="about-title">
                            <h2>We offer comfortable houses, apartments for your sweet life</h2>
                        </div>
                    </div>
                    <div className="col col-md-6 col-xs-12">
                        <div className="about-text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                            </p>
                            <a href="">More About Us 	&#x27F6;</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutArea;