import '../styles/testimonials-faq-footer.css';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Aditya Kumar',
      role: 'Engineering Student',
      initials: 'AK',
      rating: 5,
      text: 'FurnishHub made furnishing my college apartment so easy! Quick delivery and the furniture quality is excellent. Highly recommended!'
    },
    {
      name: 'Priya Sharma',
      role: 'Young Professional',
      initials: 'PS',
      rating: 5,
      text: 'As someone who relocates frequently for work, this service is a lifesaver. Flexible terms and no long-term commitments. Perfect!'
    },
    {
      name: 'Rajesh Patel',
      role: 'College Graduate',
      initials: 'RP',
      rating: 5,
      text: 'Affordable furniture without compromising on quality. The customer support team is always helpful. Definitely using them again!'
    },
    {
      name: 'Neha Singh',
      role: 'Design Student',
      initials: 'NS',
      rating: 5,
      text: 'Great selection of modern furniture at prices that don\'t break the bank. The process from browsing to delivery was seamless.'
    },
    {
      name: 'Vikram Gupta',
      role: 'Software Engineer',
      initials: 'VG',
      rating: 5,
      text: 'Working from home has never been more comfortable. Got the perfect desk and chair setup. Best decision ever!'
    },
    {
      name: 'Anjali Mehta',
      role: 'MBA Student',
      initials: 'AM',
      rating: 5,
      text: 'Loved the transparency in pricing and no hidden charges. The damage waiver gives peace of mind. Highly satisfied!'
    }
  ];

  return (
    <section className="testimonials-section section-spacing">
      <div className="container">
        <h2 className="section-heading">What Our Customers Say</h2>
        <p className="section-subheading">
          Join thousands of happy customers across India
        </p>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{testimonial.initials}</div>
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
