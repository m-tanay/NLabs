import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, ArrowUpRight, Home as HomeIcon, Info, Layers, Briefcase, Workflow, Users, Mail } from 'lucide-react'

const links = [
  { label: 'Home',      to: '/',          Icon: HomeIcon },
  { label: 'About',     to: '/about',     Icon: Info },
  { label: 'Services',  to: '/services',  Icon: Layers },
  { label: 'Portfolio', to: '/portfolio', Icon: Briefcase },
  { label: 'Process',   to: '/process',   Icon: Workflow },
  { label: 'Team',      to: '/team',      Icon: Users },
  { label: 'Contact',   to: '/contact',   Icon: Mail },
]

export default function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={`nb-nav ${scrolled ? 'nb-nav-scrolled' : ''}`}>
      <div className="nb-nav-inner">
        <NavLink to="/" className="nb-logo" onClick={() => setOpen(false)}>
          <img src="/assets/NexbeeLabs Logo-Photoroom croped.png" alt="NexbeeLabs" className="nb-logo-img" />
        </NavLink>
        <nav className="nb-nav-links">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to}
              className={({ isActive }) => `nb-nav-link ${isActive ? 'nb-nav-link-active' : ''}`}>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <button className="nb-nav-cta" onClick={onOpenContact}>
          <span>Let's talk</span>
          <ArrowUpRight size={14} className="nb-nav-cta-icon" />
        </button>
        <button className="nb-menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <div className={`nb-mobile-menu ${open ? 'nb-mobile-menu-open' : ''}`}>
        {links.map((l, i) => (
          <NavLink
            key={l.to} to={l.to}
            className={({ isActive }) => `nb-mobile-link ${isActive ? 'nb-mobile-link-active':''}`}
            onClick={() => setOpen(false)}
            style={{
              opacity: open ? 1 : 0,
              transform: open ? 'translateY(0)' : 'translateY(14px)',
              transition: `opacity .4s ease ${open ? i * 0.06 : 0}s, transform .4s ease ${open ? i * 0.06 : 0}s`,
            }}
          >
            <l.Icon size={17} className="nb-mobile-link-icon" />
            {l.label}
          </NavLink>
        ))}
        <button
          className="nb-btn nb-mobile-cta"
          style={{
            marginTop:12, justifyContent:'center',
            opacity: open ? 1 : 0,
            transform: open ? 'translateY(0)' : 'translateY(14px)',
            transition: `opacity .4s ease ${open ? links.length * 0.06 : 0}s, transform .4s ease ${open ? links.length * 0.06 : 0}s`,
          }}
          onClick={() => { setOpen(false); onOpenContact() }}
        >
          Let's talk <ArrowUpRight size={14} />
        </button>
      </div>
    </header>
  )
}
