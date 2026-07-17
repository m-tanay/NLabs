import { Linkedin, Globe, Code2, PenTool, TrendingUp, Megaphone, ArrowRight, Star, Zap, Coffee, Music, BookOpen, Target, MessageSquare, Layers, Shield, HeartHandshake, Lightbulb, Clock } from 'lucide-react'
import Badge from '../components/Badge'
import { NavLink } from 'react-router-dom'
import { Reveal, StaggerReveal } from '../hooks/useInView'

const team = [
  {
    initials: 'NT', name: 'MD Niamul Islam Tanay', role: 'Founder & Chief Executive Officer',
    color: '#00f0ff', grad: 'linear-gradient(135deg,#0070f3,#00f0ff)',
    photo: '/assets/NexBEE.JPG',
    bio: 'Leads NexbeeLabs\' strategic direction and growth, ensuring every project meets a high bar for quality. Builds lasting relationships with clients and partners.',
    skills: ['Strategic Leadership','Business Development','Client Relations','Operations'],
    links: { linkedin: '#', portfolio: '#' },
  },
  {
    initials: 'MS', name: 'Md. Mehadi Hasan Shawon', role: 'Head of Technology & Innovation',
    color: '#7928ca', grad: 'linear-gradient(135deg,#7928ca,#ff0080)',
    photo: '/assets/Shawon.jpg',
    bio: 'Drives NexbeeLabs\' technical vision — architecture, engineering standards, and emerging tech. Bridges business goals and execution to ship scalable, secure products.',
    skills: ['Technical Strategy','Full Stack Development','Cloud Infrastructure','Security & Scalability'],
    links: { linkedin: '#', portfolio: '#' },
  },
  {
    initials: 'TI', name: 'Md. Tarikul Islam', role: 'Team Lead',
    color: '#0070f3', grad: 'linear-gradient(135deg,#0070f3,#00f0ff)',
    photo: '',
    bio: 'Leads project planning and technical oversight across the team. Coordinates development, resolves blockers, and keeps projects on time without cutting corners.',
    skills: ['Technical Leadership','Project Management','Best Practices','Quality Assurance'],
    links: { linkedin: '#', portfolio: '#' },
  },
  {
    initials: 'RA', name: 'Rashedul Alom', role: 'Senior Software Engineer',
    color: '#ff0080', grad: 'linear-gradient(135deg,#ff0080,#ffb86c)',
    photo: '',
    bio: 'Designs and maintains complex software systems, turning business requirements into scalable, secure solutions. Mentors engineers and owns code quality.',
    skills: ['System Design','Software Architecture','Code Review','Mentoring'],
    links: { linkedin: '#', portfolio: '#' },
  },
  {
    initials: 'AR', name: 'Azizur Rahman', role: 'Full Stack Software Engineer',
    color: '#00c896', grad: 'linear-gradient(135deg,#00c896,#0070f3)',
    photo: '',
    bio: 'Builds end-to-end applications across frontend and backend. Focused on performance, security, and API integration, always in close collaboration with the team.',
    skills: ['Frontend','Backend','API Integration','Security'],
    links: { linkedin: '#', portfolio: '#' },
  },
  {
    initials: 'JR', name: 'Jehan Rahman', role: 'Senior Database Engineer',
    color: '#ffb86c', grad: 'linear-gradient(135deg,#ffb86c,#ff0080)',
    photo: '',
    bio: 'Leads database design and performance tuning, ensuring data security and high availability across critical production systems.',
    skills: ['Database Design','Performance Optimisation','Data Security','High Availability'],
    links: { linkedin: '#', portfolio: '#' },
  },
  {
    initials: 'MR', name: 'Muntasir Rahman', role: 'Database Engineer',
    color: '#6c5ce7', grad: 'linear-gradient(135deg,#6c5ce7,#a29bfe)',
    photo: '',
    bio: 'Supports database development and maintenance — SQL queries, data processing, and reporting — keeping data consistent and systems reliable.',
    skills: ['SQL','Data Processing','Reporting','Performance Tuning'],
    links: { linkedin: '#', portfolio: '#' },
  },
  {
    initials: 'AM', name: 'Apple Mahmadud', role: 'UI & Frontend Designer',
    color: '#fd79a8', grad: 'linear-gradient(135deg,#fd79a8,#ff0080)',
    photo: '',
    bio: 'Designs intuitive, visually refined interfaces and turns concepts into responsive frontend layouts with consistent standards and strong UX.',
    skills: ['UI Design','Frontend','Responsive Design','UX'],
    links: { linkedin: '#', portfolio: '#' },
  },
  {
    initials: 'MU', name: 'Mahatab Uddin', role: 'IT Engineer',
    color: '#00b894', grad: 'linear-gradient(135deg,#00b894,#00cec9)',
    photo: '',
    bio: 'Manages IT infrastructure — servers, networks, and systems — ensuring operational stability, security, and reliable day-to-day support.',
    skills: ['Infrastructure','Server Management','Networking','IT Support'],
    links: { linkedin: '#', portfolio: '#' },
  },
]

function PageHero() {
  return (
    <section className="nb-page-hero">
      <img
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80"
        alt=""
        aria-hidden="true"
        style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',objectPosition:'center',zIndex:0}}
      />
      <div style={{position:'absolute',inset:0,zIndex:1,background:'linear-gradient(to bottom,rgba(5,5,15,.6) 0%,rgba(5,5,15,.85) 100%)'}}/>
      <div className="nb-orb nb-orb-purple" style={{width:500,height:500,top:-150,left:-100,zIndex:2}}/>
      <div className="nb-orb nb-orb-blue"   style={{width:400,height:400,bottom:0,right:-100,zIndex:2}}/>
      <div className="nb-container" style={{position:'relative',zIndex:10}}>
        <Reveal><Badge>The Team</Badge></Reveal>
        <Reveal delay="0.1s">
          <h1 className="nb-page-h1">Small team.<br/><span className="nb-grad">Serious craft.</span></h1>
        </Reveal>
        <Reveal delay="0.2s">
          <p className="nb-page-sub">Six specialists who've chosen depth over breadth. You work directly with the people doing the work — always.</p>
        </Reveal>
        <Reveal delay="0.3s">
          <div style={{display:'flex',gap:16,flexWrap:'wrap',marginTop:36}}>
            <NavLink to="/contact" className="nb-btn nb-btn-grad">Work with us <ArrowRight size={16}/></NavLink>
            <NavLink to="/about"   className="nb-btn nb-btn-ghost">Our story</NavLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

const tickerItems = [
  'Craft over output',
  'Radical honesty',
  'No templates — ever',
  'Skin in the game',
  'Remote-first',
  'Build to last',
  'Direct access, always',
  'Long-term thinking',
  'Results, not vanity',
  'Genuine investment',
]

function ValuesTicker() {
  const doubled = [...tickerItems, ...tickerItems]
  return (
    <div className="nb-ticker-wrap">
      <div className="nb-ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className="nb-ticker-item">
            {item}
            <span className="nb-ticker-dot" aria-hidden="true"/>
          </span>
        ))}
      </div>
    </div>
  )
}

const wwuPoints = [
  {
    n: '01', Icon: Target,        color: '#00f0ff',
    title: 'You talk directly to the people doing the work',
    body:  'No account managers, no handoffs, no junior staff hiding behind a senior name. Every conversation is with the designer, developer, or strategist actually on your project.',
    tag:   'Always direct',
  },
  {
    n: '02', Icon: Shield,        color: '#7928ca',
    title: 'We only take work we genuinely believe in',
    body:  'We turn down projects that aren\'t a good fit — for us or for you. That selectiveness is exactly why every client we say yes to gets our full attention.',
    tag:   '5 projects / quarter',
  },
  {
    n: '03', Icon: HeartHandshake,color: '#ff0080',
    title: 'Honest — even when it\'s uncomfortable',
    body:  'If we think your idea won\'t work, we say so and bring a better one to the table. We\'d rather have an awkward conversation than ship something mediocre.',
    tag:   'No sugarcoating',
  },
  {
    n: '04', Icon: Lightbulb,     color: '#ffb86c',
    title: 'Senior thinking on every single project',
    body:  'There are no junior hires learning on your budget. Every person on our team had years of deep craft experience before joining NexbeeLabs.',
    tag:   '6 yr avg experience',
  },
]

function WhyWorkWithUs() {
  return (
    <section className="nb-wwu-section" style={{position:'relative',background:'#05050f'}}>
      <div style={{position:'absolute',inset:0,overflow:'hidden',pointerEvents:'none'}}>
        <div className="nb-orb nb-orb-purple" style={{width:480,height:480,top:-180,left:-160,opacity:.3}}/>
        <div className="nb-orb nb-orb-blue"   style={{width:420,height:420,bottom:-160,right:-140,opacity:.25}}/>
        <div className="nb-section-dotgrid" style={{position:'absolute',inset:0}}/>
      </div>
      <div className="nb-container" style={{position:'relative',zIndex:1}}>
        <Reveal>
          <div className="nb-wwu-head" style={{textAlign:'center'}}>
            <Badge>Why NexbeeLabs</Badge>
            <h2 className="nb-h2" style={{marginTop:16}}>The standards we <span className="nb-grad">hold ourselves to.</span></h2>
          </div>
        </Reveal>

        <div className="nb-wwu-list">
          {wwuPoints.map((p, i) => (
            <Reveal key={p.n} delay={`${i * 0.08}s`}>
              <div className="nb-wwu-row" style={{'--wc': p.color}}>
                <span className="nb-wwu-num">{p.n}</span>
                <div className="nb-wwu-icon" style={{background:`${p.color}15`,border:`1px solid ${p.color}30`,color:p.color}}>
                  <p.Icon size={22}/>
                </div>
                <div className="nb-wwu-content">
                  <h3 className="nb-wwu-title">{p.title}</h3>
                  <p className="nb-wwu-body">{p.body}</p>
                </div>
                <span className="nb-wwu-tag" style={{color:p.color,background:`${p.color}10`,border:`1px solid ${p.color}25`}}>{p.tag}</span>
                <div className="nb-wwu-accent-line" style={{background:p.color}}/>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div style={{marginTop:48,display:'flex',gap:16,flexWrap:'wrap',justifyContent:'center'}}>
            <NavLink to="/contact" className="nb-btn nb-btn-grad">Work with us <ArrowRight size={16}/></NavLink>
            <NavLink to="/about"   className="nb-btn nb-btn-ghost">Our story</NavLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function TeamCards() {
  return (
    <section style={{padding:'60px 0 80px',position:'relative',background:'#05050f'}}>
      <div style={{position:'absolute',inset:0,overflow:'hidden',pointerEvents:'none'}}>
        <div className="nb-orb nb-orb-blue"   style={{width:460,height:460,top:-160,right:-140,opacity:.25}}/>
        <div className="nb-orb" style={{width:420,height:420,bottom:-160,left:-140,opacity:.25,background:'rgba(255,0,128,.3)'}}/>
        <div className="nb-section-dotgrid" style={{position:'absolute',inset:0}}/>
      </div>
      <div className="nb-container" style={{position:'relative',zIndex:1}}>
        <Reveal>
          <div className="nb-section-head" style={{marginBottom:48}}>
            <Badge>Our Team</Badge>
            <h2 className="nb-h2">Our <span className="nb-grad">Team</span></h2>
            <p className="nb-section-sub" style={{marginTop:16,maxWidth:640}}>Nexbee is led by experienced professionals with strong technical expertise and a shared commitment to delivering reliable, secure, and high-quality digital solutions.</p>
          </div>
        </Reveal>
        <StaggerReveal className="nb-team-profile-grid" step={0.08}>
          {team.map(m => (
            <div key={m.initials} className="nb-portrait-card">
              {/* Photo */}
              <div className="nb-portrait-img-wrap">
                {m.photo ? (
                  <img src={m.photo} alt={m.name} className="nb-portrait-img"/>
                ) : (
                  <div className="nb-portrait-img" style={{background:m.grad,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'2.5rem',fontWeight:700,color:'#fff',letterSpacing:1}}>
                    {m.initials}
                  </div>
                )}
                <div className="nb-portrait-img-overlay" style={{background:`linear-gradient(to top,rgba(10,10,14,.85) 0%,transparent 60%)`}}/>
                <div className="nb-portrait-accent" style={{background:m.color}}/>
              </div>

              {/* Body */}
              <div className="nb-portrait-body">
                <h3 className="nb-portrait-name">{m.name}</h3>
                <p className="nb-portrait-role" style={{color:m.color}}>{m.role}</p>
                <p className="nb-portrait-bio">{m.bio}</p>
                <div className="nb-portrait-skills">
                  {m.skills.map(s => (
                    <span key={s} className="nb-portrait-tag" style={{borderColor:`${m.color}30`,color:`${m.color}cc`}}>{s}</span>
                  ))}
                </div>
                <div className="nb-portrait-footer">
                  <a href={m.links.linkedin} className="nb-profile-link" style={{'--c':m.color}}>
                    <Linkedin size={14}/> LinkedIn
                  </a>
                  <a href={m.links.portfolio} className="nb-profile-link" style={{'--c':m.color}}>
                    <Globe size={14}/> Portfolio
                  </a>
                </div>
              </div>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}

function Culture() {
  const items = [
    { Icon: Target,       color: '#00f0ff', title: 'Skin in the game', body: 'We only take projects we believe in. If we don\'t think something will work, we\'ll tell you.' },
    { Icon: MessageSquare,color: '#7928ca', title: 'Radical honesty',  body: 'No sugar-coating. We share what we think and expect the same back.' },
    { Icon: Layers,       color: '#ff0080', title: 'Build to last',    body: 'Every project is something we\'d be proud to put our name on publicly.' },
    { Icon: Globe,        color: '#ffb86c', title: 'Remote-first',     body: 'Based in Dhaka, collaborating globally. Async done right.' },
  ]
  return (
    <section style={{padding:'80px 0 80px',position:'relative',background:'radial-gradient(ellipse at top,rgba(121,40,202,.16),transparent 80%),#05050f'}}>
      <div className="nb-container">
        <Reveal>
          <div className="nb-section-head" style={{marginBottom:40}}>
            <Badge>How we operate</Badge>
            <h2 className="nb-h2">Culture isn't a poster.<br/><span className="nb-grad">It's how we work.</span></h2>
          </div>
        </Reveal>
        <StaggerReveal className="nb-culture-grid" step={0.1}>
          {items.map(c => (
            <div key={c.title} className="nb-culture-card">
              <div className="nb-culture-icon" style={{background:`${c.color}15`,color:c.color,border:`1px solid ${c.color}30`}}>
                <c.Icon size={20}/>
              </div>
              <h3 style={{fontWeight:700,fontSize:'1.05rem',marginBottom:8}}>{c.title}</h3>
              <p style={{color:'rgba(255,255,255,.55)',lineHeight:1.65,fontSize:'.88rem'}}>{c.body}</p>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}

function Hiring() {
  return (
    <section style={{padding:'60px 0 100px',background:'#05050f'}}>
      <div className="nb-container nb-container-narrow">
        <Reveal>
          <div className="nb-hiring-card">
            <div className="nb-hiring-glow"/>
            <div style={{position:'relative',zIndex:2,textAlign:'center'}}>
              <Badge>We're growing</Badge>
              <h2 className="nb-h2" style={{marginTop:16}}>Think you belong <span className="nb-grad">on this team?</span></h2>
              <p className="nb-section-sub" style={{margin:'16px auto 32px',maxWidth:480}}>
                No open roles right now, but we always want to hear from exceptional designers and developers who care about craft.
              </p>
              <NavLink to="/contact" className="nb-btn nb-btn-grad">Introduce yourself <ArrowRight size={16}/></NavLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default function Team() {
  return (
    <>
      <PageHero/>
      <ValuesTicker/>
      <WhyWorkWithUs/>
      <TeamCards/>
      <Culture/>
      <Hiring/>
    </>
  )
}
