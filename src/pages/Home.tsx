import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import '../styles/Home.css';

export default function Home() {
  const navigate = useNavigate();
  return (
    <main className="home">
      <HeroSection />
      
      <section className="brand-story">
        <div className="brand-story-container">
          <div className="story-image-placeholder">
            <div className="image-placeholder">
              <p>Jewelry Image</p>
            </div>
          </div>
          <div className="story-text-content">
            <h2>Our Legacy</h2>
            <div className="story-content">
              <p className="intro-text">
                <span className="highlight">Stellar are the trendsetters for silver JEWELLERY.</span> Stellar was born in 2001 as a jewellery & silver manufacturer. Founder Pankaj Kodnani the Director, has made Stellar grow in time from a small industry to an extremely creative business and brought it to its present position as a leader within its sector.
              </p>
              <p className="main-text">
                We create our own jewellery collections & also create exclusive lines for big international Brands. Every piece represents our commitment to excellence, innovation, and the timeless beauty of silver craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="featured">
        <div className="featured-container">
          <h2>Our Collections</h2>
          <p className="subtitle">Explore Our Signature Pieces</p>
          <div className="jewelry-grid">
            <div className="jewelry-item item-1">
              <div className="jewelry-placeholder">
                <p>Jewelry Image 1</p>
                <button className="view-btn" onClick={() => navigate('/collection/rings')}>View Catalog</button>
              </div>
              <div className="item-label">Elegant Rings Collection</div>
            </div>
            <div className="jewelry-item item-2">
              <div className="jewelry-placeholder">
                <p>Jewelry Image 2</p>
                <button className="view-btn" onClick={() => navigate('/collection/necklaces')}>View Catalog</button>
              </div>
              <div className="item-label">Pearl Necklaces</div>
            </div>
            <div className="jewelry-item item-3">
              <div className="jewelry-placeholder">
                <p>Jewelry Image 3</p>
                <button className="view-btn" onClick={() => navigate('/collection/earrings')}>View Catalog</button>
              </div>
              <div className="item-label">Statement Earrings</div>
            </div>
            <div className="jewelry-item item-4">
              <div className="jewelry-placeholder">
                <p>Jewelry Image 4</p>
                <button className="view-btn" onClick={() => navigate('/collection/bracelets')}>View Catalog</button>
              </div>
              <div className="item-label">Luxury Bracelets</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
