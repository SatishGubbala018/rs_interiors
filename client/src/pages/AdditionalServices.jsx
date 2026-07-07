import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function AdditionalServices() {
  const heroImg = new URL('../assets/gallery-1.jpg', import.meta.url).toString()

  const services = [
    {
      img: new URL('../assets/Pleated_sliding_mesh.png', import.meta.url).toString(),
      icon: 'Pleated Mesh',
      title: 'Pleated Sliding Mesh',
      desc: 'Flexible, space-saving mesh systems that improve airflow while keeping insects out.'
    },
    {
      img: new URL('../assets/metal_sliding_doors.png', import.meta.url).toString(),
      icon: 'Safety Doors',
      title: 'Metal Sliding Safety Doors',
      desc: 'Strong sliding safety doors for secure entry with smooth, everyday operation.'
    },
    {
      img: new URL('../assets/Invisible_grills.png', import.meta.url).toString(),
      icon: 'Invisible Grills',
      title: 'Invisible Grill Systems',
      desc: 'Minimal, sleek grill designs that blend with your windows and maintain clear views.'
    },
    {
      img: new URL('../assets/wood_flooring.png', import.meta.url).toString(),
      icon: 'Wood Flooring',
      title: 'Wood Flooring',
      desc: 'Warm, refined flooring options for a premium finish and comfortable indoor feel.'
    },
    {
      img: new URL('../assets/curtains_and_blinds.png', import.meta.url).toString(),
      icon: 'Curtains & Blinds',
      title: 'Curtains & Blinds',
      desc: 'Light control and privacy solutions that complement your décor and mood.'
    },
    

    // Added per request
    {
      img: new URL('../assets/upvc_doors.png', import.meta.url).toString(),
      icon: 'UPVC Doors',
      title: 'UPVC Doors',
      desc: 'Durable UPVC door systems with excellent insulation, low maintenance, and long-lasting performance.'
    },
    {
      img: new URL('../assets/aluminium_systems.png', import.meta.url).toString(),
      icon: 'Aluminium Systems',
      title: 'Aluminium Systems',
      desc: 'Premium aluminium windows and partitions designed for smooth operation and modern aesthetics.'
    },
    {
      img: new URL('../assets/windows_sales.png', import.meta.url).toString(),
      icon: 'Windows Sales',
      title: 'Windows Sales & Services',
      desc: 'Expert guidance, sales, and installation support for the right window solutions for your space.'
    },
    {
      img: new URL('../assets/wallpaper.png', import.meta.url).toString(),
      icon: 'Wallpaper',
      title: 'Wallpaper Finishes',
      desc: 'Stylish wallpaper designs to elevate walls with color, texture, and character.'
    },
  ]

  return (
    <>
      <Helmet>
        <title>Interior Design Services Hyderabad | RS Interiors PVC & WPVC</title>
        <meta
          name="description"
          content="RS Interiors, the best interior designer in Hyderabad, offers wallpaper, curtains, invisible grills, safety doors, wood flooring, and pleated sliding mesh. Complete home interior solutions with PVC cupboards, WPVC wardrobes, and modular kitchens. 500+ projects."
        />
        <meta name="keywords" content="Interior Design Services Hyderabad, RS Interiors Hyderabad, Best Interior Designers Hyderabad, PVC Cupboards Hyderabad, WPVC Wardrobes Hyderabad, Modular Kitchen Hyderabad, PVC Interiors Hyderabad" />
        <link rel="canonical" href="https://www.rsinteriordesigns.in/services" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rsinteriordesigns.in/services" />
        <meta
          property="og:title"
          content="Interior Design Services Hyderabad | RS Interiors PVC & WPVC"
        />
        <meta
          property="og:description"
          content="RS Interiors, the best interior designer in Hyderabad, offers wallpaper, curtains, invisible grills, safety doors, and complete PVC interior solutions."
        />
        <meta property="og:image" content="https://www.rsinteriordesigns.in/src/assets/logo.png" />
        <meta property="og:site_name" content="RS Interiors" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.rsinteriordesigns.in/services" />
        <meta
          name="twitter:title"
          content="Interior Design Services Hyderabad | RS Interiors PVC & WPVC"
        />
        <meta
          name="twitter:description"
          content="RS Interiors, the best interior designer in Hyderabad, offers wallpaper, curtains, invisible grills, safety doors, and complete PVC interior solutions."
        />
        <meta name="twitter:image" content="https://www.rsinteriordesigns.in/src/assets/logo.png" />
      </Helmet>

      <section className="page page-additional-services">
        <div className="page-banner pb-2" style={{ backgroundImage: `url(${heroImg})` }} />

        <div className="page">
          <div className="section-head">
            <div className="eyebrow eyebrow--alt">Our Services</div>
            <h2 className="services-title accent5-heading">Additional Services </h2>
            <p className="lead services-lead">
              RS Interiors is the leading interior design company in Hyderabad for complete home interiors. Modern solutions designed to match interiors while keeping your space secure, comfortable, and stylish. Looking for custom interiors? Explore our{' '}
              <Link to="/products" className="content-link">
                <span className="seo-keyword">PVC cupboards</span>
              </Link>{' '}
              and{' '}
              <Link to="/products/wpc" className="content-link">
                <span className="seo-keyword">WPC wardrobes</span>
              </Link>.
            </p>
          </div>

          <div className="services-grid additional-services-grid">
            {services.map((s) => (
              <div className="service-card" key={s.title}>
                <div className="service-media">
                  <img src={s.img} alt={s.title} loading="lazy" />
                </div>
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

