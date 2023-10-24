import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        emailjs.sendForm('bmail_service', 
                        'olivertutorme_temp', 
                        event.target,
                        'U3so8R1n2D1I1qnJ5')
                .then((result) => {
                    console.log(result.text);
                    alert("Message sent successfully! Expect a response within 1 business day.");
                }, (error) => {
                    console.log(error.text);
                    alert("Failed to send message! Please refresh this page and try again.");
                });
        // console.log(formData);
        // Reset form 
        event.target.reset();
    };

    return (
        <section className="contact-section" id = "contact-section">
            <h2>Contact Oliver</h2>
            <form onSubmit = { handleSubmit } className="contact-form">
                <div className = "input-container">
                    <label className = "input-label borderer">Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value = { formData.name }
                        onChange = { handleChange }
                        required
                    />
                </div>
                <div className = "input-container">
                    <label className = "input-label borderer">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value = { formData.email }
                        onChange = { handleChange }
                    />
                </div>
                <div className = "input-container">
                    <label className = "input-label borderer">Ring Ring</label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value = { formData.phone }
                        onChange = { handleChange }
                    />
                </div>
                <div className = "input-container">
                    <label className = "input-label borderer">Anything else?</label>
                    <textarea
                        name="message"
                        placeholder="Write Oliver a note here!"
                        value = { formData.message }
                        onChange = { handleChange }
                        required
                    ></textarea>
                </div>
                <button type="submit" className="contact-button">Contact Now</button>
            </form>
        </section>
    );
}

export default ContactForm;
