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
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
};
const responsiveSettings = [
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
        },
    },
];

const PartnerSection = () => {
    const { partner } = useSelector(state => state.partner);

    return (
        <div className='container'>
            <div className='partner-section'>
                <Slider {...sliderSettings} responsive={responsiveSettings}>
                    {partner.map((item) => (
                        <div className='partner-box' key={item.id}>
                            <img src={item.img} alt="partnerImg"/>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default PartnerSection




