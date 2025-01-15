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
      title: 'Kedia Primary Donation',
      coverImage: '/src/assets/kedia.jpeg',
      description: 'A heartfelt initiative to provide essential resources and support to Kedia Primary School.',
      date: 'January 15, 2023',
      images: [{ id: 1, url: '/src/assets/kedia.jpeg', caption: 'Opening ceremony'},
      { id: 2, url: '/src/assets/K1.jpeg', caption: 'Opening ceremony'},
      { id: 3, url: 'src/assets/K2.jpeg', caption: 'Opening ceremony'},
      { id: 4, url: 'src/assets/K3.jpeg', caption: 'Opening ceremony'},
      { id: 5, url: 'src/assets/K4.jpeg', caption: 'Opening ceremony'},
      { id: 6, url: 'src/assets/K5.jpeg', caption: 'Opening ceremony'},
      { id: 7, url: 'src/assets/K6.jpeg', caption: 'Opening ceremony'}
        ]
    },
    {
      id: 2,
      title: 'Shakawe JSS Donation',
      coverImage: '/src/assets/shakawe-jss-cover.jpg',
      description: 'A generous contribution aimed at enhancing the learning environment for students at Shakawe Junior Secondary School.',
      date: 'February 20, 2023',
      images: []
    },
    {
      id: 3,
      title: 'Lavender High Tea',
      coverImage: '/src/assets/lavender-high-tea-cover.jpg',
      description: 'A delightful gathering to raise funds and awareness for community development projects.',
      date: 'March 25, 2023',
      images: []
    },
    {
      id: 4,
      title: 'Covid-19 Community Relief Packages',
      coverImage: '/src/assets/covid19-relief-cover.jpg',
      description: 'A dedicated effort to distribute essential supplies to communities affected by the pandemic.',
      date: 'April 10, 2023',
      images: []
    },
    {
      id: 5,
      title: 'Tsogang Trust',
      coverImage: '/src/assets/tsogang-trust-cover.jpg',
      description: 'Collaboration with Tsogang Trust to empower local communities through education and skill development.',
      date: 'May 5, 2023',
      images: []
    },
    {
      id: 6,
      title: 'Mochudi Resource Center',
      coverImage: '/src/assets/mochudi-resource-center-cover.jpg',
      description: 'An initiative to equip the Mochudi Resource Center with vital resources to foster community engagement.',
      date: 'June 15, 2023',
      images: []
    },
    {
      id: 7,
      title: 'Dynamic Talent Show',
      coverImage: '/src/assets/dynamic-talent-show-cover.jpg',
      description: 'A showcase of vibrant talents aimed at celebrating creativity and diversity.',
      date: '',
      images: []
    },
    {
      id: 8,
      title: 'Lephoi Able Hearts Garden and Fun Day',
      coverImage: '/src/assets/lephoi-able-hearts-cover.jpg',
      description: 'A fun-filled day celebrating community spirit and sustainable gardening initiatives.',
      date: '',
      images: []
    },
    {
      id: 9,
      title: 'News Articles',
      coverImage: '/src/assets/news-articles-cover.jpg',
      description: 'A collection of impactful news articles highlighting community achievements and milestones.',
      date: '',
      images: []
    },
    {
      id: 10,
      title: 'First Ever Event',
      coverImage: '/src/assets/first-ever-event-cover.jpg',
      description: 'The landmark event that marked the beginning of our journey in making a difference.',
      date: '',
      images: []
    }
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