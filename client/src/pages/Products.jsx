import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ASSETS = {
  pvc: new URL('../assets/pvc.png', import.meta.url).toString(),
  wpvc: new URL('../assets/wpvc.png', import.meta.url).toString(),
  layer3: new URL('../assets/3layer.png', import.meta.url).toString(),
  gallery1: new URL('../assets/gallery-1.jpg', import.meta.url).toString(),
  sample1: new URL('../assets/sample_1.jpeg', import.meta.url).toString(),
  sample2: new URL('../assets/sample_2.jpeg', import.meta.url).toString(),
  sample3: new URL('../assets/sample_3.jpeg', import.meta.url).toString(),
  sample4: new URL('../assets/sample_4.jpeg', import.meta.url).toString(),
  sample5: new URL('../assets/sample_5.jpeg', import.meta.url).toString(),
  sample6: new URL('../assets/sample_6.jpeg', import.meta.url).toString(),
  sample7: new URL('../assets/sample_7.jpeg', import.meta.url).toString(),
  sample8: new URL('../assets/sample_8.jpeg', import.meta.url).toString()
}

function BulletList({ items }) {
  return (
    <ul className="products-bullets">
      {items.map((t, i) => (
        <li key={i}>{t}</li>
      ))}
    </ul>
  )
}

function ProductSection({
  id,
  eyebrow,
  title,
  lead,
  image,
  features,
  useCases,
  whyChoose
}) {
  return (
    <section className="products-block" id={id}>
      <div className="products-block__top">
        <div className="products-block__media" aria-hidden="true">
          <img src={image} alt={title} />
        </div>

        <div className="products-block__content">
          <div className="eyebrow">{eyebrow}</div>
          <h3 className="products-title">{title}</h3>
          <p className="lead products-lead">{lead}</p>

          <div className="products-quick-cta">
            <Link className="btn btn--hero" to="/contact">Get a Quote</Link>
            <Link className="btn btn--ghost" to={`/products#${id}`}>Jump to Details</Link>
          </div>
        </div>
      </div>

      <div className="products-columns">
        <div className="products-col">
          <h4>Key Features</h4>
          <BulletList items={features} />
        </div>

        <div className="products-col">
          <h4>Best Use For</h4>
          <BulletList items={useCases} />
        </div>

        <div className="products-col">
          <h4>Why Choose RS Interiors</h4>
          <BulletList items={whyChoose} />
        </div>
      </div>

      <div className="products-divider" />
    </section>
  )
}

export default function Products() {
  return (
    <section className="page">
      <motion.header
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="products-hero"
      >
        <h2>PVC & WPC Products</h2>
        <p className="lead">
          Full, in-depth product details for <b>PVC</b>, <b>WPVC</b>, and <b>Demac 3-layer PVC</b>—with image galleries and
          selection guidance.
        </p>
      </motion.header>

      <nav className="products-sticky-nav" aria-label="Product sections">
        <a href="#pvc">PVC</a>
        <a href="#wpvc">WPVC</a>
        <a href="#demac-3layer">Demac 3-layer PVC</a>
      </nav>

      <ProductSection
        id="pvc"
        eyebrow="PVC • Cupboards & Interiors"
        title="PVC Cupboards"
        lead="Glossy, water-resistant and easy-clean PVC interiors designed for everyday kitchens and bathrooms."
        image={ASSETS.pvc}
        features={[
          'Water-resistant surface for high-moisture areas',
          'Low-maintenance & easy-to-wipe cleaning',
          'Available in multiple finishes and glossy textures',
          'Strong, lightweight panels for modular cabinetry'
        ]}
        useCases={[
          'Kitchen cabinets & utility cabinets',
          'Wardrobes for humid rooms',
          'Bathroom vanity cabinets'
        ]}
        whyChoose={[
          'Smooth finish with a premium look',
          'Practical for busy households (quick cleaning)',
          'Reliable performance when sealed and installed correctly'
        ]}
      />

      <ProductSection
        id="wpvc"
        eyebrow="WPVC • Premium Durability"
        title="WPVC Wardrobes"
        lead="WPVC offers enhanced durability with premium textures—built for long-term strength and a premium appearance."
        image={ASSETS.wpvc}
        features={[
          'Improved durability for daily wear & tear',
          'Premium surface textures and refined finishing options',
          'Better resistance against moisture exposure',
          'Ideal for wardrobe doors, shelves and storage systems'
        ]}
        useCases={[
          'Bedroom wardrobes & storage units',
          'Kids room cabinetry',
          'Home offices and utility storage'
        ]}
        whyChoose={[
          'A stronger feel with a more luxurious finish',
          'Stays visually appealing for longer',
          'Designed to handle everyday usage'
        ]}
      />

      <section className="products-block" id="demac-3layer">
        <div className="products-block__top">
          <div className="products-block__media" aria-hidden="true">
            <img src={ASSETS.layer3} alt="Demac 3-layer PVC" />
          </div>

          <div className="products-block__content">
            <div className="eyebrow">Demac • 3-Layer PVC</div>
            <h3 className="products-title">Demac 3-Layer PVC Cabinets</h3>
            <p className="lead products-lead">
              Superior stability, strength and long-term performance—ideal for high-usage cabinetry.
            </p>

            <div className="products-quick-cta">
              <Link className="btn btn--hero" to="/contact">Get a Quote</Link>
              <Link className="btn btn--ghost" to={`/products#demac-3layer`}>View Gallery</Link>
            </div>
          </div>
        </div>

        <div className="products-columns">
          <div className="products-col">
            <h4>Key Features</h4>
            <BulletList
              items={[
                '3-layer PVC construction for enhanced rigidity and panel stability',
                'Strong structure for long-lasting performance',
                'Reduces warping with proper installation',
                'Excellent choice for kitchens and heavy-duty storage'
              ]}
            />
          </div>

          <div className="products-col">
            <h4>Best Use For</h4>
            <BulletList
              items={[
                'Main kitchen cabinets & heavy-duty storage',
                'Custom modular interiors',
                'Large wardrobes and multi-shelf units'
              ]}
            />
          </div>

          <div className="products-col">
            <h4>Why Choose RS Interiors</h4>
            <BulletList
              items={[
                'Built for strength, not just looks',
                'Great for families and high usage homes',
                'A long-term value option'
              ]}
            />
          </div>
        </div>

        <div className="products-divider" />

        <div className="products-gallery">
          <div className="products-gallery__head">
            <h4>Demac 3-layer PVC Image Gallery </h4>
            <p className="products-gallery__sub">
              Hover to pause. Use this to understand finishes, doors, and typical cabinet layouts.
            </p>
          </div>

          <div className="auto-scroll-gallery" role="region" aria-label="Demac 3-layer PVC gallery">
            <div className="auto-scroll-track">
              {[
                { src: ASSETS.gallery1, alt: 'Demac 3-layer PVC gallery 1' },
                { src: ASSETS.sample1, alt: 'Demac 3-layer PVC sample 1' },
                { src: ASSETS.sample2, alt: 'Demac 3-layer PVC sample 2' },
                { src: ASSETS.sample3, alt: 'Demac 3-layer PVC sample 3' },
                { src: ASSETS.sample4, alt: 'Demac 3-layer PVC sample 4' },
                { src: ASSETS.sample5, alt: 'Demac 3-layer PVC sample 5' },
                { src: ASSETS.sample6, alt: 'Demac 3-layer PVC sample 6' },
                { src: ASSETS.sample7, alt: 'Demac 3-layer PVC sample 7' },
                { src: ASSETS.sample8, alt: 'Demac 3-layer PVC sample 8' },
                { src: ASSETS.layer3, alt: 'Demac 3-layer PVC logo' }
              ].map((img, idx) => (
                <motion.div
                  key={`${img.src}-${idx}`}
                  className="auto-scroll-item"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.25 }}
                >
                  <img src={img.src} alt={img.alt} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="products-inpage-notes">
          <h4>Selection Guidance (Quick)</h4>
          <div className="products-notes-grid">
            <div className="note-tile">
              <b>Choose PVC</b>
              <p>For glossy, easy-clean interiors—best for moderate usage and high-moisture areas.</p>
            </div>
            <div className="note-tile">
              <b>Choose WPVC</b>
              <p>For longer-lasting wardrobe surfaces with refined textures and daily durability.</p>
            </div>
            <div className="note-tile">
              <b>Choose Demac 3-layer PVC</b>
              <p>For heavy usage kitchens and large cabinets—designed to reduce warping and improve stability.</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

