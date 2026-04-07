import { motion } from 'framer-motion'
import { ArrowRight, Zap, TrendingUp, Shield, Sparkles, Users } from 'lucide-react'
import { PrimaryButton, SecondaryButton } from '../components/Button'

// Stable particle positions
const particles = [
  { id: 1, left: '8%',  top: '18%', size: 2,   delay: 0,   dur: 7  },
  { id: 2, left: '88%', top: '12%', size: 1.5, delay: 1.2, dur: 9  },
  { id: 3, left: '22%', top: '72%', size: 2.5, delay: 2,   dur: 6  },
  { id: 4, left: '76%', top: '65%', size: 1.5, delay: 0.5, dur: 8  },
  { id: 5, left: '93%', top: '42%', size: 2,   delay: 3,   dur: 7  },
  { id: 6, left: '4%',  top: '55%', size: 1,   delay: 1.8, dur: 10 },
  { id: 7, left: '55%', top: '8%',  size: 1.5, delay: 4,   dur: 8  },
  { id: 8, left: '38%', top: '85%', size: 2,   delay: 2.5, dur: 6  },
  { id: 9, left: '65%', top: '28%', size: 1,   delay: 0.8, dur: 9  },
  { id: 10, left: '42%', top: '52%', size: 1.5, delay: 3.5, dur: 7 },
  { id: 11, left: '16%', top: '40%', size: 1,  delay: 5,   dur: 8  },
  { id: 12, left: '80%', top: '80%', size: 2,  delay: 1.5, dur: 6  },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080C14]">

      {/* ══════════════════════════════════════
          LAYER 1 — BASE GRID (subtle flat)
      ══════════════════════════════════════ */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(56,189,248,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56,189,248,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* ══════════════════════════════════════
          LAYER 2 — AURORA ORBS (animated)
      ══════════════════════════════════════ */}

      {/* Top-left cyan aurora */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          top: '-15%', left: '-10%',
          width: '70vw', height: '70vw',
          maxWidth: 900, maxHeight: 900,
          background: 'radial-gradient(circle, rgba(56,189,248,0.16) 0%, rgba(56,189,248,0.04) 45%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.08, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Top-right violet aurora */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          top: '-20%', right: '-12%',
          width: '60vw', height: '60vw',
          maxWidth: 800, maxHeight: 800,
          background: 'radial-gradient(circle, rgba(167,139,250,0.2) 0%, rgba(167,139,250,0.05) 45%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{ opacity: [0.5, 0.9, 0.5], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Center-top subtle blue focus glow */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          top: '5%', left: '50%', transform: 'translateX(-50%)',
          width: '90vw', height: '50vh',
          maxWidth: 1000,
          background: 'radial-gradient(ellipse, rgba(56,189,248,0.07) 0%, rgba(167,139,250,0.04) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* Bottom-center glow (feeds the horizon) */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          bottom: '-5%', left: '50%', transform: 'translateX(-50%)',
          width: '100vw', height: '50vh',
          background: 'radial-gradient(ellipse, rgba(56,189,248,0.25) 0%, rgba(56,189,248,0.06) 50%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />

      {/* ══════════════════════════════════════
          LAYER 3 — DIAGONAL SWEEP BEAMS
      ══════════════════════════════════════ */}

      {/* Beam 1 */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          top: '22%', left: 0, right: 0, height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(56,189,248,0.0) 10%, rgba(56,189,248,0.7) 50%, rgba(167,139,250,0.5) 70%, transparent 100%)',
          transform: 'rotate(-10deg)',
          filter: 'blur(1.5px)',
          boxShadow: '0 0 12px rgba(56,189,248,0.4)',
        }}
        animate={{ x: ['-110%', '110%'], opacity: [0, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity, repeatDelay: 6, ease: 'easeInOut' }}
      />

      {/* Beam 2 */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          top: '58%', left: 0, right: 0, height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(167,139,250,0.6) 30%, rgba(56,189,248,0.5) 60%, transparent 100%)',
          transform: 'rotate(6deg)',
          filter: 'blur(1.5px)',
          boxShadow: '0 0 12px rgba(167,139,250,0.3)',
        }}
        animate={{ x: ['110%', '-110%'], opacity: [0, 0.8, 0] }}
        transition={{ duration: 6, repeat: Infinity, repeatDelay: 4, ease: 'easeInOut', delay: 3.5 }}
      />

      {/* Beam 3 — thin fast one */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          top: '40%', left: 0, right: 0, height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(52,211,153,0.5), transparent)',
          transform: 'rotate(-3deg)',
          filter: 'blur(1px)',
        }}
        animate={{ x: ['-110%', '110%'], opacity: [0, 0.6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 8, ease: 'easeInOut', delay: 7 }}
      />

      {/* ══════════════════════════════════════
          LAYER 4 — FLOATING PARTICLES
      ══════════════════════════════════════ */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute pointer-events-none rounded-full"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            background: p.id % 3 === 0 ? '#A78BFA' : p.id % 3 === 1 ? '#38BDF8' : '#34D399',
            boxShadow: `0 0 ${p.size * 3}px ${p.id % 3 === 0 ? 'rgba(167,139,250,0.8)' : p.id % 3 === 1 ? 'rgba(56,189,248,0.8)' : 'rgba(52,211,153,0.8)'}`,
          }}
          animate={{ opacity: [0.15, 0.9, 0.15], y: [-5, 5, -5] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* ══════════════════════════════════════
          LAYER 5 — PERSPECTIVE GRID FLOOR
      ══════════════════════════════════════ */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '52%',
          maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 40%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 40%, transparent 100%)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: '-60%',
            right: '-60%',
            height: '260%',
            backgroundImage: `
              linear-gradient(rgba(56,189,248,0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(56,189,248,0.2) 1px, transparent 1px)
            `,
            backgroundSize: '70px 70px',
            transform: 'perspective(700px) rotateX(72deg)',
            transformOrigin: '50% 0%',
          }}
        />
      </div>

      {/* ══════════════════════════════════════
          LAYER 6 — HORIZON GLOW LINE
      ══════════════════════════════════════ */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '46%',
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(56,189,248,0.9) 25%, rgba(167,139,250,0.7) 50%, rgba(56,189,248,0.9) 75%, transparent 100%)',
          filter: 'blur(2px)',
          boxShadow: '0 0 20px rgba(56,189,248,0.6), 0 0 60px rgba(56,189,248,0.25), 0 0 100px rgba(56,189,248,0.1)',
        }}
      />
      {/* Horizon bloom (wide soft glow above the line) */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '42%',
          left: '10%',
          right: '10%',
          height: '60px',
          background: 'radial-gradient(ellipse at 50% 100%, rgba(56,189,248,0.18) 0%, transparent 70%)',
          filter: 'blur(8px)',
        }}
      />

      {/* ══════════════════════════════════════
          LAYER 7 — FLOATING METRIC CARDS
      ══════════════════════════════════════ */}

      {/* Right card */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.8, ease: 'easeOut' }}
        className="absolute right-8 top-[32%] hidden xl:block z-20"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            background: 'rgba(8,12,20,0.92)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(56,189,248,0.18)',
            borderRadius: 16,
            padding: '14px 18px',
            minWidth: 200,
            boxShadow: '0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(56,189,248,0.06), inset 0 1px 0 rgba(255,255,255,0.06)',
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: 'rgba(56,189,248,0.12)', border: '1px solid rgba(56,189,248,0.2)' }}
            >
              <TrendingUp className="w-5 h-5" style={{ color: '#38BDF8' }} />
            </div>
            <div>
              <div className="text-2xl font-bold font-display leading-none" style={{ color: '#38BDF8' }}>+50</div>
              <div className="text-xs text-slate-400 mt-0.5 font-medium">Proyectos IA entregados</div>
            </div>
          </div>
          {/* Mini sparkline */}
          <div className="mt-3 flex items-end gap-1 h-6">
            {[30, 50, 40, 70, 55, 80, 65, 90, 75, 100].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm"
                style={{
                  height: `${h * 0.24}px`,
                  background: i === 9 ? '#38BDF8' : 'rgba(56,189,248,0.25)',
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Left card */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.8, duration: 0.8, ease: 'easeOut' }}
        className="absolute left-8 bottom-[42%] hidden xl:block z-20"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          style={{
            background: 'rgba(8,12,20,0.92)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(52,211,153,0.18)',
            borderRadius: 16,
            padding: '14px 18px',
            minWidth: 200,
            boxShadow: '0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(52,211,153,0.06), inset 0 1px 0 rgba(255,255,255,0.06)',
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: 'rgba(52,211,153,0.12)', border: '1px solid rgba(52,211,153,0.2)' }}
            >
              <Shield className="w-5 h-5" style={{ color: '#34D399' }} />
            </div>
            <div>
              <div className="text-2xl font-bold font-display leading-none" style={{ color: '#34D399' }}>99%</div>
              <div className="text-xs text-slate-400 mt-0.5 font-medium">Uptime garantizado</div>
            </div>
          </div>
          <div
            className="mt-3 flex items-center gap-1.5 text-xs"
            style={{ color: '#34D399' }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Sistemas activos · 24/7
          </div>
        </motion.div>
      </motion.div>

      {/* Founders card - only on very wide screens */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.1, duration: 0.8, ease: 'easeOut' }}
        className="absolute right-8 bottom-[44%] hidden 2xl:block z-20"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
          style={{
            background: 'rgba(8,12,20,0.92)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(167,139,250,0.18)',
            borderRadius: 16,
            padding: '12px 16px',
            boxShadow: '0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(167,139,250,0.06), inset 0 1px 0 rgba(255,255,255,0.06)',
          }}
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {['JC', 'DR', 'EH', 'LG'].map((init, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold font-display"
                  style={{
                    background: ['rgba(56,189,248,0.2)', 'rgba(167,139,250,0.2)', 'rgba(52,211,153,0.2)', 'rgba(251,191,36,0.2)'][i],
                    color: ['#38BDF8', '#A78BFA', '#34D399', '#FCD34D'][i],
                    border: '2px solid rgba(8,12,20,0.9)',
                    zIndex: 4 - i,
                  }}
                >
                  {init}
                </div>
              ))}
            </div>
            <div>
              <div className="text-xs font-semibold text-white">6 Fundadores</div>
              <div className="text-xs text-slate-500">Latinoamérica</div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* ══════════════════════════════════════
          LAYER 8 — MAIN CONTENT
      ══════════════════════════════════════ */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-36">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full mb-8"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.10)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <span
            className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
            style={{ boxShadow: '0 0 10px rgba(52,211,153,0.9)' }}
          />
          <span className="text-sm text-slate-300 font-medium">Elite Tech Squad · Latinoamérica</span>
          <span
            className="text-xs px-2.5 py-0.5 rounded-full font-bold"
            style={{ background: 'rgba(56,189,248,0.18)', color: '#38BDF8', border: '1px solid rgba(56,189,248,0.25)' }}
          >
            IA
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="font-bold font-display tracking-tight mb-8 leading-[1.04]"
          style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)' }}
        >
          <span
            className="block text-white"
            style={{ textShadow: '0 0 80px rgba(255,255,255,0.08)' }}
          >
            IA que
          </span>
          <span
            className="block text-shimmer"
            style={{ filter: 'drop-shadow(0 0 40px rgba(56,189,248,0.4))' }}
          >
            Escala
          </span>
          <span
            className="block text-white"
            style={{ textShadow: '0 0 80px rgba(255,255,255,0.08)' }}
          >
            tu Negocio
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed mb-12"
          style={{ color: '#8B949E' }}
        >
          Construimos{' '}
          <span className="font-medium" style={{ color: '#38BDF8' }}>agentes inteligentes</span>,{' '}
          <span className="font-medium" style={{ color: '#A78BFA' }}>chatbots</span> y{' '}
          <span className="font-medium text-slate-200">software</span> que transforman
          la forma en que opera tu empresa.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <PrimaryButton href="#contacto">
            <Zap className="w-4 h-4" />
            Impulsa tu Negocio
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </PrimaryButton>

          <SecondaryButton href="#demo">
            <Sparkles className="w-4 h-4" />
            Ver Demo en Vivo
          </SecondaryButton>
        </motion.div>

        {/* Tech strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.9 }}
          className="flex flex-col items-center gap-3.5"
        >
          <p className="text-xs uppercase tracking-[0.2em] font-semibold" style={{ color: '#30363D' }}>
            Tecnologías que dominamos
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {['OpenAI', 'LangChain', 'n8n', 'WhatsApp API', 'React', 'Node.js', 'Python'].map((tech) => (
              <span
                key={tech}
                className="text-xs px-3.5 py-1.5 rounded-full font-medium"
                style={{
                  color: '#484F58',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ══════════════════════════════════════
          SCROLL INDICATOR
      ══════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full flex items-start justify-center pt-2"
          style={{ border: '1px solid rgba(255,255,255,0.12)' }}
        >
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3], height: ['4px', '8px', '4px'] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-0.5 rounded-full"
            style={{ background: '#38BDF8', boxShadow: '0 0 6px rgba(56,189,248,0.8)' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
