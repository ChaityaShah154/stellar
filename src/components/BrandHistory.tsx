import '../styles/BrandHistory.css';

export default function BrandHistory() {
  const timeline = [
    {
      year: '2001',
      title: 'Stellar Founded',
      description: 'Stellar Jewelry is established as a small artisanal silver manufacturing studio with a passion for exceptional craftsmanship.'
    },
    {
      year: '2005',
      title: 'Market Expansion',
      description: 'Expanded our collection and established partnerships with international retailers, bringing Stellar jewelry to global markets.'
    },
    {
      year: '2010',
      title: 'Design Innovation',
      description: 'Introduced our signature collections, blending contemporary design with traditional silver craftsmanship techniques.'
    },
    {
      year: '2015',
      title: 'Industry Recognition',
      description: 'Honored with multiple awards for design excellence and sustainable jewelry manufacturing practices.'
    },
    {
      year: '2018',
      title: 'Custom Creations',
      description: 'Launched our bespoke design service, creating exclusive custom pieces for discerning clientele and luxury brands.'
    },
    {
      year: '2024',
      title: 'Global Leader',
      description: 'Recognized as a premier luxury silver jewelry brand, serving clients worldwide with over 20 years of excellence.'
    }
  ];

  return (
    <section className="brand-history">
      <div className="history-container">
        <div className="history-header">
          <h2>Our Stellar Journey</h2>
          <p className="history-subtitle">25 Years of Excellence in Silver Craftsmanship</p>
        </div>

        <div className="timeline">
          {timeline.map((event, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-year">{event.year}</div>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="heritage-section">
          <h3>Our Heritage</h3>
          <p>
            Since 2001, Stellar has been dedicated to creating exceptional silver jewelry that transcends trends and stands the test of time. 
            Under the visionary leadership of Founder and Director Pankaj Kodnani, we have evolved from a small studio into a globally 
            recognized luxury brand, without compromising the artisanal quality that defines us.
          </p>
          <p>
            Every piece that carries the Stellar name represents our commitment to innovation, sustainability, and the timeless beauty 
            of silver. We don't just create jewelry—we craft stories, celebrate individuality, and preserve the art of fine metalwork 
            for generations to come.
          </p>
        </div>
      </div>
    </section>
  );
}
