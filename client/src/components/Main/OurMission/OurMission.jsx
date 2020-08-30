import React from 'react';
import "./OurMission.css"
import UnderLine from "../../main_components/UnderLine/UnderLine";
import Button from "../../main_components/Button/Button";

const OurMission = () => {
    return (
        <section className="our-mission-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <div className="content">
                            <h2>Our History</h2>
                            <UnderLine />
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                                </p>
                            </div>
                            <Button route='/about' btnName="Learn More" />

                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12">
                        <div className="image-block">
                            <img src="/images/history.jpg" alt="Our Mission" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurMission;