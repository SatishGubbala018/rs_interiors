import React from 'react'
import { Helmet } from 'react-helmet-async'
import { FaInstagram, FaEnvelope, FaWhatsapp, FaYoutube } from 'react-icons/fa'


export default function ContactUs() {
  const whatsappNumber = '+919640400030'
  const whatsappText = encodeURIComponent('Hi, I would like to know more about PVC/WPC products.')

  return (
    <>
      <Helmet>
        <title>Contact Us | RS Interiors - Get In Touch for PVC Cupboards & Modular Kitchen Hyderabad</title>
        <meta name="description" content="Contact RS Interiors for premium PVC cupboards, modular kitchens, wardrobes, and home interior design services in Hyderabad. Call +919640400030 or visit our showroom in Telangana." />
        <link rel="canonical" href="https://www.rsinteriordesigns.in/contact" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rsinteriordesigns.in/contact" />
        <meta property="og:title" content="Contact Us | RS Interiors - Get In Touch for PVC Cupboards & Modular Kitchen Hyderabad" />
        <meta property="og:description" content="Contact RS Interiors for premium PVC cupboards, modular kitchens, wardrobes, and home interior design services in Hyderabad. Call +919640400030 or visit our showroom." />
        <meta property="og:image" content="https://www.rsinteriordesigns.in/src/assets/logo.png" />
        <meta property="og:site_name" content="RS Interiors" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.rsinteriordesigns.in/contact" />
        <meta name="twitter:title" content="Contact Us | RS Interiors - Get In Touch for PVC Cupboards & Modular Kitchen Hyderabad" />
        <meta name="twitter:description" content="Contact RS Interiors for premium PVC cupboards, modular kitchens, wardrobes, and home interior design services in Hyderabad." />
        <meta name="twitter:image" content="https://www.rsinteriordesigns.in/src/assets/logo.png" />
      </Helmet>
      
      <section className="page contact-page">
        <h1>Contact RS Interiors - Interior Designers Hyderabad</h1>
        <p className="lead">Reach us instantly through WhatsApp, Gmail, or Instagram.</p>

        <div className="contact-options">
          <a
            className="contact-option contact-option--whatsapp"
            href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
            target="_blank"
            rel="noreferrer"
          >
            <div className="contact-option__icon" aria-hidden="true">
              <FaWhatsapp />
            </div>
            <div className="contact-option__title">WhatsApp</div>
            <div className="contact-option__sub">Chat with us now</div>
          </a>

          <a
            className="contact-option contact-option--gmail"
            href="mailto:inforsinteriordesgins@gmail.com?subject=Contact%20from%20RS%20Interiors&body=Hi%20team%2C%0A%0AI%27d%20like%20to%20know%20more%20about%20your%20PVC%2FWPC%20products.%0A%0AName%3A%20%0APhone%3A%20 " 
          >
            <div className="contact-option__icon" aria-hidden="true">
              <FaEnvelope />
            </div>
            <div className="contact-option__title">Gmail / Email</div>
            <div className="contact-option__sub">inforsinteriordesgins@gmail.com</div>
          </a>

          <a
            className="contact-option contact-option--instagram"
            href="https://www.instagram.com/rs_interior_desgins?igsh=MWl1Z253bzQzeHdocQ=="
            target="_blank"
            rel="noreferrer"
          >
            <div className="contact-option__icon" aria-hidden="true">
              <FaInstagram />
            </div>
            <div className="contact-option__title">Instagram</div>
            <div className="contact-option__sub">Follow our latest work</div>
          </a>

          <a
            className="contact-option contact-option--youtube"
            href="https://www.youtube.com/@babuboby8387/shorts"
            target="_blank"
            rel="noreferrer"
          >
            <div className="contact-option__icon" aria-hidden="true">
              <FaYoutube />
            </div>
            <div className="contact-option__title">YouTube</div>
            <div className="contact-option__sub">Watch our project videos</div>
          </a>
        </div>

        <div className="contact-fallback">
          <div className="contact-fallback__item">
            <b>Mobile:</b> <a className="footer-link" href="tel:9640400030">+919640400030</a>
          </div>
          <div className="contact-fallback__item">
            <b>Mobile:</b> <a className="footer-link" href="tel:+1768000001556">+91768000001556</a>
          </div>
        </div>

      </section>
    </>
  )
}