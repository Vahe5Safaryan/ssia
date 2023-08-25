import BlogSection from "../../Component/BlogSection/BlogSection";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import axios from "axios";
import {changeBlog} from "../../slices/blogSlice";
import BlogCard from "../../Component/BlogSection/BlogCard";
import Heading from "../../Component/Heading/Heading";

const Blog = () => {
    const dispatch = useDispatch();
    const {data} = useSelector(state => state.blog);

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + '/api/blog')
            .then((res) => {
                dispatch(changeBlog(res.data));
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, [dispatch]);

    return (
        <div className='container'>
            <Heading type={'h1'}>- Blog -</Heading>
            <div className="row">
                {data.map((post) => (
                    <div className="col-xl-3"
                         key={post.id}
                    >
                        <BlogCard
                            image={`${process.env.REACT_APP_API_URL}/storage/blog/${post.img}`}
                            title={post.title_hy}
                            description={post.description_hy}
                            created_at={post.created_at}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Blog;