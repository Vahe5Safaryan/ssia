import AboutSection from "../../Component/AboutSection/AboutSection";
import Heading from "../../Component/Heading/Heading";
import "./About.css"

const About = () => {
    return (
        <div className='about-page'>
            <Heading>
                About us
            </Heading>
            <AboutSection  showImg={true} />
        </div>
    )
}
export default About;