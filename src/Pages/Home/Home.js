import Heading from "../../Component/Heading/Heading"
import AboutSection from "../../Component/AboutSection/AboutSection";
import BlogSection from "../../Component/BlogSection/BlogSection";
import HeroSection from "../../Component/HeroSection/HeroSection";
import ServiceSection from "../../Component/ServiceSection/ServiceSection";
import GallerySection from "../../Component/GallerySection/GallerySection";
import FeedbackSection from "../../Component/FeedbackSection/FeedbackSection";
import PartnerSection from "../../Component/PartnerSection/PartnerSection";
import ContactSectin from "../../Component/ContactSectin/ContactSectin";
import './Home.css';


const Home = () => {
    return <>
        <div className=''>
            <HeroSection/>
        </div>

        <div>
            <Heading type={'h2'}>
                About Us
            </Heading>
            <AboutSection showImg={false}/>
        </div>

        <div>
            <Heading>
                What We Do
            </Heading>
            <ServiceSection/>
        </div>

        <div>
            <Heading>
                Blog
            </Heading>
            <BlogSection asSlider={true}/>
        </div>

        <div>
            <Heading>
                GALLERY
            </Heading>
            <GallerySection/>
        </div>

        <div>
            <Heading>
                Suggestions and Complaints
            </Heading>
            <FeedbackSection/>
        </div>

        <div>
            <Heading>
                Contact
            </Heading>
            <ContactSectin/>
        </div>

        <div>
            <Heading>
                Our Partners
            </Heading>
            <PartnerSection/>
        </div>
    </>
}
export default Home;