import AboutSection from "../../Component/AboutSection/AboutSection";
import Heading from "../../Component/Heading/Heading";
import "./About.css"
import {useTranslation} from "react-i18next";

const About = () => {
    const {t} = useTranslation()

    return (
        <div className='about-page'>
            <Heading>
                {t('About')}
            </Heading>
            <AboutSection  showImg={true} />
        </div>
    )
}
export default About;