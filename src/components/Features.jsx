import '../styles/hero-features.css';

export default function Features() {
  const features = [
    {
      icon: '⚡',
      title: 'Quick Delivery',
      description: 'Get your furniture delivered within 24-48 hours in major cities.'
    },
    {
      icon: '💰',
      title: 'Affordable Pricing',
      description: 'Flexible payment plans starting from as low as ₹999 per month.'
    },
    {
      icon: '🔄',
      title: 'Easy Returns',
      description: 'No questions asked returns. We pick up at your doorstep.'
    },
    {
      icon: '✅',
      title: 'Quality Assured',
      description: 'Premium furniture with regular maintenance and upgrades.'
    },
    {
      icon: '🛡️',
      title: 'Damage Protection',
      description: 'Comprehensive insurance coverage included in every rental.'
    },
    {
      icon: '🎯',
      title: '24/7 Support',
      description: 'Dedicated customer support team always ready to help you.'
    }
  ];

  return (
    <section className="features-section section-spacing">
      <div className="container">
        <h2 className="section-heading">Why Choose FurnishHub?</h2>
        <p className="section-subheading">
          We make furnishing your space simple, affordable, and stress-free
        </p>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
