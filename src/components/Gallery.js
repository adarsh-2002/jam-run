import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRunning, FaUsers, FaTrophy, FaCamera, FaHeart } from 'react-icons/fa';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', name: 'All Photos', icon: <FaCamera /> },
    { id: 'events', name: 'Events', icon: <FaTrophy /> },
    { id: 'community', name: 'Community', icon: <FaUsers /> },
    { id: 'running', name: 'Running', icon: <FaRunning /> }
  ];

  const photos = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      title: 'Sunday Morning Run',
      category: 'running',
      likes: 45
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&h=300&fit=crop',
      title: 'Jamshedpur Half Marathon',
      category: 'events',
      likes: 89
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1502904550040-7534597429ae?w=400&h=300&fit=crop',
      title: 'Community Meetup',
      category: 'community',
      likes: 67
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop',
      title: 'Trail Running',
      category: 'running',
      likes: 52
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop',
      title: 'Award Ceremony',
      category: 'events',
      likes: 78
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      title: 'Group Training',
      category: 'community',
      likes: 34
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&h=300&fit=crop',
      title: 'Sunrise Run',
      category: 'running',
      likes: 91
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1502904550040-7534597429ae?w=400&h=300&fit=crop',
      title: 'Charity Run',
      category: 'events',
      likes: 56
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop',
      title: 'Friendship Run',
      category: 'community',
      likes: 43
    }
  ];

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <div className="gallery">
      {/* Hero Section */}
      <section className="gallery-hero">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="gallery-hero-content"
        >
          <h1>Photo Gallery</h1>
          <p>Capturing the spirit and energy of our running community</p>
        </motion.div>
      </section>

      {/* Filter Section */}
      <section className="gallery-filters">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="filter-buttons"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.icon}
                {category.name}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-grid-section">
        <div className="container">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="gallery-grid"
          >
            <AnimatePresence mode="wait">
              {filteredPhotos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="gallery-item"
                  whileHover={{ scale: 1.05, y: -5 }}
                  onClick={() => setSelectedImage(photo)}
                >
                  <div className="photo-container">
                    <img src={photo.src} alt={photo.title} />
                    <div className="photo-overlay">
                      <div className="photo-info">
                        <h3>{photo.title}</h3>
                        <div className="photo-likes">
                          <FaHeart />
                          <span>{photo.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Modal for Full Image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
              <img src={selectedImage.src} alt={selectedImage.title} />
              <div className="modal-info">
                <h3>{selectedImage.title}</h3>
                <div className="modal-likes">
                  <FaHeart />
                  <span>{selectedImage.likes} likes</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats Section */}
      <section className="gallery-stats">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="stats-content"
          >
            <div className="stat-item">
              <FaCamera />
              <div className="stat-number">{photos.length}</div>
              <div className="stat-label">Photos</div>
            </div>
            <div className="stat-item">
              <FaUsers />
              <div className="stat-number">500+</div>
              <div className="stat-label">Community Members</div>
            </div>
            <div className="stat-item">
              <FaTrophy />
              <div className="stat-number">50+</div>
              <div className="stat-label">Events Captured</div>
            </div>
            <div className="stat-item">
              <FaHeart />
              <div className="stat-number">1000+</div>
              <div className="stat-label">Total Likes</div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery; 