'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import './ScrollToTop.css'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () =>
      setIsVisible(window.pageYOffset > 500)

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <div
      className={`scroll-top ${isVisible ? 'scroll-top--visible' : ''}`}
      aria-hidden={!isVisible}
    >
      <a href="#top" tabIndex={isVisible ? 0 : -1}>
        <ArrowUp size={28} />
      </a>
    </div>
  )
}

export default ScrollToTop
