import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {changeApplication} from "../../slices/applicationSlice";
import Heading from "../../Component/Heading/Heading";
import ApplicationCard from "../../Component/ApplicationSection/ApplicationCard";
import './Application.css'
import ReactPaginate from "react-paginate";


const Application = () => {
    const dispatch = useDispatch();
    const {data, perPage, totalItems, currentPage: currentStatePage} = useSelector(state => state.application);

    const itemsPerPage = perPage;
    const [currentPage, setCurrentPage] = useState(currentStatePage)

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + '/api/application', {
            params: {
                page: currentPage
            }
        })
            .then((res) => {
                dispatch(changeApplication(res.data));
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, [dispatch, currentPage]);

    const pageCount = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    return (
        <div className='container application-list'>
            <Heading type={'h1'}>- Application -</Heading>
            <div className='row'>
                {data.map((post) => (
                    <div className='col-xl-4' key={post.id}>
                        <ApplicationCard
                            id={post.id}
                            image={`${process.env.REACT_APP_API_URL}/storage/application/${post.img}`}
                            title={post.title_hy}
                            description={post.description_hy}
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