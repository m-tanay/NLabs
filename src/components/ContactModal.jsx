import { useState, useEffect } from 'react'
import { X, CheckCircle, Send, Calendar, Clock, Mail, User, MessageSquare, Zap, Phone, Globe } from 'lucide-react'

const MeetLogo = ({ size = 14 }) => (
  <img src="/assets/Google-Meet-Logo-768x432.png" alt="Google Meet" style={{ height: size, width: 'auto', flexShrink: 0, objectFit: 'contain' }} />
)

const FORMSPREE_ID = 'mrevjlll'
const AGENCY_EMAIL = 'hello@nexbeelabs.com'

const services = [
  'AI Agents & Automation',
  'Business Automation',
  'AI Chatbots',
  'Web Design & Dev',
  'Brand Identity',
  'UI/UX Design',
  'SEO & Marketing',
  'Social Media',
  'E-Commerce',
  "Not sure yet",
]

const TIME_SLOTS = ['9:00 AM','10:00 AM','11:00 AM','1:00 PM','2:00 PM','3:00 PM','4:00 PM']

const TRUST = [
  { Icon: Zap,   text: 'Reply within 24 hours' },
  { Icon: Phone, text: 'Free 30-min discovery call' },
  { Icon: Globe, text: 'Punchbowl, NSW 2196, Australia 🇦🇺' },
]

function getWeekdays(count = 10) {
  const days = []
  const d = new Date()
  d.setDate(d.getDate() + 1)
  while (days.length < count) {
    if (d.getDay() !== 0 && d.getDay() !== 6) days.push(new Date(d))
    d.setDate(d.getDate() + 1)
  }
  return days
}

function fmtDay(d) {
  return d.toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'short' })
}

function toCalendarDates(date, timeStr) {
  const period = timeStr.slice(-2)
  let [h, m]   = timeStr.slice(0, -3).split(':').map(Number)
  if (period === 'PM' && h !== 12) h += 12
  if (period === 'AM' && h === 12) h = 0
  const start = new Date(date)
  start.setHours(h, m, 0, 0)
  const utcStart = new Date(start.getTime() - 10 * 3600000)
  const utcEnd   = new Date(utcStart.getTime() + 30 * 60000)
  const fmt = d => d.toISOString().replace(/[-:]/g,'').split('.')[0] + 'Z'
  return `${fmt(utcStart)}/${fmt(utcEnd)}`
}

/* ─── Left brand panel ─────────────────────────── */
function BrandPanel() {
  return (
    <div className="nb-mv2-left">
      <div className="nb-mv2-left-glow" />
      <div className="nb-mv2-left-dots" />
      <div className="nb-mv2-left-content">
        <img
          src="/assets/NexbeeLabs Logo-Photoroom croped.png"
          alt="NexbeeLabs"
          style={{ height: 32, width: 'auto', marginBottom: 32, filter: 'brightness(1.3)' }}
        />
        <p className="nb-mv2-left-eyebrow">Get in touch</p>
        <h3 className="nb-mv2-left-headline">
          Let's build something<br />
          <span className="nb-grad">worth talking about.</span>
        </h3>
        <div className="nb-mv2-trust">
          {TRUST.map(({ Icon, text }) => (
            <div key={text} className="nb-mv2-trust-row">
              <div className="nb-mv2-trust-icon"><Icon size={12} /></div>
              <span>{text}</span>
            </div>
          ))}
        </div>
        <div className="nb-mv2-left-email">
          <Mail size={12} />
          <span>{AGENCY_EMAIL}</span>
        </div>
      </div>
    </div>
  )
}

/* ─── Message form ─────────────────────────────── */
function MessagePane({ onClose }) {
  const [form,     setForm]     = useState({ name: '', email: '', message: '' })
  const [selected, setSelected] = useState([])
  const [status,   setStatus]   = useState('idle')
  const [err,      setErr]      = useState('')

  const toggle = s => setSelected(p => p.includes(s) ? p.filter(x => x !== s) : [...p, s])
  const handle = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending'); setErr('')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, services: selected.join(', ') }),
      })
      res.ok ? setStatus('success') : setStatus('error')
    } catch { setStatus('error') }
  }

  if (status === 'success') return (
    <div className="nb-mv2-success">
      <div className="nb-mv2-success-ring"><CheckCircle size={32} style={{ color: '#00f0ff' }} /></div>
      <h3>Message received!</h3>
      <p>We'll get back to you within 24 hours — usually much faster.</p>
      <div style={{ display:'flex', gap:10, marginTop:16 }}>
        <button className="nb-btn nb-btn-ghost" onClick={() => { setStatus('idle'); setForm({ name:'',email:'',message:'' }); setSelected([]) }}>Send another</button>
        <button className="nb-btn nb-btn-ghost" onClick={onClose}>Done</button>
      </div>
    </div>
  )

  return (
    <form className="nb-mv2-form" onSubmit={submit}>
      {err && <div className="nb-form-error" style={{marginBottom:16}}>{err}</div>}

      <div className="nb-mv2-row">
        <div className="nb-mv2-field">
          <label className="nb-mv2-label">Your name</label>
          <div className="nb-mv2-input-wrap">
            <User size={14} className="nb-mv2-icon" />
            <input className="nb-mv2-input" name="name" required placeholder="Arif Rahman" value={form.name} onChange={handle} />
          </div>
        </div>
        <div className="nb-mv2-field">
          <label className="nb-mv2-label">Email address</label>
          <div className="nb-mv2-input-wrap">
            <Mail size={14} className="nb-mv2-icon" />
            <input className="nb-mv2-input" name="email" type="email" required placeholder="you@company.com" value={form.email} onChange={handle} />
          </div>
        </div>
      </div>

      <div className="nb-mv2-field">
        <label className="nb-mv2-label">What do you need? <span style={{opacity:.4,fontWeight:400}}>(pick all that apply)</span></label>
        <div className="nb-mv2-chips">
          {services.map(s => (
            <button key={s} type="button"
              className={`nb-mv2-chip${selected.includes(s) ? ' nb-mv2-chip-on' : ''}`}
              onClick={() => toggle(s)}>
              {selected.includes(s) && <CheckCircle size={10} />}
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="nb-mv2-field">
        <label className="nb-mv2-label">Tell us about your project</label>
        <div className="nb-mv2-input-wrap nb-mv2-textarea-wrap">
          <MessageSquare size={14} className="nb-mv2-icon" style={{top:14}} />
          <textarea className="nb-mv2-input nb-mv2-textarea" name="message" required rows={4}
            placeholder="What are you building? What's not working? What does success look like?"
            value={form.message} onChange={handle} />
        </div>
      </div>

      <button type="submit" className="nb-mv2-submit" disabled={status === 'sending'}>
        <span className="nb-mv2-submit-shine" />
        {status === 'sending'
          ? <><span className="nb-spinner" /> Sending…</>
          : <><Send size={14} /> Send message</>}
      </button>

      <p className="nb-mv2-note">No spam · No auto-replies · We respond personally</p>
    </form>
  )
}

/* ─── Booking pane ─────────────────────────────── */
function BookingPane({ onClose }) {
  const weekdays    = getWeekdays(10)
  const [date,      setDate]      = useState(null)
  const [time,      setTime]      = useState(null)
  const [name,      setName]      = useState('')
  const [email,     setEmail]     = useState('')
  const [confirmed, setConfirmed] = useState(false)

  const canBook = date && time && name && email

  const handleBook = async () => {
    const dates   = toCalendarDates(date, time)
    const label   = encodeURIComponent('Discovery Call — NexbeeLabs')
    const details = encodeURIComponent(`30-min discovery call via Google Meet.\n\nClient: ${name} (${email})\nTime: ${fmtDay(date)} at ${time} AEST`)
    const calUrl  = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${label}&dates=${dates}&details=${details}&location=${encodeURIComponent('Google Meet')}&add=${AGENCY_EMAIL}`
    window.open(calUrl, '_blank')
    await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ name, email, message: `📅 Booking: ${fmtDay(date)} at ${time} AEST`, type: 'booking' }),
    }).catch(() => {})
    setConfirmed(true)
  }

  if (confirmed) return (
    <div className="nb-mv2-success">
      <div className="nb-mv2-success-ring"><CheckCircle size={32} style={{ color: '#00f0ff' }} /></div>
      <h3>Booking confirmed!</h3>
      <p>Google Calendar opened in a new tab. We'll send you a Meet link once confirmed.</p>
      <div style={{ display:'flex', gap:10, marginTop:16 }}>
        <button className="nb-btn nb-btn-ghost" onClick={() => setConfirmed(false)}>Change time</button>
        <button className="nb-btn nb-btn-ghost" onClick={onClose}>Done</button>
      </div>
    </div>
  )

  return (
    <div className="nb-mv2-booking">

      <div className="nb-mv2-field">
        <label className="nb-mv2-label"><Calendar size={12}/> Choose a date</label>
        <div className="nb-mv2-dates">
          {weekdays.map((d, i) => (
            <button key={i} type="button"
              className={`nb-mv2-date${date?.toDateString() === d.toDateString() ? ' nb-mv2-date-on' : ''}`}
              onClick={() => setDate(d)}>
              <span className="nb-mv2-date-wd">{d.toLocaleDateString('en-AU',{weekday:'short'})}</span>
              <span className="nb-mv2-date-n">{d.getDate()}</span>
              <span className="nb-mv2-date-m">{d.toLocaleDateString('en-AU',{month:'short'})}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="nb-mv2-field">
        <label className="nb-mv2-label"><Clock size={12}/> Choose a time <span style={{opacity:.4,fontWeight:400}}>AEST</span></label>
        <div className="nb-mv2-times">
          {TIME_SLOTS.map(t => (
            <button key={t} type="button"
              className={`nb-mv2-time${time === t ? ' nb-mv2-time-on' : ''}`}
              onClick={() => setTime(t)}>{t}</button>
          ))}
        </div>
      </div>

      <div className="nb-mv2-row">
        <div className="nb-mv2-field">
          <label className="nb-mv2-label">Your name</label>
          <div className="nb-mv2-input-wrap">
            <User size={14} className="nb-mv2-icon" />
            <input className="nb-mv2-input" placeholder="Arif Rahman" value={name} onChange={e => setName(e.target.value)} />
          </div>
        </div>
        <div className="nb-mv2-field">
          <label className="nb-mv2-label">Email</label>
          <div className="nb-mv2-input-wrap">
            <Mail size={14} className="nb-mv2-icon" />
            <input className="nb-mv2-input" type="email" placeholder="you@company.com" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
        </div>
      </div>

      {date && time && (
        <div className="nb-mv2-summary">
          <MeetLogo size={13}/>
          <span>Google Meet · <strong>{fmtDay(date)}</strong> at <strong>{time}</strong> AEST · 30 min</span>
        </div>
      )}

      <button type="button" className="nb-mv2-submit"
        style={{ opacity: canBook ? 1 : .4, cursor: canBook ? 'pointer' : 'not-allowed' }}
        onClick={canBook ? handleBook : undefined}>
        <span className="nb-mv2-submit-shine" />
        <MeetLogo size={16}/> Book with Google Meet
      </button>
    </div>
  )
}

/* ─── Modal shell ──────────────────────────────── */
export default function ContactModal({ open, onClose }) {
  const [tab,     setTab]     = useState('message')
  const [visible, setVisible] = useState(false)
  const [closing, setClosing] = useState(false)

  useEffect(() => {
    if (open) { setVisible(true); setClosing(false) }
    else if (visible) {
      setClosing(true)
      const t = setTimeout(() => { setVisible(false); setClosing(false) }, 220)
      return () => clearTimeout(t)
    }
  }, [open])

  useEffect(() => {
    if (!visible) return
    const fn = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [visible, onClose])

  useEffect(() => {
    document.body.style.overflow = visible ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [visible])

  if (!visible) return null

  return (
    <div className={`nb-modal-overlay${closing ? ' nb-modal-overlay-out' : ''}`} onClick={onClose}>
      <div className={`nb-mv2${closing ? ' nb-modal-out' : ''}`} onClick={e => e.stopPropagation()}>

        {/* Rainbow top bar */}
        <div className="nb-mv2-bar" />

        <div className="nb-mv2-layout">

          {/* Brand panel */}
          <BrandPanel />

          {/* Form panel */}
          <div className="nb-mv2-right">

            {/* Close */}
            <button className="nb-mv2-close" onClick={onClose} aria-label="Close"><X size={15}/></button>

            {/* Header */}
            <div className="nb-mv2-header">
              <h2 className="nb-mv2-title">Let's <span className="nb-grad">talk</span></h2>
              <p className="nb-mv2-sub">No spam · No auto-replies · Personal response</p>
            </div>

            {/* Tabs */}
            <div className="nb-mv2-tabs">
              <button className={`nb-mv2-tab${tab==='message'?' nb-mv2-tab-on':''}`} onClick={() => setTab('message')}>
                <Send size={13}/> Message
              </button>
              <button className={`nb-mv2-tab${tab==='call'?' nb-mv2-tab-on':''}`} onClick={() => setTab('call')}>
                <MeetLogo size={13}/> Book a call
              </button>
            </div>

            {/* Content */}
            {tab === 'call'
              ? <BookingPane onClose={onClose} />
              : <MessagePane onClose={onClose} />}

          </div>
        </div>
      </div>
    </div>
  )
}
