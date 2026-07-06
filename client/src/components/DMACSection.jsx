import React from 'react'
import { Link } from 'react-router-dom'

const brochureUrl = new URL('../assets/brochure-demac-multi-Board.pdf', import.meta.url).toString()
const brochureImage = new URL('../assets/dmac_broucher.png', import.meta.url).toString()

export default function DMACSection() {
  return (
    <section className="dmac-section-premium" aria-label="Demac 3-Layer Brochure">
      <div className="dmac-premium-container">
        {/* Decorative Elements */}
        <div className="dmac-decorative-top" aria-hidden="true" />
        <div className="dmac-decorative-bottom" aria-hidden="true" />
        
        <div className="dmac-premium-grid">
          {/* Left Content */}
          <div className="dmac-premium-content">
            <div className="dmac-premium-badge">
              <span className="dmac-badge-dot" aria-hidden="true">•</span>
              DEMAC 3-LAYER
            </div>
            
            <h2 className="dmac-premium-heading">
              Demac <span className="dmac-highlight">3-Layer</span> Brochure
            </h2>
            
            <p className="dmac-premium-description">
              RS Interiors is the best interior designer in Hyderabad for premium 3-layer WPC systems. Engineered for superior rigidity, water resistance and long-term performance. View product details and finishes, or download the brochure for full technical specifications. Perfect for modular kitchens and  interior designs.
            </p>
            
            <div className="dmac-premium-actions">
              <a 
                className="dmac-btn-primary" 
                href={brochureUrl} 
                target="_blank" 
                rel="noreferrer"
                aria-label="Download Demac 3-Layer Brochure PDF"
              >
                Download Brochure
              </a>
              <Link className="dmac-btn-secondary" to="/products/3layer">
                View Demac Products
              </Link>
            </div>

            <div className="dmac-premium-features">
              <div className="dmac-feature-item">
                <span className="dmac-feature-icon">✓</span>
                <span className="dmac-feature-text">Termite Proof</span>
              </div>
              <div className="dmac-feature-item">
                <span className="dmac-feature-icon">✓</span>
                <span className="dmac-feature-text">100% Water Proof</span>
              </div>
              <div className="dmac-feature-item">
                <span className="dmac-feature-icon">✓</span>
                <span className="dmac-feature-text">Non-Flammable</span>
              </div>
              <div className="dmac-feature-item">
                <span className="dmac-feature-icon">✓</span>
                <span className="dmac-feature-text">UV Resistant</span>
              </div>
              <div className="dmac-feature-item">
                <span className="dmac-feature-icon">✓</span>
                <span className="dmac-feature-text">Lead Free Non-Toxic</span>
              </div>
              <div className="dmac-feature-item">
                <span className="dmac-feature-icon">✓</span>
                <span className="dmac-feature-text">Anti-Fungal & Anti-Bacterial</span>
              </div>
              <div className="dmac-feature-item">
                <span className="dmac-feature-icon">✓</span>
                <span className="dmac-feature-text">No Shrinkage & Swelling</span>
              </div>
              <div className="dmac-feature-item">
                <span className="dmac-feature-icon">✓</span>
                <span className="dmac-feature-text">Corrosion Resistant</span>
              </div>
              <div className="dmac-feature-item">
                <span className="dmac-feature-icon">✓</span>
                <span className="dmac-feature-text">100% Recyclable</span>
              </div>
            </div>
          </div>

          {/* Right Side - Brochure Mockup */}
          <div className="dmac-premium-mockup">
            <div className="dmac-brochure-wrapper">
              <img
                src={brochureImage}
                alt="Demac 3 Layer Brochure"
                className="dmac-brochure-image"
                loading="lazy"
              />
              <div className="dmac-brochure-glow" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}