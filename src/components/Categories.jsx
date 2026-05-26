import '../styles/hero-features.css';

export default function Categories() {
  const categories = [
    { icon: '🛏️', name: 'Beds & Mattresses', count: '24 items' },
    { icon: '🪑', name: 'Chairs & Seating', count: '18 items' },
    { icon: '🛋️', name: 'Sofas & Couches', count: '15 items' },
    { icon: '🚪', name: 'Wardrobes', count: '12 items' },
    { icon: '🪑', name: 'Dining Tables', count: '10 items' },
    { icon: '📚', name: 'Study Desks', count: '14 items' },
    { icon: '🪞', name: 'Mirrors & Decor', count: '20 items' },
    { icon: '💡', name: 'Lighting', count: '16 items' }
  ];

  return (
    <section className="section-spacing" id="categories" style={{ background: 'white' }}>
      <div className="container">
        <h2 className="section-heading">Browse by Category</h2>
        <p className="section-subheading">
          Explore our wide range of furniture across different categories
        </p>
        
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <div className="category-image">{category.icon}</div>
              <div className="category-name">{category.name}</div>
              <div className="category-count">{category.count}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
