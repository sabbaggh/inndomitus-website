import { motion } from 'framer-motion'

export function PrimaryButton({ children, href, className = '' }) {
  const Component = href ? motion.a : motion.button

  return (
    <Component
      href={href}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={`group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-semibold text-base text-slate-950 overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_32px_rgba(56,189,248,0.4)] ${className}`}
      style={{
        background: 'linear-gradient(135deg, #38BDF8 0%, #0EA5E9 100%)',
      }}
    >
      {/* Shine sweep */}
      <span
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(135deg, #7DD3FC 0%, #38BDF8 50%, #0EA5E9 100%)',
        }}
      />
      <span className="relative z-10 flex items-center justify-center gap-2.5 font-semibold">
        {children}
      </span>
    </Component>
  )
}

export function SecondaryButton({ children, href, className = '' }) {
  const Component = href ? motion.a : motion.button

  return (
    <Component
      href={href}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={`group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-semibold text-slate-300 overflow-hidden cursor-pointer transition-all duration-300 hover:text-white hover:border-slate-500 ${className}`}
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.10)',
      }}
    >
      <span
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'rgba(255,255,255,0.07)' }}
      />
      <span className="relative z-10 flex items-center justify-center gap-2.5">
        {children}
      </span>
    </Component>
  )
}

export function GlowButton({ children, href, glowColor = 'cyan', className = '' }) {
  const Component = href ? motion.a : motion.button

  const styles = {
    cyan: {
      border: 'rgba(56,189,248,0.3)',
      hover: 'rgba(56,189,248,0.08)',
      shadow: 'rgba(56,189,248,0.3)',
    },
    violet: {
      border: 'rgba(167,139,250,0.3)',
      hover: 'rgba(167,139,250,0.08)',
      shadow: 'rgba(167,139,250,0.3)',
    },
    emerald: {
      border: 'rgba(52,211,153,0.3)',
      hover: 'rgba(52,211,153,0.08)',
      shadow: 'rgba(52,211,153,0.3)',
    },
  }

  const s = styles[glowColor] || styles.cyan

  return (
    <Component
      href={href}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white transition-all duration-300 cursor-pointer ${className}`}
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: `1px solid ${s.border}`,
      }}
    >
      {children}
    </Component>
  )
}
