import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const topAccent = {
  cyan:    'from-transparent via-cyan-400/80 to-transparent',
  violet:  'from-transparent via-violet-400/80 to-transparent',
  emerald: 'from-transparent via-emerald-400/80 to-transparent',
  amber:   'from-transparent via-amber-400/80 to-transparent',
  pink:    'from-transparent via-pink-400/80 to-transparent',
  blue:    'from-transparent via-sky-400/80 to-transparent',
}

const glowStyles = {
  cyan:    'hover:shadow-[0_8px_40px_rgba(56,189,248,0.15),0_0_0_1px_rgba(56,189,248,0.12)]',
  violet:  'hover:shadow-[0_8px_40px_rgba(167,139,250,0.15),0_0_0_1px_rgba(167,139,250,0.12)]',
  emerald: 'hover:shadow-[0_8px_40px_rgba(52,211,153,0.15),0_0_0_1px_rgba(52,211,153,0.12)]',
  amber:   'hover:shadow-[0_8px_40px_rgba(251,191,36,0.15),0_0_0_1px_rgba(251,191,36,0.12)]',
  pink:    'hover:shadow-[0_8px_40px_rgba(244,114,182,0.15),0_0_0_1px_rgba(244,114,182,0.12)]',
  blue:    'hover:shadow-[0_8px_40px_rgba(56,189,248,0.15),0_0_0_1px_rgba(56,189,248,0.12)]',
}

const iconStyles = {
  cyan:    { bg: 'rgba(56,189,248,0.1)',  text: '#38BDF8', glow: 'rgba(56,189,248,0.3)' },
  violet:  { bg: 'rgba(167,139,250,0.1)', text: '#A78BFA', glow: 'rgba(167,139,250,0.3)' },
  emerald: { bg: 'rgba(52,211,153,0.1)',  text: '#34D399', glow: 'rgba(52,211,153,0.3)' },
  amber:   { bg: 'rgba(251,191,36,0.1)',  text: '#FCD34D', glow: 'rgba(251,191,36,0.3)' },
  pink:    { bg: 'rgba(244,114,182,0.1)', text: '#F472B6', glow: 'rgba(244,114,182,0.3)' },
  blue:    { bg: 'rgba(56,189,248,0.1)',  text: '#38BDF8', glow: 'rgba(56,189,248,0.3)' },
}

const linkStyles = {
  cyan:    'text-cyan-400 group-hover/link:text-cyan-300',
  violet:  'text-violet-400 group-hover/link:text-violet-300',
  emerald: 'text-emerald-400 group-hover/link:text-emerald-300',
  amber:   'text-amber-400 group-hover/link:text-amber-300',
  pink:    'text-pink-400 group-hover/link:text-pink-300',
  blue:    'text-sky-400 group-hover/link:text-sky-300',
}

export default function ServiceCard({ service, index }) {
  const Icon = service.icon
  const is = iconStyles[service.glowColor]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className={`group glass-card rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${glowStyles[service.glowColor]}`}
    >
      {/* Gradient top accent line */}
      <div className={`h-px bg-gradient-to-r ${topAccent[service.glowColor]}`} />

      <div className="p-6 pt-7">
        {/* Icon */}
        <div className="mb-5 relative w-fit">
          {/* Glow backdrop */}
          <div
            className="absolute inset-0 rounded-xl blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300"
            style={{ background: is.glow }}
          />
          <div
            className="relative w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            style={{ background: is.bg }}
          >
            <Icon className="w-7 h-7" style={{ color: is.text }} />
          </div>
        </div>

        <h3 className="text-lg font-semibold text-white mb-2.5 font-display tracking-tight">
          {service.title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed mb-5">
          {service.description}
        </p>

        <div className="pt-4 border-t border-slate-800/60">
          <a
            href="#contacto"
            className={`text-sm font-medium inline-flex items-center gap-1.5 transition-all duration-200 group/link ${linkStyles[service.glowColor]}`}
          >
            Saber más
            <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}
