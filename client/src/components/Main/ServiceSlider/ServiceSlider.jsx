import React from 'react';
import './ServiceSlider.css'
import SliderServices from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useSelector} from "react-redux";


const ServiceSlider = () => {

    const serviceSliders = useSelector(state => state.serviceSliders.serviceSliders)
    const lang = useSelector(state => state.app.lang)

    var settings = {
        dots: true,
        infinite: true,
        speed: 1200,
        margin: 250,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };

    const serviceSlider = serviceSliders.map((item, key) => {
        return (
            <div className="single-services-box" key={key}>
                <div className="icon">
                    <div className="icon-image">
                        <img src={`/images/service-slider/${item.image_uncolor}`} alt="image"/>
                        <img src={`/images/service-slider/${item.image_color}`} alt="image"/>
                    </div>
                    <div className="icon-bg">
                        <img src='/images/service-slider/icon-bg-uncolor.png' alt="image"/>
                        <img src='/images/service-slider/icon-bg-color.png' alt="image"/>
                    </div>
                </div>
                <h3><a href="#">{item[lang].title}</a></h3>
                <p>{item[lang].text}</p>
                <a className="read-more-btn" href="#">Learn More</a>
                <div className="box-shape">
                    <img src='/images/service-slider/box-shape-uncolor.png' alt="image"/>
                    <img src='/images/service-slider/box-shape-color.png' alt="image"/>
                </div>
            </div>
        );
    })

    return (
        <section className="services-area">
            <div className="container">
                <div className="row">
                    <SliderServices {...settings}>
                        {serviceSlider ? serviceSlider : null}
                    </SliderServices>
                </div>
            </div>
        </section>
    );
};

export default ServiceSlider;