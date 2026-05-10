import { ArrowRight, Zap, Heart, Globe, Award, Users, TrendingUp, CheckCircle } from 'lucide-react'
import Badge from '../components/Badge'
import { NavLink } from 'react-router-dom'
import { Reveal, StaggerReveal } from '../hooks/useInView'

function PageHero() {
  return (
    <section className="nb-page-hero">
      <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80"
        alt=""
        aria-hidden="true"
        style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',objectPosition:'center',zIndex:0}}
      />
      <div style={{position:'absolute',inset:0,zIndex:1,background:'linear-gradient(to bottom,rgba(5,5,15,.6) 0%,rgba(5,5,15,.85) 100%)'}}/>
      <div className="nb-orb nb-orb-purple" style={{width:500,height:500,top:-150,right:-100,zIndex:2}}/>
      <div className="nb-orb nb-orb-blue"   style={{width:400,height:400,bottom:-100,left:-100,zIndex:2}}/>
      <div className="nb-container" style={{position:'relative',zIndex:10}}>
        <Reveal><Badge>Our Story</Badge></Reveal>
        <Reveal delay="0.1s"><h1 className="nb-page-h1">Built different.<br/><span className="nb-grad">By design.</span></h1></Reveal>
        <Reveal delay="0.2s"><p className="nb-page-sub">Founded on a simple belief: great digital work comes from small, focused teams who care deeply — not sprawling agencies that spread themselves thin.</p></Reveal>
      </div>
    </section>
  )
}

function Mission() {
  return (
    <section style={{padding:'60px 0 80px'}}>
      <div className="nb-container">
        <div className="nb-about-split">
          <Reveal>
            <div className="nb-about-text">
              <Badge>Our Mission</Badge>
              <h2 className="nb-h2">Making <span className="nb-grad">great work accessible</span></h2>
              <p style={{color:'rgba(255,255,255,.6)',lineHeight:1.8,marginBottom:18,fontSize:'1.05rem'}}>
                Too many businesses get sold generic solutions by agencies that don't understand them. We started NexbeeLabs to change that — bringing startup-level craft and senior-level thinking to every project.
              </p>
              <p style={{color:'rgba(255,255,255,.6)',lineHeight:1.8,marginBottom:32,fontSize:'1.05rem'}}>
                Based in Dhaka, working globally. Geography shouldn't limit the quality of your digital presence.
              </p>
              <NavLink to="/contact" className="nb-btn nb-btn-grad">Work with us <ArrowRight size={16}/></NavLink>
            </div>
          </Reveal>
          <StaggerReveal className="nb-about-cards" step={0.1}>
            {[
              { Icon:Zap,   color:'#00f0ff', title:'Speed without shortcuts', body:'We move fast because we plan well — not because we cut corners.' },
              { Icon:Heart, color:'#ff0080', title:'Genuine investment',       body:'Every project gets the same care regardless of budget or size.' },
              { Icon:Globe, color:'#7928ca', title:'Global perspective',       body:'Dhaka roots. International standards. Real-world results.' },
            ].map(c => (
              <div key={c.title} className="nb-value-card">
                <div className="nb-value-icon" style={{background:`${c.color}15`,color:c.color,border:`1px solid ${c.color}30`}}><c.Icon size={20}/></div>
                <div>
                  <h4 style={{fontWeight:700,marginBottom:6}}>{c.title}</h4>
                  <p style={{color:'rgba(255,255,255,.55)',fontSize:'.9rem',lineHeight:1.6}}>{c.body}</p>
                </div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  )
}

function Stats() {
  const stats = [
    { v:'100%', l:'Client satisfaction', sub:'Every project delivered to brief' },
    { v:'24hr',  l:'Avg response time',  sub:'We pick up fast' },
    { v:'5',     l:'Projects/quarter',   sub:'So you always get our best' },
    { v:'∞',     l:'Post-launch support',sub:'We don\'t disappear' },
  ]
  return (
    <section style={{padding:'0 0 80px',background:'radial-gradient(ellipse at center,rgba(0,112,243,.06),transparent 70%)'}}>
      <div className="nb-container">
        <StaggerReveal className="nb-stats-grid" step={0.08}>
          {stats.map(s => (
            <div key={s.v} className="nb-stat-card">
              <div className="nb-stat-val nb-grad">{s.v}</div>
              <div className="nb-stat-label">{s.l}</div>
              <div className="nb-stat-sub">{s.sub}</div>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}

function Values() {
  const vals = [
    { Icon:Award,       color:'#00f0ff', title:'Craft over output',    body:'We measure success by how good the work is, not how fast we shipped it.' },
    { Icon:Users,       color:'#7928ca', title:'Radical transparency', body:'You\'ll always know where your project stands. No surprises, ever.' },
    { Icon:TrendingUp,  color:'#ff0080', title:'Results, not vanity',  body:'Beautiful things that also perform. Design and function are inseparable.' },
    { Icon:CheckCircle, color:'#00f0ff', title:'Honest advice',        body:'If we think something won\'t work, we\'ll say so — and bring a better idea.' },
    { Icon:Zap,         color:'#7928ca', title:'No templates',         body:'Every project starts from scratch. Your brand is unique; your site should be too.' },
    { Icon:Heart,       color:'#ff0080', title:'Long-term thinking',   body:'We build things that last, not things that need rebuilding in 18 months.' },
  ]
  return (
    <section style={{padding:'0 0 80px',position:'relative'}}>
      <div className="nb-section-dotgrid" style={{position:'absolute',inset:0,pointerEvents:'none'}}/>
      <div className="nb-container">
        <Reveal>
          <div className="nb-section-head" style={{marginBottom:40}}>
            <Badge>What we believe</Badge>
            <h2 className="nb-h2">Values that <span className="nb-grad">guide every decision</span></h2>
            <p className="nb-section-sub">Not a poster on a wall. These actually shape how we work.</p>
          </div>
        </Reveal>
        <StaggerReveal className="nb-vals-grid" step={0.07}>
          {vals.map(v => (
            <div key={v.title} className="nb-val-card">
              <div className="nb-val-icon" style={{background:`${v.color}12`,color:v.color,border:`1px solid ${v.color}25`}}><v.Icon size={22}/></div>
              <h3 style={{fontSize:'1.05rem',fontWeight:700,letterSpacing:'-.02em',marginBottom:8}}>{v.title}</h3>
              <p style={{color:'rgba(255,255,255,.55)',fontSize:'.875rem',lineHeight:1.65}}>{v.body}</p>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section style={{padding:'0 0 100px'}}>
      <div className="nb-container nb-container-narrow" style={{textAlign:'center'}}>
        <Reveal>
          <Badge>Let's talk</Badge>
          <h2 className="nb-h2" style={{marginTop:16}}>Ready to work with a team <span className="nb-grad">that actually cares?</span></h2>
          <p className="nb-section-sub" style={{margin:'16px auto 36px',maxWidth:500}}>We take on a limited number of projects each quarter. Let's see if we're a good fit.</p>
          <div style={{display:'flex',gap:16,justifyContent:'center',flexWrap:'wrap'}}>
            <NavLink to="/contact"   className="nb-btn nb-btn-grad">Start the conversation <ArrowRight size={16}/></NavLink>
            <NavLink to="/portfolio" className="nb-btn nb-btn-ghost">See our work</NavLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default function About() {
  return (<><PageHero/><Mission/><Stats/><Values/><CTA/></>)
}
