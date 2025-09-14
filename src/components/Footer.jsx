import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp, FaInstagram, FaYoutube, FaMapMarkedAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  React.useEffect(() => {
    const canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', 'https://kiranassociates.com/contact');
    document.head.appendChild(canonical);
    return () => {
      document.head.removeChild(canonical);
    };
  }, []);

  return (
    <footer id="contact" className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          {/* Company Information */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h4 className="fw-bold text-white">KIRAN & ASSOCIATES</h4>
            <p className="text-white-50">Your trusted partners for all your accounting, tax, and compliance needs in Guntur.</p>
            <div className="d-flex">
              <a target="_blank" href="https://www.facebook.com/ravikiran.garlapati" className="text-white-50 me-3 fs-4 social-icon"><FaFacebook /></a>
              <a target="_blank" href="https://www.instagram.com/ravikiran_garlapati/" className="text-white-50 me-3 fs-4 social-icon"><FaInstagram /></a>
              <a target="_blank" href="https://www.linkedin.com/in/ravi-kiran-g-42118223b/" className="text-white-50 me-3 fs-4 social-icon"><FaLinkedin /></a>
              <a
                href={`https://wa.me/${919989249031}?text=Hello, I'm interested in your services!`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-50 fs-4 social-icon"
              >
                <FaWhatsapp />
              </a>
              <a href="https://www.youtube.com/channel/UC6EKFP7xz-9E7VPBUkMEiuw" className="text-white-50 me-3 fs-4 social-icon mx-3"><FaYoutube /></a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-white">Contact Us</h5>
            <p className="mb-2">Office Address:</p>
            <a
              href="https://maps.app.goo.gl/Go3UCCaPQvZwdMgm6"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: '#8c8f92ff' }}
            >
               <FaMapMarkedAlt size={24} color="blue" />  DOOR NO 21, 8-527, beside KODANDA RAMALAYAM, opp. GANDHI STATUE, Lakshmipuram, Koritepadu, Guntur, Andhra Pradesh 522007      <br />
            </a><br />
            <p className="mt-2">Mobile :
              <a href="https://wa.me/919989249031" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none',color: '#8c8f92ff'}}> <br />+91 99892 49031</a> |
              <a href="https://wa.me/919912301416" target="_blank" rel="noopener noreferrer"   style={{textDecoration:'none',color: '#8c8f92ff'}} > +91 99123 01416</a>
            </p>
            <p>
            Email:  <br />
            <a href="mailto:info@kiranadvisory.com" style={{ color: '#8c8f92ff', textDecoration: ' none'}}>
              ✉ info@kiranadvisory.com
            </a><br />
            <a href="mailto:kiranassociates99@gmail.com" style={{ color: '#8c8f92ff', textDecoration: ' none'}}>
              ✉ kiranassociates99@gmail.com
            </a>
            </p>
            Office Timings <br />
            <p style={{color: '#8c8f92ff'}} >
            Monday - Saturday: 10:00AM - 7:30PM <br />
            Sunday:  Closed
            </p>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-white">Our Services</h5>
            <ul className="list-unstyled text-white-50">
              <Link className='mb-2' to="/footerdata" style={{color:'#8c8f92ff', textDecoration:'none'}} >Book Keeping</Link> <br />
              <Link className='mb-2' to="/footerdata" style={{color:'#8c8f92ff', textDecoration:'none'}} >Practical Coaching</Link> <br />
              <Link className='mb-2' to="/footerdata" style={{color:'#8c8f92ff', textDecoration:'none'}} >GST Services</Link> <br />
              <Link className='mb-2' to="/footerdata" style={{color:'#8c8f92ff', textDecoration:'none'}} >Income Tax</Link> <br />
              <Link className='mb-2' to="/footerdata" style={{color:'#8c8f92ff', textDecoration:'none'}} >Company Law Services</Link> <br />             
              <Link className='mb-2' to="/footerdata" style={{color:'#8c8f92ff', textDecoration:'none'}} >TDS & TCS Services</Link>         <br />     
              <Link className='mb-2' to="/footerdata" style={{color:'#8c8f92ff', textDecoration:'none'}} >PF & ESI Services</Link>            <br />  
              <Link className='mb-2' to="/footerdata" style={{color:'#8c8f92ff', textDecoration:'none'}} >Food License(FSSAI)</Link>              <br />
              <Link className='mb-2' to="/footerdata" style={{color:'#8c8f92ff', textDecoration:'none'}} >Digital Signature Services</Link>              <br />
              <Link className='mb-2' to="/footerdata" style={{color:'#8c8f92ff', textDecoration:'none'}} >Internal Audit</Link>              <br />
              <Link className='mb-2' to="/footerdata" style={{color:'#8c8f92ff', textDecoration:'none'}} >Stock Audit</Link>              <br />
              <Link className='mb-2' to="/footerdata" style={{color:'#8c8f92ff', textDecoration:'none'}} >Loan Advisory</Link>              <br />
              <Link className='mb-2' to="/footerdata" style={{color:'#8c8f92ff', textDecoration:'none'}} >Insurance Advisory</Link>              <br />
              <Link className='mb-2' to="/footerdata" style={{color:'#8c8f92ff', textDecoration:'none'}} >Partnership & Compliance</Link>              <br />

            </ul>
          </div>

          {/* Map */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white">Find Us</h5>
            <div className="map-container mt-3 mb-3" style={{ width: '100%', height: '200px', position: 'relative' }}>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3829.1976687109386!2d80.4290536!3d16.3128412!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a7516149590d3%3A0x5f1494aa5eb6acff!2sKIRAN%20%26%20ASSOCIATES!5e0!3m2!1sen!2sin!4v1757165774595!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, cursor: 'pointer' }}
                allowFullScreen=""
                loading="lazy"
                onClick={() => window.open('https://maps.app.goo.gl/Go3UCCaPQvZwdMgm6', '_blank')}
              />
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-center text-white-50">
          <p>&copy; {new Date().getFullYear()} KIRAN & ASSOCIATES. All Rights Reserved.</p>
          <p>  Developed By BOdegaTechSOlutions  </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;