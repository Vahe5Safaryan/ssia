import {useDispatch, useSelector} from "react-redux";
import "./ServiceSection.css"


const ServiceSection = () => {
    const services = useSelector(state => state.service.services);

    return <div className='container'>
        <div className="service-box row justify-center">
            {services.map((service) => <div key={service.id} className={service.class + ' col-xl-4'}>
                <div className='service-cart'>
                    <div className='service-box-img'>
                        <img src={service.img} alt=""/>
                    </div>
                    <p>{service.text}</p>
                </div>

            </div>)}
        </div>
    </div>
}

export default ServiceSection;