import React from 'react';
import Header from '../components/Header';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const TestimonialsPage = () => {
  React.useEffect(() => {
    // Set page title
    document.title = 'Client Testimonials | Kiran & Associates';
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Read what our satisfied clients say about Kiran & Associates. Trusted by 600+ clients for accounting, tax, and compliance services in Guntur.');
    }
    
    // Set canonical URL
    const canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', 'https://kiranadvisory.com/testimonials');
    document.head.appendChild(canonical);
    
    return () => {
      document.head.removeChild(canonical);
    };
  }, []);

  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px' }}>
        <Testimonials />
      </main>
      <Footer />
    </>
  );
};

export default TestimonialsPage;
