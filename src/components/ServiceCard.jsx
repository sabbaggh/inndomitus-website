import { motion } from 'framer-motion'

const glowStyles = {
  cyan: 'hover:shadow-cyan-500/20 hover:border-cyan-500/30',
  violet: 'hover:shadow-violet-500/20 hover:border-violet-500/30',
  emerald: 'hover:shadow-emerald-500/20 hover:border-emerald-500/30',
  amber: 'hover:shadow-amber-500/20 hover:border-amber-500/30',
  pink: 'hover:shadow-pink-500/20 hover:border-pink-500/30',
  blue: 'hover:shadow-blue-500/20 hover:border-blue-500/30',
}

const iconBgStyles = {
  cyan: 'bg-cyan-500/10 text-cyan-400',
  violet: 'bg-violet-500/10 text-violet-400',
  emerald: 'bg-emerald-500/10 text-emerald-400',
  amber: 'bg-amber-500/10 text-amber-400',
  pink: 'bg-pink-500/10 text-pink-400',
  blue: 'bg-blue-500/10 text-blue-400',
}

export default function ServiceCard({ service, index }) {
  const Icon = service.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className={`group glass-card rounded-2xl p-6 transition-all duration-300 hover:shadow-xl ${glowStyles[service.glowColor]}`}
    >
      <div className={`w-14 h-14 rounded-xl ${iconBgStyles[service.glowColor]} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
        <Icon className="w-7 h-7" />
      </div>

      <h3 className="text-xl font-semibold text-white mb-3 font-display">
        {service.title}
      </h3>

      <p className="text-slate-400 text-sm leading-relaxed">
        {service.description}
      </p>

      <div className="mt-5 pt-5 border-t border-slate-800">
        <a
          href="#contacto"
          className="text-sm font-medium text-slate-300 hover:text-white transition-colors inline-flex items-center gap-2 group/link"
        >
          Saber más
          <span className="group-hover/link:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </motion.div>
  )
}
