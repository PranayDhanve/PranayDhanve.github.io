import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Mail, Download, MapPin, ArrowUpRight, Sun, Moon } from "lucide-react";

/* ============ EDIT THIS SECTION ONLY ============ */
const PROFILE = {
  name: "Pranay Dhanve",
  title: "Information Security Engineer | Threat Hunter",
  tagline:
    "I work across DLP investigations, vulnerability management, and vendor risk, and I'm building toward VAPT and offensive security through projects, CTFs, and bug bounty.",
  location: "Pune, India",
  email: "pranayd.work@gmail.com",
  github: "https://github.com/PranayDhanve",
  linkedin: "https://www.linkedin.com/in/pranaydhanve/",
  resume: "/Pranay_Security.pdf", // file must be in public/; set to "" to hide the button
};

// Small terminal card in the hero. Facts only.
const TERMINAL = [
  ["whoami", "pranay.dhanve"],
  ["role", "Junior InfoSec Engineer @ Onity Group"],
  ["focus", "DLP · vuln mgmt · VAPT"],
  ["status", "open to VAPT / AppSec / SOC roles"],
];

const HIGHLIGHTS = [
  { value: "9th", label: "National CTF ranking" },
  { value: "3", label: "Certifications: C)PTE, C)PEH, PT1" },
  { value: "SOC/MDR", label: "Defensive and offensive experience" },
];

const ABOUT = [
  "I'm an information security analyst at Onity Group, where I triage MDR/EDR alerts, investigate DLP policy violations, support vulnerability management and vendor risk reviews, and analyse quarantined emails based on policies. I also practice SIEM alert triage in case of notification and request",
  "Outside work, I practise offensive security: web application testing (SQLi, XSS, CSRF, JWT attacks), CTFs, and bug bounty hunting on Bugcrowd.",
];

const EXPERIENCE = [
  {
    role: "Junior Information Security Analyst",
    org: "Onity Group Inc. · Pune, Hybrid",
    period: "Jun 2025 – Present",
    points: [
      "Investigated 50+ monthly security alerts across DLP, endpoint, and email platforms - performing root-cause analysis, mapping attacker techniques to MITRE ATT&CK, and iterating on detection logic to reduce false positives and surface higher-fidelity signals.",
"Monitored and investigated endpoint telemetry across 500+ assets using CrowdStrike Falcon EDR - analysing behavioural signals, tuning detection policies, and correlating endpoint activity with broader SIEM data to identify attacker presence and lateral movement indicators.",
"Investigated phishing campaigns and email-based intrusion attempts via Cisco IronPort and MXToolbox - identifying sender infrastructure, TTPs, and campaign patterns to inform detection improvements and response guidance.",
"Conducted hypothesis-driven threat hunts across endpoint, network, and email telemetry using Splunk (SPL) and KQL - developing and refining hunting queries to surface indicators of compromise and previously undetected attacker behaviour across SIEM and EDR data sources.",
"Built Python automation for IOC validation and enrichment across SIEM platforms - correlating large datasets to accelerate investigation workflows, cutting manual triage time by 90% per batch and enabling faster, more consistent detection outcomes."
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
:root{
  color-scheme:light;
  --bg:#f7f9fc;
  --surface:#ffffff;
  --card:#ffffff;
  --line:#e2e8f0;
  --text:#172033;
  --muted:#5f6b7c;
  --accent:#176b87;
  --accent-strong:#10566e;
  --accent-soft:#e8f3f7;
  --shadow:0 8px 24px rgba(15,23,42,.045);
  --mono:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;
}
:root[data-theme="dark"]{
  color-scheme:dark;
  --bg:#0d1422;
  --surface:#121d2e;
  --card:#152236;
  --line:#29384d;
  --text:#e7edf5;
  --muted:#a3b0c2;
  --accent:#65c6d9;
  --accent-strong:#8bd9e7;
  --accent-soft:#1b3442;
  --shadow:0 8px 24px rgba(0,0,0,.16);
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth;scroll-padding-top:76px}
body{background:var(--bg);color:var(--text);font-family:Inter,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;line-height:1.65;transition:background .2s ease,color .2s ease}
a{color:inherit;text-decoration:none}
button{font:inherit}
.wrap{max-width:1040px;margin:0 auto;padding:0 24px}
section{scroll-margin-top:76px}
nav{position:sticky;top:0;z-index:10;background:color-mix(in srgb,var(--bg) 90%,transparent);backdrop-filter:blur(12px);border-bottom:1px solid var(--line)}
nav .wrap{display:flex;justify-content:space-between;align-items:center;min-height:64px;gap:20px}
.nav-right{display:flex;align-items:center;gap:22px}
.brand{font-weight:750;letter-spacing:-.04em;font-size:19px}
.brand span{color:var(--accent)}
nav ul{display:flex;gap:22px;list-style:none;font-size:14px;color:var(--muted)}
nav ul a{transition:color .15s ease}
nav ul a:hover{color:var(--accent)}
.theme-toggle{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:36px;padding:7px 11px;border:1px solid var(--line);border-radius:8px;background:var(--surface);color:var(--text);font-size:13px;font-weight:600;cursor:pointer;transition:border-color .15s ease,background .15s ease}
.theme-toggle:hover{border-color:var(--accent)}
.hero{padding:88px 24px 64px;display:grid;grid-template-columns:1.25fr 1fr;gap:42px;align-items:center}
.label{font-size:12px;font-weight:700;color:var(--accent);letter-spacing:1.1px;text-transform:uppercase}
h1{font-size:clamp(36px,6vw,54px);letter-spacing:-.045em;line-height:1.1;margin:12px 0 8px}
.role{font-size:19px;color:var(--muted);font-weight:500}
.tagline{max-width:590px;margin-top:18px;color:var(--muted);font-size:16px;line-height:1.75}
.meta{display:flex;align-items:center;gap:7px;margin-top:14px;color:var(--muted);font-size:14px}
.actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:26px}
.btn{display:inline-flex;align-items:center;gap:8px;padding:10px 16px;border-radius:8px;font-weight:650;font-size:14px;border:1px solid var(--line);background:var(--surface);color:var(--text);transition:transform .15s ease,border-color .15s ease,background .15s ease}
.btn:hover{border-color:var(--accent);transform:translateY(-1px)}
.btn.primary{background:var(--accent);color:#fff;border-color:var(--accent)}
.btn.primary:hover{background:var(--accent-strong);border-color:var(--accent-strong)}
.term{background:var(--surface);border:1px solid var(--line);border-radius:14px;overflow:hidden;font-size:13px;box-shadow:var(--shadow)}
.term-bar{display:flex;align-items:center;gap:7px;padding:12px 16px;border-bottom:1px solid var(--line);color:var(--muted);font-size:12px;font-weight:650}
.term-bar i{width:8px;height:8px;border-radius:50%;background:#c2ccd8}
.term-bar i:first-child{background:#6da995}
.term-body{padding:20px;display:grid;gap:13px}
.term-row{display:grid;grid-template-columns:72px 1fr;gap:12px;align-items:start}
.term-row .p{display:none}
.term-row .k{color:var(--muted);font-size:12px;text-transform:uppercase;letter-spacing:.6px}
.term-row span:last-child{color:var(--text);font-weight:550}
.stats{grid-column:1/-1;display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:2px}
.stat{background:var(--surface);border:1px solid var(--line);border-radius:12px;padding:18px 20px;box-shadow:var(--shadow)}
.stat b{display:block;font-size:23px;letter-spacing:-.02em;color:var(--accent)}
.stat span{font-size:13px;color:var(--muted)}
.block{padding:68px 0;border-top:1px solid var(--line)}
h2{font-size:27px;letter-spacing:-.025em;margin:7px 0 24px}
.about p{color:var(--muted);max-width:760px;margin-bottom:14px;font-size:15.5px;line-height:1.8}
.timeline{border-left:2px solid var(--line);padding-left:25px;display:grid;gap:32px}
.tl{position:relative}
.tl::before{content:"";position:absolute;left:-32px;top:8px;width:11px;height:11px;border-radius:50%;background:var(--accent);box-shadow:0 0 0 4px var(--bg)}
.tl-head{display:flex;justify-content:space-between;flex-wrap:wrap;gap:5px 16px}
.tl h3{font-size:17px;letter-spacing:-.01em}
.tl .org{color:var(--accent);font-size:14px;font-weight:600;margin-top:3px}
.tl .period{color:var(--muted);font-size:12.5px}
.tl ul{margin:11px 0 0 18px;color:var(--muted);font-size:14.5px;line-height:1.75}
.tl li{margin-bottom:7px;padding-left:3px}
.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
.card{background:var(--surface);border:1px solid var(--line);border-radius:12px;padding:22px;display:flex;flex-direction:column;gap:11px;box-shadow:var(--shadow);transition:transform .18s ease,border-color .18s ease,box-shadow .18s ease}
.card:hover{border-color:var(--accent);transform:translateY(-3px);box-shadow:0 12px 28px rgba(15,23,42,.08)}
.card h3{font-size:16px;display:flex;justify-content:space-between;align-items:center;gap:8px}
.card p{color:var(--muted);font-size:14px;line-height:1.7}
.tags{display:flex;flex-wrap:wrap;gap:7px;margin-top:auto;padding-top:5px}
.tag{font-size:12px;padding:4px 9px;border-radius:6px;border:1px solid var(--line);background:var(--bg);color:var(--muted)}
.skill{margin-bottom:22px}
.skill h3{font-size:13px;color:var(--text);margin-bottom:9px;font-weight:700}
.cert-row{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:12px}
.cert b{font-size:15px}
.cert span{font-size:13px;color:var(--muted);line-height:1.6}
.contact p{color:var(--muted);margin-bottom:22px;max-width:590px}
footer{padding:28px 0;border-top:1px solid var(--line);color:var(--muted);font-size:13px;text-align:center}
.reveal{opacity:0;transform:translateY(18px);transition:opacity .65s ease,transform .65s ease}
.reveal.is-visible{opacity:1;transform:translateY(0)}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*,*::before,*::after{transition-duration:.01ms!important;animation-duration:.01ms!important;animation-iteration-count:1!important}.reveal{opacity:1;transform:none}}
@media(max-width:760px){
  .hero{grid-template-columns:1fr;padding-top:56px;gap:28px}
  .grid,.stats,.cert-row{grid-template-columns:1fr}
  nav .wrap{align-items:flex-start;padding-top:12px;padding-bottom:12px}
  .nav-right{gap:12px;align-items:flex-end;flex-direction:column}
  nav ul{gap:12px;flex-wrap:wrap;justify-content:flex-end;font-size:12px}
  .theme-toggle{min-height:32px;padding:5px 9px}
}
@media(max-width:460px){
  .wrap{padding-left:18px;padding-right:18px}
  nav .wrap{gap:10px}
  .nav-right{gap:9px}
  nav ul{gap:9px}
  .hero{padding-left:18px;padding-right:18px}
  .term-row{grid-template-columns:64px 1fr}
  .block{padding:54px 0}
}
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
    const elements = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -35px 0px" }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

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
          <a href="#top" className="brand">pd<span>.</span></a>
          <div className="nav-right">
            <ul>
              {links.map(([label, href]) => (
                <li key={href}><a href={href}>{label}</a></li>
              ))}
            </ul>
            <button
              className="theme-toggle"
              type="button"
              onClick={() => setTheme((current) => current === "light" ? "dark" : "light")}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
              title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
            >
              {theme === "light" ? <Moon size={15} /> : <Sun size={15} />}
              {theme === "light" ? "Dark" : "Light"}
            </button>
          </div>
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

          <div className="term reveal" aria-hidden="true">
            <div className="term-bar"><i /><i /><i /></div>
            <div className="term-body">
              {TERMINAL.map(([k, v]) => (
                <div className="term-row" key={k}>
                  <span className="p">$</span><span className="k">{k}</span><span>{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="stats reveal">
            {HIGHLIGHTS.map((h) => (
              <div className="stat" key={h.label}><b>{h.value}</b><span>{h.label}</span></div>
            ))}
          </div>
        </header>

        <section id="about" className="block reveal">
          <div className="wrap about">
            <div className="label">01 / about</div>
            <h2>About</h2>
            {ABOUT.map((t) => <p key={t}>{t}</p>)}
          </div>
        </section>

        <section id="experience" className="block reveal">
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

        <section id="projects" className="block reveal">
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

        <section id="skills" className="block reveal">
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

        <section id="contact" className="block contact reveal">
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
