import {useDispatch, useSelector} from "react-redux";
import './AboutSection.css';
import {useEffect} from "react";
import axios from "axios";
import {changeAbout} from "../../slices/aboutSlice";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

const AboutSection = ({showImg = true}) => {
    const dispatcher = useDispatch()
    const {i18n, t} = useTranslation()
    const {text, img, bg_img} = useSelector(state => state.about);

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL+'/api/about').then((res) => {
            dispatcher(changeAbout(res.data))
        }).catch(error => {
            console.error("Error fetching data:", error);
        });
    }, [dispatcher, i18n.language]);

    return (
        <div className={!showImg ? 'about-section' : "container about-section-detail"}
             style={showImg ? {} : {backgroundImage: bg_img && `url(${process.env.REACT_APP_API_URL+ '/storage/about/' + bg_img})`}}>
            {!showImg && <div className="about-section-decor"/>}
            {showImg && <img src={process.env.REACT_APP_API_URL+ '/storage/about/' + img} alt="AboutImg"/>}
            <div className="container">
                {showImg ?
                    <div className='about-detail-text'>
                        {t(text)}
                    </div> :
                    <div className={'about-section-text'}>
                        <p>{text.slice(0, 400)}</p>
                        <div className='d-flex justify-end'>
                            <NavLink to={'/about'} className={'btn btn-primary mt-20'}>{t('Learn more')}</NavLink>
                        </div>
                    </div>}
            </div>
        </div>
    )
}
export default AboutSection;