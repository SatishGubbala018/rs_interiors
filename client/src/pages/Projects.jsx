import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
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

export default function Projects(){
  const [projects, setProjects] = useState([])
  useEffect(()=>{
    axios.get('/api/projects').then(r => setProjects(r.data)).catch(()=> setProjects([]))
  },[])

  const [listRef, listVisible] = useReveal({ threshold: 0.12 })

  return (
    <section className="page projects-page">
      <div className="page-banner" style={{ backgroundImage: `url(https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1600)` }}>
        <motion.div className="banner-overlay" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}>
          <h2 className="overlay-title small">Projects</h2>
          <p className="overlay-sub">Selected installations and finishes showcasing our PVC & WPC work.</p>
        </motion.div>
      </div>

      <motion.div 
        ref={listRef}
        className="project-list"
        variants={containerVariants}
        initial="hidden"
        animate={listVisible ? 'visible' : 'hidden'}
      >
        {(projects.length ? projects : [
          {id:'p1', title:'Demo Project 1', description:'Full kitchen cabinetry install', image:'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600'}
        ]).map(pr => (
          <motion.div 
            key={pr.id} 
            className="project" 
            variants={itemVariants}
            whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,217,255,0.25)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <img src={pr.image} alt={pr.title} />
            <div className="project-info">
              <h3>{pr.title}</h3>
              <p>{pr.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
