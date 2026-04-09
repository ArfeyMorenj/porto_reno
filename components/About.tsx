'use client'

import { experience } from '@/lib/data'
import { CheckCircle2 } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-foreground/60 max-w-2xl">
            Junior Developer yang passionate tentang membangun aplikasi web modern. Saya telah menguasai Laravel, Next.js, React, Node.js, dan manajemen database melalui pelatihan sekolah yang intensif dan proyek dunia nyata.
          </p>
        </div>

        {/* Experience timeline */}
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div key={exp.id} className="relative">
              {/* Timeline marker */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary mt-2"></div>
                  {index !== experience.length - 1 && (
                    <div className="w-0.5 h-32 bg-gradient-to-b from-primary to-transparent mt-2"></div>
                  )}
                </div>

                {/* Experience card */}
                <div className="pb-8 flex-1">
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <span className="text-sm text-foreground/60 mt-2 md:mt-0">{exp.period}</span>
                    </div>

                    <p className="text-foreground/60 mb-4">{exp.description}</p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {exp.achievements.map((achievement) => (
                        <div key={achievement} className="flex items-start gap-3">
                          <CheckCircle2 size={18} className="text-primary mt-0.5 flex-shrink-0" />
                          <p className="text-foreground/70">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
