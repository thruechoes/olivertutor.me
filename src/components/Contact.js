import React, { useState } from 'react';

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
        // Submit the form data to the backend or handle accordingly
        console.log(formData);
    };

    return (
        <section className="contact-section">
            <h2>Contact Oliver</h2>
            <form onSubmit = { handleSubmit } className="contact-form">
                <div className = "input-container">
                    <label className = "input-label">Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value = { formData.name }
                        onChange = { handleChange }
                    />
                </div>
                <div className = "input-container">
                    <label className = "input-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value = { formData.email }
                        onChange = { handleChange }
                    />
                </div>
                <div className = "input-container">
                    <label className = "input-label">Ring Ring</label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value = { formData.phone }
                        onChange = { handleChange }
                    />
                </div>
                <div className = "input-container">
                    <label className = "input-label">Anything else?</label>
                    <textarea
                        name="message"
                        placeholder="Write Oliver a note here!"
                        value = { formData.message }
                        onChange = { handleChange }
                    ></textarea>
                </div>
                <button type="submit" className="contact-button">Contact Now</button>
            </form>
        </section>
    );
}

export default ContactForm;
