import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  BarChart3,
  ChevronDown,
  FileCheck2,
  Mail,
  Menu,
  Network,
  ShieldCheck,
  UserRoundSearch,
  UsersRound,
  X,
} from 'lucide-react';
import './styles.css';

const email = 'contact@stratagc.com';

function Brand({ light = false }) {
  return (
    <a className={`brand ${light ? 'brand--light' : ''}`} href="#top" aria-label="StrataGC home">
      <span className="brand-mark" aria-hidden="true">
        <i></i><i></i><i></i>
      </span>
      <span>StrataGC</span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="site-header" id="top">
      <div className="nav-wrap">
        <Brand />
        <nav className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Primary navigation">
          <a href="#about" onClick={close}>About</a>
          <a href="#services" onClick={close}>Services</a>
          <a href="#insights" onClick={close}>Insights</a>
          <a href="#approach" onClick={close}>Approach</a>
          <a href="#contact" onClick={close}>Contact</a>
          <a className="nav-email" href={`mailto:${email}`}><Mail size={15} /> {email}</a>
        </nav>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

const difference = [
  { icon: UserRoundSearch, title: "The Operator’s Lens", text: "Delivered through 20+ years of experience in building, leading, and scaling companies in Tech and GovCon. We understand your world and the decisions that drive it." },
  { icon: ShieldCheck, title: 'Strategic Risk Management', text: "We don’t just flag risk—we build proactive systems that reduce exposure, strengthen operations, and support sustainable growth." },
  { icon: Network, title: 'Curated Expert Network', text: "When you need specialized or niche expertise, our trusted network of external partners extends our bench—right-sizing confidence. You’ll have the right viewpoint, the moment it matters." },
];

const steps = [
  ['01', 'Understand', 'We learn your business, priorities, and challenges.'],
  ['02', 'Align', 'We define the right strategy, risks to manage, and goals that matter.'],
  ['03', 'Execute', 'We implement practical solutions and build what lasts.'],
  ['04', 'Evolve', 'We continuously refine as your business and market evolve.'],
];

const services = [
  { icon: BarChart3, title: 'Growth & Transactions', items: ['M&A Advisory & Due Diligence', 'Transactions & Business', 'Corporate Governance'] },
  { icon: FileCheck2, title: 'Contracts & Compliance', items: ['Contract Negotiation & Management', 'Commercial Compliance', 'Proposal & Bid Compliance'] },
  { icon: UsersRound, title: 'Organizational Health', items: ['Employment & Performance Management', 'Corporate Policies & Processes', 'Cybersecurity & Privacy'] },
];

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-photo" aria-hidden="true"><img src="./reference.png" alt="" /></div>
      <div className="hero-shade" aria-hidden="true"></div>
      <div className="page-width hero-content">
        <h1 id="hero-title">StrataGC</h1>
        <p>Fractional General Counsel and strategic advisory<br className="desktop-break" /> for privately owned Tech and GovCon companies<br className="desktop-break" /> navigating growth, complexity, or their next<br className="desktop-break" /> major transition.</p>
        <a className="primary-button" href={`mailto:${email}`}><Mail size={18} /> {email}</a>
        <div className="trust-note"><ShieldCheck size={19} /> Embedded legal leadership. Practical strategy. Trusted.</div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about section" id="about">
      <div className="page-width narrow center">
        <p className="eyebrow">About</p>
        <h2>Legal leadership that scales with your ambition.</h2>
        <p>StrataGC is a fractional GC as a single, trusted legal leader embedded in strategy—we let you work like a<br className="desktop-break" /> high-growth company without building a law department.<br />Our founder spent 3+ years as an operator and executive, building a GovCon tech business from $4M to $364M.<br />That experience shapes everything we do.</p>
        <div className="small-rule"></div>
        <h3>Who We Serve</h3>
        <p>We work with privately owned Tech and GovCon companies in the $15M to $250M range.<br />Our clients are growth-minded organizations that value legal as a real built on business context.</p>
      </div>
    </section>
  );
}

function Difference() {
  return (
    <section className="difference section">
      <div className="page-width difference-grid">
        <div className="difference-intro">
          <p className="eyebrow">The Strata Difference</p>
          <h2>Embedded legal leadership.<br />Built for what’s next.</h2>
          <p>We operate at the intersection of legal, business, and operations—bringing an operator’s perspective and a CGO mindset to every engagement.</p>
          <p>Our approach is practical, collaborative, and focused on results that move your business forward.</p>
        </div>
        <div className="difference-list">
          {difference.map(({ icon: Icon, title, text }) => (
            <article className="difference-item" key={title}>
              <Icon aria-hidden="true" />
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="process section" id="approach">
      <div className="page-width">
        <div className="center"><p className="eyebrow">How We Work</p><h2>A clear process. Aligned every step.</h2></div>
        <div className="steps">
          {steps.map(([number, title, text], index) => (
            <React.Fragment key={number}>
              <article className="step"><span>{number}</span><h3>{title}</h3><p>{text}</p></article>
              {index < steps.length - 1 && <div className="step-arrow" aria-hidden="true"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services section" id="services">
      <div className="page-width">
        <div className="center"><p className="eyebrow">Services</p><h2>Practical counsel. Business impact.</h2></div>
        <div className="service-grid">
          {services.map(({ icon: Icon, title, items }) => (
            <article className="service-card" key={title}>
              <div className="service-icon"><Icon /></div>
              <div><h3>{title}</h3><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Insights() {
  return (
    <section className="insights section" id="insights">
      <div className="page-width">
        <p className="eyebrow center">Latest Insights</p>
        <div className="insights-grid">
          <div className="article-image" aria-hidden="true"><img src="./reference.png" alt="" /></div>
          <article className="featured-article">
            <time dateTime="2024-12-23">December 23, 2024</time>
            <h2>Again, Again</h2>
            <p>A short overview of today’s diving just the survivor salmon panda and their 5 habits to be a peak performer like hams friends.</p>
            <a href="#insights">Read More <ArrowRight size={13} /></a>
          </article>
          <aside className="more-insights"><h3>More Insights</h3>{['Better Start', 'New Horizon', 'Scaling'].map(x => <a href="#insights" key={x}>{x}</a>)}<a className="all-insights" href="#insights">View All Insights <ArrowRight size={13} /></a></aside>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="contact-band page-width">
        <div><h2>Let’s build clarity and confidence—together.</h2><p>Whether you’re scaling, transitioning, or solving your<br className="desktop-break" /> next challenge, StrataGC is ready to step in.</p></div>
        <div className="contact-box"><span><Mail /></span><div><h3>Contact Us</h3><a href={`mailto:${email}`}>{email}</a><a className="message-button" href={`mailto:${email}`}>Send a Message <ChevronDown size={13} /></a></div></div>
      </div>
      <div className="footer-rule"></div>
      <div className="page-width footer-grid">
        <div><Brand light /><p>Fractional General Counsel and<br />strategic advisory for growth-minded<br />Tech and GovCon companies.</p></div>
        <div><h4>Quick Links</h4><a href="#about">About</a><a href="#services">Services</a><a href="#insights">Insights</a><a href="#approach">Approach</a><a href="#contact">Contact</a></div>
        <div><h4>Services</h4><a href="#services">Growth & Transactions</a><a href="#services">Contracts & Compliance</a><a href="#services">Organizational Health</a></div>
        <div><h4>Connect</h4><a href={`mailto:${email}`}><Mail size={14} /> {email}</a><a href="#contact"><b className="linkedin-icon">in</b> LinkedIn</a></div>
      </div>
      <div className="page-width legal"><span>© 2025 StrataGC, PLLC. All rights reserved.</span><span><a href="#top">Privacy Policy</a><i></i><a href="#top">Terms of Use</a></span></div>
    </footer>
  );
}

function App() {
  return <><Header /><main><Hero /><About /><Difference /><Process /><Services /><Insights /></main><Footer /></>;
}

createRoot(document.getElementById('root')).render(<App />);
