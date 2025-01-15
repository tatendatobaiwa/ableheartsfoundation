import React, { useState, useEffect } from 'react';
import './Gallery.css';

const blobImages = [
  '/src/assets/blob1.png',
  '/src/assets/blob3.png',
  '/src/assets/blob4.png',
  '/src/assets/blob2.png',
];

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
      date: 'July 6, 2024',
      images: [{ id: 1, url: '/src/assets/kedia.jpeg', caption: 'Setting the stage: Organizing shoes and supplies for distribution.'},
      { id: 2, url: '/src/assets/K1.jpeg', caption: 'A display of hope: New shoes lined up for eager young feet.'},
      { id: 3, url: 'src/assets/K2.jpeg', caption: 'Smiles of gratitude: A moment shared with the students and volunteers.'},
      { id: 4, url: 'src/assets/K3.jpeg', caption: 'Joy in unity: Students celebrating the generous donations.'},
      { id: 5, url: 'src/assets/K4.jpeg', caption: 'Grateful hearts: Capturing the spirit of the event with a selfie.'},
      { id: 6, url: 'src/assets/K5.jpeg', caption: 'Sharing knowledge: A group of volunteers engaging with the community.'},
      { id: 7, url: 'src/assets/K6.jpeg', caption: 'Bundles of care: Essential supplies ready for distribution to those in need.'}
        ]
    },
    {
      id: 2,
      title: 'Shakawe JSS Donation',
      coverImage: '/src/assets/shakawedono.jpg',
      description: 'A generous contribution aimed at enhancing the learning environment for students at Shakawe Junior Secondary School.',
      date: 'April 29, 2021',
      images: [{ id: 1, url: '/src/assets/shakawedono.jpg', caption: 'Collaborative efforts: Volunteers working together to organize donations for Shakawe JSS.'},
      { id: 2, url: '/src/assets/S1.jpg', caption: 'Prepared with care: A set of new uniforms ready to bring smiles to students in need.'},
      { id: 3, url: '/src/assets/S2.jpg', caption: 'Making a difference: Reception of donation boxes from Able Hearts.'}      
    ]
    },
    {
      id: 3,
      title: 'Lavender High Tea',
      coverImage: '/src/assets/lavender.jpg',
      description: 'A delightful gathering to raise funds and awareness for community development projects.',
      date: 'August 9, 2020',
      images: [{ id: 1, url: '/src/assets/lavender.jpg', caption: 'Elegance and purpose: Guests enjoy the Lavender High Tea in their stunning attire.'},
      { id: 2, url: '/src/assets/L1.jpg', caption: 'Moments of connection: Sharing laughter and inspiration at the Lavender High Tea.'},
      { id: 3, url: '/src/assets/L2.jpg', caption: 'Words of empowerment: A speaker addressing attendees about community impact.'},
      { id: 4, url: '/src/assets/L3.jpg', caption: 'A picture-perfect day: The vibrant Lavender High Tea setup, blending charm and philanthropy'}      
    ]
    },
    {
      id: 4,
      title: 'Covid-19 Community Relief Packages',
      coverImage: '/src/assets/covid19-relief-cover.jpg',
      description: 'A dedicated effort to distribute essential supplies to communities affected by the pandemic.',
      date: '2020',
      images: []
    },
    {
      id: 5,
      title: 'Tsogang Trust',
      coverImage: '/src/assets/tsogang-trust-cover.jpg',
      description: 'Collaboration with Tsogang Trust to empower local communities through education and skill development.',
      date: 'October 27, 2022',
      images: []
    },
    {
      id: 6,
      title: 'Mochudi Resource Center',
      coverImage: '/src/assets/mochudi-resource-center-cover.jpg',
      description: 'An initiative to equip the Mochudi Resource Center with vital resources to foster community engagement.',
      date: 'April 22, 2021 ',
      images: []
    },
    {
      id: 7,
      title: 'Dynamic Talent Show',
      coverImage: '/src/assets/dynamic-talent-show-cover.jpg',
      description: 'A showcase of vibrant talents aimed at celebrating creativity and diversity.',
      date: 'August 20, 2023',
      images: []
    },
    {
      id: 8,
      title: 'Lephoi Able Hearts Garden and Fun Day',
      coverImage: '/src/assets/lephoi-able-hearts-cover.jpg',
      description: 'A fun-filled day celebrating community spirit and sustainable gardening initiatives.',
      date: 'August 15, 2020',
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
      date: 'August 25, 2017',
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
      <div className="background-blobs-gallery">
        {blobImages.map((blob, index) => (
          <img
            key={index}
            src={blob}
            alt={`Decorative blob ${index + 1}`}
            className={`blobs-gallery blobs-gallery-${index + 1}`}
          />
        ))}
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