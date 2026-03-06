import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import './style.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <div className="container-fluid">
          <h1>Contact Us</h1>
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Contact Us</span>
          </nav>
        </div>
      </div>

      <div className="contact-content">
        <div className="container-fluid">
          {/* Contact Info Cards */}
          <div className="contact-info-section">
            <div className="contact-card">
              <div className="card-icon">
                <LocationOnIcon />
              </div>
              <h3>Our Location</h3>
              <p>pn colony 7th lane ,srikakulam ,andhra pradesh ,india</p>
            </div>
            <div className="contact-card">
              <div className="card-icon">
                <PhoneIcon />
              </div>
              <h3>Phone Number</h3>
              <p>+91 7981106084</p>
              <p>+91 7981106084</p>
            </div>
            <div className="contact-card">
              <div className="card-icon">
                <EmailIcon />
              </div>
              <h3>Email Address</h3>
              <p>support@Shophub.com</p>
              <p>info@Shophub.com</p>
            </div>
            <div className="contact-card">
              <div className="card-icon">
                <AccessTimeIcon />
              </div>
              <h3>Working Hours</h3>
              <p>Mon - Fri: 8:00 AM - 10:00 PM</p>
              <p>Sat - Sun: 9:00 AM - 11:00 PM</p>
            </div>
          </div>

          {/* Contact Form & Map */}
          <div className="contact-main">
            <div className="contact-form-section">
              <h2>Get in Touch</h2>
              <p>Have a question or feedback? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.</p>
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Your Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Your Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="6"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>

            <div className="contact-map-section">
              <h2>Find Us</h2>
              <div className="map-container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98513092404069!3d40.74881747138391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
