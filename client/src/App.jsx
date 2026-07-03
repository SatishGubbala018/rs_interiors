import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Products from './pages/Products'
import Projects from './pages/Projects'
import ContactUs from './pages/ContactUs'
import About from './pages/About'
import ProductDetails from './pages/ProductDetails'
import AdditionalServices from './pages/AdditionalServices'

const BASE_URL = 'https://rsinteriordesigns.in'

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "RS Interiors",
  "description": "Premium Demac 3 Layer PVC & WPVC Cupboards, Kitchen Cabinets, and Wardrobes",
  "url": BASE_URL,
  "telephone": ["+919640400030", "+917680001556"],
  "email": "inforsinteriordesgins@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "SVY.141/A, Gandimaisamma X Roads, Gandimaisamma, D.Pochampally",
    "addressLocality": "Medchal - Malkajgiri",
    "addressRegion": "Telangana",
    "postalCode": "500043",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "17.5344",
    "longitude": "78.5318"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "09:00",
    "closes": "19:00"
  },
  "priceRange": "$$"
}

const seoData = {
  home: {
    title: 'RS Interiors | Premium PVC & WPVC Cupboards, Kitchen Cabinets, Wardrobes',
    description: 'RS Interiors specializes in premium Demac 3 Layer PVC & WPVC cupboards, kitchen cabinets, and wardrobes in Telangana. Transform your space with our custom interior solutions.',
    image: `${BASE_URL}/src/assets/logo.png`
  },
  products: {
    title: 'Our Products | RS Interiors - PVC Cupboards & Kitchen Cabinets',
    description: 'Explore our range of premium PVC cupboards, WPVC kitchen cabinets, and custom wardrobes. High-quality, durable, and stylish interior solutions.',
    image: `${BASE_URL}/src/assets/logo.png`
  },
  projects: {
    title: 'Our Projects | RS Interiors Portfolio',
    description: 'View our completed interior design projects including kitchen cabinets, wardrobes, and custom storage solutions. Quality craftsmanship in every project.',
    image: `${BASE_URL}/src/assets/logo.png`
  },
  additionalServices: {
    title: 'Additional Services | RS Interiors',
    description: 'Discover our additional interior services including custom designs, installations, and maintenance. Complete interior solutions for your home and office.',
    image: `${BASE_URL}/src/assets/logo.png`
  },
  about: {
    title: 'About Us | RS Interiors - Your Trusted Interior Design Partner',
    description: 'Learn about RS Interiors, our mission, and our commitment to delivering premium PVC and WPVC interior solutions. Quality, durability, and customer satisfaction.',
    image: `${BASE_URL}/src/assets/logo.png`
  },
  contact: {
    title: 'Contact Us | RS Interiors - Get In Touch',
    description: 'Contact RS Interiors for premium PVC cupboards, kitchen cabinets, and wardrobes. Call us at +919640400030 or visit our showroom in Telangana.',
    image: `${BASE_URL}/src/assets/logo.png`
  }
}

function getSeoData(pathname) {
  if (pathname.includes('/products') || pathname.includes('/services')) return seoData.products
  if (pathname.includes('/projects')) return seoData.projects
  if (pathname.includes('/about')) return seoData.about
  if (pathname.includes('/contact')) return seoData.contact
  return seoData.home
}

export default function App() {
  const seo = getSeoData(window.location.pathname)
  
  return (
    <HelmetProvider>
      <div className="app-root">
        <Helmet>
          <title>{seo.title}</title>
          <meta name="description" content={seo.description} />
          <link rel="canonical" href={BASE_URL + window.location.pathname} />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content={BASE_URL + window.location.pathname} />
          <meta property="og:title" content={seo.title} />
          <meta property="og:description" content={seo.description} />
          <meta property="og:image" content={seo.image} />
          <meta property="og:site_name" content="RS Interiors" />
          
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content={BASE_URL + window.location.pathname} />
          <meta name="twitter:title" content={seo.title} />
          <meta name="twitter:description" content={seo.description} />
          <meta name="twitter:image" content={seo.image} />
          
          {/* JSON-LD LocalBusiness Schema */}
          <script type="application/ld+json">
            {JSON.stringify(jsonLd)}
          </script>
        </Helmet>

        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:type" element={<ProductDetails />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<AdditionalServices />} />
          </Routes>

        </main>

        <footer className="footer">
          <div className="footer-inner">
<div className="footer-col">
            <div className="footer-brand">RS Interiors</div>
            <div className="footer-muted">Demac 3 Layer PVC & WPVC Cupboards • Kitchen Cabinets • Wardrobes</div>
          </div>

          <div className="footer-col">
            <div className="footer-heading">Contact Us</div>
<a className="footer-link" href="tel:+919640400030">Mobile: +919640400030</a>
            <a className="footer-link" href="tel:+1768000001556">Mobile: +917680001556</a>
<a className="footer-link" href="mailto:inforsinteriordesgins@gmail.com">Email: inforsinteriordesgins@gmail.com</a>
            <a className="footer-link" href="/contact">Quick message</a>
          </div>

          <div className="footer-col">
            <div className="footer-heading">Address</div>
            <div className="footer-text">
              SVY.141/A, Gandimaisamma X Roads, Gandimaisamma, D.Pochampally, Medchal - Malkajgiri, Telangana, 500043
              <br />
              India
            </div>
          </div>
        </div>

        <div className="footer-bottom">© {new Date().getFullYear()}  RS Interiors. All rights reserved.</div>
      </footer>

    </div>
    </HelmetProvider>
  )
}

