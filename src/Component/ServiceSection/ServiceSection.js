import {useDispatch, useSelector} from "react-redux";
import "./ServiceSection.css"
import {useEffect, useState} from "react";
import axios from "../../helpers/axios";
import {setServices} from "../../slices/serviceSlice";
import {useTranslation} from "react-i18next";


const ServiceSection = () => {
    const services = useSelector(state => state.service.services);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const dispatch = useDispatch()
    const {i18n} = useTranslation()

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        axios.get('/api/services').then((res) => {
            dispatch(setServices(res.data))
        }).catch(() => {
            console.log('Network Error')
        })

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='container'>
            <div className="service-box row justify-center">
                {services.map((service) => (
                    <div key={service.id}
                        className={`${ windowWidth <= 768 ? 'col-xl-2' : 'col-xl-4'} ${service.class}`}>
                        <div className='service-cart'>
                            <div className='service-box-img'>
                                <img src={process.env.REACT_APP_API_URL+ '/storage/services/' + service.img} alt=""/>
                            </div>
                            <p>{service['title_' + i18n.language]}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceSection;