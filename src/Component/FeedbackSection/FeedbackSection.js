import "./FeedbackSection.css";
import React, {useEffect, useState} from 'react';
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
        setSelectedImage(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('phone', phoneNumber);
        formData.append('description', message);
        formData.append('img', selectedImage);

        try {
            await axios.post('/api/feedback-message', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            dispatch(setMessageState({
                type: 'success',
                text: 'Message sent successfully'
            }));

            setTitle('');
            setPhoneNumber('');
            setMessage('');
            setSelectedImage(null);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div className='feedback-section-wrapper'>
            <div className='container'>
                <div className='feedback-section'>
                    <form className='feedback-form'>
                        <div className='form-box d-flex'>
                            <div className='feedback-upload'>
                                {selectedImage ? (
                                    <img src={URL.createObjectURL(selectedImage)} alt="" />
                                ) : (
                                    <>
                                        <label htmlFor="image-input">
                                            <img src="/feedbackImg/feedback.jpg" alt="" />
                                        </label>
                                        <input
                                            type="file"
                                            id="image-input"
                                            accept="image/*"
                                            onChange={handleImageUpload}
                                            style={{ display: 'none' }}
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
    );
};

export default FeedbackSection;