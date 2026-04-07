import { motion } from 'framer-motion'
import { services, stats } from '../data/services'
import ServiceCard from '../components/ServiceCard'
import { Cpu, Zap, Clock, TrendingUp, Users } from 'lucide-react'

const statIcons = [Users, TrendingUp, Clock, Zap]
const statColors = ['cyan', 'violet', 'emerald', 'amber']
const statColorMap = {
  cyan:    { text: '#38BDF8', bg: 'rgba(56,189,248,0.1)',  accent: 'rgba(56,189,248,0.7)' },
  violet:  { text: '#A78BFA', bg: 'rgba(167,139,250,0.1)', accent: 'rgba(167,139,250,0.7)' },
  emerald: { text: '#34D399', bg: 'rgba(52,211,153,0.1)',  accent: 'rgba(52,211,153,0.7)' },
  amber:   { text: '#FCD34D', bg: 'rgba(251,191,36,0.1)',  accent: 'rgba(251,191,36,0.7)' },
}

export default function Services() {
  return (
    <section id="servicios" className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-violet-950/8 to-slate-950" />
      <motion.div
        animate={{ opacity: [0.06, 0.14, 0.06] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(167,139,250,0.15)' }}
      />
      <motion.div
        animate={{ opacity: [0.04, 0.1, 0.04] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="absolute -bottom-40 left-0 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(56,189,248,0.12)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <Cpu className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-slate-300">Soluciones de Alto Impacto</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display mb-6 tracking-tight"
          >
            <span className="text-white">Servicios que</span>{' '}
            <span className="text-gradient">Impulsan</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed"
          >
            Desde agentes autónomos hasta desarrollo web de alto rendimiento.
            Cada solución diseñada para escalar contigo.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Stats – individual premium cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {stats.map((stat, index) => {
            const Icon = statIcons[index]
            const color = statColors[index]
            const c = statColorMap[color]
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative glass-card rounded-2xl p-7 text-center overflow-hidden group cursor-default"
              >
                {/* Top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${c.accent}, transparent)` }}
                />
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: c.bg }}
                >
                  <Icon className="w-5 h-5" style={{ color: c.text }} />
                </div>
                <div
                  className="text-4xl lg:text-5xl font-bold font-display mb-1.5"
                  style={{ color: c.text }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
