import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Award,
  BrainCircuit,
  Briefcase,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  ShieldCheck,
  Terminal,
} from "lucide-react";

import heroBg from "@/assets/hero-bg.jpg";
import portrait from "@/assets/portrait.jpg";
import { Reveal } from "@/components/Reveal";
import { SiteNav } from "@/components/SiteNav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hlengiwe Mthembu — Cybersecurity & AI Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Hlengiwe Mthembu, an aspiring cybersecurity and AI professional: projects, skills, certifications and experience.",
      },
      { property: "og:title", content: "Hlengiwe Mthembu — Cybersecurity & AI Portfolio" },
      {
        property: "og:description",
        content:
          "Security-minded builder working across threat detection, secure development and applied AI.",
      },
    ],
  }),
  component: Portfolio,
});

const technicalSkills = [
  { name: "Network & Systems Security", level: 85 },
  { name: "Threat Detection & SIEM", level: 78 },
  { name: "Python & Automation", level: 88 },
  { name: "Machine Learning / AI", level: 80 },
  { name: "Linux & Cloud Fundamentals", level: 75 },
  { name: "Secure Web Development", level: 72 },
];

const softSkills = [
  { title: "Analytical Thinking", body: "Breaking messy problems into evidence and clear next steps." },
  { title: "Communication", body: "Translating technical risk into language decision-makers act on." },
  { title: "Collaboration", body: "Comfortable in cross-functional teams and peer code review." },
  { title: "Adaptability", body: "Fast, self-directed learning in a field that shifts weekly." },
  { title: "Attention to Detail", body: "Small anomalies are usually the whole story." },
  { title: "Integrity", body: "Ethical handling of data, access and disclosure." },
];

const projects = [
  {
    title: "AI Phishing Detector",
    tag: "Machine Learning · Security",
    body: "A classifier that scores inbound email for phishing intent using NLP features and URL reputation signals, served through a lightweight API.",
    stack: ["Python", "scikit-learn", "FastAPI"],
  },
  {
    title: "Home SOC Lab",
    tag: "Blue Team",
    body: "A virtualised detection lab with log shipping, alert rules and dashboards to practise incident triage against simulated attacks.",
    stack: ["Wazuh", "Elastic", "Linux"],
  },
  {
    title: "Vulnerability Report Toolkit",
    tag: "Automation",
    body: "Scanner output is normalised, deduplicated and turned into prioritised, readable remediation reports for non-technical stakeholders.",
    stack: ["Python", "Nmap", "Pandas"],
  },
  {
    title: "Secure Notes App",
    tag: "AppSec",
    body: "End-to-end encrypted note taking built to practise secure auth flows, key handling and defensive input validation.",
    stack: ["React", "Node", "Crypto"],
  },
];

const education = [
  {
    school: "Bachelor of Science — Information Technology",
    detail: "Focus on network security, databases and software engineering.",
    period: "2022 — 2025",
  },
  {
    school: "Applied AI & Data Science Coursework",
    detail: "Machine learning, model evaluation and responsible AI practice.",
    period: "2024",
  },
];

const certifications = [
  { name: "CompTIA Security+", issuer: "CompTIA", year: "In progress" },
  { name: "Google Cybersecurity Certificate", issuer: "Google", year: "2025" },
  { name: "Cisco Introduction to Cybersecurity", issuer: "Cisco", year: "2024" },
  { name: "Machine Learning Specialisation", issuer: "DeepLearning.AI", year: "2024" },
];

const experience = [
  {
    role: "Cybersecurity Intern",
    org: "Technology Services Team",
    period: "2025",
    points: [
      "Monitored security alerts and escalated suspicious activity with written triage notes.",
      "Assisted with vulnerability scans and tracked remediation to closure.",
    ],
  },
  {
    role: "IT Support Assistant",
    org: "Campus IT",
    period: "2023 — 2024",
    points: [
      "Resolved endpoint, access and network issues for staff and students.",
      "Documented recurring faults and proposed preventative fixes.",
    ],
  },
];

function SectionHeading({
  eyebrow,
  title,
  blurb,
}: {
  eyebrow: string;
  title: string;
  blurb?: string;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
      {blurb && <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{blurb}</p>}
    </Reveal>
  );
}

function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px 500px at 12% -5%, oklch(0.78 0.15 195 / 16%), transparent 60%), radial-gradient(800px 520px at 88% 20%, oklch(0.66 0.17 292 / 16%), transparent 60%)",
        }}
      />
      <SiteNav />

      <main>
        {/* HERO */}
        <section id="home" className="relative flex min-h-screen items-center pt-28 pb-20">
          <img
            src={heroBg}
            alt=""
            width={1920}
            height={1088}
            className="absolute inset-0 -z-10 size-full object-cover opacity-40"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/85 to-background"
          />
          <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="animate-rise">
              <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted-foreground">
                <span className="size-1.5 rounded-full bg-primary animate-pulse-glow" />
                Open to graduate &amp; junior roles
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
                Hlengiwe <span className="text-gradient">Mthembu</span>
              </h1>
              <p className="mt-4 font-display text-lg text-muted-foreground sm:text-2xl">
                Cybersecurity &amp; Artificial Intelligence
              </p>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                I build and defend systems — combining security fundamentals with applied machine
                learning to detect threats earlier and make risk understandable to everyone.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="/cv.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
                  style={{ backgroundImage: "var(--gradient-brand)", boxShadow: "var(--glow-primary)" }}
                >
                  <Download className="size-4" /> Download CV
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary/50 hover:bg-secondary"
                >
                  View Projects <ArrowUpRight className="size-4" />
                </a>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="grid size-11 place-items-center rounded-full border border-border transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Github className="size-5" />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="grid size-11 place-items-center rounded-full border border-border transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Linkedin className="size-5" />
                </a>
                <span className="ml-1 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="size-3.5" /> South Africa
                </span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm animate-float">
              <div
                aria-hidden
                className="absolute -inset-6 rounded-[2.5rem] blur-3xl animate-pulse-glow"
                style={{ backgroundImage: "var(--gradient-brand)", opacity: 0.25 }}
              />
              <div className="glass relative overflow-hidden rounded-[2rem] p-3">
                <img
                  src={portrait}
                  alt="Portrait illustration of Hlengiwe Mthembu"
                  width={800}
                  height={1000}
                  className="w-full rounded-[1.5rem] object-cover"
                />
                <div className="grid grid-cols-3 gap-2 p-3 text-center">
                  {[
                    { k: "10+", v: "Projects" },
                    { k: "4", v: "Certificates" },
                    { k: "2", v: "Internships" },
                  ].map((s) => (
                    <div key={s.v}>
                      <p className="font-display text-lg font-bold text-primary">{s.k}</p>
                      <p className="text-[11px] text-muted-foreground">{s.v}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mx-auto max-w-6xl px-5 py-24">
          <SectionHeading
            eyebrow="About Me"
            title="Security thinking, engineering habits"
            blurb="An aspiring cybersecurity and AI professional who enjoys the space where defensive security meets intelligent automation."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Defensive Security",
                body: "Monitoring, triage and hardening — with a habit of documenting everything I find.",
              },
              {
                icon: BrainCircuit,
                title: "Applied AI",
                body: "Practical models for detection and classification, judged on real evaluation metrics.",
              },
              {
                icon: Terminal,
                title: "Automation",
                body: "Scripting repetitive analysis away so attention goes to the interesting anomalies.",
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 90}>
                <div className="glass h-full rounded-3xl p-7">
                  <c.icon className="size-6 text-primary" />
                  <h3 className="mt-5 text-lg font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="mx-auto max-w-6xl px-5 py-24">
          <SectionHeading eyebrow="Technical Skills" title="Tools and disciplines I work in" />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {technicalSkills.map((s, i) => (
              <Reveal key={s.name} delay={i * 70}>
                <div className="glass rounded-2xl p-6">
                  <div className="flex items-center justify-between gap-4">
                    <p className="min-w-0 truncate text-sm font-medium">{s.name}</p>
                    <span className="shrink-0 text-xs text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${s.level}%`, backgroundImage: "var(--gradient-brand)" }}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-20">
            <SectionHeading eyebrow="Soft Skills" title="How I work with people" />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {softSkills.map((s, i) => (
                <Reveal key={s.title} delay={i * 60}>
                  <div className="glass h-full rounded-2xl p-6">
                    <h3 className="font-display text-base font-semibold text-primary">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="relative py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-1/4 -z-10 h-96 blur-3xl"
            style={{ backgroundImage: "var(--gradient-brand)", opacity: 0.1 }}
          />
          <div className="mx-auto max-w-6xl px-5">
            <SectionHeading
              eyebrow="Projects"
              title="Selected work"
              blurb="Hands-on builds where I practise detection, secure engineering and applied machine learning."
            />
            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {projects.map((p, i) => (
                <Reveal key={p.title} delay={i * 100}>
                  <article className="glass group relative h-full overflow-hidden rounded-3xl p-8 hover:-translate-y-1.5">
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
                      style={{ backgroundImage: "var(--gradient-brand)" }}
                    />
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                      {p.tag}
                    </p>
                    <h3 className="mt-4 text-2xl font-bold">{p.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.stack.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                    >
                      View on GitHub
                      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="mx-auto max-w-6xl px-5 py-24">
          <SectionHeading eyebrow="Education" title="Academic background" />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {education.map((e, i) => (
              <Reveal key={e.school} delay={i * 90}>
                <div className="glass h-full rounded-3xl p-7">
                  <GraduationCap className="size-6 text-primary" />
                  <p className="mt-4 text-xs text-muted-foreground">{e.period}</p>
                  <h3 className="mt-1 text-lg font-semibold">{e.school}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section id="certifications" className="mx-auto max-w-6xl px-5 py-24">
          <SectionHeading eyebrow="Certifications" title="Credentials &amp; training" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((c, i) => (
              <Reveal key={c.name} delay={i * 80}>
                <div className="glass h-full rounded-2xl p-6">
                  <Award className="size-5 text-primary" />
                  <h3 className="mt-4 text-sm font-semibold leading-snug">{c.name}</h3>
                  <p className="mt-2 text-xs text-muted-foreground">{c.issuer}</p>
                  <p className="mt-1 text-xs text-primary">{c.year}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="mx-auto max-w-6xl px-5 py-24">
          <SectionHeading eyebrow="Work Experience" title="Where I've applied it" />
          <div className="relative mt-12 border-l border-border pl-6 sm:pl-10">
            {experience.map((x, i) => (
              <Reveal key={x.role} delay={i * 100}>
                <div className="relative mb-6">
                  <span
                    className="absolute -left-[1.9rem] top-8 size-2.5 rounded-full bg-primary sm:-left-[3.15rem]"
                    style={{ boxShadow: "var(--glow-primary)" }}
                  />
                  <div className="glass rounded-3xl p-7">
                    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                      <div className="min-w-0">
                        <h3 className="text-lg font-semibold">{x.role}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{x.org}</p>
                      </div>
                      <div className="flex shrink-0 items-center gap-1.5 text-xs text-muted-foreground">
                        <Briefcase className="size-3.5" /> {x.period}
                      </div>
                    </div>
                    <ul className="mt-5 grid gap-2">
                      {x.points.map((p) => (
                        <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
          <Reveal>
            <div className="glass relative overflow-hidden rounded-[2rem] px-6 py-16 text-center sm:px-12">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 -bottom-24 h-64 blur-3xl animate-pulse-glow"
                style={{ backgroundImage: "var(--gradient-brand)", opacity: 0.2 }}
              />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Contact</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Let's work together</h2>
              <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
                Open to internships, graduate programmes and junior roles in cybersecurity and AI.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <a
                  href="mailto:hello@example.com"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
                  style={{ backgroundImage: "var(--gradient-brand)" }}
                >
                  <Mail className="size-4" /> Email me
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary/50"
                >
                  <Linkedin className="size-4" /> LinkedIn
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary/50"
                >
                  <Github className="size-4" /> GitHub
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Hlengiwe Mthembu · Cybersecurity &amp; AI
      </footer>
    </div>
  );
}
