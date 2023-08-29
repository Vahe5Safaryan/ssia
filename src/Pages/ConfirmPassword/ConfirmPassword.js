import Heading from "../../Component/Heading/Heading";
import {useEffect, useState} from "react";
import axios from "../../helpers/axios";
import {useDispatch} from "react-redux";
import {setMessage} from "../../slices/messageSlice";
import {useNavigate} from "react-router";
import useAuth from "../../hooks/useAuth";
import {useSearchParams} from "react-router-dom";

const ConfirmPassword = () => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {user} = useAuth()
    const params = useSearchParams()
    const confirmationToken = params[0].get('token')
    console.log(confirmationToken);

    useEffect(() => {
        if (user || !confirmationToken) {
            navigate('/')
        }
    }, [user, confirmationToken]);
    
    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleChangePasswordConfirmation = (e) => {
        setConfirmPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/confirm-password', {
            password,
            password_confirmation: confirmPassword,
            confirmationToken
        }).then(() => {
            dispatch(setMessage({
                type: 'success',
                text: 'The password changed successfully'
            }))
            navigate('/login')
        })
    }

    return <div className="mt-50">
        <div className="container">
            <Heading>
                Forgot password
            </Heading>
            <form className='form-box form-medium form-centered m-auto' onSubmit={handleSubmit}>
                <input name='password' type="password" placeholder='Password' className='form-input' onChange={handleChangePassword} value={password}/>
                <input name='confirm_password' type="password" placeholder='Confirm Password' className='form-input mt-20' onChange={handleChangePasswordConfirmation} value={confirmPassword}/>
                <div className="actions d-flex justify-center">
                    <button className="btn btn-primary large-btn mt-20" >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
}

export default ConfirmPassword