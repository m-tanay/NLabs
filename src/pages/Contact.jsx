import { useState } from 'react'
import { ArrowUpRight, Mail, Clock, Globe, Phone, Send, Linkedin, Instagram, Facebook, Dribbble, CheckCircle, Sparkles, Star, User, Building2 } from 'lucide-react'
import Badge from '../components/Badge'
import { NavLink } from 'react-router-dom'
import { Reveal } from '../hooks/useInView'

const FORMSPREE_ID = 'mrevjlll'
const CALENDLY_URL   = 'https://calendly.com/YOUR_USERNAME/30min' // Replace with your Calendly link

const services = [
  'AI Agents & Intelligent Automation',
  'Business Process Automation',
  'AI Chatbots & Virtual Assistants',
  'Web Design & Development',
  'Brand Identity & Strategy',
  'UI/UX Design',
  'SEO & Digital Marketing',
  'Social Media Management',
  'E-Commerce Solutions',
  'Not sure yet — let\'s talk',
]

const testimonials = [
  { quote: 'NexbeeLabs delivered our entire website in under 3 weeks. The quality blew us away.', name: 'Rahim H.', role: 'CEO, TechBD' },
  { quote: 'Our SEO traffic tripled in four months. Best investment we made this year.', name: 'Karim A.', role: 'MD, GreenMart' },
  { quote: 'The brand identity they built feels exactly like us — they really listened.', name: 'Mitu R.', role: 'Founder, Bloom Studio' },
  { quote: 'Transparent, fast, and genuinely talented. Nothing like the agencies we tried before.', name: 'Sara K.', role: 'Co-founder, StyleHive' },
  { quote: 'They responded within 2 hours of our first message and never missed a deadline.', name: 'Jasim T.', role: 'CTO, ByteCraft' },
  { quote: 'Our conversion rate went up 40% after the redesign. Remarkable work.', name: 'Nabil F.', role: 'Head of Growth, ShopEasy' },
]

const stats = [
  { value: '120+', label: 'Projects delivered' },
  { value: '100%', label: 'Client satisfaction' },
  { value: '< 24h', label: 'Response time' },
  { value: '5.0★', label: 'Average rating' },
  { value: '6yr',  label: 'Combined experience' },
]

function Stars() {
  return (
    <div style={{display:'flex',gap:2,marginBottom:10}}>
      {[...Array(5)].map((_,i) => <Star key={i} size={12} fill="#ffb86c" color="#ffb86c"/>)}
    </div>
  )
}

function TrustSignals() {
  const row1 = [...testimonials, ...testimonials]
  const row2 = [...stats, ...stats, ...stats, ...stats]
  return (
    <section className="nb-trust-section">
      <div className="nb-trust-track-wrap">
        <div className="nb-trust-track">
          {row1.map((t, i) => (
            <div key={i} className="nb-trust-quote-card">
              <Stars/>
              <p className="nb-trust-quote">"{t.quote}"</p>
              <div className="nb-trust-author">
                <span className="nb-trust-name">{t.name}</span>
                <span className="nb-trust-role">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="nb-trust-track-wrap" style={{marginTop:12}}>
        <div className="nb-trust-track nb-trust-track-reverse">
          {row2.map((s, i) => (
            <div key={i} className="nb-trust-stat-card">
              <span className="nb-trust-stat-val">{s.value}</span>
              <span className="nb-trust-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const SERVICE_OPTIONS = [
  { label: 'AI Agents',          base: 1200, color: '#00f0ff' },
  { label: 'Automation',         base: 800,  color: '#7928ca' },
  { label: 'AI Chatbot',         base: 900,  color: '#ff0080' },
  { label: 'Web Design',         base: 800,  color: '#0070f3' },
  { label: 'Brand Identity',     base: 500,  color: '#ff6b35' },
  { label: 'UI/UX Design',       base: 1200, color: '#00d4a1' },
  { label: 'SEO & Marketing',    base: 600,  color: '#ffd60a' },
  { label: 'Social Media',       base: 450,  color: '#bf5af2' },
  { label: 'E-Commerce',         base: 1500, color: '#30d158' },
]
const COMPLEXITY       = ['Basic', 'Standard', 'Advanced', 'Complex', 'Enterprise']
const COMPLEXITY_MULT  = [1, 1.5, 2.2, 3.2, 4.8]
const TIMELINE_LABELS  = ['1 wk', '2 wks', '4 wks', '6 wks', '8 wks', '12 wks']
const TIMELINE_WEEKS   = [1, 2, 4, 6, 8, 12]
const TIMELINE_MULT    = [1.9, 1.5, 1.2, 1.0, 0.95, 0.88]
const TEAM_OPTIONS     = ['Solo', 'Duo', 'Small', 'Medium', 'Full team']
const TEAM_MULT        = [1, 1.6, 2.2, 2.8, 3.6]

function BudgetEstimator() {
  const [service,    setService]    = useState(3)
  const [complexity, setComplexity] = useState(1)
  const [timeline,   setTimeline]   = useState(2)
  const [teamSize,   setTeamSize]   = useState(1)

  const svc    = SERVICE_OPTIONS[service]
  const lo     = Math.round(svc.base * COMPLEXITY_MULT[complexity] * TIMELINE_MULT[timeline] * TEAM_MULT[teamSize] / 50) * 50
  const hi     = Math.round(lo * 1.35 / 50) * 50
  const fmt    = n => n >= 1000 ? `$${Number.isInteger(n / 1000) ? n / 1000 : (n / 1000).toFixed(1)}K` : `$${n}`
  const track  = (val, min, max, color) => {
    const pct = ((val - min) / (max - min)) * 100
    return `linear-gradient(to right,${color} ${pct}%,rgba(255,255,255,.08) ${pct}%)`
  }

  return (
    <section style={{padding:'0 0 80px'}}>
      <div className="nb-container">
        <Reveal>
          <div style={{textAlign:'center',marginBottom:48}}>
            <Badge>Budget Estimator</Badge>
            <h2 className="nb-h2" style={{marginTop:16}}>Get a ballpark <span className="nb-grad">in 10 seconds</span></h2>
            <p className="nb-section-sub" style={{margin:'16px auto 0',maxWidth:520}}>
              Pick your service, set complexity and timeline — we'll calculate a realistic range instantly.
            </p>
          </div>
        </Reveal>
        <Reveal delay="0.1s">
          <div className="nb-estimator-card">

            {/* ── Inputs ── */}
            <div className="nb-estimator-sliders">

              {/* Service selector */}
              <div className="nb-estimator-group">
                <label className="nb-estimator-label" style={{marginBottom:12,display:'block'}}>Service</label>
                <div className="nb-estimator-service-grid">
                  {SERVICE_OPTIONS.map((s, i) => (
                    <button
                      key={s.label}
                      type="button"
                      onClick={() => setService(i)}
                      className="nb-estimator-svc-btn"
                      style={{
                        borderColor:      service === i ? s.color : 'rgba(255,255,255,.08)',
                        color:            service === i ? s.color : 'rgba(255,255,255,.55)',
                        background:       service === i ? `${s.color}14` : 'rgba(255,255,255,.03)',
                        boxShadow:        service === i ? `0 0 14px ${s.color}30` : 'none',
                      }}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Complexity */}
              <div className="nb-estimator-group">
                <div className="nb-estimator-row">
                  <label className="nb-estimator-label">Complexity</label>
                  <span className="nb-estimator-val" style={{color:'#7928ca'}}>{COMPLEXITY[complexity]}</span>
                </div>
                <input type="range" min={0} max={4} step={1} value={complexity}
                  onChange={e => setComplexity(+e.target.value)}
                  className="nb-estimator-slider"
                  style={{background: track(complexity, 0, 4, '#7928ca')}}
                />
                <div className="nb-estimator-ticks">
                  {COMPLEXITY.map(o => <span key={o}>{o}</span>)}
                </div>
              </div>

              {/* Timeline */}
              <div className="nb-estimator-group">
                <div className="nb-estimator-row">
                  <label className="nb-estimator-label">Timeline</label>
                  <span className="nb-estimator-val" style={{color:'#00f0ff'}}>
                    {TIMELINE_LABELS[timeline]}
                    {timeline === 0 && <span style={{fontSize:'10px',color:'#ff0080',marginLeft:6}}>Rush fee applies</span>}
                  </span>
                </div>
                <input type="range" min={0} max={5} step={1} value={timeline}
                  onChange={e => setTimeline(+e.target.value)}
                  className="nb-estimator-slider"
                  style={{background: track(timeline, 0, 5, '#00f0ff')}}
                />
                <div className="nb-estimator-ticks">
                  {TIMELINE_LABELS.map(l => <span key={l}>{l}</span>)}
                </div>
              </div>

              {/* Team Size */}
              <div className="nb-estimator-group">
                <div className="nb-estimator-row">
                  <label className="nb-estimator-label">Team Size</label>
                  <span className="nb-estimator-val" style={{color:'#ff0080'}}>{TEAM_OPTIONS[teamSize]}</span>
                </div>
                <input type="range" min={0} max={4} step={1} value={teamSize}
                  onChange={e => setTeamSize(+e.target.value)}
                  className="nb-estimator-slider"
                  style={{background: track(teamSize, 0, 4, '#ff0080')}}
                />
                <div className="nb-estimator-ticks">
                  {TEAM_OPTIONS.map(o => <span key={o}>{o}</span>)}
                </div>
              </div>
            </div>

            {/* ── Result ── */}
            <div className="nb-estimator-result">
              <div className="nb-estimator-svc-badge" style={{background:`${svc.color}14`,border:`1px solid ${svc.color}40`,color:svc.color}}>
                {svc.label}
              </div>
              <p className="nb-estimator-result-label">Estimated Investment</p>
              <div className="nb-estimator-price">
                <span style={{color:svc.color}}>{fmt(lo)}</span>
                <span className="nb-estimator-dash"> – </span>
                <span style={{color:svc.color}}>{fmt(hi)}</span>
              </div>
              <div className="nb-estimator-breakdown">
                <div className="nb-estimator-breakdown-row">
                  <span>Base price</span>
                  <span style={{color:svc.color}}>{fmt(svc.base)}</span>
                </div>
                <div className="nb-estimator-breakdown-row">
                  <span>Complexity</span>
                  <span>{COMPLEXITY[complexity]} ×{COMPLEXITY_MULT[complexity]}</span>
                </div>
                <div className="nb-estimator-breakdown-row">
                  <span>Timeline</span>
                  <span>{TIMELINE_LABELS[timeline]} ×{TIMELINE_MULT[timeline]}</span>
                </div>
                <div className="nb-estimator-breakdown-row">
                  <span>Team size</span>
                  <span>{TEAM_OPTIONS[teamSize]} ×{TEAM_MULT[teamSize]}</span>
                </div>
              </div>
              <p className="nb-estimator-result-note">
                Ballpark only. Final quote confirmed after a free discovery call — no obligation.
              </p>
              <div className="nb-estimator-includes">
                {['All revisions included','30-day post-launch support','No hidden costs, ever'].map(item => (
                  <div key={item} className="nb-estimator-include-row">
                    <CheckCircle size={13} style={{color:svc.color,flexShrink:0}}/>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <a href="#contact-form" className="nb-btn nb-btn-grad" style={{width:'100%',justifyContent:'center',marginTop:16,padding:'10px 20px'}}>
                Get an exact quote <ArrowUpRight size={15}/>
              </a>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', company:'', service:'', message:'' })
  const [status, setStatus] = useState('idle')

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) setStatus('success')
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="nb-contact-hero">
        <img
          className="nb-contact-hero-bg"
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
          alt=""
          aria-hidden="true"
        />
        <div className="nb-contact-hero-overlay"/>
        <div className="nb-orb nb-orb-blue"   style={{width:600,height:600,top:-200,right:-100,opacity:.2,zIndex:2}}/>
        <div className="nb-orb nb-orb-purple" style={{width:400,height:400,bottom:-100,left:-100,opacity:.15,zIndex:2}}/>
        <div className="nb-container" style={{position:'relative',zIndex:10}}>
          <Reveal><Badge>Get in touch</Badge></Reveal>
          <Reveal delay="0.1s">
            <h1 className="nb-page-h1">Let's build something<br/><span className="nb-grad">worth talking about</span></h1>
          </Reveal>
          <Reveal delay="0.2s">
            <p className="nb-page-sub">Tell us about your project. We read every message personally and respond within 24 hours — usually faster.</p>
          </Reveal>
          <Reveal delay="0.3s">
            <div style={{display:'flex',gap:16,flexWrap:'wrap',marginTop:36}}>
              <a href="#contact-form" className="nb-btn nb-btn-grad">Send a message <ArrowUpRight size={16}/></a>
              <NavLink to="/portfolio" className="nb-btn nb-btn-ghost">See our work</NavLink>
            </div>
          </Reveal>
        </div>
      </section>

      <TrustSignals/>

      {/* ── Main grid ── */}
      <section className="nb-contact-section">
        <div className="nb-orb nb-orb-blue"   style={{width:500,height:500,top:-100,right:-150,opacity:.06,pointerEvents:'none'}}/>
        <div className="nb-orb nb-orb-purple" style={{width:400,height:400,bottom:-100,left:-100,opacity:.05,pointerEvents:'none'}}/>
        <div className="nb-container" style={{position:'relative',zIndex:2}}>
          <div className="nb-contact-layout">

            {/* ── Sidebar ── */}
            <Reveal>
              <aside className="nb-contact-aside">
                <div className="nb-contact-aside-inner">
                  <div className="nb-aside-top-bar"/>
                  <p className="nb-contact-aside-label">How we work</p>
                  <h2 className="nb-contact-aside-h">We make it<br/><span className="nb-grad">easy to start.</span></h2>
                  <p className="nb-contact-aside-body">No complicated onboarding. No lengthy proposals before we've even spoken. Just a conversation about what you're building.</p>

                  <div className="nb-contact-steps">
                    {[
                      { n:'01', title:'Send a message', body:'Fill in the form. Takes 2 minutes.',      color:'#00f0ff' },
                      { n:'02', title:'We respond',     body:'Within 24 hours, usually same day.',      color:'#7928ca' },
                      { n:'03', title:'Discovery call', body:'30 min to understand your project.',      color:'#ff0080' },
                      { n:'04', title:'Proposal',       body:'Clear scope, timeline, and price.',       color:'#ffb86c' },
                    ].map((s, i) => (
                      <div key={s.n} className="nb-contact-step">
                        <div className="nb-contact-step-bubble" style={{background:`${s.color}18`,border:`1px solid ${s.color}40`,color:s.color}}>{s.n}</div>
                        <div className="nb-contact-step-line" style={i < 3 ? {background:`linear-gradient(to bottom,${s.color}40,transparent)`} : {opacity:0}}/>
                        <div className="nb-contact-step-content">
                          <div className="nb-contact-step-title">{s.title}</div>
                          <div className="nb-contact-step-body">{s.body}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="nb-contact-aside-details">
                    {[
                      { Icon: Mail,  val: 'hello@nexbeelabs.com',      href: 'mailto:hello@nexbeelabs.com', color:'#00f0ff' },
                      { Icon: Phone, val: '+61 415 340 554',           href: 'tel:+61415340554',            color:'#7928ca' },
                      { Icon: Clock, val: 'Mon–Fri, 9AM–6PM AEST',    href: null,                          color:'#ff0080' },
                      { Icon: Globe, val: 'Sydney, AU · Remote-first', href: null,                          color:'#00f0ff' },
                    ].map(d => (
                      <div key={d.val} className="nb-contact-detail-pill">
                        <div className="nb-contact-detail-icon" style={{background:`${d.color}15`,color:d.color,border:`1px solid ${d.color}30`}}>
                          <d.Icon size={13}/>
                        </div>
                        {d.href ? <a href={d.href} style={{color:'inherit',textDecoration:'none'}}>{d.val}</a> : <span>{d.val}</span>}
                      </div>
                    ))}
                  </div>

                  <div className="nb-contact-socials">
                    {[
                      {Icon:Linkedin,  color:'#0077b5'},
                      {Icon:Instagram, color:'#e1306c'},
                      {Icon:Facebook,  color:'#1877f2'},
                      {Icon:Dribbble,  color:'#ea4c89'},
                    ].map(({Icon,color},i) => (
                      <a key={i} href="#" className="nb-soc-pill" style={{'--sc':color}}>
                        <Icon size={15}/>
                      </a>
                    ))}
                  </div>
                </div>
              </aside>
            </Reveal>

            {/* ── Form panel ── */}
            <Reveal delay="0.15s">
              <div className="nb-contact-form-panel">
                <div className="nb-form-top-bar"/>
                {status === 'success' ? (
                  <div className="nb-form-success">
                    <div className="nb-form-success-ring">
                      <CheckCircle size={36} style={{color:'#00f0ff'}}/>
                    </div>
                    <h3>Message received!</h3>
                    <p>We'll get back to you within 24 hours. Check your email — we might already be typing.</p>
                    <button className="nb-btn nb-btn-ghost" onClick={() => { setStatus('idle'); setForm({ name:'',email:'',company:'',service:'',message:'' }) }}>
                      Send another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={submit} className="nb-premium-form">
                    <div className="nb-form-header">
                      <div>
                        <h3 className="nb-form-title">Tell us about your project</h3>
                        <p className="nb-form-subtitle">We read every message personally and reply within 24 hours.</p>
                      </div>
                      <span className="nb-form-badge"><Sparkles size={11}/> Free</span>
                    </div>

                    <div className="nb-pf-row">
                      <div className="nb-pf-group">
                        <label className="nb-pf-label">Your name *</label>
                        <div className="nb-pf-input-wrap">
                          <User size={14} className="nb-pf-icon"/>
                          <input className="nb-pf-input" name="name" value={form.name} onChange={handle} placeholder="Arif Rahman" required/>
                        </div>
                      </div>
                      <div className="nb-pf-group">
                        <label className="nb-pf-label">Email address *</label>
                        <div className="nb-pf-input-wrap">
                          <Mail size={14} className="nb-pf-icon"/>
                          <input className="nb-pf-input" name="email" type="email" value={form.email} onChange={handle} placeholder="arif@company.com" required/>
                        </div>
                      </div>
                    </div>

                    <div className="nb-pf-group">
                      <label className="nb-pf-label">Company or project name</label>
                      <div className="nb-pf-input-wrap">
                        <Building2 size={14} className="nb-pf-icon"/>
                        <input className="nb-pf-input" name="company" value={form.company} onChange={handle} placeholder="Acme Inc."/>
                      </div>
                    </div>

                    <div className="nb-pf-group">
                      <label className="nb-pf-label">What do you need?</label>
                      <div className="nb-pf-service-grid">
                        {services.map(s => (
                          <button key={s} type="button"
                            className={`nb-pf-service-btn ${form.service === s ? 'nb-pf-service-btn-active' : ''}`}
                            onClick={() => setForm({...form, service: s})}>
                            {form.service === s && <CheckCircle size={11} style={{flexShrink:0}}/>}
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="nb-pf-group">
                      <label className="nb-pf-label">Tell us more *</label>
                      <textarea className="nb-pf-input nb-pf-textarea" name="message" value={form.message} onChange={handle}
                        placeholder="What are you building? What's not working? What does success look like?" required rows={5}/>
                    </div>

                    {status === 'error' && (
                      <p className="nb-form-error">
                        Something went wrong. Email us directly at hello@nexbeelabs.com
                      </p>
                    )}

                    <button type="submit" className="nb-pf-submit" disabled={status === 'sending'}>
                      <span className="nb-pf-submit-shine"/>
                      {status === 'sending' ? <><span className="nb-spinner"/> Sending…</> : <><Send size={15}/> Send message</>}
                    </button>

                    <p className="nb-pf-note">No spam · No auto-replies · We respond personally</p>
                  </form>
                )}
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ── Schedule a Meeting ── */}
      <section className="nb-booking-section">
        <div className="nb-orb nb-orb-purple" style={{width:500,height:500,top:'50%',left:-200,transform:'translateY(-50%)',opacity:.06,pointerEvents:'none'}}/>
        <div className="nb-container" style={{position:'relative',zIndex:2}}>
          <div className="nb-booking-grid">
            <Reveal>
              <div className="nb-booking-info">
                <Badge>Free discovery call</Badge>
                <h2 className="nb-booking-h">Let's talk about<br/><span className="nb-grad">your project</span></h2>
                <p className="nb-booking-sub">No pitch, no pressure — just 30 minutes to understand what you're building and whether we're the right fit.</p>
                <div className="nb-booking-host">
                  <img
                    src="/assets/NexBEE.JPG"
                    alt="Md. Niamul Islam Tanay"
                    className="nb-booking-host-img"
                  />
                  <div>
                    <p className="nb-booking-host-name">Md. Niamul Islam Tanay</p>
                    <p className="nb-booking-host-role">Founder, NexbeeLabs</p>
                  </div>
                </div>
                <p className="nb-booking-covers-title">What we'll cover</p>
                <div className="nb-booking-covers">
                  {[
                    'Your goals, timeline & budget',
                    'Which services best fit your needs',
                    'Our process and how we work',
                    'Honest next steps — even if that means pointing you elsewhere',
                  ].map(item => (
                    <div key={item} className="nb-booking-cover-row">
                      <CheckCircle size={14} style={{color:'#00f0ff',flexShrink:0}}/>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="nb-booking-badges">
                  {[
                    {label:'30 min', sub:'Duration'},
                    {label:'Free',   sub:'No charge'},
                    {label:'Video',  sub:'Google Meet'},
                  ].map(b => (
                    <div key={b.label} className="nb-booking-badge">
                      <span className="nb-booking-badge-val">{b.label}</span>
                      <span className="nb-booking-badge-sub">{b.sub}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay="0.15s">
              <div className="nb-calendly-wrap">
                <div className="nb-calendly-header">
                  <div className="nb-calendly-dot" style={{background:'#00f0ff'}}/>
                  <div className="nb-calendly-dot" style={{background:'#7928ca'}}/>
                  <div className="nb-calendly-dot" style={{background:'#ff0080'}}/>
                  <span className="nb-calendly-label">calendly.com · NexbeeLabs</span>
                </div>
                <iframe
                  src={CALENDLY_URL}
                  width="100%"
                  height="600"
                  frameBorder="0"
                  title="Schedule a meeting with NexbeeLabs"
                  style={{display:'block'}}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <BudgetEstimator/>

      {/* ── CTA ── */}
      <section style={{padding:'0 0 100px',position:'relative'}}>
        <div className="nb-orb nb-orb-purple" style={{width:500,height:500,top:'50%',left:'50%',transform:'translate(-50%,-50%)',opacity:.06,pointerEvents:'none'}}/>
        <div className="nb-container nb-container-narrow" style={{position:'relative',zIndex:2}}>
          <Reveal>
            <div className="nb-contact-cta-card">
              <Badge>Not sure yet?</Badge>
              <h2 className="nb-h2" style={{marginTop:16}}>
                Explore our work<br/><span className="nb-grad">before reaching out.</span>
              </h2>
              <p className="nb-section-sub" style={{margin:'16px auto 36px',maxWidth:500}}>
                See what we've built and how we think — then come back and say hello. No pressure, no hard sell.
              </p>
              <div style={{display:'flex',gap:16,justifyContent:'center',flexWrap:'wrap'}}>
                <NavLink to="/portfolio" className="nb-btn nb-btn-grad">See our work <ArrowUpRight size={16}/></NavLink>
                <NavLink to="/services"  className="nb-btn nb-btn-ghost">What we offer</NavLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
