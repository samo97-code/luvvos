import React from 'react';
import "./Pricing.css"
import Button from "../../main_components/Button/Button";

const Pricing = () => {
    return (
        <section className="pricing-area">
            <div className="container">
                <div className="row">
                    <div className="title col-md-12">
                        <h2 className="text-center">Our Pricing Packages</h2>
                        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="pricing-block col-md-12">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="item">
                                    <div className="heading">
                                        <div className="img-block"><img src="/images/services/service_2.jpg" alt=""/></div>
                                        <h3>Apartment</h3>
                                    </div>
                                    <div className="price">
                                        <span>$</span> <span>170</span>
                                    </div>
                                    <div className="button">
                                        <Button route='/real-estate' btnName="Order Now" />
                                    </div>
                                    <ul className="list">
                                        <li className="show"><img src="/images/check.png" alt="check" style={{marginRight:'10px'}}/>24/7 Access</li>
                                        <li className="show"><img src="/images/check.png" alt="check" style={{marginRight:'10px'}}/>Cleaning Service</li>
                                        <li className="show"><img src="/images/check.png" alt="check" style={{marginRight:'10px'}}/>High Speed Wifi/ Internet</li>
                                        <li className="show"><img src="/images/check.png" alt="check" style={{marginRight:'10px'}}/>Parking</li>
                                        <li className="show"><img src="/images/check.png" alt="check" style={{marginRight:'10px'}}/>Balcony</li>
                                        <li className="show"><img src="/images/check.png" alt="check" style={{marginRight:'10px'}}/>Access to Kitchen Lounge</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="item">
                                    <div className="heading">
                                        <div className="img-block"><img src="/images/services/service_1.jpg" alt=""/></div>
                                        <h3>House</h3>
                                    </div>
                                    <div className="price">
                                        <span>$</span> <span>220</span>
                                    </div>
                                    <div className="button">
                                        <Button route='/real-estate' btnName="Order Now" />
                                    </div>
                                    <ul className="list">
                                        <li className="show"><img src="/images/check.png" alt="check" style={{marginRight:'10px'}}/>24/7 Access</li>
                                        <li className="show"><img src="/images/check.png" alt="check" style={{marginRight:'10px'}}/>Garden</li>
                                        <li className="show"><img src="/images/check.png" alt="check" style={{marginRight:'10px'}}/>High Speed Wifi/ Internet</li>
                                        <li className="show"><img src="/images/check.png" alt="check" style={{marginRight:'10px'}}/>Garage</li>
                                        <li className="show"><img src="/images/check.png" alt="check" style={{marginRight:'10px'}}/>Utilities Included</li>
                                        <li className="show"><img src="/images/check.png" alt="check" style={{marginRight:'10px'}}/>Access to Kitchen Lounge</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="item">
                                    <div className="heading">
                                        <div className="img-block"><img src="/images/services/service_3.jpg" alt=""/></div>
                                        <h3>Villa</h3>
                                    </div>
                                    <div className="price">
                                        <span>$</span> <span>300</span>
                                    </div>
                                    <div className="button">
                                        <Button route='/real-estate' btnName="Order Now" />
                                    </div>
                                    <ul className="list">
                                        <li className="show"><img src="/images/check.png" alt="check" style={{marginRight:'10px'}}/>24/7 Access</li>
                                        <li className="show"><img src="/images/check.png" alt="check" style={{marginRight:'10px'}}/>Tennis Court</li>
                                        <li className="show"><img src="/images/check.png" alt="check" style={{marginRight:'10px'}}/>Cleaning Service</li>
                                        <li className="show"><img src="/images/check.png" alt="check" style={{marginRight:'10px'}}/>High Speed Wifi/ Internet</li>
                                        <li className="show"><img src="/images/check.png" alt="check" style={{marginRight:'10px'}}/>Parking</li>
                                        <li className="show"><img src="/images/check.png" alt="check" style={{marginRight:'10px'}}/>Swimming Poll</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Pricing;