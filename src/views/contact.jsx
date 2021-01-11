import React, { useState } from 'react';
import "../styles/contact.sass";
import EnvelopeImage from "../assets/icons/envelope.png";
import axios from 'axios';

function Contact() {
    const [email, setEmail] = useState('');
    const [data, setData] = useState({
        email: email,
    })
    function sendEmailData(e) {
        e.preventDefault();
        console.log("email data sent");
        axios.post('api/email', data);
        setData({
            email: email
        })
    }
    return (
        <>
            <div className="contact-section py-4 container-fluid primary-blue-bg" id="contact">
                <div className="contact-envelope d-none d-md-block">
                    <img src={EnvelopeImage} alt="Envelope" />
                </div>
                <div className="contact-mobile-envelope d-block d-md-none">
                    <img src={EnvelopeImage} alt="Envelope" />
                </div>
                <h4 className="text-white font-600 p-2">HAVE A PROJECT FOR US! THEN WHAT ARE YOU WAITING FOR</h4>
                <p className="text-white">As a web crawler Lorem ipsum dolor sit amet consectetur <br />
                 adipisicing elit. Dolorem sed quas natus.</p>
                <div className="container-fluid d-flex justify-content-center flex-row">
                    <span className="contact-email primary-orange-bg d-flex ">
                        <form onSubmit={sendEmailData}>
                            <input type="email" placeholder="Enter your email" className="text-white" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <button type="submit">SEND</button>
                        </form>
                    </span>
                </div>
            </div>
        </>
    )
}
export default Contact