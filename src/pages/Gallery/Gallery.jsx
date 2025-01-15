import React, { useState, useEffect } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Event data structure with sub-images
  const events = [
    {
      id: 1,
      title: 'Basketball Tournament 2024',
      coverImage: '/src/assets/basketball-cover.jpg',
      description: 'Annual charity basketball tournament supporting local youth programs.',
      date: 'March 15, 2024',
      images: [
        { id: 1, url: '/src/assets/basketball1.jpg', caption: 'Opening ceremony' },
        { id: 2, url: '/src/assets/basketball2.jpg', caption: 'Championship game' },
        { id: 3, url: '/src/assets/basketball3.jpg', caption: 'Award presentation' }
      ]
    },
    {
      id: 2,
      title: 'Youth Sports Camp',
      coverImage: '/src/assets/camp-cover.jpg',
      description: 'Summer camp teaching various sports to underprivileged youth.',
      date: 'February 20, 2024',
      images: [
        { id: 1, url: '/src/assets/camp1.jpg', caption: 'Morning exercises' },
        { id: 2, url: '/src/assets/camp2.jpg', caption: 'Soccer training' }
      ]
    },
    // Add 8 more events with their respective images
  ];

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setSelectedImage(null);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeEventModal = () => {
    setSelectedEvent(null);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={`container-gallery ${isLoaded ? 'content-loaded' : ''}`}>
      {/* Background Blobs */}
      <div className="background-blobs-gallery">
        <div className="blobs-gallery blobs-gallery-1"></div>
        <div className="blobs-gallery blobs-gallery-2"></div>
        <div className="blobs-gallery blobs-gallery-3"></div>
        <div className="blobs-gallery blobs-gallery-4"></div>
      </div>

      <div className={`header-gallery pre-animate-gallery ${isLoaded ? 'fade-in-gallery' : ''}`}>
        <h1 className="title-gallery">Event Gallery</h1>
        <p className="subtitle-gallery">
          Explore our events and the moments that make them special.
        </p>
      </div>

      {/* Main Event Grid */}
      <main className={`main-gallery pre-animate-gallery ${isLoaded ? 'fade-in-gallery' : ''}`}>
        <div className="events-grid">
          {events.map((event) => (
            <div
              key={event.id}
              className="event-card"
              onClick={() => handleEventClick(event)}
            >
              <img
                src={event.coverImage}
                alt={event.title}
                className="event-cover-image"
              />
              <div className="event-card-overlay">
                <h3 className="event-title">{event.title}</h3>
                <p className="event-date">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Event Modal with Sub-Gallery */}
      {selectedEvent && (
        <div className="modal-overlay-gallery" onClick={closeEventModal}>
          <div
            className="modal-content-gallery event-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-button-gallery" onClick={closeEventModal}>
              &times;
            </button>
            
            <div className="event-modal-header">
              <h2 className="event-modal-title">{selectedEvent.title}</h2>
              <p className="event-modal-date">{selectedEvent.date}</p>
              <p className="event-modal-description">{selectedEvent.description}</p>
            </div>

            <div className="event-images-grid">
              {selectedEvent.images.map((image) => (
                <div
                  key={image.id}
                  className="event-image-card"
                  onClick={() => handleImageClick(image)}
                >
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="event-image"
                  />
                  <div className="event-image-overlay">
                    <p className="event-image-caption">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Individual Image Modal */}
      {selectedImage && (
        <div className="modal-overlay-gallery" onClick={closeImageModal}>
          <div
            className="modal-content-gallery image-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-button-gallery" onClick={closeImageModal}>
              &times;
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.caption}
              className="modal-image-gallery"
            />
            <p className="modal-image-caption">{selectedImage.caption}</p>
          </div>
        </div>
      )}

      {/* Scroll to Top Button */}
      {isScrolled && (
        <button 
          className="scroll-to-top-btn-gallery" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default Gallery;