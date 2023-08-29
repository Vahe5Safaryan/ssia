import { configureStore } from '@reduxjs/toolkit'
import aboutReducer from "../slices/aboutSlice";
import galleryReducer from "../slices/gallerySlice";
import blogReducer from "../slices/blogSlice";
import heroSlice from "../slices/heroSlice";
import serviceReducer from "../slices/serviceSlice";
import partnerReducer from "../slices/partnerSlice";
import contactReducer from "../slices/contactSlice";
import applicationReducer from "../slices/applicationSlice";
import authReducer from "../slices/authSlice";
import messagesReducer from "../slices/messageSlice";

export default configureStore({
    reducer: {
        about: aboutReducer,
        gallery: galleryReducer,
        blog: blogReducer,
        video: heroSlice,
        service: serviceReducer,
        partner: partnerReducer,
        contact: contactReducer,
        application: applicationReducer,
        auth: authReducer,
        messages: messagesReducer,
    }
})

