 import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form, Modal, Alert, Spinner } from 'react-bootstrap';

// API base URL - change this to your server URL
const API_BASE_URL = import.meta.env.MODE === 'production' 
  ? 'https://kiranadvisory-backend.onrender.com' 
  : 'http://localhost:3001';

const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [images, setImages] = useState([]);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [newImage, setNewImage] = useState({ title: '', description: '', file: null });
  const [uploading, setUploading] = useState(false);

  const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'Kiran@123';

  // Load images from API on component mount
  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/gallery`);
      if (response.ok) {
        const data = await response.json();
        setImages(data);
      } else {
        setError('Failed to load images from server');
      }
    } catch (err) {
      setError('Error connecting to server. Make sure the server is running.');
      console.error('Error fetching images:', err);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid password. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
    setError('');
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setError('Please select a valid image file.');
        return;
      }
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError('File size must be less than 5MB.');
        return;
      }

      setNewImage(prev => ({ ...prev, file }));
    }
  };

  const handleImageUpload = async () => {
    if (!newImage.file) {
      setError('Please select an image file.');
      return;
    }

    setUploading(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('image', newImage.file);
      formData.append('title', newImage.title);
      formData.append('description', newImage.description);

      const response = await fetch(`${API_BASE_URL}/api/gallery/upload`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const uploadedImage = await response.json();
        setImages(prev => [...prev, uploadedImage]);
        
        // Reset form
        setNewImage({ title: '', description: '', file: null });
        setShowUploadModal(false);
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to upload image');
      }
    } catch (err) {
      setError('Error uploading image. Please check your connection and try again.');
      console.error('Upload error:', err);
    } finally {
      setUploading(false);
    }
  };


  const handleDeleteImage = async (imageId) => {
    if (window.confirm('Are you sure you want to delete this image?')) {
      try {
        const response = await fetch(`${API_BASE_URL}/api/gallery/${imageId}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          setImages(prev => prev.filter(img => img.id !== imageId));
        } else {
          const errorData = await response.json();
          setError(errorData.error || 'Failed to delete image');
        }
      } catch (err) {
        setError('Error deleting image. Please try again.');
        console.error('Delete error:', err);
      }
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md={6} lg={4}>
              <Card className="login-card">
                <Card.Header className="text-white text-center">
                  <h4 className="mb-0">Admin Login</h4>
                </Card.Header>
                <Card.Body>
                  <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter admin password"
                        required
                      />
                    </Form.Group>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Button type="submit" variant="primary" className="w-100">
                      Login
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-vh-100 bg-light">
      <Container className="py-5">
        <Row className="mb-4">
          <Col>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h2 className="mb-0">Gallery Admin Panel</h2>
                <p className="text-muted">Manage your gallery images</p>
              </div>
              <Button variant="outline-danger" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <Button 
              variant="primary" 
              onClick={() => setShowUploadModal(true)}
              className="me-2"
            >
              <i className="bi bi-plus-circle me-2"></i>
              Add New Image
            </Button>
            <span className="text-muted">
              Total Images: {images.length}
            </span>
          </Col>
        </Row>

        {error && (
          <Row className="mb-4">
            <Col>
              <Alert variant="danger" dismissible onClose={() => setError('')}>
                {error}
              </Alert>
            </Col>
          </Row>
        )}

        <Row>
          {images.length === 0 ? (
            <Col>
              <Card className="text-center py-5">
                <Card.Body>
                  <i className="bi bi-images display-1 text-muted mb-3"></i>
                  <h4 className="text-muted">No images in gallery</h4>
                  <p className="text-muted">Upload your first image to get started.</p>
                </Card.Body>
              </Card>
            </Col>
          ) : (
            images.map((image) => (
              <Col key={image.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                <Card className="h-100 admin-card">
                  <div style={{ aspectRatio: '1', overflow: 'hidden' }}>
                    <Card.Img 
                      variant="top" 
                      src={image.url} 
                      alt={image.title}
                      style={{ objectFit: 'cover', height: '100%' }}
                    />
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="h6">{image.title}</Card.Title>
                    {image.description && (
                      <Card.Text className="text-muted small flex-grow-1">
                        {image.description}
                      </Card.Text>
                    )}
                    <Button 
                      variant="outline-danger" 
                      size="sm" 
                      onClick={() => handleDeleteImage(image.id)}
                      className="mt-auto w-100"
                    >
                      <i className="bi bi-trash me-1"></i>
                      Delete
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          )}
        </Row>

        {/* Upload Modal */}
        <Modal show={showUploadModal} onHide={() => setShowUploadModal(false)} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Upload New Image</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Image File *</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  required
                />
                <Form.Text className="text-muted">
                  Supported formats: JPG, PNG, GIF. Max size: 5MB
                </Form.Text>
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  value={newImage.title}
                  onChange={(e) => setNewImage(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Enter image title (optional)"
                />
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={newImage.description}
                  onChange={(e) => setNewImage(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Enter image description (optional)"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowUploadModal(false)}>
              Cancel
            </Button>
            <Button 
              variant="primary" 
              onClick={handleImageUpload}
              disabled={uploading || !newImage.file}
            >
              {uploading ? (
                <>
                  <Spinner animation="border" size="sm" className="me-2" />
                  Uploading...
                </>
              ) : (
                'Upload Image'
              )}
            </Button>
          </Modal.Footer>
        </Modal>

      </Container>
    </div>
  );
};

export default AdminPanel;
