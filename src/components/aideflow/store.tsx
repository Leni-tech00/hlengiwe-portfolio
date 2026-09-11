import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type TabId =
  | "dashboard"
  | "email"
  | "notes"
  | "tasks"
  | "research"
  | "chat";

export type Priority = "Urgent" | "High" | "Medium" | "Low";
export type TaskStatus = "todo" | "progress" | "review" | "done";

export type Subtask = { id: string; title: string; done: boolean };

export type Task = {
  id: string;
  title: string;
  status: TaskStatus;
  priority: Priority;
  due: string;
  assignee: string;
  recurring?: string;
  attachments: string[];
  subtasks: Subtask[];
};

export type ActionItem = {
  id: string;
  title: string;
  owner: string;
  due: string;
  done: boolean;
};

export type NotesResult = {
  summary: string;
  actions: ActionItem[];
  decisions: string[];
  sentiment: { label: string; score: number; tone: string };
  risks: string[];
  table: { agenda: string; outcome: string; next: string }[];
};

export type ResearchResult = {
  topic: string;
  depth: "quick" | "deep";
  takeaways: string[];
  insights: string[];
  comparison: { option: string; pros: string; cons: string; score: string }[];
};

export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  feedback?: "up" | "down";
};

export type EmailDraft = {
  subject: string;
  persona: string;
  tone: string;
  attachments: string[];
  voiceMemo: boolean;
  output: string;
};

export type Comment = { id: string; author: string; text: string; time: string };

export const uid = () => Math.random().toString(36).slice(2, 10);

type Store = {
  tab: TabId;
  setTab: (t: TabId) => void;
  theme: "dark" | "light";
  toggleTheme: () => void;
  email: EmailDraft;
  setEmail: (patch: Partial<EmailDraft>) => void;
  transcript: string;
  setTranscript: (v: string) => void;
  notes: NotesResult | null;
  setNotes: (n: NotesResult | null) => void;
  toggleAction: (id: string) => void;
  tasks: Task[];
  setTasks: (t: Task[] | ((prev: Task[]) => Task[])) => void;
  scratchpad: string;
  setScratchpad: (v: string) => void;
  comments: Comment[];
  addComment: (text: string) => void;
  research: ResearchResult | null;
  setResearch: (r: ResearchResult | null) => void;
  chat: ChatMessage[];
  setChat: (m: ChatMessage[] | ((prev: ChatMessage[]) => ChatMessage[])) => void;
};

const Ctx = createContext<Store | null>(null);

const seedTasks: Task[] = [
  {
    id: uid(),
    title: "Finalize Q3 client onboarding deck",
    status: "progress",
    priority: "Urgent",
    due: "Today",
    assignee: "You",
    recurring: "Weekly",
    attachments: ["onboarding-v4.pdf"],
    subtasks: [
      { id: uid(), title: "Update pricing slide", done: true },
      { id: uid(), title: "Add case study", done: false },
    ],
  },
  {
    id: uid(),
    title: "Draft partner follow-up email sequence",
    status: "todo",
    priority: "High",
    due: "Tomorrow",
    assignee: "You",
    attachments: [],
    subtasks: [{ id: uid(), title: "Collect partner list", done: false }],
  },
  {
    id: uid(),
    title: "Review AI usage policy with legal",
    status: "review",
    priority: "Medium",
    due: "Fri",
    assignee: "Legal",
    attachments: ["policy-draft.docx"],
    subtasks: [],
  },
  {
    id: uid(),
    title: "Publish weekly team digest",
    status: "done",
    priority: "Low",
    due: "Mon",
    assignee: "You",
    recurring: "Weekly",
    attachments: [],
    subtasks: [],
  },
];

export function AideFlowProvider({ children }: { children: ReactNode }) {
  const [tab, setTab] = useState<TabId>("dashboard");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [email, setEmailState] = useState<EmailDraft>({
    subject: "",
    persona: "",
    tone: "Formal",
    attachments: [],
    voiceMemo: false,
    output: "",
  });
  const [transcript, setTranscript] = useState("");
  const [notes, setNotes] = useState<NotesResult | null>(null);
  const [tasks, setTasks] = useState<Task[]>(seedTasks);
  const [scratchpad, setScratchpad] = useState(
    "# Weekly focus\n- Ship onboarding deck\n- Align with legal on AI policy\n",
  );
  const [comments, setComments] = useState<Comment[]>([
    { id: uid(), author: "Maya R.", text: "Can we add the retention metric here?", time: "09:12" },
  ]);
  const [research, setResearch] = useState<ResearchResult | null>(null);
  const [chat, setChat] = useState<ChatMessage[]>([
    {
      id: uid(),
      role: "assistant",
      content:
        "Hi! I'm AideFlow. Ask me to draft, summarize, plan or research — I'll always show my work so you can review before sending.",
    },
  ]);

  const setEmail = useCallback(
    (patch: Partial<EmailDraft>) => setEmailState((p) => ({ ...p, ...patch })),
    [],
  );

  const toggleAction = useCallback((id: string) => {
    setNotes((n) =>
      n
        ? {
            ...n,
            actions: n.actions.map((a) => (a.id === id ? { ...a, done: !a.done } : a)),
          }
        : n,
    );
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((t) => {
      const next = t === "dark" ? "light" : "dark";
      if (typeof document !== "undefined") {
        document.documentElement.classList.toggle("light", next === "light");
      }
      return next;
    });
  }, []);

  const addComment = useCallback((text: string) => {
    setComments((c) => [
      ...c,
      {
        id: uid(),
        author: "You",
        text,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
  }, []);

  const value = useMemo<Store>(
    () => ({
      tab,
      setTab,
      theme,
      toggleTheme,
      email,
      setEmail,
      transcript,
      setTranscript,
      notes,
      setNotes,
      toggleAction,
      tasks,
      setTasks,
      scratchpad,
      setScratchpad,
      comments,
      addComment,
      research,
      setResearch,
      chat,
      setChat,
    }),
    [
      tab,
      theme,
      toggleTheme,
      email,
      setEmail,
      transcript,
      notes,
      toggleAction,
      tasks,
      scratchpad,
      comments,
      addComment,
      research,
      chat,
    ],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useAideFlow() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useAideFlow must be used inside AideFlowProvider");
  return ctx;
}
