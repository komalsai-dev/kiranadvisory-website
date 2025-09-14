import React from 'react';
import Header from '../components/Header';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

const GalleryPage = () => {
  React.useEffect(() => {
    // Set page title
    document.title = 'Gallery | Kiran & Associates';
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore our gallery showcasing our work, achievements, and professional activities at Kiran & Associates in Guntur.');
    }
    
    // Set canonical URL
    const canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', 'https://kiranadvisory.com/gallery');
    document.head.appendChild(canonical);
    
    return () => {
      document.head.removeChild(canonical);
    };
  }, []);

  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px' }}>
        <Gallery />
      </main>
      <Footer />
    </>
  );
};

export default GalleryPage;
