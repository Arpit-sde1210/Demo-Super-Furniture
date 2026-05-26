import { useState } from 'react';
import '../styles/navbar.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveLink(sectionId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-logo">
            <div className="navbar-logo-icon">FH</div>
            FurnishHub
          </div>

          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li className={`nav-link ${activeLink === 'home' ? 'active' : ''}`} onClick={() => scrollToSection('home')}>
              Home
            </li>
            <li className={`nav-link ${activeLink === 'categories' ? 'active' : ''}`} onClick={() => scrollToSection('categories')}>
              Categories
            </li>
            <li className={`nav-link ${activeLink === 'products' ? 'active' : ''}`} onClick={() => scrollToSection('products')}>
              Products
            </li>
            <li className={`nav-link ${activeLink === 'pricing' ? 'active' : ''}`} onClick={() => scrollToSection('pricing')}>
              Pricing
            </li>
            <li className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`} onClick={() => scrollToSection('contact')}>
              Contact
            </li>
            <li>
              <button className="nav-cta" onClick={() => scrollToSection('products')}>
                Browse Now
              </button>
            </li>
          </ul>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </nav>
  );
}
