// import React, { useEffect, useRef } from "react";
// import { Carousel } from 'bootstrap'; // Import Bootstrap's Carousel component

// const testimonialsData = [
//   { 
//     name: "Mr. Fayaz Ahemad (BOdega Tech Solutions)", 
//     role: "CEO, BOdega Tech Solutions", 
//     location: "Guntur", 
//     quote: "Kiran & Associates have been instrumental in helping us navigate complex GST and compliance processes. Their tech-driven approach and practical solutions allowed our company to stay fully compliant while focusing on innovation and growth." 
//   },
//   { 
//     name: "Anitha Reddy", 
//     role: "Founder, Annapurna Foods", 
//     location: "Hyderabad", 
//     quote: "Getting our FSSAI license was a breeze thanks to their expert guidance. Highly professional and efficient team. I recommend to join Kiran & Associates." 
//   },
//   { 
//     name: "Suresh Varma", 
//     role: "Director, Varma Constructions", 
//     location: "Guntur", 
//     quote: "The best tax consultants in the city. Their advice on income tax filing has been invaluable for our business. The way the business plan is there is very interesting." 
//   },
// ];

// // Counter Component (no changes needed here)
// const Counter = ({ target }) => {
//   const ref = useRef(null);

//   useEffect(() => {
//     let started = false;
//     const handleScroll = () => {
//       if (!ref.current) return;
//       const rect = ref.current.getBoundingClientRect();
//       if (!started && rect.top < window.innerHeight) {
//         started = true;
//         let current = 0;
//         const step = Math.ceil(target / 100); // smoother increment
//         const interval = setInterval(() => {
//           current += step;
//           if (current >= target) {
//             current = target;
//             clearInterval(interval);
//           }
//           ref.current.textContent = current + "+";
//         }, 30);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [target]);

//   return <h3 ref={ref} className="text-danger-custom fw-bold">0</h3>;
// };

// const Testimonials = () => {
//   // Create a ref to attach to the carousel element
//   const carouselRef = useRef(null);

//   // Initialize the carousel with useEffect
//   useEffect(() => {
//     // Ensure the carousel element is in the DOM
//     if (carouselRef.current) {
//       const testimonialCarousel = new Carousel(carouselRef.current, {
//         interval: 2000, // Set interval to 2 seconds
//         touch: true,     // Allow touch swiping
//       });

//       // Cleanup function to dispose the carousel when component unmounts
//       return () => {
//         testimonialCarousel.dispose();
//       };
//     }
//   }, []); // Empty array ensures this effect runs only once after initial render

//   return (
//     <section id="testimonials" className="py-5 testimonials-section" style={{ background: "#1b2431" }}>
//       <div className="container">
//         {/* Heading */}
//         <div className="text-center mb-5">
//           <p className="text-danger-custom fw-bold text-uppercase small-heading mb-1">
//             Testimonials
//           </p>
//           <h2 className="section-title text-white">What Our Clients Say</h2>
//         </div>

//         <div className="row align-items-center">
//           {/* Left: Carousel */}
//           <div className="col-md-7">
//             <div 
//               ref={carouselRef} // Attach the ref here
//               id="testimonialCarousel" 
//               className="carousel slide" 
//             >
//               <div className="carousel-inner">
//                 {testimonialsData.map((testimonial, index) => (
//                   <div
//                     className={`carousel-item ${index === 0 ? "active" : ""}`}
//                     key={index}
//                   >
//                     <div className="testimonial-card p-4" style={{ minHeight: "280px" }}>
//                       <i className="bi bi-quote fs-1 mb-3 text-light opacity-50"></i>
//                       <p className="fst-italic text-light mb-3" style={{ lineHeight: "1.8" }}>
//                         {testimonial.quote}
//                       </p>
//                       <h6 className="fw-bold text-danger-custom mb-0">{testimonial.name}</h6>
//                       <small className="text-white d-block mt-1">{testimonial.location}</small>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Carousel Indicators */}
//               <div className="carousel-indicators position-relative mt-3">
//                 {testimonialsData.map((_, index) => (
//                   <button
//                     key={index}
//                     type="button"
//                     data-bs-target="#testimonialCarousel"
//                     data-bs-slide-to={index}
//                     className={index === 0 ? "active" : ""}
//                     aria-current={index === 0 ? "true" : "false"}
//                     aria-label={`Slide ${index + 1}`}
//                   ></button>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right: Stats */}
//           <div className="col-md-5 mt-5 mt-md-0">
//             <div className="row text-center text-white g-4">
//               <div className="col-6 border-end border-bottom border-secondary py-3">
//                 <Counter target={30} />
//                 <p className="mb-0">Coaching Experience</p>
//               </div>
//               <div className="col-6 border-bottom border-secondary py-3">
//                 <Counter target={600} />
//                 <p className="mb-0">Satisfied Clients</p>
//               </div>
//               <div className="col-6 border-end border-secondary py-3">
//                 <Counter target={350} />
//                 <p className="mb-0">Entrepreneurs Coached</p>
//               </div>
//               <div className="col-6 py-3">
//                 <Counter target={200} />
//                 <p className="mb-0">Problems Solved</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
import React, { useEffect, useRef } from "react";
import { Carousel } from 'bootstrap'; 


const testimonialsData = [
  { 
    name: "Mr. Fayaz Ahemad (BOdega Tech Solutions)", 
    role: "CEO, BOdega Tech Solutions", 
    location: "Guntur", 
    quote: "Kiran & Associates have been instrumental in helping us navigate complex GST and compliance processes. Their tech-driven approach and practical solutions allowed our company to stay fully compliant while focusing on innovation and growth." 
  },
  { 
    name: "Anitha Reddy", 
    role: "Founder, Annapurna Foods", 
    location: "Hyderabad", 
    quote: "Getting our FSSAI license was a breeze thanks to their expert guidance. Highly professional and efficient team. I recommend to join Kiran & Associates." 
  },
  { 
    name: "Suresh Varma", 
    role: "Director, Varma Constructions", 
    location: "Guntur", 
    quote: "The best tax consultants in the city. Their advice on income tax filing has been invaluable for our business. The way the business plan is there is very interesting." 
  },
  { 
    name: "Balaji", 
    role: "AI Infotech", 
    // location: "", 
    quote: "I am pleased to recommend Mr. Ravi Kiran Garlapati for his exceptional services as a Tax Practitioner. As the Director of Balaji AI Infotech Private Limited, I have had the pleasure of collaborating with Mr. Ravi Kiran on various GST and Income tax training programs." 
  },
  {
    name:"M.Hanumantha rao",
    role:"Aravind Store",
    // location:"locati",
    quote:"Ravi's in-depth knowledge and meticulous approch toauditing wear ommediately evident.He has a keen eye for detail,ensuring that every aspect of our financialoperations was thoroughly examinated and assessed.Beyond his technical skill ,what sets Ravi apart is his ability to communicate complex finacial conceots in a way that's clear and comprehensible,but alsoan enlighting experience for our team,Kiran &Associates, under Ravi leadership, has proved to be more than just an auditing firm ."
  },
  {
    name:"Ananthchandra Yennekapati",
    role:" Warriors of Wellness (WOW)",
    location:"location",
    quote:"His expertise, precision, and deep understanding of taxation have been invaluable in ensuring smooth compliance and strategic financial planning. Ravi Kiran's proactive approach and professional guidance have significantly eased our tax-related processes allowing us to focus on our core business.I highly recommend Kiran & Associates to anyone looking for reliable and efficient tax solutions."
  },
  {
    name:"",
    role:"",
    location:"location",
    quote:""
  }
];


const Counter = ({ target }) => {
  const ref = useRef(null);

  useEffect(() => {
    let started = false;
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      if (!started && rect.top < window.innerHeight) {
        started = true;
        let current = 0;
        const step = Math.ceil(target / 100); // smoother increment
        const interval = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(interval);
          }
          ref.current.textContent = current + "+";
        }, 30);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [target]);

  return <h3 ref={ref} className="text-danger-custom fw-bold">0</h3>;
};


const Testimonials = () => {
  React.useEffect(() => {
    const canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', 'https://kiranassociates.com/testimonials');
    document.head.appendChild(canonical);
    return () => {
      document.head.removeChild(canonical);
    };
  }, []);

  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      const testimonialCarousel = new Carousel(carouselRef.current, {
        interval: 4000, // Set interval to 4 seconds for automatic slideshow
        touch: true,    // Allow touch swiping
      });

      return () => {
        testimonialCarousel.dispose();
      };
    }
  }, []);

  return (
    <section id="testimonials" className="py-5 testimonials-section" style={{ background: "#1b2431" }}>
      <div className="container">
        <div className="text-center mb-5">
          <p className="text-danger-custom fw-bold text-uppercase small-heading mb-1">
            Testimonials
          </p>
          <h2 className="section-title text-white">What Our Clients Say</h2>
        </div>

        <div className="row align-items-center">
          <div className="col-md-7">
            <div 
              ref={carouselRef}
              id="testimonialCarousel" 
              className="carousel slide"
            >
              <div className="carousel-inner">
                {testimonialsData.map((testimonial, index) => (
                  <div
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                    key={index}
                  >
                    <div className="testimonial-card p-4" style={{ minHeight: "280px" }}>
                      <i className="bi bi-quote fs-1 mb-3 text-light opacity-50"></i>
                      <p className="fst-italic text-light mb-3" style={{ lineHeight: "1.8" }}>
                        {testimonial.quote}
                      </p>
                      <h6 className="fw-bold text-danger-custom mb-0">{testimonial.name}</h6>
                      {/* <small className="text-white d-block mt-1">{testimonial.location}</small> */}
                      <small className="text-white d-block mt-1">{testimonial.role}</small>
                    </div>
                  </div>
                ))}
              </div>

              <div className="carousel-indicators position-relative mt-3">
                {testimonialsData.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target="#testimonialCarousel"
                    data-bs-slide-to={index}
                    className={index === 0 ? "active" : ""}
                    aria-current={index === 0 ? "true" : "false"}
                    aria-label={`Slide ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>

          <div className="col-md-5 mt-5 mt-md-0">
            <div className="row text-center text-white g-4">
              <div className="col-6 border-end border-bottom border-secondary py-3">
                <Counter target={30} />
                <p className="mb-0">Coaching Experience</p>
              </div>
              <div className="col-6 border-bottom border-secondary py-3">
                <Counter target={600} />
                <p className="mb-0">Satisfied Clients</p>
              </div>
              <div className="col-6 border-end border-secondary py-3">
                <Counter target={350} />
                <p className="mb-0">Entrepreneurs Coached</p>
              </div>
              <div className="col-6 py-3">
                <Counter target={200} />
                <p className="mb-0">Problems Solved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
