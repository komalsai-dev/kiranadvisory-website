import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const whatsappBusinessNumber = '+919989249031'; // replace with business WhatsApp number including country code (no + or spaces)

const WhatsAppForm = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [userNumber, setUserNumber] = useState('');

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !message) {
      alert('Please fill in your name and message.');
      return;
    }

    const text = `Hello Sir, my name is ${name}.'I would like to consult you for' ${message} My contact number is ${userNumber || 'not provided'}.`;
    const url = `https://wa.me/${whatsappBusinessNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, '_blank');
  };

  const containerStyle = {
    padding: '40px 20px',
    minHeight: '80vh'
  };

  const rowStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    minHeight: '600px',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const columnStyle = {
    flex: '1 1 50%',
    minWidth: '300px',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    minHeight: '500px'
  };

  return (
    <>
      <Header />
      <div style={containerStyle}>
        <div style={rowStyle}>
          {/* Map Section */}
          <div style={columnStyle}>
            <div style={{ width: '100%', marginTop: '100px' }}>
              <Link to="/" className="btn btn-outline-primary mb-4">
                ← Back to Home
              </Link>
              <h2 style={{ marginBottom: '20px' }}>Our Location</h2>
              <div style={{ width: '100%', height: '500px', position: 'relative' }}>
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3829.1976687109386!2d80.4290536!3d16.3128412!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a7516149590d3%3A0x5f1494aa5eb6acff!2sKIRAN%20%26%20ASSOCIATES!5e0!3m2!1sen!2sin!4v1757165774595!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, cursor: 'pointer' }}
                  allowFullScreen=""
                  onClick={() => window.open('https://maps.app.goo.gl/Go3UCCaPQvZwdMgm6', '_blank')}
                />
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div style={columnStyle}>
            <div style={{ width: '100%', maxWidth: '600px', margin: '10px ' }}>
              <h2 style={{ marginBottom: '20px' }}>Contact via WhatsApp</h2>
              <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                <div style={{ marginBottom: '15px' }}>
                  <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Name*</label>
                  <input
                    id="name"
                    type="text"
                    style={{
                      width: '100%',
                      padding: '5px',
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                      fontSize: '16px'
                    }}
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                  />
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label htmlFor="message" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Required Service*</label>
                  <textarea
                    id="message"
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                      fontSize: '16px',
                      minHeight: '150px',
                      resize: 'vertical'
                    }}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    required
                  />
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <label htmlFor="userNumber" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Your Phone Number (optional)</label>
                  <input
                    id="userNumber"
                    type="tel"
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                      fontSize: '16px'
                    }}
                    value={userNumber}
                    onChange={e => setUserNumber(e.target.value)}
                    placeholder="e.g. 919876543210"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      backgroundColor: 'rgb(37, 211, 102)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      padding: '15px 20px',
                      fontSize: '18px',
                      fontWeight: 'bold',
                      cursor: 'pointer'
                    }}
                  >
                    Send via WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WhatsAppForm;
