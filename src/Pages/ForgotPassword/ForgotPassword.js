import Heading from "../../Component/Heading/Heading";
import {useState} from "react";
import axios from "../../helpers/axios";
import {useDispatch} from "react-redux";
import {setMessage} from "../../slices/messageSlice";
import {useNavigate} from "react-router";
import useAuth from "../../hooks/useAuth";
import {useTranslation} from "react-i18next";

const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {user} = useAuth()
    const {t} = useTranslation()

    if (user) {
        navigate('/')
    }

    const handleChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/forgot-password', {
            email
        }).then(() => {
            dispatch(setMessage({
                type: 'success',
                text: 'The message sent to your email'
            }))
            navigate('/')
        })
    }

    return <div className="mt-50">
        <div className="container">
            <Heading>
                - {t("Forgot password")} -
            </Heading>
            <form className='form-box form-medium form-centered m-auto' onSubmit={handleSubmit}>
                <input name='email' type="email" placeholder='Email' className='form-input' onChange={handleChange} value={email}/>
                <div className="actions d-flex justify-center">
                    <button className="btn btn-primary large-btn mt-20" >
                        {t("Submit")}
                    </button>
                </div>
            </form>
        </div>
    </div>
}

export default ForgotPassword