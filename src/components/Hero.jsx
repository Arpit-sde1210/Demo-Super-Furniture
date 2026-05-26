import '../styles/hero-features.css';

export default function Hero() {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Premium Furniture Rentals for Students & Professionals</h1>
            <p>
              Make your space feel like home without the commitment. Rent premium furniture with flexible plans, free delivery, and hassle-free returns.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={scrollToProducts}>
                Explore Products
              </button>
              <button className="btn-secondary">
                Learn More
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-box">
              📦 Beautiful Furniture Ready to Rent
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
