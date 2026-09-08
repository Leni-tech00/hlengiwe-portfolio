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
import cvAsset from "@/assets/cv.pdf.asset.json";
import portraitAsset from "@/assets/portrait.png.asset.json";
import { Reveal } from "@/components/Reveal";
import { SiteNav } from "@/components/SiteNav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hlengiwe Mthembu — Cybersecurity & AI Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Hlengiwe Mthembu — learning, building and growing in tech: cybersecurity labs, Python projects, certifications and experience.",
      },
      { property: "og:title", content: "Hlengiwe Mthembu — Cybersecurity & AI Portfolio" },
      {
        property: "og:description",
        content: "Learning, building and growing in tech — cybersecurity, networking and AI.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const GITHUB_URL = "https://github.com/Leni-tech00";
const LINKEDIN_URL = "https://www.linkedin.com/in/hlengiwe-mthembu-646003213/";
const EMAIL = "hlengi703@gmail.com";
const CV_URL = cvAsset.url;

const technicalSkills = [
  { name: "Python", level: 70 },
  { name: "VS Code", level: 75 },
  { name: "Nmap", level: 55 },
  { name: "Linux", level: 60 },
  { name: "Cisco Packet Tracer", level: 60 },
  { name: "AI Tools & Fundamentals", level: 65 },
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
    title: "Python Contact Management System",
    tag: "Python · Programming",
    body: "A small Python application created to store and retrieve contact information using dictionaries, conditional statements and user input.",
    stack: ["Python"],
    skills: "Dictionaries, conditionals, data handling and problem-solving.",
    link: GITHUB_URL,
    linkLabel: "View on GitHub",
  },
  {
    title: "Cybersecurity & Network Security Labs",
    tag: "Cybersecurity · Networking",
    body: "Practical learning exercises completed while developing cybersecurity skills, covering network fundamentals, security threats, phishing, password security and basic network reconnaissance.",
    stack: ["TryHackMe", "Nmap", "Networking & security tools"],
    skills: "Cybersecurity awareness, network analysis and threat identification.",
    link: GITHUB_URL,
    linkLabel: "View on GitHub",
  },
  {
    title: "Networking Fundamentals with Packet Tracer",
    tag: "Networking · Labs",
    body: "Simulated network builds and configuration practice using Cisco Packet Tracer alongside the Cisco Networking Academy coursework, focused on topology design, addressing and connectivity testing.",
    stack: ["Cisco Packet Tracer", "Linux"],
    skills: "Network topology design, IP addressing and troubleshooting.",
    link: GITHUB_URL,
    linkLabel: "View on GitHub",
  },
];

const education = [
  {
    school: "Damelin",
    detail: "Fashion Design & Retail Buying Certificate",
    period: "Certificate",
  },
  {
    school: "OMNI",
    detail: "Wholesale & Retail Readiness Certificate",
    period: "Certificate",
  },
  {
    school: "Norkem Park High School",
    detail: "National Senior Certificate (Matric)",
    period: "Matric",
  },
];

const certifications = [
  {
    name: "Women Techsters Cybersecurity Bootcamp",
    issuer: "Tech4Dev",
    year: "Certificate",
  },
  {
    name: "Introduction to Cybersecurity — Certificate · Networking Basics — In progress",
    issuer: "Cisco Networking Academy",
    year: "Certificate / In progress",
  },
  {
    name: "AI Skills Acceleration Programme",
    issuer: "CAPACITI",
    year: "In progress",
  },
  {
    name: "App development / coding learning",
    issuer: "FNB App Academy",
    year: "In progress",
  },
  {
    name: "KnowBe4 Security Awareness Training",
    issuer: "Omnicontact International — regular in-role training",
    year: "Ongoing",
  },
];

const experience = [
  {
    role: "Claims Call Centre Agent",
    org: "Omnicontact International",
    period: "July 2025 — August 2026",
    points: [
      "Handled international claims intake across auto vehicle accidents, employee injuries and liability/customer incident claims.",
      "Probed callers for accurate and complete incident information, captured claim details and maintained clear documentation.",
      "Used Citrix, NetClaim, Gallagher AI and Genesys to navigate workflows, record information and support claim filing.",
      "Communicated professionally and empathetically with callers during sensitive, urgent and complex incidents.",
      "Applied attention to detail, confidentiality, critical thinking and process compliance while working in a fast-paced contact-centre environment.",
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
                Learning, building and growing in tech
              </p>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Growing my skills across cybersecurity, networking and AI through structured
                programmes and hands-on labs — while bringing real experience in accuracy,
                documentation and working with people under pressure.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={CV_URL}
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
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="grid size-11 place-items-center rounded-full border border-border transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Github className="size-5" />
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="grid size-11 place-items-center rounded-full border border-border transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Linkedin className="size-5" />
                </a>
                <span className="ml-1 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="size-3.5" /> Tembisa, Gauteng
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
                <div className="relative overflow-hidden rounded-[1.5rem]">
                  <img
                    src={portraitAsset.url}
                    alt="Portrait of Hlengiwe Mthembu"
                    width={1254}
                    height={1254}
                    className="w-full object-cover"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 mix-blend-overlay"
                    style={{
                      backgroundImage:
                        "linear-gradient(oklch(0.78 0.15 195 / 22%), oklch(0.66 0.17 292 / 22%))",
                    }}
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-40"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(0deg, oklch(0 0 0 / 35%) 0px, oklch(0 0 0 / 35%) 1px, transparent 1px, transparent 3px), repeating-linear-gradient(90deg, oklch(0 0 0 / 22%) 0px, oklch(0 0 0 / 22%) 1px, transparent 1px, transparent 3px)",
                    }}
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 h-24 animate-float opacity-50"
                    style={{
                      backgroundImage:
                        "linear-gradient(oklch(0.78 0.15 195 / 0%), oklch(0.78 0.15 195 / 35%), oklch(0.78 0.15 195 / 0%))",
                    }}
                  />
                </div>
                <div className="grid grid-cols-3 gap-2 p-3 text-center">
                  {[
                    { k: "3", v: "Projects" },
                    { k: "5", v: "Certifications" },
                    { k: "AI", v: "In progress" },
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
            blurb="A technology-focused professional building practical capability in cybersecurity, networking and AI, backed by international claims call-centre experience."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Cybersecurity Fundamentals",
                body: "Threats, phishing, password security and safe practice — learned through bootcamps and hands-on labs.",
              },
              {
                icon: BrainCircuit,
                title: "Applied AI",
                body: "Currently on an AI skills acceleration programme, learning how AI tools fit into real workflows.",
              },
              {
                icon: Terminal,
                title: "Coding & Networking",
                body: "Python basics, Linux, Nmap and Cisco Packet Tracer practice, one project at a time.",
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

        {/* TECHNICAL SKILLS */}
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
        </section>

        {/* SOFT SKILLS */}
        <section id="soft-skills" className="mx-auto max-w-6xl px-5 py-24">
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
              blurb="Hands-on builds and labs where I practise coding, networking and security fundamentals."
            />
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((p, i) => (
                <Reveal key={p.title} delay={i * 100}>
                  <article className="glass group relative flex h-full flex-col overflow-hidden rounded-3xl p-7 hover:-translate-y-1.5 sm:p-8">
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
                      style={{ backgroundImage: "var(--gradient-brand)" }}
                    />
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                      {p.tag}
                    </p>
                    <h3 className="mt-4 text-xl font-bold sm:text-2xl">{p.title}</h3>
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
                    <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                      <span className="font-semibold text-foreground">Skills demonstrated: </span>
                      {p.skills}
                    </p>
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-primary"
                    >
                      {p.linkLabel}
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
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
          <SectionHeading eyebrow="Work Experience" title="Professional experience" />
          <div className="relative mt-12 border-l border-border pl-6 sm:pl-10">
            {experience.map((x, i) => (
              <Reveal key={x.role} delay={i * 100}>
                <div className="relative mb-6">
                  <span
                    className="absolute -left-[1.9rem] top-8 size-2.5 rounded-full bg-primary sm:-left-[3.15rem]"
                    style={{ boxShadow: "var(--glow-primary)" }}
                  />
                  <div className="glass rounded-3xl p-7">
                    <div className="grid grid-cols-1 items-start gap-2 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-4">
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
                Open to internships, graduate programmes and junior roles in cybersecurity, IT and AI.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
                  style={{ backgroundImage: "var(--gradient-brand)" }}
                >
                  <Mail className="size-4" /> Email me
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary/50"
                >
                  <Linkedin className="size-4" /> LinkedIn
                </a>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary/50"
                >
                  <Github className="size-4" /> GitHub
                </a>
                <a
                  href={CV_URL}
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary/50"
                >
                  <Download className="size-4" /> Download CV
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
