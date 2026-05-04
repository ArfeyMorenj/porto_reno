'use client'

import { useState } from 'react'
import Image from 'next/image'
import { projects } from '@/lib/data'
import { ExternalLink, X } from 'lucide-react'

const Projects = () => {
  const categories = ['all', ...new Set(projects.map((project) => project.category))]
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null)

  const categoryLabels: Record<string, string> = {
    all: 'Semua',
    web: 'Web',
    design: 'Desain',
    erp: 'ERP / Sistem',
  }

  const filteredProjects =
    activeCategory === 'all' ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <>
      <section id="work" className="py-20 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Work</h2>
            <p className="text-lg text-foreground/60 max-w-2xl">
              Pilihan proyek yang telah saya kerjakan, termasuk sistem ERP internal JPAS / FitnessPlus System untuk operasional bisnis.
            </p>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card border border-border text-foreground/60 hover:border-primary/50'
                }`}
              >
                {categoryLabels[category] ?? category}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
              >
                {/* Project image */}
                <div className="relative h-48 md:h-64 overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Project info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                  <p className="text-foreground/60 mb-4 line-clamp-2">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                    >
                      {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <span className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-200 font-medium">
                    Lihat Detail
                    <ExternalLink size={16} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 pointer-events-auto">
          <div className="bg-card border border-border rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto">
            {/* Modal header */}
            <div className="sticky top-0 flex items-center justify-between p-6 border-b border-border bg-card">
              <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal content */}
            <div className="p-6 space-y-8">
              {/* Project image */}
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Full description */}
              {selectedProject.fullDescription ? (
                <div className="space-y-6">
                  {/* Definition */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-primary">Definisi</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      {selectedProject.fullDescription.definition}
                    </p>
                  </div>

                  {/* Purpose */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-primary">Tujuan</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      {selectedProject.fullDescription.purpose}
                    </p>
                  </div>

                  {/* Implementation */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-primary">Implementasi</h3>
                    <div className="space-y-4">
                      {/* Features */}
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Fitur Utama:</h4>
                        <ul className="space-y-2">
                          {selectedProject.fullDescription.implementation.features.map((feature, idx) => (
                            <li key={idx} className="flex gap-3 text-foreground/80">
                              <span className="text-primary">✓</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technical stack */}
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Teknologi:</h4>
                        <p className="text-foreground/80 leading-relaxed">
                          {selectedProject.fullDescription.implementation.technical}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-foreground/80 leading-relaxed">{selectedProject.description}</p>
              )}

              {/* Tags */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Teknologi</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Call to action */}
              {selectedProject.link && selectedProject.link !== '#' ? (
                <div className="pt-4">
                  <a
                    href={selectedProject.link}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-200 font-medium"
                  >
                    Kunjungi Proyek
                    <ExternalLink size={16} />
                  </a>
                </div>
              ) : (
                <div className="pt-4 text-sm text-foreground/50">
                  Demo internal belum dipublikasikan, tetapi detail implementasinya sudah tercantum di atas.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Projects
