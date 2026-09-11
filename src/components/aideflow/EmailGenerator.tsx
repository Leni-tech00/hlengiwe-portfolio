import { useRef, useState } from "react";
import {
  Bold,
  Copy,
  Italic,
  List,
  Mail,
  Mic,
  Paperclip,
  RefreshCw,
  Sparkles,
  Upload,
  Wand2,
} from "lucide-react";
import { toast } from "sonner";

import { EditableNotice, HallucinationTip, PageHeader, Panel, Pill, Shimmer } from "./shared";
import { useAideFlow } from "./store";

const tones = ["Formal", "Friendly", "Persuasive", "Urgent", "Executive"];

function buildEmail(subject: string, persona: string, tone: string, refs: number, memo: boolean) {
  const topic = subject || "our upcoming collaboration";
  const who = persona || "the recipient";
  const openers: Record<string, string> = {
    Formal: "Dear " + who + ",",
    Friendly: "Hi " + who + ",",
    Persuasive: "Hello " + who + ",",
    Urgent: who + " — quick but important update.",
    Executive: who + ",",
  };
  const closers: Record<string, string> = {
    Formal: "Kind regards,",
    Friendly: "Thanks so much,",
    Persuasive: "Looking forward to your thoughts,",
    Urgent: "Appreciate the fast turnaround,",
    Executive: "Best,",
  };
  return [
    openers[tone] ?? "Hello,",
    "",
    `I'm reaching out regarding ${topic}. Below is a short summary of where things stand and what I'd like to agree on next.`,
    "",
    "• Context: the work is on track and the remaining decisions are small.",
    "• Ask: could you confirm the timeline and owner on your side?",
    "• Next step: I'll send a short recap once we align.",
    refs ? `• Reference material: ${refs} attachment(s) included for context.` : "",
    memo ? "• Voice memo reference was used to capture the key talking points." : "",
    "",
    "Happy to adjust anything that doesn't fit your process.",
    "",
    closers[tone] ?? "Best,",
    "Your name",
  ]
    .filter(Boolean)
    .join("\n");
}

export function EmailGenerator() {
  const { email, setEmail } = useAideFlow();
  const [loading, setLoading] = useState(false);
  const areaRef = useRef<HTMLTextAreaElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const generate = (refine = false) => {
    setLoading(true);
    setTimeout(() => {
      const base = buildEmail(
        email.subject,
        email.persona,
        email.tone,
        email.attachments.length,
        email.voiceMemo,
      );
      setEmail({
        output: refine
          ? base.replace(
              "Happy to adjust anything that doesn't fit your process.",
              "I've tightened the wording for clarity — happy to adjust anything that doesn't fit your process.",
            )
          : base,
      });
      setLoading(false);
      toast.success(refine ? "Draft refined" : "Draft generated", {
        description: "Review the text before sending.",
      });
    }, 1200);
  };

  const wrap = (before: string, after = before) => {
    const el = areaRef.current;
    if (!el) return;
    const { selectionStart: s, selectionEnd: e, value } = el;
    const next = value.slice(0, s) + before + value.slice(s, e) + after + value.slice(e);
    setEmail({ output: next });
  };

  const addFiles = (names: string[]) => {
    if (!names.length) return;
    setEmail({ attachments: [...email.attachments, ...names] });
    toast.success(`${names.length} reference file(s) attached`);
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Smart Email Generator"
        description="Describe the intent, pick a tone and let AideFlow draft an editable email you can polish."
      />

      <div className="grid gap-5 xl:grid-cols-2">
        <Panel title="Input" subtitle="Tell AideFlow what to write" icon={<Mail className="size-4" />}>
          <div className="space-y-4">
            <label className="block text-sm">
              <span className="mb-1.5 block font-medium">Subject / intent</span>
              <input
                value={email.subject}
                onChange={(e) => setEmail({ subject: e.target.value })}
                placeholder="Follow up on the Q3 onboarding proposal"
                className="w-full rounded-xl border border-input bg-background/40 px-3.5 py-2.5 text-sm outline-none focus:border-primary/50"
              />
            </label>

            <label className="block text-sm">
              <span className="mb-1.5 block font-medium">Recipient persona</span>
              <input
                value={email.persona}
                onChange={(e) => setEmail({ persona: e.target.value })}
                placeholder="Operations director, time-poor, prefers bullet points"
                className="w-full rounded-xl border border-input bg-background/40 px-3.5 py-2.5 text-sm outline-none focus:border-primary/50"
              />
            </label>

            <div>
              <span className="mb-2 block text-sm font-medium">Tone</span>
              <div className="flex flex-wrap gap-2">
                {tones.map((t) => (
                  <Pill key={t} active={email.tone === t} onClick={() => setEmail({ tone: t })}>
                    {t}
                  </Pill>
                ))}
              </div>
            </div>

            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                addFiles(Array.from(e.dataTransfer.files).map((f) => f.name));
              }}
              className="rounded-2xl border border-dashed border-border p-5 text-center"
            >
              <Upload className="mx-auto size-5 text-primary" />
              <p className="mt-2 text-sm font-medium">Drop reference images or attachments</p>
              <p className="text-xs text-muted-foreground">PNG, JPG, PDF, DOCX — used as context only</p>
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                <button
                  onClick={() => fileRef.current?.click()}
                  className="rounded-full border border-border px-3.5 py-1.5 text-sm hover:border-primary/40"
                >
                  Browse files
                </button>
                <button
                  onClick={() => {
                    setEmail({ voiceMemo: !email.voiceMemo });
                    toast(email.voiceMemo ? "Voice memo removed" : "Voice memo reference attached");
                  }}
                  className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm ${
                    email.voiceMemo
                      ? "border-primary/50 bg-primary/15 text-primary"
                      : "border-border hover:border-primary/40"
                  }`}
                >
                  <Mic className="size-4" /> {email.voiceMemo ? "Memo attached" : "Voice memo"}
                </button>
              </div>
              <input
                ref={fileRef}
                type="file"
                multiple
                className="hidden"
                onChange={(e) => addFiles(Array.from(e.target.files ?? []).map((f) => f.name))}
              />
              {email.attachments.length > 0 && (
                <ul className="mt-3 flex flex-wrap justify-center gap-2">
                  {email.attachments.map((a, i) => (
                    <li
                      key={`${a}-${i}`}
                      className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs"
                    >
                      <Paperclip className="size-3" /> {a}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <button
              onClick={() => generate(false)}
              disabled={loading}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground disabled:opacity-60"
            >
              <Sparkles className="size-4" /> {loading ? "Generating…" : "Generate email"}
            </button>
          </div>
        </Panel>

        <Panel
          title="Output"
          subtitle="Fully editable draft"
          icon={<Wand2 className="size-4" />}
          className="flex flex-col"
        >
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <button
              onClick={() => wrap("**")}
              className="grid size-8 place-items-center rounded-lg border border-border hover:border-primary/40"
              aria-label="Bold"
            >
              <Bold className="size-4" />
            </button>
            <button
              onClick={() => wrap("*")}
              className="grid size-8 place-items-center rounded-lg border border-border hover:border-primary/40"
              aria-label="Italic"
            >
              <Italic className="size-4" />
            </button>
            <button
              onClick={() => setEmail({ output: `${email.output}\n• ` })}
              className="grid size-8 place-items-center rounded-lg border border-border hover:border-primary/40"
              aria-label="Bullet list"
            >
              <List className="size-4" />
            </button>
            <span className="ml-auto">
              <HallucinationTip />
            </span>
          </div>

          {loading ? (
            <Shimmer lines={8} />
          ) : (
            <textarea
              ref={areaRef}
              value={email.output}
              onChange={(e) => setEmail({ output: e.target.value })}
              placeholder="Your generated draft appears here and stays editable."
              className="min-h-[320px] w-full flex-1 rounded-2xl border border-input bg-background/40 p-4 text-sm leading-relaxed outline-none focus:border-primary/50"
            />
          )}

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              onClick={() => {
                navigator.clipboard?.writeText(email.output);
                toast.success("Copied to clipboard");
              }}
              disabled={!email.output}
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:border-primary/40 disabled:opacity-50"
            >
              <Copy className="size-4" /> Copy
            </button>
            <button
              onClick={() => generate(true)}
              disabled={!email.output || loading}
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:border-primary/40 disabled:opacity-50"
            >
              <Wand2 className="size-4" /> Refine with AI
            </button>
            <button
              onClick={() => generate(false)}
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:border-primary/40 disabled:opacity-50"
            >
              <RefreshCw className="size-4" /> Regenerate
            </button>
          </div>
          <EditableNotice />
        </Panel>
      </div>
    </div>
  );
}
