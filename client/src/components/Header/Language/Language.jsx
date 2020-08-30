import React from 'react';
import {Nav} from "react-bootstrap";

const Language = (props) => {
    return (
        <Nav>
            <span className="lang-block" onClick={() => props.changeLanguageHandler('en')}>
                                        <img src="/images/lang/united-states.png" alt=""/>
                                    </span>
            <span className="lang-block" onClick={() => props.changeLanguageHandler('ru')}>
                                        <img src="/images/lang/russia.png" alt=""/>
                                    </span>
            <span className="lang-block" onClick={() => props.changeLanguageHandler('am')}>
                                        <img src="/images/lang/armenia.png" alt=""/>
                                    </span>
        </Nav>
    );
};

export default Language;