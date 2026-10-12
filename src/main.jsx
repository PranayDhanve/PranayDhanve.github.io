import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDownRight, ArrowUpRight, ShieldCheck, Terminal, ScanSearch, Activity,
  Bug, Network, FileSearch, Github, Linkedin, Mail, Download, LockKeyhole,
  ChevronRight, ExternalLink
} from 'lucide-react';
import './style.css';

const projects = [
  {
    number: '01',
    type: 'THREAT INTELLIGENCE',
    title: 'Live Cyber Threat Dashboard',
    description: 'A dashboard concept for presenting cyber threat intelligence through clear indicators, statistics, and visual summaries instead of decorative 3D visuals.',
    tags: ['Threat Intelligence', 'Data Visualization', 'Web UI'],
    icon: Activity,
    status: 'Project concept'
  },
  {
    number: '02',
    type: 'SECURITY OPERATIONS',
    title: 'SIEM Detection & Investigation Lab',
    description: 'A practical lab portfolio for documenting alert triage, event investigation, evidence collection, and incident-response reasoning using SIEM workflows.',
    tags: ['Wazuh / SIEM', 'Log Analysis', 'Incident Triage'],
    icon: ScanSearch,
    status: 'Add lab evidence'
  },
  {
    number: '03',
    type: 'APPLICATION SECURITY',
    title: 'Web Application Security Testing',
    description: 'Documented testing workflow for identifying common web application weaknesses, validating findings safely, and writing actionable remediation guidance.',
    tags: ['Burp Suite', 'OWASP Top 10', 'Reporting'],
    icon: Bug,
    status: 'Add sanitized report'
  },
  {
    number: '04',
    type: 'VULNERABILITY MANAGEMENT',
    title: 'Vulnerability Assessment Workflow',
    description: 'A repeatable workflow for reviewing scan findings, validating risk, prioritizing remediation, and tracking exceptions with clear ownership.',
    tags: ['Nessus', 'Risk Prioritization', 'Remediation'],
    icon: Network,
    status: 'Add sample findings'
  }
];

const skills = [
  { title: 'Security Operations', items: ['Alert triage', 'DLP investigation', 'Email security analysis', 'Compliance reporting'] },
  { title: 'Security Testing', items: ['Burp Suite', 'Nmap', 'Metasploit', 'OWASP Top 10'] },
  { title: 'Monitoring & Assessment', items: ['Wazuh', 'Splunk', 'Tenable Nessus', 'Wireshark'] },
  { title: 'Foundations', items: ['Python', 'Linux', 'Networking', 'MITRE ATT&CK'] }
];

function App() {
  const email = 'YOUR_EMAIL@example.com';
  const github = 'https://github.com/YOUR_USERNAME';
  const linkedin = 'https://www.linkedin.com/in/YOUR_PROFILE/';
  const resume = '/resume.pdf';

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="nav-wrap">
        <a className="brand" href="#home" aria-label="Go to homepage">
          <span className="brand-mark"><ShieldCheck size={20} /></span>
          <span>PD<span className="brand-dot">.</span></span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#work">Projects</a>
          <a href="#experience">Experience</a>
        </nav>
        <a className="nav-cta" href="#contact">Let's connect <ArrowUpRight size={15} /></a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> CYBERSECURITY • INFORMATION SECURITY</div>
            <h1>Securing systems.<br /><span>Investigating threats.</span></h1>
            <p className="hero-lede">I'm Pranay Dhanve, an information security professional focused on security operations, vulnerability management, and practical security testing.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17} /></a>
              <a className="button button-secondary" href={resume} download><Download size={16} /> Download resume</a>
            </div>
            <div className="hero-meta">
              <span><span className="mini-line" /> Based in India</span>
              <span>Open to cybersecurity opportunities</span>
            </div>
          </div>
          <div className="hero-visual" aria-label="Cybersecurity terminal illustration">
            <div className="visual-grid" />
            <div className="orbit orbit-a" /><div className="orbit orbit-b" />
            <div className="core-shield"><ShieldCheck size={68} strokeWidth={1.25} /></div>
            <div className="floating-card card-top">
              <span className="card-icon"><Activity size={15} /></span>
              <div><small>SECURITY OPERATIONS</small><strong>Analyze · Triage · Respond</strong></div>
            </div>
            <div className="floating-card card-bottom">
              <span className="card-icon card-icon-purple"><Terminal size={15} /></span>
              <div><small>APPROACH</small><strong>Evidence over assumptions</strong></div>
            </div>
            <div className="visual-label"><span className="status-dot" /> SYSTEM STATUS <b>DEFENSIVE MODE</b></div>
          </div>
          <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="section-wrap intro-section" id="about">
          <div className="section-kicker">01 / ABOUT</div>
          <div className="intro-grid">
            <h2>Curiosity is useful.<br /><span>Evidence is better.</span></h2>
            <div className="intro-body">
              <p>I work across information security activities that help teams understand risk, investigate suspicious activity, and improve security controls. My experience includes DLP investigations, vendor risk reviews, security exception follow-ups, quarantined email analysis, and endpoint compliance reporting.</p>
              <p>I value clear documentation, repeatable investigation steps, and remediation advice that teams can act on.</p>
              <a className="text-link" href="#experience">More about my experience <ChevronRight size={16} /></a>
            </div>
          </div>
          <div className="principles">
            <div className="principle"><span>01</span><strong>Investigate methodically</strong><p>Follow evidence and preserve context.</p></div>
            <div className="principle"><span>02</span><strong>Prioritize real risk</strong><p>Focus on impact, likelihood, and exposure.</p></div>
            <div className="principle"><span>03</span><strong>Communicate clearly</strong><p>Make findings useful to technical teams.</p></div>
          </div>
        </section>

        <section className="section-wrap skills-section" id="skills">
          <div className="section-heading">
            <div><div className="section-kicker">02 / CAPABILITIES</div><h2>Tools & <span>skill set</span></h2></div>
            <p>A practical toolkit for investigating, assessing, and communicating security risk.</p>
          </div>
          <div className="skill-grid">
            {skills.map((group, index) => (
              <article className="skill-card" key={group.title}>
                <div className="skill-card-top"><span>0{index + 1}</span><LockKeyhole size={18} /></div>
                <h3>{group.title}</h3>
                <div className="tag-list">{group.items.map(item => <span className="tag" key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
          <p className="small-note">Keep only the tools and skills you can confidently explain and demonstrate in an interview.</p>
        </section>

        <section className="section-wrap work-section" id="work">
          <div className="section-heading">
            <div><div className="section-kicker">03 / SELECTED WORK</div><h2>Projects with a <span>purpose.</span></h2></div>
            <p>Use each project to show the problem, your method, evidence, results, and lessons learned.</p>
          </div>
          <div className="project-grid">
            {projects.map(project => {
              const Icon = project.icon;
              return <article className="project-card" key={project.number}>
                <div className="project-card-head"><span className="project-number">{project.number}</span><span className="project-type">{project.type}</span><Icon size={21} /></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
                <div className="project-footer"><span>{project.status}</span><span className="project-arrow"><ArrowUpRight size={17} /></span></div>
              </article>;
            })}
          </div>
          <div className="project-callout"><FileSearch size={20} /><p><strong>Make the work verifiable.</strong> Add sanitized screenshots, a concise write-up, methodology, and remediation notes. Never publish employer data, real user information, credentials, or confidential reports.</p></div>
        </section>

        <section className="section-wrap experience-section" id="experience">
          <div className="section-kicker">04 / EXPERIENCE</div>
          <h2>Security work in <span>practice.</span></h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-date">JUN 2025 — PRESENT</div>
              <div className="timeline-content">
                <div className="timeline-title"><div><h3>Junior Information Security Analyst (Intern)</h3><p className="company">Onity Group Inc. · Pune, Hybrid</p></div><span className="work-badge">INFORMATION SECURITY</span></div>
                <ul>
                  <li>Follow up on risk and control self-assessment activities and review security exceptions involving server privileged access and vulnerability management.</li>
                  <li>Investigate Data Loss Prevention (DLP) violations and support security issue follow-up.</li>
                  <li>Support vendor risk management by reviewing third-party security posture and documenting mitigation recommendations.</li>
                  <li>Analyze quarantined emails using Cisco IronPort and MXToolbox, and run endpoint security compliance reports.</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-date">AUG 2024 — MAR 2025</div>
              <div className="timeline-content">
                <div className="timeline-title"><div><h3>Security Intern</h3><p className="company">The Hacker Central</p></div><span className="work-badge">SECURITY</span></div>
                <p className="timeline-summary">Security internship experience. Add your specific responsibilities, tools, and measurable outcomes here before publishing.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cert-section">
          <div className="section-wrap cert-inner">
            <div className="cert-icon"><ShieldCheck size={28} /></div>
            <div><div className="section-kicker">CREDENTIALS</div><h2>Certified Professional Ethical Hacker</h2><p>Mile2 (CPEH) · Valid through October 2027</p></div>
            <span className="cert-seal">CPEH<br /><small>CERTIFIED</small></span>
          </div>
        </section>

        <section className="section-wrap contact-section" id="contact">
          <div className="section-kicker">05 / CONTACT</div>
          <h2>Let's make security<br /><span>more actionable.</span></h2>
          <p className="contact-copy">Interested in SOC operations, information security, or penetration testing opportunities? Get in touch.</p>
          <div className="contact-actions">
            <a className="button button-primary" href={`mailto:${email}`}><Mail size={17} /> Email me <ArrowUpRight size={16} /></a>
            <a className="button button-secondary" href={linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ExternalLink size={14} /></a>
            <a className="button button-secondary" href={github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ExternalLink size={14} /></a>
          </div>
          <p className="setup-warning">Before publishing: replace the placeholder email and profile links, and add your resume as <code>public/resume.pdf</code>.</p>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home"><span className="brand-mark"><ShieldCheck size={18} /></span><span>PD<span className="brand-dot">.</span></span></a>
        <p>Built with purpose. Focused on security.</p>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
        <span className="copyright">© {new Date().getFullYear()} Pranay Dhanve</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
