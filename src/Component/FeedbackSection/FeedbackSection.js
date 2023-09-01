import "./FeedbackSection.css";
import React, {useState} from 'react';
import axios from "../../helpers/axios";
import {setMessage as setMessageState} from "../../slices/messageSlice";
import {useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";


const FeedbackSection = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [title, setTitle] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const dispatch = useDispatch()
    const {t} = useTranslation()
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setSelectedImage(URL.createObjectURL(file));
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('/api/feedback-message', {
            title,
            phone: phoneNumber,
            description: message,
            img: selectedImage
        }).then(() => {
            dispatch(setMessageState({
                type: 'success',
                text: 'Message sent successfully'
            }))
        }).catch(() => {

        })
        setTitle('');
        setPhoneNumber('');
        setMessage('');

    };

    return <div className='feedback-section-wrapper'>
        <div className='container'>
            <div className='feedback-section'>
                <form action="" className='feedback-form'>
                    <div className='form-box d-flex'>

                        <div className='feedback-upload'>
                            {selectedImage ? (
                                <img src={selectedImage} alt=""/>
                            ) : (
                                <>
                                    <label htmlFor="image-input">
                                        <img src="/feedbackImg/feedback.jpg" alt=""/>
                                    </label>
                                    <input
                                        type="file"
                                        id="image-input"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        style={{display: 'none'}}
                                    />
                                </>
                            )}
                        </div>

                        <div className='feedback-input'>
                            <label> {t('Write title')}</label>
                            <input
                                type="text"
                                placeholder='Title'
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                            />

                            <label> {t('Phone Number')} </label>
                            <input
                                type="number"
                                placeholder='Phone Number'
                                value={phoneNumber}
                                onChange={e => setPhoneNumber(e.target.value)}
                            />

                            <label> {t('Message')} </label>
                            <textarea
                                cols="30"
                                rows="10"
                                placeholder='Your Text'
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                            ></textarea>

                            <button className='button-xl' type="button" onClick={handleSubmit}> {t('Submit message')} </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
}

export default FeedbackSection