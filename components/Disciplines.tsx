'use client'

import { disciplines } from '@/lib/data'

const Disciplines = () => {
  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Disciplines</h2>
          <p className="text-lg text-foreground/60 max-w-2xl">
            Saya spesialis dalam area-area kunci pengembangan software dan desain, menggabungkan keahlian teknis dengan problem-solving kreatif.
          </p>
        </div>

        {/* Disciplines grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {disciplines.map((discipline) => (
            <div
              key={discipline.id}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group cursor-pointer"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {discipline.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{discipline.title}</h3>
              <p className="text-foreground/60">{discipline.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Disciplines
