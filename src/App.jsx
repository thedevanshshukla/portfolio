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
  Globe,
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
  role: "Founder & AI Engineer @ ZapplyX | Agentic AI & LLM Systems | Backend Engineering",
  tagline:
    "Final-year Computer Science undergraduate specializing in Agentic AI, LLM systems, and Backend Engineering. Experienced building and deploying production-grade AI systems using FastAPI, Redis, Celery, and MongoDB.",
  email: "dshukl2004@gmail.com",
  phone: "+91 9289153800",
  education: "B.Tech. CSE, IIIT Bhopal | CGPA 8.44 (2023–2027)",
  resumeUrl: "/resume/devansh_shukla_ai_g.pdf",
  zapplyxUrl: "https://www.zapplyx.com",
  links: [
    {
      label: "ZapplyX",
      href: "https://www.zapplyx.com",
      icon: Globe,
      featured: true,
    },
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
  { label: "Active Platform Users", value: "30+ Users", meta: "ZapplyX Live", tone: "emerald" },
  { label: "Outreach Automated", value: "12,000+", meta: "Founders", tone: "emerald" },
  { label: "Agent Mesh", value: "6 AI Agents", meta: "Orchestrated", tone: "emerald" },
  {
    label: "Algorithmic Rank",
    value: "1902 LC | 1824 CC | 1506 CF",
    meta: "Live Stats",
    tone: "emerald",
  },
];

const zapplyxLogVariants = [
  [
    "14:01:02 [Scraper Agent]: Playwright crawler extracted founder cards & Q&A panel",
    "14:01:05 [Enrichment Agent]: Local SMTP handshake + 6-stage API fallback active",
    "14:01:08 [Enrichment Agent]: Verified email found (250 OK) -> confidence 98.5%",
    "14:01:11 [Intelligence Agent]: Gemini 2.5 Flash generated structured bottleneck schema",
    "14:01:14 [Outreach Copywriter]: Subject singularity pass -> length 48 words",
    "14:01:17 [Resume Tailor]: LaTeX 1-page search loop (Extremely Compact profile)",
    "14:01:20 [Outreach Sender]: MIME email dispatched via pooled SMTP with tracking tag",
  ],
  [
    "14:03:10 [Scraper Agent]: Navigated company profile -> anti-bot script armed",
    "14:03:13 [Enrichment Agent]: Apollo/Lusha API fallback rotated successfully",
    "14:03:16 [Intelligence Agent]: Domain classified: infra -> FLOP & interconnect hook",
    "14:03:19 [Outreach Copywriter]: Validator check passed (no plural subjects)",
    "14:03:22 [Resume Tailor]: PDF compiled cleanly (1 page) -> Base64 cached in MongoDB",
    "14:03:25 [Celery Worker]: Task state synchronized -> dashboard buffer updated",
  ],
];

const tradingLogVariants = [
  [
    "13:02:21 [Market Feed]: Price=962.6 | RSI=19.52 (Oversold)",
    "13:02:23 [Bull Agent]: Rebound signal detected at key support",
    "13:02:25 [Bear Agent]: Market structure weak + poor risk-reward ratio",
    "13:02:27 [Judge Verdict]: NO TRADE (Risk threshold unfulfilled)",
    "13:02:29 [Confidence Score]: 100.0% Explainable reasoning output",
    "13:02:31 [MongoDB Layer]: Decision & reasoning state cached -> zero extra LLM cost",
  ],
  [
    "13:04:11 [Market Feed]: Price=1020 | RSI=28.4",
    "13:04:13 [Bull Agent]: Moving average support aligned with RSI divergence",
    "13:04:15 [Bear Agent]: Volume tick below 20-day baseline",
    "13:04:17 [Judge Verdict]: EXECUTE TRADE",
    "13:04:19 [Confidence Score]: 91.2%",
    "13:04:21 [MongoDB Layer]: Trade pattern stored for historical replay",
  ],
];

const stratabidLogVariants = [
  [
    "13:10:01 [System]: 4 parallel agent workflows initialized for RFP processing",
    "13:10:03 [Parser Agent]: 12 technical specification sections extracted",
    "13:10:05 [Retriever Agent]: FAISS vector search matched top-5 clause embeds",
    "13:10:07 [Scorer Agent]: Weighted rule-based scoring (Voltage 35%, Material 30%)",
    "13:10:09 [Result]: Structured bid response assembled (Turnaround TAT reduced 80%)",
    "13:10:11 [Trace Memory]: Full execution trace persisted for compliance audit",
  ],
  [
    "13:12:11 [System]: Multi-agent RFP orchestration active",
    "13:12:13 [Parser Agent]: Cross-section dependency graph constructed",
    "13:12:15 [Retriever Agent]: Vector search + rule-based scoring pass",
    "13:12:17 [Assembler Agent]: Final proposal compiled with proof-of-work",
    "13:12:19 [Result]: Bid submitted successfully",
  ],
];

function pickRandomEntry(entries) {
  return entries[Math.floor(Math.random() * entries.length)];
}

const systemNodes = [
  {
    title: "Playwright Ingestion",
    caption: "Anti-bot scraper crawling startup cards & founder Q&As",
    status: "Ingest",
  },
  {
    title: "SMTP & API Enrichment",
    caption: "Local MX handshake + 6-stage fallback (Apollo, Lusha, Hunter)",
    status: "Enrich",
  },
  {
    title: "Gemini 2.5 & LLM Mesh",
    caption: "Structured Pydantic schema for bottlenecks & copywriting validator",
    status: "Reason",
  },
  {
    title: "LaTeX Resume Tailor",
    caption: "Multi-pass 1-page layout optimization loop & Base64 caching",
    status: "Compile",
  },
  {
    title: "Celery & MongoDB Queue",
    caption: "Redis broker async dispatch, Prometheus metrics & dashboard sync",
    status: "Deliver",
  },
];

const proofCards = [
  {
    title: "Flagship Venture",
    value: "ZapplyX (zapplyx.com)",
    detail: "Founder & AI Engineer. Built production multi-agent platform serving 30+ users & 12,000+ automated outreach profiles.",
    icon: Globe,
  },
  {
    title: "Machine Learning Honors",
    value: "Amazon ML Summer School 2026",
    detail: "Selected among 3,000 students out of 1.34 Lakh+ nationwide applicants (Top 2.5%) for Amazon's flagship ML program.",
    icon: Sparkles,
  },
  {
    title: "Algorithmic Rigor",
    value: "1000+ Problems Solved",
    detail: "CodeChef 4-star (1824, top 180 rank), LeetCode Knight (1902, top 321 rank), Codeforces Specialist (1506, top 608 rank).",
    icon: Trophy,
  },
  {
    title: "Hardware & Backend Research",
    value: "25% Latency Drop",
    detail: "PSO + DMR/TMR fault-tolerant hardware scheduling with 18% area efficiency win across DSP benchmarks.",
    icon: Cpu,
  },
];

const achievements = [
  "Competitive Programming Excellence: Secured CodeChef 4-star (1824), Codeforces Specialist (1506), and LeetCode Knight (1902) while solving 1000+ algorithmic challenges.",
  "Amazon ML Summer School 2026: Selected among 3,000 students from over 1.34 lakh applicants (Top 2.5%) for Amazon's flagship machine learning program.",
  "Cohere Labs ML Summer School 2026: Received a certificate of participation for meaningful participation and contribution.",
  "Global Contest Ranks: Secured top ranks on CodeChef (180th, 336th, 406th of 28,000+), Codeforces (608th of 40,000+), and LeetCode (321st of 30,000+).",
  "CODAME IIIT Bhopal Leadership: Organized coding contests and technical workshops for 550+ students, increasing participation by 50% across 10+ institutes.",
  "Tata Imagination Challenge: Ranked among the Top 5,000 participants out of 10 lakh+ nationwide applicants as a Semi-Finalist.",
];

const timeline = [
  {
    year: "May 2026 – Present",
    label: "Founder & AI Engineer | ZapplyX",
    summary:
      "Architected and deployed a production AI workflow platform serving 30+ users. Built a scalable multi-agent workflow system coordinating 6 autonomous agents using FastAPI, Redis, Celery, MongoDB, and Playwright, and engineered production-grade backend infrastructure.",
    metrics: ["zapplyx.com Live", "30+ Active Users", "12,000+ Profiles", "6 Autonomous AI Agents"],
  },
  {
    year: "Jan 2026 – Present",
    label: "Research Project | Hardware Optimization for DSP",
    summary:
      "Optimized fault-tolerant hardware scheduling using Particle Swarm Optimization (PSO) and DMR/TMR techniques, reducing execution latency by 25% and improving area efficiency by 18% across DSP and image processing benchmarks.",
    metrics: ["25% latency drop", "18% area efficiency gain", "DSP benchmarks"],
  },
  {
    year: "Dec 2025 – Jan 2026",
    label: "Team Leader | Agentic AI Project (EY Techathon)",
    summary:
      "Led a 5-member team to build Stratabid™, an agentic RFP orchestration system with 4 parallel agent workflows. Developed a hybrid retrieval and evaluation pipeline combining FAISS vector search with weighted rule-based scoring.",
    metrics: ["Top 4,000 / 2 Lakh+", "4 parallel agents", "80% TAT reduction", "FAISS + Rules"],
  },
  {
    year: "2024 – 2025",
    label: "Executive | CODAME IIIT Bhopal",
    summary:
      "Led community outreach and technical operations, organizing coding contests and workshops for 550+ students across 10+ institutes.",
    metrics: ["550+ students", "10+ institutes", "50% participation growth"],
  },
];

const projects = [
  {
    title: "ZapplyX",
    type: "Flagship Multi-Agent Platform",
    description:
      "Production-grade asynchronous job hunt and outreach platform. Crawls company profile cards, performs SMTP verification with 6-stage API fallback, parses LLM bottlenecks via Gemini 2.5, tailors LaTeX resumes in a 1-page layout search loop, and dispatches tracked campaigns.",
    repo: "https://github.com/thedevanshshukla",
    demo: "https://www.zapplyx.com",
    stack: ["FastAPI", "Redis", "Celery", "MongoDB", "Gemini 2.5", "Playwright"],
    badge: "Live Product",
  },
  {
    title: "Courtroom Trading System",
    type: "Live AI Decision Engine",
    description:
      "LLM-powered multi-agent decision system using a Bull–Bear–Judge architecture, producing structured, explainable outputs. Engineered a hybrid validation pipeline with four market signals to filter setups and a persistent MongoDB reasoning layer that reduces repeat inference to zero.",
    repo: "https://github.com/thedevanshshukla/courtroom-trading/",
    demo: "https://courtroom-trading.vercel.app/",
    stack: ["FastAPI", "MongoDB", "LLM Agents", "Python"],
    badge: "Live System",
  },
  {
    title: "GlidePAY",
    type: "Payment Infrastructure",
    description:
      "Custom UPI-style peer-to-peer payment app serving 20+ active users. Implemented MongoDB transactions and session-based authentication to support secure payment flows, reducing API latency by 35% via route optimizations.",
    repo: "https://github.com/thedevanshshukla/GlidePAY-paymentGateway",
    demo: "https://glide-pay-payment-gateway-51l4.vercel.app/",
    stack: ["Flask", "React", "MongoDB", "REST API"],
    badge: "Deployed",
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
  const zapplyx = useLogStreamer(zapplyxLogVariants, 800);
  const trading = useLogStreamer(tradingLogVariants, 900);
  const rfp = useLogStreamer(stratabidLogVariants, 850);

  const bootSequence = [
    "lab.boot(): loading operator profile (Devansh Shukla)",
    "zapplyx.engine: 6 autonomous agents online",
    "queue.celery: Redis broker & solo worker active",
    "metrics.prometheus: monitoring mounted @ /metrics/",
    "system.status: production ready @ zapplyx.com",
  ];

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_30%),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_100%,36px_36px,36px_36px] opacity-40" />

      <header className="sticky top-0 z-30 border-b border-zinc-800/80 bg-zinc-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-zinc-500">
                Backend & Distributed Systems Lab
              </p>
              <h1 className="text-sm font-semibold text-zinc-200">
                {profile.name}
              </h1>
            </div>
            <a
              href={profile.zapplyxUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-medium text-emerald-400 sm:inline-flex items-center gap-1.5 hover:bg-emerald-500/20 transition"
            >
              <Globe className="h-3.5 w-3.5" />
              zapplyx.com
            </a>
          </div>

          <nav className="hidden items-center gap-4 md:flex">
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

          <div className="flex items-center gap-2">
            <a
              href={profile.zapplyxUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-emerald-500/50 bg-emerald-950/40 px-3 py-2 text-sm font-medium text-emerald-300 transition hover:border-emerald-400 hover:bg-emerald-900/50"
            >
              <Globe className="h-4 w-4 text-emerald-400" />
              ZapplyX.com
            </a>
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
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-zinc-500">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.65)]" />
                Operator console active
              </div>
              <a
                href={profile.zapplyxUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-400 hover:underline"
              >
                <Zap className="h-3.5 w-3.5" /> Founder @ ZapplyX
              </a>
            </div>

            <div className="space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-zinc-500">
                Identity / Engineering Profile
              </p>
              <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {profile.name}
              </h2>
              <p className="max-w-3xl text-lg text-emerald-400 font-medium">{profile.role}</p>
              <p className="max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
                {profile.tagline}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={profile.zapplyxUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-emerald-500 bg-emerald-500 px-4 py-2 text-sm font-semibold text-zinc-950 shadow-[0_0_15px_rgba(16,185,129,0.3)] transition hover:bg-emerald-400"
              >
                <Globe className="h-4 w-4" />
                Visit ZapplyX.com
              </a>
              <a
                href="#systems"
                className="inline-flex items-center gap-2 rounded-md border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:bg-zinc-800"
              >
                <Radar className="h-4 w-4" />
                Live Systems Panel
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
                    <p className="font-mono text-base font-semibold text-zinc-100">{stat.value}</p>
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
                  System Telemetry
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
                <p className="mt-1 text-xs text-zinc-400">Data Structures & Algorithms, OOP, DBMS</p>
              </div>
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                  AI & LLM
                </p>
                <p className="mt-2 text-sm text-zinc-300 leading-relaxed font-mono text-[11px] text-emerald-400">
                  OpenAI SDK, FAISS, Agentic AI, Multi-Agent Systems, LLM Applications, Retrieval
                </p>
              </div>
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                  Backend & Systems
                </p>
                <p className="mt-2 text-sm text-zinc-300 leading-relaxed font-mono text-[11px]">
                  FastAPI, Flask, Celery, Redis, MongoDB, PostgreSQL, Distributed Systems, Asynchronous Workflows
                </p>
              </div>
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                  Languages & Tools
                </p>
                <p className="mt-2 text-sm text-zinc-300 leading-relaxed font-mono text-[11px]">
                  Python, C++, JavaScript, SQL, Git, GitHub, Docker, Linux, Prometheus, Postman
                </p>
              </div>
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                  Top Ranks & Honors
                </p>
                <p className="mt-2 font-mono text-xs text-emerald-400 leading-relaxed">
                  Amazon ML Summer School 2026 (Top 2.5%) | Cohere Labs ML Summer School 2026 | EY Techathon Top 4,000 | 4★ CodeChef (1824) | LeetCode Knight (1902) | Codeforces Specialist (1506)
                </p>
              </div>
            </div>
          </motion.aside>
        </section>

        <section id="systems" className="space-y-5">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-zinc-500">
                Interactive Telemetry
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                Live Multi-Agent Systems Panel
              </h2>
            </div>
            <div className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 font-mono text-xs text-emerald-400">
              3 production systems active
            </div>
          </div>

          <div className="grid gap-5 xl:grid-cols-3">
            <SystemsPanel
              title="ZapplyX Engine"
              subtitle="6-Agent outreach pipeline with Celery, Redis & Gemini 2.5"
              buttonLabel="[ Run Agent Pipeline ]"
              lines={zapplyx.visibleLines}
              isRunning={zapplyx.isRunning}
              onRun={zapplyx.run}
              metrics={[
                "SMTP verification & 6-stage API fallbacks",
                "LaTeX 1-page resume optimization loop",
                "Celery workers with Redis broker sync",
              ]}
              tones={["emerald", "emerald", "emerald"]}
              externalLink="https://www.zapplyx.com"
            />

            <SystemsPanel
              title="Courtroom Trading"
              subtitle="Multi-agent Bull-Bear-Judge decision engine with replay"
              buttonLabel="[ Replay Historical Trade ]"
              lines={trading.visibleLines}
              isRunning={trading.isRunning}
              onRun={trading.run}
              metrics={[
                "Momentum, ATR, trend and risk gating",
                "MongoDB memory layer for zero extra inference",
                "Structured Bull / Bear / Judge explainability",
              ]}
              tones={["emerald", "amber", "emerald"]}
              externalLink="https://courtroom-trading.vercel.app/"
            />

            <SystemsPanel
              title="Stratabid (EY Techathon)"
              subtitle="Agentic RFP engine with FAISS vector retrieval & weighted rules"
              buttonLabel="[ Run Mock RFP ]"
              lines={rfp.visibleLines}
              isRunning={rfp.isRunning}
              onRun={rfp.run}
              metrics={[
                "4 parallel agents for RFP parsing",
                "Hybrid FAISS + rule matching engine",
                "80% bid turnaround time reduction",
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
                ZapplyX Multi-Agent Architecture Blueprint
              </h2>
            </div>
            <div className="hidden font-mono text-xs text-zinc-500 sm:block">
              {"Scraper -> Enrich -> Reason -> Compile -> Dispatch"}
            </div>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-5">
            {systemNodes.map((node, index) => (
              <div key={node.title} className="relative">
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-sm font-semibold text-zinc-100">{node.title}</h3>
                    <span className="rounded-full bg-zinc-800 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-400">
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
              Experience & Trajectory
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              Systems Engineering Timeline
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400">
              From building production SaaS backends like <strong className="text-zinc-200">ZapplyX</strong> to hardware scheduling research and competitive programming accomplishments, this timeline details key systems milestones.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/90 p-6 sm:p-8">
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={item.label} className="grid gap-4 md:grid-cols-[100px_1fr]">
                  <div className="relative">
                    <div className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400 font-medium">
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
              Achievements & Metrics
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-400">
              Production backends, competitive programming honors, machine learning selections, and research accomplishments.
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
                      <p className="mt-3 font-mono text-xl font-semibold text-zinc-100">{card.value}</p>
                    </div>
                    <Icon className="h-5 w-5 text-emerald-400" />
                  </div>
                  <p className="mt-4 text-sm leading-7 text-zinc-400">{card.detail}</p>
                </div>
              );
            })}
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/90 p-5">
            <div className="flex items-center gap-3">
              <Trophy className="h-5 w-5 text-amber-400" />
              <h3 className="text-lg font-semibold text-zinc-100">Key Achievements & Contest Ranks</h3>
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

        <section className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/90 p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-zinc-500">
              Live Builds & Products
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              Deployed Projects
            </h2>

            <div className="mt-6 space-y-4">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
                          {project.type}
                        </span>
                        {project.badge ? (
                          <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] uppercase text-emerald-400 border border-emerald-500/20">
                            {project.badge}
                          </span>
                        ) : null}
                      </div>
                      <h3 className="mt-2 text-xl font-semibold text-zinc-100">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
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
                      className="inline-flex items-center gap-2 rounded-md border border-emerald-500 bg-emerald-500 px-3 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-400"
                    >
                      <ExternalLink className="h-4 w-4 text-zinc-950" />
                      <span>Live Product Site</span>
                    </a>
                    {project.repo ? (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 transition hover:border-zinc-700 hover:bg-zinc-800"
                      >
                        <Github className="h-4 w-4" />
                        Source / Info
                      </a>
                    ) : null}
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
                External Channels & Socials
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
                      className={`flex items-center justify-between rounded-xl border px-4 py-3 transition ${
                        link.featured
                          ? "border-emerald-500/40 bg-emerald-950/20 hover:border-emerald-400 hover:bg-emerald-950/40"
                          : "border-zinc-800 bg-zinc-950 hover:border-zinc-700 hover:bg-zinc-900"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`h-4 w-4 ${link.featured ? "text-emerald-400" : "text-zinc-400"}`} />
                        <span className={`text-sm ${link.featured ? "text-emerald-300 font-semibold" : "text-zinc-200"}`}>{link.label}</span>
                      </div>
                      <ExternalLink className={`h-4 w-4 ${link.featured ? "text-emerald-400" : "text-zinc-600"}`} />
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
                  "Backend Engineering & Distributed Systems roles (FastAPI, Redis, Celery, MongoDB)",
                  "Multi-Agent LLM Orchestration and autonomous pipeline engineering",
                  "Hardware optimization & low-latency algorithmic systems research",
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
            Engineered by <span className="text-zinc-300 font-sans font-semibold">Devansh Shukla</span> | Founder @ <a href="https://www.zapplyx.com" target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">ZapplyX</a>
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
  externalLink,
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/90 p-5 sm:p-6 flex flex-col justify-between">
      <div>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
              Running System
            </p>
            <div className="flex items-center gap-2 mt-1">
              <h3 className="text-xl font-semibold text-zinc-100">{title}</h3>
              {externalLink ? (
                <a
                  href={externalLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-400 hover:text-emerald-300"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              ) : null}
            </div>
            <p className="mt-2 text-sm leading-6 text-zinc-400">{subtitle}</p>
          </div>

          <button
            type="button"
            onClick={onRun}
            disabled={isRunning}
            className="inline-flex items-center gap-2 rounded-md border border-zinc-700 bg-zinc-100 px-3 py-1.5 text-xs font-semibold text-zinc-950 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Play className="h-3.5 w-3.5" />
            {buttonLabel}
          </button>
        </div>

        <div className="mt-5 space-y-2">
          {metrics.map((metric, index) => (
            <div
              key={metric}
              className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-3"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs text-zinc-300">{metric}</p>
                <span
                  className={`rounded-full px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] ${
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
            <div className="grid grid-cols-2 gap-2 pt-1">
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
                  className="rounded-xl border bg-zinc-900/70 p-2.5"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                    Agent Node
                  </p>
                  <p className="mt-1 text-xs text-zinc-200">{node}</p>
                </motion.div>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-zinc-800 bg-black/60 p-4">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
            <Clock3 className="h-3 w-3" />
            streaming logs
          </div>
        </div>

        <div className="min-h-[220px] rounded-xl border border-zinc-900 bg-zinc-950/80 p-3 font-mono text-xs text-zinc-300">
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
                  className="mb-2 last:mb-0 leading-relaxed"
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
              className="mt-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-emerald-400"
            >
              <Sparkles className="h-3 w-3" />
              Processing Pipeline
            </motion.div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
