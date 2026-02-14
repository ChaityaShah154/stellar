import { useState } from 'react';
import '../styles/Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main className="contact">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Get in Touch</h1>
          <p className="subtitle">Experience Stellar Jewelry</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Contact Information</h2>
            
            <div className="info-section">
              <h3>📍 Location</h3>
              <p>Stellar Jewelry Studio</p>
              <p>123 Jewelry Lane</p>
              <p>Mumbai, India - 400001</p>
            </div>

            <div className="info-section">
              <h3>📞 Phone</h3>
              <p>+91 (22) 1234-5678</p>
              <p>Mon - Sat: 10:00 AM - 7:00 PM</p>
            </div>

            <div className="info-section">
              <h3>✉️ Email</h3>
              <p>hello@stellarjewelry.com</p>
              <p>orders@stellarjewelry.com</p>
            </div>

            <div className="info-section">
              <h3>🌐 Business Hours</h3>
              <p>Monday - Saturday: 10:00 AM - 7:00 PM</p>
              <p>Sunday: 2:00 PM - 6:00 PM</p>
              <p>Holidays: By Appointment</p>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h2>Send us a Message</h2>
            {submitted && (
              <div className="success-message">
                ✓ Thank you! We'll get back to you shortly.
              </div>
            )}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 1234-567-890"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your inquiry..."
                  rows={6}
                />
              </div>

              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <section className="map-section">
        <h2>Find Us</h2>
        <div className="map-placeholder">
          <p>📍 Located in the heart of Mumbai's jewelry district</p>
          <p>Map integration coming soon</p>
        </div>
      </section>
    </main>
  );
}
