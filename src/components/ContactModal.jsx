import { useState, useEffect } from 'react'
import { X, CheckCircle, Send } from 'lucide-react'

const FORMSPREE_ID = 'mrevjlll'

const services = [
  'Web Design & Development',
  'Brand Identity & Strategy',
  'UI/UX Design',
  'SEO & Digital Marketing',
  'Social Media Management',
  'E-Commerce Solutions',
  "Not sure yet — let's talk",
]

export default function ContactModal({ open, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [selectedServices, setSelectedServices] = useState([])
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [visible, setVisible] = useState(false)
  const [closing, setClosing] = useState(false)

  // Sync open → visible with a closing animation window before unmount
  useEffect(() => {
    if (open) {
      setVisible(true)
      setClosing(false)
    } else if (visible) {
      setClosing(true)
      const t = setTimeout(() => {
        setVisible(false)
        setClosing(false)
      }, 220)
      return () => clearTimeout(t)
    }
  }, [open])

  // Escape key
  useEffect(() => {
    if (!visible) return
    const fn = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [visible, onClose])

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = visible ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [visible])

  if (!visible) return null

  const toggleService = (s) =>
    setSelectedServices(prev =>
      prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]
    )

  const handleChange = (e) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, services: selectedServices.join(', ') }),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        const data = await res.json()
        setErrorMsg(data?.errors?.[0]?.message || 'Something went wrong.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Network error. Please email us directly.')
      setStatus('error')
    }
  }

  const handleReset = () => {
    setForm({ name: '', email: '', message: '' })
    setSelectedServices([])
    setStatus('idle')
    setErrorMsg('')
  }

  return (
    <div
      className={`nb-modal-overlay${closing ? ' nb-modal-overlay-out' : ''}`}
      onClick={onClose}
    >
      <div
        className={`nb-modal${closing ? ' nb-modal-out' : ''}`}
        onClick={e => e.stopPropagation()}
      >
        <div className="nb-modal-body">
          {status === 'success' ? (
            <div className="nb-form-success">
              <div className="nb-form-success-ring" style={{ animation: 'nb-pulse-ring 2s infinite' }}>
                <CheckCircle size={36} style={{ color: '#00f0ff' }} />
              </div>
              <h3>Message received!</h3>
              <p>We'll get back to you within 24 hours. Can't wait to work together!</p>
              <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
                <button className="nb-btn nb-btn-ghost" onClick={handleReset}>Send another</button>
                <button className="nb-btn nb-btn-ghost" onClick={onClose}>Close</button>
              </div>
            </div>
          ) : (
            <>
              <div className="nb-modal-header">
                <div>
                  <h2 className="nb-modal-title">Let's <span className="nb-grad">talk</span></h2>
                  <p className="nb-modal-subtitle">We reply within 24 hours — usually much faster</p>
                </div>
                <button className="nb-modal-close" onClick={onClose} aria-label="Close">
                  <X size={16} />
                </button>
              </div>

              {status === 'error' && (
                <div className="nb-form-error" style={{ marginBottom: 20 }}>
                  {errorMsg}
                </div>
              )}

              <form className="nb-form" onSubmit={handleSubmit}>
                <div className="nb-form-row">
                  <div className="nb-form-group">
                    <label className="nb-form-label">Name *</label>
                    <input
                      className="nb-form-input"
                      name="name" type="text" required
                      placeholder="Your name"
                      value={form.name} onChange={handleChange}
                    />
                  </div>
                  <div className="nb-form-group">
                    <label className="nb-form-label">Email *</label>
                    <input
                      className="nb-form-input"
                      name="email" type="email" required
                      placeholder="you@email.com"
                      value={form.email} onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="nb-form-group">
                  <label className="nb-form-label">What do you need? (optional)</label>
                  <div className="nb-modal-service-grid">
                    {services.map(s => (
                      <button
                        key={s} type="button"
                        className={`nb-modal-service-chip${selectedServices.includes(s) ? ' nb-modal-service-chip-active' : ''}`}
                        onClick={() => toggleService(s)}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="nb-form-group">
                  <label className="nb-form-label">Message *</label>
                  <textarea
                    className="nb-form-input nb-form-textarea"
                    name="message" required rows={4}
                    placeholder="Tell us about your project..."
                    value={form.message} onChange={handleChange}
                  />
                </div>

                <button
                  type="submit" disabled={status === 'sending'}
                  className="nb-btn nb-btn-grad"
                  style={{ width: '100%', justifyContent: 'center', padding: '15px 24px', fontSize: '.95rem' }}
                >
                  {status === 'sending'
                    ? <span className="nb-spinner" />
                    : <><span>Send message</span><Send size={15} /></>
                  }
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
