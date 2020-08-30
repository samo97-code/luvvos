import React, {useCallback, useEffect, useMemo, useState} from 'react';
import './Navbar.css';
import Language from "./Language/Language";
import Menu from "./Menu/Menu";
import {Navbar,Nav} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import {useDispatch} from "react-redux";
import {setLanguage} from "../../store/actions/app/app";


const Header = () => {
    const { t, i18n } = useTranslation();
    const [stikyHeader,setHeaderStiky] = useState(false)
    const menu = [
        {id: 1, text: t('Home')},
        {id: 2, text: t('About')},
        {id: 3, text: t('The Place')},
        {id: 4, text: t('Pages')},
        {id: 5, text: t('News')},
        {id: 6, text: t('Contact')},
    ]

    const dispatch = useDispatch()

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
    })

    const handleScroll = (event)=> {
        if (window.scrollY >= 130){
            setHeaderStiky(true)
        }else{
            setHeaderStiky(false)
        }
    }

    const changeLanguageHandler = (lang)=>{
        i18n.changeLanguage(lang);
        dispatch(setLanguage(localStorage.getItem('i18nextLng')))
    }


    return (
        <div className={`tuamNav ${stikyHeader ? "stiky" : ""}`}>
            <div className="container">
                <div className="row">
                    <Navbar  expand="lg" className="w-100">
                        <Navbar.Brand href="#home">
                            <img src="/images/logo.png" alt="logo" loading='lazy'/>
                            <span className="brand-name">Luvvos</span>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="my-2 my-lg-0">
                                <Menu menu={menu}/>
                                <Language changeLanguageHandler={changeLanguageHandler}/>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                </div>
            </div>
        </div>
    );
};

export default Header;