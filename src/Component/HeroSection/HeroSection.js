import {useDispatch, useSelector} from "react-redux";
import './HeroSection.css'
import {NavLink} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import {useEffect} from "react";
import {changeVideo} from "../../slices/heroSlice";
import axios from "../../helpers/axios";
import {useTranslation} from "react-i18next";

const HeroSection = () => {
    const dispatch = useDispatch();
    const hero = useSelector(state => state.video);
    const {i18n} = useTranslation()
    const {user} = useAuth()
    const {t} = useTranslation()

    useEffect(() => {
        axios.get('/api/slider').then((res) => {
            dispatch(changeVideo(res.data.slider_items))
        }).catch(() => {
            console.log('Network Error')
        })

    }, [dispatch]);

    return <div className='video-box'>
        <div className='video-section'>
            {hero.video_url && <video controls={false} autoPlay={true} muted={true} loop={true}>
                <source src={process.env.REACT_APP_API_URL + '/storage/slider/' + hero.video_url} type="video/mp4"/>
            </video>}
        </div>
        <div className='hero-section'>
            <div className='container'>
                <div className="w-100 d-flex space-betweem">
                    <div className="hero-box">
                        <h1>S S I A</h1>
                        <div className='hero-bg-white' />
                        <h3 className='hero-text'>{hero['description_' + i18n.language]}</h3>
                    </div>
                </div>
            </div>
        </div>
        {!user && <div className='login-btn'>
            <NavLink to={'/login/'}> {t("Login")} </NavLink>
        </div>}
    </div>

}

export default HeroSection;