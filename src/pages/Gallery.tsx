import { useNavigate } from 'react-router-dom';
import '../styles/Gallery.css';

export default function Gallery() {
  const navigate = useNavigate();

  const collection = [
    {
      id: 1,
      title: "Elegant Rings Collection",
      description: "Delicate rings with intricate silver detailing and timeless designs",
      image: "💍",
      type: "rings"
    },
    {
      id: 2,
      title: "Pearl Necklaces",
      description: "Lustrous pearls set in premium silver with elegant simplicity",
      image: "💎",
      type: "necklaces"
    },
    {
      id: 3,
      title: "Statement Earrings",
      description: "Bold designs for the confident modern woman who stands out",
      image: "✨",
      type: "earrings"
    },
    {
      id: 4,
      title: "Luxury Bracelets",
      description: "Elegant wrist jewelry with timeless appeal and premium craftsmanship",
      image: "🎀",
      type: "bracelets"
    }
  ];

  return (
    <main className="gallery">
      <section className="gallery-hero">
        <div className="gallery-hero-content">
          <h1>Our Collection</h1>
          <p className="subtitle">Discover the Stellar Collection</p>
        </div>
      </section>

      <section className="gallery-content">
        <div className="gallery-container">
          <div className="gallery-grid">
            {collection.map((item) => (
              <div key={item.id} className="gallery-item">
                <div className="item-image">{item.image}</div>
                <div className="item-info">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <button className="view-btn-1" onClick={() => navigate(`/collection/${item.type}`)}>View More</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <section className="custom-section">
          <h2>Custom Creations</h2>
          <p>
            Have a vision? We specialize in creating custom pieces tailored to your unique style. 
            Contact us to discuss your dream design.
          </p>
          <button className="contact-btn" onClick={() => navigate('/contact')}>Start Your Custom Design</button>
        </section>
      </section>
    </main>
  );
}
