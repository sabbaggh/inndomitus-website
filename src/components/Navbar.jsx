import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles } from 'lucide-react'
import logo from '../logo.jpeg'

const navLinks = [
  { name: 'Servicios', href: '#servicios' },
  { name: 'Demo', href: '#demo' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={isScrolled ? {
        background: 'rgba(8,12,20,0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '12px 0',
      } : { padding: '20px 0' }}
    >
      {/* Top gradient line when scrolled */}
      {isScrolled && (
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(56,189,248,0.3) 30%, rgba(167,139,250,0.2) 70%, transparent)' }}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <img
              src={logo}
              alt="Inndomitus"
              className="w-8 h-8 object-contain rounded-lg group-hover:scale-105 transition-transform duration-200"
            />
            <span className="text-lg font-bold font-display tracking-tight text-gradient">
              Inndomitus
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-white transition-all duration-200 hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
            <div className="w-px h-5 mx-3" style={{ background: 'rgba(255,255,255,0.1)' }} />
            <a
              href="#contacto"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-slate-950 overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_24px_rgba(56,189,248,0.4)]"
              style={{ background: 'linear-gradient(135deg, #38BDF8 0%, #0EA5E9 100%)' }}
            >
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(135deg, #7DD3FC 0%, #38BDF8 100%)' }}
              />
              <span className="relative z-10 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Hablemos
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMobileMenuOpen}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white transition-all duration-200 cursor-pointer"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden"
            >
              <div
                className="flex flex-col gap-1 mt-3 mb-4 p-3 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200 text-sm font-medium"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="h-px mx-2 my-1" style={{ background: 'rgba(255,255,255,0.06)' }} />
                <a
                  href="#contacto"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-950 cursor-pointer"
                  style={{ background: 'linear-gradient(135deg, #38BDF8 0%, #0EA5E9 100%)' }}
                >
                  <Sparkles className="w-4 h-4" />
                  Hablemos
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
