import {NavLink, Outlet} from 'react-router-dom';
import './Layout.css';
import Logo from "../Logo/Logo";
import {AiFillFacebook, AiFillInstagram, AiFillYoutube, AiOutlineMenu} from "react-icons/ai";
import React, {useState} from "react";


const Layout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.getElementById('root').classList.toggle('modal-open', !isMenuOpen);
    };

    return (
        <>
            <header>
                <div className="container">
                    <div className="d-flex justify-between align-center">
                        <div className='logo'>
                            <Logo/>
                        </div>
                        <div className='nav'>
                            {/*<NavLink to="/">Home</NavLink>*/}
                            {/*<NavLink to="/about">About</NavLink>*/}
                            {/*<NavLink to="/blog">Blog</NavLink>*/}
                            {/*<NavLink to="/gallery">Gallery</NavLink>*/}
                            {/*<NavLink to="/contact">Contact</NavLink>*/}
                            {/*<NavLink to="/application">Application</NavLink>*/}
                            {/*<NavLink to="*">Not Found</NavLink>*/}
                            <div className='locals d-flex'>
                                <img src="/LocalsImg/am.png" alt="Locals"/>
                                <img src="/LocalsImg/ru.png" alt="Locals"/>
                                <img src="/LocalsImg/en.png" alt="Locals"/>
                            </div>
                            <div className="burger-button" onClick={toggleMenu}>
                                <AiOutlineMenu/>
                            </div>
                        </div>

                    </div>
                </div>
            </header>

            <main>
                <Outlet/>
            </main>

            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3">
                            <Logo/>
                            <div className='footer-under-text'>
                                <p>can be used by any application. Pass in the following parameters using an HTTPS
                                    GET and we’ll return a JSON string array of paragraphs.</p>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className='site-map'>
                                <h4>Site Map</h4>
                                <NavLink to="/about">About</NavLink>
                                <div className='site-map-links'>
                                    <NavLink to="/blog">Blog</NavLink>
                                    <NavLink to="/gallery">Gallery</NavLink>
                                    <NavLink to="/contact">Contact</NavLink>
                                    <NavLink to="/application">Application</NavLink>
                                    <NavLink to="*">Not Found</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <h4>Social Links</h4>
                            <div className='social-links'>
                                <AiFillFacebook/>
                                <AiFillInstagram/>
                                <AiFillYoutube/>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {isMenuOpen && (
                <div className="modal">
                    <div className="modal-content d-flex">
                        <div className="close-button" onClick={toggleMenu}>
                            <span>&times;</span>
                        </div>
                        <div className='modal-menu d-flex'>
                            <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
                            <NavLink to="/about" onClick={toggleMenu}>About</NavLink>
                            <NavLink to="/blog" onClick={toggleMenu}>Blog</NavLink>
                            <NavLink to="/gallery" onClick={toggleMenu}>Gallery</NavLink>
                            <NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink>
                            <NavLink to="/application" onClick={toggleMenu}>Application</NavLink>
                            {/*<NavLink to="*" onClick={toggleMenu}>Not Found</NavLink>*/}
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}

export {Layout}