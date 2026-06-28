import { useState, useRef, useEffect } from 'react'
import {
  ArrowRight, ChevronRight, Zap, Rocket, Globe, PenTool, Layers,
  TrendingUp, MessageCircle, ShoppingBag, Target, Shield, Users,
  Search, Code2, Package, GitBranch, Activity, Clock, MessageSquare,
  CheckCircle, Star, Quote, Bot, Cpu, Workflow,
} from 'lucide-react'
import Badge from '../components/Badge'
import Globe3D from '../components/Globe3D'
import { Reveal, StaggerReveal } from '../hooks/useInView'

/* ─── Hero ─────────────────────────────────────────────────────────────── */
function Hero() {
  const bars = [
    ['Design Quality',   99, '#00f0ff'],
    ['Code Performance', 97, '#7928ca'],
    ['Client Alignment', 98, '#ff0080'],
  ]
  return (
    <section className="nb-hero">
      <Globe3D />
      <div className="nb-orb nb-orb-purple" style={{ width:600, height:600, top:-200, left:-200 }} />
      <div className="nb-orb nb-orb-blue"   style={{ width:500, height:500, top:100,  right:-100 }} />
      <div className="nb-hero-grid">
        <div className="nb-hero-text">
          <Badge>Enterprise IT Solution · Sydney, Australia</Badge>
          <h1 className="nb-hero-h1">
            We Build Digital<br />
            Products That<br />
            <span className="nb-grad">Actually Work</span>
          </h1>
          <p className="nb-hero-sub">
            Nexbee partners with forward-thinking businesses to design, build, and manage digital systems that deliver long-term value.
          </p>
          <div className="nb-hero-cta">
            <a href="#contact" className="nb-btn nb-btn-light">Start a Project <ArrowRight size={16} /></a>
            <a href="#portfolio" className="nb-btn nb-btn-ghost">See Our Work</a>
          </div>
          <div className="nb-hero-stats">
            <div><div className="nb-hero-stat-v">100%</div><div className="nb-hero-stat-l">Commitment</div></div>
            <div><div className="nb-hero-stat-v">24<span style={{fontSize:18,color:'rgba(255,255,255,.5)'}}>hr</span></div><div className="nb-hero-stat-l">Response time</div></div>
            <div><div className="nb-hero-stat-v">0</div><div className="nb-hero-stat-l">Templates</div></div>
            <div><div className="nb-hero-stat-v">∞</div><div className="nb-hero-stat-l">Support</div></div>
          </div>
        </div>

        <div className="nb-hero-visual">
          <div className="nb-mock-panel">
            <div className="nb-mock-header">
              <div className="nb-mock-dots"><span /><span /><span /></div>
              <div className="nb-mock-url">nexbeelabs.com/dashboard</div>
            </div>
            <div className="nb-mock-body">
              <div className="nb-mock-title-row">
                <div>
                  <div className="nb-mock-eyebrow">Project Quality Score</div>
                  <div className="nb-mock-score">98<span style={{color:'rgba(255,255,255,.4)',fontSize:18}}>/100</span></div>
                </div>
                <div className="nb-mock-pill">Live</div>
              </div>
              <div className="nb-mock-bars">
                {bars.map(([label, val, color]) => (
                  <div key={label} className="nb-mock-bar-row">
                    <span className="nb-mock-bar-label">{label}</span>
                    <div className="nb-mock-bar-track">
                      <div className="nb-mock-bar-fill" style={{width:`${val}%`,background:color,boxShadow:`0 0 12px ${color}`}} />
                    </div>
                    <span className="nb-mock-bar-v">{val}%</span>
                  </div>
                ))}
              </div>
              <div className="nb-mock-metrics">
                <div className="nb-mock-metric">
                  <div className="nb-mock-metric-icon" style={{color:'#00f0ff',background:'rgba(0,240,255,.1)'}}><Zap size={16} /></div>
                  <div><div className="nb-mock-metric-l">Page load target</div><strong className="nb-mock-metric-v">&lt;2s</strong></div>
                </div>
                <div className="nb-mock-metric">
                  <div className="nb-mock-metric-icon" style={{color:'#7928ca',background:'rgba(121,40,202,.1)'}}><Rocket size={16} /></div>
                  <div><div className="nb-mock-metric-l">Focus on launch</div><strong className="nb-mock-metric-v">Day 1</strong></div>
                </div>
              </div>
            </div>
          </div>
          <div className="nb-float-card nb-float-1"><GitBranch size={14} /> Design system delivered</div>
          <div className="nb-float-card nb-float-2"><Activity size={14} /> Brand concepts presented</div>
        </div>
      </div>
    </section>
  )
}

/* ─── Services ──────────────────────────────────────────────────────────── */
function Services() {
  const services = [
    { Icon: Cpu,           title: 'AI Agents & Intelligent Automation',body: 'Custom AI agents that work for your business 24/7 — making decisions, handling tasks, scaling effortlessly.',  tags: ['OpenAI','Claude API','LangChain','n8n'], accent: '#00f0ff', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80' },
    { Icon: Workflow,      title: 'Business Process Automation',       body: 'Eliminate repetitive work with smart workflows. From email triage to cross-platform data sync.', tags: ['n8n','Make','Zapier','Webhooks'],        accent: '#7928ca', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80' },
    { Icon: Bot,           title: 'AI Chatbots & Virtual Assistants',  body: 'Intelligent chatbots trained on your business — for support, leads, and bookings around the clock.', tags: ['OpenAI','Voiceflow','WhatsApp API','RAG'], accent: '#ff0080', image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80' },
    { Icon: Globe,         title: 'Web Design & Development',          body: 'Conversion-focused websites built from scratch. No page builders, no shortcuts.',              tags: ['Next.js','TypeScript','Webflow'],       accent: '#0070f3', image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80' },
    { Icon: PenTool,       title: 'Brand Identity & Strategy',         body: 'Logo, colors, typography, tone. A brand system that holds together everywhere.',               tags: ['Logo','Guidelines','Positioning'],      accent: '#ff6b35', image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80' },
    { Icon: Layers,        title: 'UI/UX Design',                      body: 'Interfaces that make sense the first time. Research-informed, beautifully executed.',           tags: ['Figma','Prototyping','Research'],       accent: '#00d4a1', image: 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?auto=format&fit=crop&w=800&q=80' },
    { Icon: TrendingUp,    title: 'SEO & Digital Marketing',           body: 'Get found. Get clicked. Get customers. Strategies that compound over time.',                    tags: ['Technical SEO','Google Ads','Content'], accent: '#ffd60a', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80' },
    { Icon: MessageCircle, title: 'Social Media Management',           body: 'Consistent, creative content that builds a real audience — not just follower counts.',          tags: ['Strategy','Reels','Reporting'],         accent: '#bf5af2', image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80' },
    { Icon: ShoppingBag,   title: 'E-Commerce Solutions',              body: 'Online stores designed to sell. Shopify or WooCommerce, optimized for conversion.',             tags: ['Shopify','WooCommerce','CRO'],          accent: '#30d158', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80' },
  ]
  return (
    <section className="nb-section nb-section-dotgrid" id="services">
      <div className="nb-container">
        <div className="nb-section-head">
          <Badge>What We Do</Badge>
          <h2 className="nb-h2">Complete digital solutions — including <span className="nb-grad">AI & Automation</span></h2>
          <p className="nb-section-sub">From web and brand to AI agents, chatbots, and business automation — everything your business needs to grow.</p>
        </div>
        <div className="nb-svc-grid">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="nb-svc-card"
              style={{'--accent': s.accent}}
              onMouseEnter={() => { document.documentElement.style.setProperty('--card-hover-accent', s.accent); document.documentElement.style.setProperty('--card-hover-border', s.accent) }}
              onMouseLeave={() => { document.documentElement.style.setProperty('--card-hover-accent', 'rgba(0,0,0,0)'); document.documentElement.style.setProperty('--card-hover-border', 'rgba(255,255,255,.14)') }}
            >
              <img src={s.image} alt="" aria-hidden="true" className="nb-svc-card-bg" />
              <div className="nb-svc-card-scrim" />
              <div className="nb-svc-card-watermark">{String(i+1).padStart(2,'0')}</div>
              <div className="nb-svc-card-content">
                <div className="nb-svc-card-head">
                  <div className="nb-svc-icon" style={{background:`${s.accent}22`,color:s.accent,border:`1px solid ${s.accent}`,boxShadow:`0 0 18px ${s.accent}55`,backdropFilter:'blur(6px)'}}>
                    <s.Icon size={22} />
                  </div>
                  <div className="nb-svc-num">{String(i+1).padStart(2,'0')}</div>
                </div>
                <h3 className="nb-svc-title">{s.title}</h3>
                <p className="nb-svc-body">{s.body}</p>
                <div className="nb-svc-tags">{s.tags.map(t => <span key={t} className="nb-svc-tag">{t}</span>)}</div>
                <div className="nb-svc-foot">
                  <a href="#contact" className="nb-svc-link">Learn more <ChevronRight size={14} /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Featured Projects ─────────────────────────────────────────────────── */
const caseStudies = [
  {
    id: 'hobinh',
    category: 'Web Design & Development',
    client: 'E-commerce',
    headline: 'A WordPress store built to convert from day one',
    body: 'Full e-commerce build with a conversion-focused layout, fast load times, and a checkout flow that turns browsers into buyers.',
    metric: '+38%', metricLabel: 'Conversion rate',
    tags: ['WordPress', 'WooCommerce', 'UI/UX', 'CRO'],
    accent: '#00f0ff',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    url: 'https://hobinh.com/',
  },
  {
    id: 'healthcare',
    category: 'Web Design & Development',
    client: 'Healthcare',
    headline: 'A trusted online presence for a life-changing service',
    metric: '2×', metricLabel: 'Enquiry rate',
    tags: ['WordPress', 'UI/UX', 'Web Design'],
    accent: '#7928ca',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    url: 'https://sovereignsurrogacy.com/',
  },
  {
    id: 'flare',
    category: 'Brand Identity',
    client: 'Flare Kitchen',
    headline: 'A restaurant brand guests actually remember',
    metric: '100%', metricLabel: 'Brand new identity',
    tags: ['Branding', 'Print', 'Web'],
    accent: '#ff0080',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
  },
]

function SitePreview({ url, title }) {
  const containerRef = useRef(null)
  const [scale, setScale] = useState(0.3)
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const update = () => {
      const w = el.offsetWidth || el.getBoundingClientRect().width
      if (w > 0) setScale(w / 1280)
    }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])
  return (
    <div ref={containerRef} style={{position:'absolute',inset:0,overflow:'hidden'}}>
      <iframe
        src={url}
        title={title}
        className="nb-fw-iframe"
        style={{transform:`scale(${scale})`}}
        scrolling="no"
        tabIndex={-1}
      />
    </div>
  )
}

function FeaturedProjects() {
  return (
    <section className="nb-section" id="portfolio">
      <div className="nb-container">
        <Reveal>
          <div className="nb-section-head">
            <Badge>Featured Work</Badge>
            <h2 className="nb-h2">Projects that <span className="nb-grad">made a difference</span></h2>
            <p className="nb-section-sub">Custom-built, delivered on time, and measured for real impact.</p>
          </div>
        </Reveal>

        <div className="nb-fw-list">
          {caseStudies.map((p, i) => (
            <Reveal key={p.id} delay={`${i * 0.08}s`}>
              <a
                className={`nb-fw-item ${i % 2 === 1 ? 'nb-fw-rev' : ''}`}
                href={p.url || undefined}
                target={p.url ? '_blank' : undefined}
                rel={p.url ? 'noopener noreferrer' : undefined}
                style={p.url ? {cursor:'pointer',textDecoration:'none',color:'inherit'} : undefined}
              >
                {/* Image */}
                <div className="nb-fw-img-side">
                  <img src={p.image} alt={p.client} className="nb-fw-img"/>
                  {p.url && <SitePreview url={p.url} title={p.client} />}
                  <div className="nb-fw-img-overlay"/>
                  <span className="nb-fw-num">{String(i+1).padStart(2,'0')}</span>
                </div>
                {/* Text */}
                <div className="nb-fw-text-side">
                  <span className="nb-fw-cat" style={{color:p.accent}}>{p.category}</span>
                  <h3 className="nb-fw-client">{p.client}</h3>
                  <p className="nb-fw-headline">{p.headline}</p>
                  {i === 0 && <p className="nb-fw-body">{p.body}</p>}
                  <div className="nb-fw-metric">
                    <span className="nb-fw-metric-v" style={{color:p.accent}}>{p.metric}</span>
                    <span className="nb-fw-metric-l">{p.metricLabel}</span>
                  </div>
                  <div className="nb-fw-tags">
                    {p.tags.map(t => <span key={t} className="nb-fw-tag">{t}</span>)}
                  </div>
                  <div className="nb-fw-bar" style={{background:p.accent}}/>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div style={{textAlign:'center',marginTop:48}}>
            <a href="/portfolio" className="nb-btn nb-btn-ghost">View all projects <ArrowRight size={16}/></a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ─── Why Us ────────────────────────────────────────────────────────────── */
function WhyUs() {
  return (
    <section className="nb-section nb-section-radial" id="about">
      <div className="nb-container">
        <div className="nb-section-head">
          <Badge>Why NexbeeLabs</Badge>
          <h2 className="nb-h2">We're new. <span className="nb-grad">That's actually the point.</span></h2>
          <p className="nb-section-sub">No legacy processes. No oversized teams. No clients waiting in a queue. Just focused, senior-level work — every time.</p>
        </div>
        <div className="nb-bento">
          {/* Tall */}
          <div className="nb-bento-card nb-bento-tall">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt=""
              aria-hidden="true"
              style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',objectPosition:'center',opacity:.32,zIndex:0,transition:'opacity .5s'}}
            />
            <div className="nb-bento-content">
              <div className="nb-bento-icon" style={{background:'rgba(0,240,255,.08)',color:'#00f0ff',border:'1px solid rgba(0,240,255,.2)'}}><Zap size={22} /></div>
              <div className="nb-bento-eyebrow">Capacity</div>
              <h3>Best work,<br />not available work</h3>
              <p>We're selective about projects so we can do each one properly. When we're on yours, it has our full attention.</p>
              <div className="nb-bento-stat-row">
                <div className="nb-bento-stat"><div className="nb-bento-stat-v">5</div><div className="nb-bento-stat-l">Projects/quarter</div></div>
                <div className="nb-bento-divider" />
                <div className="nb-bento-stat"><div className="nb-bento-stat-v">100%</div><div className="nb-bento-stat-l">Focus</div></div>
              </div>
            </div>
            <div className="nb-pulse-wrap">
              <div className="nb-pulse-ring" /><div className="nb-pulse-ring nb-pulse-ring-2" /><div className="nb-pulse-ring nb-pulse-ring-3" />
              <div className="nb-pulse-core" />
            </div>
          </div>

          {/* Wide */}
          <div className="nb-bento-card nb-bento-wide">
            <div className="nb-bento-inner">
              <div className="nb-bento-content">
                <div className="nb-bento-icon" style={{background:'rgba(121,40,202,.08)',color:'#7928ca',border:'1px solid rgba(121,40,202,.2)'}}><Target size={22} /></div>
                <div className="nb-bento-eyebrow">Method</div>
                <h3>Strategy drives<br />everything we do</h3>
                <p>We don't start with aesthetics. We start with your business, your customers, and what success looks like.</p>
              </div>
              <div className="nb-bento-codewell">
                <div className="nb-code-head">
                  <div className="nb-mock-dots"><span /><span /><span /></div>
                  <span className="nb-code-file">strategy.config.ts</span>
                </div>
                <pre className="nb-code-body">
<span className="nb-c-grey">{'// 1 — understand the business'}</span>{'\n'}<span className="nb-c-pink">const</span>{' brief = '}<span className="nb-c-blue">await</span>{` discovery({
  goals: `}<span className="nb-c-green">'measurable'</span>{`,
  audience: `}<span className="nb-c-green">'specific'</span>{`,
  voice: `}<span className="nb-c-green">'honest'</span>{`,
});

`}<span className="nb-c-grey">{'// 2 — design backwards from outcome'}</span>{'\n'}<span className="nb-c-pink">return</span>{' ship(brief);'}
                </pre>
              </div>
            </div>
          </div>

          {/* Square 1 */}
          <div className="nb-bento-card nb-bento-square">
            <div className="nb-bento-content">
              <div className="nb-bento-icon" style={{background:'rgba(0,240,255,.08)',color:'#00f0ff',border:'1px solid rgba(0,240,255,.2)'}}><Shield size={22} /></div>
              <div className="nb-bento-eyebrow">Craft</div>
              <h3>We build things that last</h3>
              <p>Clean code. Documented systems. Handoffs that make sense.</p>
              <div className="nb-bento-meter">
                <div className="nb-bento-meter-row"><span>Lighthouse</span><span className="nb-bento-meter-v">98</span></div>
                <div className="nb-bento-meter-track"><div className="nb-bento-meter-fill" style={{width:'98%',background:'#00f0ff'}} /></div>
                <div className="nb-bento-meter-row"><span>A11y</span><span className="nb-bento-meter-v">100</span></div>
                <div className="nb-bento-meter-track"><div className="nb-bento-meter-fill" style={{width:'100%',background:'#7928ca'}} /></div>
              </div>
            </div>
            <svg viewBox="0 0 100 30" className="nb-spark">
              <defs><linearGradient id="sparkG" x1="0" x2="1"><stop offset="0%" stopColor="#00f0ff"/><stop offset="100%" stopColor="#7928ca"/></linearGradient></defs>
              <path d="M0,20 Q10,25 20,15 T40,10 T60,25 T80,5 T100,20 L100,30 L0,30 Z" fill="url(#sparkG)" opacity="0.15"/>
              <path d="M0,20 Q10,25 20,15 T40,10 T60,25 T80,5 T100,20" fill="none" stroke="url(#sparkG)" strokeWidth="1.5"/>
            </svg>
          </div>

          {/* Square 2 */}
          <div className="nb-bento-card nb-bento-square">
            <div className="nb-bento-content">
              <div className="nb-bento-icon" style={{background:'rgba(121,40,202,.08)',color:'#7928ca',border:'1px solid rgba(121,40,202,.2)'}}><Users size={22} /></div>
              <div className="nb-bento-eyebrow">Access</div>
              <h3>Direct access to the people doing the work</h3>
              <p>No account managers. No middlemen.</p>
              <div className="nb-stack-row">
                <div className="nb-avstack">
                  {[['MH','linear-gradient(135deg,#0070f3,#00f0ff)'],['FK','linear-gradient(135deg,#7928ca,#ff0080)'],['SI','linear-gradient(135deg,#ff0080,#ffb86c)'],['NR','linear-gradient(135deg,#00f0ff,#7928ca)']].map(([initials,grad])=>(
                    <div key={initials} className="nb-av" style={{background:grad}}>{initials}</div>
                  ))}
                </div>
                <span className="nb-stack-label">4 people. Always.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Process ───────────────────────────────────────────────────────────── */
function Process() {
  const steps = [
    { n:'01', t:'Discover', body:'We start by asking a lot of questions. Business, customers, what success looks like.',        deliverable:'Project brief, scope, timeline', days:'Week 1',   Icon:Search,  dot:'#00f0ff' },
    { n:'02', t:'Design',   body:'We build concepts and visual systems — then iterate with you until it\'s exactly right.',      deliverable:'Figma designs, prototype',       days:'Week 2–3', Icon:PenTool, dot:'#7928ca' },
    { n:'03', t:'Build',    body:'Clean, well-documented code. Tested across devices before it touches production.',             deliverable:'Staged build, ready to review',  days:'Week 4–5', Icon:Code2,   dot:'#ff0080' },
    { n:'04', t:'Launch',   body:'We handle launch and stay on for 30 days at no extra cost to make sure it runs smoothly.',    deliverable:'Live site + handover docs',       days:'Week 6+',  Icon:Rocket,  dot:'#ffb86c' },
  ]
  return (
    <section className="nb-section nb-section-process" id="process">
      <div className="nb-container">
        <div className="nb-section-head">
          <Badge>How we work</Badge>
          <h2 className="nb-h2">A process built around <span className="nb-grad">getting it right</span></h2>
          <p className="nb-section-sub">Four stages. No surprises. Clear communication throughout.</p>
        </div>
        <div className="nb-proc-track">
          <div className="nb-proc-line" />
          <div className="nb-proc-grid">
            {steps.map(s => (
              <div key={s.n} className="nb-proc-card">
                <div className="nb-proc-marker">
                  <div className="nb-proc-dot" style={{background:s.dot,boxShadow:`0 0 20px ${s.dot},0 0 0 4px #000,0 0 0 5px ${s.dot}33`}} />
                  <div className="nb-proc-marker-num">{s.n}</div>
                </div>
                <div className="nb-proc-card-inner">
                  <div className="nb-proc-meta">
                    <span className="nb-proc-days">{s.days}</span>
                    <span className="nb-proc-icon"><s.Icon size={14} /></span>
                  </div>
                  <h3 className="nb-proc-title">{s.t}</h3>
                  <p className="nb-proc-body">{s.body}</p>
                  <div className="nb-proc-deliverable"><Package size={12} /><span>{s.deliverable}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Tech Stack ────────────────────────────────────────────────────────── */
const techCategories = [
  {
    label: 'Design', color: '#00f0ff', Icon: PenTool,
    tools: [
      { name: 'Figma',        slug: 'figma',           hex: 'F24E1E' },
      { name: 'Photoshop',    slug: 'photoshop',        hex: '31A8FF' },
      { name: 'Premiere Pro', slug: 'premierepro',      hex: '9999FF' },
      { name: 'Framer',       slug: 'framer',          hex: '0055FF' },
      { name: 'Sketch',       slug: 'sketch',          hex: 'F7B500' },
      { name: 'Webflow',      slug: 'webflow',         hex: '4353FF' },
    ],
  },
  {
    label: 'Development', color: '#7928ca', Icon: Code2,
    tools: [
      { name: 'React',        slug: 'react',           hex: '61DAFB' },
      { name: 'Next.js',      slug: 'nextdotjs',       hex: 'ffffff' },
      { name: 'Node.js',      slug: 'nodedotjs',       hex: '5FA04E' },
      { name: 'Laravel',      slug: 'laravel',         hex: 'FF2D20' },
      { name: 'AWS',          slug: 'amazonaws',       hex: 'FF9900' },
      { name: 'Flutter',      slug: 'flutter',         hex: '02569B' },
      { name: 'AI Tools',     slug: 'chatgpt',         hex: '74AA9C' },
      { name: 'Docker',       slug: 'docker',          hex: '2496ED' },
      { name: 'Kubernetes',   slug: 'kubernetes',      hex: '326CE5' },
    ],
  },
  {
    label: 'Platforms', color: '#ff0080', Icon: Globe,
    tools: [
      { name: 'Shopify',      slug: 'shopify',         hex: '7AB55C' },
      { name: 'WordPress',    slug: 'wordpress',       hex: '21759B' },
      { name: 'WooCommerce',  slug: 'woocommerce',     hex: '7F54B3' },
      { name: 'Sanity',       slug: 'sanity',          hex: 'F36458' },
      { name: 'Tailwind CSS', slug: 'tailwindcss',     hex: '06B6D4' },
      { name: 'PostgreSQL',   slug: 'postgresql',      hex: '4169E1' },
    ],
  },
  {
    label: 'Marketing', color: '#ffb86c', Icon: TrendingUp,
    tools: [
      { name: 'Google Ads',   slug: 'googleads',       hex: '4285F4' },
      { name: 'HubSpot',      slug: 'hubspot',         hex: 'FF7A59' },
      { name: 'Analytics',    slug: 'googleanalytics', hex: 'E37400' },
      { name: 'Search Con.',  slug: 'googlesearchconsole', hex: '458CF5' },
      { name: 'Semrush',      slug: 'semrush',         hex: 'FF642D' },
      { name: 'Notion',       slug: 'notion',          hex: 'ffffff' },
    ],
  },
]

function ToolIcon({ name, slug, hex }) {
  const [err, setErr] = useState(false)
  if (err) return (
    <span style={{
      width: 16, height: 16, borderRadius: 3, flexShrink: 0, display: 'inline-block',
      background: `#${hex}`, opacity: .85,
    }} />
  )
  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}/${hex}`}
      alt={name} loading="lazy" width="16" height="16"
      onError={() => setErr(true)}
    />
  )
}

function TechStack() {
  return (
    <section className="nb-ts-section">
      <div className="nb-container" style={{position:'relative',zIndex:2}}>

        <Reveal>
          <div className="nb-section-head">
            <Badge>Tech Stack</Badge>
            <h2 className="nb-h2">Built with the tools <span className="nb-grad">your business needs</span></h2>
            <p className="nb-section-sub">From design to deployment — we master the full stack.</p>
          </div>
        </Reveal>

        <div className="nb-ts-cats">
          {techCategories.map((cat, i) => (
            <Reveal key={cat.label} delay={`${i * 0.08}s`}>
              <div className="nb-ts-cat">
                <div className="nb-ts-cat-hd">
                  <div className="nb-ts-cat-ic" style={{color:cat.color,background:`${cat.color}15`,border:`1px solid ${cat.color}30`}}>
                    <cat.Icon size={14}/>
                  </div>
                  <span className="nb-ts-cat-lbl" style={{color:cat.color}}>{cat.label}</span>
                </div>
                <div className="nb-ts-pills">
                  {cat.tools.map(t => (
                    <div key={t.name} className="nb-ts-pill">
                      <ToolIcon name={t.name} slug={t.slug} hex={t.hex} />
                      <span>{t.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>


      </div>
    </section>
  )
}

/* ─── Testimonials ──────────────────────────────────────────────────────── */
function Testimonials() {
  const items = [
    { q:"I wasn't sure what to expect from a new agency, but NexbeeLabs delivered a website that outperforms everything we had before. Their attention to detail is unlike anything I've seen.", n:'Arif Rahman',    r:'Founder, E-commerce',       i:'AR', metric:'+38% conversion', grad:'linear-gradient(135deg,#0070f3,#00f0ff)' },
    { q:"They pushed back on ideas that weren't right and brought better ones to the table. That kind of honesty is what separates good agencies from great ones.",                              n:'Tasnim Hossain', r:'Co-founder, Healthcare',        i:'TH', metric:'Dashboard rebuild', grad:'linear-gradient(135deg,#7928ca,#ff0080)' },
    { q:'Fast, communicative, and genuinely invested in our success. Our Instagram went from background noise to a real channel for our business in just a few months.',                        n:'Sadia Khan',     r:'CMO, Vyne Apparel',         i:'SK', metric:'6× engagement',    grad:'linear-gradient(135deg,#ff0080,#ffb86c)' },
    { q:"The brand identity they built for us gave our restaurant a voice we didn't know we were missing. Every guest comments on it now.",                                                     n:'Nusrat Jahan',   r:'Co-founder, Flare Kitchen', i:'NJ', metric:'Identity + web',   grad:'linear-gradient(135deg,#00f0ff,#7928ca)' },
  ]
  return (
    <section className="nb-section">
      <div className="nb-container nb-container-narrow">
        <div className="nb-section-head">
          <Badge>Testimonials</Badge>
          <h2 className="nb-h2">Trusted by the people <span className="nb-grad">we've worked with</span></h2>
          <p className="nb-section-sub">We're new — but the people who've worked with us aren't shy about saying so.</p>
        </div>
        <div className="nb-testi-grid">
          {items.map(t => (
            <div key={t.n} className="nb-testi-card">
              <div className="nb-testi-head">
                <div className="nb-testi-stars">{[0,1,2,3,4].map(i=><Star key={i} size={14} fill="#ffb86c" color="#ffb86c"/>)}</div>
                <Quote size={36} className="nb-testi-quote" />
              </div>
              <p className="nb-testi-text">"{t.q}"</p>
              <div className="nb-testi-foot">
                <div className="nb-testi-author">
                  <div className="nb-testi-avatar" style={{background:t.grad}}>{t.i}</div>
                  <div><div className="nb-testi-name">{t.n}</div><div className="nb-testi-role">{t.r}</div></div>
                </div>
                <div className="nb-testi-metric"><TrendingUp size={12} /> {t.metric}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Contact CTA ───────────────────────────────────────────────────────── */
function ContactCTA() {
  const strip = [
    { Icon:Clock,         label:'24h',    sub:'response time' },
    { Icon:MessageSquare, label:'Free',   sub:'discovery call' },
    { Icon:CheckCircle,   label:'30-day', sub:'post-launch support' },
    { Icon:Globe,         label:'Global', sub:'remote-first' },
  ]
  return (
    <section className="nb-section" id="contact">
      <div className="nb-container nb-container-narrow">
        <div className="nb-cta-card">
          <div className="nb-cta-grid-bg" />
          <div className="nb-cta-glow nb-cta-glow-1" />
          <div className="nb-cta-glow nb-cta-glow-2" />
          <div className="nb-cta-content">
            <Badge>Ready to build?</Badge>
            <h2 className="nb-h2" style={{marginTop:24}}>Let's build something <span className="nb-grad">worth talking about</span></h2>
            <p className="nb-section-sub" style={{maxWidth:560,margin:'20px auto 36px'}}>
              Tell us what you're working on. We'll get back to you within 24 hours — usually faster.
            </p>
            <div style={{display:'flex',gap:16,justifyContent:'center',flexWrap:'wrap',marginBottom:48}}>
              <a href="mailto:hello@nexbeelabs.com" className="nb-btn nb-btn-grad">Start a conversation <ArrowRight size={16} /></a>
              <a href="#services" className="nb-btn nb-btn-ghost">See our services</a>
            </div>
            <div className="nb-cta-strip">
              {strip.map(s => (
                <div key={s.label} className="nb-cta-strip-item">
                  <s.Icon size={16} />
                  <div><strong>{s.label}</strong><span>{s.sub}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Home page export ──────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedProjects />
      <WhyUs />
      <Process />
      <TechStack />
      <Testimonials />
      <ContactCTA />
    </>
  )
}
