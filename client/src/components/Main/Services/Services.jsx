import React from 'react';
import './Services.css'
import {useSelector} from "react-redux";


const Services = () => {
    const services = useSelector(state => state.service.services)
    const lang = useSelector(state => state.app.lang)

    const serviceList = services.map((item,key)=>{
        return (
            <div className="col-lg-4 col-md-6 col-sm-6" key={key}>
                <div className="single-box"><img
                    src={`/images/services/${item.image}`} alt="image"/>
                    <div className="content"><h3><a href="#">{item[lang].title}</a></h3></div>
                    <div className="hover-content"><h3><a href="#">{item[lang].title}</a></h3><p>{item[lang].text}</p><a
                        className="read-more-btn" href="#">Learn More</a></div>
                </div>
            </div>
        );
    })

    return (
        <section className="services-boxes-area">
            <div className="container">
                <div className="row">
                    {services.length ? serviceList : null}
                </div>
            </div>
        </section>
    );
};

export default Services;