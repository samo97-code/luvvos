import React from 'react';
import './Newletter.css'
import Button from "../../main_components/Button/Button";

const Newsletter = () => {

    const subscribeHandler = ()=>{
        console.log('subscribe')
    }


    return (
            <div className="row">
                <div className="col-md-5 subscribe">
                    <h3>Join Our Newsletter</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
                <div className="col-md-7">
                    <div className="subscribe-form">
                        <form className="newsletter-form">
                            <input type="email" className="input-newsletter" placeholder="Enter your email" name="EMAIL" />
                            <Button buttonHandler={subscribeHandler} btnName="Subscribe" />
                        </form>
                    </div>
                </div>
            </div>
    );
};

export default Newsletter;