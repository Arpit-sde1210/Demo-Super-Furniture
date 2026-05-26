import '../styles/testimonials-faq-footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>FurnishHub</h3>
            <p style={{ marginBottom: '1rem', fontSize: '14px' }}>
              Premium furniture rentals for students and young professionals across India.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" title="Facebook">f</a>
              <a href="#" className="social-link" title="Twitter">𝕏</a>
              <a href="#" className="social-link" title="Instagram">📷</a>
              <a href="#" className="social-link" title="LinkedIn">in</a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Partners</a></li>
              <li><a href="#">Sustainability</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Support</h3>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Refund Policy</a></li>
              <li><a href="#">Contact Support</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Newsletter</h3>
            <p style={{ marginBottom: '1rem', fontSize: '14px' }}>
              Subscribe to get special offers and updates.
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input
                type="email"
                placeholder="Your email"
                style={{
                  flex: 1,
                  padding: '10px',
                  borderRadius: '6px',
                  border: 'none',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  color: 'white'
                }}
              />
              <button
                style={{
                  padding: '10px 16px',
                  borderRadius: '6px',
                  backgroundColor: '#f59e0b',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '600'
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 FurnishHub. All rights reserved.</p>
          <p>Made with ❤️ for students and young professionals</p>
        </div>
      </div>
    </footer>
  );
}
