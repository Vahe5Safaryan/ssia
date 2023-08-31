import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import axios from "axios";
import { changeApplication } from "../../slices/applicationSlice";
import ApplicationCard  from "./ApplicationCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useTranslation} from "react-i18next";

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
};
const responsiveSettings = [
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
        },
    },
];
const ApplicationSection = () => {
    const dispatch = useDispatch();
    const { data } = useSelector(state => state.application);

    const { i18n } = useTranslation()
    const title = 'title_' + i18n.language
    const description = 'description_' + i18n.language

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL+'/api/application')
            .then((res) => {
                dispatch(changeApplication(res.data));
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, [dispatch, i18n.language ]);

    return (
        <div className='container'>
            <Slider {...sliderSettings} responsive={responsiveSettings}>
                {data.map((post) => (
                    <ApplicationCard
                        id={post.id}
                        key={post.id}
                        image={`${process.env.REACT_APP_API_URL}/storage/application/${post.img}`}
                        title={post[title]}
                        description={post[description]}
                        created_at={post.created_at}
                        showImg={true}
                    />
                ))}
            </Slider>
        </div>
    );
}

export default ApplicationSection;
