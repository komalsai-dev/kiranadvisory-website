import React from 'react';
import save from '../assets/save.png';
import { Calculator, Building, FileEarmarkText, People, Award, Pen, CardHeading, Receipt, Shield } from 'react-bootstrap-icons';
import { GiBookAura, GiChecklist, GiPerson, GiShield, GiTeacher } from 'react-icons/gi';
import { Link, Navigate } from 'react-router-dom';

const iconsMap = {
  'bi-receipt':<Receipt className='fs-2 text-primary-custom'/>,
  'bi-calculator': <Calculator className="fs-2 text-primary-custom" />,
  'bi-building': <Building className="fs-2 text-primary-custom" />,
  'bi-file-earmark-text': <FileEarmarkText className="fs-2 text-primary-custom" />,
  'bi-people': <People className="fs-2 text-primary-custom" />,
  'bi-award': <Award className="fs-2 text-primary-custom" />,
  'bi-pen': <Pen className="fs-2 text-primary-custom" />,
  'bi-card-heading': <CardHeading className="fs-2 text-primary-custom" />,
  'bi-checklist':<GiChecklist className="fs-2 text-primary-custom"/>,
  'bi-shield':<GiShield className="fs-2 text-primary-custom"/>,
  'bi-person':<GiPerson className="fs-2 text-primary-custom"/>,
  'bi-teacher':<GiTeacher className="fs-2 text-primary-custom"/>,
  'bi-bookaura':<GiBookAura className="fs-2 text-primary-custom"/>,
};


const servicesData = [
  { icon: 'bi-bookaura',title:'Bookkeeping Services', description:'We provide accurate, systematic, and reliable bookkeeping services tailored for businesses of all sizes. From maintaining day-to-day financial records to preparing ledgers, reconciliations, cash flow statements, and reports, we help you stay compliant, and empowered to make financial decisions with confidence..'},
  { icon: 'bi-teacher',title:' Practical Coaching (Online & Offline)', description:'We offer practical, hands-on training in Income Tax Return filing, GST Returns, ROC compliances, and related laws. Designed for CA students and aspiring tax professionals, our coaching bridges the gap between theory and real-world practice.'},
  { icon: 'bi-receipt', title: 'GST Services', description: 'We assist businesses with GST registration, return filing, audits, and compliance. Our experts ensure accurate filing, input tax credit management, and timely submissions to avoid penalties.     '},
  { icon: 'bi-calculator', title: 'Income Tax', description: 'From individual tax returns to corporate tax planning, we handle all aspects of income tax. Our goal is to minimize your tax liability while ensuring 100% compliance with Indian tax laws.       '},
  { icon: 'bi-building', title: 'Company Law Services', description: 'We provide end-to-end support for company incorporation, ROC filings, annual compliances, and secretarial services as per the Companies Act, helping your business stay legally compliant.'},
  { icon: 'bi-file-earmark-text', title: 'TDS & TCS Services', description: 'Our team manages TDS/TCS registration, return filing, and compliance monitoring. We ensure accurate deductions and timely submissions to safeguard you from penalties and notices. '},
  { icon: 'bi-people', title: 'PF & ESI Services', description: 'We help organizations with PF & ESI registration, return filing, and employee compliance management, ensuring smooth payroll processes and statutory adherence.                                '},
  { icon: 'bi-award', title: 'Food License (FSSAI)', description: 'We simplify the process of obtaining an FSSAI license for your food business, meticulously handling all documentation, government approvals, and compliance procedure.                       '},
  { icon: 'bi-pen', title: 'Digital Signature  Services', description: 'We provide Class 2 & Class 3 Digital Signatures required for GST,Income Tax,MCA filings,and other government portals,ensuri-ng secure and authenticated online transactions.  '},
  { icon: 'bi-card-heading', title: 'Internal Audit', description: 'Our internal audit services strengthen your financial controls, detect irregularities, and improve operational efficiency, giving management valuable insights for decision-making          '},
  { icon: 'bi-card-heading', title: 'Stock Audit', description: 'We perform independent stock audits to verify inventory accuracy, reduce pilferage, and ensure proper valuation, helping you maintain transparency and efficiency in operations.               '},
  { icon: 'bi-checklist',title:'Loan Advisory', description:'Our team assists in selecting the right loan products, preparing project reports, and securing business, personal, and professional loans with ease and proper guidance.                           '},
  { icon: 'bi-shield',title:'Insurance Advisory ', description:'We offer unbiased advice on life, health, and general insurance policies,ensuring you and your business get the right coverage at the right cost.Our experts tailor solutions to fit your needs'},
  { icon: 'bi-person',title:'Partnership & Compliance', description:'We handle partnership firm registration, drafting of partnership deeds, and ongoing statutory compliances, ensuring legal recognition and hassle-free operations.      '},
 

];

const ServiceCard = ({ icon, title, description }) => (
  <div className="card h-100 text-center shadow-sm service-card border-0">
    <div className="card-body">
      <div className="icon-circle mx-auto mb-5 center">
        {icon === 'save' ? (
  <img src={save} alt={title} />
) : (
  iconsMap[icon] || null
)}
      </div>
      <div style={{
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
}}>
      <h5 className="card-title fw-bold" style={{ flexGrow: 2 }}>{title}</h5>
      <p className="card-text text-secondary" style={{ flexGrow: 2 }}>{description}</p>
      <Link to="/whatsapp" className="stretched-link"></Link>
      <button type="button" className="btn btn-custom-primary mx-5" style={{ display: 'flex', justifyContent: 'center' }}>
        Get Quote
      </button>
    </div>
  </div>
  </div>
);

const Services = () => {
  React.useEffect(() => {
    const canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', 'https://kiranassociates.com/services');
    document.head.appendChild(canonical);
    return () => {
      document.head.removeChild(canonical);
    };
  }, []);

  return (
    <section id="services" className="py-5 bg-light">
      <div className="container mb-5">
        <div className="text-center mb-5">
          <p className="text-danger-custom fw-bold text-uppercase small-heading mx-10">What We Do</p>
          <h2 className="section-title">Our Services</h2>
        </div>
      <div className="row">
        {servicesData.map((service, index) => (
          <div
            className="col-lg-3 col-md-6 mb-4"
            key={index}
            style={{ cursor: 'pointer' }}
            onClick={() => Navigate(`./WhatsappForm.jsx/${service.id}`)} // Uncomment if navigate is defined
          >
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
{/* Removed erroneous block using undefined 'index' */}

      </div>
    </section>
  );
};

export default Services;
