import React, { useState, useEffect, useCallback } from 'react';
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
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 4; // Number of events per page
  const [loadingImages, setLoadingImages] = useState(new Set());

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
      coverImage: '/src/assets/shakawe-jss-cover.jpg',
      description: 'A generous contribution aimed at enhancing the learning environment for students at Shakawe Junior Secondary School.',
      date: 'April 29, 2021',
      images: []
    },
    {
      id: 3,
      title: 'Lavender High Tea',
      coverImage: '/src/assets/lavender-high-tea-cover.jpg',
      description: 'A delightful gathering to raise funds and awareness for community development projects.',
      date: 'August 9, 2020',
      images: []
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

  const totalEvents = events.length;
  const totalPages = Math.ceil(totalEvents / eventsPerPage);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const handleLazyLoad = (src) => {
    setLoadingImages((prev) => new Set(prev).add(src));
  };

  const handleImageLoad = (src) => {
    setLoadingImages((prev) => {
      const newSet = new Set(prev);
      newSet.delete(src);
      return newSet;
    });
  };

  const getPaginatedEvents = useCallback(() => {
    const startIndex = (currentPage - 1) * eventsPerPage;
    return events.slice(startIndex, startIndex + eventsPerPage);
  }, [currentPage, events]);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="container-gallery">
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

      <header className="header-gallery">
        <h1 className="title-gallery">Event Gallery</h1>
        <p className="subtitle-gallery">
          Explore our events and the moments that make them special.
        </p>
      </header>

      {/* Main Event Grid */}
      <main className="main-gallery">
        <div className="events-grid">
          {getPaginatedEvents().map((event) => (
            <div
              key={event.id}
              className="event-card"
              onClick={() => handleEventClick(event)}
            >
              <img
                src={event.coverImage}
                alt={event.title}
                className={`event-cover-image ${
                  loadingImages.has(event.coverImage) ? 'loading' : ''
                }`}
                onLoad={() => handleImageLoad(event.coverImage)}
                onError={(e) => (e.target.src = '/src/assets/placeholder.png')} // Placeholder for broken images
              />
              <div className="event-card-overlay">
                <h3 className="event-title">{event.title}</h3>
                <p className="event-date">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Pagination Controls */}
      <div className="pagination-gallery">
        <button
          onClick={prevPage}
          className="pagination-btn"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="pagination-info">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={nextPage}
          className="pagination-btn"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {/* Event Modal */}
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
              <h2>{selectedEvent.title}</h2>
              <p>{selectedEvent.date}</p>
              <p>{selectedEvent.description}</p>
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
                    className={`event-image ${
                      loadingImages.has(image.url) ? 'loading' : ''
                    }`}
                    onLoad={() => handleImageLoad(image.url)}
                    onError={(e) =>
                      (e.target.src = '/src/assets/placeholder.png') // Placeholder for broken images
                    }
                  />
                  <div className="event-image-overlay">
                    <p>{image.caption}</p>
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
              onError={(e) =>
                (e.target.src = '/src/assets/placeholder.png') // Placeholder for broken images
              }
            />
            <p>{selectedImage.caption}</p>
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
