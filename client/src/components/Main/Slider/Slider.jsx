import React, {useEffect, useState} from 'react';
import './Slider.css';
import SliderBanner from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Modal} from 'react-bootstrap';
import {useSelector} from "react-redux";
import Button from "../../main_components/Button/Button";

const Slider = () => {
    const sliderBanners = useSelector(state=>state.sliderBanners.sliderBanners)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false)

    const handleShow = (event) => {
        event.preventDefault()
        setShow(true)
    };


    const banners = sliderBanners.map((item,key)=>{
        return(
            <div key={key}>
                <div className="single-slider content-v-center"
                     style={{ backgroundImage: `url(../images/slider/${item.image}`}}>
                    <div className="container">
                        <div className="main-banner-content"><span className="sub-title">The Best Houses in New York</span>
                            <h1>Professional, Creative, Flexible, Scalable House</h1>
                            <div className="btn-box">
                                <Button route='/real-estate' btnName="Order Now" />
                                <a className="optional-btn" href="" onClick={(event)=>handleShow(event)}>Watch Video</a></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 2500,
        margin: 50,
        // autoplay: true,
        // autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        swipeToSlide: true
    };

    return (
        <div className="slider-banner">
            <SliderBanner {...settings}>
                {banners.length ? banners : null}
            </SliderBanner>
            <Modal show={show} onHide={handleClose} size="lg"
                   aria-labelledby="contained-modal-title-vcenter"
                   centered>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <iframe width="100%" height="500" src="https://www.youtube.com/embed/7yMd_dvPh5g" frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Slider;