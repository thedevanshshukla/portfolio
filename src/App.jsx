import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Cpu,
  ExternalLink,
  FileText,
  Github,
  Linkedin,
  Mail,
  Phone,
  Play,
  Radar,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Trophy,
  Zap,
} from "lucide-react";

const profile = {
  name: "Devansh Shukla",
  role: "Applied AI Systems Engineer | LLM Orchestration & Algorithmic Optimization",
  tagline:
    "I build explainable, multi-agent architectures backed by rigorous deterministic validation and optimized hardware logic.",
  email: "dshukl2004@gmail.com",
  phone: "+91 9289153800",
  education: "B.Tech. CSE, IIIT Bhopal | CGPA 8.45",
  resumeUrl: "/resume/devansh_shukla_ai_g.pdf",
  links: [
    {
      label: "GitHub",
      href: "https://github.com/thedevanshshukla",
      icon: Github,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/devansh-shukla-dev",
      icon: Linkedin,
    },
    {
      label: "LeetCode",
      href: "https://leetcode.com/u/int_ro_ve_rt/",
      icon: TerminalSquare,
    },
    {
      label: "CodeChef",
      href: "https://www.codechef.com/users/i_am_devansh",
      icon: Trophy,
    },
    {
      label: "Codeforces",
      href: "https://codeforces.com/profile/int_ro_ve_rt",
      icon: Zap,
    },
  ],
};

const stats = [
  { label: "Active Agents", value: "4", meta: "Online", tone: "emerald" },
  { label: "Vector Search Speed", value: "~45ms", meta: "FAISS", tone: "emerald" },
  { label: "API Latency", value: "1.8s", meta: "Observed", tone: "amber" },
  {
    label: "Algorithmic Rank",
    value: "1902 LC | 1824 CC | 1506 CF",
    meta: "Live Resume Snapshot",
    tone: "emerald",
  },
];

const tradingLogVariants = [
  [
    "13:02:21 [Market]: Price=962.6 | RSI=19.52",
    "13:02:23 [Bull Agent]: Oversold rebound signal",
    "13:02:25 [Bear Agent]: Weak structure + poor RR",
    "13:02:27 [Judge Verdict]: NO TRADE",
    "13:02:29 [Confidence]: 100.0%",
    "13:02:31 [Memory]: Trade blocked → pattern cached",
  ],
  [
    "13:04:11 [Market]: Price=1020 | RSI=28",
    "13:04:13 [Bull Agent]: MA support + oversold",
    "13:04:15 [Bear Agent]: Low volume risk",
    "13:04:17 [Judge Verdict]: TRADE",
    "13:04:19 [Confidence]: 11.1%",
    "13:04:21 [Memory]: Pattern (17x) stored",
  ],
  [
    "13:06:01 [Market]: Price=102 | RSI=28",
    "13:06:03 [Bull Agent]: Momentum breakout forming",
    "13:06:05 [Bear Agent]: Volatility risk elevated",
    "13:06:07 [Judge Verdict]: HOLD",
    "13:06:09 [Confidence]: 58.2%",
    "13:06:11 [Memory]: Decision cached for replay",
  ],
];

const stratabidLogVariants = [
  [
    "13:10:01 [System]: 4 workflows initialized",
    "13:10:03 [Parser]: 12 sections extracted",
    "13:10:05 [Retriever]: FAISS matched top-5 clauses",
    "13:10:07 [Scorer]: Threshold passed",
    "13:10:09 [Result]: Bid generated (TAT -80%)",
    "13:10:11 [Memory]: Trace stored for audit",
  ],
  [
    "13:12:11 [System]: Parallel workflows active",
    "13:12:13 [Parser]: Multi-section dependency found",
    "13:12:15 [Retriever]: Hybrid matches retrieved",
    "13:12:17 [Assembler]: Draft response compiled",
    "13:12:19 [Result]: High-confidence bid generated",
    "13:12:21 [Memory]: Response + trace persisted",
  ],
  [
    "13:14:01 [System]: 4 workflows initialized",
    "13:14:03 [Parser]: Incomplete sections detected",
    "13:14:05 [Retriever]: Low-confidence matches",
    "13:14:07 [Scorer]: Below threshold",
    "13:14:09 [Result]: Bid generation skipped",
    "13:14:11 [Memory]: Failure trace stored",
  ],
];

function pickRandomEntry(entries) {
  return entries[Math.floor(Math.random() * entries.length)];
}

const systemNodes = [
  {
    title: "Input",
    caption: "Market feed, RFP docs, user prompts",
    status: "Ingest",
  },
  {
    title: "Multi-Agent LLM Layer",
    caption: "Parallel specialist reasoning with explainable traces",
    status: "Reason",
  },
  {
    title: "Deterministic Rule Validator",
    caption: "Signal guards, weighted constraints, risk filters",
    status: "Verify",
  },
  {
    title: "MongoDB",
    caption: "ACID persistence, zero repeat inferences",
    status: "Persist",
  },
  {
    title: "Output",
    caption: "Actionable verdicts, replayable audit trail",
    status: "Deliver",
  },
];

const proofCards = [
  {
    title: "Algorithmic Rigor",
    value: "300+ challenges",
    detail: "180th/28,000+ CodeChef | 608th/40,000+ Codeforces",
    icon: Trophy,
  },
  {
    title: "Enterprise Scale",
    value: "EY Techathon Top 4,000 / 2 Lakh+",
    detail: "Stratabid multi-agent orchestration across 4 parallel workflows",
    icon: BriefcaseBusiness,
  },
  {
    title: "Hardware Logic",
    value: "25% latency drop",
    detail: "PSO + DMR/TMR scheduling with 18% area-efficiency gain",
    icon: Cpu,
  },
  {
    title: "Backend Infrastructure",
    value: "35% latency reduction",
    detail: "GlidePAY with Flask, React, MongoDB and 100% ACID compliance",
    icon: ShieldCheck,
  },
];

const achievements = [
  "CodeChef 4-star (1824), LeetCode Knight (1902), Codeforces Specialist (1506).",
  "Top 180, 336 and 406 on CodeChef contests with 28,000+ participants.",
  "Codeforces global rank 608 / 40,000+ and LeetCode rank 321 / 30,000+.",
  "Tata Imagination Challenge Semi-Finalist, Top 5,000 / 10 lakh+ participants.",
];

const timeline = [
  {
    year: "2026",
    label: "Courtroom Trading System",
    summary:
      "Built an explainable Bull-Bear-Judge trading engine with deterministic replay and persistent reasoning storage.",
    metrics: ["100% explainable outputs", "O(1) history replay", "MongoDB reasoning layer"],
  },
  {
    year: "2026-current",
    label: "Hardware Optimization Research",
    summary:
      "Driving PSO-based fault-tolerant scheduling for DSP and image-processing systems with measurable latency and area wins.",
    metrics: ["25% latency drop", "18% area efficiency gain", "DSP benchmarks"],
  },
  {
    year: "2025-26",
    label: "Stratabid and EY Techathon",
    summary:
      "Led a 5-member team to design an agentic RFP engine with vector retrieval, weighted rule scoring, and parallel decision workflows.",
    metrics: ["Top 4,000 / 2 lakh+", "4 parallel agents", "80% TAT reduction target"],
  },
  {
    year: "2024-25",
    label: "CODAME Executive",
    summary:
      "Scaled coding community operations across contests and workshops while tightening execution and participation.",
    metrics: ["550+ students", "10+ institutes", "50% participation growth"],
  },
];

const projects = [
  {
    title: "Courtroom Trading System",
    type: "Live AI Adjudication",
    description:
      "Bull-Bear-Judge reasoning architecture with structured debate, deterministic trade validation, and replayable decision memory.",
    repo: "https://github.com/thedevanshshukla/courtroom-trading/",
    demo: "https://courtroom-trading.vercel.app/",
    stack: ["FastAPI", "MongoDB", "LLM Agents"],
  },
  {
    title: "GlidePAY",
    type: "Transaction Infrastructure",
    description:
      "Custom UPI-style payment workflow with MongoDB transactions, secure session flows, and low-latency React + Flask integration.",
    repo: "https://github.com/thedevanshshukla/GlidePAY-paymentGateway",
    demo: "https://glide-pay-payment-gateway-51l4.vercel.app/",
    stack: ["Flask", "React", "MongoDB"],
  },
];

function useLogStreamer(variants, delay = 850) {
  const [visibleLines, setVisibleLines] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [activeLines, setActiveLines] = useState(() => pickRandomEntry(variants));

  const run = () => {
    setActiveLines(pickRandomEntry(variants));
    setVisibleLines([]);
    setIsRunning(true);
  };

  useEffect(() => {
    if (!isRunning) {
      return undefined;
    }

    let index = 0;
    const timer = window.setInterval(() => {
      if (index < activeLines.length) {
        const line = activeLines[index];
        const now = new Date();
        const timeString = now.toTimeString().split(" ")[0];
        const lineWithRealtime = timeString + line.substring(8);

        setVisibleLines((current) => [...current, lineWithRealtime]);
        index += 1;
      }

      if (index >= activeLines.length) {
        window.clearInterval(timer);
        setIsRunning(false);
      }
    }, delay);

    return () => window.clearInterval(timer);
  }, [activeLines, delay, isRunning]);

  return { visibleLines, isRunning, run };
}


function App() {
  const trading = useLogStreamer(tradingLogVariants, 900);
  const rfp = useLogStreamer(stratabidLogVariants, 850);
  const bootSequence = [
    "lab.boot(): loading operator profile",
    "agent.mesh: 4 workers online",
    "validator.core: deterministic safeguards armed",
    "observability.status: stable",
  ];

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_30%),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_100%,36px_36px,36px_36px] opacity-40" />

      <header className="sticky top-0 z-30 border-b border-zinc-800/80 bg-zinc-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-zinc-500">
              Live AI Systems Lab
            </p>
            <h1 className="text-sm font-semibold text-zinc-200">
              {profile.name}
            </h1>
          </div>

          <nav className="hidden items-center gap-3 md:flex">
            {["Systems", "Blueprint", "Timeline", "Proof", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-zinc-400 transition hover:text-zinc-100"
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 transition hover:border-zinc-700 hover:bg-zinc-800"
          >
            <FileText className="h-4 w-4" />
            Resume
          </a>
        </div>
      </header>

      <main className="relative mx-auto flex max-w-7xl flex-col gap-10 px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl border border-zinc-800 bg-zinc-950/90 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] sm:p-8"
          >
            <div className="mb-6 flex items-center gap-3 font-mono text-xs text-zinc-500">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.65)]" />
              Operator console active
            </div>

            <div className="space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-zinc-500">
                Identity / Execution Profile
              </p>
              <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {profile.name}
              </h2>
              <p className="max-w-3xl text-lg text-zinc-300">{profile.role}</p>
              <p className="max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
                {profile.tagline}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#systems"
                  className="inline-flex items-center gap-2 rounded-md border border-zinc-200 !bg-zinc-100 px-4 py-2 text-sm font-semibold !text-zinc-950 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] transition hover:!bg-white"
              >
                <Radar className="h-4 w-4" />
                Open Live Systems
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-zinc-800 bg-transparent px-4 py-2 text-sm text-zinc-300 transition hover:border-zinc-700 hover:text-white"
              >
                <ArrowRight className="h-4 w-4" />
                Contact
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-4"
                >
                  <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                    {stat.label}
                  </p>
                  <div className="mt-3 flex items-end justify-between gap-3">
                    <p className="font-mono text-lg text-zinc-100">{stat.value}</p>
                    <span
                      className={`rounded-full px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] ${
                        stat.tone === "emerald"
                          ? "bg-emerald-500/10 text-emerald-400"
                          : "bg-amber-500/10 text-amber-400"
                      }`}
                    >
                      {stat.meta}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="rounded-2xl border border-zinc-800 bg-zinc-950/90 p-6"
          >
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-zinc-500">
                  System Boot
                </p>
                <h3 className="mt-2 text-lg font-semibold text-zinc-100">
                  Operator Snapshot
                </h3>
              </div>
              <Bot className="h-5 w-5 text-emerald-400" />
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">
              <div className="space-y-2 font-mono text-xs text-zinc-400">
                {bootSequence.map((line, index) => (
                  <motion.p
                    key={line}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.12, duration: 0.3 }}
                  >
                    <span className="mr-2 text-zinc-600">{String(index + 1).padStart(2, "0")}</span>
                    {line}
                  </motion.p>
                ))}
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                  Education
                </p>
                <p className="mt-2 text-sm text-zinc-200">{profile.education}</p>
              </div>
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                  Specialization
                </p>
                <p className="mt-2 text-sm text-zinc-300">
                  LLM systems, multi-agent orchestration, deterministic validation,
                  algorithmic optimization, backend reliability.
                </p>
              </div>
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                  Achievement Snapshot
                </p>
                <p className="mt-2 font-mono text-sm text-zinc-200">
                  4-star CodeChef | Knight on LeetCode | Specialist on Codeforces
                </p>
              </div>
            </div>
          </motion.aside>
        </section>

        <section id="systems" className="space-y-5">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-zinc-500">
                Core Feature
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                Live Systems Panel
              </h2>
            </div>
            <div className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 font-mono text-xs text-emerald-400">
              2 systems observed
            </div>
          </div>

          <div className="grid gap-5 xl:grid-cols-2">
            <SystemsPanel
              title="Courtroom Trading System"
              subtitle="Multi-agent adjudication and replayable risk reasoning"
              buttonLabel="[ Replay Historical Trade ]"
              lines={trading.visibleLines}
              isRunning={trading.isRunning}
              onRun={trading.run}
              metrics={[
                "Momentum, ATR, trend and risk-reward gating",
                "MongoDB memory layer for zero extra inference replay",
                "Structured Bull / Bear / Judge explainability",
              ]}
              tones={["emerald", "rose", "amber"]}
            />

            <SystemsPanel
              title="Stratabid"
              subtitle="Agentic RFP engine with vector retrieval and weighted scoring"
              buttonLabel="[ Run Mock RFP ]"
              lines={rfp.visibleLines}
              isRunning={rfp.isRunning}
              onRun={rfp.run}
              metrics={[
                "4 parallel agents for section-wise processing",
                "Hybrid FAISS + deterministic rule matching",
                "Up to 80% faster bid turnaround target",
              ]}
              tones={["emerald", "amber", "emerald"]}
              showNodes
            />
          </div>
        </section>

        <section id="blueprint" className="rounded-2xl border border-zinc-800 bg-zinc-950/90 p-6 sm:p-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-zinc-500">
                Architecture
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                System Architecture Blueprint
              </h2>
            </div>
            <div className="font-mono text-xs text-zinc-500">
              {"Input -> Reason -> Verify -> Persist -> Output"}
            </div>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-5">
            {systemNodes.map((node, index) => (
              <div key={node.title} className="relative">
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-sm font-semibold text-zinc-100">{node.title}</h3>
                    <span className="rounded-full bg-zinc-800 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-300">
                      {node.status}
                    </span>
                  </div>
                  <p className="mt-3 font-mono text-xs leading-6 text-zinc-400">
                    {node.caption}
                  </p>
                </div>
                {index < systemNodes.length - 1 ? (
                  <div className="hidden lg:block">
                    <div className="absolute right-[-18px] top-1/2 h-px w-8 -translate-y-1/2 bg-zinc-700" />
                    <ArrowRight className="absolute right-[-24px] top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-600" />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <section id="timeline" className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/90 p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-zinc-500">
              Trajectory
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              Systems Timeline
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400">
              Instead of generic project cards, this timeline shows how the
              portfolio compounds: algorithms, infrastructure, agent systems, and
              hardware optimization building on each other.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/90 p-6 sm:p-8">
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={item.label} className="grid gap-4 md:grid-cols-[88px_1fr]">
                  <div className="relative">
                    <div className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
                      {item.year}
                    </div>
                    {index < timeline.length - 1 ? (
                      <div className="absolute left-[9px] top-7 h-[calc(100%+22px)] w-px bg-zinc-800" />
                    ) : null}
                  </div>

                  <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
                    <div className="absolute left-[-28px] top-5 hidden h-5 w-5 rounded-full border border-zinc-700 bg-zinc-950 md:block">
                      <div className="m-[5px] h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-zinc-100">{item.label}</h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-400">{item.summary}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.metrics.map((metric) => (
                        <span
                          key={metric}
                          className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 font-mono text-[11px] text-zinc-300"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="proof" className="space-y-5">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-zinc-500">
              Proof Of Work
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              Data Grid
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-400">
              Competitive programming, enterprise validation, backend reliability,
              and hardware optimization are represented here as measurable achievements.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {proofCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded-2xl border border-zinc-800 bg-zinc-950/90 p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                        {card.title}
                      </p>
                      <p className="mt-3 font-mono text-2xl text-zinc-100">{card.value}</p>
                    </div>
                    <Icon className="h-5 w-5 text-zinc-500" />
                  </div>
                  <p className="mt-4 text-sm leading-7 text-zinc-400">{card.detail}</p>
                </div>
              );
            })}
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/90 p-5">
            <div className="flex items-center gap-3">
              <Trophy className="h-5 w-5 text-amber-400" />
              <h3 className="text-lg font-semibold text-zinc-100">Achievements</h3>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {achievements.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 text-sm leading-7 text-zinc-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/90 p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-zinc-500">
              Live Builds
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              Deployed Systems
            </h2>

            <div className="mt-6 space-y-4">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
                        {project.type}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-zinc-100">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-zinc-800 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-md border border-zinc-700 bg-zinc-100 px-3 py-2 text-sm font-medium text-zinc-950 transition hover:bg-white hover:text-zinc-950"
                    >
                      <ExternalLink className="h-4 w-4 text-zinc-950" />
                      <span className="text-zinc-950">Live Demo</span>
                    </a>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 transition hover:border-zinc-700 hover:bg-zinc-800"
                    >
                      <Github className="h-4 w-4" />
                      Source
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <section id="contact" className="rounded-2xl border border-zinc-800 bg-zinc-950/90 p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-zinc-500">
              Contact Surface
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              Reach The Operator
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 transition hover:border-zinc-700"
              >
                <Mail className="h-5 w-5 text-emerald-400" />
                <p className="mt-4 text-xs uppercase tracking-[0.22em] text-zinc-500">
                  Email
                </p>
                <p className="mt-2 font-mono text-sm text-zinc-200">{profile.email}</p>
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 transition hover:border-zinc-700"
              >
                <Phone className="h-5 w-5 text-amber-400" />
                <p className="mt-4 text-xs uppercase tracking-[0.22em] text-zinc-500">
                  Phone
                </p>
                <p className="mt-2 font-mono text-sm text-zinc-200">{profile.phone}</p>
              </a>
            </div>

            <div className="mt-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">
                External Channels
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {profile.links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 transition hover:border-zinc-700 hover:bg-zinc-900"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="h-4 w-4 text-zinc-400" />
                        <span className="text-sm text-zinc-200">{link.label}</span>
                      </div>
                      <ExternalLink className="h-4 w-4 text-zinc-600" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">
                Engagement Fit
              </p>
              <div className="mt-4 space-y-3">
                {[
                  "Applied AI engineering roles focused on orchestration and reliability",
                  "Backend-heavy full-stack builds with measurable latency or throughput goals",
                  "Research and systems work spanning hardware logic, validation, and inference control",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </section>
      </main>
      <footer className="mt-20 border-t border-zinc-800/80 bg-zinc-950/50 py-8 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
            Made by <span className="text-zinc-300 font-sans font-semibold">Devansh</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

function SystemsPanel({
  title,
  subtitle,
  buttonLabel,
  lines,
  isRunning,
  onRun,
  metrics,
  tones,
  showNodes = false,
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/90 p-5 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
            Running System
          </p>
          <h3 className="mt-2 text-xl font-semibold text-zinc-100">{title}</h3>
          <p className="mt-2 text-sm leading-7 text-zinc-400">{subtitle}</p>
        </div>

        <button
          type="button"
          onClick={onRun}
          disabled={isRunning}
          className="inline-flex items-center gap-2 rounded-md border border-zinc-700 bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-950 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Play className="h-4 w-4" />
          {buttonLabel}
        </button>
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-3">
          {metrics.map((metric, index) => (
            <div
              key={metric}
              className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-4"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm text-zinc-300">{metric}</p>
                <span
                  className={`rounded-full px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] ${
                    tones[index] === "emerald"
                      ? "bg-emerald-500/10 text-emerald-400"
                      : tones[index] === "rose"
                        ? "bg-rose-500/10 text-rose-400"
                        : "bg-amber-500/10 text-amber-400"
                  }`}
                >
                  {tones[index]}
                </span>
              </div>
            </div>
          ))}

          {showNodes ? (
            <div className="grid grid-cols-2 gap-3">
              {["Parser", "Retriever", "Scorer", "Assembler"].map((node) => (
                <motion.div
                  key={node}
                  animate={{
                    borderColor: [
                      "rgba(63,63,70,1)",
                      "rgba(34,197,94,0.6)",
                      "rgba(63,63,70,1)",
                    ],
                  }}
                  transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    repeatDelay: 0.35,
                  }}
                  className="rounded-xl border bg-zinc-900/70 p-4"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">
                    Agent Node
                  </p>
                  <p className="mt-2 text-sm text-zinc-200">{node}</p>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-4">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">
                Explainability Matrix
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3 font-mono text-xs text-zinc-300">
                <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-3">Momentum: +0.74</div>
                <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-3">ATR Risk: Elevated</div>
                <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-3">Trend Bias: Neutral+</div>
                <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-3">Verdict: HOLD</div>
              </div>
            </div>
          )}
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-black/60 p-4">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-500/80" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
            </div>
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
              <Clock3 className="h-3.5 w-3.5" />
              streaming logs
            </div>
          </div>

          <div className="min-h-[280px] rounded-xl border border-zinc-900 bg-zinc-950/80 p-4 font-mono text-sm text-zinc-300">
            <AnimatePresence mode="popLayout">
              {lines.length === 0 ? (
                <motion.p
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-zinc-500"
                >
                  Awaiting execution trigger...
                </motion.p>
              ) : (
                lines.map((line, index) => (
                  <motion.p
                    key={`${title}-${index}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mb-3 last:mb-0"
                  >
                    {line}
                  </motion.p>
                ))
              )}
            </AnimatePresence>

            {isRunning ? (
              <motion.div
                animate={{ opacity: [0.35, 1, 0.35] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className="mt-3 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-emerald-400"
              >
                <Sparkles className="h-3.5 w-3.5" />
                Processing
              </motion.div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
