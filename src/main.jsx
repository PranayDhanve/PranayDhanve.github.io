import React from "react";
import { createRoot } from "react-dom/client";
import { Mail, Download, MapPin, ArrowUpRight, ShieldCheck } from "lucide-react";

/* ============ EDIT THIS SECTION ONLY ============ */
const PROFILE = {
  name: "Pranay Dhanve",
  title: "Information Security Analyst",
  tagline:
    "SOC analyst building toward VAPT and offensive security. I work incident and DLP queues by day, and break web apps and write security tooling the rest of the time.",
  location: "Pune, India",
  email: "pranayd.work@gmail.com",
  github: "https://github.com/PranayDhanve",
  linkedin: "https://www.linkedin.com/in/pranaydhanve/",
  resume: "", // put your PDF in public/resume.pdf, or set to "" to hide the button
};

const HIGHLIGHTS = [
  { value: "9th", label: "National CTF ranking" },
  { value: "3", label: "Certifications (C)PTE, C)PEH, PT1)" },
  { value: "SOC + VAPT", label: "Defensive and offensive experience" },
];

const EXPERIENCE = [
  {
    role: "Junior Information Security Analyst",
    org: "Onity Group Inc.",
    period: "Current", // add dates, e.g. "Jun 2025 – Present"
    points: [
      "Monitor, triage and investigate security alerts across EDR, SIEM and email security platforms.",
      "Handle data loss prevention (DLP) incidents across Trellix, Cisco and Palo Alto Strata.",
      "Daily tooling: CrowdStrike Falcon, Splunk, Rapid7 InsightIDR, Wazuh, Prisma Cloud, Cisco IronPort, Trellix ePO.",
    ],
  },
  {
    role: "Security Intern",
    org: "HackerCentral",
    period: "Internship", // add dates
    points: [
      "Hands-on practice in web application security testing and core attack techniques (SQLi, XSS, CSRF, JWT attacks).",
    ],
  },
];

const PROJECTS = [
  {
    name: "Automated Vulnerability Scanner",
    stack: ["Python", "Selenium", "Burp Suite API"],
    desc: "Scanner that detects XSS, CSRF and SQLi using headless-browser crawling and payload fuzzing, with structured vulnerability reports.",
    repo: "", // add GitHub URL
  },
  {
    name: "Threat Analyser & Detector",
    stack: ["JavaScript", "HTML"],
    desc: "Browser-integrated tool that intercepts and blocks malicious file downloads before they reach system directories, modelled on endpoint DLP logic.",
    repo: "",
  },
  {
    name: "Deepfake Detection",
    stack: ["ResNeXt-LSTM", "FaceForensics++", "DFDC"],
    desc: "Hybrid deep learning model with temporal-difference and audio-visual fusion components for detecting manipulated video.",
    repo: "",
  },
  {
    name: "VAPT Job Alert Bot",
    stack: ["Python", "GitHub Actions"],
    desc: "Scheduled scraper that collects VAPT and AppSec openings from Indian job sources and delivers alerts.",
    repo: "",
  },
];

const SKILLS = [
  { group: "Security Operations", items: ["Alert triage", "Incident investigation", "DLP", "Threat hunting"] },
  { group: "Tools", items: ["CrowdStrike Falcon", "Splunk", "Rapid7 InsightIDR", "Wazuh", "Burp Suite", "Nmap"] },
  { group: "Offensive Security", items: ["Web app pentesting", "SQLi / XSS / CSRF", "JWT attacks", "Active Directory basics", "Bug bounty (Bugcrowd)"] },
  { group: "Programming", items: ["Python", "JavaScript", "Bash"] },
];

const CERTS = [
  { name: "Mile2 C)PTE", detail: "Certified Penetration Testing Engineer" },
  { name: "Mile2 C)PEH", detail: "Certified Professional Ethical Hacker" },
  { name: "TryHackMe PT1", detail: "Junior Penetration Tester" },
];

const EDUCATION = {
  degree: "B.E. Computer Science, Honours in Cyber Security",
  school: "Savitribai Phule Pune University",
  year: "2026",
};
/* ================================================ */

const css = `
:root{--bg:#080d18;--card:#0f1626;--line:#1e293b;--text:#e2e8f0;--muted:#94a3b8;--accent:#38bdf8;}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--text);font-family:Inter,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;line-height:1.6}
a{color:inherit;text-decoration:none}
.wrap{max-width:960px;margin:0 auto;padding:0 24px}
nav{position:sticky;top:0;z-index:10;background:rgba(8,13,24,.9);backdrop-filter:blur(8px);border-bottom:1px solid var(--line)}
nav .wrap{display:flex;justify-content:space-between;align-items:center;height:56px}
nav .brand{font-weight:700}
nav ul{display:flex;gap:20px;list-style:none;font-size:14px;color:var(--muted)}
nav ul a:hover{color:var(--accent)}
.hero{padding:88px 0 56px}
.eyebrow{display:inline-flex;align-items:center;gap:6px;color:var(--accent);font-size:14px;font-weight:600}
h1{font-size:clamp(34px,6vw,52px);line-height:1.15;margin:12px 0 6px}
.role{font-size:20px;color:var(--muted)}
.tagline{max-width:640px;margin-top:18px;color:var(--muted);font-size:17px}
.meta{display:flex;align-items:center;gap:6px;margin-top:14px;color:var(--muted);font-size:14px}
.actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:28px}
.btn{display:inline-flex;align-items:center;gap:8px;padding:10px 18px;border-radius:8px;font-weight:600;font-size:14px;border:1px solid var(--line)}
.btn.primary{background:var(--accent);color:#04121c;border-color:var(--accent)}
.btn:hover{border-color:var(--accent)}
.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:48px}
.stat{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:18px}
.stat b{display:block;font-size:24px;color:var(--accent)}
.stat span{font-size:13px;color:var(--muted)}
section{padding:56px 0;border-top:1px solid var(--line)}
h2{font-size:24px;margin-bottom:24px}
.item{margin-bottom:28px}
.item-head{display:flex;justify-content:space-between;flex-wrap:wrap;gap:4px}
.item h3{font-size:17px}
.item .org{color:var(--accent);font-size:14px}
.item .period{color:var(--muted);font-size:13px}
.item ul{margin:10px 0 0 18px;color:var(--muted);font-size:15px}
.item li{margin-bottom:4px}
.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
.card{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:20px;display:flex;flex-direction:column;gap:10px}
.card h3{font-size:17px;display:flex;justify-content:space-between;align-items:center}
.card p{color:var(--muted);font-size:14.5px}
.tags{display:flex;flex-wrap:wrap;gap:6px;margin-top:auto}
.tag{font-size:12px;padding:3px 10px;border-radius:999px;border:1px solid var(--line);color:var(--muted)}
.skill{margin-bottom:18px}
.skill h3{font-size:14px;color:var(--muted);margin-bottom:8px;font-weight:600}
.cert{display:flex;flex-direction:column}
.cert b{font-size:16px}
.cert span{font-size:13px;color:var(--muted)}
.edu{color:var(--muted);margin-top:24px;font-size:15px}
.edu b{color:var(--text)}
.contact p{color:var(--muted);margin-bottom:20px;max-width:560px}
footer{padding:28px 0;border-top:1px solid var(--line);color:var(--muted);font-size:13px;text-align:center}
@media(max-width:700px){.grid,.stats{grid-template-columns:1fr}nav ul{gap:12px;font-size:13px}.hero{padding-top:56px}}
`;

function App() {
  const links = [
    ["Experience", "#experience"],
    ["Projects", "#projects"],
    ["Skills", "#skills"],
    ["Contact", "#contact"],
  ];
  return (
    <>
      <style>{css}</style>
      <nav>
        <div className="wrap">
          <a href="#top" className="brand">{PROFILE.name}</a>
          <ul>
            {links.map(([label, href]) => (
              <li key={href}><a href={href}>{label}</a></li>
            ))}
          </ul>
        </div>
      </nav>

      <main id="top">
        <header className="hero wrap">
          <span className="eyebrow"><ShieldCheck size={16} /> Cybersecurity</span>
          <h1>{PROFILE.name}</h1>
          <div className="role">{PROFILE.title}</div>
          <p className="tagline">{PROFILE.tagline}</p>
          <div className="meta"><MapPin size={14} /> {PROFILE.location}</div>
          <div className="actions">
            <a className="btn primary" href={`mailto:${PROFILE.email}`}><Mail size={16} /> Contact me</a>
            {PROFILE.resume && (
              <a className="btn" href={PROFILE.resume} download><Download size={16} /> Resume</a>
            )}
            <a className="btn" href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn" href={PROFILE.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
          <div className="stats">
            {HIGHLIGHTS.map((h) => (
              <div className="stat" key={h.label}><b>{h.value}</b><span>{h.label}</span></div>
            ))}
          </div>
        </header>

        <section id="experience">
          <div className="wrap">
            <h2>Experience</h2>
            {EXPERIENCE.map((e) => (
              <div className="item" key={e.role + e.org}>
                <div className="item-head">
                  <h3>{e.role} <span className="org">· {e.org}</span></h3>
                  <span className="period">{e.period}</span>
                </div>
                <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
            ))}
            <p className="edu">
              <b>{EDUCATION.degree}</b>, {EDUCATION.school} ({EDUCATION.year})
            </p>
          </div>
        </section>

        <section id="projects">
          <div className="wrap">
            <h2>Projects</h2>
            <div className="grid">
              {PROJECTS.map((p) => (
                <article className="card" key={p.name}>
                  <h3>
                    {p.name}
                    {p.repo && (
                      <a href={p.repo} target="_blank" rel="noreferrer" aria-label={`${p.name} repository`}>
                        <ArrowUpRight size={18} />
                      </a>
                    )}
                  </h3>
                  <p>{p.desc}</p>
                  <div className="tags">{p.stack.map((s) => <span className="tag" key={s}>{s}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="wrap">
            <h2>Skills</h2>
            {SKILLS.map((g) => (
              <div className="skill" key={g.group}>
                <h3>{g.group}</h3>
                <div className="tags">{g.items.map((i) => <span className="tag" key={i}>{i}</span>)}</div>
              </div>
            ))}
            <h2 style={{ marginTop: 40 }}>Certifications</h2>
            <div className="grid">
              {CERTS.map((c) => (
                <div className="card cert" key={c.name}><b>{c.name}</b><span>{c.detail}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="wrap">
            <h2>Get in touch</h2>
            <p>Open to VAPT, application security and security analyst roles, and happy to relocate for the right one.</p>
            <a className="btn primary" href={`mailto:${PROFILE.email}`}><Mail size={16} /> {PROFILE.email}</a>
          </div>
        </section>
      </main>

      <footer>© {new Date().getFullYear()} {PROFILE.name}</footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
