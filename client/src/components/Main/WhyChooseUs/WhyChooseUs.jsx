import React from 'react';
import './WhyChooseUs.css'

const WhyChooseUs = () => {
    return (
        <section className="why-choose-use">
            <div className="container-fluid">
                <div className="row main">
                    <div className="col-lg-5 col-md-12">
                        <div className="image-block">
                            <img src="/images/why-choose-us/why-choose.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12">
                        <div className="content">
                            <h2>Why Choose Us</h2>
                            <p className="header">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            <div className="blocks">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="item row">
                                            <div className="col-md-3">
                                                <span className="why-image">
                                                    <img src="/images/why-choose-us/layers-color.png" alt="" />
                                                </span>
                                            </div>
                                            <div className="col-md-9">
                                                <h6>Creative Space</h6>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="item row">
                                            <div className="col-md-3">
                                                <span className="why-image">
                                                    <img src="/images/why-choose-us/home-security-color.png" alt="" />
                                                </span>
                                            </div>
                                            <div className="col-md-9">
                                                <h6>24/7 Access</h6>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="item row">
                                            <div className="col-md-3">
                                                <span className="why-image">
                                                    <img src="/images/why-choose-us/wifi-color.png" alt="" />
                                                </span>
                                            </div>
                                            <div className="col-md-9">
                                                <h6>High Speed Wifi</h6>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="item row">
                                            <div className="col-md-3">
                                                <span className="why-image">
                                                    <img src="/images/why-choose-us/location-color.png" alt="" />
                                                </span>
                                            </div>
                                            <div className="col-md-9">
                                                <h6>Great Location</h6>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="item row">
                                            <div className="col-md-3">
                                                <span className="why-image">
                                                    <img src="/images/why-choose-us/taxi-color.png" alt="" style={{fontSize:'22px'}} />
                                                </span>
                                            </div>
                                            <div className="col-md-9">
                                                <h6>Car Sharing</h6>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="item row">
                                            <div className="col-md-3">
                                                <span className="why-image">
                                                    <img src="/images/why-choose-us/calendar-color.png" alt="" />
                                                </span>
                                            </div>
                                            <div className="col-md-9">
                                                <h6>Weekly Events</h6>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;