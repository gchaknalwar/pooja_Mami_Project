import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <h2>What Our Users Say</h2>
      <div className="testimonial-container">
        <div className="testimonial-item">
          <p>"Online Banking made my life so much easier! I can manage all my finances with a few clicks."</p>
          <h3>– John Doe</h3>
        </div>
        <div className="testimonial-item">
          <p>"Their support team is fantastic and the security features give me peace of mind."</p>
          <h3>– Jane Smith</h3>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
