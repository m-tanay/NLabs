import { ExternalLink } from 'lucide-react'
import Badge from '../components/Badge'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Reveal, StaggerReveal } from '../hooks/useInView'
import { ArrowRight } from 'lucide-react'

const projects = [
  { id:1, category:'Web Design',    title:'NexaStore',       sub:'E-commerce platform',  desc:'Full Shopify redesign for a fashion retailer. Conversion-focused product pages and a brand refresh that increased sales by 38%.', tags:['Shopify','Brand','CRO'],         metric:'+38%',  metricLabel:'Conversion rate', accent:'#00f0ff', grad:'linear-gradient(135deg,rgba(0,112,243,.3),rgba(0,240,255,.1))', year:'2024', mockType:'ecom' },
  { id:2, category:'Brand Identity',title:'Orbit',           sub:'SaaS Dashboard',       desc:'Complete rebrand and dashboard redesign for a B2B analytics startup. New visual identity and a data-dense UI users enjoy.',         tags:['UI/UX','Design System'],        metric:'6×',    metricLabel:'User engagement', accent:'#7928ca', grad:'linear-gradient(135deg,rgba(121,40,202,.3),rgba(255,0,128,.1))', year:'2024', mockType:'dashboard' },
  { id:3, category:'Social Media',  title:'Vyne Apparel',    sub:'Fashion brand growth', desc:'Social strategy and content creation for a streetwear brand. Grew from 2K to 14K followers in 4 months.',                          tags:['Instagram','Reels','Strategy'], metric:'14K',   metricLabel:'Followers in 4 mo', accent:'#ff0080', grad:'linear-gradient(135deg,rgba(255,0,128,.3),rgba(255,184,108,.1))', year:'2024', mockType:'social' },
  { id:4, category:'Brand Identity',title:'Flare Kitchen',   sub:'Restaurant brand & web',desc:'Full brand identity for a Dhaka restaurant — logo, menus, packaging, and a reservation-focused website.',                          tags:['Logo','Web Design','Print'],    metric:'3×',    metricLabel:'Bookings via web', accent:'#00f0ff', grad:'linear-gradient(135deg,rgba(0,240,255,.2),rgba(121,40,202,.1))', year:'2025', mockType:'brand' },
  { id:5, category:'Web Design',    title:'Clearpath Legal', sub:'Law firm website',      desc:'Trust-first website for a growing legal practice. Clean, authoritative design that doubled enquiries vs. the old site.',             tags:['Next.js','SEO','Lead Gen'],     metric:'2×',    metricLabel:'Enquiries vs old', accent:'#7928ca', grad:'linear-gradient(135deg,rgba(121,40,202,.25),rgba(0,112,243,.1))', year:'2025', mockType:'corporate' },
  { id:6, category:'SEO',           title:'Bloom Skincare',  sub:'SEO & Content strategy',desc:'Technical SEO overhaul for a D2C brand. Went from page 4 to page 1 for 12 target keywords in 3 months.',                           tags:['Technical SEO','Content'],      metric:'Page 1',metricLabel:'12 target keywords', accent:'#ff0080', grad:'linear-gradient(135deg,rgba(255,0,128,.2),rgba(255,184,108,.1))', year:'2025', mockType:'seo' },
]

const cats = ['All','Web Design','Brand Identity','Social Media','SEO']

function MockVisual({ type, accent }) {
  const base = { width:200, background:'rgba(8,8,12,.95)', border:'1px solid rgba(255,255,255,.1)', borderRadius:8, overflow:'hidden', boxShadow:`0 16px 40px rgba(0,0,0,.6),0 0 0 1px ${accent}20` }
  const bar = { height:30, display:'flex', alignItems:'center', padding:'0 10px', gap:6, background:'rgba(255,255,255,.02)', borderBottom:'1px solid rgba(255,255,255,.06)' }
  const dots = <>{['#ff5f56','#ffbd2e','#27c93f'].map(c=><span key={c} style={{width:8,height:8,borderRadius:'50%',background:c}}/>)}</>
  if (type === 'dashboard') return (
    <div style={base}>
      <div style={bar}>{dots}<div style={{flex:1,height:4,background:'rgba(255,255,255,.05)',borderRadius:4,margin:'0 8px'}}/></div>
      <div style={{padding:14,display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:6,marginBottom:8}}>
        {[accent,'#7928ca','#ff0080'].map((c,i)=>(
          <div key={i} style={{background:`${c}12`,border:`1px solid ${c}20`,borderRadius:6,padding:'8px 6px',textAlign:'center'}}>
            <div style={{fontSize:14,fontWeight:800,color:c}}>{['98','4K','∞'][i]}</div>
            <div style={{fontSize:8,color:'rgba(255,255,255,.4)',marginTop:2}}>{'Score Visits Sup'.split(' ')[i]}</div>
          </div>
        ))}
      </div>
      <div style={{padding:'0 14px 14px',display:'flex',flexDirection:'column',gap:6}}>
        {[80,60,92].map((w,i)=>(
          <div key={i} style={{display:'flex',alignItems:'center',gap:8,fontSize:9,color:'rgba(255,255,255,.45)'}}>
            <span style={{width:44}}>{'M1 M2 M3'.split(' ')[i]}</span>
            <div style={{flex:1,height:3,background:'rgba(255,255,255,.06)',borderRadius:4}}><div style={{width:`${w}%`,height:'100%',background:accent,borderRadius:4}}/></div>
            <span style={{color:'#fff',fontWeight:700}}>{w}%</span>
          </div>
        ))}
      </div>
    </div>
  )
  return (
    <div style={base}>
      <div style={bar}>{dots}</div>
      <div style={{padding:14,display:'flex',flexDirection:'column',gap:10}}>
        <div style={{height:10,background:`${accent}30`,borderRadius:4,width:'55%'}}/>
        <div style={{height:70,background:`${accent}0c`,borderRadius:8,border:`1px solid ${accent}18`}}/>
        {[100,75,55].map((w,i)=><div key={i} style={{height:6,background:'rgba(255,255,255,.06)',borderRadius:4,width:`${w}%`}}/>)}
        <div style={{height:28,background:`${accent}18`,border:`1px solid ${accent}30`,borderRadius:6,display:'flex',alignItems:'center',justifyContent:'center',fontSize:9,color:accent,fontWeight:700}}>View Project →</div>
      </div>
    </div>
  )
}

function PageHero() {
  return (
    <section className="nb-page-hero">
      <img
        src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1920&q=80"
        alt=""
        aria-hidden="true"
        style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',objectPosition:'center',zIndex:0}}
      />
      <div style={{position:'absolute',inset:0,zIndex:1,background:'linear-gradient(to bottom,rgba(5,5,15,.6) 0%,rgba(5,5,15,.85) 100%)'}}/>
      <div className="nb-orb nb-orb-purple" style={{width:500,height:500,top:-150,right:-100,zIndex:2}}/>
      <div className="nb-orb nb-orb-blue"   style={{width:400,height:400,bottom:0,left:-150,zIndex:2}}/>
      <div className="nb-container" style={{position:'relative',zIndex:10}}>
        <Reveal><Badge>Our Work</Badge></Reveal>
        <Reveal delay="0.1s"><h1 className="nb-page-h1">Projects we're <span className="nb-grad">proud of</span></h1></Reveal>
        <Reveal delay="0.2s"><p className="nb-page-sub">A selection of recent work. Every project was built from scratch, delivered on time, and made a measurable difference.</p></Reveal>
      </div>
    </section>
  )
}

function PortfolioGrid() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)
  return (
    <section style={{padding:'60px 0 80px'}}>
      <div className="nb-container">
        <Reveal>
          <div className="nb-filter-bar">
            {cats.map(c => (
              <button key={c} className={`nb-filter-btn${active===c?' nb-filter-btn-active':''}`} onClick={()=>setActive(c)}>{c}</button>
            ))}
          </div>
        </Reveal>
        <div className="nb-port-grid">
          {filtered.map((p,i) => (
            <Reveal key={p.id} delay={`${(i%3)*0.08}s`}>
              <div className="nb-port-card" style={{'--accent':p.accent}}>
                <div className="nb-port-visual" style={{background:p.grad}}>
                  <MockVisual type={p.mockType} accent={p.accent}/>
                </div>
                <div className="nb-port-info">
                  <div className="nb-port-meta">
                    <span className="nb-port-cat" style={{color:p.accent}}>{p.category}</span>
                    <span className="nb-port-year">{p.year}</span>
                  </div>
                  <h3 className="nb-port-title">{p.title}</h3>
                  <p className="nb-port-sub">{p.sub}</p>
                  <p className="nb-port-desc">{p.desc}</p>
                  <div className="nb-port-tags">{p.tags.map(t=><span key={t} className="nb-svc-tag">{t}</span>)}</div>
                  <div className="nb-port-foot">
                    <div className="nb-port-metric">
                      <span className="nb-port-metric-v" style={{color:p.accent}}>{p.metric}</span>
                      <span className="nb-port-metric-l">{p.metricLabel}</span>
                    </div>
                    <a className="nb-port-link" style={{color:p.accent}}><ExternalLink size={13}/> View case</a>
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

function CTA() {
  return (
    <section style={{padding:'0 0 100px',background:'radial-gradient(ellipse at center,rgba(121,40,202,.06),transparent 70%)'}}>
      <div className="nb-container nb-container-narrow" style={{textAlign:'center'}}>
        <Reveal>
          <Badge>Your project could be next</Badge>
          <h2 className="nb-h2" style={{marginTop:16}}>Let's build something <span className="nb-grad">worth adding here</span></h2>
          <p className="nb-section-sub" style={{margin:'16px auto 36px',maxWidth:480}}>We're selective about projects so every one gets our best. Reach out and let's see if we're a fit.</p>
          <NavLink to="/contact" className="nb-btn nb-btn-grad">Start a project <ArrowRight size={16}/></NavLink>
        </Reveal>
      </div>
    </section>
  )
}

export default function Portfolio() {
  return (<><PageHero/><PortfolioGrid/><CTA/></>)
}
