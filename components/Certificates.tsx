'use client'

import { useState } from 'react'
import Image from 'next/image'
import { certificates } from '@/lib/data'
import { ExternalLink } from 'lucide-react'

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null)

  return (
    <>
      <section id="certificates" className="py-20 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Certificates</h2>
            <p className="text-lg text-foreground/60 max-w-2xl">
              Sertifikat dan penghargaan dari kursus profesional yang telah saya selesaikan untuk mengembangkan keterampilan teknis.
            </p>
          </div>

          {/* Certificates grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="group rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
              >
                {/* Certificate image */}
                <div className="relative h-48 md:h-56 overflow-hidden bg-muted">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Certificate info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{cert.title}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-primary font-medium">{cert.issuer}</span>
                    <span className="text-sm text-foreground/60">{cert.date}</span>
                  </div>
                  <p className="text-foreground/70 text-sm mb-4 line-clamp-2">{cert.description}</p>

                  {/* Button */}
                  <button className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-200 font-medium text-sm">
                    Lihat Detail
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Detail Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 pointer-events-auto">
          <div className="bg-card border border-border rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto">
            {/* Modal header */}
            <div className="sticky top-0 flex items-center justify-between p-6 border-b border-border bg-card">
              <h2 className="text-2xl font-bold">{selectedCert.title}</h2>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Modal content */}
            <div className="p-6 space-y-6">
              {/* Certificate image */}
              <div className="relative w-full h-80 rounded-xl overflow-hidden">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Certificate details */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-foreground/60 uppercase mb-2">Pengguna</h3>
                  <p className="text-lg text-foreground">{selectedCert.issuer}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-semibold text-foreground/60 uppercase mb-2">Tanggal Selesai</h3>
                    <p className="text-foreground">{selectedCert.date}</p>
                  </div>
                  {selectedCert.validUntil && (
                    <div>
                      <h3 className="text-sm font-semibold text-foreground/60 uppercase mb-2">Berlaku Hingga</h3>
                      <p className="text-foreground">{selectedCert.validUntil}</p>
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-foreground/60 uppercase mb-2">Nomor Sertifikat</h3>
                  <p className="text-foreground font-mono text-sm">{selectedCert.certificateNo}</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-foreground/60 uppercase mb-2">Deskripsi</h3>
                  <p className="text-foreground/80 leading-relaxed">{selectedCert.description}</p>
                </div>
              </div>

              {/* CTA */}
              {selectedCert.link !== '#' && (
                <a
                  href={selectedCert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-200 font-medium"
                >
                  Verifikasi Sertifikat
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Certificates
