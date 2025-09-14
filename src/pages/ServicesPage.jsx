import React from 'react';
import Header from '../components/Header';
import Services from '../components/Services';
import Footer from '../components/Footer';

const ServicesPage = () => {
  React.useEffect(() => {
    // Set page title
    document.title = 'Our Services | Kiran & Associates';
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Comprehensive accounting and tax services including GST, Income Tax, Company Law, TDS, PF & ESI, FSSAI License, Digital Signatures, and more in Guntur.');
    }
    
    // Set canonical URL
    const canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', 'https://kiranadvisory.com/services');
    document.head.appendChild(canonical);
    
    return () => {
      document.head.removeChild(canonical);
    };
  }, []);

  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px' }}>
        <Services />
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;
