import React from 'react';
import "./Team.css"

const Team = () => {
    return (
        <section className="team">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 team-title">
                        <h2>Professional Experts</h2>
                        <p>We are proud of our great team.He is one of the most motivated
                            and enthusiastic people we have, and is always ready and willing to help out where needed.
                        </p>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="team-member">
                            <div className="img-block"><img src="/images/team/team-lg-3.jpg" alt="team1" /></div>
                            <ul>
                                <li className="hover-icon">
                                    <a href="#"><i className="fa fa-facebook"
                                                                    aria-hidden="true"></i></a>
                                </li>
                                <li className="hover-icon">
                                    <a href="#"><i className="fa fa-twitter"
                                                                    aria-hidden="true"></i></a>
                                </li>
                                <li className="hover-icon">
                                    <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                </li>
                                <li className="hover-icon">
                                    <a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div className="team-info">
                            <h5 className="name">Walter Mark</h5>
                            <p>Realtor</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="team-member">
                            <div className="img-block"><img src="/images/team/team-lg-2.jpg" alt="team1" /></div>
                            <ul>
                                <li className="hover-icon">
                                    <a href=""><i className="fa fa-facebook"
                                                                    aria-hidden="true"></i></a>
                                </li>
                                <li className="hover-icon">
                                    <a href=""><i className="fa fa-twitter"
                                                                    aria-hidden="true"></i></a>
                                </li>
                                <li className="hover-icon">
                                    <a href=""><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                </li>
                                <li className="hover-icon">
                                    <a href=""><i className="fa fa-pinterest" aria-hidden="true"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div className="team-info">
                            <h5 className="name">Laura Sandel</h5>
                            <p>Commercial Broker</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="team-member">
                            <div className="img-block"><img src="/images/team/team-lg-5.jpg" alt="team1" /></div>
                            <ul>
                                <li className="hover-icon">
                                    <a href=""><i className="fa fa-facebook"
                                                                    aria-hidden="true"></i></a>
                                </li>
                                <li className="hover-icon">
                                    <a href=""><i className="fa fa-twitter"
                                                                    aria-hidden="true"></i></a>
                                </li>
                                <li className="hover-icon">
                                    <a href=""><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                </li>
                                <li className="hover-icon">
                                    <a href=""><i className="fa fa-pinterest" aria-hidden="true"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div className="team-info">
                            <h5 className="name">ANTONIO CONTE</h5>
                            <p>Senior Agent</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="team-member">
                            <div className="img-block"><img src="/images/team/team-lg-3.jpg" alt="team1" /></div>
                            <ul>
                                <li className="hover-icon">
                                    <a href="#"><i className="fa fa-facebook"
                                                                    aria-hidden="true"></i></a>
                                </li>
                                <li className="hover-icon">
                                    <a href="#"><i className="fa fa-twitter"
                                                                    aria-hidden="true"></i></a>
                                </li>
                                <li className="hover-icon">
                                    <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                </li>
                                <li className="hover-icon">
                                    <a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div className="team-info">
                            <h5 className="name">Walter Mark</h5>
                            <p>Sales Manager</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;