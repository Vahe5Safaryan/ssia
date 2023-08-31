import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import axios from "axios";
import { changeBlog } from "../../slices/blogSlice";
import BlogCard from "./BlogCard";
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

const BlogSection = () => {
    const dispatch = useDispatch();
    const { data } = useSelector(state => state.blog);

    const { i18n } = useTranslation()
    const title = 'title_' + i18n.language
    const description = 'description_' + i18n.language

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL+'/api/blog')
            .then((res) => {
                dispatch(changeBlog(res.data));
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, [dispatch]);

    const lastFivePosts = data.slice(Math.max(data.length - 8, 0));

    return (
        <div className='container'>
            <Slider {...sliderSettings} responsive={responsiveSettings}>
                {lastFivePosts.map((post) => (
                    <BlogCard
                        key={post.id}
                        id={post.id}
                        image={`${process.env.REACT_APP_API_URL}/storage/blog/${post.img}`}
                        title={post[title]}
                        description={post[description]}
                        created_at={post.created_at}
                        showImg={false}
                    />
                ))}
            </Slider>
        </div>
    );
}

export default BlogSection;
