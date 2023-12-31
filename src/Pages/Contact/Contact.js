import ContactSection from "../../Component/ContactSection/ContactSection";
import Heading from "../../Component/Heading/Heading";
import {useTranslation} from "react-i18next";

const Contact = () => {
   const {t} = useTranslation()

    return (
        <div className='mt-50'>
            <Heading type='h1'> - {t('Contact')} - </Heading>
            <ContactSection />
        </div>
    )
}
export default Contact;