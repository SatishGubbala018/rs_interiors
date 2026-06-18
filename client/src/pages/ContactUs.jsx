import React from 'react'
import { FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa'


export default function ContactUs() {
  const whatsappNumber = '+919640400030'
  const whatsappText = encodeURIComponent('Hi, I would like to know more about PVC/WPC products.')

  return (
    <section className="page contact-page">
      <h2>Contact Us</h2>
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
          href="mailto:rsrsinteriorsdesign@gmail.com?subject=Contact%20from%20RS%20Interiors&body=Hi%20team%2C%0A%0AI%27d%20like%20to%20know%20more%20about%20your%20PVC%2FWPC%20products.%0A%0AName%3A%20%0APhone%3A%20"
        >
          <div className="contact-option__icon" aria-hidden="true">
            <FaEnvelope />
          </div>
          <div className="contact-option__title">Gmail / Email</div>
          <div className="contact-option__sub">rsrsinteriorsdesign@gmail.com</div>
        </a>

        <a
          className="contact-option contact-option--instagram"
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="contact-option__icon" aria-hidden="true">
            <FaInstagram />
          </div>
          <div className="contact-option__title">Instagram</div>
          <div className="contact-option__sub">Follow our latest work</div>
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
  )
}


