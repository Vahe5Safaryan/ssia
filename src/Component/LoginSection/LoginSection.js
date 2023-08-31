import "./LoginSection.css"
import React, {useState} from "react";
import {useNavigate} from "react-router";
import axios from "../../helpers/axios";
import useAuth from "../../hooks/useAuth";
import Heading from "../Heading/Heading";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

const LoginSection = () => {
    const [activeTab, setActiveTab] = useState("company");
    const [selectedImage, setSelectedImage] = useState(null);
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const navigate = useNavigate();
    const {t} = useTranslation()
    const {user, login} = useAuth()

    const [formIndividualData, setFormIndividualData] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        password: '',
        password_confirmation: '',
        type: 1,
        hvhh: '',
        address: '',
        logo: selectedImage,
    });

    if (user) {
        navigate('/account')
        return null
    }

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setSelectedImage(URL.createObjectURL(file));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/register', formIndividualData);

            if (response.status === 200) {
                e.target.reset()

                localStorage.setItem('access_token', response.data.token)
                navigate('/account')

                console.log('Form data sent successfully');
            }
        } catch (error) {
            console.error('Error sending form data', error);
        }
    };

    const onTabChange = (type) => {
        setFormIndividualData(state => ({...state, type: (type === 'individual' ? 0 : 1)}))
        setActiveTab(type)
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormIndividualData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const onLoginSubmit = (e) => {
        e.preventDefault()

        login(loginEmail, loginPassword)
    }

    return <div className='container mt-120'>
        <div className='login-or-registration d-flex'>

            <div className='login-section'>
                <Heading classNames={['text-left', 'p-0']}> {t('Login Section')} </Heading>

                <form onSubmit={onLoginSubmit} className='form-box mt-20'>
                    <input className='form-input mt-20'
                           type="email"
                           placeholder='Email'
                           name='email'
                           value={loginEmail}
                           onChange={(e) => setLoginEmail(e.target.value)}
                    />
                    <input className='form-input mt-20'
                           type="password"
                           name='password'
                           placeholder='Password'
                           value={loginPassword}
                           onChange={(e) => setLoginPassword(e.target.value)}
                    />

                    <div className='my-20'>
                        <NavLink to="/forgot-password"> {t('Forgot password')} </NavLink>
                    </div>
                    <div>
                        <button className="btn large-btn btn-primary" type='submit'> {t('Login')}</button>
                    </div>
                </form>
            </div>

            <div className='reg-section'>
                <Heading classNames={['text-left', 'p-0']}>  {t('Registration Section')} </Heading>

                <div className="tab-buttons mt-20">
                    <button className={"btn large-btn btn-primary" + (activeTab === "company" ? " active" : "")}
                        onClick={() => onTabChange('company')}> {t('Company')}
                    </button>

                    <button className={"btn large-btn btn-primary" + (activeTab === "individual" ? " active" : "")}
                        onClick={() => onTabChange("individual")}> {t('Individual')}
                    </button>
                </div>

                {activeTab === "company" && (
                    <div className="for-company">
                        <Heading
                            classNames={['text-left', 'p-0', 'mt-20']}
                            type={'h3'}> {t('Register as a company')}
                        </Heading>
                        <form onSubmit={handleSubmit} className='form-box mt-20'>
                            <input className='form-input mt-20'
                                   type="text"
                                   name='name'
                                   value={formIndividualData.name}
                                   onChange={handleInputChange}
                                   placeholder='Company Name'
                            />
                            <input className='form-input mt-20'
                                   type="text"
                                   name='hvhh'
                                   value={formIndividualData.hvhh}
                                   onChange={handleInputChange}
                                   placeholder="ՀՎՀՀ"
                            />
                            <input className='form-input mt-20'
                                   type="text"
                                   name='address'
                                   value={formIndividualData.address}
                                   onChange={handleInputChange}
                                   placeholder="Գրանցման հասցե"
                            />
                            <input className='form-input mt-20'
                                   type="email"
                                   name='email'
                                   placeholder="Email"
                                   value={formIndividualData.email}
                                   onChange={handleInputChange}
                            />
                            <input className='form-input mt-20'
                                   type="text"
                                   name='phone'
                                   placeholder='Phone'
                                   value={formIndividualData.phone}
                                   onChange={handleInputChange}
                            />
                            <input className='form-input mt-20'
                                   type="password"
                                   name='password'
                                   placeholder='Password'
                                   value={formIndividualData.password}
                                   onChange={handleInputChange}
                            />
                            <input className='form-input mt-20'
                                   type="password"
                                   name='password_confirmation'
                                   placeholder='Confirm Password'
                                   minLength={8}
                                   value={formIndividualData.password_confirmation}
                                   onChange={handleInputChange}
                            />
                            <div className="image-container mt-20">
                                {selectedImage ? (
                                    <img src={selectedImage} alt=""/>
                                ) : (
                                    <>
                                        <label htmlFor="image-input">
                                            <img src="/feedbackImg/feedback.jpg" alt=""/>
                                        </label>
                                        <input className='form-input mt-20'
                                               type="file"
                                               id="image-input"
                                               accept="image/*"
                                               onChange={handleImageUpload}
                                               style={{display: 'none'}}
                                        />
                                    </>
                                )}
                            </div>
                            <div>
                                <button className="btn large-btn btn-primary mt-20"> {t('Registration')} </button>
                            </div>
                        </form>
                    </div>
                )}

                {activeTab === "individual" && (
                    <div className="individual">
                        <Heading
                            classNames={['text-left', 'p-0', 'mt-20']}
                            type={'h3'} > {t('Register as a individual')}
                        </Heading>
                        <form onSubmit={(e) => handleSubmit(e)} className='form-box mt-20'>
                            <input className='form-input mt-20'
                                   type="text"
                                   placeholder='Name'
                                   name='name'
                                   value={formIndividualData.name}
                                   onChange={handleInputChange}
                            />
                            <input className='form-input mt-20'
                                   type="text"
                                   name='surname'
                                   placeholder="Surname"
                                   value={formIndividualData.surname}
                                   onChange={handleInputChange}
                            />
                            <input className='form-input mt-20'
                                   type="email"
                                   name='email'
                                   placeholder="Email"
                                   value={formIndividualData.email}
                                   onChange={handleInputChange}
                            />
                            <input className='form-input mt-20'
                                   type="text"
                                   name='phone'
                                   placeholder='Phone'
                                   value={formIndividualData.phone}
                                   onChange={handleInputChange}
                            />
                            <input className='form-input mt-20'
                                   type="password"
                                   name='password'
                                   placeholder='Password'
                                   value={formIndividualData.password}
                                   onChange={handleInputChange}
                            />
                            <input className='form-input mt-20'
                                   type="password"
                                   name='password_confirmation'
                                   placeholder='Confirm Password'
                                   minLength={8}
                                   value={formIndividualData.password_confirmation}
                                   onChange={handleInputChange}
                            />
                            <div>
                                <button className="btn large-btn btn-primary mt-20"> {t('Registration')} </button>
                            </div>
                        </form>
                    </div>
                )}

            </div>
        </div>
    </div>
}
export default LoginSection