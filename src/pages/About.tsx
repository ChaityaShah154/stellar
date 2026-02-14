import '../styles/About.css';
import BrandHistory from '../components/BrandHistory';

export default function About() {
  return (
    <main className="about">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Stellar</h1>
          <p className="tagline">Where Tradition Meets Innovation</p>
        </div>
      </section>

      <section className="about-content">
        <div className="about-container">
          <div className="about-section">
            <h2>Our Story</h2>
            <p>
              Stellar jewels are the trendsetters for premium silver jewelry. Founded in 2001 as 
              a jewelry and silver manufacturer, Stellar was born from a passion for exquisite craftsmanship 
              and timeless design.
            </p>
            <p>
              Founder Pankaj Kodnani, the Director, has made Stellar grow over the years from a small 
              artisanal studio into an extremely creative and innovative business, bringing it to its present 
              position as a leader within the luxury jewelry sector.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Craft</h2>
            <p>
              We create our own distinctive jewelry collections, each piece a testament to our commitment 
              to quality and artistry. Beyond our signature lines, we also create exclusive collections for 
              prominent international brands, helping them express their vision through our exceptional 
              craftsmanship.
            </p>
            <p>
              Every piece that bears the Stellar name is more than just jewelry—it's a reflection of our 
              dedication to excellence, sustainability, and the celebration of individual style.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Values</h2>
            <ul className="values-list">
              <li><span className="check">✓</span> Exceptional Quality - Premium sterling silver and finest materials</li>
              <li><span className="check">✓</span> Ethical Craftsmanship - Responsible sourcing and fair labor practices</li>
              <li><span className="check">✓</span> Innovative Design - Blending contemporary trends with timeless elegance</li>
              <li><span className="check">✓</span> Customer Satisfaction - Personal service and lasting relationships</li>
              <li><span className="check">✓</span> Sustainability - Environmental responsibility in every creation</li>
            </ul>
          </div>
        </div>
      </section>

      <BrandHistory />
    </main>
  );
}
