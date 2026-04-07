import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import logo from '../logo.jpeg'

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'Email', icon: Mail, href: 'mailto:hola@inndomitus.com' },
]

const footerLinks = [
  { name: 'Servicios', href: '#servicios' },
  { name: 'Demo', href: '#demo' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative pt-0 pb-10">
      {/* Gradient top divider */}
      <div className="section-divider mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a href="#" className="flex items-center gap-2.5 mb-5 w-fit">
              <img src={logo} alt="Inndomitus" className="w-9 h-9 object-contain rounded-xl" />
              <span className="text-xl font-bold font-display text-gradient">
                Inndomitus
              </span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Consultora de IA y Software. Transformamos empresas con
              inteligencia artificial y desarrollo de alto impacto.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-5">Navegación</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-500 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-5">Síguenos</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-500 hover:text-white transition-all duration-200 hover:scale-110"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.07)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(56,189,248,0.1)'
                      e.currentTarget.style.borderColor = 'rgba(56,189,248,0.3)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                    }}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
            <div className="mt-6">
              <a
                href="mailto:hola@inndomitus.com"
                className="text-sm text-slate-500 hover:text-cyan-400 transition-colors"
              >
                hola@inndomitus.com
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom divider */}
        <div
          className="h-px mb-6"
          style={{ background: 'rgba(255,255,255,0.05)' }}
        />

        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs">
            © {currentYear} Inndomitus. Todos los derechos reservados.
          </p>
          <p className="text-slate-600 text-xs">
            Hecho con pasión en Latinoamérica
          </p>
        </div>
      </div>
    </footer>
  )
}
