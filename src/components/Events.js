import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaClock, 
  FaUsers, 
  FaRunning,
  FaTrophy,
  FaRegCalendarCheck
} from 'react-icons/fa';

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingEvents = [
    {
      id: 1,
      title: "Sunday Morning Run",
      date: "2025-01-15",
      time: "06:00 AM",
      location: "Jubilee Park",
      distance: "5K",
      participants: 45,
      type: "Regular Run",
      description: "Join us for our weekly Sunday morning run around the beautiful Jubilee Park. Followed by the most important meal of the day - breakfast! 🍳☕"
    },
    {
      id: 2,
      title: "Jamshedpur Half Marathon",
      date: "2025-02-10",
      time: "07:00 AM",
      location: "JRD Tata Sports Complex",
      distance: "21K",
      participants: 200,
      type: "Race",
      description: "Annual half marathon through the scenic routes of Jamshedpur. The only race where you'll burn 2000 calories and then eat 3000 calories at the finish line! 🏃‍♂️🍕"
    },
    {
      id: 3,
      title: "Beginner's Training Session",
      date: "2025-01-20",
      time: "05:30 PM",
      location: "XLRI Ground",
      distance: "3K",
      participants: 25,
      type: "Training",
      description: "Perfect for new runners! Learn proper form and build endurance. We promise you'll be addicted to runner's high in no time! 🏃‍♀️💪"
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: "New Year Run",
      date: "2025-01-01",
      time: "06:30 AM",
      location: "Steel City Mall",
      distance: "10K",
      participants: 150,
      type: "Special Event",
      description: "Started the new year with a bang! Great energy and participation. Because what better way to start the year than burning calories before breakfast? 🎆🏃‍♂️"
    },
    {
      id: 5,
      title: "Christmas Charity Run",
      date: "2024-12-25",
      time: "07:00 AM",
      location: "Dimna Lake",
      distance: "8K",
      participants: 120,
      type: "Charity",
      description: "Combined fitness with giving back to the community. Running for a cause and then eating for a cause! 🎄❤️"
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getEventIcon = (type) => {
    switch (type) {
      case 'Race':
        return <FaTrophy />;
      case 'Training':
        return <FaRunning />;
      case 'Regular Run':
        return <FaUsers />;
      default:
        return <FaCalendarAlt />;
    }
  };

  return (
    <div className="events">
      {/* Hero Section */}
      <section className="events-hero">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="events-hero-content"
        >
          <h1>Events & Races</h1>
          <p>Join our exciting running events and races throughout the year</p>
        </motion.div>
      </section>

      {/* Tab Navigation */}
      <section className="events-tabs">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="tab-navigation"
          >
            <button
              className={`tab-button ${activeTab === 'upcoming' ? 'active' : ''}`}
              onClick={() => setActiveTab('upcoming')}
            >
              <FaRegCalendarCheck />
              Upcoming Events
            </button>
            <button
              className={`tab-button ${activeTab === 'past' ? 'active' : ''}`}
              onClick={() => setActiveTab('past')}
            >
              <FaCalendarAlt />
              Past Events
            </button>
          </motion.div>
        </div>
      </section>

      {/* Events List */}
      <section className="events-list">
        <div className="container">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="events-grid"
          >
            {(activeTab === 'upcoming' ? upcomingEvents : pastEvents).map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="event-card"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="event-header">
                  <div className="event-icon">
                    {getEventIcon(event.type)}
                  </div>
                  <div className="event-type">{event.type}</div>
                </div>
                
                <h3 className="event-title">{event.title}</h3>
                <p className="event-description">{event.description}</p>
                
                <div className="event-details">
                  <div className="event-detail">
                    <FaCalendarAlt />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="event-detail">
                    <FaClock />
                    <span>{event.time}</span>
                  </div>
                  <div className="event-detail">
                    <FaMapMarkerAlt />
                    <span>{event.location}</span>
                  </div>
                  <div className="event-detail">
                    <FaRunning />
                    <span>{event.distance}</span>
                  </div>
                  <div className="event-detail">
                    <FaUsers />
                    <span>{event.participants} participants</span>
                  </div>
                </div>

                {activeTab === 'upcoming' && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-primary event-register"
                  >
                    Register Now
                  </motion.button>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Event Calendar */}
      <section className="event-calendar">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="calendar-section"
          >
            <h2>Event Calendar</h2>
            <p>Mark your calendars for these exciting events</p>
            
            <div className="calendar-grid">
              {upcomingEvents.slice(0, 3).map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="calendar-item"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="calendar-date">
                    <div className="date-day">{new Date(event.date).getDate()}</div>
                    <div className="date-month">
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                    </div>
                  </div>
                  <div className="calendar-content">
                    <h4>{event.title}</h4>
                    <p>{event.location}</p>
                    <span className="calendar-time">{event.time}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Events; 