import React from "react";
import { createRoot } from "react-dom/client";
import { Mail, Download, MapPin, ArrowUpRight } from "lucide-react";

/* ============ EDIT THIS SECTION ONLY ============ */
const PROFILE = {
  name: "Pranay Dhanve",
  title: "Information Security Analyst",
  tagline:
    "I work across DLP investigations, vulnerability management and vendor risk, and I'm building toward VAPT and offensive security through projects, CTFs and bug bounty.",
  location: "Pune, India",
  email: "pranayd.work@gmail.com",
  github: "https://github.com/PranayDhanve",
  linkedin: "https://www.linkedin.com/in/pranaydhanve/",
  resume: "/Pranay_Dhanve_Resume_uni.pdf", // file must be in public/; set to "" to hide the button
};

// Small terminal card in the hero. Facts only.
const TERMINAL = [
  ["whoami", "pranay.dhanve"],
  ["role", "Junior InfoSec Analyst @ Onity Group"],
  ["focus", "DLP · vuln mgmt · VAPT"],
  ["status", "open to VAPT / AppSec / SOC roles"],
];

const HIGHLIGHTS = [
  { value: "9th", label: "National CTF ranking" },
  { value: "3", label: "Certifications: C)PTE, C)PEH, PT1" },
  { value: "SOC + VAPT", label: "Defensive and offensive experience" },
];

const ABOUT = [
  "I'm an information security analyst at Onity Group, where I investigate DLP policy violations, support vulnerability management and vendor risk reviews, and analyse quarantined emails.",
  "Outside work I practise offensive security: web application testing (SQLi, XSS, CSRF, JWT attacks), CTFs, and bug bounty hunting on Bugcrowd. The goal is a VAPT role, and the SOC work gives me the detection and response side of the picture.",
];

const EXPERIENCE = [
  {
    role: "Junior Information Security Analyst",
    org: "Onity Group Inc. · Pune, Hybrid",
    period: "Jun 2025 – Present",
    points: [
      "Support Risk and Control Self-Assessment (RCSA) follow-ups and review security exceptions covering server privileged access and vulnerability management.",
      "Investigate Data Loss Prevention (DLP) policy violations and support follow-up on findings.",
      "Support vendor risk management: onboarding, security posture review and mitigation recommendations.",
      "Analyse quarantined emails using Cisco IronPort and MXToolbox.",
      "Run endpoint security compliance reports and support policy management.",
    ],
  },
  {
    role: "Security Intern",
    org: "The Hacker Central",
    period: "Aug 2024 – Mar 2025",
    points: [], // add 2-3 real responsibilities or outcomes here
  },
  {
    role: "B.E. Computer Science, Honours in Cyber Security",
    org: "Savitribai Phule Pune University",
    period: "2026",
    points: [],
  },
];

const PROJECTS = [
  {
    name: "Automated Vulnerability Scanner",
    stack: ["Python", "Selenium", "Burp Suite API"],
    desc: "Detects XSS, CSRF and SQLi using headless-browser crawling and payload fuzzing, and produces structured vulnerability reports.",
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
  { group: "Security Operations", items: ["DLP investigation", "Email security", "Security exceptions", "Endpoint compliance", "RCSA follow-ups", "Vendor risk"] },
  { group: "Security Tools", items: ["CrowdStrike Falcon", "Splunk", "Rapid7 InsightIDR", "Wazuh", "Cisco IronPort", "MXToolbox", "Wireshark"] },
  { group: "Security Testing", items: ["Burp Suite", "Nmap", "Metasploit", "OWASP Top 10", "Vulnerability assessment", "Bug bounty (Bugcrowd)"] },
  { group: "Foundations", items: ["Python", "JavaScript", "SQL", "Linux", "Networking", "MITRE ATT&CK"] },
];

const CERTS = [
  { name: "Mile2 C)PTE", detail: "Certified Penetration Testing Engineer" },
  { name: "Mile2 C)PEH", detail: "Certified Professional Ethical Hacker · valid through Oct 2027" },
  { name: "TryHackMe PT1", detail: "Junior Penetration Tester" },
];
/* ================================================ */

const css = `
:root{--bg:#080d18;--card:#0f1626;--line:#1e293b;--text:#e2e8f0;--muted:#94a3b8;--accent:#34d399;--mono:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--text);font-family:Inter,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;line-height:1.65}
a{color:inherit;text-decoration:none}
.wrap{max-width:1000px;margin:0 auto;padding:0 24px}
section{scroll-margin-top:64px}
nav{position:sticky;top:0;z-index:10;background:rgba(8,13,24,.92);backdrop-filter:blur(8px);border-bottom:1px solid var(--line)}
nav .wrap{display:flex;justify-content:space-between;align-items:center;height:56px}
.brand{font-family:var(--mono);font-weight:700}
.brand span{color:var(--accent)}
nav ul{display:flex;gap:22px;list-style:none;font-size:14px;color:var(--muted)}
nav ul a:hover{color:var(--accent)}
.hero{padding:84px 24px 56px;display:grid;grid-template-columns:1.3fr 1fr;gap:40px;align-items:center}
.label{font-family:var(--mono);font-size:13px;color:var(--accent);letter-spacing:.5px}
h1{font-size:clamp(36px,6vw,54px);line-height:1.12;margin:10px 0 6px}
.role{font-size:20px;color:var(--muted)}
.tagline{max-width:560px;margin-top:18px;color:var(--muted);font-size:16.5px}
.meta{display:flex;align-items:center;gap:6px;margin-top:14px;color:var(--muted);font-size:14px}
.actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:26px}
.btn{display:inline-flex;align-items:center;gap:8px;padding:10px 18px;border-radius:8px;font-weight:600;font-size:14px;border:1px solid var(--line);transition:border-color .15s}
.btn.primary{background:var(--accent);color:#04180f;border-color:var(--accent)}
.btn:hover{border-color:var(--accent)}
.term{background:#050912;border:1px solid var(--line);border-radius:12px;overflow:hidden;font-family:var(--mono);font-size:13px}
.term-bar{display:flex;gap:6px;padding:10px 14px;border-bottom:1px solid var(--line)}
.term-bar i{width:10px;height:10px;border-radius:50%;background:#1e293b}
.term-body{padding:16px;display:grid;gap:8px}
.term-row{display:flex;gap:10px;flex-wrap:wrap}
.term-row .p{color:var(--accent)}
.term-row .k{color:var(--muted)}
.stats{grid-column:1/-1;display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.stat{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:18px}
.stat b{display:block;font-size:24px;color:var(--accent)}
.stat span{font-size:13px;color:var(--muted)}
.block{padding:64px 0;border-top:1px solid var(--line)}
h2{font-size:26px;margin:6px 0 24px}
.about p{color:var(--muted);max-width:720px;margin-bottom:14px;font-size:16px}
.timeline{border-left:2px solid var(--line);padding-left:24px;display:grid;gap:30px}
.tl{position:relative}
.tl::before{content:"";position:absolute;left:-31px;top:8px;width:10px;height:10px;border-radius:50%;background:var(--accent)}
.tl-head{display:flex;justify-content:space-between;flex-wrap:wrap;gap:4px}
.tl h3{font-size:17px}
.tl .org{color:var(--accent);font-size:14px}
.tl .period{font-family:var(--mono);color:var(--muted);font-size:12.5px}
.tl ul{margin:10px 0 0 18px;color:var(--muted);font-size:15px}
.tl li{margin-bottom:5px}
.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
.card{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:22px;display:flex;flex-direction:column;gap:10px;transition:border-color .15s}
.card:hover{border-color:var(--accent)}
.card h3{font-size:17px;display:flex;justify-content:space-between;align-items:center;gap:8px}
.card p{color:var(--muted);font-size:14.5px}
.tags{display:flex;flex-wrap:wrap;gap:6px;margin-top:auto}
.tag{font-family:var(--mono);font-size:12px;padding:3px 10px;border-radius:6px;border:1px solid var(--line);color:var(--muted)}
.skill{margin-bottom:20px}
.skill h3{font-size:14px;color:var(--muted);margin-bottom:8px;font-weight:600}
.cert-row{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:8px}
.cert b{font-size:16px}
.cert span{font-size:13px;color:var(--muted)}
.contact p{color:var(--muted);margin-bottom:22px;max-width:560px}
footer{padding:28px 0;border-top:1px solid var(--line);color:var(--muted);font-size:13px;text-align:center}
@media(max-width:760px){.hero{grid-template-columns:1fr;padding-top:52px}.grid,.stats,.cert-row{grid-template-columns:1fr}nav ul{gap:12px;font-size:13px}}
`;

function App() {
  const links = [
    ["About", "#about"],
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
          <a href="#top" className="brand">pd<span>_</span></a>
          <ul>
            {links.map(([label, href]) => (
              <li key={href}><a href={href}>{label}</a></li>
            ))}
          </ul>
        </div>
      </nav>

      <main id="top">
        <header className="wrap hero">
          <div>
            <div className="label">// cybersecurity</div>
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
          </div>

          <div className="term" aria-hidden="true">
            <div className="term-bar"><i /><i /><i /></div>
            <div className="term-body">
              {TERMINAL.map(([k, v]) => (
                <div className="term-row" key={k}>
                  <span className="p">$</span><span className="k">{k}</span><span>{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="stats">
            {HIGHLIGHTS.map((h) => (
              <div className="stat" key={h.label}><b>{h.value}</b><span>{h.label}</span></div>
            ))}
          </div>
        </header>

        <section id="about" className="block">
          <div className="wrap about">
            <div className="label">01 / about</div>
            <h2>About</h2>
            {ABOUT.map((t) => <p key={t}>{t}</p>)}
          </div>
        </section>

        <section id="experience" className="block">
          <div className="wrap">
            <div className="label">02 / experience</div>
            <h2>Experience and education</h2>
            <div className="timeline">
              {EXPERIENCE.map((e) => (
                <div className="tl" key={e.role + e.org}>
                  <div className="tl-head">
                    <h3>{e.role}</h3>
                    <span className="period">{e.period}</span>
                  </div>
                  <div className="org">{e.org}</div>
                  {e.points.length > 0 && <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="block">
          <div className="wrap">
            <div className="label">03 / projects</div>
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

        <section id="skills" className="block">
          <div className="wrap">
            <div className="label">04 / skills</div>
            <h2>Skills and certifications</h2>
            {SKILLS.map((g) => (
              <div className="skill" key={g.group}>
                <h3>{g.group}</h3>
                <div className="tags">{g.items.map((i) => <span className="tag" key={i}>{i}</span>)}</div>
              </div>
            ))}
            <div className="cert-row">
              {CERTS.map((c) => (
                <div className="card cert" key={c.name}><b>{c.name}</b><span>{c.detail}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="block contact">
          <div className="wrap">
            <div className="label">05 / contact</div>
            <h2>Get in touch</h2>
            <p>Open to VAPT, application security and security analyst roles, and happy to relocate for the right one.</p>
            <div className="actions">
              <a className="btn primary" href={`mailto:${PROFILE.email}`}><Mail size={16} /> {PROFILE.email}</a>
              <a className="btn" href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="btn" href={PROFILE.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </section>
      </main>

      <footer>© {new Date().getFullYear()} {PROFILE.name}</footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
