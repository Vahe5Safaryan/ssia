import axios from "axios";
import store from "../store/store";
import {setMessage} from "../slices/messageSlice";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

axiosInstance.interceptors.request.use(
    (config) => {

        config.headers.Authorization = `Bearer ${localStorage.getItem("access_token")}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response) {
            const errorMessage = error.response.data.message || "An error occurred.";
            store.dispatch(setMessage({
                text: Array.isArray(errorMessage) ? errorMessage.join(' ') : errorMessage,
                type: 'error'
            }));
        } else {
            store.dispatch(setMessage({
                text: 'Network error.',
                type: 'error'
            }));
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;