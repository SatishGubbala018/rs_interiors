import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'

const cards = [
  {
    key: 'aim',
    title: 'Our Aim',
    icon: '🎯',
    description:
      'Design PVC/WPC interiors that look premium, feel solid, and last—made for everyday use and modern homes.',
  },
  {
    key: 'ontime',
    title: 'On Time',
    icon: '⏱️',
    description:
      'We plan execution carefully so your project moves forward with clear timelines and fewer delays.',
  },
  {
    key: 'quality',
    title: 'Quality First',
    icon: '✅',
    description:
      'From material selection to finishing, we focus on details that improve durability, water resistance, and appearance.',
  },
  {
    key: 'satisfaction',
    title: 'Client Satisfaction',
    icon: '🤝',
    description:
      'Transparent communication, careful installation, and responsive support—so you’re confident in the final result.',
  },
  {
    key: 'safety',
    title: 'Safety & Clean Work',
    icon: '🛡️',
    description:
      'Polite workmanship with proper handling, protection, and clean finishing—project sites stay manageable.',
  },
  {
    key: 'transparency',
    title: 'Clear Process',
    icon: '🧭',
    description:
      'Understandable steps, realistic estimates, and updates throughout the build—no surprises.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 110, damping: 14, duration: 0.6 },
  },
}

export default function About() {
  const [ref, visible] = useReveal({ threshold: 0.12 })

  return (
    <>
      <Helmet>
        <title>About RS Interiors Hyderabad | PVC & WPVC Interior Design Experts</title>
        <meta name="description" content="RS Interiors is the best interior designer in Hyderabad with 10+ years experience in PVC interiors, WPVC wardrobes, modular kitchens, and luxury home interiors. 500+ projects, affordable prices, trusted by homeowners across Telangana." />
        <meta name="keywords" content="About RS Interiors Hyderabad, Best Interior Designers Hyderabad, Interior Designers Hyderabad, PVC Interiors Hyderabad, WPVC Interiors Hyderabad, RS Interiors Hyderabad, Modular Kitchen Hyderabad" />
        <link rel="canonical" href="https://www.rsinteriordesigns.in/about" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rsinteriordesigns.in/about" />
        <meta property="og:title" content="About RS Interiors Hyderabad | PVC & WPVC Interior Design Experts" />
        <meta property="og:description" content="Learn about RS Interiors, the best interior designer in Hyderabad for PVC cupboards, modular kitchens, wardrobes, and complete home interior solutions." />
        <meta property="og:image" content="https://www.rsinteriordesigns.in/src/assets/logo.png" />
        <meta property="og:site_name" content="RS Interiors" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.rsinteriordesigns.in/about" />
        <meta name="twitter:title" content="About RS Interiors Hyderabad | PVC & WPVC Interior Design Experts" />
        <meta name="twitter:description" content="Learn about RS Interiors, the best interior designer in Hyderabad for PVC cupboards, modular kitchens, wardrobes, and complete home interior solutions." />
        <meta name="twitter:image" content="https://www.rsinteriordesigns.in/src/assets/logo.png" />
      </Helmet>
      
      <section className="page about-page">
      <div
        className="page-banner"
        style={{
          backgroundImage:
            "url(https://s3-blog.homelane.com/design-ideas/wp-content/uploads/2026/04/14072945/Japandi-bedroom-pvc-panel-wall-design-1024x574.jpg)",
        }}
      >
        <motion.div
          className="banner-overlay"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <div className="eyebrow eyebrow--alt">About RS Interiors</div>
          <h1 className="overlay-title small">Best Interior Designers Hyderabad | PVC & WPVC Interior Experts</h1>
          <p className="overlay-sub">
            RS Interiors is the leading interior design company in Hyderabad for PVC cupboards, WPVC wardrobes, and modular kitchens. We build modern PVC & WPC cupboard interiors that deliver durability, aesthetics, and peace of mind.
          </p>
        </motion.div>
      </div>

      <div className="page">
          <div className="section-head">
            <h2 className="services-title">Why RS Interiors is the <span className="seo-keyword">Best Interior Designer in Hyderabad</span></h2>
            <p className="lead">
              Every project is driven by the same core values—so you get the right design, delivered on time with strong quality. RS Interiors is the affordable interior designer in Hyderabad for <span className="seo-keyword">PVC cupboards</span>, <span className="seo-keyword">WPC wardrobes</span>, and modular kitchens. Explore our <Link to="/products" className="content-link"><span className="seo-keyword">PVC cupboards</span></Link>, <Link to="/products/wpc" className="content-link"><span className="seo-keyword">WPC wardrobes</span></Link>, and <Link to="/projects" className="content-link">completed projects</Link>.
            </p>
          </div>

        <motion.div
          ref={ref}
          className="cards about-cards"
          variants={containerVariants}
          initial="hidden"
          animate={visible ? 'visible' : 'hidden'}
        >
          {cards.map((c, idx) => (
            <motion.article
              key={c.key}
              className="card about-card"
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            >
              <div className="about-card__inner">
                <div className="about-card__icon" aria-hidden="true">
                  {c.icon}
                </div>

                <h3>{c.title}</h3>
                <p>{c.description}</p>

                <div className="about-card__shine" aria-hidden="true" style={{ animationDelay: `${idx * 70}ms` }} />
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="about-cta" style={{ marginTop: 22 }}>
          <motion.a
            href="/contact"
            className="btn btn--hero"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.2 }}
          >
            Talk to Us
          </motion.a>

          <motion.a
            href="/projects"
            className="btn btn--hero btn--ghost"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.2 }}
          >
            See Projects
          </motion.a>
        </div>
      </div>
    </section>
    </>
  )
}

