import React, { useEffect, useMemo, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NavBar() {

  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
      return
    }

    document.body.style.overflow = 'hidden'
    document.body.style.touchAction = 'none'

    return () => {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
  }, [menuOpen])


  const links = useMemo(
    () => [
      { to: '/', label: 'Home' },
      { to: '/products', label: 'Products' },
      { to: '/projects', label: 'Projects' },
      { to: '/services', label: 'Additional Services' },
      { to: '/about', label: 'About' },
      { to: '/contact', label: 'Contact Us' }

    ],
    []
  )

  return (

    <motion.header
      className="nav"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      <div className="nav-inner">
        <motion.div 
          className="brand"
          onClick={() => navigate('/')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          style={{ cursor: 'pointer' }}
        >
          <img
            className="brand-logo"
            src={new URL('../assets/logo-white.png', import.meta.url).toString()}
            alt="RS Interiors"

          />
        </motion.div>

        {/* Desktop links */}
        <nav className="nav-links">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>



        {/* Mobile hamburger */}
        <button
          type="button"
          className={`nav-hamburger${menuOpen ? ' open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="hamburger-bars" aria-hidden="true">
            <span className="bar bar--top" />
            <span className="bar bar--mid" />
            <span className="bar bar--bot" />
          </span>
        </button>
      </div>

      {/* Mobile dropdown */}
      <div className={`nav-mobile-panel ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <nav className="nav-mobile-links">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className="nav-mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </NavLink>

          ))}
        </nav>
      </div>
    </motion.header>
  )
}

