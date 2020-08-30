import React from 'react';
import './PartnerSlider.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderServices from "react-slick";

const PartnerSlider = () => {

    var settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 1200,
        autoplay: true,
        draggable: true,
        margin: 250,
        slidesToShow: 6,
        slidesToScroll: 1,
        adaptiveHeight: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 430,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },

        ]
    };

    // const partnerSlider

    return (
        <section className="partner-slider">
            <div className="container">
                <div className="row">
                    <h2 className="text-center w-100 mb-4">Our Partners</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    <Slider {...settings}>
                       <div className="image-block">
                           <img src="/images/partner-slider/partner1.png" alt=""/>
                       </div>
                        <div className="image-block">
                            <img src="/images/partner-slider/partner2.png" alt=""/>
                        </div>
                        <div className="image-block">
                            <img src="/images/partner-slider/partner3.png" alt=""/>
                        </div>
                        <div className="image-block">
                            <img src="/images/partner-slider/partner4.png" alt=""/>
                        </div>
                        <div className="image-block">
                            <img src="/images/partner-slider/partner1.png" alt=""/>
                        </div>
                        <div className="image-block">
                            <img src="/images/partner-slider/partner2.png" alt=""/>
                        </div>
                        <div className="image-block">
                            <img src="/images/partner-slider/partner3.png" alt=""/>
                        </div>
                        <div className="image-block">
                            <img src="/images/partner-slider/partner4.png" alt=""/>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default PartnerSlider;