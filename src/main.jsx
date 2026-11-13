import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown, ArrowUpRight, Download, Github, Linkedin, Mail, MapPin,
  Moon, Sun, ShieldCheck, ExternalLink
} from "lucide-react";

/* Update profile links and project repository URLs here. */
const PROFILE = {
  name: "Pranay Dhanve",
  title: "Information Security Analyst",
  subtitle: "Security Operations · Threat Hunting · VAPT",
  intro:
    "I work across security operations, endpoint and email investigations, vulnerability management, and vendor risk. Alongside my day-to-day security work, I build hands-on projects and practise web application security and penetration testing.",
  location: "Pune, India",
  email: "pranayd.work@gmail.com",
  github: "https://github.com/PranayDhanve",
  linkedin: "https://www.linkedin.com/in/pranaydhanve/",
  resume: "/Pranay_Security.pdf",
};

const HIGHLIGHTS = [
  { value: "500+", label: "Endpoint assets in compliance scope" },
  { value: "9th", label: "National CTF ranking" },
  { value: "3", label: "Professional security certifications" },
];

const EXPERIENCE = [
  {
    role: "Junior Information Security Analyst",
    org: "Onity Group Inc. · Pune, India · Hybrid",
    period: "Jun 2025 – Present",
    points: [
      "Investigate security alerts across DLP, endpoint, and email platforms, performing root-cause analysis and using MITRE ATT&CK to describe relevant attacker techniques.",
      "Monitor endpoint telemetry across 500+ assets using CrowdStrike Falcon and support endpoint compliance and detection-policy reviews.",
      "Analyse quarantined and suspicious emails using Cisco IronPort and MXToolbox, reviewing sender details, headers, and indicators associated with phishing activity.",
      "Use Splunk and security telemetry to support alert triage, investigation, and hypothesis-driven threat hunting.",
      "Support vulnerability-management exception reviews, security-exception assessments, RCSA follow-ups, and third-party vendor risk reviews.",
    ],
  },
  {
    role: "Security Intern",
    org: "The Hacker Central · Remote",
    period: "Aug 2024 – Mar 2025",
    points: [
      "Built practical experience through security labs involving web application testing, reconnaissance, Linux, Active Directory, and SOC/SIEM workflows.",
      "Worked with virtual machines, firewall configurations, and web-server components as part of hands-on security exercises.",
    ],
  },
];

const PROJECTS = [
  {
    number: "01",
    name: "Automated Vulnerability Scanner",
    category: "Web application security",
    stack: ["Python", "Selenium", "Burp Suite API"],
    desc: "A web application testing project that uses headless-browser crawling and payload fuzzing to check for common issues such as XSS, CSRF, and SQL injection, then produces structured findings.",
    repo: "",
  },
  {
    number: "02",
    name: "Threat Analyser & Detector",
    category: "Browser security",
    stack: ["JavaScript", "HTML"],
    desc: "A browser-integrated tool designed to intercept and block suspicious file downloads before they reach local system directories, drawing on endpoint-protection and DLP concepts.",
    repo: "",
  },
  {
    number: "03",
    name: "Deepfake Detection",
    category: "Research project",
    stack: ["ResNeXt-LSTM", "OpenCV", "FaceForensics++", "DFDC"],
    desc: "A research project exploring video-frame features and temporal differences for detecting manipulated media, with audio-visual analysis as a development direction.",
    repo: "",
  },
  {
    number: "04",
    name: "VAPT Job Alert Bot",
    category: "Automation",
    stack: ["Python", "GitHub Actions"],
    desc: "A scheduled automation project that collects VAPT and application-security job openings from Indian job sources and sends alerts.",
    repo: "",
  },
];

const SKILLS = [
  { group: "Security operations", items: ["DLP investigation", "Alert triage", "Email security", "Endpoint compliance", "Security exceptions", "Vendor risk", "RCSA follow-ups"] },
  { group: "Security platforms and tools", items: ["CrowdStrike Falcon", "Splunk", "Rapid7 InsightIDR", "Wazuh", "Cisco IronPort", "MXToolbox", "Wireshark"] },
  { group: "Security testing", items: ["Burp Suite", "Nmap", "Metasploit", "OWASP Top 10", "Vulnerability assessment", "Web application testing"] },
  { group: "Technical foundations", items: ["Python", "JavaScript", "SQL", "Linux", "Networking", "MITRE ATT&CK"] },
];

const CERTIFICATIONS = [
  { name: "Mile2 C)PTE", detail: "Certified Penetration Testing Engineer" },
  { name: "Mile2 C)PEH", detail: "Certified Professional Ethical Hacker · Valid through Oct 2027" },
  { name: "TryHackMe PT1", detail: "Junior Penetration Tester" },
];

const css = `
:root{color-scheme:light;--page:#edf1f4;--paper:#fff;--ink:#182635;--muted:#5e6c78;--line:#d8e0e6;--accent:#245b70;--accent-soft:#eaf1f4;--shadow:8px 8px 0 rgba(24,38,53,.10);--mono:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}
:root[data-theme="dark"]{color-scheme:dark;--page:#101923;--paper:#172431;--ink:#edf3f6;--muted:#a9b8c2;--line:#344653;--accent:#8cc4d2;--accent-soft:#213744;--shadow:8px 8px 0 rgba(0,0,0,.22)}
*{box-sizing:border-box}html{scroll-behavior:smooth;scroll-padding-top:84px}body{margin:0;background-color:var(--page);background-image:repeating-linear-gradient(135deg,transparent 0 48px,rgba(36,91,112,.035) 49px 50px,transparent 51px 100px);color:var(--ink);font-family:Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif;line-height:1.65;transition:background-color .2s,color .2s}a{color:inherit;text-decoration:none}button{font:inherit}.site{width:min(100% - 36px,920px);margin:42px auto 56px}.sheet{background:var(--paper);border:1px solid var(--ink);box-shadow:var(--shadow)}.topbar{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:18px 28px;border-bottom:1px solid var(--line)}.monogram{font-weight:800;letter-spacing:-.06em;font-size:19px}.monogram span{color:var(--accent)}.nav{display:flex;align-items:center;gap:20px;color:var(--muted);font-size:13px}.nav a:hover,.text-link:hover{color:var(--accent);text-decoration:underline;text-underline-offset:4px}.theme{border:1px solid var(--line);background:var(--paper);color:var(--ink);display:inline-flex;align-items:center;gap:7px;padding:7px 10px;font-size:12px;cursor:pointer}.hero{padding:58px 58px 48px}.eyebrow{font:700 11px var(--mono);letter-spacing:.12em;text-transform:uppercase;color:var(--accent)}h1{font-size:clamp(38px,6vw,62px);letter-spacing:-.055em;line-height:1.04;margin:15px 0 9px}.subtitle{font-size:17px;color:var(--accent);font-weight:650}.intro{max-width:690px;color:var(--muted);font-size:16px;line-height:1.85;margin:22px 0 15px}.location{display:flex;align-items:center;gap:7px;color:var(--muted);font-size:13px}.hero-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:27px}.action{display:inline-flex;align-items:center;justify-content:center;gap:8px;border:1px solid var(--ink);padding:10px 15px;font-size:13px;font-weight:650;transition:transform .15s,background .15s,color .15s}.action:hover{transform:translate(-2px,-2px);box-shadow:3px 3px 0 var(--ink)}.action.primary{background:var(--accent);border-color:var(--accent);color:#fff}.action.primary:hover{background:var(--ink);border-color:var(--ink)}.social{display:flex;gap:17px;margin-top:25px;color:var(--muted)}.social a{display:inline-flex;align-items:center;gap:6px;font-size:12px}.social a:hover{color:var(--accent)}.highlights{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}.highlight{padding:20px 25px}.highlight+.highlight{border-left:1px solid var(--line)}.highlight strong{display:block;font-size:23px;letter-spacing:-.03em;color:var(--accent)}.highlight span{display:block;font-size:12px;color:var(--muted);line-height:1.5;margin-top:3px}.section{padding:42px 58px;border-bottom:1px solid var(--line)}.section:last-child{border-bottom:0}.section-head{display:flex;align-items:baseline;gap:13px;margin-bottom:23px}.section-no{font:700 11px var(--mono);color:var(--accent)}h2{font-size:25px;letter-spacing:-.035em;line-height:1.2;margin:0}.about-copy{max-width:720px;color:var(--muted);font-size:14.5px;line-height:1.85}.about-copy p{margin:0 0 13px}.timeline{display:grid;gap:28px}.job{position:relative;padding-left:19px;border-left:2px solid var(--line)}.job:before{content:"";position:absolute;left:-6px;top:7px;width:10px;height:10px;border-radius:50%;background:var(--accent)}.job-top{display:flex;justify-content:space-between;align-items:flex-start;gap:10px}.job h3,.project h3{font-size:16px;line-height:1.4;margin:0;font-weight:750}.period{white-space:nowrap;color:var(--muted);font-size:11px}.org{color:var(--accent);font-size:13px;font-weight:650;margin:3px 0 10px}.job ul{padding-left:17px;margin:0;color:var(--muted);font-size:13.5px;line-height:1.8}.job li{padding-left:3px;margin:0 0 6px}.projects{display:grid;grid-template-columns:1fr 1fr;gap:13px}.project{border:1px solid var(--line);padding:18px;display:flex;flex-direction:column;min-height:205px;transition:border-color .15s,transform .15s}.project:hover{border-color:var(--accent);transform:translateY(-2px)}.project-top{display:flex;justify-content:space-between;gap:10px;color:var(--accent);font:700 11px var(--mono);margin-bottom:13px}.project h3{margin-bottom:3px}.category{font-size:11px;color:var(--muted);margin-bottom:10px}.project p{font-size:13px;color:var(--muted);line-height:1.75;margin:0 0 14px}.tags{display:flex;flex-wrap:wrap;gap:6px;margin-top:auto}.tag{font-size:10px;padding:3px 7px;background:var(--accent-soft);color:var(--accent);border:1px solid var(--line)}.skill-list{display:grid;grid-template-columns:1fr 1fr;gap:20px 28px}.skill-group h3{font-size:12px;text-transform:uppercase;letter-spacing:.07em;margin:0 0 9px}.certs{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:25px}.cert{border:1px solid var(--line);padding:14px}.cert strong{display:block;font-size:13px}.cert span{display:block;color:var(--muted);font-size:11px;line-height:1.6;margin-top:5px}.contact-copy{color:var(--muted);font-size:14px;max-width:620px;margin:0 0 20px}.footer{padding:18px 28px;border-top:1px solid var(--line);display:flex;justify-content:space-between;gap:12px;color:var(--muted);font-size:11px}.reveal{opacity:0;transform:translateY(12px);transition:opacity .5s ease,transform .5s ease}.reveal.visible{opacity:1;transform:none}
@media(max-width:700px){.site{width:min(100% - 22px,920px);margin:14px auto 30px}.topbar{padding:14px 18px;align-items:flex-start}.nav{gap:11px;flex-wrap:wrap;justify-content:flex-end;font-size:11px}.nav a:nth-child(2),.nav a:nth-child(4){display:none}.hero{padding:42px 24px 34px}.section{padding:32px 24px}.highlight{padding:15px 13px}.highlight span{font-size:10px}.projects{grid-template-columns:1fr}.project{min-height:0}.certs{grid-template-columns:1fr}.job-top{display:block}.period{display:block;margin-top:4px}.skill-list{grid-template-columns:1fr 1fr;gap:18px 14px}}
@media(max-width:430px){.topbar{gap:8px}.nav{gap:8px}.nav a{display:none!important}.theme{padding:6px 8px}.hero{padding:36px 20px 30px}.section{padding:29px 20px}.highlights{grid-template-columns:1fr}.highlight{display:flex;align-items:center;gap:14px;padding:12px 20px}.highlight+.highlight{border-left:0;border-top:1px solid var(--line)}.highlight strong{min-width:62px}.highlight span{margin:0}.skill-list{grid-template-columns:1fr}.footer{padding:16px 20px;flex-direction:column}}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*,*::before,*::after{transition-duration:.01ms!important;animation-duration:.01ms!important}.reveal{opacity:1;transform:none}}
`;

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    return window.localStorage.getItem("portfolio-theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("visible"));
      return;
    }
    const observer = new IntersectionObserver((entries, current) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          current.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{css}</style>
      <div className="site">
        <main className="sheet">
          <nav className="topbar" aria-label="Main navigation">
            <a className="monogram" href="#home">pd<span>.</span></a>
            <div className="nav">
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
              <button className="theme" type="button" onClick={() => setTheme((t) => t === "light" ? "dark" : "light")} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}>
                {theme === "light" ? <Moon size={14} /> : <Sun size={14} />}{theme === "light" ? "Dark" : "Light"}
              </button>
            </div>
          </nav>

          <header className="hero" id="home">
            <div className="eyebrow">Cybersecurity portfolio</div>
            <h1>{PROFILE.name}</h1>
            <div className="subtitle">{PROFILE.title}</div>
            <div className="subtitle" style={{fontSize: "13px", fontWeight: 500}}>{PROFILE.subtitle}</div>
            <p className="intro">{PROFILE.intro}</p>
            <div className="location"><MapPin size={14} />{PROFILE.location}</div>
            <div className="hero-actions">
              <a className="action primary" href={`mailto:${PROFILE.email}`}><Mail size={15} /> Email me</a>
              <a className="action" href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn <ArrowUpRight size={13} /></a>
              <a className="action" href={PROFILE.github} target="_blank" rel="noreferrer"><Github size={15} /> GitHub <ArrowUpRight size={13} /></a>
              {PROFILE.resume && <a className="action" href={PROFILE.resume} target="_blank" rel="noreferrer"><Download size={15} /> Resume</a>}
            </div>
            <div className="social">
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a>
              <a href={PROFILE.github} target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a>
              <a href={`mailto:${PROFILE.email}`}><Mail size={15} /> Email</a>
            </div>
          </header>

          <div className="highlights reveal">
            {HIGHLIGHTS.map((item) => <div className="highlight" key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}
          </div>

          <section className="section reveal" id="about">
            <div className="section-head"><span className="section-no">01 /</span><h2>Profile</h2></div>
            <div className="about-copy">
              <p>My current work focuses on security operations and risk-related activities, including DLP investigations, endpoint monitoring, email analysis, vulnerability-management exceptions, and vendor security reviews.</p>
              <p>Outside my role, I practise web application security and penetration testing through hands-on labs, CTF challenges, and personal projects. I am interested in roles across SOC operations, security analysis, VAPT, and application security.</p>
            </div>
          </section>

          <section className="section reveal" id="experience">
            <div className="section-head"><span className="section-no">02 /</span><h2>Experience</h2></div>
            <div className="timeline">
              {EXPERIENCE.map((job) => <article className="job" key={job.role + job.org}>
                <div className="job-top"><h3>{job.role}</h3><span className="period">{job.period}</span></div>
                <div className="org">{job.org}</div>
                <ul>{job.points.map((point) => <li key={point}>{point}</li>)}</ul>
              </article>)}
              <article className="job">
                <div className="job-top"><h3>B.E. Computer Science · Honours in Cyber Security</h3><span className="period">2026</span></div>
                <div className="org">Savitribai Phule Pune University</div>
              </article>
            </div>
          </section>

          <section className="section reveal" id="projects">
            <div className="section-head"><span className="section-no">03 /</span><h2>Selected projects</h2></div>
            <div className="projects">
              {PROJECTS.map((project) => <article className="project" key={project.name}>
                <div className="project-top"><span>{project.number}</span><span>{project.category}</span></div>
                <h3>{project.name}</h3>
                <p>{project.desc}</p>
                <div className="tags">{project.stack.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
                {project.repo && <a className="text-link" style={{fontSize: "12px", marginTop: "12px"}} href={project.repo} target="_blank" rel="noreferrer">View repository <ExternalLink size={12} /></a>}
              </article>)}
            </div>
          </section>

          <section className="section reveal" id="skills">
            <div className="section-head"><span className="section-no">04 /</span><h2>Skills & certifications</h2></div>
            <div className="skill-list">
              {SKILLS.map((group) => <div className="skill-group" key={group.group}><h3>{group.group}</h3><div className="tags">{group.items.map((item) => <span className="tag" key={item}>{item}</span>)}</div></div>)}
            </div>
            <div className="certs">
              {CERTIFICATIONS.map((cert) => <div className="cert" key={cert.name}><strong><ShieldCheck size={14} style={{verticalAlign: "-2px", marginRight: "5px", color: "var(--accent)"}} />{cert.name}</strong><span>{cert.detail}</span></div>)}
            </div>
          </section>

          <section className="section reveal" id="contact">
            <div className="section-head"><span className="section-no">05 /</span><h2>Get in touch</h2></div>
            <p className="contact-copy">I’m open to opportunities in SOC operations, security analysis, VAPT, and application security. Feel free to reach out to discuss a role or a security project.</p>
            <div className="hero-actions">
              <a className="action primary" href={`mailto:${PROFILE.email}`}><Mail size={15} /> {PROFILE.email}</a>
              <a className="action" href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a>
              <a className="action" href={PROFILE.github} target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a>
            </div>
          </section>
          <footer className="footer"><span>© {new Date().getFullYear()} {PROFILE.name}</span><span>Built around practical security work.</span></footer>
        </main>
      </div>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
