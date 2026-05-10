import { Linkedin, Globe, Code2, PenTool, TrendingUp, Megaphone, ArrowRight, Star, Zap, Coffee, Music, BookOpen, Target, MessageSquare, Layers } from 'lucide-react'
import Badge from '../components/Badge'
import { NavLink } from 'react-router-dom'
import { Reveal, StaggerReveal } from '../hooks/useInView'

const team = [
  {
    initials: 'MH', name: 'Mehad Hossain', role: 'Founder & Creative Director',
    color: '#00f0ff', grad: 'linear-gradient(135deg,#0070f3,#00f0ff)',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&h=700&q=80&crop=faces',
    bio: 'Obsessed with the intersection of strategy and craft. Has led design and brand work for startups across South Asia and beyond.',
    skills: ['Brand Strategy','UI/UX','Creative Direction','Figma'],
    links: { linkedin: '#', portfolio: '#' },
  },
  {
    initials: 'FK', name: 'Farhan Khan', role: 'Lead Developer',
    color: '#7928ca', grad: 'linear-gradient(135deg,#7928ca,#ff0080)',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&h=700&q=80&crop=faces',
    bio: 'Full-stack developer with a frontend heart. Writes clean, performant code that developers actually enjoy reading.',
    skills: ['Next.js','TypeScript','Node.js','Tailwind'],
    links: { linkedin: '#', portfolio: '#' },
  },
  {
    initials: 'SI', name: 'Sanjida Islam', role: 'Growth & SEO Strategist',
    color: '#ff0080', grad: 'linear-gradient(135deg,#ff0080,#ffb86c)',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&h=700&q=80&crop=faces',
    bio: 'Data-driven marketer with a creative streak. Specialises in technical SEO and paid campaigns that actually convert.',
    skills: ['Technical SEO','Google Ads','Analytics','Ahrefs'],
    links: { linkedin: '#', portfolio: '#' },
  },
  {
    initials: 'NR', name: 'Nadia Rahman', role: 'Social Media Lead',
    color: '#ffb86c', grad: 'linear-gradient(135deg,#ffb86c,#ff0080)',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&h=700&q=80&crop=faces',
    bio: 'Storyteller turned social strategist. Builds content systems that scale and communities that actually stick.',
    skills: ['Instagram','Content Creation','Community Mgmt','CapCut'],
    links: { linkedin: '#', portfolio: '#' },
  },
  {
    initials: 'RA', name: 'Rakin Ahmed', role: 'Motion & Brand Designer',
    color: '#0070f3', grad: 'linear-gradient(135deg,#0070f3,#7928ca)',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&h=700&q=80&crop=faces',
    bio: 'Motion designer who believes animation should have a purpose. Turns static brands into living, breathing identities.',
    skills: ['After Effects','Motion Design','Illustrator','Lottie'],
    links: { linkedin: '#', portfolio: '#' },
  },
  {
    initials: 'TC', name: 'Tasnim Chowdhury', role: 'Project & Client Lead',
    color: '#00c896', grad: 'linear-gradient(135deg,#00c896,#0070f3)',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&h=700&q=80&crop=faces',
    bio: 'Keeps every project on track and every client in the loop. The reason nothing falls through the cracks at NexbeeLabs.',
    skills: ['Project Mgmt','Client Success','Notion','Scrum'],
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
      </div>
    </section>
  )
}

function TeamCards() {
  return (
    <section style={{padding:'60px 0 80px',position:'relative'}}>
      <div className="nb-container">
        <StaggerReveal className="nb-team-profile-grid" step={0.08}>
          {team.map(m => (
            <div key={m.initials} className="nb-portrait-card">
              {/* Photo */}
              <div className="nb-portrait-img-wrap">
                <img src={m.photo} alt={m.name} className="nb-portrait-img"/>
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
    <section style={{padding:'0 0 80px',background:'radial-gradient(ellipse at top,rgba(121,40,202,.06),transparent 60%)'}}>
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
    <section style={{padding:'0 0 100px'}}>
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
      <TeamCards/>
      <Culture/>
      <Hiring/>
    </>
  )
}
