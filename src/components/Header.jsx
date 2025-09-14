// src/components/Header.jsx

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import log from '../assets/log.png';
// import 'bootstrap/dist 

const Header = () => {
  const [scrolled, setScrolled] = useState();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  // Function to get the appropriate link based on current location
  const getNavLink = (section) => {
    if (location.pathname === '/') {
      // On home page, use hash links for smooth scrolling
      return `/${section}`;
    } else {
      // On other pages, navigate to separate page
      return `/${section}`;
    }
  };

  return (
    <header className={`header-section ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container" >
          <img className="navbar-brand" style={{width:'80px', height:'80px'}} src={log} alt="" />
          <a className="navbar-brand mx-2" style={{fontSize:'18px'}}  href={location.pathname === '/' ? '#home' : '/'}>KIRAN & ASSOCIATES</a>
         
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNav}
            aria-controls="navbarNav"
            aria-expanded={isNavOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} style={{color:'white',fontSize:'18px'}} id="navbarNav">
            <ul className="navbar-nav ms-auto mt-2 list" >
              <li className="nav-item " >
                <a className="nav-link" href={location.pathname === '/' ? '#home' : '/'} onClick={closeNav}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={getNavLink('about')} onClick={closeNav}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={getNavLink('services')} onClick={closeNav}>Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={getNavLink('testimonials')} onClick={closeNav}>Testimonials</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={getNavLink('gallery')} onClick={closeNav}>Gallery</a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link" href={getNavLink('contact')} onClick={closeNav}>Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

  );
};

export default Header;