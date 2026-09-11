import { AlertTriangle, Info } from "lucide-react";
import type { ReactNode } from "react";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function Panel({
  title,
  subtitle,
  icon,
  children,
  className = "",
}: {
  title?: string;
  subtitle?: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`glass rounded-3xl p-5 sm:p-6 ${className}`}>
      {title && (
        <header className="mb-4 flex items-start gap-3">
          {icon && (
            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
              {icon}
            </span>
          )}
          <div className="min-w-0">
            <h3 className="font-display text-base font-semibold">{title}</h3>
            {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
          </div>
        </header>
      )}
      {children}
    </section>
  );
}

export function PageHeader({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 className="font-display text-2xl font-bold sm:text-3xl">{title}</h2>
        <p className="mt-1 max-w-2xl text-sm text-muted-foreground">{description}</p>
      </div>
      {children}
    </div>
  );
}

export function HallucinationTip({ text }: { text?: string }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          aria-label="AI accuracy notice"
          className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary"
        >
          <AlertTriangle className="size-3" /> AI output
        </button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">
        {text ??
          "AI can hallucinate facts, names and dates. Verify details and edit this draft before you use it."}
      </TooltipContent>
    </Tooltip>
  );
}

export function EditableNotice() {
  return (
    <p className="mt-3 flex items-start gap-2 text-xs text-muted-foreground">
      <Info className="mt-0.5 size-3.5 shrink-0 text-primary" />
      Human-in-the-loop: every field below is editable. Review before sending or publishing.
    </p>
  );
}

export function Shimmer({ lines = 4 }: { lines?: number }) {
  return (
    <div className="space-y-3" aria-busy="true" aria-label="Generating">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="shimmer h-4 rounded-full"
          style={{ width: `${70 + ((i * 13) % 30)}%` }}
        />
      ))}
    </div>
  );
}

export function Pill({
  active,
  children,
  onClick,
}: {
  active?: boolean;
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3.5 py-1.5 text-sm transition-all ${
        active
          ? "border-primary/50 bg-primary/15 text-primary shadow-[var(--glow-primary)]"
          : "border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}
