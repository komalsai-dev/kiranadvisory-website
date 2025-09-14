import React, { useState, useEffect } from 'react';
import PreBirthday from '../assets/PreBirthday.jpg';
// import maddm from "../assets/maddm.jpg"/
import miss from "../assets/miss.jpg"

// Added a unique, professional background image for each slide
const heroData = [
  { 
    small: "Helping You Grow", 
    title: "One-Stop Online Solution", 
    subtitle: "For All Legal & Financial Services Across India.",
    image: PreBirthday
  },
  { 
    small: "Proven Track Record", 
    title: "500+ Clients Served", 
    subtitle: "With the most Accuracy, Integrity & Trust",
    image: PreBirthday
  }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  React.useEffect(() => {
    const canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', 'https://kiranassociates.com/');
    document.head.appendChild(canonical);
    return () => {
      document.head.removeChild(canonical);
    };
  }, []);

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroData.length);
      setFade(true);
    }, 500);
  };

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + heroData.length) % heroData.length);
      setFade(true);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      className="hero-section d-flex align-items-center text-white"
      style={{ backgroundImage: `url('${heroData[currentIndex].image}')` }}
    >
      <div className="hero-overlay"></div>
      <div className="container position-relative z-index-1">
        <div className="row">
          <div className="col-lg-7 col-md-20">
            <div className={`hero-text-content ${fade ? 'fade-in' : 'fade-out'}`}>
              <p className="hero-small-text text-uppercase fw-bold mt-20">{heroData[currentIndex].small}</p>
              <h1 className="display-5 fw-bold mb-3">{heroData[currentIndex].title}</h1>
              <p className="lead mb-4">{heroData[currentIndex].subtitle}</p>
            </div>
            <a
              href={`https://wa.me/${919989249031}?text=Hello, I'm interested in your services!`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-50 fs-4 social-icon btn btn-outline-success"
            >Get in Touch</a>
          </div>
        </div>
      </div>

      <button className="carousel-control-prev circle" type="button" onClick={handlePrev}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" onClick={handleNext}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </section>
  );
};

export default Hero;
