import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {changeApplication} from "../../slices/applicationSlice";
import Heading from "../../Component/Heading/Heading";
import ApplicationCard from "../../Component/ApplicationSection/ApplicationCard";
import ReactPaginate from "react-paginate";
import {useTranslation} from "react-i18next";
import './Application.css'


const Application = () => {
    const dispatch = useDispatch();
    const {data, perPage, totalItems, currentPage: currentStatePage} = useSelector(state => state.application);

    const itemsPerPage = perPage;
    const [currentPage, setCurrentPage] = useState(currentStatePage)

    const {t, i18n} = useTranslation()
    const title = 'title_' + i18n.language
    const description = 'description_' + i18n.language

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [showSection, setShowSection] = useState(false)


    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + '/api/get-status')
            .then((res) => {
                setShowSection(res.data)
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, [])

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        if (showSection){
            axios.get(process.env.REACT_APP_API_URL + '/api/application', {
                params: {
                    page: currentPage
                }
            }).then((res) => {
                    dispatch(changeApplication(res.data));
                })
                .catch(error => {
                    console.error("Error fetching data:", error);
                });
        }


        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [dispatch, currentPage]);

    const pageCount = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected + 1);
    };

    return (
        <div className='container application-list'>
            <Heading type={'h1'}>- {t('Application')} -</Heading>
            <div className='row'>
                {data.map((post) => (
                    <div className={`${ windowWidth <= 768 ? 'col-xl-2' : 'col-xl-4'}`} key={post.id}>
                        <ApplicationCard
                            id={post.id}
                            image={`${process.env.REACT_APP_API_URL}/storage/application/${post.img}`}
                            title={post[title]}
                            description={post[description]}
                            created_at={post.created_at}
                            showImg={true}
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
                pageRangeDisplayed={3}
                onPageChange={handlePageChange}
                containerClassName={'pagination'}
                activeClassName={'active'}
            />
        </div>
    );

}
export default Application;