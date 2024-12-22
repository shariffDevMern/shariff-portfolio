import React, { useState } from 'react';
import textBg from './textbg';
import { Typography } from '@mui/material';
import animations from './animations';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      setSubmitted(true);
      console.log('Form submitted:', formData);
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <div style={{ width:'100%', margin: '0 auto', padding: '20px',...textBg,...animations.slideDown }}>
      <Typography variant='h2' color='secondary'>Contact Me</Typography>
      {submitted && <p style={{ color: 'green' }}>Thank you for contacting us!</p>}
      <form onSubmit={handleSubmit} noValidate>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ display: 'block', width: '100%', padding: '8px' }}
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ display: 'block', width: '100%', padding: '8px' }}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            style={{ display: 'block', width: '100%', padding: '8px' }}
          />
          {errors.subject && <p style={{ color: 'red' }}>{errors.subject}</p>}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            style={{ display: 'block', width: '100%', padding: '8px' }}
          />
          {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: '#007BFF',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
