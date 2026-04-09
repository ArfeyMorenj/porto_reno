'use client'

import { useEffect, useState, useRef } from 'react'

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const cursorTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)

      // Clear existing timeout
      if (cursorTimeoutRef.current) {
        clearTimeout(cursorTimeoutRef.current)
      }
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.closest('nav') ||
        target.getAttribute('role') === 'button' ||
        target.closest('[role="button"]')
      
      setIsHovering(!!isClickable)
    }

    const handleDocumentMouseMove = (e: MouseEvent) => {
      updateMousePosition(e)
    }

    const handleDocumentMouseOver = (e: MouseEvent) => {
      handleMouseOver(e)
    }

    // Always visible - use document level listeners for better coverage
    document.addEventListener('mousemove', handleDocumentMouseMove, { capture: true })
    document.addEventListener('mouseover', handleDocumentMouseOver, { capture: true })
    const timeoutRef = cursorTimeoutRef.current

    return () => {
      document.removeEventListener('mousemove', handleDocumentMouseMove, { capture: true })
      document.removeEventListener('mouseover', handleDocumentMouseOver, { capture: true })
      if (timeoutRef) {
        clearTimeout(timeoutRef)
      }
    }
  }, [])

  return (
    <>
      {/* Custom cursor dot - Always rendered */}
      <div
        className="fixed w-3 h-3 bg-primary rounded-full pointer-events-none z-[9999] transition-transform duration-100"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? 0.8 : 0,
        }}
      />

      {/* Custom cursor ring - Always rendered */}
      <div
        className={`fixed pointer-events-none z-[9998] rounded-full border-2 border-primary transition-all duration-100 ${
          isHovering ? 'opacity-100' : 'opacity-50'
        }`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          width: isHovering ? '40px' : '32px',
          height: isHovering ? '40px' : '32px',
          opacity: isVisible ? (isHovering ? 1 : 0.5) : 0,
        }}
      />
    </>
  )
}

export default CustomCursor
