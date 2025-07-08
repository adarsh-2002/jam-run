import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaClock, 
  FaFacebook, 
  FaInstagram, 
  FaWhatsapp,
  FaRunning,
  FaUsers
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      alert('Thank you for your message! We will get back to you soon.');
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      content: "Jubilee Park, Jamshedpur, Jharkhand",
      link: "https://maps.google.com/?q=Jubilee+Park+Jamshedpur"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      content: "+91 98765 43210",
      link: "tel:+919876543210"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      content: "hello@jamrun.in",
      link: "mailto:hello@jamrun.in"
    },
    {
      icon: <FaClock />,
      title: "Meeting Times",
      content: "Sunday 6:00 AM, Wednesday 5:30 PM"
    }
  ];

  const socialLinks = [
    {
      icon: <FaFacebook />,
      name: "Facebook",
      url: "https://facebook.com/jamrun",
      color: "#1877f2"
    },
    {
      icon: <FaInstagram />,
      name: "Instagram",
      url: "https://instagram.com/jamrun",
      color: "#e4405f"
    },
    {
      icon: <FaWhatsapp />,
      name: "WhatsApp",
      url: "https://wa.me/919876543210",
      color: "#25d366"
    }
  ];

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="contact-hero-content"
        >
          <h1>Get in Touch</h1>
          <p>Ready to join our running community? We'd love to hear from you!</p>
        </motion.div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="contact-form-section"
            >
              <h2>Send us a Message</h2>
              <p>Have questions about joining our community? Drop us a line!</p>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    required
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="contact-info-section"
            >
              <h2>Contact Information</h2>
              <p>Find us and get in touch</p>
              
              <div className="contact-info-list">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="contact-info-item"
                    whileHover={{ x: 10 }}
                  >
                    <div className="contact-icon">{info.icon}</div>
                    <div className="contact-details">
                      <h3>{info.title}</h3>
                      {info.link ? (
                        <a href={info.link} target="_blank" rel="noopener noreferrer">
                          {info.content}
                        </a>
                      ) : (
                        <p>{info.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Media */}
              <div className="social-media">
                <h3>Follow Us</h3>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      style={{ '--social-color': social.color }}
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="map-content"
          >
            <h2>Find Us</h2>
            <p>Join us at our regular meeting spot</p>
            
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5!2d86.1854!3d22.8046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e3b8b8b8b8b8%3A0x8b8b8b8b8b8b8b8!2sJubilee+Park!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="JamRun Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="faq-content"
          >
            <h2>Frequently Asked Questions</h2>
            
            <div className="faq-grid">
                             <motion.div
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.1 }}
                 viewport={{ once: true }}
                 className="faq-item"
               >
                 <h3>Do I need to be an experienced runner?</h3>
                 <p>Not at all! We welcome runners of all levels, from complete beginners to marathon veterans. We have different pace groups to accommodate everyone. Remember: we were all beginners once, and we all still love post-run food! 🏃‍♂️🍕</p>
               </motion.div>
              
                             <motion.div
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.2 }}
                 viewport={{ once: true }}
                 className="faq-item"
               >
                 <h3>What should I bring to my first run?</h3>
                 <p>Just bring comfortable running shoes, water, and a positive attitude! We provide guidance and support for new members. Oh, and bring your appetite - we always have snacks after! 🥪🍎</p>
               </motion.div>
              
                             <motion.div
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.3 }}
                 viewport={{ once: true }}
                 className="faq-item"
               >
                 <h3>Is there a membership fee?</h3>
                 <p>No! Our community is completely free to join. We believe running should be accessible to everyone. The only cost is your dignity when you're panting like a dog on your first run! 😅🐕</p>
               </motion.div>
              
                             <motion.div
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.4 }}
                 viewport={{ once: true }}
                 className="faq-item"
               >
                 <h3>How often do you meet?</h3>
                 <p>We have regular runs on Sundays at 6:00 AM and Wednesdays at 5:30 PM. We also organize special events throughout the year. Because who needs sleep when you can have runner's high? 😴➡️🏃‍♂️</p>
               </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 