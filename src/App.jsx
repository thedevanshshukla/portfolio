import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Brain,
  CheckCircle2,
  ChevronRight,
  Code2,
  Cpu,
  Download,
  ExternalLink,
  FileText,
  FolderGit2,
  Github,
  Globe,
  GraduationCap,
  Layers,
  Linkedin,
  Mail,
  Mic,
  Phone,
  Scale,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Trophy,
  X,
  Zap,
} from "lucide-react";

const profile = {
  name: "Devansh Shukla",
  role: "Founder & AI Engineer @ ZapplyX | LLM Systems & Backend Engineering",
  tagline:
    "Final-year Computer Science undergraduate specializing in AI Engineering, LLM systems, and Backend Engineering. Experienced building production-grade AI systems with FastAPI, Redis, Celery, and MongoDB, with hands-on experience in agentic workflows, RAG, realtime AI, asynchronous processing, and system integration.",
  email: "dshukl2004@gmail.com",
  phone: "+91 9289153800",
  education: "B.Tech. in Computer Science & Engineering, IIIT Bhopal (Sept 2023 – Jun 2027) | CGPA: 8.44",
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
  {
    label: "Algorithmic Rigor",
    value: "1902 LC | 1824 CC | 1506 CF",
    meta: "Knight & 4★",
    tone: "emerald",
  },
  { label: "Academic Standing", value: "8.44 CGPA", meta: "IIIT Bhopal", tone: "emerald" },
];

const projects = [
  {
    title: "VoiceHire",
    type: "Realtime Voice AI Interviewer",
    badge: "Production v1.0",
    description:
      "Enterprise-grade, realtime Voice AI technical interviewer built to conduct structured, adaptive, and evidence-grounded engineering assessments. Features Studio-grade Web Audio noise isolation, Deepgram Nova-2 STT with domain keyword boosting, sub-150ms barge-in interruptions, mandatory resume deep-dives, calibrated 5-dimensional evaluation rubrics, and automated audit scorecards.",
    highlights: [
      "Sub-150ms barge-in audio interruption & Web Audio noise suppression pipeline",
      "Deepgram Nova-2 STT with technical domain boosting (PostgreSQL, Redis, Kafka, MVCC, B-Tree, Celery, Docker)",
      "6-Stage adaptive interview FSM with mandatory Resume/JD deep-dives & single-question enforcement",
      "Calibrated 5D evaluation engine with weighted scoring, evidence quote extraction & contradiction detection",
    ],
    repo: "https://github.com/thedevanshshukla/Voice_Hire",
    demo: "https://voice-hire-devansh-shuklas-projects.vercel.app/",
    stack: ["FastAPI", "React 18", "TypeScript", "Deepgram STT", "ElevenLabs", "LiveKit", "MongoDB Atlas", "OpenAI / Gemini", "Prometheus"],
  },
  {
    title: "ZapplyX",
    type: "Flagship Multi-Agent Platform",
    badge: "Live Product (30+ Users)",
    description:
      "Production-grade asynchronous job hunt and outreach platform. Crawls company profile cards, performs SMTP verification with 6-stage API fallback, parses LLM bottlenecks via Gemini 2.5, tailors LaTeX resumes in a 1-page layout search loop, and dispatches tracked campaigns across 12,000+ founder profiles.",
    highlights: [
      "Multi-agent mesh coordinating 6 autonomous agents via Celery queues & Redis broker",
      "Local SMTP handshake + 6-stage API fallbacks (Apollo, Lusha, Hunter)",
      "LaTeX 1-page layout search loop with Base64 caching in MongoDB",
      "Multi-provider enrichment, Prometheus monitoring, structured logging & trace IDs",
    ],
    repo: "https://github.com/thedevanshshukla",
    demo: "https://www.zapplyx.com",
    stack: ["FastAPI", "Redis", "Celery", "MongoDB", "Gemini 2.5", "Playwright", "Prometheus"],
  },
  {
    title: "Courtroom Trading System",
    type: "Live AI Decision Engine",
    badge: "Live System",
    description:
      "Designed an LLM-powered multi-agent decision system using a Bull–Bear–Judge architecture, producing structured, explainable outputs with deterministic validation. Engineered a hybrid validation pipeline combining LLM outputs with 4 market signals and a MongoDB reasoning layer reducing repeat inference to 0 additional LLM calls with O(1) retrieval for history replay.",
    highlights: [
      "Multi-agent Bull–Bear–Judge consensus architecture for explainable signals",
      "Hybrid validation combining LLMs with 4 technical market indicators (RSI, ATR, moving average)",
      "Persistent MongoDB reasoning cache enabling zero-cost replay and instant history lookup",
    ],
    repo: "https://github.com/thedevanshshukla/courtroom-trading/",
    demo: "https://courtroom-trading.vercel.app/",
    stack: ["FastAPI", "MongoDB", "LLM Multi-Agent", "Python", "TradingView"],
  },
  {
    title: "Stratabid™ (EY Techathon)",
    type: "Agentic RFP Orchestration",
    badge: "Round 2 Qualifier (Top 4k/2L+)",
    description:
      "Agentic RFP orchestration system with 4 parallel agent workflows. Developed a hybrid retrieval and evaluation pipeline combining FAISS vector search with weighted rule-based scoring across 100+ specification parameters, reducing bid turnaround time by up to 80%.",
    highlights: [
      "4 parallel agents: Parser, Clause Retriever, Weighted Scorer, Proposal Assembler",
      "Hybrid FAISS vector search + rule-based scoring on 100+ parameters",
      "80% reduction in RFP turnaround time with full audit trail compliance",
    ],
    repo: "https://github.com/thedevanshshukla",
    stack: ["Python", "FAISS Vector DB", "LangChain", "FastAPI", "Multi-Agent FSM"],
  },
  {
    title: "GlidePAY",
    type: "Payment Infrastructure",
    badge: "Deployed",
    description:
      "Custom UPI-style peer-to-peer payment app serving 20+ active users. Implemented MongoDB transactions and session-based authentication to support secure payment flows, reducing API latency by 35% via route optimizations.",
    highlights: [
      "ACID transactions in MongoDB for robust double-entry balance updates",
      "Session authentication and route latency optimizations (-35% latency)",
    ],
    repo: "https://github.com/thedevanshshukla/GlidePAY-paymentGateway",
    demo: "https://glide-pay-payment-gateway-51l4.vercel.app/",
    stack: ["Flask", "React", "MongoDB", "REST API"],
  },
];

const timeline = [
  {
    year: "May 2026 – Present",
    label: "AI Engineer | ZapplyX",
    summary:
      "Architected and deployed a production AI workflow platform serving 30+ users, automating startup discovery, enrichment, LLM personalization, resume tailoring, and outreach across 12,000+ founder profiles. Built a scalable multi-agent system using FastAPI, Redis, Celery, MongoDB, and Playwright, coordinating 6 autonomous agents via asynchronous queues, retries, and concurrency control.",
    metrics: ["zapplyx.com Live", "30+ Active Users", "12,000+ Profiles", "6 Autonomous AI Agents"],
  },
  {
    year: "Jan 2026 – Present",
    label: "Research Project | Hardware Resource Optimization & Digital Watermarking",
    summary:
      "Formulated a metaheuristic hardware optimization framework for DSP data-flow graphs, integrating scheduling, register allocation, graph coloring, and area-latency analysis across 34 DSP benchmarks. Implemented and benchmarked 7 metaheuristic algorithms (PSO, GWO, ACO, BFO, Firefly, GA, KH) and 12 security algorithms for digital watermark embedding with register conflict resolution.",
    metrics: ["34 DSP Benchmarks", "7 Metaheuristic Algos", "12 Security Algorithms", "25% Latency Drop"],
  },
  {
    year: "Dec 2025 – Jan 2026",
    label: "Team Leader | Agentic AI Project, EY Techathon (Round 2 Qualifier)",
    summary:
      "Ranked among the top 4,000 teams out of ~2 lakh registered participants, leading a 5-member team (Team Dna paradox) to build Stratabid™, an agentic RFP orchestration system with 4 parallel agent workflows. Developed a hybrid retrieval pipeline combining FAISS vector search with weighted rule-based scoring across 100+ specification parameters, reducing bid turnaround time by up to 80%.",
    metrics: ["Top 4,000 / 2 Lakh+", "4 Parallel Agents", "80% TAT Reduction", "FAISS + Rule Scoring"],
  },
  {
    year: "2024 – 2025",
    label: "Executive | CODAME IIIT Bhopal",
    summary:
      "Led community outreach and technical operations, organizing competitive coding contests and technical workshops for 550+ students and increasing participation by 50% across 10+ engineering institutes.",
    metrics: ["550+ Students", "10+ Institutes", "50% Participation Growth"],
  },
];

const certificates = [
  {
    id: "amazon-ml",
    title: "Amazon ML Summer School 2026",
    issuer: "Amazon",
    type: "Letter of Acknowledgement",
    dates: "July 11–26 & August 1–2, 2026 (Issued Aug 18, 2026)",
    credentialType: "Flagship Machine Learning Program",
    highlight: "Top 2.5% Nationwide Selection (3,000 selected / 1.34 Lakh+ Applicants)",
    description:
      "Attended Amazon ML Summer School 2026, an integrated learning program focused on foundational & advanced Machine Learning concepts, LLMs, Neural Networks, and Applied AI systems.",
    recipient: "Devansh Shukla",
    institution: "Indian Institute of Information Technology (IIIT), Bhopal",
    tag: "Amazon Flagship",
    image: "/certificates/amazon_ml_summer_school_2026.png",
    pdfUrl: "/certificates/pdf/amazon_ml_summer_school_2026.pdf",
    verified: true,
  },
  {
    id: "et-ai",
    title: "ET-AI Hackathon 2026 — Semi-Finalist",
    issuer: "The Economic Times Digital",
    type: "Certificate of Participation / Semi-Finalist",
    dates: "7th May 2026",
    credentialType: "National AI Hackathon",
    highlight: "Semi-Finalist Commendation by Puneet Kukreja (Business Head, ET Digital)",
    description:
      "Successfully emerged as a Semi-Finalist in the ET-AI Hackathon 2026. Commended for innovation, collaborative spirit, and commitment to building meaningful AI solutions throughout the competition.",
    recipient: "Devansh Shukla",
    institution: "Indian Institute of Information Technology (IIIT), Bhopal",
    tag: "The Economic Times",
    image: "/certificates/et_ai_hackathon_2026.png",
    pdfUrl: "/certificates/pdf/et_ai_hackathon_2026.pdf",
    verified: true,
  },
  {
    id: "ey-techathon",
    title: "EY Techathon 2026 (Round 2 Qualifier)",
    issuer: "Ernst & Young (EY) & Unstop",
    type: "Certificate of Appreciation",
    dates: "Dec 2025 – Jan 2026",
    credentialType: "Round 2 Detailed Presentation Qualifier",
    highlight: "Top 4,000 Teams Nationwide out of ~2 Lakh Registered Participants",
    description:
      "Awarded for advancing to Round 2: Detailed Presentation Submission as Team Leader for Team Dna paradox, architecting Stratabid™ agentic RFP orchestration system.",
    recipient: "Devansh Shukla",
    institution: "Indian Institute of Information Technology (IIIT), Bhopal",
    tag: "EY & Unstop",
    image: "/certificates/ey_techathon_2026.png",
    pdfUrl: "/certificates/pdf/ey_techathon_2026.pdf",
    verified: true,
  },
  {
    id: "tata-imagination",
    title: "Tata Imagination Challenge — Semi-Finalist",
    issuer: "Tata Group & Unstop",
    type: "Certificate of Appreciation",
    dates: "2025 – 2026",
    credentialType: "#ImagineThat Idea Pitch",
    highlight: "Top 5,000 Nationwide Participants out of 10 Lakh+ Registered Candidates",
    description:
      "Participated in the #ImagineThat Idea Pitch organized by the Tata Group as Team dshukl2004, qualifying among the Top 5,000 national semi-finalists in strategy and innovation.",
    recipient: "Devansh Shukla",
    institution: "Indian Institute of Information Technology, Bhopal (IIIT Bhopal)",
    tag: "Tata Group",
    image: "/certificates/tata_imagination_challenge_2026.png",
    pdfUrl: "/certificates/pdf/tata_imagination_challenge_2026.pdf",
    verified: true,
  },
  {
    id: "cohere-ml",
    title: "Cohere Labs ML Summer School 2026",
    issuer: "Cohere Labs & Credsverse",
    type: "Certificate of Participation",
    dates: "Summer 2026",
    credentialType: "LLMs & Applied NLP",
    highlight: "Verified Digital Credential (ID: 252675e3-526c-4678-810d)",
    description:
      "Completed hands-on machine learning sessions on transformer architectures, embeddings, vector search, and retrieval-augmented generation (RAG) with Cohere Labs.",
    recipient: "Devansh Shukla",
    institution: "IIIT Bhopal",
    tag: "Cohere Labs",
    verified: true,
    verificationUrl: "https://credsverse.com/credentials/252675e3-526c-4678-810d-d560ec4d73b6",
    verificationText: "Verify on Credsverse",
  },
];

const achievements = [
  {
    title: "Competitive Programming Rigor",
    text: "Secured CodeChef 4-star (1824), Codeforces Specialist (1506), and LeetCode Knight (1902), conquering 1000+ algorithmic challenges and ranking 180th, 336th, 406th on CodeChef (28k+), 608th on Codeforces (40k+), and 321st on LeetCode (30k+).",
    badge: "1902 LC | 1824 CC | 1506 CF",
  },
  {
    title: "Amazon ML Summer School 2026",
    text: "Selected among 3,000 students from over 1.34 lakh applicants nationwide (Top 2.5%) for Amazon's flagship machine learning program covering deep learning architectures, LLMs, and applied AI.",
    badge: "Top 2.5% Nationwide",
  },
  {
    title: "Semi-Finalist, ET-AI Hackathon 2026",
    text: "Successfully emerged as a Semi-Finalist in the ET-AI Hackathon 2026 organized by The Economic Times Digital, commended for building meaningful real-world AI solutions.",
    badge: "National Semi-Finalist",
  },
  {
    title: "EY Techathon (Round 2 Qualifier)",
    text: "Ranked among top 4,000 teams out of approximately 2 lakh registered participants, leading a 5-member team (Team Dna paradox) to build Stratabid™ agentic RFP orchestration system.",
    badge: "Top 4,000 / 2 Lakh+",
  },
  {
    title: "Semi-Finalist, Tata Imagination Challenge",
    text: "Ranked among the Top 5,000 participants out of 10 lakh+ nationwide applicants in India's flagship innovation and strategy competition (#ImagineThat Idea Pitch).",
    badge: "Top 5,000 / 10 Lakh+",
  },
  {
    title: "Leadership — Executive, CODAME IIIT Bhopal",
    text: "Organized competitive coding contests and technical workshops for 550+ students, increasing multi-campus participation by 50% across 10+ engineering institutes.",
    badge: "550+ Engineers",
  },
  {
    title: "Cohere Labs ML Summer School 2026",
    text: "Completed hands-on machine learning curriculum on Large Language Models, embeddings, and generative AI systems with certified credential verification.",
    badge: "Verified Credential",
    link: "https://credsverse.com/credentials/252675e3-526c-4678-810d-d560ec4d73b6",
    linkText: "View on Credsverse",
  },
];

function CertificateModal({ cert, onClose }) {
  if (!cert) return null;

  return (
    <AnimatePresence>
      <div
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-3xl my-8 rounded-2xl border border-zinc-700 bg-zinc-950 p-5 sm:p-7 shadow-2xl overflow-hidden"
        >
          <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 rounded-full border border-zinc-800 bg-zinc-900/80 p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 transition z-10"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-widest mb-2">
            <ShieldCheck className="h-4 w-4" />
            <span>Verified Credential Record</span>
          </div>

          <div className="border-b border-zinc-800 pb-4 pt-1">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="rounded-full bg-zinc-900 border border-zinc-800 px-3 py-1 font-mono text-xs text-zinc-300">
                {cert.tag}
              </span>
              <span className="font-mono text-xs text-zinc-500">{cert.dates}</span>
            </div>
            <h2 className="mt-2 text-xl sm:text-2xl font-bold text-white tracking-tight">{cert.title}</h2>
            <p className="mt-1 text-sm font-semibold text-emerald-400">{cert.issuer}</p>
          </div>

          {/* Certificate Official Image Rendering */}
          {cert.image ? (
            <div className="mt-4 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 shadow-lg">
              <div className="relative group">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full max-h-[380px] object-contain bg-zinc-950 p-2 transition group-hover:opacity-95"
                />
                <a
                  href={cert.image}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-md border border-zinc-700 bg-zinc-950/90 px-3 py-1.5 font-mono text-xs text-zinc-200 shadow-md backdrop-blur hover:bg-zinc-900 hover:text-emerald-400 transition"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>Open Full Image</span>
                </a>
              </div>
            </div>
          ) : null}

          <div className="mt-4 rounded-xl border border-zinc-800/80 bg-zinc-900/50 p-4 space-y-3">
            <div className="flex flex-wrap items-center justify-between border-b border-zinc-800/60 pb-2.5 gap-2">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">Awarded To</p>
                <p className="text-sm sm:text-base font-bold text-zinc-100">{cert.recipient}</p>
              </div>
              <div className="text-left sm:text-right">
                <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">Institution</p>
                <p className="text-xs text-zinc-300">{cert.institution}</p>
              </div>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">Highlight & Distinction</p>
              <p className="mt-0.5 text-xs sm:text-sm font-medium text-amber-300">{cert.highlight}</p>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">Official Citation</p>
              <p className="mt-0.5 text-xs leading-relaxed text-zinc-300">{cert.description}</p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <BadgeCheck className="h-4 w-4 text-emerald-400" />
              <span>Authenticity verified in resume archive</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {cert.verificationUrl ? (
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-emerald-500 bg-emerald-500 px-3.5 py-1.5 text-xs font-semibold text-zinc-950 hover:bg-emerald-400 transition"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>{cert.verificationText || "Verify Credential"}</span>
                </a>
              ) : null}
              {cert.pdfUrl ? (
                <a
                  href={cert.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-amber-500/40 bg-amber-500/10 px-3.5 py-1.5 text-xs font-medium text-amber-300 hover:bg-amber-500/20 transition"
                >
                  <FileText className="h-3.5 w-3.5 text-amber-400" />
                  <span>View Official PDF</span>
                </a>
              ) : null}
              {cert.image ? (
                <a
                  href={cert.image}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-zinc-700 bg-zinc-900 px-3.5 py-1.5 text-xs font-medium text-zinc-200 hover:bg-zinc-800 transition"
                >
                  <ExternalLink className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Full Image</span>
                </a>
              ) : null}
              <button
                onClick={onClose}
                className="rounded-md border border-zinc-700 bg-zinc-900 px-3.5 py-1.5 text-xs font-medium text-zinc-200 hover:bg-zinc-800 transition"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative flex flex-col w-full max-w-5xl h-[92vh] rounded-2xl border border-zinc-700 bg-zinc-950 p-4 sm:p-6 shadow-2xl overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />

          {/* Modal Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800 pb-3.5 mb-3 flex-none">
            <div className="flex items-center gap-2.5">
              <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-2 text-emerald-400">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-base sm:text-lg font-bold text-white tracking-tight font-mono">
                    Devansh_Shukla_Resume
                  </h2>
                  <span className="hidden sm:inline-block rounded-full bg-emerald-500/10 px-2 py-0.5 font-mono text-[9px] uppercase text-emerald-400 border border-emerald-500/20">
                    Latest Verified
                  </span>
                </div>
                <p className="text-xs text-zinc-400 font-mono">
                  AI Engineer & LLM Systems • B.Tech CSE (IIIT Bhopal)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="/resume/Devansh_Shukla_Resume.pdf"
                download="Devansh_Shukla_Resume.pdf"
                className="inline-flex items-center gap-1.5 rounded-md border border-emerald-500 bg-emerald-500 px-3.5 py-1.5 text-xs font-semibold text-zinc-950 hover:bg-emerald-400 transition shadow-[0_0_12px_rgba(16,185,129,0.25)]"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Download</span>
              </a>
              <a
                href="/resume/Devansh_Shukla_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-md border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-xs font-medium text-zinc-200 hover:bg-zinc-800 transition"
              >
                <ExternalLink className="h-3.5 w-3.5 text-emerald-400" />
                <span>New Tab</span>
              </a>
              <button
                onClick={onClose}
                className="rounded-full border border-zinc-800 bg-zinc-900 p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 transition ml-1 cursor-pointer"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Modal Body - PDF Viewer */}
          <div className="relative flex-1 w-full h-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 shadow-inner">
            <object
              data="/resume/Devansh_Shukla_Resume.pdf#toolbar=1"
              type="application/pdf"
              className="w-full h-full rounded-xl"
            >
              <div className="flex flex-col items-center justify-center h-full p-6 text-center overflow-y-auto">
                <img
                  src="/resume/Devansh_Shukla_Resume.png"
                  alt="Devansh_Shukla_Resume"
                  className="max-h-[60vh] object-contain rounded-lg shadow-lg border border-zinc-800"
                />
                <a
                  href="/resume/Devansh_Shukla_Resume.pdf"
                  download="Devansh_Shukla_Resume.pdf"
                  className="mt-4 inline-flex items-center gap-2 rounded-md border border-emerald-500 bg-emerald-500 px-4 py-2 text-xs font-semibold text-zinc-950"
                >
                  <Download className="h-4 w-4" />
                  Download Devansh_Shukla_Resume.pdf
                </a>
              </div>
            </object>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

function App() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-emerald-500/20">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_30%),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_100%,36px_36px,36px_36px] opacity-40" />

      {/* Sticky Header */}
      <header className="sticky top-0 z-30 border-b border-zinc-800/80 bg-zinc-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div>
              <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-zinc-500">
                AI Engineering & Systems Lab
              </p>
              <h1 className="text-sm sm:text-base font-semibold text-zinc-200">
                {profile.name}
              </h1>
            </div>
            <a
              href={profile.zapplyxUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden lg:inline-flex rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-medium text-emerald-400 items-center gap-1.5 hover:bg-emerald-500/20 transition"
            >
              <Globe className="h-3.5 w-3.5" />
              zapplyx.com
            </a>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            {[
              { label: "Projects", href: "#projects" },
              { label: "Experience", href: "#experience" },
              { label: "Certificates", href: "#certificates" },
              { label: "Achievements", href: "#achievements" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs sm:text-sm text-zinc-400 transition hover:text-emerald-400"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={profile.zapplyxUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-md border border-emerald-500/50 bg-emerald-950/40 px-3 py-1.5 text-xs sm:text-sm font-medium text-emerald-300 transition hover:border-emerald-400 hover:bg-emerald-900/50"
            >
              <Globe className="h-3.5 w-3.5 text-emerald-400" />
              ZapplyX.com
            </a>
            <button
              type="button"
              onClick={() => setIsResumeOpen(true)}
              className="inline-flex items-center gap-2 rounded-md border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-xs sm:text-sm text-zinc-100 transition hover:border-emerald-500 hover:bg-zinc-800 cursor-pointer"
            >
              <FileText className="h-4 w-4 text-emerald-400" />
              <span>Resume PDF</span>
            </button>
          </div>
        </div>
      </header>

      <main className="relative mx-auto flex max-w-7xl flex-col gap-14 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        {/* Hero Section */}
        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl border border-zinc-800 bg-zinc-950/90 p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-zinc-500">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.65)]" />
                  Available for AI & Backend Engineering Roles
                </div>
                <a
                  href={profile.zapplyxUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-400 hover:underline"
                >
                  <Zap className="h-3.5 w-3.5" /> Founder & AI Engineer @ ZapplyX
                </a>
              </div>

              <div className="space-y-4">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-zinc-500">
                  Engineering Profile
                </p>
                <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  {profile.name}
                </h2>
                <p className="text-base sm:text-lg text-emerald-400 font-medium leading-snug">
                  {profile.role}
                </p>
                <p className="max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
                  {profile.tagline}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-md border border-emerald-500 bg-emerald-500 px-4 py-2 text-sm font-semibold text-zinc-950 shadow-[0_0_15px_rgba(16,185,129,0.3)] transition hover:bg-emerald-400"
                >
                  <FolderGit2 className="h-4 w-4" />
                  Explore Projects
                </a>
                <button
                  type="button"
                  onClick={() => setIsResumeOpen(true)}
                  className="inline-flex items-center gap-2 rounded-md border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:border-emerald-500 hover:bg-zinc-800 cursor-pointer"
                >
                  <FileText className="h-4 w-4 text-emerald-400" />
                  View Resume PDF
                </button>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-sm text-zinc-300 transition hover:border-zinc-700 hover:text-white"
                >
                  <Mail className="h-4 w-4 text-zinc-400" />
                  Contact
                </a>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-4"
                >
                  <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                    {stat.label}
                  </p>
                  <div className="mt-3 flex items-end justify-between gap-2">
                    <p className="font-mono text-sm sm:text-base font-semibold text-zinc-100">{stat.value}</p>
                    <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.15em] text-emerald-400 border border-emerald-500/20">
                      {stat.meta}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Technical Summary Card */}
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="rounded-2xl border border-zinc-800 bg-zinc-950/90 p-6 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-zinc-500">
                  Technical Summary
                </p>
                <Brain className="h-4 w-4 text-emerald-400" />
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-3.5">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-emerald-400" />
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-semibold">
                    Education & Academics
                  </p>
                </div>
                <p className="mt-1.5 text-xs text-zinc-200 font-medium">{profile.education}</p>
                <p className="mt-0.5 text-[11px] text-zinc-400">Relevant Coursework: Data Structures & Algorithms, OOP, DBMS</p>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-3.5">
                <div className="flex items-center gap-2">
                  <Brain className="h-4 w-4 text-emerald-400" />
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-semibold">
                    AI & LLM Systems
                  </p>
                </div>
                <p className="mt-1.5 font-mono text-[11px] text-emerald-400 leading-relaxed">
                  LLMs, Prompt Engineering, AI Evaluation, Embeddings, Tool Calling, Multi-Agent Systems, RAG, Realtime Voice AI (LiveKit, Deepgram, ElevenLabs)
                </p>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-3.5">
                <div className="flex items-center gap-2">
                  <Layers className="h-4 w-4 text-emerald-400" />
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-semibold">
                    Backend & Distributed Systems
                  </p>
                </div>
                <p className="mt-1.5 font-mono text-[11px] text-zinc-300 leading-relaxed">
                  FastAPI, Flask, Celery, Redis, MongoDB Atlas, PostgreSQL, WebSockets, Distributed Systems, Async Queues, Docker, Linux, Prometheus
                </p>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-3.5">
                <div className="flex items-center gap-2">
                  <Code2 className="h-4 w-4 text-emerald-400" />
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-semibold">
                    Languages & Tools
                  </p>
                </div>
                <p className="mt-1.5 font-mono text-[11px] text-zinc-300 leading-relaxed">
                  Python, C++, JavaScript, TypeScript, SQL, Git, Pytest, Playwright, Postman
                </p>
              </div>
            </div>
          </motion.aside>
        </section>

        {/* Projects Section - Clean & Uniform Cards */}
        <section id="projects" className="space-y-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-zinc-500">
                Engineering Showcase
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                Featured Systems & Projects
              </h2>
            </div>
            <p className="text-xs text-zinc-400 font-mono">
              Production backends, multi-agent frameworks, realtime voice & AI decision engines
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-950/90 p-6 flex flex-col justify-between hover:border-zinc-700 transition"
              >
                <div>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500">
                        {project.type}
                      </span>
                      <h3 className="mt-1 text-xl font-semibold text-zinc-100">
                        {project.title}
                      </h3>
                    </div>
                    {project.badge ? (
                      <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] uppercase text-emerald-400 border border-emerald-500/20">
                        {project.badge}
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {project.description}
                  </p>

                  <div className="mt-4 space-y-2">
                    {project.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="h-3.5 w-3.5 mt-0.5 flex-none text-emerald-400" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/80">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-zinc-800 bg-zinc-900/60 px-2.5 py-0.5 font-mono text-[10px] text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-md border border-emerald-500 bg-emerald-500 px-3.5 py-1.5 text-xs font-semibold text-zinc-950 transition hover:bg-emerald-400"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        <span>Live Site / Demo</span>
                      </a>
                    ) : null}
                    {project.repo ? (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-900 px-3.5 py-1.5 text-xs text-zinc-200 transition hover:border-zinc-700 hover:bg-zinc-800"
                      >
                        <Github className="h-3.5 w-3.5" />
                        <span>Source Code</span>
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience & Research Timeline */}
        <section id="experience" className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/90 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-zinc-500">
                Experience & Research
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                Engineering Timeline
              </h2>
              <p className="mt-4 text-sm leading-7 text-zinc-300">
                From architecting production AI platforms like <strong className="text-emerald-400">ZapplyX</strong> (serving 30+ users and 12,000+ outreach profiles) and <strong className="text-emerald-400">VoiceHire</strong> to DSP hardware optimization metaheuristics and competitive programming, this timeline outlines major systems milestones.
              </p>
            </div>

            <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 font-mono text-xs text-zinc-400 space-y-2">
              <p className="text-emerald-400 font-semibold uppercase tracking-wider text-[11px]">Core Highlights</p>
              <p>• 6 Autonomous Agents coordinated with FastAPI, Celery & Redis</p>
              <p>• 34 DSP Benchmarks evaluated across 7 metaheuristics</p>
              <p>• Top 4,000 / 2 Lakh+ teams in EY Techathon (Stratabid™)</p>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/90 p-6 sm:p-8">
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={item.label} className="grid gap-4 md:grid-cols-[110px_1fr]">
                  <div className="relative">
                    <div className="font-mono text-xs uppercase tracking-[0.15em] text-emerald-400 font-medium">
                      {item.year}
                    </div>
                    {index < timeline.length - 1 ? (
                      <div className="absolute left-[9px] top-7 h-[calc(100%+24px)] w-px bg-zinc-800" />
                    ) : null}
                  </div>

                  <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
                    <div className="absolute left-[-28px] top-5 hidden h-5 w-5 rounded-full border border-zinc-700 bg-zinc-950 md:block">
                      <div className="m-[5px] h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-zinc-100">{item.label}</h3>
                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-zinc-400">{item.summary}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.metrics.map((metric) => (
                        <span
                          key={metric}
                          className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 font-mono text-[10px] text-zinc-300"
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

        {/* Certificates & Verified Credentials Section */}
        <section id="certificates" className="space-y-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-zinc-500">
                Official Credentials
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                Certificates & Verified Records
              </h2>
            </div>
            <div className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 font-mono text-xs text-amber-300 flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-amber-400" />
              <span>{certificates.length} Verified Credentials</span>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="group cursor-pointer rounded-2xl border border-zinc-800 bg-zinc-950/90 p-5 sm:p-6 transition hover:border-emerald-500/50 hover:bg-zinc-900/60 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <span className="rounded-full border border-zinc-800 bg-zinc-900 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-300">
                      {cert.tag}
                    </span>
                    <span className="font-mono text-[11px] text-zinc-500">{cert.dates.split(" ")[0]}</span>
                  </div>

                  {cert.image ? (
                    <div className="relative mt-3 h-36 w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 group-hover:border-emerald-500/40 transition">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="h-full w-full object-cover object-top group-hover:scale-105 transition duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
                      <span className="absolute bottom-2 right-2 rounded-md bg-zinc-950/80 px-2 py-0.5 font-mono text-[9px] text-emerald-300 backdrop-blur border border-emerald-500/20 flex items-center gap-1">
                        <ExternalLink className="h-2.5 w-2.5" />
                        <span>Inspect Image</span>
                      </span>
                    </div>
                  ) : null}

                  <h3 className="mt-4 text-lg font-semibold text-zinc-100 group-hover:text-emerald-300 transition">
                    {cert.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs font-semibold text-emerald-400">
                    {cert.issuer}
                  </p>

                  <div className="mt-3 rounded-lg border border-amber-500/20 bg-amber-500/5 p-2.5">
                    <p className="text-xs font-medium text-amber-300">
                      {cert.highlight}
                    </p>
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-zinc-400 line-clamp-3">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                  <span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-200 transition flex items-center gap-1">
                    <span>View Record</span>
                    <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <BadgeCheck className="h-4 w-4 text-emerald-400" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements & Distinctions */}
        <section id="achievements" className="space-y-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-zinc-500">
              Honors & Distinctions
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              Key Achievements & Contest Ranks
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400">
              National competitive programming contest ranks, machine learning selections, and hackathon recognitions.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/90 p-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {achievements.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 text-xs sm:text-sm leading-relaxed text-zinc-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h4 className="font-semibold text-zinc-100 text-xs sm:text-sm">{item.title}</h4>
                      {item.badge ? (
                        <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 font-mono text-[9px] text-emerald-400 border border-emerald-500/20 whitespace-nowrap">
                          {item.badge}
                        </span>
                      ) : null}
                    </div>
                    <p className="text-xs text-zinc-400 leading-normal">{item.text}</p>
                  </div>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition"
                    >
                      <span>{item.linkText || "View Link"}</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Surface */}
        <section id="contact" className="rounded-2xl border border-zinc-800 bg-zinc-950/90 p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-zinc-500">
            Contact Surface
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
            Connect & Collaborate
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 transition hover:border-emerald-500/60 hover:bg-zinc-900/80"
            >
              <Mail className="h-5 w-5 text-emerald-400" />
              <p className="mt-4 text-xs uppercase tracking-[0.22em] text-zinc-500">
                Email
              </p>
              <p className="mt-1 font-mono text-sm text-zinc-200">{profile.email}</p>
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s+/g, "")}`}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 transition hover:border-amber-500/60 hover:bg-zinc-900/80"
            >
              <Phone className="h-5 w-5 text-amber-400" />
              <p className="mt-4 text-xs uppercase tracking-[0.22em] text-zinc-500">
                Phone
              </p>
              <p className="mt-1 font-mono text-sm text-zinc-200">{profile.phone}</p>
            </a>
          </div>

          <div className="mt-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">
              Profiles & Coding Handles
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
              Role & Engagement Alignment
            </p>
            <div className="mt-4 space-y-3">
              {[
                "AI Engineering, LLM Systems & Agentic Orchestration roles",
                "Backend Engineering & Distributed Systems (FastAPI, Celery, Redis, MongoDB Atlas, PostgreSQL)",
                "Realtime Voice AI, Audio Pipelines & Sub-150ms Turn Detection",
                "Hardware Optimization & Low-Latency Algorithmic Systems Research",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-zinc-800/80 bg-zinc-950/50 py-8 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
            Engineered by <span className="text-zinc-300 font-sans font-semibold">Devansh Shukla</span> | Founder & AI Engineer @{" "}
            <a href="https://www.zapplyx.com" target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">
              ZapplyX
            </a>
          </p>
        </div>
      </footer>

      {/* Modal for Resume Viewer */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      {/* Modal for Certificate Inspection */}
      <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
    </div>
  );
}

export default App;
