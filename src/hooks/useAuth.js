import axios from "../helpers/axios";
import {useDispatch, useSelector} from "react-redux";
import {setAuthUser} from "../slices/authSlice";
import {useEffect} from "react";
import {setMessage} from "../slices/messageSlice";

let requestSent = false
const useAuth = () => {
    const {user} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const token = localStorage.getItem('access_token')

    useEffect(() => {
        if (!user && token && !requestSent) {
            requestSent = true
            axios.get('/api/me').then(response => {
                dispatch(setAuthUser(response.data))
                requestSent = false
            })
        }
    }, [dispatch, user, token]);

    const login = async (email, password) => {
        try {
            const response = await axios.post("/api/login", { email, password });
            if (response.status === 200) {
                dispatch(setAuthUser(response.data.user))
                dispatch(setMessage({
                    text: 'You are logged in successfully',
                    type: 'success'
                }))
                localStorage.setItem('access_token', response.data.token)
            }
        } catch (error) {

        }
    };

    const logout = () => {
        dispatch(setAuthUser(null))
        localStorage.removeItem('access_token')
        dispatch(setMessage({
            text: 'You are logged out successfully',
            type: 'success'
        }))
    };

    return {
        token,
        user,
        login,
        logout,
    };
};

export default useAuth