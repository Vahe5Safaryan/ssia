import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import axios from "axios";
import { changeBlog } from "../../slices/blogSlice";
import BlogCard from "./BlogCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
};

const BlogSection = () => {
    const dispatch = useDispatch();
    const { data } = useSelector(state => state.blog);

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL+'/api/blog')
            .then((res) => {
                dispatch(changeBlog(res.data));
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, [dispatch]);

    return (
        <div className='container'>
            <Slider {...sliderSettings}>
                {data.map((post) => (
                    <BlogCard
                        key={post.id}
                        image={`${process.env.REACT_APP_API_URL}/storage/blog/${post.img}`}
                        title={post.title_hy}
                        description={post.description_hy}
                        created_at={post.created_at}
                        showImg={false}
                    />
                ))}
            </Slider>

        </div>
    );
}

export default BlogSection;
