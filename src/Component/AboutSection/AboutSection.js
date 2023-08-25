import {useDispatch, useSelector} from "react-redux";
import './AboutSection.css';
import {useEffect} from "react";
import axios from "axios";
import {changeAbout} from "../../slices/aboutSlice";

const AboutSection = ({showImg = true}) => {

    // const dispatcher = useDispatch()

    const {text, img, bg} = useSelector(state => state.about);

    // useEffect(() => {
    //     axios.get(process.env.REACT_APP_API_URL+'/api/about').then((res) => {
    //         dispatcher(changeAbout(res.data))
    //     }).catch(error => {
    //         console.error("Error fetching data:", error);
    //     });
    // }, []);

    return (
        <div className={!showImg ? 'about-section' : "container"}
             style={showImg ? {} : {backgroundImage: `url(${bg})`}}>
            {showImg && <img src={img} alt="AboutImg"/>}
            <div className="container">
                <div className={showImg ? 'about-detail-text' : 'about-section-text'}>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}
export default AboutSection;