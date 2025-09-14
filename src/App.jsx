import React from 'react';

import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Achievements from './components/Achievements';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import AdminPanel from './components/AdminPanel';
import { Routes, Route } from 'react-router-dom';
import WhatsAppForm from './components/WhatsappForm';
import CardDetail from './components/carddetail';
import Header from './components/Header';

// Import separate page components
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import TestimonialsPage from './pages/TestimonialsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <>
    <Routes>
      {/* Home page with all sections */}
      <Route path="/" element={
        <>
          <Header/>
          <main>
            <Hero />
            <About />
            <Services />
            <Achievements />
            <Testimonials />
            <Gallery />
            <Faq />
          </main>
          <Footer />
        </>
      } />
      
      {/* Separate page routes */}
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/testimonials" element={<TestimonialsPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/contact" element={<ContactPage />} />
      
      {/* Existing routes */}
      <Route path="/whatsapp" element={<WhatsAppForm />} />
      <Route path="/card/:id" element={
        <>
          <Header/>
          <main>
            <CardDetail/>
          </main>
          <Footer />
        </>
      } />
      <Route path='/footerdata' element={<WhatsAppForm/>}/>
      <Route path='/moderation' element={<AdminPanel/>}/>
    </Routes>
    </>
  );
}

export default App;


// App.js
// App.js
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Services from "./components/Services";
// import Achievements from "./components/Achievements";
// import Testimonials from "./components/Testimonials";
// import Faq from "./components/Faq";
// import Footer from "./components/Footer";
// import CardDetail from "./components/CardDetail";

// // Sample cards data
// const cardsData = [
//   {
//     id: "ravi-kiran",
//     image: ("./assets/PreBirthday.jpg"), // Use require or import for images
//     title: "Garlapati Ravi Kiran",
//     subtitle: "B.Com, CA(Inter)",
//     shortDesc: "Experienced in tax consultancy and financial advisory...",
//     detail: "With extensive experience in tax consultancy and financial advisory, Ravi Kiran is a cornerstone of our firm. His expertise in navigating complex tax laws helps businesses achieve compliance and optimize their financial strategies.",
//   },
//   {
//     id: "other-card",
//     image: ("./assets/PreBirthday.jpg"),
//     title: "Second Card Title",
//     subtitle: "Subtitle Info",
//     shortDesc: "Detailed content for the second card...",
//     detail: "Detailed content for the second card displayed on a separate page.",
//   },
// ];

// function App() {
//   return (
//     <Router>
//       {/* Header usually outside Routes if it's common across pages */}
//       <Header />

//       {/* Routes define page-level navigation */}
//       <Routes>
//         {/* Route for the About page, pass cards data as prop */}
//         <Route path="./components/About.jsx" element={<About cards={cardsData} />} />
//         {/* Dynamic route for card details */}
//         <Route path="./components/carddetail.jsx" element={<CardDetail cards={cardsData} />} />
//         {/* Home route with other components */}
//         <Route
//           path="/"
//           element={
//             <>
//               <Hero />
//               <Services />
//               <Achievements />
//               <Testimonials />
//               <Faq />
//             </>
//           }
//         />
//         {/* Fallback route for unmatched URLs */}
//         <Route path="*" element={<p>Page Not Found</p>} />
//       </Routes>

//       {/* Footer outside Routes, common for all pages */}
//       <Footer />
//     </Router>
//   );
// }

// export default App;
