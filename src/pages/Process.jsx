import { Search, PenTool, Code2, Rocket, MessageSquare, FileText, Monitor, Package, CheckCircle, ArrowRight } from 'lucide-react'
import Badge from '../components/Badge'
import { NavLink } from 'react-router-dom'
import { Reveal, StaggerReveal } from '../hooks/useInView'

const phases = [
  { n:'01', title:'Discover', color:'#00f0ff', Icon:Search,   week:'Week 1',
    summary:'We start by asking a lot of questions — about your business, your customers, and what success looks like.',
    steps:[
      { Icon:MessageSquare, label:'Kickoff call',   desc:'A deep-dive to understand goals, audience, and constraints.' },
      { Icon:FileText,      label:'Brief & scope',  desc:'We document everything and agree on scope, timeline, and deliverables.' },
      { Icon:Search,        label:'Research',       desc:'Competitor analysis, audience review, and technical audit if needed.' },
    ], deliverable:'Project brief, scope document, timeline' },
  { n:'02', title:'Design', color:'#7928ca', Icon:PenTool, week:'Week 2–3',
    summary:'We build concepts and visual systems — then iterate with you until it\'s exactly right. No guessing games.',
    steps:[
      { Icon:PenTool,     label:'Concepts',    desc:'2–3 distinct creative directions for you to react to.' },
      { Icon:Monitor,     label:'Prototype',   desc:'The chosen direction refined into a working clickable prototype.' },
      { Icon:CheckCircle, label:'Sign-off',    desc:'You review and approve before we write a single line of code.' },
    ], deliverable:'Figma designs, interactive prototype, asset library' },
  { n:'03', title:'Build', color:'#ff0080', Icon:Code2,   week:'Week 4–5',
    summary:'Clean, well-documented code. Tested across devices, browsers, and screen sizes before anything touches production.',
    steps:[
      { Icon:Code2,    label:'Development',  desc:'Built in a staging environment with daily progress updates.' },
      { Icon:Monitor,  label:'QA & testing', desc:'Cross-browser, mobile, performance, and accessibility checks.' },
      { Icon:FileText, label:'Content',      desc:'We populate your site with all final content and assets.' },
    ], deliverable:'Staged build, QA report, content-ready' },
  { n:'04', title:'Launch', color:'#ffb86c', Icon:Rocket,  week:'Week 6+',
    summary:'We handle the technical side of launch and stay on for 30 days at no extra cost.',
    steps:[
      { Icon:Rocket,      label:'Go live',       desc:'We manage deployment, domain setup, and launch checklist.' },
      { Icon:Package,     label:'Handover',      desc:'Full documentation, training, and access handover.' },
      { Icon:CheckCircle, label:'30-day support',desc:'We stay on call for a month to fix anything that comes up.' },
    ], deliverable:'Live site, handover docs, 30-day support' },
]

const faqs = [
  { q:'How long does a typical project take?',  a:'Most web projects are 4–6 weeks from kickoff to launch. Brand identity takes 2–3 weeks. We\'ll give you a precise timeline in your project brief.' },
  { q:'What do you need from me?',              a:'Your time for a kickoff call, feedback at two key stages, and final content. We handle everything else.' },
  { q:'Can you work with our existing team?',   a:'Absolutely. We collaborate with in-house developers, marketers, and designers. Just let us know who\'s involved.' },
  { q:'What if I want changes after launch?',   a:'The 30-day support covers bug fixes and minor tweaks. Larger changes are scoped and quoted separately.' },
  { q:'Do you work with international clients?',a:'Yes — most communication is async over Slack and email, so timezone differences rarely cause issues.' },
]

function PageHero() {
  return (
    <section className="nb-page-hero">
      <img
        src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1920&q=80"
        alt=""
        aria-hidden="true"
        style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',objectPosition:'center',zIndex:0}}
      />
      <div style={{position:'absolute',inset:0,zIndex:1,background:'linear-gradient(to bottom,rgba(5,5,15,.6) 0%,rgba(5,5,15,.85) 100%)'}}/>
      <div className="nb-orb nb-orb-blue"   style={{width:500,height:500,top:-150,right:-100,zIndex:2}}/>
      <div className="nb-orb nb-orb-purple" style={{width:400,height:400,bottom:0,left:-100,zIndex:2}}/>
      <div className="nb-container" style={{position:'relative',zIndex:10}}>
        <Reveal><Badge>How we work</Badge></Reveal>
        <Reveal delay="0.1s"><h1 className="nb-page-h1">A process built for<br/><span className="nb-grad">no surprises</span></h1></Reveal>
        <Reveal delay="0.2s"><p className="nb-page-sub">Four clear phases. Defined deliverables at every step. You always know exactly where your project stands.</p></Reveal>
      </div>
    </section>
  )
}

function ProcessDetail() {
  return (
    <section style={{padding:'60px 0 80px'}}>
      <div className="nb-container">
        <div className="nb-proc-detail-list">
          {phases.map((p, i) => (
            <Reveal key={p.n} delay={`${i * 0.08}s`}>
              <div className="nb-proc-detail-item">
                <div className="nb-proc-detail-aside">
                  <div className="nb-proc-detail-num" style={{color:p.color}}>{p.n}</div>
                  <div className="nb-proc-detail-line" style={i < phases.length-1 ? {background:`linear-gradient(to bottom,${p.color},${phases[i+1].color})`} : {opacity:0}}/>
                </div>
                <div className="nb-proc-detail-body">
                  <div className="nb-proc-detail-header">
                    <div className="nb-proc-detail-icon" style={{background:`${p.color}15`,color:p.color,border:`1px solid ${p.color}30`}}><p.Icon size={22}/></div>
                    <div>
                      <span className="nb-proc-days" style={{marginBottom:4,display:'inline-block'}}>{p.week}</span>
                      <h2 style={{fontSize:'clamp(1.5rem,2.5vw,2rem)',fontWeight:800,letterSpacing:'-.03em',margin:0}}>{p.title}</h2>
                    </div>
                  </div>
                  <p style={{color:'rgba(255,255,255,.65)',lineHeight:1.7,fontSize:'1rem',marginBottom:24}}>{p.summary}</p>
                  <div className="nb-proc-steps">
                    {p.steps.map(s => (
                      <div key={s.label} className="nb-proc-step">
                        <div className="nb-proc-step-icon" style={{color:p.color,background:`${p.color}10`,border:`1px solid ${p.color}20`}}><s.Icon size={14}/></div>
                        <div>
                          <div style={{fontWeight:700,marginBottom:3,fontSize:'.9rem'}}>{s.label}</div>
                          <div style={{color:'rgba(255,255,255,.5)',fontSize:'.85rem',lineHeight:1.5}}>{s.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="nb-proc-deliverable-box" style={{borderColor:`${p.color}25`,background:`${p.color}06`}}>
                    <Package size={13} style={{color:p.color,flexShrink:0}}/>
                    <div>
                      <span style={{fontSize:9,textTransform:'uppercase',letterSpacing:'.12em',color:'rgba(255,255,255,.4)',fontWeight:700}}>Deliverable</span>
                      <div style={{color:'rgba(255,255,255,.8)',fontSize:'.875rem',marginTop:2}}>{p.deliverable}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  return (
    <section style={{padding:'0 0 80px',background:'radial-gradient(ellipse at top,rgba(0,112,243,.05),transparent 60%)'}}>
      <div className="nb-container nb-container-narrow">
        <Reveal>
          <div className="nb-section-head" style={{marginBottom:40}}>
            <Badge>FAQ</Badge>
            <h2 className="nb-h2">Common questions <span className="nb-grad">about our process</span></h2>
          </div>
        </Reveal>
        <StaggerReveal className="nb-faq-list" step={0.07}>
          {faqs.map(f => (
            <div key={f.q} className="nb-faq-item">
              <h3 className="nb-faq-q">{f.q}</h3>
              <p className="nb-faq-a">{f.a}</p>
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
          <Badge>Ready to start?</Badge>
          <h2 className="nb-h2" style={{marginTop:16}}>Let's kick off your <span className="nb-grad">discovery call</span></h2>
          <p className="nb-section-sub" style={{margin:'16px auto 36px',maxWidth:480}}>A 30-minute call to understand your project. Free, no commitment.</p>
          <NavLink to="/contact" className="nb-btn nb-btn-grad">Book the call <ArrowRight size={16}/></NavLink>
        </Reveal>
      </div>
    </section>
  )
}

export default function Process() {
  return (<><PageHero/><ProcessDetail/><FAQ/><CTA/></>)
}
