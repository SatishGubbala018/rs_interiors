import { useEffect, useRef, useState } from 'react'

// Hook returns [ref, isVisible]
export default function useReveal(options = { root: null, rootMargin: '0px', threshold: 0.15 }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            // one-time animation per mount
            observer.unobserve(entry.target)
          }
        })
      },
      options
    )

    observer.observe(node)

    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options.root, options.rootMargin, options.threshold])


  return [ref, isVisible]
}
