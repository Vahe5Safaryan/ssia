import "./GallerySection.css";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {setGalleryItems} from "../../slices/gallerySlice";
import GalleryCard from "../../Pages/Gallery/GalleryCard";

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
};

const responsiveSettings = [
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
        },
    },
];
const GallerySection = () => {

    const dispatch = useDispatch();
    const {data} = useSelector(state => state.gallery);

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + '/api/gallery')
            .then((res) => {
                dispatch(setGalleryItems(res.data));
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, [dispatch]);

    const lastFivePosts = data.slice(Math.max(data.length - 8, 0));

    return (
        <div className='container'>
            <div className='gallery-section'>
                <Slider {...sliderSettings} responsive={responsiveSettings}>
                    {lastFivePosts.map((post) => (
                        <GalleryCard
                            key={post.id}
                            {...post}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default GallerySection;
