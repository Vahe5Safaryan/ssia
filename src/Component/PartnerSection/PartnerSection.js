import './PartnerSection.css';
import {useDispatch, useSelector} from "react-redux";
// import React, {useEffect} from "react";
// import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
};

const PartnerSection = () => {
    const { partner } = useSelector(state => state.partner);

    return (
        <div className='container'>
            <Slider {...sliderSettings}>
                {partner.map((item) => (
                    <div className='partner-box' key={item.id}>
                        <img src={item.img} alt="partnerImg"/>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default PartnerSection





// useEffect(() => {
//     axios.get(process.env.REACT_APP_API_URL + '/api/partner')
//         .then((res) => {
//             dispatch(setPartnerItems(res.data));
//         })
//         .catch(error => {
//             console.error("Error fetching data:", error);
//         });
// }, [dispatch]);
