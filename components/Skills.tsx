'use client'

import { useState } from 'react'
import { skills } from '@/lib/data'

const Skills = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof skills>('frontend')

  const tabs = [
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'database', label: 'Database' },
    { key: 'tools', label: 'Tools' },
    { key: 'design', label: 'Desain' },
  ] as const

  return (
    <section id="skills" className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-foreground/60 max-w-2xl">
            Saya telah mengembangkan keahlian di frontend, backend, database, tools, dan desain sepanjang karir saya. Spesialisasi dalam full-stack development dengan teknologi modern.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === tab.key
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card border border-border text-foreground/60 hover:border-primary/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills[activeTab].map((skill) => (
            <div
              key={skill}
              className="p-4 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center group cursor-pointer"
            >
              <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                {skill}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
