import {useDispatch, useSelector} from "react-redux";
import "./ContactSectin.css";
import React, {useState} from "react";
import {MdMarkEmailRead, MdOutlinePhoneInTalk, MdPlace} from "react-icons/md";

const ContactSection = () => {
    const [name, setName] = useState('');
    const [emails, setEmails] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');

    const {address, email, phone} = useSelector(state => state.contact);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name:", name);
        console.log("Phone Number:", number);
        console.log("Email:", email);
        console.log("Message:", message);

        setName('');
        setEmails('');
        setNumber('');
        setMessage('');
    };

    return <div className='container'>
        <div className='contact-section'>

            <div className='contact-info'>
                <h3>Our Contacts</h3>

                <div className=''>
                    <h4><MdPlace/> Address</h4>
                    <h6>{address}</h6>
                </div>

                <div className=''>
                    <h4><MdMarkEmailRead/> Email</h4>
                    <h6>{email}</h6>
                </div>

                <div className=''>
                    <h4><MdOutlinePhoneInTalk/> Phone Number</h4>
                    <h6>{phone}</h6>
                </div>
            </div>

            <div className='contact-form'>
                <h4>Contact Us </h4>
                <form action="">
                    <input
                        type="text"
                        placeholder='Name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder='Email'
                        value={emails}
                        onChange={e => setEmails(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder='Phone'
                        value={number}
                        onChange={e => setNumber(e.target.value)}
                    />

                    <textarea
                        cols="30"
                        rows="10"
                        placeholder='Your Text'
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    ></textarea>

                    <button type="button" onClick={handleSubmit}>Submit Massage</button>
                </form>
            </div>
        </div>
    </div>

}

export default ContactSection

