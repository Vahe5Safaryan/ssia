import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Heading from '../../Component/Heading/Heading';
import GalleryCard from './GalleryCard';
import { setGalleryItems } from '../../slices/gallerySlice';
import ReactPaginate from 'react-paginate';
import './Gallery.css';
import {useTranslation} from "react-i18next";

const Gallery = () => {
    const dispatch = useDispatch();
    const {data, perPage, totalItems, currentPage: currentStatePage} = useSelector((state) => state.gallery);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const itemsPerPage = perPage;
    const [currentPage, setCurrentPage] = useState(currentStatePage)
    const {t} = useTranslation()

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        axios
            .get(process.env.REACT_APP_API_URL + '/api/gallery', {
                params: {
                    page: currentPage
                }
            })
            .then((res) => {
                dispatch(setGalleryItems(res.data));
            })
            .catch((error) => {
                console.error(error);
            });


        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [dispatch, currentPage]);

    const pageCount = Math.ceil(totalItems / itemsPerPage);
    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected + 1);
    };

    //  modal
    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setSelectedImage(null);
        setIsModalOpen(false);
    };


    return (
        <div className='container gallery-list'>
            <Heading type={'h1'}>- {t('Gallery')} -</Heading>
            <div className='row'>
                {data.map((post) => (
                    <div className={`${ windowWidth <= 768 ? 'col-xl-2' : 'col-xl-4'}`} key={post.id}>
                        <GalleryCard {...post} openModal={openModal} />
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

            {isModalOpen && selectedImage && (
                <div className="gallery-modal" onClick={closeModal}>
                    <div className="gallery-modal-content">
                        <img
                            src={`${process.env.REACT_APP_API_URL}/storage/gallery/${selectedImage.img}`}
                            alt=""
                            className="gallery-modal-image"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <button className="gallery-modal-close" onClick={closeModal}>
                            X
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;