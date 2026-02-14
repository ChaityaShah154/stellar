import { useParams, useNavigate } from 'react-router-dom';
import '../styles/CollectionDetail.css';

export default function CollectionDetail() {
  const { type }: any = useParams();
  const navigate = useNavigate();

  const collections: { [key: string]: any } = {
    rings: {
      title: 'Elegant Rings Collection',
      description: 'Discover our exquisite collection of sterling silver rings',
      items: [
        { id: 1, name: 'Classic Solitaire', price: '₹5,999', image: '💍' },
        { id: 2, name: 'Twisted Band Ring', price: '₹7,499', image: '💍' },
        { id: 3, name: 'Gemstone Ring', price: '₹9,999', image: '💍' },
        { id: 4, name: 'Filigree Ring', price: '₹8,499', image: '💍' },
        { id: 5, name: 'Statement Ring', price: '₹6,999', image: '💍' },
        { id: 6, name: 'Minimalist Ring', price: '₹4,999', image: '💍' }
      ]
    },
    necklaces: {
      title: 'Pearl Necklaces',
      description: 'Elegant pearl necklaces in premium silver settings',
      items: [
        { id: 1, name: 'Classic Pearl Pendant', price: '₹12,999', image: '💎' },
        { id: 2, name: 'Multi-Pearl Strand', price: '₹18,999', image: '💎' },
        { id: 3, name: 'Pearl Choker', price: '₹8,999', image: '💎' },
        { id: 4, name: 'Long Pearl Chain', price: '₹14,999', image: '💎' },
        { id: 5, name: 'Pearl Cluster', price: '₹16,999', image: '💎' },
        { id: 6, name: 'Layered Pearls', price: '₹19,999', image: '💎' }
      ]
    },
    earrings: {
      title: 'Statement Earrings',
      description: 'Bold and elegant earring designs for every occasion',
      items: [
        { id: 1, name: 'Drop Earrings', price: '₹6,999', image: '✨' },
        { id: 2, name: 'Hoop Earrings', price: '₹5,499', image: '✨' },
        { id: 3, name: 'Chandelier Earrings', price: '₹9,999', image: '✨' },
        { id: 4, name: 'Stud Earrings', price: '₹4,999', image: '✨' },
        { id: 5, name: 'Gemstone Earrings', price: '₹8,499', image: '✨' },
        { id: 6, name: 'Tassel Earrings', price: '₹7,499', image: '✨' }
      ]
    },
    bracelets: {
      title: 'Luxury Bracelets',
      description: 'Timeless bracelet designs crafted with precision',
      items: [
        { id: 1, name: 'Silver Bangle', price: '₹9,999', image: '🎀' },
        { id: 2, name: 'Beaded Bracelet', price: '₹7,999', image: '🎀' },
        { id: 3, name: 'Link Bracelet', price: '₹11,999', image: '🎀' },
        { id: 4, name: 'Charm Bracelet', price: '₹8,999', image: '🎀' },
        { id: 5, name: 'Tennis Bracelet', price: '₹15,999', image: '🎀' },
        { id: 6, name: 'Cuff Bracelet', price: '₹10,999', image: '🎀' }
      ]
    }
  };

  const collection = collections[type || ''] || collections.rings;

  return (
    <main className="collection-detail">
      <section className="detail-hero">
        <div className="detail-hero-content">
          <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
          <h1>{collection.title}</h1>
          <p className="detail-subtitle">{collection.description}</p>
        </div>
      </section>

      <section className="detail-content">
        <div className="detail-container">
          <div className="items-grid">
            {collection.items.map((item: any) => (
              <div key={item.id} className="detail-item">
                <div className="detail-item-image">{item.image}</div>
                <div className="detail-item-info">
                  <h3>{item.name}</h3>
                  <p className="price">{item.price}</p>
                  <button className="add-btn">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
