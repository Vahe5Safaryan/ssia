// import {useDispatch, useSelector} from "react-redux";
// import React, {useEffect} from "react";
// import axios from "axios";
// import Heading from "../../Component/Heading/Heading";
// import GalleryCard from "./GalleryCard";
// import {setGalleryItems} from "../../slices/gallerySlice";
//
// const Gallery = () => {
//     const dispatch = useDispatch();
//     const {data} = useSelector(state => state.gallery);
//
//     useEffect(() => {
//         axios.get(process.env.REACT_APP_API_URL + '/api/gallery')
//             .then((res) => {
//                 dispatch(setGalleryItems(res.data));
//             })
//             .catch(error => {
//                 console.error("Error fetching data:", error);
//             });
//     }, [dispatch]);
//
//     return (
//         <div className='container'>
//             <Heading type={'h1'}>- Gallery -</Heading>
//             <div className="row">
//                 {data.map((post) => (
//                     <div key={post.id} className='col-xl-4'>
//                         <GalleryCard
//                             {...post}
//                         />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
// export default Gallery;



import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Heading from '../../Component/Heading/Heading';
import GalleryCard from './GalleryCard';
import { setGalleryItems } from '../../slices/gallerySlice';
import ReactPaginate from 'react-paginate';
import './Gallery.css'; // Создайте файл стилей для пагинации

const Gallery = () => {
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.gallery);
    const itemsPerPage = 12;

    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        axios
            .get(process.env.REACT_APP_API_URL + '/api/gallery')
            .then((res) => {
                dispatch(setGalleryItems(res.data));
            })
            .catch((error) => {
                console.error(error);
            });
    }, [dispatch]);

    const offset = currentPage * itemsPerPage;
    const currentItems = data.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(data.length / itemsPerPage);

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    return (
        <div className='container'>
            <Heading type={'h1'}>- Галерея -</Heading>
            <div className='row'>
                {currentItems.map((post) => (
                    <div key={post.id} className='col-xl-4'>
                        <GalleryCard {...post} />
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
};

export default Gallery;