import { useState } from 'react'
import { ArrowRight, Globe, PenTool, Layers, TrendingUp, MessageCircle, ShoppingBag, CheckCircle, ChevronRight, Zap, DollarSign, HeartHandshake, Search, MessageSquare, Phone, CreditCard, LifeBuoy, ChevronDown, Bot, Cpu, Workflow } from 'lucide-react'
import Badge from '../components/Badge'
import { Reveal, StaggerReveal } from '../hooks/useInView'
import { NavLink } from 'react-router-dom'

const services = [
  {
    Icon: Cpu, accent: '#00f0ff', num: '01',
    title: 'AI Agents & Intelligent Automation',
    tagline: 'AI that works for your business 24/7.',
    body: 'We build custom AI agents that think, decide, and act — handling complex tasks autonomously so your team can focus on what matters. From lead qualification to data processing, we turn repetitive work into automated workflows.',
    includes: ['Custom AI agent development','Multi-step reasoning pipelines','CRM & tool integrations','Data extraction & processing','Automated reporting & alerts','Ongoing monitoring & refinement'],
    tags: ['OpenAI','Claude API','LangChain','n8n','Python','APIs'],
    price: 'From $1,200',
    timeline: '3–6 weeks',
  },
  {
    Icon: Workflow, accent: '#7928ca', num: '02',
    title: 'Business Process Automation',
    tagline: 'Eliminate repetitive work. Scale faster.',
    body: 'We map your manual processes and replace them with automated workflows — from invoice handling and email triage to cross-platform data sync. Built with no-code and custom solutions that your team can actually maintain.',
    includes: ['Process audit & workflow mapping','Automation build (n8n / Make / Zapier)','Cross-platform data sync','Custom webhook & API integrations','Error handling & fallback logic','Team training & documentation'],
    tags: ['n8n','Make','Zapier','REST APIs','Webhooks','Google Workspace'],
    price: 'From $800',
    timeline: '2–4 weeks',
  },
  {
    Icon: Bot, accent: '#ff0080', num: '03',
    title: 'AI Chatbots & Virtual Assistants',
    tagline: 'Conversations that convert, around the clock.',
    body: 'We build intelligent chatbots trained on your business — for customer support, lead capture, bookings, or internal helpdesks. Embedded on your website or integrated into WhatsApp, Messenger, or Slack.',
    includes: ['Custom chatbot design & training','Knowledge base integration','Live handoff to human agent','WhatsApp / web / Slack deployment','Conversation analytics dashboard','Monthly retraining & updates'],
    tags: ['OpenAI','Dialogflow','Voiceflow','WhatsApp API','RAG','Embeddings'],
    price: 'From $900',
    timeline: '2–4 weeks',
  },
  {
    Icon: Globe, accent: '#00f0ff', num: '04',
    title: 'Web Design & Development',
    tagline: 'Websites that convert visitors into customers.',
    body: 'We build fast, beautiful websites from scratch — no templates, no page builders. Every project starts with strategy and ends with a site that actually works for your business.',
    includes: ['Custom design from scratch','Next.js or Webflow build','Mobile-first responsive','Performance optimised (Lighthouse 95+)','CMS integration','30-day post-launch support'],
    tags: ['Next.js','TypeScript','Webflow','Framer','Tailwind'],
    price: 'From $800',
    timeline: '4–6 weeks',
  },
  {
    Icon: PenTool, accent: '#7928ca', num: '05',
    title: 'Brand Identity & Strategy',
    tagline: 'A brand system that holds together everywhere.',
    body: 'Logo, colour palette, typography, tone of voice, and full brand guidelines. We don\'t just make things look nice — we create a visual language that communicates who you are.',
    includes: ['Logo design (3 concepts)','Full colour system','Typography pairing','Brand guidelines PDF','Social media kit','Business card & letterhead'],
    tags: ['Figma','Illustrator','Brand Strategy','Identity'],
    price: 'From $500',
    timeline: '2–3 weeks',
  },
  {
    Icon: Layers, accent: '#ff0080', num: '06',
    title: 'UI/UX Design',
    tagline: 'Interfaces that make sense the first time.',
    body: 'From user research to polished prototypes. We design digital products that are intuitive, accessible, and genuinely delightful to use — then hand off specs that developers actually want to work with.',
    includes: ['User research & personas','Information architecture','Wireframes & user flows','High-fidelity UI design','Interactive prototype','Developer handoff (Figma)'],
    tags: ['Figma','FigJam','Maze','Prototyping','A/B Testing'],
    price: 'From $1,200',
    timeline: '3–5 weeks',
  },
  {
    Icon: TrendingUp, accent: '#00f0ff', num: '07',
    title: 'SEO & Digital Marketing',
    tagline: 'Get found. Get clicked. Get customers.',
    body: 'Technical SEO, content strategy, and paid campaigns that work together. We focus on strategies that compound over time — building assets, not just burning budget.',
    includes: ['Technical SEO audit','On-page optimisation','Google Ads management','Content strategy','Monthly reporting','Competitor analysis'],
    tags: ['Google Ads','Search Console','Ahrefs','Analytics','Content'],
    price: 'From $600/mo',
    timeline: 'Ongoing',
  },
  {
    Icon: MessageCircle, accent: '#7928ca', num: '08',
    title: 'Social Media Management',
    tagline: 'Content that builds a real audience.',
    body: 'Strategy, creation, and community management across Instagram, LinkedIn, and Facebook. We make content that fits your brand and actually resonates with your audience.',
    includes: ['Monthly content calendar','12–20 posts/month','Story & reel creation','Community management','Monthly analytics report','Hashtag & growth strategy'],
    tags: ['Instagram','LinkedIn','Facebook','Canva','CapCut'],
    price: 'From $450/mo',
    timeline: 'Ongoing',
  },
  {
    Icon: ShoppingBag, accent: '#ff0080', num: '09',
    title: 'E-Commerce Solutions',
    tagline: 'Online stores built to sell.',
    body: 'Shopify or WooCommerce stores designed for conversion. From product pages to checkout flows, every detail is optimised to turn browsers into buyers.',
    includes: ['Custom store design','Product page optimisation','Checkout flow design','Payment gateway setup','Inventory & shipping setup','Conversion rate optimisation'],
    tags: ['Shopify','WooCommerce','Stripe','Analytics','CRO'],
    price: 'From $1,500',
    timeline: '4–6 weeks',
  },
]

function PageHero() {
  return (
    <section className="nb-page-hero">
      <img
        src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1920&q=80"
        alt=""
        aria-hidden="true"
        style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',objectPosition:'center',zIndex:0}}
      />
      <div style={{position:'absolute',inset:0,zIndex:1,background:'linear-gradient(to bottom,rgba(5,5,15,.6) 0%,rgba(5,5,15,.85) 100%)'}}/>
      <div className="nb-orb nb-orb-blue"   style={{width:500,height:500,top:-150,left:-100,zIndex:2}}/>
      <div className="nb-orb nb-orb-purple" style={{width:400,height:400,bottom:-100,right:-100,zIndex:2}}/>
      <div className="nb-container" style={{position:'relative',zIndex:10}}>
        <Badge>What We Do</Badge>
        <h1 className="nb-page-h1">Services built for <span className="nb-grad">real results</span></h1>
        <p className="nb-page-sub">Everything your digital presence needs — from websites and branding to AI agents, automation, and intelligent chatbots. Priced transparently, delivered properly.</p>
        <div style={{display:'flex',gap:16,flexWrap:'wrap',marginTop:36}}>
          <NavLink to="/contact" className="nb-btn nb-btn-grad">Start a project <ArrowRight size={16}/></NavLink>
          <NavLink to="/portfolio" className="nb-btn nb-btn-ghost">See our work</NavLink>
        </div>
      </div>
    </section>
  )
}

function ServiceList() {
  return (
    <section className="nb-section" style={{background:'#07070d'}}>
      <div className="nb-container">
        <div className="nb-svc-full-list">
          {services.map((s, i) => (
            <div key={s.num} className="nb-svc-full-card" style={{'--accent': s.accent}}>
              <div className="nb-svc-full-left">
                <div className="nb-svc-full-head">
                  <div className="nb-svc-full-icon" style={{background:`${s.accent}15`,color:s.accent,border:`1px solid ${s.accent}30`}}>
                    <s.Icon size={26}/>
                  </div>
                  <span className="nb-svc-full-num">{s.num}</span>
                </div>
                <h2 className="nb-svc-full-title">{s.title}</h2>
                <p className="nb-svc-full-tagline" style={{color:s.accent}}>{s.tagline}</p>
                <p className="nb-svc-full-body">{s.body}</p>
                <div className="nb-svc-full-tags">
                  {s.tags.map(t => <span key={t} className="nb-svc-tag">{t}</span>)}
                </div>
                <div className="nb-svc-full-meta">
                  <div className="nb-svc-full-meta-item">
                    <span className="nb-svc-full-meta-l">Starting from</span>
                    <span className="nb-svc-full-meta-v" style={{color:s.accent}}>{s.price}</span>
                  </div>
                  <div className="nb-svc-full-divider"/>
                  <div className="nb-svc-full-meta-item">
                    <span className="nb-svc-full-meta-l">Timeline</span>
                    <span className="nb-svc-full-meta-v">{s.timeline}</span>
                  </div>
                </div>
              </div>
              <div className="nb-svc-full-right">
                <div className="nb-svc-includes">
                  <h4 className="nb-svc-includes-title">What's included</h4>
                  <ul className="nb-svc-includes-list">
                    {s.includes.map(item => (
                      <li key={item} className="nb-svc-includes-item">
                        <CheckCircle size={14} style={{color:s.accent,flexShrink:0}}/>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <NavLink to="/contact" className="nb-btn nb-btn-ghost" style={{marginTop:24,width:'100%',justifyContent:'center'}}>
                    Get a quote <ChevronRight size={16}/>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyItWorks() {
  const reasons = [
    {
      Icon: Zap, color: '#00f0ff',
      title: 'No templates. Ever.',
      body: 'Every deliverable is built from scratch for your specific context. Cookie-cutter solutions get cookie-cutter results — we skip that entirely.',
    },
    {
      Icon: DollarSign, color: '#7928ca',
      title: 'Transparent pricing',
      body: 'You know exactly what you\'re paying before we start. No hidden costs, no scope-creep surprises, no hourly billing anxiety.',
    },
    {
      Icon: HeartHandshake, color: '#ff0080',
      title: 'We stay after launch',
      body: 'Every project includes a post-delivery support window. We don\'t disappear the moment you sign off — your success is our track record.',
    },
  ]
  return (
    <section style={{padding:'100px 0', position:'relative', overflow:'hidden', background:'#07070d'}}>
      {/* Top accent line */}
      <div style={{
        position:'absolute', top:0, left:'6%', right:'6%', height:'1px', zIndex:2, pointerEvents:'none',
        background:'linear-gradient(90deg,transparent,rgba(0,112,243,.65) 30%,rgba(121,40,202,.65) 70%,transparent)',
      }} />

      {/* Dot grid with radial fade */}
      <div style={{
        position:'absolute', inset:0, zIndex:0, pointerEvents:'none',
        backgroundImage:'radial-gradient(rgba(255,255,255,.05) 1px, transparent 1px)',
        backgroundSize:'28px 28px',
        WebkitMaskImage:'radial-gradient(ellipse 90% 80% at 50% 50%, black 20%, transparent 100%)',
        maskImage:'radial-gradient(ellipse 90% 80% at 50% 50%, black 20%, transparent 100%)',
      }} />

      {/* Color orbs */}
      <div style={{position:'absolute',width:700,height:700,top:-280,left:-220,borderRadius:'50%',background:'rgba(0,112,243,.2)',filter:'blur(160px)',zIndex:0,pointerEvents:'none'}} />
      <div style={{position:'absolute',width:560,height:560,bottom:-200,right:-160,borderRadius:'50%',background:'rgba(121,40,202,.2)',filter:'blur(150px)',zIndex:0,pointerEvents:'none'}} />
      <div style={{position:'absolute',width:300,height:300,top:'40%',left:'50%',transform:'translateX(-50%)',borderRadius:'50%',background:'rgba(0,240,255,.07)',filter:'blur(100px)',zIndex:0,pointerEvents:'none'}} />

      <div className="nb-container" style={{position:'relative',zIndex:1}}>
        <Reveal>
          <div className="nb-section-head" style={{marginBottom:40}}>
            <Badge>Why it works</Badge>
            <h2 className="nb-h2">The difference is in <span className="nb-grad">how we work</span></h2>
            <p className="nb-section-sub">Three things that make every engagement at NexbeeLabs different from the alternatives.</p>
          </div>
        </Reveal>
        <StaggerReveal className="nb-why-grid" step={0.1}>
          {reasons.map(r => (
            <div key={r.title} className="nb-why-card">
              <div className="nb-why-icon" style={{background:`${r.color}15`,color:r.color,border:`1px solid ${r.color}30`}}>
                <r.Icon size={22}/>
              </div>
              <h3 className="nb-why-title">{r.title}</h3>
              <p className="nb-why-body">{r.body}</p>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { Icon: Phone,       color: '#00f0ff', n: '01', title: 'Discovery call',     body: 'A free 30-minute call to understand your goals, timeline, and budget. No pitch, just listening.' },
    { Icon: Search,      color: '#7928ca', n: '02', title: 'Strategy & proposal', body: 'We send a clear proposal — scope, timeline, price. No vague estimates or hidden line items.' },
    { Icon: Layers,      color: '#ff0080', n: '03', title: 'Design & build',      body: 'You get regular updates and review checkpoints. No radio silence, no surprises at the end.' },
    { Icon: LifeBuoy,    color: '#ffb86c', n: '04', title: 'Launch & support',    body: 'We handle launch and stay on for 30 days post-delivery to fix anything that needs fixing.' },
  ]
  return (
    <section style={{padding:'80px 0',background:'radial-gradient(ellipse at center,rgba(0,112,243,.05),transparent 70%) #07070d',position:'relative'}}>
      <div className="nb-container">
        <Reveal>
          <div className="nb-section-head" style={{marginBottom:48}}>
            <Badge>How it works</Badge>
            <h2 className="nb-h2">From first message to <span className="nb-grad">finished product</span></h2>
            <p className="nb-section-sub">A simple, four-step process designed to keep things clear and moving.</p>
          </div>
        </Reveal>
        <StaggerReveal className="nb-svc-steps-grid" step={0.1}>
          {steps.map(s => (
            <div key={s.n} className="nb-svc-step-card" style={{'--sc': s.color}}>
              <div className="nb-svc-step-accent" style={{background: s.color}} />
              <div className="nb-svc-step-watermark">{s.n}</div>
              <div className="nb-svc-step-icon" style={{background:`${s.color}15`,color:s.color,border:`1px solid ${s.color}30`}}>
                <s.Icon size={20}/>
              </div>
              <h3 className="nb-svc-step-title">{s.title}</h3>
              <p className="nb-svc-step-body">{s.body}</p>
            </div>
          ))}
        </StaggerReveal>
        <Reveal>
          <div style={{textAlign:'center',marginTop:40}}>
            <NavLink to="/process" className="nb-btn nb-btn-ghost">See the full process <ChevronRight size={16}/></NavLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

const faqs = [
  { q: 'Do you work with clients outside Bangladesh?',         a: 'Yes — all of our work is remote-friendly. We have clients across South Asia, the Middle East, Europe, and North America. Time zones haven\'t been an issue.' },
  { q: 'What kinds of AI agents can you build?',               a: 'We build agents for lead qualification, customer support triage, data extraction, automated reporting, internal knowledge lookup, and more. If the task involves a repeatable decision or a sequence of steps, we can likely automate it with AI.' },
  { q: 'Do I need technical knowledge to use an AI chatbot?',  a: 'No. We handle the full build, training, and deployment. We also provide a simple dashboard so you can see conversations and update the bot\'s knowledge base without any coding.' },
  { q: 'Which automation tools do you use?',                   a: 'We work with n8n, Make (Integromat), and Zapier for no-code automation, and build custom Python or Node.js pipelines when more complexity is needed. We recommend the right tool based on your stack and budget.' },
  { q: 'Can I combine multiple services?',                     a: 'Absolutely. Most clients combine at least two services — web design with SEO, or branding with social media. We\'ll recommend what makes sense for your goals.' },
  { q: 'I\'m not sure which service I need. What do I do?',   a: 'Book a free discovery call. We\'ll ask questions, understand your situation, and give you an honest recommendation — even if it means pointing you somewhere else.' },
  { q: 'How do payments work?',                                a: 'For project-based work: 50% upfront, 50% on delivery. Monthly services are billed at the start of each month. We accept bank transfer and major cards.' },
  { q: 'Do you offer ongoing retainers?',                      a: 'Yes. We offer monthly design and development retainers for clients who need consistent support. Retainer clients also get priority response times.' },
  { q: 'What happens after the project is delivered?',         a: 'Every project includes documentation, a proper handoff, and a 30-day support window. After that, we offer maintenance retainers if you need ongoing help.' },
]

function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="nb-pfaq-section">
      <div className="nb-container">
        <div className="nb-pfaq-layout">

          {/* Left — sticky panel */}
          <Reveal>
            <div className="nb-pfaq-left">
              <Badge>FAQ</Badge>
              <h2 className="nb-h2" style={{marginTop:16}}>
                Questions we <span className="nb-grad">hear often</span>
              </h2>
              <p className="nb-pfaq-desc">
                Still have questions? We're happy to walk you through anything before you commit to a single thing.
              </p>
              <NavLink to="/contact" className="nb-btn nb-btn-grad" style={{marginTop:8,display:'inline-flex'}}>
                Ask a question <ArrowRight size={16}/>
              </NavLink>
            </div>
          </Reveal>

          {/* Right — accordion */}
          <Reveal delay="0.12s">
            <div className="nb-pfaq-list">
              {faqs.map((f, i) => (
                <div key={i} className={`nb-pfaq-item ${open === i ? 'nb-pfaq-item-open' : ''}`}>
                  <button className="nb-pfaq-trigger" onClick={() => setOpen(open === i ? null : i)}>
                    <span className="nb-pfaq-num" style={{color: open === i ? '#00f0ff' : undefined}}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="nb-pfaq-q">{f.q}</span>
                    <ChevronDown size={18} className="nb-pfaq-chevron"/>
                  </button>
                  {open === i && <p className="nb-pfaq-a">{f.a}</p>}
                </div>
              ))}
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="nb-section" style={{background:'#07070d'}}>
      <div className="nb-container nb-container-narrow" style={{textAlign:'center'}}>
        <Badge>Not sure where to start?</Badge>
        <h2 className="nb-h2" style={{marginTop:16}}>Let's figure it out <span className="nb-grad">together</span></h2>
        <p className="nb-section-sub" style={{margin:'20px auto 40px',maxWidth:520}}>Tell us about your project and we'll recommend the right services — no pressure, no sales pitch.</p>
        <NavLink to="/contact" className="nb-btn nb-btn-grad">Book a free call <ArrowRight size={16}/></NavLink>
      </div>
    </section>
  )
}

export default function Services() {
  return (
    <>
      <PageHero />
      <ServiceList />
      <WhyItWorks />
      <HowItWorks />
      <FAQ />
      <CTA />
    </>
  )
}
