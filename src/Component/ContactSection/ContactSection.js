import {useDispatch, useSelector} from "react-redux";
import "./ContactSection.css";
import React, {useState} from "react";
import {MdMarkEmailRead, MdOutlinePhoneInTalk, MdPlace} from "react-icons/md";
import axios from "../../helpers/axios";
import {setMessage as setMessageState} from "../../slices/messageSlice";

const ContactSection = () => {
    const [name, setName] = useState('');
    const [emails, setEmails] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');
    const [productName, setProductName] = useState('');
    const dispatch = useDispatch()
    const {address, email, phone} = useSelector(state => state.contact);
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/contact-message', {
            name,
            phone: number,
            product_name: productName,
            email,
            message
        }).then(() => {
            dispatch(setMessageState({
                type: 'success',
                text: 'Message sent successfully'
            }))
        })
        setName('');
        setEmails('');
        setNumber('');
        setMessage('');
        setProductName('');
    };

    return <div className='contact-section-wrapper'>
        <div className='container'>
            <div className='contact-section'>

                <div className='contact-info'>
                    <h3>Our Contacts</h3>

                    <div className='contact-info-box'>
                        <h4><MdPlace/> Address</h4>
                        <h6>{address}</h6>
                    </div>

                    <div className='contact-info-box'>
                        <h4><MdMarkEmailRead/> Email</h4>
                        <h6>{email}</h6>
                    </div>

                    <div className='contact-info-box'>
                        <h4><MdOutlinePhoneInTalk/> Phone Number</h4>
                        <h6>{phone}</h6>
                    </div>
                </div>

                <div className='contact-form'>
                    <h3>Contact Us </h3>
                    <form action="">
                        <input
                            type="text"
                            name='name'
                            placeholder='Name'
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <input
                            type="email"
                            name='email'
                            placeholder='Email'
                            value={emails}
                            onChange={e => setEmails(e.target.value)}
                        />
                        <input
                            type="text"
                            name='phone'
                            placeholder='Phone'
                            value={number}
                            onChange={e => setNumber(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder='Product Name'
                            name='product_name'
                            value={productName}
                            onChange={e => setProductName(e.target.value)}
                        />

                        <textarea
                            cols="30"
                            rows="10"
                            placeholder='Your Text'
                            value={message}
                            name='message'
                            onChange={e => setMessage(e.target.value)}
                        ></textarea>

                        <button className='button-xl' type="button" onClick={handleSubmit}>Submit Massage</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
}

export default ContactSection

