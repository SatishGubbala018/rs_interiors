import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function AdditionalServices() {
  const heroImg = new URL('../assets/gallery-1.jpg', import.meta.url).toString()

  return (
    <>
      <Helmet>
        <title>Additional Services | RS Interiors - Wallpaper, Curtains, Invisible Grills & Safety Doors Hyderabad</title>
        <meta name="description" content="RS Interiors offers additional services including wallpaper installation, curtains and blinds, invisible grills, metal sliding safety doors, wood flooring, and pleated sliding mesh in Hyderabad and Telangana." />
        <link rel="canonical" href="https://www.rsinteriordesigns.in/services" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rsinteriordesigns.in/services" />
        <meta property="og:title" content="Additional Services | RS Interiors - Wallpaper, Curtains, Invisible Grills & Safety Doors Hyderabad" />
        <meta property="og:description" content="RS Interiors offers additional services including wallpaper installation, curtains and blinds, invisible grills, metal sliding safety doors, wood flooring, and pleated sliding mesh in Hyderabad." />
        <meta property="og:image" content="https://www.rsinteriordesigns.in/src/assets/logo.png" />
        <meta property="og:site_name" content="RS Interiors" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.rsinteriordesigns.in/services" />
        <meta name="twitter:title" content="Additional Services | RS Interiors - Wallpaper, Curtains, Invisible Grills & Safety Doors Hyderabad" />
        <meta name="twitter:description" content="RS Interiors offers additional services including wallpaper installation, curtains and blinds, invisible grills, metal sliding safety doors in Hyderabad." />
        <meta name="twitter:image" content="https://www.rsinteriordesigns.in/src/assets/logo.png" />
      </Helmet>
      
      <section className="page page-additional-services">
        <div className="page-banner" style={{ backgroundImage: `url(${heroImg})` }}>
          <div className="banner-overlay">
            <div className="eyebrow eyebrow--alt">Interior Solutions</div>
            <h1 className="overlay-title">Premium Finishes & Safety Upgrades</h1>
            <p className="overlay-sub">
              Pleated sliding mesh, metal sliding safety doors, invisible grills, wood flooring, curtains & blinds,
              and wallpaper—crafted for a clean look, better ventilation, and long-lasting performance.
            </p>
            <div className="banner-cta">
              <Link to="/contact" className="btn btn--hero">
                Get a Free Consultation
              </Link>
            </div>
          </div>
        </div>

        <div className="page">
          <div className="section-head">
            <div className="eyebrow eyebrow--alt">Our Services</div>
            <h2 className="services-title accent5-heading">Additional Services we Install</h2>
          <p className="lead services-lead">
            Modern solutions designed to match interiors while keeping your space secure, comfortable, and stylish. Looking for custom interiors? Explore our <Link to="/products" className="content-link">PVC cupboards</Link> and <Link to="/products/wpvc" className="content-link">WPVC wardrobes</Link>.
          </p>
          </div>

          <div className="services-grid additional-services-grid">
            <div className="service-card">
              <div className="service-media">
                <img
                  src={new URL('../assets/Pleated_sliding_mesh.png', import.meta.url).toString()}
                  alt="Pleated sliding mesh"
                  loading="lazy"
                />
              </div>
              <div className="service-icon">Pleated Mesh</div>
              <h3>Pleated Sliding Mesh</h3>
              <p>Flexible, space-saving mesh systems that improve airflow while keeping insects out.</p>
            </div>

            <div className="service-card">
              <div className="service-media">
                <img
                  src={new URL('../assets/metal_sliding_doors.png', import.meta.url).toString()}
                  alt="Metal sliding safety doors"
                  loading="lazy"
                />
              </div>
              <div className="service-icon">Safety Doors</div>
              <h3>Metal Sliding Safety Doors</h3>
              <p>Strong sliding safety doors for secure entry with smooth, everyday operation.</p>
            </div>

            <div className="service-card">
              <div className="service-media">
                <img
                  src={new URL('../assets/Invisible_grills.png', import.meta.url).toString()}
                  alt="Invisible grill systems"
                  loading="lazy"
                />
              </div>
              <div className="service-icon">Invisible Grills</div>
              <h3>Invisible Grill Systems</h3>
              <p>Minimal, sleek grill designs that blend with your windows and maintain clear views.</p>
            </div>

            <div className="service-card">
              <div className="service-media">
                <img
                  src={new URL('../assets/wood_flooring.png', import.meta.url).toString()}
                  alt="Wood flooring"
                  loading="lazy"
                />
              </div>
              <div className="service-icon">Wood Flooring</div>
              <h3>Wood Flooring</h3>
              <p>Warm, refined flooring options for a premium finish and comfortable indoor feel.</p>
            </div>

            <div className="service-card">
              <div className="service-media">
                <img
                  src={new URL('../assets/curtains_and_blinds.png', import.meta.url).toString()}
                  alt="Curtains and blinds"
                  loading="lazy"
                />
              </div>
              <div className="service-icon">Curtains & Blinds</div>
              <h3>Curtains & Blinds</h3>
              <p>Light control and privacy solutions that complement your décor and mood.</p>
            </div>

            <div className="service-card">
              <div className="service-media">
                <img
                  src={new URL('../assets/wallpaper.png', import.meta.url).toString()}
                  alt="Wallpaper finishes"
                  loading="lazy"
                />
              </div>
              <div className="service-icon">Wallpaper</div>
              <h3>Wallpaper Finishes</h3>
              <p>Stylish wallpaper designs to elevate walls with color, texture, and character.</p>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}