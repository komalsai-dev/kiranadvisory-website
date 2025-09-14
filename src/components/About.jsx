import React from 'react';
import { Link } from 'react-router-dom';
import maddm from '../assets/maddm.jpg'
import PreBirthday from '../assets/PreBirthday.jpg';

const cards = [
  {
    id: 'ravi-kiran',
    image: PreBirthday,
    title: 'Garlapati Ravi Kiran',
    subtitle: '',
    // shortDesc: ' I AM SEMI QUALIFIED CHARTERED ACCOUNTANT, SEMI QUALIFIED COST ACCOUNTANT, SEMI QUALIFIED COMPANY SECRETARY, APART FROM B.COM AND MBA FROM ANDHRA UNIVERSITY..',
  },
  {
    id: 'other-card',
    image: maddm,
    title: ' Garlapati Manasa Keerthi',
    subtitle: '',
    // shortDesc: 'I AM SEMI QUALIFIED CHARTERED ACCOUNTANT AND HAVING 7 YEARS OF EXPERIENCE IN TEACHING OF COMPANY LAW AND AUDITING IN SRI CHAITANYA, SRI MEDHA V VIJAYAWADA.',
  },
];

const About = () => {
  React.useEffect(() => {
    const canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', 'https://kiranassociates.com/about');
    document.head.appendChild(canonical);
    return () => {
      document.head.removeChild(canonical);
    };
  }, []);

  return (
    <section id="about" className="py-5">
      <div className="container" targert="_blank" >
        <div className="text-center mb-5">
          <p className="text-danger fw-bold text-uppercase small-heading">Our Commitment to Excellence</p>
          <h2 className="section-title">Empowering Businesses for Success</h2>
        </div>
        <div className="row gy-4">
          {cards.map(({ id, image, title, subtitle, shortDesc }) => (
            <div key={id} className="col-lg-6">
              <Link to={`/card/${id}`} className="text-decoration-none">
                <div className="card shadow-sm" style={{ cursor: 'pointer' }}>
                  <img src={image} alt={title}   style={{ maxHeight: '300px', objectFit: 'cover', width: '100%' }}
                    className="card-img-top img-fluid rounded mb-3" />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">
                      {title} <span className="text-muted h6">{subtitle}</span>
                    </h5>
                    <p className="card-text text-secondary">{shortDesc}</p>
                    <div className='d-flex justify-content-center'>
                      <button type="button" className="btn btn-custom-primary mx-3 mt-3" >Read more</button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
