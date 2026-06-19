import React from 'react'
import { Link } from 'react-router-dom'

const brochureUrl = new URL('../assets/brochure-demac-multi-Board.pdf', import.meta.url).toString()
const bgImage = new URL('../assets/dmac_broucher.png', import.meta.url).toString()

export default function DMACSection() {
  return (
    <section className="dmac-section">
      <div className="dmac-hero" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="dmac-overlay">
          <div className="dmac-content">
            <div className="eyebrow eyebrow--alt">• DEMAC</div>
            <h2 className="overlay-title">Demac 3-Layer Brochure</h2>
            <p className="lead">Premium 3-layer WPVC/PVC systems engineered for superior rigidity, water resistance and long-term performance. View product details and finishes, or download the brochure for full technical specifications.</p>

            <div className="dmac-actions">
              <a className="btn btn--hero" href={brochureUrl} target="_blank" rel="noreferrer">
                Download Brochure (PDF)
              </a>
              <Link className="btn btn--ghost" to="/products/3layer">
                View Demac Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


