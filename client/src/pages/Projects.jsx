import React, { useMemo } from 'react'
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

const VIDEO_ASSETS = [
  { id: 'v1', title: 'Showcase Installation 1', description: 'PVC / WPC cabinetry showcase video', src: new URL('../assets/videos/sample_video_1.mp4', import.meta.url).toString() },
  { id: 'v2', title: 'Showcase Installation 2', description: 'Finish & texture walkthrough video', src: new URL('../assets/videos/sample_video_2.mp4', import.meta.url).toString() },
  { id: 'v3', title: 'Showcase Installation 3', description: 'Modular kitchen installation video', src: new URL('../assets/videos/sample_video_3.mp4', import.meta.url).toString() },
  { id: 'v4', title: 'Showcase Installation 4', description: 'Wardrobe / storage fit & finish video', src: new URL('../assets/videos/sample_video_4.mp4', import.meta.url).toString() },
  { id: 'v5', title: 'Showcase Installation 5', description: 'Cabinet detailing & edges video', src: new URL('../assets/videos/sample_video_5.mp4', import.meta.url).toString() },
  { id: 'v6', title: 'Showcase Installation 6', description: 'Kitchen layout & hardware video', src: new URL('../assets/videos/sample_video_6.mp4', import.meta.url).toString() },
  { id: 'v7', title: 'Showcase Installation 7', description: 'Premium finish showcase video', src: new URL('../assets/videos/sample_video_7.mp4', import.meta.url).toString() },
  { id: 'v8', title: 'Showcase Installation 8', description: 'Final reveal & quality walkthrough video', src: new URL('../assets/videos/sample_video_8.mp4', import.meta.url).toString() }
]

export default function Projects() {
  const [listRef, listVisible] = useReveal({ threshold: 0.12 })

  const videos = useMemo(() => VIDEO_ASSETS, [])

  return (
    <section className="page projects-page">
      <div
        className="page-banner"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1600)`
        }}
      >
        <motion.div
          className="banner-overlay"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <h2 className="overlay-title small">Projects</h2>
          <p className="overlay-sub">Selected installations and finishes—watch our PVC & WPC work.</p>
        </motion.div>
      </div>

      <motion.div
        ref={listRef}
        className="project-list project-list--videos"
        variants={containerVariants}
        initial="hidden"
        animate={listVisible ? 'visible' : 'hidden'}
      >
        {videos.map((v, idx) => (
          <motion.div
            key={v.id}
            className="project project--video"
            variants={itemVariants}
            whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,217,255,0.25)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="project-media project-media--video">
              <video
                src={v.src}
                controls
                preload="metadata"
                playsInline
                muted={idx % 2 === 0}
              />
            </div>

            <div className="project-info">
              <h3>{v.title}</h3>
              <p>{v.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

