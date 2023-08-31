import {useNavigate} from "react-router";
import useAuth from "../../hooks/useAuth";
import Heading from "../../Component/Heading/Heading";
import {useEffect, useState} from "react";
import './Account.css'
import axios from "../../helpers/axios";
import {useDispatch} from "react-redux";
import {setMessage} from "../../slices/messageSlice";
import {useTranslation} from "react-i18next";

const Account = () => {
    const navigate = useNavigate();
    const {user, token, logout} = useAuth()
    const [account, setAccount] = useState(user)
    const dispatch = useDispatch()
    const {t} = useTranslation()

    useEffect(() => {
        setAccount(user)
    }, [user]);

    if (!token) {
        navigate('/')
        return null
    }

    const handleLogout = () => {
        logout()
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target

        setAccount(account => ({
            ...account,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(account);
        axios.post('/user/' + account.id, {
            ...account
        }).then(() => {
            dispatch(setMessage({
                type: 'success',
                text: 'Profile updated successfully'
            }))
        })
    };
    return <div className='container mt-50'>
        <Heading>- {t('Account Page')} -</Heading>
        <div className="d-flex personal-page-section">
            <div className="bg-white p-20">
                {account?.type === 1 &&
                    <div className='account-image'>
                        <img
                            src={account?.logo ? (process.env.REACT_APP_API_URL + '/storage/users/' + account.logo) : '/feedbackImg/feedback.jpg'}
                            alt={account?.name}/>
                    </div>
                }
                <div className="d-flex justify-end">
                    <a href='/' className="btn btn-primary large-btn mt-20" onClick={handleLogout}>
                        {t('Logout')}
                    </a>
                </div>
            </div>
            <form className="form-box" onSubmit={handleSubmit}>
                <input type="text"
                       placeholder='Name'
                       className="form-input" name='name'
                       value={account?.name}
                       onChange={handleInputChange}
                />

                <input type="text"
                       placeholder='Last Name'
                       className="form-input mt-20"
                       name='surname'
                       value={account?.surname}
                       onChange={handleInputChange}
                />
                <input type="email"
                       placeholder='Email'
                       className="form-input mt-20"
                       name='email'
                       value={account?.email}
                       onChange={handleInputChange}
                />
                <input type="text"
                       placeholder='Phone'
                       className="form-input mt-20"
                       name='phone'
                       value={account?.phone}
                       onChange={handleInputChange}
                />
                <input type="text"
                       placeholder='HVHH'
                       className="form-input mt-20"
                       name='hvhh'
                       value={account?.hvhh}
                       onChange={handleInputChange}
                />
                <input type="text"
                       placeholder='Address'
                       className="form-input mt-20"
                       name='address'
                       value={account?.address}
                       onChange={handleInputChange}
                />
                <div className="divider mt-20"/>
                <input type="password"
                       placeholder='Enter new password'
                       className="form-input mt-20"
                       name='password'
                       onChange={handleInputChange}
                />
                <input type="password"
                       placeholder='Confirm password'
                       className="form-input mt-20"
                       name='password_confirmation'
                       onChange={handleInputChange}
                />
                <div className="actions mt-20 d-flex justify-end">
                    <button className="btn btn-primary large-btn">
                        {t('Save Changes')}
                    </button>
                </div>
            </form>
        </div>
    </div>
}

export default Account