import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Products from './pages/Products'
import Projects from './pages/Projects'
import ContactUs from './pages/ContactUs'
import About from './pages/About'
import ProductDetails from './pages/ProductDetails'

export default function App() {
  return (
    <div className="app-root">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:type" element={<ProductDetails />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="footer-inner">
<div className="footer-col">
            <div className="footer-brand">RS Interiors</div>
            <div className="footer-muted">PVC &amp; WPC Cupboards • Kitchen Cabinets • Wardrobes</div>
          </div>

          <div className="footer-col">
            <div className="footer-heading">Contact Us</div>
<a className="footer-link" href="tel:9640400030">Mobile: 9640400030</a>
            <a className="footer-link" href="mailto:info@wpvcdesigns.com">Email: info@wpvcdesigns.com</a>
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
  )
}

