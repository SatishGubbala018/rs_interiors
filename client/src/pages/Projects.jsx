import React, { useState, useMemo, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
      duration: 0.6
    }
  }
}

// Enhanced video assets with categories and locations
const VIDEO_ASSETS = [
  ...Array.from({ length: 11 }).map((_, i) => {
    const n = i + 1
    return {
      id: `interior_${n}`,
      title: `Interior Gallery ${n}`,
      description: `Interior gallery video ${n}`,
      category: 'Modular Kitchens',
      location: 'Hyderabad, Telangana',
      src: new URL(`../assets/videos/interior_gallery${n}.mp4`, import.meta.url).toString(),
      featured: n <= 3
    }
  }),
  {
    id: 'v1',
    title: 'PVC Cupboard Showcase',
    description: 'Premium PVC & WPC cabinetry installation with Demac 3-layer finish',
    category: 'PVC Cupboards',
    location: 'Banjara Hills, Hyderabad',
    src: new URL('../assets/videos/sample_video_1.mp4', import.meta.url).toString(),
    featured: true
  },
  {
    id: 'v2',
    title: 'Premium Finish Walkthrough',
    description: 'Detailed finish and texture showcase of luxury interior',
    category: 'PVC Cupboards',
    location: 'Jubilee Hills, Hyderabad',
    src: new URL('../assets/videos/sample_video_2.mp4', import.meta.url).toString(),
    featured: true
  },
  {
    id: 'v3',
    title: 'Modular Kitchen Installation',
    description: 'Complete modular kitchen setup with modern fittings',
    category: 'Modular Kitchens',
    location: 'Hitech City, Hyderabad',
    src: new URL('../assets/videos/sample_video_3.mp4', import.meta.url).toString(),
    featured: true
  },
  {
    id: 'v4',
    title: 'Wardrobe & Storage Solutions',
    description: 'Custom wardrobe design with optimized storage',
    category: 'Wardrobes',
    location: 'Gachibowli, Hyderabad',
    src: new URL('../assets/videos/sample_video_4.mp4', import.meta.url).toString(),
    featured: false
  },
  {
    id: 'v5',
    title: 'Cabinet Detailing',
    description: 'Premium cabinet edges and detailing showcase',
    category: 'PVC Cupboards',
    location: 'Madhapur, Hyderabad',
    src: new URL('../assets/videos/sample_video_5.mp4', import.meta.url).toString(),
    featured: false
  },
  {
    id: 'v6',
    title: 'Kitchen Layout & Hardware',
    description: 'Modern kitchen layout with premium hardware',
    category: 'Modular Kitchens',
    location: 'Kondapur, Hyderabad',
    src: new URL('../assets/videos/sample_video_6.mp4', import.meta.url).toString(),
    featured: false
  },
  {
    id: 'v7',
    title: 'Premium Finish Showcase',
    description: 'Luxury finish showcase with attention to detail',
    category: 'PVC Cupboards',
    location: 'Secunderabad, Hyderabad',
    src: new URL('../assets/videos/sample_video_7.mp4', import.meta.url).toString(),
    featured: false
  },
  {
    id: 'v8',
    title: 'Final Quality Walkthrough',
    description: 'Complete quality inspection and final reveal',
    category: 'Modular Kitchens',
    location: 'Ameerpet, Hyderabad',
    src: new URL('../assets/videos/sample_video_8.mp4', import.meta.url).toString(),
    featured: false
  }
]

// Statistics data
const STATS = [
  {
    icon: '🏆',
    value: 500,
    suffix: '+',
    label: 'Projects Completed'
  },
  {
    icon: '⭐',
    value: 15,
    suffix: '+',
    label: 'Years Experience'
  },
  {
    icon: '😊',
    value: 98,
    suffix: '%',
    label: 'Customer Satisfaction'
  },
  {
    icon: '🏠',
    value: 50,
    suffix: 'K+',
    label: 'Happy Homes'
  }
]

// Filter categories
const FILTERS = [
  'All',
  'PVC Cupboards',
  'Modular Kitchens',
  'Wardrobes',
  'Wallpaper',
  'Curtains',
  'Invisible Grills',
  'Safety Doors'
]

// Featured projects
const FEATURED_PROJECTS = [
  {
    id: 'f1',
    title: 'Luxury Villa Interior',
    description: 'Complete interior design for a 4BHK luxury villa with premium PVC cupboards and modular kitchen',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'PVC Cupboards'
  },
  {
    id: 'f2',
    title: 'Modern Apartment Kitchen',
    description: 'Contemporary modular kitchen with smart storage solutions',
    image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Modular Kitchens'
  },
  {
    id: 'f3',
    title: 'Walk-in Wardrobe',
    description: 'Spacious walk-in wardrobe with custom organization',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Wardrobes'
  }
]

// Before & After projects
const COMPARISON_PROJECTS = [
  {
    id: 'c1',
    title: 'Kitchen Renovation',
    description: 'Complete kitchen transformation with modern cabinets',
    before: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600',
    after: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'c2',
    title: 'Wardrobe Upgrade',
    description: 'Old wardrobe replaced with premium sliding door wardrobe',
    before: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600',
    after: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'c3',
    title: 'Living Room Makeover',
    description: 'Complete living room interior with custom storage',
    before: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600',
    after: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
]

// Testimonials
const TESTIMONIALS = [
  {
    id: 't1',
    name: 'Rajesh Kumar',
    role: 'Homeowner, Banjara Hills',
    text: 'Exceptional quality and craftsmanship! The PVC cupboards they installed are exactly what we wanted. Professional team and timely delivery.',
    stars: 5
  },
  {
    id: 't2',
    name: 'Priya Sharma',
    role: 'Interior Designer',
    text: 'I have been working with RS Interiors for multiple projects. Their attention to detail and quality of work is outstanding. Highly recommended!',
    stars: 5
  },
  {
    id: 't3',
    name: 'Venkat Reddy',
    role: 'Business Owner',
    text: 'The modular kitchen they designed for our home is perfect. Great functionality with beautiful aesthetics. Worth every penny!',
    stars: 5
  }
]

// Animated counter hook
function useCounter(end, duration = 2000) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    let startTime
    let animationFrame
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }
    
    animationFrame = requestAnimationFrame(animate)
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration])
  
  return count
}

export default function Projects() {
  const [listRef, listVisible] = useReveal({ threshold: 0.12 })
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [isStatsVisible, setIsStatsVisible] = useState(false)

  const videos = useMemo(() => VIDEO_ASSETS, [])

  // Filter videos based on category
  const filteredVideos = useMemo(() => {
    if (activeFilter === 'All') return videos
    return videos.filter(video => video.category === activeFilter)
  }, [videos, activeFilter])

  // Intersection observer for stats animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsStatsVisible(true)
          }
        })
      },
      { threshold: 0.5 }
    )

    const statsSection = document.querySelector('.stats-container')
    if (statsSection) {
      observer.observe(statsSection)
    }

    return () => observer.disconnect()
  }, [])

  const openVideoModal = (video) => {
    setSelectedVideo(video)
    document.body.style.overflow = 'hidden'
  }

  const closeVideoModal = () => {
    setSelectedVideo(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <>
      <Helmet>
        <title>Our Projects | Best Interior Designers Hyderabad - RS Interiors Portfolio</title>
        <meta name="description" content="Explore 500+ interior design projects by RS Interiors, the best interior designer in Hyderabad. View our portfolio of PVC cupboards, WPVC wardrobes, modular kitchens, and luxury home interiors. 98% customer satisfaction across Telangana." />
        <link rel="canonical" href="https://www.rsinteriordesigns.in/projects" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rsinteriordesigns.in/projects" />
        <meta property="og:title" content="Our Projects | Best Interior Designers Hyderabad - RS Interiors Portfolio" />
        <meta property="og:description" content="Explore 500+ interior design projects by RS Interiors, the best interior designer in Hyderabad. PVC cupboards, WPVC wardrobes, modular kitchens, and luxury home interiors." />
        <meta property="og:image" content="https://www.rsinteriordesigns.in/src/assets/logo.png" />
        <meta property="og:site_name" content="RS Interiors" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.rsinteriordesigns.in/projects" />
        <meta name="twitter:title" content="Our Projects | Best Interior Designers Hyderabad - RS Interiors Portfolio" />
        <meta name="twitter:description" content="Explore 500+ interior design projects by RS Interiors, the best interior designer in Hyderabad. PVC cupboards, WPVC wardrobes, modular kitchens." />
        <meta name="twitter:image" content="https://www.rsinteriordesigns.in/src/assets/logo.png" />
      </Helmet>

      <section className="page projects-page">
        {/* Premium Hero Section */}
        <div 
          className="projects-hero"
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600)`
          }}
        >
          <div className="projects-hero-content">
            <motion.h1 
              className="projects-hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
            >
              Our Premium Projects
            </motion.h1>
          
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="projects-filters">
          {FILTERS.map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          ref={listRef}
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={listVisible ? 'visible' : 'hidden'}
        >
          {filteredVideos.map((v, idx) => (
            <motion.div
              key={v.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -12 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="project-card-media">
                <video
                  src={v.src}
                  muted
                  preload="metadata"
                  playsInline
                  poster="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                />
                <span className="project-card-badge">{v.category}</span>
                <button 
                  className="project-card-play"
                  onClick={() => openVideoModal(v)}
                  aria-label={`Play ${v.title}`}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" />
                  </svg>
                </button>
              </div>

              <div className="project-card-body">
                <h3 className="project-card-title">{v.title}</h3>
                <p className="project-card-description">{v.description}</p>
                <div className="project-card-location">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {v.location}
                </div>
                <button 
                  className="project-card-btn"
                  onClick={() => openVideoModal(v)}
                >
                  View Project
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Projects Section */}
        <section className="featured-section">
          <div className="featured-container">
            <div className="section-header">
              <span className="section-eyebrow">Portfolio Highlights</span>
              <h2 className="section-title">Featured Projects</h2>
              <p className="section-subtitle">
                Discover our most celebrated interior design projects that showcase excellence in craftsmanship and design
              </p>
            </div>

            <div className="projects-grid">
              {FEATURED_PROJECTS.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="project-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="project-card-media">
                    <img src={project.image} alt={project.title} loading="lazy" />
                    <span className="project-card-badge">{project.category}</span>
                  </div>
                  <div className="project-card-body">
                    <h3 className="project-card-title">{project.title}</h3>
                    <p className="project-card-description">{project.description}</p>
                    <button className="project-card-btn">
                      View Details
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Before & After Comparison */}
        <section className="comparison-section">
          <div className="comparison-container">
            <div className="section-header">
              <span className="section-eyebrow">Transformations</span>
              <h2 className="section-title">Before & After</h2>
              <p className="section-subtitle">
                Witness the incredible transformations we bring to every space
              </p>
            </div>

            <div className="comparison-grid">
              {COMPARISON_PROJECTS.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="comparison-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="comparison-slider">
                    <div 
                      className="comparison-before"
                      style={{ backgroundImage: `url(${project.before})` }}
                    >
                      <span className="comparison-label comparison-label--before">Before</span>
                    </div>
                    <div 
                      className="comparison-after"
                      style={{ backgroundImage: `url(${project.after})` }}
                    >
                      <span className="comparison-label comparison-label--after">After</span>
                    </div>
                    <div className="comparison-handle"></div>
                  </div>
                  <div className="comparison-card-body">
                    <h3 className="comparison-card-title">{project.title}</h3>
                    <p className="comparison-card-desc">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="testimonials-section">
          <div className="testimonials-container">
            <div className="section-header">
              <span className="section-eyebrow">Testimonials</span>
              <h2 className="section-title">What Our Clients Say</h2>
              <p className="section-subtitle">
                Real feedback from real customers who trusted us with their spaces
              </p>
            </div>

            <div className="testimonials-grid">
              {TESTIMONIALS.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="testimonial-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="testimonial-stars">
                    {'★'.repeat(testimonial.stars)}
                  </div>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="testimonial-info">
                      <h4 className="testimonial-name">{testimonial.name}</h4>
                      <p className="testimonial-role">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium CTA Section */}
        <section className="cta-section">
          <div className="cta-container">
            <motion.h2 
              className="cta-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Space?
            </motion.h2>
            <motion.p 
              className="cta-subtitle"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Let's discuss your project and create something extraordinary together. 
              Get a free consultation and quote today!
            </motion.p>
            <motion.div 
              className="cta-buttons"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <a href="tel:+919876543210" className="cta-btn cta-btn--primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call Us Now
              </a>
              <a 
                href="https://wa.me/919876543210?text=Hi%20RS%20Interiors,%20I'm%20interested%20in%20your%20interior%20design%20services" 
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn cta-btn--secondary"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </motion.div>
          </div>
        </section>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="video-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeVideoModal}
          >
            <motion.div
              className="video-modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="video-modal-close"
                onClick={closeVideoModal}
                aria-label="Close video"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
              <video
                src={selectedVideo.src}
                controls
                autoPlay
                playsInline
              >
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// Stat Card Component
function StatCard({ stat, isVisible }) {
  const count = useCounter(stat.value, 2000)
  
  return (
    <motion.div
      className="stat-card"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className="stat-icon">{stat.icon}</div>
      <h3 className="stat-value">
        {count}{stat.suffix}
      </h3>
      <p className="stat-label">{stat.label}</p>
    </motion.div>
  )
}