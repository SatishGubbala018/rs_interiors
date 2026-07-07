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

const BASE_URL = 'https://www.rsinteriordesigns.in'

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": BASE_URL + "#business",
  "name": "RS Interiors",
  "description": "RS Interiors is the leading interior designer in Hyderabad for WPC Interiors, WPVC wardrobes, PVC cupboards, modular kitchens, and luxury home interiors. 500+ projects, 10+ years experience, affordable interior design solutions.",
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
  "priceRange": "$$",
  "image": BASE_URL + "/src/assets/logo.png",
  "logo": BASE_URL + "/src/assets/logo.png",
  "sameAs": [
    "https://www.instagram.com/rs_interior_desgins?igsh=MWl1Z253bzQzeHdocQ=="
  ],
  "areaServed": {
    "@type": "City",
    "name": "Hyderabad"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Interior Design Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "PVC Cupboards Hyderabad",
          "description": "Premium PVC cupboards and wardrobes for modern homes in Hyderabad"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "WPVC Wardrobes Hyderabad",
          "description": "Custom WPVC wardrobes with premium finishes in Hyderabad"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Modular Kitchen Hyderabad",
          "description": "Custom modular kitchen designs with Demac 3-layer PVC in Hyderabad"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "WPC Interiors Hyderabad",
          "description": "Premium WPC Interiors and PVC Interiors Hyderabad for modern homes"
        }
      }
    ]
  }
}

const seoData = {
  home: {
    title: 'Best Interior Designers Hyderabad | PVC Interiors, WPVC Wardrobes & Modular Kitchen | RS Interiors',
    description: 'RS Interiors is the best interior designer in Hyderabad for PVC interiors, WPVC wardrobes, modular kitchens, and luxury home interiors. 500+ projects, 10+ years experience, affordable prices.',
    image: `${BASE_URL}/src/assets/logo.png`
  },
  products: {
    title: 'PVC Cupboards Hyderabad | WPVC Wardrobes & Modular Kitchen | Best Interior Designers',
    description: 'RS Interiors offers premium PVC cupboards, WPVC wardrobes, and modular kitchen cabinets in Hyderabad. Best interior designers for affordable PVC interiors, Demac 3-layer PVC, and luxury home interiors.',
    image: `${BASE_URL}/src/assets/logo.png`
  },
  projects: {
    title: 'Our Projects | Best Interior Designers Hyderabad - RS Interiors Portfolio',
    description: 'Explore 500+ interior design projects by RS Interiors, the best interior designer in Hyderabad. View our portfolio of PVC cupboards, WPVC wardrobes, modular kitchens, and luxury home interiors.',
    image: `${BASE_URL}/src/assets/logo.png`
  },
  additionalServices: {
    title: 'Additional Services | Best Interior Designers Hyderabad - RS Interiors PVC & WPVC',
    description: 'RS Interiors, the best interior designer in Hyderabad, offers wallpaper installation, curtains, invisible grills, safety doors, wood flooring, and complete home interior solutions with PVC cupboards and modular kitchens.',
    image: `${BASE_URL}/src/assets/logo.png`
  },
  about: {
    title: 'About Us | Best Interior Designers Hyderabad - RS Interiors PVC & WPVC Experts',
    description: 'RS Interiors is the best interior designer in Hyderabad with 10+ years experience in PVC interiors, WPVC wardrobes, modular kitchens, and luxury home interiors. 500+ projects, affordable prices.',
    image: `${BASE_URL}/src/assets/logo.png`
  },
  contact: {
    title: 'Contact Us | Best Interior Designers Hyderabad - RS Interiors PVC & WPVC',
    description: 'Contact RS Interiors, the best interior designer in Hyderabad, for premium PVC cupboards, WPVC wardrobes, modular kitchens, and luxury home interiors. Call +919640400030 for free consultation.',
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
            <div className="footer-muted">Demac 3 Layer PVC & WPC Cupboards • Kitchen Cabinets • Wardrobes</div>
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

