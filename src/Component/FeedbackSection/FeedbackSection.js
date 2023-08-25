import "./FeedbackSection.css";
import React, { useState } from 'react';


const FeedbackSection = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [title, setTitle] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setSelectedImage(URL.createObjectURL(file));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("type:", selectedImage);
        console.log("Title:", title);
        console.log("Phone Number:", phoneNumber);
        console.log("Message:", message);
    };

    return <div className='container'>
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
                                    style={{ display: 'none' }}
                                />
                            </>
                        )}
                    </div>

                    <div className='feedback-input'>
                        <label>Write title</label>
                        <input
                            type="text"
                            placeholder='Title'
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />

                        <label>Phone Number</label>
                        <input
                            type="number"
                            placeholder='Phone Number'
                            value={phoneNumber}
                            onChange={e => setPhoneNumber(e.target.value)}
                        />

                        <label>Message</label>
                        <textarea
                            cols="30"
                            rows="10"
                            placeholder='Your Text'
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                        ></textarea>

                        <button type="button" onClick={handleSubmit}>Submit Massage</button>
                    </div>
                </div>

            </form>
        </div>
    </div>
}

export default FeedbackSection