import "./NotFound.css"
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";


const NotFound = () => {
    const {t} = useTranslation()

    return <div className='container'>
        <div className='notFound'>
            <h2>This is a Not Found Page :(  </h2>
            <div className='d-flex justify-end'>
                <NavLink to={'/'} className={'btn btn-primary mt-20'}>{t('Home')}</NavLink>
            </div>
        </div>
    </div>;
}

export default NotFound;
