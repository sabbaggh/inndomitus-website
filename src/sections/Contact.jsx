import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageSquare, Send, ArrowRight, Calendar, Clock, CheckCircle, Loader2, AlertCircle } from 'lucide-react'
import { postData, ENDPOINTS } from '../config/api'

const inputClass = `
  w-full px-4 py-3.5 rounded-xl text-white text-sm
  placeholder-slate-500 transition-all duration-200
  focus:outline-none
`

const features = [
  {
    icon: Clock,
    label: 'Respuesta en menos de 24h',
    color: '#38BDF8',
    bg: 'rgba(56,189,248,0.1)',
  },
  {
    icon: Calendar,
    label: 'Reunión de descubrimiento gratuita',
    color: '#A78BFA',
    bg: 'rgba(167,139,250,0.1)',
  },
  {
    icon: Send,
    label: 'Propuesta detallada sin compromiso',
    color: '#34D399',
    bg: 'rgba(52,211,153,0.1)',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    nombreCliente: '',
    nombreEmpresa: '',
    email: '',
    descripcion: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    setErrorMessage('')

    try {
      await postData(ENDPOINTS.FORMULARIO_CONTACTO, formData)
      setSubmitStatus('success')
      setFormData({ nombreCliente: '', nombreEmpresa: '', email: '', descripcion: '' })
      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage(error.message || 'Error al enviar el formulario')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-violet-950/12 to-slate-950" />

      {/* Orbs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl"
        style={{ background: 'rgba(56,189,248,0.15)' }}
      />
      <motion.div
        animate={{ scale: [1.15, 1, 1.15], opacity: [0.06, 0.14, 0.06] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl"
        style={{ background: 'rgba(167,139,250,0.15)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <MessageSquare className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-slate-300">Empecemos a Construir</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display mb-6 tracking-tight leading-[1.1]"
            >
              <span className="text-white">¿Listo para</span>
              <br />
              <span className="text-gradient">Automatizar?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-lg mb-10 max-w-lg leading-relaxed"
            >
              Cuéntanos sobre tu proyecto. Te responderemos en menos de 24 horas
              con una propuesta personalizada.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              {features.map((f, i) => {
                const Icon = f.icon
                return (
                  <div key={i} className="flex items-center gap-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: f.bg }}
                    >
                      <Icon className="w-5 h-5" style={{ color: f.color }} />
                    </div>
                    <span className="text-slate-300 text-sm font-medium">{f.label}</span>
                  </div>
                )
              })}
            </motion.div>
          </div>

          {/* Right – Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass rounded-3xl p-8 lg:p-10 relative overflow-hidden"
          >
            {/* Subtle corner glow */}
            <div
              className="absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl pointer-events-none"
              style={{ background: 'rgba(56,189,248,0.06)' }}
            />

            {submitStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-14"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', duration: 0.5 }}
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ background: 'rgba(52,211,153,0.15)' }}
                >
                  <CheckCircle className="w-10 h-10 text-emerald-400" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2 font-display">¡Mensaje Enviado!</h3>
                <p className="text-slate-400">Te contactaremos en menos de 24 horas.</p>
              </motion.div>
            ) : (
              <form className="space-y-5 relative" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="nombreCliente" className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="nombreCliente"
                      name="nombreCliente"
                      value={formData.nombreCliente}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre"
                      className={inputClass}
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                      onFocus={e => { e.target.style.borderColor = 'rgba(56,189,248,0.5)'; e.target.style.boxShadow = '0 0 0 3px rgba(56,189,248,0.1)' }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none' }}
                    />
                  </div>

                  <div>
                    <label htmlFor="nombreEmpresa" className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="nombreEmpresa"
                      name="nombreEmpresa"
                      value={formData.nombreEmpresa}
                      onChange={handleChange}
                      placeholder="Tu empresa"
                      className={inputClass}
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                      onFocus={e => { e.target.style.borderColor = 'rgba(56,189,248,0.5)'; e.target.style.boxShadow = '0 0 0 3px rgba(56,189,248,0.1)' }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none' }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@empresa.com"
                    className={inputClass}
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                    onFocus={e => { e.target.style.borderColor = 'rgba(56,189,248,0.5)'; e.target.style.boxShadow = '0 0 0 3px rgba(56,189,248,0.1)' }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none' }}
                  />
                </div>

                <div>
                  <label htmlFor="descripcion" className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
                    ¿Qué necesitas?
                  </label>
                  <textarea
                    id="descripcion"
                    name="descripcion"
                    value={formData.descripcion}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Cuéntanos sobre tu proyecto..."
                    className={`${inputClass} resize-none`}
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                    onFocus={e => { e.target.style.borderColor = 'rgba(56,189,248,0.5)'; e.target.style.boxShadow = '0 0 0 3px rgba(56,189,248,0.1)' }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none' }}
                  />
                </div>

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-400 text-sm rounded-xl p-3"
                    style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {errorMessage}
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative px-8 py-4 rounded-xl text-base font-semibold text-slate-950 overflow-hidden transition-all duration-300 hover:shadow-[0_0_32px_rgba(56,189,248,0.35)] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                  style={{ background: 'linear-gradient(135deg, #38BDF8 0%, #0EA5E9 100%)' }}
                >
                  <span
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'linear-gradient(135deg, #7DD3FC 0%, #38BDF8 100%)' }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Mail className="w-5 h-5" />
                        Enviar Mensaje
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                </button>

                <p className="text-center text-xs text-slate-600">
                  Al enviar, aceptas recibir una respuesta personalizada de nuestro equipo.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
