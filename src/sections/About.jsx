import { motion } from 'framer-motion'
import { Users, Target, Zap, Shield } from 'lucide-react'
import { founders, values } from '../data/team'
import TeamCarousel from '../components/TeamCarousel'

const avatarColors = [
  { from: 'rgba(56,189,248,0.25)',  to: 'rgba(14,165,233,0.12)',  text: '#38BDF8' },
  { from: 'rgba(167,139,250,0.25)', to: 'rgba(139,92,246,0.12)',  text: '#A78BFA' },
  { from: 'rgba(52,211,153,0.25)',  to: 'rgba(16,185,129,0.12)',  text: '#34D399' },
  { from: 'rgba(251,191,36,0.25)',  to: 'rgba(245,158,11,0.12)',  text: '#FCD34D' },
  { from: 'rgba(244,114,182,0.25)', to: 'rgba(236,72,153,0.12)',  text: '#F472B6' },
  { from: 'rgba(56,189,248,0.25)',  to: 'rgba(99,102,241,0.12)',  text: '#818CF8' },
]

const valueIcons = [Target, Zap, Shield]
const valueColors = [
  { icon: '#38BDF8', bg: 'rgba(56,189,248,0.1)',  accent: 'rgba(56,189,248,0.6)',  num: 'rgba(56,189,248,0.06)'  },
  { icon: '#A78BFA', bg: 'rgba(167,139,250,0.1)', accent: 'rgba(167,139,250,0.6)', num: 'rgba(167,139,250,0.06)' },
  { icon: '#34D399', bg: 'rgba(52,211,153,0.1)',  accent: 'rgba(52,211,153,0.6)',  num: 'rgba(52,211,153,0.06)'  },
]

export default function About() {
  return (
    <section id="nosotros" className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/20 to-slate-950" />

      {/* Decorative rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/4 -right-48 w-96 h-96 rounded-full pointer-events-none"
        style={{ border: '1px solid rgba(167,139,250,0.08)' }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-1/4 -left-48 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ border: '1px solid rgba(56,189,248,0.07)' }}
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
            <Users className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-slate-300">The Squad</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display mb-6 tracking-tight"
          >
            <span className="text-gradient">6 Fundadores.</span>
            <br />
            <span className="text-white">Una Misión.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed"
          >
            Un equipo de apasionados por la tecnología que decidió unirse para
            construir el futuro de las empresas con Inteligencia Artificial.
          </motion.p>
        </div>

        {/* Team Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 -mx-4 sm:-mx-6 lg:-mx-8"
        >
          <TeamCarousel />
        </motion.div>

        {/* Founders Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-24"
        >
          {founders.map((founder, index) => {
            const initials = founder.name
              .split(' ')
              .filter((_, i) => i === 0 || i === 1)
              .map((w) => w[0])
              .join('')
            const ac = avatarColors[index % avatarColors.length]
            return (
              <motion.div
                key={founder.id}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="glass-card rounded-2xl p-5 text-center group cursor-pointer relative overflow-hidden"
              >
                {/* Top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${ac.text}, transparent)` }}
                />
                {/* Avatar */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 font-bold font-display text-lg"
                  style={{
                    background: `linear-gradient(135deg, ${ac.from}, ${ac.to})`,
                    color: ac.text,
                    border: `1px solid ${ac.text}22`,
                  }}
                >
                  {initials}
                </div>
                <h4 className="text-sm font-semibold text-white mb-1 leading-tight">
                  {founder.name.split(' ').slice(0, 2).join(' ')}
                </h4>
                <p className="text-xs text-slate-500 leading-tight">
                  {founder.role}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Values */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {values.map((value, index) => {
            const Icon = valueIcons[index]
            const vc = valueColors[index]
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative glass-card rounded-2xl p-8 overflow-hidden group"
              >
                {/* Large background number */}
                <div
                  className="absolute top-4 right-5 text-8xl font-bold font-display leading-none select-none pointer-events-none"
                  style={{ color: vc.num }}
                >
                  0{index + 1}
                </div>
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${vc.accent}, transparent)` }}
                />
                <div
                  className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: vc.bg }}
                >
                  <Icon className="w-6 h-6" style={{ color: vc.icon }} />
                </div>
                <h3 className="relative text-lg font-semibold text-white mb-3 font-display">
                  {value.title}
                </h3>
                <p className="relative text-slate-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="section-divider mb-12 mx-auto max-w-md" />
          <blockquote className="text-2xl lg:text-3xl font-display text-slate-300 italic max-w-3xl mx-auto leading-relaxed">
            "No solo construimos software.{' '}
            <span className="text-gradient-vivid font-semibold not-italic">
              Construimos el futuro
            </span>{' '}
            de tu empresa."
          </blockquote>
          <p className="mt-5 text-slate-500 text-sm tracking-wide">— El equipo Inndomitus</p>
        </motion.div>
      </div>
    </section>
  )
}
