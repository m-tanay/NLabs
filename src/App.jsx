import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Process from './pages/Process'
import Team from './pages/Team'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

const SITE = 'https://nexbeelabs.com'
const OG_IMAGE = `${SITE}/assets/og-image.jpg`

const SEO = {
  '/': {
    title: 'Nexbee — Enterprise IT Solutions | Sydney, Australia',
    description: 'Nexbee partners with forward-thinking businesses to design, build, and manage enterprise-grade digital systems — AI agents, automation, web development, SEO, and e-commerce.',
  },
  '/services': {
    title: 'Services — AI Automation, Web Dev & More | Nexbee',
    description: 'Explore Nexbee\'s technology services: AI agents, business automation, AI chatbots, web design & development, UI/UX design, SEO, social media, and e-commerce solutions.',
  },
  '/about': {
    title: 'About Nexbee | Enterprise Technology Solutions — Sydney, NSW',
    description: 'Learn how Nexbee delivers enterprise-grade technology and digital solutions — with senior-level expertise, transparent delivery, and no agency overhead.',
  },
  '/portfolio': {
    title: 'Our Work | Projects & Case Studies — Nexbee',
    description: 'Browse Nexbee\'s portfolio of web development, AI automation, and digital transformation projects. See what we\'ve built for our clients.',
  },
  '/process': {
    title: 'How We Work | Our 4-Stage Process — Nexbee',
    description: 'Nexbee follows a 4-stage process — Discover, Design, Build, Launch — to deliver quality technology solutions on time and on scope, every time.',
  },
  '/team': {
    title: 'Our Team — Nexbee Enterprise IT Solutions',
    description: 'Meet the senior-level specialists behind Nexbee — experts in AI, web development, UI/UX design, automation, and digital strategy.',
  },
  '/contact': {
    title: 'Contact Nexbee | Start a Project or Book a Free Call',
    description: 'Ready to build something great? Get in touch with Nexbee for a free 30-minute discovery call. Based in Punchbowl, NSW — working with clients globally.',
  },
  '/privacy': {
    title: 'Privacy Policy — Nexbee',
    description: 'Read Nexbee\'s privacy policy to understand how we collect, use, and protect your personal information.',
  },
  '/terms': {
    title: 'Terms of Service — Nexbee',
    description: 'Read Nexbee\'s terms of service governing the use of our website and professional technology services.',
  },
}

function setMeta(selector, attr, value) {
  const el = document.querySelector(selector)
  if (el) el.setAttribute(attr, value)
}

function MetaTags() {
  const { pathname } = useLocation()
  useEffect(() => {
    const seo = SEO[pathname] || SEO['/']
    const url = `${SITE}${pathname}`

    document.title = seo.title
    setMeta('meta[name="description"]',        'content', seo.description)
    setMeta('link[rel="canonical"]',           'href',    url)
    setMeta('meta[property="og:title"]',       'content', seo.title)
    setMeta('meta[property="og:description"]', 'content', seo.description)
    setMeta('meta[property="og:url"]',         'content', url)
    setMeta('meta[property="og:image"]',       'content', OG_IMAGE)
    setMeta('meta[name="twitter:title"]',       'content', seo.title)
    setMeta('meta[name="twitter:description"]', 'content', seo.description)
    setMeta('meta[name="twitter:image"]',       'content', OG_IMAGE)
  }, [pathname])
  return null
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <>
      <ScrollToTop />
      <MetaTags />
      <Navbar onOpenContact={() => setContactOpen(true)} />
      <main>
        <Routes>
          <Route path="/"          element={<Home />} />
          <Route path="/about"     element={<About />} />
          <Route path="/services"  element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/process"   element={<Process />} />
          <Route path="/team"      element={<Team />} />
          <Route path="/contact"   element={<Contact />} />
          <Route path="/privacy"   element={<Privacy />} />
          <Route path="/terms"     element={<Terms />} />
        </Routes>
      </main>
      <Footer />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  )
}
