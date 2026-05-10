import { useState } from 'react'
import { ArrowUpRight, Mail, Clock, Globe, Send, Linkedin, Instagram, Facebook, Dribbble, CheckCircle, Sparkles, Star } from 'lucide-react'
import Badge from '../components/Badge'
import { NavLink } from 'react-router-dom'
import { Reveal } from '../hooks/useInView'

const FORMSPREE_ID   = 'YOUR_FORMSPREE_ID'   // Replace with your Formspree form ID
const CALENDLY_URL   = 'https://calendly.com/YOUR_USERNAME/30min' // Replace with your Calendly link

const services = [
  'Web Design & Development',
  'Brand Identity & Strategy',
  'UI/UX Design',
  'SEO & Digital Marketing',
  'Social Media Management',
  'E-Commerce Solutions',
  'Not sure yet — let\'s talk',
]

const budgets = [
  { label: 'Under $500',      v: 'under-500' },
  { label: '$500 – $1K',      v: '500-1k' },
  { label: '$1K – $3K',       v: '1k-3k' },
  { label: '$3K – $5K',       v: '3k-5k' },
  { label: '$5K+',            v: '5k-plus' },
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
      {/* Row 1 — testimonials scrolling left */}
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
      {/* Row 2 — stats scrolling right */}
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

const complexityOptions = ['Basic', 'Standard', 'Advanced', 'Complex', 'Enterprise']
const complexityMult    = [1, 1.5, 2.2, 3.2, 4.5]
const teamOptions       = ['Solo', 'Duo', 'Small', 'Medium', 'Full team']
const teamMult          = [1, 1.6, 2.2, 2.8, 3.6]

function BudgetEstimator() {
  const [timeline,   setTimeline]   = useState(4)
  const [complexity, setComplexity] = useState(1)
  const [teamSize,   setTeamSize]   = useState(1)

  const base = 350
  const lo   = Math.round(timeline * base * complexityMult[complexity] * teamMult[teamSize] / 50) * 50
  const hi   = Math.round(lo * 1.3 / 50) * 50
  const fmt  = n => n >= 1000 ? `$${(n % 1000 === 0 ? n / 1000 : (n / 1000).toFixed(1))}K` : `$${n}`

  const trackBg = (val, min, max, color) => {
    const pct = ((val - min) / (max - min)) * 100
    return `linear-gradient(to right,${color} ${pct}%,rgba(255,255,255,.1) ${pct}%)`
  }

  return (
    <section style={{padding:'0 0 80px'}}>
      <div className="nb-container">
        <Reveal>
          <div style={{textAlign:'center',marginBottom:48}}>
            <Badge>Budget Estimator</Badge>
            <h2 className="nb-h2" style={{marginTop:16}}>Get a ballpark <span className="nb-grad">in 10 seconds</span></h2>
            <p className="nb-section-sub" style={{margin:'16px auto 0',maxWidth:520}}>
              Adjust the sliders — we'll calculate a realistic range instantly. No forms, no waiting.
            </p>
          </div>
        </Reveal>
        <Reveal delay="0.1s">
          <div className="nb-estimator-card">
            {/* Sliders */}
            <div className="nb-estimator-sliders">

              <div className="nb-estimator-group">
                <div className="nb-estimator-row">
                  <label className="nb-estimator-label">Timeline</label>
                  <span className="nb-estimator-val" style={{color:'#00f0ff'}}>{timeline} {timeline === 1 ? 'week' : 'weeks'}</span>
                </div>
                <input type="range" min={1} max={12} step={1} value={timeline}
                  onChange={e => setTimeline(+e.target.value)}
                  className="nb-estimator-slider"
                  style={{background: trackBg(timeline, 1, 12, '#00f0ff')}}
                />
                <div className="nb-estimator-ticks">
                  <span>1 wk</span><span>4 wks</span><span>8 wks</span><span>12 wks</span>
                </div>
              </div>

              <div className="nb-estimator-group">
                <div className="nb-estimator-row">
                  <label className="nb-estimator-label">Project Complexity</label>
                  <span className="nb-estimator-val" style={{color:'#7928ca'}}>{complexityOptions[complexity]}</span>
                </div>
                <input type="range" min={0} max={4} step={1} value={complexity}
                  onChange={e => setComplexity(+e.target.value)}
                  className="nb-estimator-slider"
                  style={{background: trackBg(complexity, 0, 4, '#7928ca')}}
                />
                <div className="nb-estimator-ticks">
                  {complexityOptions.map(o => <span key={o}>{o}</span>)}
                </div>
              </div>

              <div className="nb-estimator-group">
                <div className="nb-estimator-row">
                  <label className="nb-estimator-label">Team Size</label>
                  <span className="nb-estimator-val" style={{color:'#ff0080'}}>{teamOptions[teamSize]}</span>
                </div>
                <input type="range" min={0} max={4} step={1} value={teamSize}
                  onChange={e => setTeamSize(+e.target.value)}
                  className="nb-estimator-slider"
                  style={{background: trackBg(teamSize, 0, 4, '#ff0080')}}
                />
                <div className="nb-estimator-ticks">
                  {teamOptions.map(o => <span key={o}>{o}</span>)}
                </div>
              </div>

            </div>

            {/* Result panel */}
            <div className="nb-estimator-result">
              <p className="nb-estimator-result-label">Estimated Investment</p>
              <div className="nb-estimator-price">
                <span className="nb-grad">{fmt(lo)}</span>
                <span className="nb-estimator-dash"> – </span>
                <span className="nb-grad">{fmt(hi)}</span>
              </div>
              <p className="nb-estimator-result-note">
                Ballpark based on typical project scope. Final quote confirmed after discovery call.
              </p>
              <div className="nb-estimator-includes">
                {['All revisions included', '30-day post-launch support', 'No hidden costs, ever'].map(item => (
                  <div key={item} className="nb-estimator-include-row">
                    <CheckCircle size={13} style={{color:'#00f0ff', flexShrink:0}}/>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <NavLink to="/contact" className="nb-btn nb-btn-grad" style={{width:'100%', justifyContent:'center', marginTop:'auto', paddingTop:24}}>
                Get an exact quote <ArrowUpRight size={15}/>
              </NavLink>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', company:'', service:'', budget:'', message:'' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })
  const setBudget = v => setForm({ ...form, budget: v })

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
        </div>
      </section>

      <TrustSignals/>

      {/* ── Main grid ── */}
      <section style={{padding:'80px 0 100px'}}>
        <div className="nb-container">
          <div className="nb-contact-layout">

            {/* Left sidebar */}
            <Reveal>
              <aside className="nb-contact-aside">
                <div className="nb-contact-aside-inner">
                  <p className="nb-contact-aside-label">How we work</p>
                  <h2 className="nb-contact-aside-h">We make<br/>it easy<br/>to start.</h2>
                  <p className="nb-contact-aside-body">No complicated onboarding. No lengthy proposals before we've even spoken. Just a conversation about what you're building.</p>

                  <div className="nb-contact-steps">
                    {[
                      { n:'01', title:'Send a message', body:'Fill in the form. Takes 2 minutes.' },
                      { n:'02', title:'We respond',     body:'Within 24 hours, usually same day.' },
                      { n:'03', title:'Discovery call', body:'30 min to understand your project.' },
                      { n:'04', title:'Proposal',       body:'Clear scope, timeline, and price.' },
                    ].map((s, i) => (
                      <div key={s.n} className="nb-contact-step">
                        <div className="nb-contact-step-num">{s.n}</div>
                        <div className="nb-contact-step-line" style={i < 3 ? {} : {opacity:0}}/>
                        <div className="nb-contact-step-content">
                          <div className="nb-contact-step-title">{s.title}</div>
                          <div className="nb-contact-step-body">{s.body}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="nb-contact-aside-details">
                    {[
                      { Icon: Mail,  val: 'hello@nexbeelabs.com' },
                      { Icon: Clock, val: 'Sun–Thu, 9AM–7PM BST' },
                      { Icon: Globe, val: 'Dhaka, BD · Remote-first' },
                    ].map(d => (
                      <div key={d.val} className="nb-contact-detail-row">
                        <d.Icon size={14} style={{color:'#00f0ff',flexShrink:0}}/>
                        <span>{d.val}</span>
                      </div>
                    ))}
                  </div>

                  <div className="nb-contact-socials">
                    {[Linkedin, Instagram, Facebook, Dribbble].map((Icon, i) => (
                      <a key={i} href="#" className="nb-soc"><Icon size={15}/></a>
                    ))}
                  </div>
                </div>
              </aside>
            </Reveal>

            {/* Form panel */}
            <Reveal delay="0.15s">
              <div className="nb-contact-form-panel">
                {status === 'success' ? (
                  <div className="nb-form-success">
                    <div className="nb-form-success-ring">
                      <CheckCircle size={32} style={{color:'#00f0ff'}}/>
                    </div>
                    <h3>Message received!</h3>
                    <p>We'll get back to you within 24 hours. Check your email — we might already be typing.</p>
                    <button className="nb-btn nb-btn-ghost" onClick={() => { setStatus('idle'); setForm({ name:'',email:'',company:'',service:'',budget:'',message:'' }) }}>
                      Send another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={submit} className="nb-premium-form">
                    <div className="nb-form-header">
                      <h3>Tell us about your project</h3>
                      <span className="nb-form-badge"><Sparkles size={11}/> Free consultation</span>
                    </div>

                    <div className="nb-pf-row">
                      <div className="nb-pf-group">
                        <label className="nb-pf-label">Your name *</label>
                        <input className="nb-pf-input" name="name" value={form.name} onChange={handle} placeholder="Arif Rahman" required/>
                      </div>
                      <div className="nb-pf-group">
                        <label className="nb-pf-label">Email address *</label>
                        <input className="nb-pf-input" name="email" type="email" value={form.email} onChange={handle} placeholder="arif@company.com" required/>
                      </div>
                    </div>

                    <div className="nb-pf-group">
                      <label className="nb-pf-label">Company or project name</label>
                      <input className="nb-pf-input" name="company" value={form.company} onChange={handle} placeholder="Acme Inc."/>
                    </div>

                    <div className="nb-pf-group">
                      <label className="nb-pf-label">What do you need?</label>
                      <div className="nb-pf-service-grid">
                        {services.map(s => (
                          <button key={s} type="button"
                            className={`nb-pf-service-btn ${form.service === s ? 'nb-pf-service-btn-active' : ''}`}
                            onClick={() => setForm({...form, service: s})}>
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="nb-pf-group">
                      <label className="nb-pf-label">Budget range</label>
                      <div className="nb-pf-budget-row">
                        {budgets.map(b => (
                          <button key={b.v} type="button"
                            className={`nb-pf-budget-btn ${form.budget === b.v ? 'nb-pf-budget-btn-active' : ''}`}
                            onClick={() => setBudget(b.v)}>
                            {b.label}
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
                      <p style={{color:'#ff0080',fontSize:'.85rem',padding:'10px 14px',background:'rgba(255,0,128,.08)',borderRadius:8,border:'1px solid rgba(255,0,128,.2)'}}>
                        Something went wrong. Please email us directly at hello@nexbeelabs.com
                      </p>
                    )}

                    <button type="submit" className="nb-pf-submit" disabled={status === 'sending'}>
                      {status === 'sending' ? (
                        <><span className="nb-spinner"/> Sending…</>
                      ) : (
                        <><Send size={15}/> Send message</>
                      )}
                    </button>

                    <p className="nb-pf-note">We read every message personally. No spam, no auto-replies.</p>
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

            {/* Left — info panel */}
            <Reveal>
              <div className="nb-booking-info">
                <Badge>Free discovery call</Badge>
                <h2 className="nb-booking-h">Let's talk about<br/><span className="nb-grad">your project</span></h2>
                <p className="nb-booking-sub">No pitch, no pressure — just 30 minutes to understand what you're building and whether we're the right fit.</p>

                {/* Host */}
                <div className="nb-booking-host">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80&crop=faces"
                    alt="Mehad Hossain"
                    className="nb-booking-host-img"
                  />
                  <div>
                    <p className="nb-booking-host-name">Mehad Hossain</p>
                    <p className="nb-booking-host-role">Founder, NexbeeLabs</p>
                  </div>
                </div>

                {/* What we'll cover */}
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

                {/* Badges */}
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

            {/* Right — calendar */}
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
