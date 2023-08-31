import Heading from "../../Component/Heading/Heading"
import AboutSection from "../../Component/AboutSection/AboutSection";
import BlogSection from "../../Component/BlogSection/BlogSection";
import HeroSection from "../../Component/HeroSection/HeroSection";
import ServiceSection from "../../Component/ServiceSection/ServiceSection";
import GallerySection from "../../Component/GallerySection/GallerySection";
import FeedbackSection from "../../Component/FeedbackSection/FeedbackSection";
import PartnerSection from "../../Component/PartnerSection/PartnerSection";
import ContactSectin from "../../Component/ContactSection/ContactSection";
import ApplicationSection from "../../Component/ApplicationSection/ApplicationSection";
import './Home.css';
import useAuth from "../../hooks/useAuth";
import {useTranslation} from "react-i18next";


const Home = () => {
    const {t} = useTranslation();

    const {user} = useAuth()
    return <>
        <div className=''>
            <HeroSection/>
        </div>

        <div>
            <Heading type={'h2'}>
                - {t('About')} -
            </Heading>
            <AboutSection showImg={false}/>
        </div>

        <div>
            <Heading>
                - {t('What We Do')} -
            </Heading>
            <ServiceSection/>
        </div>

        <div>
            <Heading>
                - {t('Blog')} -
            </Heading>
            <BlogSection asSlider={true}/>
        </div>

        <div>
            <Heading>
                - {t('Gallery')} -
            </Heading>
            <GallerySection/>
        </div>

        <div>
            <Heading>
                - {t('Suggestions and Complaints')} -
            </Heading>
            <FeedbackSection/>
        </div>

        <div>
            <Heading>
                - {t('Contact')} -
            </Heading>
            <ContactSectin/>
        </div>

        <div>
            <Heading>
                - {t('Our Partners')} -
            </Heading>
            <PartnerSection/>
        </div>

        {user && <div>
            <Heading>
                - {t('Application')} -
            </Heading>
            <ApplicationSection asSlider={true}/>
        </div>}
    </>
}
export default Home;