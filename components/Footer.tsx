'use client'

import Link from 'next/link'
import { profile } from '@/lib/data'
import {
  Mail,
  ArrowUpRight,
  Github,
  Linkedin,
} from 'lucide-react'

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* CTA Section */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Mari Bekerja Sama</h2>
          <p className="text-lg text-foreground/60 mb-8 max-w-2xl mx-auto">
            Saya selalu tertarik mendengar tentang proyek dan peluang baru.
            Jangan ragu untuk menghubungi saya jika Anda ingin berkolaborasi!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${profile.email}`}
              className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2 justify-center"
            >
              Kirim Email
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Navigation Links Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-foreground/60 uppercase mb-4">Navigasi</h3>
            <div className="space-y-2">
              <Link href="#work" className="block text-foreground/70 hover:text-primary transition-colors">
                Karya
              </Link>
              <Link href="#about" className="block text-foreground/70 hover:text-primary transition-colors">
                Tentang
              </Link>
              <Link href="#skills" className="block text-foreground/70 hover:text-primary transition-colors">
                Skill
              </Link>
              <Link href="#certificates" className="block text-foreground/70 hover:text-primary transition-colors">
                Sertifikat
              </Link>
              <Link href="#contact" className="block text-foreground/70 hover:text-primary transition-colors">
                Kontak
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-foreground/60 uppercase mb-4">Sumber Daya</h3>
            <div className="space-y-2">
              <a href="#" className="block text-foreground/70 hover:text-primary transition-colors">
                Blog
              </a>
              <a href="#" className="block text-foreground/70 hover:text-primary transition-colors">
                Resume
              </a>
              <a href="#" className="block text-foreground/70 hover:text-primary transition-colors">
                Studi Kasus
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground/60 uppercase mb-4">Kontak</h3>
            <div className="space-y-3">
              <a
                href="https://github.com/ArfeyMorenj"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
              >
                <Github size={18} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/arfey-moreno-jazzua-89703a284/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a
                href="mailto:morenoreno166@gmail.com"
                className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
              >
                <Mail size={18} />
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-foreground/60">
            © 2024 {profile.name}. Semua hak dilindungi.
          </p>
          <button
            onClick={scrollToTop}
            className="w-fit text-sm text-foreground/60 hover:text-primary transition-colors flex items-center gap-2"
          >
            Kembali ke atas
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
