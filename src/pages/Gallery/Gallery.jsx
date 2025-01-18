import React, { useState, useEffect } from 'react';
import './Gallery.css';

const blobImages = [
  '/src/assets/icons/blob1.png',
  '/src/assets/icons/blob3.png',
  '/src/assets/icons/blob4.png',
  '/src/assets/icons/blob2.png',
];

const Gallery = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedMedia, setSelectedMedia] = useState(null); 
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
      coverImage: '/src/assets/kedia/kedia.jpeg',
      description: 'A heartfelt initiative to provide essential resources and support to Kedia Primary School.',
      date: 'July 6, 2024',
      images: [{ id: 1, url: '/src/assets/kedia/kedia.jpeg', caption: 'Setting the stage: Organizing shoes and supplies for distribution.'},
      { id: 2, url: '/src/assets/kedia/K1.jpeg', caption: 'A display of hope: New shoes lined up for eager young feet.'},
      { id: 3, url: 'src/assets/kedia/K2.jpeg', caption: 'Smiles of gratitude: A moment shared with the students and volunteers.'},
      { id: 4, url: 'src/assets/kedia/K3.jpeg', caption: 'Joy in unity: Students celebrating the generous donations.'},
      { id: 5, url: 'src/assets/kedia/K4.jpeg', caption: 'Grateful hearts: Capturing the spirit of the event with a selfie.'},
      { id: 6, url: 'src/assets/kedia/K5.jpeg', caption: 'Sharing knowledge: A group of volunteers engaging with the community.'},
      { id: 7, url: 'src/assets/kedia/K6.jpeg', caption: 'Bundles of care: Essential supplies ready for distribution to those in need.'}
        ]
    },
    {
      id: 2,
      title: 'Shakawe JSS Donation',
      coverImage: '/src/assets/shakawe/shakawedono.jpg',
      description: 'A generous contribution aimed at enhancing the learning environment for students at Shakawe Junior Secondary School.',
      date: 'April 29, 2021',
      images: [{ id: 1, url: '/src/assets/shakawe/shakawedono.jpg', caption: 'Collaborative efforts: Volunteers working together to organize donations for Shakawe JSS.'},
      { id: 2, url: '/src/assets/shakawe/S1.jpg', caption: 'Prepared with care: A set of new uniforms ready to bring smiles to students in need.'},
      { id: 3, url: '/src/assets/shakawe/S2.jpg', caption: 'Making a difference: Reception of donation boxes from Able Hearts.'}      
    ]
    },
    {
      id: 3,
      title: 'Lavender High Tea',
      coverImage: '/src/assets/lavender/lavender.jpg',
      description: 'A delightful gathering to raise funds and awareness for community development projects.',
      date: 'August 9, 2020',
      images: [{ id: 1, url: '/src/assets/lavender/lavender.jpg', caption: 'Elegance and purpose: Guests enjoy the Lavender High Tea in their stunning attire.'},
      { id: 2, url: '/src/assets/lavender/L1.jpg', caption: 'Moments of connection: Sharing laughter and inspiration at the Lavender High Tea.'},
      { id: 3, url: '/src/assets/lavender/L2.jpg', caption: 'Words of empowerment: A speaker addressing attendees about community impact.'},
      { id: 4, url: '/src/assets/lavender/L3.jpg', caption: 'A picture-perfect day: The vibrant Lavender High Tea setup, blending charm and philanthropy'}      
    ]
    },
    {
      id: 4,
      title: 'Covid-19 Community Relief Packages',
      coverImage: '/src/assets/covid/covid.jpg',
      description: 'A dedicated effort to distribute essential supplies to communities affected by the pandemic.',
      date: '2020',
      images: [{ id: 1, url: '/src/assets/covid/covid.jpg', caption: 'A heartwarming moment: Able Hearts Foundation spreading hope with COVID relief packages to the elderly, blending compassion and community support.'},
      { id: 2, url: 'src/assets/covid/C1.jpg', caption: 'A closer look: The thoughtful contents of an Able Hearts COVID relief package, filled with essentials to brighten the lives of the elderly.'},
      { id: 3, url: 'src/assets/covid/C2.jpg', caption: 'A closer look: The thoughtful contents of an Able Hearts COVID relief package, filled with essentials to brighten the lives of the elderly.'},
      { id: 4, url: '/src/assets/covid/C3.jpg', caption: 'A moment of unity: The Able Hearts team with Honourable Member of Parliament, Mr. Ignatius Moswaane, working together to support our community.'},
      { id: 5, url: '/src/assets/covid/C4.jpg', caption: 'A heartwarming moment: Able Hearts Foundation spreading hope with COVID relief packages to the elderly, blending compassion and community support.'}

      ]
    },
    {
      id: 5,
      title: 'Tsogang Trust',
      coverImage: '/src/assets/tsogangtrust/tsogangtrust.jpg',
      description: 'Collaboration with Tsogang Trust to empower local communities through education and skill development.',
      date: 'October 27, 2022',
      images: [{ id: 1, url: '/src/assets/tsogangtrust/tsogangtrust.jpg', caption: 'A generous gesture: Senn Foods providing essential foodstuffs and supplies to Tsogang Trust, fueling hope and community support.'},
      { id: 2, url: 'src/assets/tsogangtrust/T1.jpg', caption: 'Our Selfless Leader: Ms. Sakshi Bhargava, our visionary founder, leading with compassion and dedication.'},      
      { id: 3, url: '/src/assets/tsogangtrust/T2.jpg', caption: 'A heartwarming connection: Ms. Sakshi Bhargava with one of the bright young minds at Tsogang Trust, inspiring the next generation with care and compassion.'},
      { id: 4, url: '/src/assets/tsogangtrust/T3.jpg', caption: 'A generous gesture: Senn Foods providing essential foodstuffs and supplies to Tsogang Trust, fueling hope and community support.'}
    ]
    },
    {
      id: 6,
      title: 'Mochudi Resource Center',
      coverImage: '/src/assets/mochudi/mochud.jpg',
      description: 'An initiative to equip the Mochudi Resource Center with vital resources to foster community engagement.',
      date: 'April 22, 2021 ',
      images: [{ id: 1, url: '/src/assets/mochudi/mochud.jpg', caption: 'A moment of impact: The Able Hearts team delivering essential supplies to the Mochudi Resource Center, strengthening support for the community.'},
      { id: 2, url: '/src/assets/mochudi/M1.jpg', caption: 'A touch of kindness: Ms. Sakshi Bhargava sharing a special moment with the little ones, spreading love and encouragement at Tsogang Trust.'},
      { id: 3, url: '/src/assets/mochudi/M2.jpg', caption: 'On the ground: The Able Hearts team sorting packages on-site at Mochudi Resource Center, ensuring every child receives the support they need.'},
      { id: 4, url: '/src/assets/mochudi/M3.jpg', caption: 'A moment of impact: The Able Hearts team delivering essential supplies to the Mochudi Resource Center, strengthening support for the community.'},
      { id: 5, url: '/src/assets/mochudi/M4.jpg', caption: 'A closer look: The thoughtful contents of an Able Hearts Mochudi Resource Center package, filled with essentials to brighten the lives of the Children.'},
      { id: 6, url: '/src/assets/mochudi/M5.jpg', caption: 'Sharing knowledge: The crew engaging with the Children through fun and learning.'},
      { id: 7, url: '/src/assets/mochudi/M6.jpg', caption: 'A moment of giving: The Able Hearts team proudly presenting the carefully prepared packages, bringing hope and support to those in need.'}
    ]
    },
    {
      id: 7,
      title: 'Dynamic Talent Show',
      coverImage: '/src/assets/dynamictalent/talentshow.jpeg',
      description: 'A showcase of vibrant talents aimed at celebrating creativity and diversity.',
      date: 'August 20, 2023',
      images: [{ id: 1, url: '/src/assets/dynamictalent/talentshow.jpeg', caption: ''},
      { id: 2, url: '/src/assets/dynamictalent/DT1.jpg', caption: ''},
      { id: 3, url: '/src/assets/dynamictalent/DT2.jpg', caption: ''},
      { id: 4, url: '/src/assets/dynamictalent/DT3.jpg', caption: ''},
      { id: 5, url: '/src/assets/dynamictalent/DT4.jpg', caption: ''},
      { id: 6, url: '/src/assets/dynamictalent/DT5.jpg', caption: ''},
      { id: 7, url: '/src/assets/dynamictalent/DT6.jpg', caption: ''},
      { id: 8, url: '/src/assets/dynamictalent/DT7.jpg', caption: ''},
      { id: 9, url: '/src/assets/dynamictalent/DT8.jpg', caption: ''},
      { id: 10, url: '/src/assets/dynamictalent/DT9.jpg', caption: ''},
      { id: 11, url: '/src/assets/dynamictalent/DT10.jpeg', caption: ''},
      { id: 12, url: '/src/assets/dynamictalent/DT11.jpeg', caption: ''},
      { id: 13, url: '/src/assets/dynamictalent/DT12.jpeg', caption: ''},
      { id: 15, url: '/src/assets/dynamictalent/DT14.jpeg', caption: ''}
    ]
    },
    {
      id: 8,
      title: 'Lephoi Able Hearts Garden and Fun Day',
      coverImage: '/src/assets/lephoi/garden.jpg',
      description: 'A fun-filled day celebrating community spirit and sustainable gardening initiatives.',
      date: 'August 15, 2020',
      images: [{ id: 1, url: '/src/assets/lephoi/garden.jpg', caption: 'Able Hearts Garden Grand Opening: The Grand Opening!'},
      { id: 2, url: '/src/assets/lephoi/LG1.jpg', caption: 'Our Selfless Leader: Ms. Sakshi Bhargava, our visionary founder, leading with compassion and dedication.'},
      { id: 3, url: '/src/assets/lephoi/LG2.jpg', caption: 'Creative Moments: The kids had an amazing time unleashing their creativity and making beautiful beads during the fun day!'},
      { id: 4, url: '/src/assets/lephoi/LG3.jpg', caption: 'Creative Moments: The kids had an amazing time unleashing their creativity and making beautiful beads during the fun day!'},
      { id: 5, url: '/src/assets/lephoi/LG4.jpg', caption: 'Leading with Love: Our founder, Ms. Sakshi Bhargava, guiding the kids as they create their beautiful beadwork—turning moments into memories.'},
      { id: 6, url: '/src/assets/lephoi/LG5.jpg', caption: 'Spreading love and hope: Able Hearts at the Lephoi Centre, delivering essential donations to those in need.'},
      { id: 7, url: '/src/assets/lephoi/LG6.jpg', caption: 'Together for a cause: The Able Hearts crew, united in service and compassion.'},
      { id: 8, url: '/src/assets/lephoi/LG7.jpeg', caption: 'UCCSA Lephoi Centre: For Learners with Visual Impairment'}]
    },
    {
      id: 9,
      title: 'News Articles',
      coverImage: '/src/assets/newspaper/NP1.jpg',
      description: 'A collection of impactful news articles highlighting community achievements and milestones.',
      date: '',
      images: [{ id: 1, url: '/src/assets/newspaper/NP1.jpg', caption: 'Celebrating Milestones: Huge thanks to our media supporters for featuring the Able Hearts garden handover—your coverage helps us inspire more change!'},
      { id: 2, url: '/src/assets/newspaper/NP2.jpg', caption: 'A Musical Moment: Special appreciation to Kgosi Moagi for performing a beautiful song during the Able Hearts garden handover ceremony at the Lephoi Centre. Your talent added so much meaning to the day!'},
      { id: 3, url: '/src/assets/newspaper/NP3.jpeg', caption: 'Grateful for the Spotlight: A heartfelt thank you to The Voice Newspaper Botswana and @themonitor for sharing our story and amplifying our mission!'},
      { id: 4, url: '/src/assets/newspaper/NP4.jpg', caption: 'Making Waves: Thank you to The Voice Newspaper Botswana and @themonitor for showcasing our journey of giving back and supporting vulnerable communities. Together, we make a difference!'},
      { id: 4, url: '/src/assets/newspaper/NP5.jpg', caption: 'Amplifying Impact: Thank you @therealyaronafm for giving us a platform to share our mission and reach the hearts of so many. Your support helps us make a greater difference in the lives of vulnerable communities!'}]
    },
    {
      id: 10,
      title: 'First Ever Event',
      coverImage: '/src/assets/firstevent/FE1.jpeg',
      description: 'The landmark event that marked the beginning of our journey in making a difference.',
      date: 'August 25, 2017',
      images: [{ id: 1, url: '/src/assets/firstevent/FE1.jpeg', caption: 'A Moment of Unity: Students gather to celebrate the first Able Hearts event, fostering inclusion and hope.'},
      { id: 2, url: '/src/assets/firstevent/FE2.jpeg', caption: 'Spreading Smiles: Engaging with the youth through fun and learning.'},
      { id: 3, url: '/src/assets/firstevent/FE3.jpeg', caption: 'Empowering Through Giving: Distributing clothes, books, and toys to ensure brighter tomorrows for the children.'},
      { id: 4, url: '/src/assets/firstevent/FE4.jpeg', caption: 'Bridging Gaps: Smiles abound as donations of school shoes bring joy and opportunity.'}]
    }
  ];

  const individualMedia = [
    {
      id: 1,
      type: 'image',
      url: '/src/assets/IND1.jpg',
      caption: 'Certificate of Appreciation from Lephoi Centre for the Blind.',
      date: 'December 21, 2020',
    },
    {
      id: 2,
      type: 'video',
      url: 'https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fweb.facebook.com%2Fableheartsfoundation%2Fvideos%2F1023655192465414%2F&show_text=false&width=267&t=0',
      caption: 'Kedia Primary School Visit.',
      date: 'July 6, 2024',
    },
    {
      id: 3,
      type: 'video',
      url: 'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fableheartsfoundation%2Fvideos%2F627034052479114%2F&show_text=false&width=560&t=0',
      caption: 'Donations Handover for Tsogang Trust.',
      date: 'October 27, 2022',
    },
    {
      id: 4,
      type: 'video',
      url: 'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fableheartsfoundation%2Fvideos%2F929323177971101%2F&show_text=false&width=560&t=0',
      caption: 'Mochudi Resource Center Visit.',
      date: 'December 7, 2021',
    }
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeEventModal = () => {
    setSelectedEvent(null);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  // Event modal handler
  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setSelectedImage(null);
    setSelectedMedia(null);
  };

  // Individual media modal handler
  const handleMediaClick = (media) => {
    setSelectedMedia(media);
    setSelectedEvent(null);
    setSelectedImage(null);
  };

  

  const closeMediaModal = () => setSelectedMedia(null);

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
      <div className={`main-gallery pre-animate-gallery ${isLoaded ? 'fade-in-gallery' : ''}`}>
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
         {/* Individual Media Section */}
      <h2>Individual Media</h2>
      <div className="individual-media-grid">
        {individualMedia.map((media) => (
          <div
            key={media.id}
            className="media-card"
            onClick={() => handleMediaClick(media)}
          >
            {media.type === "image" ? (
              <img src={media.url} alt={media.caption} className="media-image" />
            ) : (
              <iframe
                src={media.url}
                title={`Media ${media.id}`}
                className="media-video"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              />
            )}
            <div className="media-card-overlay">
              <p className="media-caption">{media.caption}</p>
              <p className="media-date">{media.date}</p>
            </div>
          </div>
          ))}
        </div>
      </div>
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
        <div className="indmodal-overlay-gallery" onClick={closeImageModal}>
          <div
            className="indmodal-content-gallery image-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="indclose-button-gallery" onClick={closeImageModal}>
              &times;
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.caption}
              className="indmodal-image-gallery"
            />
            <p className="modal-image-caption">{selectedImage.caption}</p>
          </div>
        </div>
      )}
      {/* Media Modal */}
      {selectedMedia && (
        <div className="modal-overlay-gallery" onClick={closeMediaModal}>
          <div
            className="modal-content-gallery"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-button-gallery"
              onClick={closeMediaModal}
            >
              &times;
            </button>
            {selectedMedia.type === "image" ? (
              <img
                src={selectedMedia.url}
                alt={selectedMedia.caption}
                className="modal-media-image"
              />
            ) : (
              <iframe
                src={selectedMedia.url}
                title="Selected Media"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                className="modal-media-video"
              />
            )}
            <p className="modal-media-caption">{selectedMedia.caption}</p>
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