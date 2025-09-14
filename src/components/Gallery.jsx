import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Modal, Button, Spinner, Alert } from 'react-bootstrap';

// API base URL - change this to your server URL
const API_BASE_URL = import.meta.env.MODE === 'production' 
  ? 'https://kiranadvisory-backend.onrender.com' 
  : 'http://localhost:3001';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Load images from API on component mount
  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/api/gallery`);
      if (response.ok) {
        const data = await response.json();
        setImages(data);
        setError('');
      } else {
        setError('Failed to load gallery images');
      }
    } catch (err) {
      setError('Error loading gallery. Please try again later.');
      console.error('Error fetching images:', err);
    } finally {
      setLoading(false);
    }
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setShowModal(false);
  };

  return (
    <section id="gallery" className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-dark">Gallery</h2>
          <p className="lead text-muted">Explore our work and achievements</p>
        </div>

        {loading ? (
          <div className="text-center py-5">
            <Spinner animation="border" variant="primary" />
            <p className="mt-3 text-muted">Loading gallery...</p>
          </div>
        ) : error ? (
          <div className="text-center py-5">
            <Alert variant="warning">
              {error}
            </Alert>
          </div>
        ) : images.length === 0 ? (
          <div className="text-center py-5">
            <div className="mb-4">
              <i className="bi bi-images display-1 text-muted"></i>
            </div>
            <h4 className="text-muted">No images in gallery yet</h4>
            <p className="text-muted">Images will appear here once they are added by the admin.</p>
          </div>
        ) : (
          <div className="pinterest-grid">
            {images.map((image, index) => (
              <div 
                key={index}
                className="pinterest-item"
                onClick={() => openModal(image)}
              >
                <div className="pinterest-card">
                  <img
                    src={image.url}
                    alt={image.title || `Gallery Image ${index + 1}`}
                    className="pinterest-image"
                    loading="lazy"
                  />
                  <div className="pinterest-overlay">
                    <div className="pinterest-content">
                      <h6 className="pinterest-title">
                        {image.title || `Image ${index + 1}`}
                      </h6>
                      {image.description && (
                        <p className="pinterest-description">
                          {image.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Image Modal */}
        <Modal show={showModal} onHide={closeModal} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedImage?.title || 'Gallery Image'}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-0">
            {selectedImage && (
              <img
                src={selectedImage.url}
                alt={selectedImage.title || 'Gallery Image'}
                className="w-100"
                style={{ maxHeight: '70vh', objectFit: 'contain' }}
              />
            )}
          </Modal.Body>
          {selectedImage?.description && (
            <Modal.Footer>
              <p className="text-muted mb-0">{selectedImage.description}</p>
            </Modal.Footer>
          )}
        </Modal>
      </Container>
    </section>
  );
};

export default Gallery;
