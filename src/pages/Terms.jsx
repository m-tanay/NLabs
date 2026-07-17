import { NavLink } from 'react-router-dom'
import { ArrowLeft, FileText } from 'lucide-react'
import { Reveal } from '../hooks/useInView'

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: [
      'By accessing our website or engaging NexbeeLabs for any service, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our services.',
      'These Terms apply to all visitors, clients, and others who access or use our services. We reserve the right to update these Terms at any time, and continued use of our services after any changes constitutes your acceptance of the revised Terms.',
    ],
  },
  {
    title: '2. Our Services',
    body: [
      'NexbeeLabs provides digital services including web design and development, brand identity and strategy, UI/UX design, SEO and digital marketing, social media management, and e-commerce solutions.',
      'All services are custom scoped per project. The specific scope, deliverables, timeline, and pricing for each engagement are defined in a written proposal or service agreement provided before work begins. No work commences without written agreement from both parties.',
    ],
  },
  {
    title: '3. Project Engagements',
    body: [
      'Each project begins with a discovery phase to align on goals, scope, and expectations. Significant changes to the agreed scope — including additional features, revised timelines, or new deliverables — may result in additional charges and require a written amendment to the original agreement.',
      'We will provide regular updates and checkpoints throughout the project. Client feedback is expected at each milestone. Delays in providing feedback or approvals may affect the project timeline at no fault of NexbeeLabs.',
      'NexbeeLabs reserves the right to decline any project or client at our discretion, including if we determine that the project conflicts with our values or capacity.',
    ],
  },
  {
    title: '4. Payment Terms',
    body: [
      'For project-based engagements, payment is structured as follows: 50% of the agreed project fee is due upon signing the project agreement; the remaining 50% is due upon final delivery or go-live, whichever comes first.',
      'Monthly retainer services are billed at the start of each billing cycle. Invoices are due within 14 days of issue. Late payments may result in a suspension of services until the outstanding balance is settled.',
      'All prices are quoted in Australian Dollars (AUD) and are exclusive of GST unless otherwise stated. Where GST applies, it will be added to invoices in accordance with the A New Tax System (Goods and Services Tax) Act 1999 (Cth). We accept bank transfer and major credit/debit cards. Fees are non-refundable once work has commenced on that phase of the project, except in cases of material breach by NexbeeLabs.',
    ],
  },
  {
    title: '5. Intellectual Property',
    body: [
      'Upon receipt of final payment, clients receive full ownership of all custom work created specifically for their project, including design files, source code, and written content produced by NexbeeLabs.',
      'NexbeeLabs retains the right to display the completed work in our portfolio, case studies, and marketing materials unless explicitly agreed otherwise in writing prior to project commencement.',
      'Third-party assets such as stock photography, licensed fonts, plugins, or frameworks remain subject to their respective licences. NexbeeLabs will inform clients of any third-party licences required for ongoing use of the delivered product.',
    ],
  },
  {
    title: '6. Client Responsibilities',
    body: [
      'Clients are responsible for providing accurate, complete, and timely content, assets, and feedback required for project delivery. Delays caused by late content or approvals are the client\'s responsibility.',
      'Clients warrant that any materials, content, or assets they provide to NexbeeLabs (including logos, images, and text) do not infringe on the intellectual property rights of any third party. Clients indemnify NexbeeLabs against any claims arising from such materials.',
    ],
  },
  {
    title: '7. Confidentiality',
    body: [
      'Both parties agree to keep confidential any proprietary information, business strategies, or sensitive data shared during the course of the engagement. This obligation survives the termination of the project.',
      'NexbeeLabs will not share client project details, business information, or communications with third parties without explicit written consent, except as required by law or to subcontractors bound by equivalent confidentiality obligations.',
    ],
  },
  {
    title: '8. Warranties and Disclaimers',
    body: [
      'NexbeeLabs warrants that all work is produced with reasonable skill and care, and that we hold the necessary rights to deliver the agreed services.',
      'Our services are provided "as delivered." We do not warrant that websites or digital products we build will be free from bugs forever, or that they will meet every business objective. We provide a 30-day post-launch support window to address issues arising from our work.',
      'We make no guarantees regarding specific SEO rankings, conversion rates, or marketing results, as these depend on many factors outside our control.',
      'Nothing in these Terms excludes, restricts, or modifies any consumer guarantee, right, or remedy conferred on you by the Australian Consumer Law (Schedule 2 of the Competition and Consumer Act 2010 (Cth)) or any other applicable law that cannot lawfully be excluded, restricted, or modified by agreement. Where our services are not of a kind ordinarily acquired for personal, domestic, or household use, our liability for breach of a non-excludable guarantee is limited, at our option, to resupplying the services or paying the cost of having the services resupplied.',
    ],
  },
  {
    title: '9. Limitation of Liability',
    body: [
      'Subject to clause 8 above, and to the maximum extent permitted by law, NexbeeLabs shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from or relating to these Terms or our services.',
      'Our total liability for any claim related to a specific project shall not exceed the total fees paid by the client for that project in the 12 months preceding the claim.',
    ],
  },
  {
    title: '10. Termination',
    body: [
      'Either party may terminate a project engagement with 14 days\' written notice. Upon termination, the client is responsible for payment of all work completed to the date of termination, calculated on a pro-rata basis.',
      'NexbeeLabs may terminate an engagement immediately and without notice if the client breaches these Terms, fails to make payment, or behaves in a manner that is abusive or unlawful.',
    ],
  },
  {
    title: '11. Governing Law',
    body: [
      'These Terms are governed by and construed in accordance with the laws of New South Wales, Australia, and the applicable laws of the Commonwealth of Australia. Any disputes arising from these Terms or our services shall first be attempted to be resolved through good-faith negotiation.',
      'If a dispute cannot be resolved through negotiation within 30 days, the parties submit to the non-exclusive jurisdiction of the courts of New South Wales, Australia.',
    ],
  },
  {
    title: '12. Contact Us',
    body: [
      'If you have any questions about these Terms of Service, please contact us at hello@nexbeelabs.com. We are committed to resolving concerns fairly and promptly.',
    ],
  },
]

export default function Terms() {
  return (
    <>
      {/* Hero */}
      <section className="nb-legal-hero">
        <div className="nb-orb nb-orb-purple" style={{width:500,height:500,top:-200,left:-100,opacity:.28,pointerEvents:'none'}}/>
        <div className="nb-orb nb-orb-blue"   style={{width:400,height:400,bottom:-100,right:-100,opacity:.22,pointerEvents:'none'}}/>
        <div className="nb-container" style={{position:'relative',zIndex:2}}>
          <Reveal>
            <NavLink to="/" className="nb-legal-back"><ArrowLeft size={14}/> Back to site</NavLink>
            <div className="nb-legal-hero-icon"><FileText size={28}/></div>
            <h1 className="nb-page-h1" style={{marginBottom:12}}>Terms of <span className="nb-grad">Service</span></h1>
            <p className="nb-legal-meta">Effective date: 1 January 2025 · Last updated: 17 July 2026</p>
            <p className="nb-legal-intro">
              These Terms govern your use of NexbeeLabs' website and services, and are drafted to comply with Australian law, including the Australian Consumer Law. We've written them to be clear and fair. If something isn't clear, reach out — we'd rather explain than hide behind legalese.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section style={{padding:'0 0 100px',background:'#05050f'}}>
        <div className="nb-container nb-legal-layout">
          <Reveal>
            <div className="nb-legal-body">
              {sections.map(s => (
                <div key={s.title} className="nb-legal-section">
                  <h2 className="nb-legal-h2">{s.title}</h2>
                  {s.body.map((p, i) => <p key={i} className="nb-legal-p">{p}</p>)}
                </div>
              ))}
              <div className="nb-legal-footer-note">
                <p>Questions about these terms? Email us at <a href="mailto:hello@nexbeelabs.com" className="nb-legal-link">hello@nexbeelabs.com</a> — we'll respond within 2 business days.</p>
                <NavLink to="/contact" className="nb-btn nb-btn-grad" style={{marginTop:24,display:'inline-flex'}}>Get in touch</NavLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
