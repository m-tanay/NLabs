import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const links = [
  { label: 'About',     to: '/about' },
  { label: 'Services',  to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Process',   to: '/process' },
  { label: 'Team',      to: '/team' },
  { label: 'Contact',   to: '/contact' },
]

export default function Navbar() {
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
          <span className="nb-grad">Nexbee</span>Labs
        </NavLink>
        <nav className="nb-nav-links">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to}
              className={({ isActive }) => `nb-nav-link ${isActive ? 'nb-nav-link-active' : ''}`}>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <NavLink to="/contact" className="nb-nav-cta">
          <span>Let's talk</span>
          <ArrowUpRight size={14} className="nb-nav-cta-icon" />
        </NavLink>
        <button className="nb-menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <div className={`nb-mobile-menu ${open ? 'nb-mobile-menu-open' : ''}`}>
        <NavLink to="/" className={({ isActive }) => `nb-mobile-link ${isActive ? 'nb-mobile-link-active':''}`} onClick={() => setOpen(false)}>Home</NavLink>
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} className={({ isActive }) => `nb-mobile-link ${isActive ? 'nb-mobile-link-active':''}`} onClick={() => setOpen(false)}>{l.label}</NavLink>
        ))}
        <NavLink to="/contact" className="nb-btn nb-btn-grad" style={{marginTop:12,justifyContent:'center'}} onClick={() => setOpen(false)}>
          Let's talk <ArrowUpRight size={14} />
        </NavLink>
      </div>
    </header>
  )
}
