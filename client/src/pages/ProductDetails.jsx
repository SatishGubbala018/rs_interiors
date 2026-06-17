import React from 'react'
import { useParams, Link } from 'react-router-dom'

const PRODUCT_MAP = {
  pvc: {
    title: 'PVC Cupboards',
    eyebrow: 'PVC',
    image: new URL('../assets/pvc.png', import.meta.url).toString(),
    lead: 'Glossy, water-resistant and easy-clean PVC interiors designed for everyday kitchens and bathrooms.',
    features: [
      'Water-resistant surface for high-moisture areas',
      'Low-maintenance & easy-to-wipe cleaning',
      'Available in multiple finishes and glossy textures',
      'Strong, lightweight panels for modular cabinetry'
    ],
    useCases: [
      'Kitchen cabinets & utility cabinets',
      'Wardrobes for humid rooms',
      'Bathroom vanity cabinets'
    ],
    whyChoose: [
      'Smooth finish with a premium look',
      'Practical for busy households (quick cleaning)',
      'Reliable performance when sealed and installed correctly'
    ]
  },
  wpvc: {
    title: 'WPVC Wardrobes',
    eyebrow: 'WPVC',
    image: new URL('../assets/wpvc.png', import.meta.url).toString(),
    lead: 'WPVC offers enhanced durability with premium textures—built for long-term strength and a premium appearance.',
    features: [
      'Improved durability for daily wear & tear',
      'Premium surface textures and refined finishing options',
      'Better resistance against moisture exposure',
      'Ideal for wardrobe doors, shelves and storage systems'
    ],
    useCases: [
      'Bedroom wardrobes & storage units',
      'Kids room cabinetry',
      'Home offices and utility storage'
    ],
    whyChoose: [
      'A stronger feel with a more luxurious finish',
      'Stays visually appealing for longer',
      'Designed to handle everyday usage'
    ]
  },
  '3layer': {
    title: 'Demac 3-Layer PVC Cabinets',
    eyebrow: 'Demac • 3-Layer PVC',
    image: new URL('../assets/3layer.png', import.meta.url).toString(),
    lead: 'Demac 3-layer PVC system for superior stability, strength and long-term performance—ideal for high-usage cabinetry.',
    features: [
      '3-layer PVC construction for enhanced rigidity and panel stability',
      'Strong structure for long-lasting performance',
      'Reduces warping with proper installation',
      'Excellent choice for kitchens and heavy-duty storage'
    ],
    useCases: [
      'Main kitchen cabinets & heavy-duty storage',
      'Custom modular interiors',
      'Large wardrobes and multi-shelf units'
    ],
    whyChoose: [
      'Built for strength, not just looks',
      'Great for families and high usage homes',
      'A long-term value option'
    ]
  }
}

function BulletList({ items }) {
  return (
    <ul>
      {items.map((t, i) => (
        <li key={i}>{t}</li>
      ))}
    </ul>
  )
}

export default function ProductDetails() {
  const { type } = useParams()
  const key = (type || '').toLowerCase()
  const data = PRODUCT_MAP[key] || PRODUCT_MAP['pvc']

  return (
    <section className="page product-details">
      <div className="product-hero">
        <div className="product-hero__media">
          <img src={data.image} alt={data.title} />
        </div>

        <div className="product-hero__content">
          <div className="eyebrow">{data.eyebrow} • Details</div>
          <h2 className="services-title product-title">{data.title}</h2>
          <p className="lead">{data.lead}</p>

          <div className="product-actions">
            <Link to="/products" className="btn btn--hero">
              View Products
            </Link>
            <Link to="/contact" className="btn btn--ghost">
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      <div className="product-sections">
        <div className="product-section">
          <h3>Key Features</h3>
          <BulletList items={data.features} />
        </div>

        <div className="product-section">
          <h3>Best Use For</h3>
          <BulletList items={data.useCases} />
        </div>

        <div className="product-section">
          <h3>Why Choose RS Interiors</h3>
          <BulletList items={data.whyChoose} />
        </div>
      </div>
    </section>
  )
}

