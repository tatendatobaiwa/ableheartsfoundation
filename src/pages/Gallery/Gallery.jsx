import React from 'react';

const Gallery = () => {
  const images = [
    { src: 'https://via.placeholder.com/300', alt: 'Image 1', title: 'Community Outreach' },
    { src: 'https://via.placeholder.com/300', alt: 'Image 2', title: 'Education Program' },
    { src: 'https://via.placeholder.com/300', alt: 'Image 3', title: 'Healthcare Initiative' },
    { src: 'https://via.placeholder.com/300', alt: 'Image 4', title: 'Volunteer Work' },
  ];

  return (
    <div>
      <h1>Gallery</h1>
      <p>Explore moments from our impactful initiatives and community engagements.</p>
      <div style={styles.gallery}>
        {images.map((image, index) => (
          <div key={index} style={styles.imageContainer}>
            <img src={image.src} alt={image.alt} style={styles.image} />
            <p style={styles.title}>{image.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  gallery: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    padding: '20px',
  },
  imageContainer: {
    textAlign: 'center',
    width: '300px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  title: {
    marginTop: '10px',
    fontWeight: 'bold',
  },
};

export default Gallery;
