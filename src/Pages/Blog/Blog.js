import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {changeBlog} from "../../slices/blogSlice";
import BlogCard from "../../Component/BlogSection/BlogCard";
import Heading from "../../Component/Heading/Heading";
import ReactPaginate from "react-paginate";
import {useTranslation} from "react-i18next";
import "./Blog.css"

const Blog = () => {
    const dispatch = useDispatch();
    const {data, perPage, totalItems, currentPage: currentStatePage} = useSelector(state => state.blog);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const itemsPerPage = perPage;
    const [currentPage, setCurrentPage] = useState(currentStatePage);

    const {t, i18n} = useTranslation()
    const title = 'title_' + i18n.language
    const description = 'description_' + i18n.language

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        axios.get(process.env.REACT_APP_API_URL + '/api/blog', {
            params: {page: currentPage}
        })
            .then((res) => {
                dispatch(changeBlog(res.data));
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [dispatch, currentPage]);

    const pageCount = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    return (
        <div className='container blog-list'>
            <Heading type={'h1'}>- {t('Blog')} -</Heading>
            <div className="row">
                {data.map((post) => (
                    <div className={`${ windowWidth <= 768 ? 'col-xl-2' : 'col-xl-3'}`}  key={post.id}>
                        <BlogCard
                            id={post.id}
                            image={`${process.env.REACT_APP_API_URL}/storage/blog/${post.img}`}
                            title={post[title]}
                            description={post[description]}
                            created_at={post.created_at}
                        />
                    </div>
                ))}
            </div>
            <ReactPaginate
                previousLabel={'Prev'}
                nextLabel={'Next'}
                breakLabel={'...'}
                pageCount={pageCount}
                marginPagesDisplayed={1}
                pageRangeDisplayed={itemsPerPage}
                onPageChange={handlePageChange}
                containerClassName={'pagination'}
                activeClassName={'active'}
            />
        </div>
    );
}
export default Blog;