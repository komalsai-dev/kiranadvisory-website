import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import PreBirthday from '../assets/PreBirthday.jpg';
import maddm from '../assets/maddm.jpg';

const cardDetailsData = {
   
  'ravi-kiran': {
    image: PreBirthday,
    title: 'Garlapati Ravi Kiran',
    subtitle: '',
    detail: `Ravi Kiran Garlapati is a highly accomplished tax and compliance professional with over 17 years of rich experience in taxation, finance, and corporate advisory. He is a Semi-Qualified Chartered Accountant, Semi-Qualified Cost Accountant, and Semi-Qualified Company Secretary, holding additional academic credentials of B.Com and MBA.

With a strong foundation in direct and indirect taxation, Ravi Kiran has served as a Taxation Manager in reputed companies across Software, Power, and Agro Industries in Hyderabad for 12 years. This corporate exposure has given him deep insights into the practical challenges businesses face in taxation and compliance.

In the past 5+ years, he has been passionately building his own consultancy practice, providing end-to-end tax and compliance solutions to individuals, startups, and established enterprises across India. He specializes in solving high-value and complex tax issues with a client-centric approach.

Ravi Kiran is also the Designated Partner of Vedanth Advisory LLP, where he extends his professional expertise in taxation, audit, and compliance to a larger clientele.

What sets him apart is not just his technical knowledge, but his ability to simplify complex laws into practical solutions. He is known for his dedication, problem-solving mindset, and personalized client service that ensures compliance with peace of mind.`,
  },
  'other-card': {
    image: maddm,
    title: 'Garlapati Manasa Keerthi',
    subtitle: '',
    detail: `Garlapati Manasa Keerthi is a dedicated Finance and Compliance Professional with over 12 years of combined experience in teaching and tax advisory services. A Semi-Qualified Chartered Accountant, she blends strong academic foundations with hands-on expertise to deliver reliable and practical solutions.

For more than 7 years, she served as a faculty member at prestigious institutions like Sri Chaitanya CA College and Sri Medha V CA College, Vijayawada, where she taught Company Law and Auditing to aspiring Chartered Accountants. This teaching journey honed her ability to simplify complex concepts, making her guidance both insightful and easy to understand.

In the past 5 years, she has successfully transitioned into full-time Tax Advisory Services, specializing in Income Tax, GST, Company Law, and Compliance Management. Her unique dual background as an educator and practitioner enables her to provide advice that is both technically accurate and practically implementable.

Currently, she is also a Designated Partner of Vedanth Advisory LLP, where she extends her expertise to a diverse clientele, supporting businesses and individuals across India with compliance, advisory, and tax planning.`,
  },
};

const CardDetail = () => {
  const { id } = useParams();
  const Navigate = useNavigate();
  const card = cardDetailsData[id];
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[]);



  if (!card) {
    return (
      <div className="container py-5 ">
        <h3>Card not found</h3>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    );
  }

  return (
   <section className="py-5 bg-light mt-5">
  <div className="container">
    <Link to="/" className="btn btn-outline-primary mb-4">
      ← Back to Home
    </Link>
    <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
      <img
        src={card.image}
        alt={card.title}
        className="card-img-top img-fluid rounded-top"
        style={{ maxHeight: '400px', objectFit: 'cover' }}
      />
      <div className="card-body p-4">
        <h2 className="card-title fw-bold mb-3">
          {card.title} <span className="text-muted h5">{card.subtitle}</span>
        </h2>
        <div className="card-text fs-6 text-secondary" style={{ lineHeight: '1.8', whiteSpace: 'pre-line' }}>
          {card.detail}
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default CardDetail;
