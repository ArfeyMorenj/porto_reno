'use client'

import { useEffect, useState } from 'react'

interface StatItem {
  label: string
  value: number
  suffix?: string
}

const stats: StatItem[] = [
  { label: 'Proyek Selesai', value: 5, suffix: '+' },
  { label: 'Tahun Belajar', value: 3, suffix: '+' },
  { label: 'Skill Dikuasai', value: 30, suffix: '+' },
  { label: 'Tech Stack Items', value: 25, suffix: '+' },
]

const ProofBar = () => {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0))

  useEffect(() => {
    const timers = stats.map((stat, index) => {
      let current = 0
      const increment = stat.value / 30 // 30 frames
      const timer = setInterval(() => {
        current += increment
        setCounts((prev) => {
          const newCounts = [...prev]
          newCounts[index] = Math.min(Math.floor(current), stat.value)
          return newCounts
        })
        if (current >= stat.value) {
          clearInterval(timer)
        }
      }, 50)
      return timer
    })

    return () => timers.forEach(clearInterval)
  }, [])

  return (
    <section className="py-16 md:py-24 px-6 bg-card/50 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                {counts[index]}
                {stat.suffix}
              </div>
              <p className="text-sm md:text-base text-foreground/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProofBar
