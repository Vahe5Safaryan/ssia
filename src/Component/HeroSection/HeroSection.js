import {useSelector} from "react-redux";
import './HeroSection.css'

const HeroSection = () => {
    const {text, video} = useSelector(state => state.video);

    return <div className='video-box'>
        <div className='video-section'>
            <video controls={false} autoPlay={true} muted={true} loop={true}>
                <source src={video} type="video/mp4" />
            </video>
        </div>
        <div className='hero-section'>
            <div className='container'>
                <div className="hero-box">
                    <h1>S S I A</h1>
                    <h3 className='hero-text'>{text}</h3>
                </div>
            </div>
        </div>
    </div>

}

export default HeroSection;