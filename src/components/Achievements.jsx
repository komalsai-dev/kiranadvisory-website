import React, { useEffect, useRef, useState } from 'react';

const achievementsData = [
  { year: '2020 - Present', title: 'Firm Established', description: 'KIRAN & ASSOCIATES was founded with a mission to simplify taxation for local businesses in Guntur.', logo: 'https://placehold.co/100x50/cccccc/000000?text=Logo1' },
  { year: '2020 - Present', title: '600+ Clients Milestone', description: 'Successfully served over 100 satisfied clients, establishing a strong reputation for reliability and expertise.', logo: 'https://placehold.co/100x50/cccccc/000000?text=Logo2' },
  { year: '2022 - Present', title: 'Expanded Service Portfolio', description: 'Added Company Incorporation and FSSAI licensing to our core services to meet growing client demand.', logo: 'https://placehold.co/100x50/cccccc/000000?text=Logo3' },
  { year: '2024 - Present', title: 'Recognized as Top Consultant', description: 'Awarded "Top Tax Consultancy Firm in Guntur" by the local Chamber of Commerce.', logo: 'https://placehold.co/100x50/cccccc/000000?text=Logo4' },
  { title: 'Professional Experience', description: ' 15+ Years of Professional Experience in taxation, compliance, and advisory services.', logo: 'https://placehold.co/100x50/cccccc/000000?text=Logo4' },
  { title: 'Client Satisfaction', description: 'Successfully served 500+ satisfied clients across multiple industries in India.', logo: 'https://placehold.co/100x50/cccccc/000000?text=Logo4' },
  { title: 'Corporate Experience', description: '12 years of corporate experience as a Taxation Manager in Software, Power & Agro Industries in Hyderabad.', logo: 'https://placehold.co/100x50/cccccc/000000?text=Logo4' },
  { title: 'Stood as Private Consultancy', description: '5+ years of independent consultancy as Proprietor of Kiran & Associates, Guntur.', logo: 'https://placehold.co/100x50/cccccc/000000?text=Logo4' },
  { title: 'Experienced in Our Services', description: '✅ Expertise in GST, Income Tax, Company Law, PF & ESI, Audits, Registrations, and Licenses.', logo: 'https://placehold.co/100x50/cccccc/000000?text=Logo4' },
  { title: 'Our Unique Identity ', description: ' ✅ Recognized for problem-solving skills in high-value tax issues for businesses and individuals.', logo: 'https://placehold.co/100x50/cccccc/000000?text=Logo4' },
  { title: 'Trusted Tax Advisor with Proven Compliance Excellence', description: '✅Built a reputation for trust, transparency, and timely compliance, becoming a preferred tax advisor in Guntur and beyond.', logo: 'https://placehold.co/100x50/cccccc/000000?text=Logo4' },
];

const Achievements = () => {
  const timelineRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    let scrollAmount = 0;
    const scrollStep = 0.70; // Slower scroll speed
    const scrollInterval = 40; // Slightly longer interval
    let intervalId;

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        if (!isAutoScrolling || userInteracted) return;
        
        const maxScroll = timeline.scrollHeight - timeline.clientHeight;
        
        if (scrollAmount >= maxScroll) {
          // Reset to top after reaching bottom
          setTimeout(() => {
            scrollAmount = 0;
            timeline.scrollTop = 0;
          }, 10000); // Wait 2 seconds at bottom
        } else {
          scrollAmount += scrollStep;
          timeline.scrollTop = scrollAmount;
        }
      }, scrollInterval);
    };

    // Mouse enter/leave handlers
    const handleMouseEnter = () => {
      setUserInteracted(true);
      setIsAutoScrolling(false);
    };

    const handleMouseLeave = () => {
      setTimeout(() => {
        setUserInteracted(false);
        setIsAutoScrolling(true);
        scrollAmount = timeline.scrollTop; // Resume from current position
      }, 3000); // Resume auto-scroll after 3 seconds
    };

    // Touch handlers for mobile
    const handleTouchStart = () => {
      setUserInteracted(true);
      setIsAutoScrolling(false);
    };

    const handleTouchEnd = () => {
      setTimeout(() => {
        setUserInteracted(false);
        setIsAutoScrolling(true);
        scrollAmount = timeline.scrollTop;
      }, 4000);
    };

    // Add event listeners
    timeline.addEventListener('mouseenter', handleMouseEnter);
    timeline.addEventListener('mouseleave', handleMouseLeave);
    timeline.addEventListener('touchstart', handleTouchStart);
    timeline.addEventListener('touchend', handleTouchEnd);

    // Start auto-scroll
    startAutoScroll();

    return () => {
      if (intervalId) clearInterval(intervalId);
      timeline.removeEventListener('mouseenter', handleMouseEnter);
      timeline.removeEventListener('mouseleave', handleMouseLeave);
      timeline.removeEventListener('touchstart', handleTouchStart);
      timeline.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isAutoScrolling, userInteracted]);

  return (
    <section id="achievements" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <p className="text-danger-custom fw-bold text-uppercase small-heading">My Success Path Journey</p>
          <h2 className="section-title">Milestones & Achievements</h2>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div
              ref={timelineRef}
              className="achievement-timeline"
              style={{
                maxHeight: '450px',
                overflowY: 'auto',
                scrollBehavior: 'smooth',
                paddingRight: '15px',
                scrollbarWidth: 'thin',
                scrollbarColor: '#0a192f #f1f1f1'
              }}
            >
              {achievementsData.map((item, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <p className="text-muted mb-1">{item.year}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="fw-bold text-primary-custom mb-0">{item.title}</h5>
                      {/* <img src={item.logo} alt={`${item.title} logo`} className="achievement-logo" /> */}
                    </div>
                    <p className="mt-2 text-secondary">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Scroll indicator */}
            <div className="text-center mt-3">
              <small className="text-muted">
                <i className="bi bi-mouse"></i> Hover to pause auto-scroll • Scroll to explore
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
