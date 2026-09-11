import {
  ArrowRight,
  Bot,
  Clock,
  FileText,
  Gauge,
  Lock,
  Mail,
  Search,
  Sparkles,
  SquareKanban,
} from "lucide-react";

import { PageHeader, Panel } from "./shared";
import { useAideFlow, type TabId } from "./store";

const metrics = [
  { icon: Clock, value: "7.5h", label: "Hours saved / week", note: "vs. manual drafting" },
  { icon: Gauge, value: "15x", label: "Faster response time", note: "first draft in seconds" },
  { icon: Lock, value: "100%", label: "Editable & private", note: "human-in-the-loop by default" },
];

const tools: { id: TabId; name: string; desc: string; icon: typeof Mail }[] = [
  {
    id: "email",
    name: "Smart Email Generator",
    desc: "Draft on-tone emails from a prompt, persona and reference files.",
    icon: Mail,
  },
  {
    id: "notes",
    name: "Notes Summarizer",
    desc: "Turn raw transcripts into summaries, actions and decisions.",
    icon: FileText,
  },
  {
    id: "tasks",
    name: "Task Planner & Manager",
    desc: "Plan in natural language, then work in Kanban, list or calendar.",
    icon: SquareKanban,
  },
  {
    id: "research",
    name: "AI Research Assistant",
    desc: "Quick briefs or deep dives with comparison tables and exports.",
    icon: Search,
  },
  {
    id: "chat",
    name: "AI Chatbot",
    desc: "Ask anything, with sources, retries and feedback controls.",
    icon: Bot,
  },
];

export function Dashboard() {
  const { setTab, tasks } = useAideFlow();
  const open = tasks.filter((t) => t.status !== "done").length;

  return (
    <div className="space-y-6">
      <section className="relative overflow-hidden rounded-3xl border border-border p-6 sm:p-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_120%_at_15%_0%,color-mix(in_oklab,var(--primary)_28%,transparent),transparent_60%)]"
        />
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <Sparkles className="size-3.5" /> AideFlow AI workspace
          </span>
          <h1 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Your <span className="text-gradient">AI Workplace Assistant</span>
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Automate emails, summarize meetings, plan your week, and research smarter from one
            unified workspace.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => setTab("email")}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <Mail className="size-4" /> Start with Email
            </button>
            <button
              onClick={() => setTab("chat")}
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-primary/40 hover:text-primary"
            >
              <Bot className="size-4" /> Open AI Chat
            </button>
          </div>
        </div>
      </section>

      <div className="grid gap-4 sm:grid-cols-3">
        {metrics.map((m) => (
          <div key={m.label} className="glass rounded-3xl p-5">
            <m.icon className="size-5 text-primary" />
            <p className="mt-4 font-display text-3xl font-bold">{m.value}</p>
            <p className="text-sm font-medium">{m.label}</p>
            <p className="mt-1 text-xs text-muted-foreground">{m.note}</p>
          </div>
        ))}
      </div>

      <PageHeader
        title="Your tools"
        description={`Launch any workspace tool in one click. You currently have ${open} open tasks.`}
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {tools.map((t) => (
          <Panel key={t.id} title={t.name} subtitle={t.desc} icon={<t.icon className="size-4" />}>
            <button
              onClick={() => setTab(t.id)}
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
            >
              Launch <ArrowRight className="size-4" />
            </button>
          </Panel>
        ))}
      </div>
    </div>
  );
}
