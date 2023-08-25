import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import axios from "axios";
import Heading from "../../Component/Heading/Heading";
import GalleryCard from "./GalleryCard";
import {setGalleryItems} from "../../slices/gallerySlice";

const Gallery = () => {
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

    return (
        <div className='container'>
            <Heading type={'h1'}>- Gallery -</Heading>
            <div className="row">
                {data.map((post) => (
                    <div key={post.id} className='col-xl-4'>
                        <GalleryCard
                            {...post}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Gallery;