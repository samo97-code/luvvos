import React from 'react';
import './PlaceArea.css'

const PlaceArea = () => {
    return (
        <section className="place-area">
            <div className="container-fluid">
                <div className="row main">
                    <div className="col-lg-5 col-md-12">
                        <div className="image-block">
                            <img src="/images/building.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12">
                        <div className="content">
                            <h2>Building & Area</h2>
                            <p className="header">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            <div className="blocks">
                                <div className="row">
                                    <div className="col-md-4 col-sm-6">
                                           <div className="item">
                                               <div>
                                                <span className="why-image">
                                                    <img src="/images/why-choose-us/layers-color.png" alt="" />
                                                </span>
                                               </div>
                                               <div>
                                                   <h6>Parking Area</h6>
                                                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                               </div>
                                           </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="item">
                                            <div>
                                                <span className="why-image">
                                                    <img src="/images/why-choose-us/layers-color.png" alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <h6>Supermarket</h6>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                       <div className="item">
                                           <div>
                                                <span className="why-image">
                                                    <img src="/images/why-choose-us/layers-color.png" alt="" />
                                                </span>
                                           </div>
                                           <div>
                                               <h6>School</h6>
                                               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                           </div>
                                       </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="item">
                                            <div>
                                                <span className="why-image">
                                                    <img src="/images/why-choose-us/layers-color.png" alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <h6>Parks</h6>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="item">
                                            <div>
                                                <span className="why-image">
                                                    <img src="/images/why-choose-us/layers-color.png" alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <h6>Restaurants</h6>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="item">
                                            <div>
                                                <span className="why-image">
                                                    <img src="/images/why-choose-us/layers-color.png" alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <h6>Hospital</h6>
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

export default PlaceArea;