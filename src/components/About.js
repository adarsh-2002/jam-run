import React from 'react';
import { motion } from 'framer-motion';
import { FaRunning, FaUsers, FaHeart, FaTrophy, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const About = () => {
  const teamMembers = [
    {
      name: "Adarsh S",
      role: "Community Leader",
      description: "Marathon runner with 5+ years experience"
    },
    {
      name: "Mowleeshwar Yadav P",
      role: "Training Coordinator",
      description: "Certified running coach and fitness enthusiast"
    },
    {
      name: "G Vamsidharan",
      role: "Event Organizer",
      description: "Passionate about bringing people together"
    }
  ];

  const values = [
    {
      icon: <FaHeart />,
      title: "Inclusivity",
      description: "Everyone is welcome, regardless of pace or experience. We don't care if you're fast or slow, we just care that you show up!"
    },
    {
      icon: <FaUsers />,
      title: "Community",
      description: "Building lasting friendships through running. We're like a family, just with more running shoes and fewer arguments!"
    },
    {
      icon: <FaTrophy />,
      title: "Excellence",
      description: "Supporting each other to achieve personal goals. Your PR is our PR! 🏆"
    },
    {
      icon: <FaRunning />,
      title: "Passion",
      description: "Love for running and healthy lifestyle. We're addicted to endorphins and post-run food!"
    }
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="about-hero-content"
        >
          <h1>About JamRun</h1>
          <p>Building Jamshedpur's strongest running community since 2024</p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="story">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="story-content"
          >
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                JamRun was born in 2024 when a group of passionate runners in Jamshedpur 
                decided to create a community that would bring together people who love running. 
                What started as a small group of 3 runners has now grown into a vibrant community 
                of over 100 members. We're basically the Avengers of running, but with more sweat and better snacks!
              </p>
              <p>
                We believe that running is not just about fitness, but about building connections, 
                supporting each other, and exploring the beautiful city of Jamshedpur together. 
                Our community welcomes runners of all levels - from complete beginners to marathon veterans.
                Remember: the best runs end with chai and samosas! ☕🥟
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="story-image"
            >
              <FaRunning className="story-icon" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2>Our Values</h2>
            <p>The principles that guide our community</p>
          </motion.div>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="value-card"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2>Meet Our Team</h2>
            <p>The passionate individuals behind JamRun</p>
          </motion.div>
          
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="team-card"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="member-avatar">
                  <FaUsers />
                </div>
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-description">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mission-content"
          >
            <h2>Our Mission</h2>
            <p>
              To inspire and empower the people of Jamshedpur to lead healthier, 
              more active lives through the joy of running. We strive to create 
              a supportive environment where everyone feels welcome and motivated 
              to achieve their personal fitness goals. And yes, we believe in the 
              sacred ritual of post-run breakfast - it's not just food, it's fuel for the soul! 🍳🏃‍♂️
            </p>
            <div className="mission-stats">
              <div className="mission-stat">
                <FaMapMarkerAlt />
                <span>15+ Running Routes</span>
              </div>
              <div className="mission-stat">
                <FaClock />
                <span>3 Weekly Runs</span>
              </div>
              <div className="mission-stat">
                <FaUsers />
                <span>100+ Members</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 