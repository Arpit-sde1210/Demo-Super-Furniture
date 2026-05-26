import { useState } from 'react';
import '../styles/products-pricing.css';

export default function Products() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Queen Size Bed',
      category: 'Beds',
      image: '🛏️',
      price: 1299,
      period: '/month',
      description: 'Premium queen size bed with storage',
      features: ['Storage', 'Wooden'],
      badge: 'Popular'
    },
    {
      id: 2,
      name: 'Executive Study Desk',
      category: 'Desks',
      image: '📚',
      price: 799,
      period: '/month',
      description: 'Perfect for work from home setup',
      features: ['Spacious', 'Cable management'],
      badge: 'New'
    },
    {
      id: 3,
      name: 'Modern L-Shaped Sofa',
      category: 'Sofas',
      image: '🛋️',
      price: 2499,
      period: '/month',
      description: 'Comfortable 3-seater sofa with cushions',
      features: ['Fabric', '3-seater'],
      badge: 'Premium'
    },
    {
      id: 4,
      name: 'Wooden Dining Table',
      category: 'Dining',
      image: '🍽️',
      price: 1599,
      period: '/month',
      description: '6-seater dining table with chairs',
      features: ['Wooden', '6-seater'],
      badge: null
    },
    {
      id: 5,
      name: 'Office Chair Ergonomic',
      category: 'Chairs',
      image: '🪑',
      price: 599,
      period: '/month',
      description: 'High-back ergonomic office chair',
      features: ['Adjustable', 'Mesh back'],
      badge: 'Popular'
    },
    {
      id: 6,
      name: 'Wardrobe Cabinet',
      category: 'Storage',
      image: '🚪',
      price: 899,
      period: '/month',
      description: 'Spacious 3-door wardrobe',
      features: ['3-door', 'Mirror'],
      badge: null
    },
    {
      id: 7,
      name: 'Corner Bookshelf',
      category: 'Storage',
      image: '📚',
      price: 499,
      period: '/month',
      description: 'Compact corner bookshelf',
      features: ['Compact', 'Space-saving'],
      badge: 'New'
    },
    {
      id: 8,
      name: 'Nightstand Wooden',
      category: 'Bedroom',
      image: '🛏️',
      price: 299,
      period: '/month',
      description: 'Solid wood nightstand with drawer',
      features: ['Wooden', 'Drawer'],
      badge: null
    }
  ];

  const filters = ['all', 'Beds', 'Desks', 'Sofas', 'Dining', 'Chairs', 'Storage'];

  const filteredProducts = selectedFilter === 'all'
    ? products
    : products.filter(p => p.category === selectedFilter);

  return (
    <section className="products-section section-spacing" id="products">
      <div className="container">
        <h2 className="section-heading">Our Furniture Collection</h2>
        <p className="section-subheading">
          Handpicked furniture pieces perfect for students and professionals
        </p>

        <div className="filters">
          {filters.map(filter => (
            <button
              key={filter}
              className={`filter-btn ${selectedFilter === filter ? 'active' : ''}`}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                {product.image}
                {product.badge && <span className="product-badge">{product.badge}</span>}
              </div>
              <div className="product-info">
                <div className="product-name">{product.name}</div>
                <div className="product-category">{product.category}</div>
                <p className="product-description">{product.description}</p>
                <div className="product-specs">
                  {product.features.map((feature, i) => (
                    <span key={i}>✓ {feature}</span>
                  ))}
                </div>
                <div className="product-pricing">
                  <div className="price-info">
                    <span className="price-label">Starting from</span>
                    <div>
                      <span className="price-value">₹{product.price}</span>
                      <span className="price-period">{product.period}</span>
                    </div>
                  </div>
                </div>
                <div className="product-actions">
                  <button className="btn-small btn-add">Add to Cart</button>
                  <button className="btn-small btn-compare">Compare</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
