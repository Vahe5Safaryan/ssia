import {useSelector} from "react-redux";
import './HeroSection.css'
import {NavLink} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Heading from "../Heading/Heading";

const HeroSection = () => {
    const {text, video} = useSelector(state => state.video);
    const {user} = useAuth()
    return <div className='video-box'>
        <div className='video-section'>
            <video controls={false} autoPlay={true} muted={true} loop={true}>
                <source src={video} type="video/mp4"/>
            </video>
        </div>
        <div className='hero-section'>
            <div className='container'>
                <div className="w-100 d-flex space-betweem">\
                    <div className="hero-box">
                        <h1>S S I A</h1>
                        <div className='hero-bg-white' />
                        <h3 className='hero-text'>{text}</h3>
                    </div>
                </div>
            </div>
        </div>
        {!user && <div className='login-btn'>
            <NavLink to={'/login/'}>Login </NavLink>
        </div>}
    </div>

}

export default HeroSection;