import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Footer from '../components/Footer';

const AboutPage = () => {
  React.useEffect(() => {
    // Set page title
    document.title = 'About Us | Kiran & Associates';
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about Kiran & Associates - Your trusted partners for accounting, tax, and compliance needs in Guntur. Meet our experienced team of professionals.');
    }
    
    // Set canonical URL
    const canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', 'https://kiranadvisory.com/about');
    document.head.appendChild(canonical);
    
    return () => {
      document.head.removeChild(canonical);
    };
  }, []);

  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px' }}>
        <About />
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
