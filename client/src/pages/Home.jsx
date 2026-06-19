import React, { useEffect, useMemo, useState } from 'react'
import useReveal from '../hooks/useReveal'
import DMACSection from '../components/DMACSection'
import { Link } from 'react-router-dom'
import { FaClock, FaHandshake, FaHammer, FaShieldAlt } from 'react-icons/fa'


function ClockIcon() {
  return <FaClock aria-hidden="true" />
}

function HandshakeIcon() {
  return <FaHandshake aria-hidden="true" />
}

function ConstructionIcon() {
  return <FaHammer aria-hidden="true" />
}

function ShieldIcon() {
  return <FaShieldAlt aria-hidden="true" />
}

export default function Home(){

  const [bannerRef, bannerVisible] = useReveal({ threshold: 0.12 })

  const [heroReady, setHeroReady] = useState(false)

  useEffect(() => {
    // trigger 3D intro once on initial page load
    const t = window.setTimeout(() => setHeroReady(true), 60)
    return () => window.clearTimeout(t)
  }, [])


  const [statsRef, statsVisible] = useReveal({ threshold: 0.15, rootMargin: '0px 0px -10% 0px' })


  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  const targets = useMemo(() => ({
    years: 10,
    customers: 100,
    installations: 500,
    warranty: 10,
  }), [])

  const [values, setValues] = useState({
    years: 0,
    customers: 0,
    installations: 0,
    warranty: 0,
  })

  useEffect(() => {
    if (!statsVisible) return

    if (prefersReducedMotion) {
      setValues({
        years: targets.years,
        customers: targets.customers,
        installations: targets.installations,
        warranty: targets.warranty,
      })
      return
    }

    const durationMs = 1500

    const start = performance.now()

    let rafId = null
    const tick = (now) => {
      const elapsed = now - start
      const t = Math.min(1, elapsed / durationMs)

      const easeOutCubic = 1 - Math.pow(1 - t, 3)

      setValues({
        years: Math.round(targets.years * easeOutCubic),
        customers: Math.round(targets.customers * easeOutCubic),
        installations: Math.round(targets.installations * easeOutCubic),
        warranty: Math.round(targets.warranty * easeOutCubic),
      })

      if (t < 1) rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [statsVisible, prefersReducedMotion, targets])


  const whatsappNumber = '+919640400030'
  const whatsappHref = `https://wa.me/${whatsappNumber}`

  return (
    <section className="hero">
      <div className="whatsapp-fab-wrap" aria-hidden={false}>
        <a
          className="whatsapp-fab"
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          aria-label={`Chat on WhatsApp: ${whatsappNumber}`}
        >
          <span className="whatsapp-fab__pulse" aria-hidden="true" />
          <span className="whatsapp-fab__icon" aria-hidden="true">
            {/* Cleaner WhatsApp icon mark (optimized for small size) */}
            <svg width="26" height="26" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none">
              <path
                fill="currentColor"
                d="M16 2C8.28 2 2 8.23 2 15.9c0 2.6.7 5.08 2.04 7.2L2 30l7.02-1.98A13.95 13.95 0 0 0 16 29.8c7.72 0 14-6.23 14-13.9C30 8.23 23.72 2 16 2Zm7.76 18.9c-.3.88-1.18 1.43-2.06 1.53-.5.05-1.16.1-1.87-.09-.46-.12-1.03-.28-1.76-.67-2.6-1.33-4.3-3.78-4.44-3.97-.2-.25-1.02-1.26-1.02-2.42 0-1.22.65-1.83.88-2.08.22-.24.52-.34.72-.34.18 0 .36.01.52.01.17 0 .41-.07.63.5.25.64.83 1.99.9 2.14.08.15.13.33.02.53-.11.2-.16.33-.31.51-.15.17-.33.37-.45.49-.14.14-.28.3-.12.58.16.28.7 1.15 1.5 1.86 1.03.9 1.9 1.15 2.18 1.28.27.13.43.11.58-.05.18-.2.63-.73.8-.99.17-.26.35-.22.58-.14.22.08 1.39.65 1.64.77.25.12.42.18.48.28.07.1.07.57-.23 1.46Z"
              />
            </svg>
          </span>
          <span className="whatsapp-fab__label" aria-hidden="true">WhatsApp</span>
        </a>
      </div>

      <div className="hero-banner hero-banner--split" style={{ backgroundImage: `url(https://images.pexels.com/photos/3935692/pexels-photo-3935692.jpeg?auto=compress&cs=tinysrgb&w=1600)` }}>
        <div ref={bannerRef} className={`banner-overlay reveal-up banner-overlay--split ${bannerVisible ? 'show' : ''}`}>
          <div className="hero-split">
            <div className="hero-split-left">
              <div className="eyebrow">• DEMCA 3 LAYER • WPVC • PVC</div>
              <h1 className="overlay-title hero-title">
                Demac 3-LAYER Cupboards (Premium Strength)
              </h1>
              <p className="overlay-sub hero-sub">
                Demac 3-layer system designed for superior stability, strength and long-term performance.
              </p>
              <div className="banner-cta">
                <a href="/products" className="btn btn--hero">Explore Products</a>
              </div>
            </div>

            <div className="hero-split-right">
<img
                className={`hero-wpvc-img ${heroReady ? 'hero-wpvc-img--ready' : ''}`}
                src="https://windowfab.in/products/kitchen.webp"
                alt="WPVC/WPC cabinets"
              />
            </div>
          </div>
        </div>
      </div>

      

    

      <div className="services" aria-label="What we provide">
        <div className="page">
          <div className="section-head">
            <div className="eyebrow eyebrow--alt ">Our Services</div>
<h2 className="services-title accent5-heading">What we provide</h2>
            <p className="lead services-lead">Design, manufacture and installation of modern PVC, WPVC &amp; 3 Layer interiors.</p>
          </div>

          <div className="services-grid">
            <Link to="/products/3layer" className="service-card service-card--demac service-card--link" aria-label="Read details about Demac 3-layer cabinets">
              <div className="service-media">
                <img
                  src={new URL('../assets/3layer.png', import.meta.url).toString()}
                  alt="Demac 3-layer kitchen cabinets"
                />
              </div>  
              <div className="service-icon">Demac • 3 Layer</div>
              <h3>Demac 3-Layer Cabinets</h3>
              <p>3-layer PVC system for superior rigidity, stability and long-term performance.</p>
            </Link>

            <Link to="/products/wpvc" className="service-card service-card--link" aria-label="Read details about WPVC wardrobes">
              <div className="service-media">
                <img
                  src={new URL('../assets/wpvc.png', import.meta.url).toString()}
                  alt="WPVC wardrobes"
                />
              </div>
              <div className="service-icon">WPVC</div>
              <h3>WPVC Wardrobes</h3>
              <p>Enhanced durability with premium textures and finishes.</p>
            </Link>

            <Link to="/products/pvc" className="service-card service-card--link" aria-label="Read details about PVC cupboards">
              <div className="service-media">
                <img
                  src={new URL('../assets/pvc.png', import.meta.url).toString()}
                  alt="PVC cupboards"
                />
              </div>
              <div className="service-icon">PVC</div>
              <h3>PVC Cupboards</h3>
              <p>Water-resistant, glossy and easy-clean PVC interiors.</p>
            </Link>
          </div>

        <DMACSection />

         

          {/* Projects Gallery + Satisfied Customers */}
          <div className="gallery-sections">
           {/*   <div className="gallery-card">
              <div className="section-head section-head--tight">
                <div className="eyebrow eyebrow--alt">Projects Gallery</div>
                <h2 className="services-title services-title--small">Our best work, always</h2>
                <p className="lead services-lead services-lead--small">A quick look at recent installations &amp; finishes.</p>
              </div>

              <div className="auto-scroll-gallery" aria-label="Projects gallery auto-scrolling images">
                <div className="auto-scroll-track" aria-hidden="false">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div className="auto-scroll-item" key={`g-${i}`}>
                      <img
                        src={new URL('../assets/gallery-1.jpg', import.meta.url).toString()}
                        alt={`Project gallery image ${i + 1}`}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            */}
            <div className="gallery-card gallery-card--alt">
              <div className="section-head section-head--tight">
                <div className="eyebrow eyebrow--alt">Satisfied Customers</div>
<h2 className="services-title services-title--small accent5-heading">Loved by homeowners</h2>

                <p className="lead services-lead services-lead--small">Trusted finishes and water-resistant performance.</p>
              </div>


              <div className="auto-scroll-gallery" aria-label="Satisfied customers auto-scrolling images">

                <div className="auto-scroll-track" aria-hidden="false">
                  {Array.from({ length: 12 }).map((_, i) => {
                    const customerImages = [
                      new URL('../assets/sample_3.jpeg', import.meta.url).toString(),
                      new URL('../assets/sample_4.jpeg', import.meta.url).toString(),
                      new URL('../assets/sample_5.jpeg', import.meta.url).toString(),
                      new URL('../assets/sample_6.jpeg', import.meta.url).toString(),
                      new URL('../assets/sample_7.jpeg', import.meta.url).toString(),
                      new URL('../assets/sample_8.jpeg', import.meta.url).toString(),
                    ]

                    const src = customerImages[i % customerImages.length]


                    return (
                      <div className="auto-scroll-item auto-scroll-item--testimonial" key={`c-${i}`}>
                        <img
                          src={src}
                          alt={`Satisfied customer visual ${i + 1}`}
                          loading="lazy"
                        />

                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      <div className="stats-section" ref={statsRef}>
        <div className="stats-row" aria-label="RS Interiors company highlights">
          <div className={`stats-tile ${statsVisible ? 'is-visible' : ''}`}>
            <div className="stats-icon" aria-hidden="true">
              <ClockIcon />
            </div>
            <div className="stats-value" aria-live="polite">{values.years}</div>
            <div className="stats-label">Years of service</div>
          </div>

          <div className={`stats-tile ${statsVisible ? 'is-visible' : ''}`}>
            <div className="stats-icon" aria-hidden="true">
              <HandshakeIcon />
            </div>
            <div className="stats-value" aria-live="polite">{values.customers} +</div>
            <div className="stats-label">Satisfied customers</div>
          </div>

          <div className={`stats-tile ${statsVisible ? 'is-visible' : ''}`}>
            <div className="stats-icon" aria-hidden="true">
              <ConstructionIcon />
            </div>
            <div className="stats-value" aria-live="polite">{values.installations} +</div>
            <div className="stats-label"> Successful installations</div>
          </div>

          <div className={`stats-tile ${statsVisible ? 'is-visible' : ''}`}>
            <div className="stats-icon" aria-hidden="true">
              <ShieldIcon />
            </div>
            <div className="stats-value" aria-live="polite">{values.warranty}</div>
            <div className="stats-label">Years warranty</div>
          </div>
        </div>
      </div>

      <div className="location-section" aria-label="Office location">

        <div className="page">
          <div className="section-head">
            <div className="eyebrow eyebrow--alt">Office Location</div>
<h2 className="services-title accent5-heading">Find us on the map</h2>

            <p className="lead services-lead">Visit our office for consultations and project discussions.</p>
          </div>

          <div className="location-card">
            <div className="location-card__header">
              <div>
                <h3 className="location-card__title">RS Interiors • Office</h3>
                <div className="location-card__meta">Latitude: 17.5746 • Longitude: 78.4237</div>
              </div>
              <a
                className="location-card__link"
                href="https://www.google.com/maps?q=17.5746,78.4237"
                target="_blank"
                rel="noreferrer"
              >
                View in Google Maps
              </a>
            </div>

            <div className="location-map" role="region" aria-label="Google map">
              <iframe
                title="Office location map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=17.5746,78.4237&z=14&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}





