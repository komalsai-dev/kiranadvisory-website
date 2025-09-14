import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => {
  React.useEffect(() => {
    // Set page title
    document.title = 'Contact Us | Kiran & Associates';
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get in touch with Kiran & Associates for all your accounting, tax, and compliance needs. Located in Guntur, Andhra Pradesh. Call +91 99892 49031.');
    }
    
    // Set canonical URL
    const canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', 'https://kiranadvisory.com/contact');
    document.head.appendChild(canonical);
    
    return () => {
      document.head.removeChild(canonical);
    };
  }, []);

  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px' }}>
        <Footer />
      </main>
    </>
  );
};

export default ContactPage;
