import { useState } from 'react';
import '../styles/testimonials-faq-footer.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="contact-section section-spacing" id="contact">
      <div className="container">
        <h2 className="section-heading" style={{ color: 'white' }}>Get in Touch</h2>
        <p className="section-subheading" style={{ color: 'rgba(255,255,255,0.9)' }}>
          Have questions? Our team is here to help!
        </p>

        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-item-icon">📞</div>
            <h3>Call Us</h3>
            <p>+91 9876 543 210</p>
            <p style={{ fontSize: '12px', marginTop: '4px' }}>Mon-Sat, 9 AM - 6 PM</p>
          </div>
          <div className="contact-item">
            <div className="contact-item-icon">📧</div>
            <h3>Email Us</h3>
            <p>support@furnishhub.com</p>
            <p style={{ fontSize: '12px', marginTop: '4px' }}>We respond within 24 hours</p>
          </div>
          <div className="contact-item">
            <div className="contact-item-icon">📍</div>
            <h3>Visit Us</h3>
            <p>New Delhi, Mumbai, Bangalore</p>
            <p style={{ fontSize: '12px', marginTop: '4px' }}>Multiple service centers</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us how we can help..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="form-submit">
            {submitted ? '✓ Message Sent!' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}
