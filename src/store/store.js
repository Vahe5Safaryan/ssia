import { configureStore } from '@reduxjs/toolkit'
import aboutReducer from "../slices/aboutSlice";
import galleryReducer from "../slices/gallerySlice";
import blogReducer from "../slices/blogSlice";
import heroSlice from "../slices/heroSlice";
import serviceReducer from "../slices/serviceSlice";
import partnerReducer from "../slices/partnerSlice";


export default configureStore({
    reducer: {
        about: aboutReducer,
        gallery: galleryReducer,
        blog: blogReducer,
        video: heroSlice,
        service: serviceReducer,
        partner: partnerReducer,
    }
})

