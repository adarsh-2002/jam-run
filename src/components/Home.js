import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaRunning, 
  FaUsers, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaHeart,
  FaTrophy,
  FaClock,
  FaRoute
} from 'react-icons/fa';

const Home = () => {
  const features = [
    {
      icon: <FaUsers />,
      title: "Community First",
      description: "Join 500+ passionate runners in Jamshedpur. We're like a family, just with more sweat!"
    },
    {
      icon: <FaCalendarAlt />,
      title: "Weekly Events",
      description: "Regular runs, races, and training sessions. Plus, we always end with chai and snacks!"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Beautiful Routes",
      description: "Explore the best running trails in Jamshedpur. We know every pothole and shortcut!"
    },
    {
      icon: <FaHeart />,
      title: "Health & Wellness",
      description: "Stay fit and make lifelong friends. Runner's high is real, and so is post-run hunger!"
    }
  ];

  const stats = [
    { number: "100+", label: "Members" },
    { number: "10+", label: "Events" },
    { number: "1000+", label: "KM Run" },
    { number: "2", label: "Years" }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title"
          >
            Welcome to <span className="highlight">JamRun</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtitle"
          >
            Jamshedpur's Premier Running Community
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-description"
          >
            Join hundreds of passionate runners exploring the beautiful streets and trails of Jamshedpur. 
            From beginners to marathoners, we welcome everyone! 🏃‍♂️ Because life is better when you're running 
            (and eating samosas after!)
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hero-logo"
          >
            <div className="running-illustration">
              <FaRunning className="running-icon" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="hero-buttons"
          >
            <Link to="/events" className="btn btn-primary">
              <FaRunning /> Join Next Run
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>Why Choose JamRun?</h2>
          <p>Discover what makes our community special</p>
        </motion.div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="feature-card"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="stats-container"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="stat-item"
              whileHover={{ scale: 1.1 }}
            >
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="cta">
                  <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="cta-content"
          >
            <h2>Ready to Start Your Running Journey?</h2>
            <p>Join us for our next community run and experience the joy of running with friends! 
            Plus, we promise the best post-run breakfast in Jamshedpur! 🍳☕</p>
            <Link to="/contact" className="btn btn-primary">
              Get Started Today
            </Link>
          </motion.div>
      </section>
    </div>
  );
};

export default Home; 