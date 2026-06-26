import { Linkedin, Instagram, Facebook, Dribbble, ChevronRight, Mail, Phone } from 'lucide-react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="nb-footer">
      <div className="nb-footer-orb nb-footer-orb-1"/>
      <div className="nb-footer-orb nb-footer-orb-2"/>
      <div className="nb-footer-orb nb-footer-orb-3"/>
      <div className="nb-footer-wordmark" aria-hidden="true">NEXBEE</div>
      <div className="nb-container" style={{position:'relative',zIndex:2}}>
        <div className="nb-footer-top">
          <div className="nb-footer-brand">
            <NavLink to="/" className="nb-logo nb-footer-logo">
              <img src="/assets/NexbeeLabs Logo-Photoroom croped.png" alt="NexbeeLabs" className="nb-logo-img" />
            </NavLink>
            <p className="nb-footer-desc">Building digital products that actually work. Based in Sydney, Australia. Working globally.</p>
            <div className="nb-footer-contact">
              <a href="mailto:hello@nexbeelabs.com" className="nb-footer-contact-item">
                <Mail size={13} /><span>hello@nexbeelabs.com</span>
              </a>
              <a href="tel:+61415340554" className="nb-footer-contact-item">
                <Phone size={13} /><span>+61 415 340 554</span>
              </a>
            </div>
            <div className="nb-footer-socials">
              {[Linkedin, Instagram, Facebook, Dribbble].map((Icon, i) => (
                <a key={i} href="#" className="nb-soc"><Icon size={16} /></a>
              ))}
            </div>
          </div>
          <div className="nb-footer-cols">
            <div>
              <h4>Services</h4>
              {[
                ['Web Design & Development','/services'],
                ['Brand Identity & Strategy','/services'],
                ['UI/UX Design','/services'],
                ['SEO & Digital Marketing','/services'],
                ['E-Commerce Solutions','/services'],
              ].map(([l,to]) => <NavLink key={l} to={to}>{l}</NavLink>)}
            </div>
            <div>
              <h4>Company</h4>
              {[
                ['About Us','/about'],
                ['Our Work','/portfolio'],
                ['Team','/team'],
                ['Process','/process'],
                ['Contact','/contact'],
              ].map(([l,to]) => <NavLink key={l} to={to}>{l}</NavLink>)}
            </div>
            <div className="nb-footer-card">
              <h4>Partner with us</h4>
              <p>Ready to build something worth talking about?</p>
              <NavLink to="/contact" className="nb-svc-link">Book a consultation <ChevronRight size={14} /></NavLink>
            </div>
          </div>
        </div>
        <div className="nb-footer-bot">
          <p>© 2025 NexbeeLabs. All rights reserved.</p>
          <div><NavLink to="/privacy">Privacy Policy</NavLink> · <NavLink to="/terms">Terms of Service</NavLink></div>
        </div>
      </div>
    </footer>
  )
}
