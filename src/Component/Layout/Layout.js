import {NavLink, Outlet} from 'react-router-dom';
import './Layout.css';
import Logo from "../Logo/Logo";
import {AiFillFacebook, AiFillInstagram, AiOutlineMenu} from "react-icons/ai";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {removeMessage} from "../../slices/messageSlice";
import useAuth from "../../hooks/useAuth";
import { MdOutlineAccountCircle } from "react-icons/md";
import {useTranslation} from "react-i18next";
import axios from "axios";
import {changeAbout} from "../../slices/aboutSlice";

const Layout = () => {
    const {text} = useSelector(state => state.about);
    const {messages} = useSelector(state => state.messages)
    const dispatch = useDispatch()
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {i18n, t} = useTranslation()
    const {user} = useAuth()
    const {showSection} = useSelector(state => state.application)


    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL+'/api/about').then((res) => {
            dispatch(changeAbout(res.data))
        }).catch(error => {
            console.error("Error fetching data:", error);
        });
    }, [dispatch, i18n.language]);

    useEffect(() => {
        messages.forEach((message) => {
            setTimeout(() => {
                console.log(message)
                dispatch(removeMessage(message))
            }, 7000)
        })
    }, [dispatch, messages]);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.getElementById('root').classList.toggle('modal-open', !isMenuOpen);
    };

    const changeLanguage = (e) => {
        i18n.changeLanguage(e);
        localStorage.setItem('language', e);
    }

    return (
        <>
            <header>
                <div className="container top-menu">
                    <div className="d-flex justify-between align-center">
                        <div className='logo'>
                            <Logo/>
                        </div>
                        <div className='nav'>
                            {user && <div className='account-actions'>
                                <NavLink to={'/account'}>
                                    <MdOutlineAccountCircle className='account-button'/>
                                </NavLink>
                            </div>}
                            <div className='locals d-flex'>
                                <img src="/LocalsImg/am.png" alt="Locals" className={i18n.language === 'hy' ? 'selected' : ''} onClick={() => changeLanguage('hy') }/>
                                <img src="/LocalsImg/ru.png" alt="Locals" className={i18n.language === 'ru' ? 'selected' : ''} onClick={() => changeLanguage('ru')}/>
                                <img src="/LocalsImg/en.png" alt="Locals" className={i18n.language === 'en' ? 'selected' : ''} onClick={() => changeLanguage('en')}/>
                            </div>
                            <div className="burger-button" onClick={toggleMenu}>
                                <AiOutlineMenu/>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="alert-container">
                {messages.map(message => <div
                    key={message.text}
                    className={'alert-message ' + message.type}
                >
                    {message.text}
                </div>)}
            </div>

            <main className='wrapper'>
                <Outlet/>
            </main>

            <footer className='mt-70'>
                <div className="container">
                    <div className="footer-section">
                        <div className=" footer-logo">
                            <Logo/>
                            <div className='footer-under-text'>
                                <NavLink to="/about"> {text.slice(0, 120)}... </NavLink>
                            </div>
                        </div>
                        <div className="">
                            <div className='site-map'>
                                <h4> {t('Site Map')}</h4>
                                <div className='site-map-links'>
                                    <NavLink to="/" onClick={toggleMenu}>{t('Home')}</NavLink>
                                    <NavLink to="/about" onClick={toggleMenu}>{t('About')}</NavLink>
                                    <NavLink to="/blog" onClick={toggleMenu}>{t('Blog')}</NavLink>
                                    <NavLink to="/gallery" onClick={toggleMenu}>{t('Gallery')}</NavLink>
                                    <NavLink to="/contact" onClick={toggleMenu}>{t('Contact')}</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="footer-social-box">
                            <h4> {t('Social Links')}</h4>
                            <div className='social-links d-flex'>
                                <a href="https://www.facebook.com/SSIAsociation.am" target='blanc'><AiFillFacebook/></a>
                                <a href="https://www.instagram.com/ssia.am/" target='blanc'><AiFillInstagram/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Modal Menu*/}
            {isMenuOpen && (
                <div className="modal" onClick={toggleMenu}>
                    <div className="modal-content d-flex">
                        <div className="close-button" onClick={(e) => {
                            e.nativeEvent.stopImmediatePropagation()
                            toggleMenu()
                        }}>
                            <span>&times;</span>
                        </div>
                        <div className='modal-menu d-flex'>
                            <NavLink to="/" onClick={toggleMenu}>{t('Home')}</NavLink>
                            <NavLink to="/about" onClick={toggleMenu}>{t('About')}</NavLink>
                            <NavLink to="/blog" onClick={toggleMenu}>{t('Blog')}</NavLink>
                            <NavLink to="/gallery" onClick={toggleMenu}>{t('Gallery')}</NavLink>
                            <NavLink to="/contact" onClick={toggleMenu}>{t('Contact')}</NavLink>
                            {user && showSection && <NavLink to="/application" onClick={toggleMenu}>{t('Application')}</NavLink>}
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}

export {Layout}