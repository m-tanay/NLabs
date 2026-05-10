import { useState } from 'react'
import { ArrowUpRight, Mail, Clock, Globe, Send, Linkedin, Instagram, Facebook, Dribbble, CheckCircle, Sparkles } from 'lucide-react'
import Badge from '../components/Badge'
import { NavLink } from 'react-router-dom'
import { Reveal } from '../hooks/useInView'

const FORMSPREE_ID = 'YOUR_FORMSPREE_ID' // Replace with your Formspree form ID

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
