// src/components/Faq.jsx

import React from "react";

// NEW: Data for the FAQ section based on Garlapati Ravi Kiran's profile
const faqData = [
  {
    question: "How do you charge for your services?",
    answer:
      "Our fees depend on the type and complexity of the service. We maintain transparent pricing, and all charges will be shared with you before starting the work.",
  },
  {
    question: "Do you provide a fixed-price package or hourly billing?",
    answer:
      " For most compliance services (like GST, Income Tax filing, PF/ESI returns), we offer fixed-price packages. For specialized services (like audits and advisory), fees are decided based on scope of work.",
  },
  {
    question: "What are the modes of payment you accept?",
    answer:
      "We accept payments via UPI, bank transfer, net banking, debit/credit cards, and other digital modes for your convenience.",
  },
  {
    question: " Do I need to make advance payment?",
    answer:
      " Yes, we usually request an advance payment to initiate the process, with the balance payable upon completion of the service.",
  },
  {
    question: "Are there any hidden charges?",
    answer:
      'No. We follow a 100% transparent fee policy. All charges, including government fees (if applicable), will be communicated in advance.',
  },
  {
    question: "Do you provide GST invoice for the fees paid?",
    answer:
      'Yes, we issue a proper GST invoice for all payments made to us.',
  },
  {
    question: "Can I pay in installments for bigger services like audits or company registrations?",
    answer:
      'Yes, we allow installment-based payments for high-value services, subject to prior discussion and agreement.',
  },
  {
    question: " What if my service request gets cancelled midway?",
    answer:
      ' In case of cancellations, partial fees may be retained depending on the work already completed. The balance, if any, will be refunded as per our policy.',
  },
  {
    question: " How do you charge for your services?",
    answer:
      ' Our fees depend on the type and complexity of the service. We maintain transparent pricing, and all charges will be shared with you before starting the work.',
  },
  {
    question: " Do you provide a fixed-price package or hourly billing?",
    answer:
      ' For most compliance services (like GST, Income Tax filing, PF/ESI returns), we offer fixed-price packages. For specialized services (like audits and advisory), fees are decided based on scope of work.',
  },
  {
    question: " What are the modes of payment you accept?",
    answer:
      ' We accept payments via UPI, bank transfer, net banking, debit/credit cards, and other digital modes for your convenience.',
  },
  {
    question: " Do I need to make advance payment?",
    answer:
      ' Yes, we usually request an advance payment to initiate the process, with the balance payable upon completion of the service.',
  },
  {
    question: " Are there any hidden charges?",
    answer:
      '  No. We follow a 100% transparent fee policy. All charges, including government fees (if applicable), will be communicated in advance.',
  },
  {
    question: " Do you provide GST invoice for the fees paid?",
    answer:
      ' Yes, we issue a proper GST invoice for all payments made to us.',
  },
  {
    question: " Can I pay in installments for bigger services like audits or company registrations?",
    answer:
      'Yes, we allow installment-based payments for high-value services, subject to prior discussion and agreement.',
  },
  {
    question: " What if my service request gets cancelled midway?",
    answer:
      'In case of cancellations, partial fees may be retained depending on the work already completed. The balance, if any, will be refunded as per our policy.',
  },
];

const Faq = () => {
  return (
    <section id="faq" className="card-body">
      <div className="container mt-5">
        {/* Heading */}
        <div className="text-center mb-5">
          <p className="text-danger-custom fw-bold text-uppercase small-heading mb-1">
            FAQ's
          </p>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>

        {/* Accordion */}
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="accordion" id="faqAccordion">
              {faqData.map((item, index) => (
                <div className="accordion-item mb-3" key={index}>
                  <h2 className="accordion-header" id={`heading${index}`}>
                    <button
                      className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${index}`}
                      aria-expanded={index === 0 ? "true" : "false"}
                      aria-controls={`collapse${index}`}
                    >
                      {item.question}
                    </button>
                  </h2>
                  <div
                    id={`collapse${index}`}
                    className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                    aria-labelledby={`heading${index}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">{item.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;