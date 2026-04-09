'use client'

import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { profile } from '@/lib/data'

const roles = ['Full Stack Developer', 'Desainer UI/UX', 'Problem Solver', 'Tech Enthusiast']

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, currentRoleIndex])

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-6 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        {/* Greeting */}
        <div className="mb-6 animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium">
            👋 Selamat datang di portfolio saya
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="block text-foreground">Halo, saya {profile.name}</span>
        </h1>

        {/* Role switcher */}
        <div className="mb-6 h-16 md:h-20 flex items-center justify-center" style={{ animationDelay: '0.2s' }}>
          <p className="text-xl md:text-3xl text-foreground/80">
            Saya adalah seorang{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-semibold">
              {displayedText}
            </span>
            <span className="animate-pulse">|</span>
          </p>
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          {profile.bio}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <a
            href="#work"
            className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Lihat Karya Saya
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-lg border border-primary/50 text-primary font-semibold hover:bg-primary/10 transition-colors"
          >
            Hubungi Saya
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-primary/50" />
        </div>
      </div>
    </section>
  )
}

export default Hero
