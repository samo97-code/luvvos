import React from 'react';
import {Link} from "react-router-dom";
import './Button.css'

const Button = ({buttonHandler,route,btnName}) => {

    const clickHandler = (event)=>{
        event.preventDefault()

        buttonHandler()
    }

    return (
        <>
            {
                route
                ?  <Link to={route} className="default-btn">{btnName}<span></span></Link>
                :  <a className="default-btn" href="" onClick={(event)=>clickHandler(event)}>{btnName}<span></span></a>
            }
        </>
    );
};

export default Button;