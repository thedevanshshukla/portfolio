import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  Award,
  BookOpen,
  Briefcase,
  Check,
  ChevronRight,
  Code2,
  Copy,
  Download,
  ExternalLink,
  FileText,
  Github,
  Layers,
  Linkedin,
  Loader2,
  Mail,
  Menu,
  MessageCircle,
  Palette,
  Phone,
  Send,
  Terminal,
  Trophy,
  User,
  X,
} from "lucide-react";
import portraitImg from "./portrait.png";

const ACCENT_THEMES = [
  { id: "emerald", label: "Cyber Emerald", dot: "bg-emerald-400" },
  { id: "cyan", label: "Electric Cyan", dot: "bg-cyan-400" },
  { id: "violet", label: "Neural Violet", dot: "bg-purple-400" },
  { id: "amber", label: "Synth Amber", dot: "bg-amber-400" },
  { id: "rose", label: "Crimson Rose", dot: "bg-rose-500" },
];

const BG_STYLES = [
  { id: "dots", label: "Cyber Dots", desc: "Linear / Vercel micro-grid" },
  { id: "aurora", label: "Deep Aurora", desc: "Ambient floating glows" },
  { id: "grid", label: "Blueprint Grid", desc: "Architectural lines" },
  { id: "solid", label: "Obsidian Solid", desc: "Original pure pitch black" },
];

const NAV_ROUTES = [
  { id: "projects", label: "PROJECTS", icon: Layers },
  { id: "about", label: "ABOUT ME", icon: User },
  { id: "experience", label: "EXPERIENCE", icon: Briefcase },
  { id: "working-on", label: "WORKING ON", icon: Terminal },
  { id: "programming", label: "PROGRAMMING", icon: Code2 },
  { id: "certificates", label: "CERTIFICATES", icon: Award },
  { id: "education", label: "EDUCATION", icon: BookOpen },
  { id: "contact", label: "CONTACT ME", icon: Mail },
];

const SOCIAL_LINKS = {
  github: "https://github.com/thedevanshshukla",
  linkedin: "https://www.linkedin.com/in/devansh-shukla-dev",
  twitter: "https://x.com/Devansh_shu",
  leetcode: "https://leetcode.com/u/int_ro_ve_rt/",
  codechef: "https://www.codechef.com/users/i_am_devansh",
  codeforces: "https://codeforces.com/profile/int_ro_ve_rt",
  email: "dshukl2004@gmail.com",
  phone: "+91 9289153800",
};

function SpotlightCard({ children, className = "", onClick, ...props }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className={`spotlight-card spotlight-border ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

// Custom Platform Icons
const LeetCodeIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.815 3.521 5.858 5.858 0 0 0 2.457-.345 5.76 5.76 0 0 0 1.624-.877l3.665-3.665c.574-.574.574-1.503 0-2.077-.574-.574-1.503-.574-2.077 0l-3.665 3.665a3.003 3.003 0 0 1-1.047.608 2.924 2.924 0 0 1-2.128-.088 2.984 2.984 0 0 1-1.616-1.597 2.98 2.98 0 0 1-.038-2.222 2.96 2.96 0 0 1 .632-1.077l3.854-4.126 5.406-5.788c.574-.574.574-1.503 0-2.077A1.37 1.37 0 0 0 13.483 0z" />
    <path d="M9.828 14.828a1.468 1.468 0 0 0 0 2.077l2.586 2.586a1.468 1.468 0 0 0 2.077 0l7.707-7.707a1.468 1.468 0 0 0 0-2.077l-7.707-7.707a1.468 1.468 0 0 0-2.077 0l-2.586 2.586a1.468 1.468 0 0 0 0 2.077l5.621 5.621-5.621 5.621z" fill="#FFA116" />
  </svg>
);

const CodeChefIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.96 2C6.46 2 2 6.46 2 11.96c0 4.4 2.85 8.13 6.81 9.42.5.09.68-.22.68-.48v-1.7c-2.77.6-3.36-1.34-3.36-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48 3.96-1.3 6.8-5.03 6.8-9.42C22 6.46 17.46 2 11.96 2z" />
    <circle cx="12" cy="12" r="3.5" fill="#5B4638" />
  </svg>
);

const CodeforcesIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.5 7.5a1.5 1.5 0 0 1 1.5 1.5v11a1.5 1.5 0 0 1-3 0v-11a1.5 1.5 0 0 1 1.5-1.5z" fill="#FFD700" />
    <path d="M12 3a1.5 1.5 0 0 1 1.5 1.5v15.5a1.5 1.5 0 0 1-3 0V4.5A1.5 1.5 0 0 1 12 3z" fill="#0057B7" />
    <path d="M19.5 12a1.5 1.5 0 0 1 1.5 1.5v6.5a1.5 1.5 0 0 1-3 0v-6.5a1.5 1.5 0 0 1 1.5-1.5z" fill="#FF0000" />
  </svg>
);

const XTwitterIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

import {
  INITIAL_GITHUB_CONTRIBUTIONS,
  INITIAL_GITHUB_TOTAL,
  INITIAL_LEETCODE_CALENDAR,
  INITIAL_LEETCODE_STATS,
} from "./activityData";

// Format real GitHub daily array into 7-day columns
function formatGitHubWeeks(contributions) {
  if (!contributions || contributions.length === 0) return [];
  const weeks = [];
  let currentWeek = [];
  contributions.forEach((day) => {
    currentWeek.push(day);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  });
  if (currentWeek.length > 0) weeks.push(currentWeek);
  return weeks;
}

// Format real LeetCode submissionCalendar timestamp object into 52 weeks
function formatLeetCodeWeeks(submissionCalendar) {
  const cal =
    typeof submissionCalendar === "string"
      ? JSON.parse(submissionCalendar)
      : submissionCalendar || {};
  const days = [];
  const now = new Date();
  for (let i = 363; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    d.setHours(0, 0, 0, 0);
    const dateStr = d.toISOString().split("T")[0];
    const timestampSec = Math.floor(d.getTime() / 1000);

    let count = 0;
    for (const [ts, c] of Object.entries(cal)) {
      const tsNum = Number(ts);
      if (Math.abs(tsNum - timestampSec) < 43200) {
        count = Number(c);
        break;
      }
    }
    const level =
      count === 0 ? 0 : count <= 2 ? 1 : count <= 5 ? 2 : count <= 9 ? 3 : 4;
    days.push({ date: dateStr, count, level });
  }

  const weeks = [];
  let currentWeek = [];
  days.forEach((day) => {
    currentWeek.push(day);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  });
  if (currentWeek.length > 0) weeks.push(currentWeek);
  return weeks;
}

export default function App() {
  const [activeRoute, setActiveRoute] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState("emerald");
  const [bgStyle, setBgStyle] = useState("dots");
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState("idle"); // "idle" | "submitting" | "success" | "error"
  const [errorMessage, setErrorMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;
    setFormStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${SOCIAL_LINKS.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          _subject: `Portfolio Message from ${formData.name.trim()}`,
          _captcha: "false",
          _template: "table",
        }),
      });

      const data = await response.json();
      if (response.ok || data.success === "true" || data.success === true) {
        setFormStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          setFormStatus("idle");
        }, 5000);
      } else {
        throw new Error(data.message || "Direct delivery could not be completed.");
      }
    } catch (err) {
      console.warn("Direct transmission error:", err);
      setFormStatus("error");
      setErrorMessage("Direct delivery could not connect. You can retry or send via your email client below.");
    }
  };

  const handleFallbackMailto = () => {
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name || "Portfolio Visitor"}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:${SOCIAL_LINKS.email}?subject=${subject}&body=${body}`, "_blank");
  };

  // Real live GitHub & LeetCode Activity States (Hydrated with exact data)
  const [githubStats, setGithubStats] = useState(() => ({
    total: INITIAL_GITHUB_TOTAL,
    streak: 4,
    weeks: formatGitHubWeeks(INITIAL_GITHUB_CONTRIBUTIONS),
    isLoading: false,
  }));

  const [leetCodeStats, setLeetCodeStats] = useState(() => ({
    ...INITIAL_LEETCODE_STATS,
    weeks: formatLeetCodeWeeks(INITIAL_LEETCODE_CALENDAR),
    isLoading: false,
  }));

  // Fetch Live Real Data on mount
  useEffect(() => {
    // 1. Fetch Real Live GitHub Activity
    fetch("https://github-contributions-api.jogruber.de/v4/thedevanshshukla?y=last")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.contributions && data.contributions.length > 0) {
          const weeks = formatGitHubWeeks(data.contributions);
          const total = data.total?.lastYear ?? data.total?.[new Date().getFullYear()] ?? INITIAL_GITHUB_TOTAL;
          let streak = 0;
          const reversed = [...data.contributions].reverse();
          for (const d of reversed) {
            if (d.count > 0) streak++;
            else break;
          }
          setGithubStats({
            total,
            streak: Math.max(streak, 1),
            weeks,
            isLoading: false,
          });
        }
      })
      .catch((err) => {
        console.warn("Using offline snapshot for GitHub:", err);
      });

    // 2. Fetch Real Live LeetCode Profile & Activity
    fetch("https://alfa-leetcode-api.onrender.com/userProfile/int_ro_ve_rt")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          const acStats = data.matchedUserStats?.acSubmissionNum || [];
          const allCount = acStats.find((s) => s.difficulty === "All")?.count || INITIAL_LEETCODE_STATS.totalSolved;
          const easyCount = acStats.find((s) => s.difficulty === "Easy")?.count || INITIAL_LEETCODE_STATS.easySolved;
          const mediumCount = acStats.find((s) => s.difficulty === "Medium")?.count || INITIAL_LEETCODE_STATS.mediumSolved;
          const hardCount = acStats.find((s) => s.difficulty === "Hard")?.count || INITIAL_LEETCODE_STATS.hardSolved;

          let weeks = [];
          if (data.submissionCalendar) {
            weeks = formatLeetCodeWeeks(data.submissionCalendar);
          }

          setLeetCodeStats((prev) => ({
            ...prev,
            totalSolved: allCount,
            easySolved: easyCount,
            mediumSolved: mediumCount,
            hardSolved: hardCount,
            weeks: weeks.length > 0 ? weeks : prev.weeks,
            isLoading: false,
          }));
        }
      })
      .catch((err) => {
        console.warn("Using offline snapshot for LeetCode:", err);
      });

    // 3. Fetch Live LeetCode Contest Stats
    fetch("https://alfa-leetcode-api.onrender.com/int_ro_ve_rt/contest")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.contestRating) {
          setLeetCodeStats((prev) => ({
            ...prev,
            rating: Math.round(data.contestRating),
            topPercentage: data.contestTopPercentage || prev.topPercentage,
            globalRanking: data.contestGlobalRanking || prev.globalRanking,
            badge: data.contestBadges?.name || "Knight",
          }));
        }
      })
      .catch((err) => {
        console.warn("Using offline snapshot for LeetCode contest:", err);
      });
  }, []);

  // Live Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Sync hash routing
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      if (!hash || hash === "home") {
        setActiveRoute("home");
      } else if (NAV_ROUTES.some((r) => r.id === hash)) {
        setActiveRoute(hash);
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const navigateTo = (routeId) => {
    setActiveRoute(routeId);
    window.location.hash = routeId === "home" ? "" : routeId;
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(SOCIAL_LINKS.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const projectsList = [
    // Flagship Top 4 Projects (Kept at top)
    {
      id: "voicehire",
      title: "VoiceHire",
      year: "2026",
      tags: ["FastAPI", "WebSockets", "Deepgram STT", "ElevenLabs", "LiveKit", "Celery", "MongoDB"],
      desc: "Full-duplex autonomous conversational AI interviewing platform with sub-150ms turn-taking latency. Streams audio bidirectionally over WebSockets, orchestrates dynamic evaluation rubrics, processes asynchronous candidate reports via Celery worker pools, and benchmarks candidate responses deterministically.",
      demoUrl: "https://voice-hire-devansh-shuklas-projects.vercel.app/",
      sourceUrl: "https://github.com/thedevanshshukla/Voice_Hire",
    },
    {
      id: "courtroom",
      title: "Courtroom Trading System",
      year: "2026",
      tags: ["Python", "Multi-Agent", "Algorithmic Trading", "Backtesting", "FastAPI", "Docker", "AsyncIO"],
      desc: "Adversarial multi-agent quantitative validation engine. Simulates courtroom debates between bullish and bearish analyst agents, arbitrated by risk and compliance judges to stress-test trading hypotheses before executing automated orders with strict margin and risk guardrails.",
      demoUrl: "https://courtroom-trading.vercel.app/",
      sourceUrl: "https://github.com/thedevanshshukla/courtroom-trading/",
    },
    {
      id: "stratabid",
      title: "Stratabid™ (EY Techathon)",
      year: "2025",
      tags: ["Python", "FAISS Vector DB", "LangChain", "FastAPI", "Multi-Agent FSM", "Docker"],
      desc: "Agentic RFP orchestration system with 4 parallel agent workflows. Built a hybrid retrieval pipeline combining FAISS vector search with weighted rule-based scoring across 100+ specification parameters, reducing bid turnaround time by up to 80%.",
      demoUrl: null,
      sourceUrl: "https://github.com/thedevanshshukla/Stratabid",
    },
    {
      id: "glidepay",
      title: "GlidePAY",
      year: "2025",
      tags: ["Flask", "React", "MongoDB", "REST API", "Payment Gateway"],
      desc: "Custom UPI-style peer-to-peer payment app serving active users. Implemented MongoDB transactions and session-based authentication to support secure payment flows, reducing API latency by 35% via route optimizations.",
      demoUrl: "https://glide-pay-payment-gateway-51l4.vercel.app/",
      sourceUrl: "https://github.com/thedevanshshukla/GlidePAY-paymentGateway",
    },

    // Additional Public GitHub Repositories
    {
      id: "et-hackathon",
      title: "ET AI Cost Intelligence (ET Hackathon)",
      year: "2026",
      tags: ["Python", "FastAPI", "FinOps", "Cost Intelligence", "Automation", "Render"],
      desc: "AI-powered cost intelligence and enterprise approval automation engine built for The Economic Times AI Hackathon. Integrates multi-tiered approval workflows, anomaly detection on budget deviations, and comprehensive audit telemetry.",
      demoUrl: "https://et-hackathon-j1c2.onrender.com/",
      sourceUrl: "https://github.com/thedevanshshukla/et-hackathon",
    },
    {
      id: "safetyai",
      title: "SafetyAI — Industrial Hazard Intelligence",
      year: "2026",
      tags: ["Multi-Agent AI", "IoT Telemetry", "SCADA", "Predictive Analytics", "JavaScript"],
      desc: "Multi-agent industrial safety intelligence system for hazard prediction, plant sensor anomaly detection, and automated operational decision support across critical infrastructure and manufacturing lines.",
      demoUrl: null,
      sourceUrl: "https://github.com/thedevanshshukla/safetyai",
    },
    {
      id: "aegis-crisis",
      title: "Aegis Crisis Intelligence System",
      year: "2025",
      tags: ["Multi-Agent AI", "Crisis Management", "Disaster Response", "Decision Support", "Autonomous Systems"],
      desc: "Decentralized multi-agent crisis intelligence engine for adaptive emergency resource allocation, real-time evacuation routing, and automated disaster-response decision support under extreme uncertainty.",
      demoUrl: null,
      sourceUrl: "https://github.com/thedevanshshukla/aegis-crisis-system",
    },
    {
      id: "smart-expense-tracker",
      title: "Smart Expense Tracker",
      year: "2025",
      tags: ["Python", "Machine Learning", "Personal Finance", "Analytics", "Data Visualization"],
      desc: "AI-enhanced personal finance and expense tracking engine featuring automatic transaction categorization, spending pattern predictive analytics, budget threshold alerts, and multi-format reporting.",
      demoUrl: null,
      sourceUrl: "https://github.com/thedevanshshukla/smart-expense-tracker",
    },
    {
      id: "magic-pin",
      title: "MagicPin Messaging & Engagement Engine",
      year: "2025",
      tags: ["FastAPI", "Python", "Rule-based Engine", "Conversation AI", "Trigger Automation"],
      desc: "Deterministic high-throughput FastAPI messaging engine built for trigger-based business customer engagement, automated workflow routing, and intelligent reply handling.",
      demoUrl: null,
      sourceUrl: "https://github.com/thedevanshshukla/magic-pin",
    },
    {
      id: "book-review",
      title: "BookReview — MERN Community Platform",
      year: "2025",
      tags: ["React", "Node.js", "Express", "MongoDB", "JWT Auth", "REST API"],
      desc: "Full-stack community platform for book discovery, verified user reviews, rating analytics, and collection curation with granular access controls and responsive UI.",
      demoUrl: "https://book-review-flame.vercel.app/",
      sourceUrl: "https://github.com/thedevanshshukla/book-review",
    },
  ];

  const experienceList = [
    {
      role: "AI Engineering Intern",
      org: "ZapplyX",
      period: "Jan 2026 – Present",
      type: "Internship",
      link: "https://www.zapplyx.com",
      summary:
        "Building core backend infrastructure, low-latency audio processing pipelines, and asynchronous Celery worker systems for production AI agent applications.",
      stack: [
        "FastAPI",
        "Celery",
        "Redis",
        "MongoDB",
        "Docker",
        "Real-Time Audio Pipelines",
        "Whisper",
        "LLM Orchestration",
      ],
      bullets: [
        "Designed and scaled asynchronous worker infrastructure using Celery & Redis to handle high-concurrency audio processing pipelines with zero blocking on core API threads.",
        "Architected high-throughput FastAPI microservices and optimized MongoDB schemas for real-time AI conversational sessions and analytics storage.",
        "Integrated real-time speech-to-text (Whisper) and generative LLM orchestration layers to support autonomous interview evaluations.",
        "Implemented structured telemetry and error-handling mechanisms that boosted system reliability and eliminated worker task starvation.",
      ],
    },
    {
      role: "Undergraduate Researcher – Hardware Security & Digital IP Watermarking",
      org: "IIIT Bhopal",
      period: "Jan 2026 – Present",
      type: "Research",
      link: "https://iiitbhopal.ac.in/home",
      summary:
        "Conducted research on digital IP protection and fault-tolerant hardware watermarking algorithms for digital signal architectures, simulating gate-level fault tolerance and low-power VLSI design.",
      stack: ["Verilog", "ModelSim", "VLSI Design", "Hardware Security", "FPGA", "Digital Signal Processing"],
      bullets: [
        "Researched and modeled robust digital IP watermarking techniques for ASIC and FPGA hardware architectures.",
        "Simulated gate-level fault tolerance and zero-degradation watermark embedding algorithms using ModelSim and Xilinx Vivado.",
        "Evaluated silicon area overhead, critical path timing, and power consumption across standard benchmark circuits.",
      ],
    },
  ];

  const workingOnList = [
    {
      id: "voicehire",
      title: "VoiceHire",
      subtitle: "Full-Duplex Conversational Audio AI Engine",
      githubUrl: "https://github.com/thedevanshshukla/Voice_Hire",
      liveUrl: "https://voice-hire-devansh-shuklas-projects.vercel.app/",
      desc: "An enterprise conversational voice platform that autonomously conducts adaptive system design and resume technical interviews with sub-150ms latency.",
      howItWorks: [
        "Sub-150ms turn-taking architecture with real-time interruptibility (Voice Activity Detection).",
        "Streaming Speech-to-Text via Deepgram Nova-2 with speculative token generation.",
        "Dynamic evaluation rubrics and automated candidate response benchmarking.",
        "Asynchronous telemetry processing and report compilation via Celery worker pools.",
      ],
      techStack: [
        { label: "Backend", val: "FastAPI, Python, Celery, MongoDB" },
        { label: "Streaming", val: "WebSockets, WebRTC, LiveKit" },
        { label: "AI", val: "Deepgram Nova-2, OpenAI GPT-4o, ElevenLabs" },
        { label: "Infra", val: "Docker, Redis, Vercel" },
      ],
    },
    {
      id: "courtroom",
      title: "Courtroom Trading",
      subtitle: "Adversarial Multi-Agent Trading System",
      githubUrl: "https://github.com/thedevanshshukla/courtroom-trading",
      liveUrl: "https://courtroom-trading.vercel.app/",
      desc: "An explainable multi-agent quantitative decision engine simulating courtroom debates between bullish, bearish, and judge agents to validate trading strategies.",
      howItWorks: [
        "Bullish and Bearish analyst agents present adversarial market evidence and momentum signals.",
        "Risk and compliance Judge agents arbitrate signals and enforce risk guardrails.",
        "Real-time order book simulation with liquidity slippage modeling.",
        "Interactive stream of structured agent reasoning traces and confidence scores.",
      ],
      techStack: [
        { label: "Backend", val: "Python, FastAPI, AsyncIO, LangGraph" },
        { label: "Data", val: "Market Feed APIs, PostgreSQL, Pandas, NumPy" },
        { label: "AI", val: "Multi-Agent Reasoning, Claude 3.5, OpenAI" },
        { label: "Infra", val: "Docker, Vercel" },
      ],
    },
    {
      id: "stratabid",
      title: "Stratabid™",
      subtitle: "Agentic RFP & Tender Intelligence Platform",
      githubUrl: "https://github.com/thedevanshshukla/Stratabid",
      liveUrl: null,
      desc: "A multi-agent RFP orchestration engine built for EY Techathon 5.0, automating complex enterprise bid evaluation, compliance checks, and document synthesis.",
      howItWorks: [
        "Four-node agent orchestration workflow: Parser, Retriever, Scorer, and Assembler.",
        "Hybrid retrieval combining FAISS vector search with weighted rule scoring across 100+ parameters.",
        "Automated compliance risk matrix and fail-safe bid proposal drafting.",
        "Reduced enterprise tender turnaround time by up to 80%.",
      ],
      techStack: [
        { label: "Backend", val: "Python, FastAPI, LangChain, FAISS Vector DB" },
        { label: "Multi-Agent", val: "StateGraph FSM, Pydantic Structured Output" },
        { label: "AI", val: "OpenAI GPT-4, Document Embeddings" },
        { label: "Infra", val: "Docker, Microservices" },
      ],
    },
    {
      id: "et-hackathon",
      title: "ET AI Cost Intelligence",
      subtitle: "Autonomous FinOps & Approval Engine",
      githubUrl: "https://github.com/thedevanshshukla/et-hackathon",
      liveUrl: "https://et-hackathon-j1c2.onrender.com/",
      desc: "An intelligent financial governance system built for The Economic Times AI Hackathon to automate expense audits and multi-tier budget approvals.",
      howItWorks: [
        "Automated invoice OCR and policy violation anomaly detection.",
        "Multi-tier dynamic approval routing based on expense velocity and risk scores.",
        "Real-time budget forecasting and department expenditure telemetry.",
        "Audit-ready ledger generation with verifiable cryptographic verification.",
      ],
      techStack: [
        { label: "Backend", val: "Python, FastAPI, SQLite / PostgreSQL" },
        { label: "AI", val: "Vision-LLM Extraction, Anomaly Detection" },
        { label: "Frontend", val: "React, Tailwind CSS" },
        { label: "Infra", val: "Render, Docker" },
      ],
    },
  ];

  const educationList = [
    {
      period: "September 2023 – June 2027",
      institution: "Indian Institute of Information Technology, Bhopal",
      degree: "Bachelor of Technology in Computer Science & Engineering (CSE)",
      score: "GPA: 8.44",
      courses: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "DBMS",
        "Operating Systems",
        "Computer Networks",
        "Theory of Computation",
      ],
      link: "https://iiitbhopal.ac.in/home",
    },
    {
      period: "April 2021 – March 2023",
      institution: "DAV Public School",
      degree: "Senior Secondary High School (12th)",
      score: "Percentage: 92.8%",
      courses: ["Physics", "Chemistry", "Maths", "English", "Computer Science"],
      link: "https://davpvghaziabad.edu.in/",
    },
    {
      period: "April 2011 – March 2021",
      institution: "ST. TERESA’S CONVENT SCHOOL",
      degree: "Primary High School (10th)",
      score: "Percentage: 90.2%",
      courses: [],
      link: "https://www.stteresaconventschool.org/",
    },
  ];

  const keyAchievementsList = [
    {
      icon: Trophy,
      text: "Achieved Top 2.5% nationwide selection in Amazon ML Summer School 2026 out of 1.34 Lakh+ applicants.",
    },
    {
      icon: Trophy,
      text: "National Semifinalist in EY Techathon 5.0 (Stratabid™) — Team Lead for 5-member team, placing in Top 4,000 out of 2 Lakh+ teams.",
    },
    {
      icon: Award,
      text: "National Semifinalist in Flipkart GRiD 8.0 (SDE Track) — ranked among Top 2,000 candidates out of 1.65+ Lakh participants nationwide.",
    },
    {
      icon: Code2,
      text: "Competitive Programming: Knight on LeetCode (1902 rating, Top 3.9%), 4-Star on CodeChef (1824 peak, Div 1), Specialist on Codeforces (1506). Solved 760+ DSA problems across platforms.",
    },
    {
      icon: Terminal,
      text: "National Finalist in ET AI Hackathon & Campus Stars 2026, selected among India's top engineering talents after multi-stage evaluations.",
    },
    {
      icon: BookOpen,
      text: "National Semifinalist in Tata Imagination Challenge 2025 across prestigious business problem-solving case competitions.",
    },
  ];

  const honorsList = [
    {
      id: "amazon-ml",
      title: "Amazon ML Summer School",
      org: "Amazon",
      badge: "Top 2.5% Nationwide Selection",
      desc: "Selected among top 3,000 nationwide out of 1.34 Lakh+ applicants for Amazon's flagship Machine Learning program.",
      pdfUrl: "/certificates/pdf/amazon_ml_summer_school_2026.pdf",
      imgUrl: "/certificates/amazon_ml_summer_school_2026.png",
      date: "2026",
    },
    {
      id: "et-campus",
      title: "ET AI Hackathon & Campus Stars",
      org: "The Economic Times",
      badge: "National Finalist",
      desc: "Selected among India's brightest engineering talents after multi-stage aptitude, logic, and coding evaluations.",
      pdfUrl: "/certificates/pdf/et_ai_hackathon_2026.pdf",
      imgUrl: "/certificates/et_ai_hackathon_2026.png",
      date: "2026",
    },
    {
      id: "ey-techathon",
      title: "EY Techathon 5.0 (Stratabid™)",
      org: "Ernst & Young",
      badge: "National Semifinalist · Top 4,000 / 2 Lakh+ Teams",
      desc: "Team Lead for Stratabid™, leading a 5-member team to build an autonomous agentic RFP orchestration system.",
      pdfUrl: "/certificates/pdf/ey_techathon_2026.pdf",
      imgUrl: "/certificates/ey_techathon_2026.png",
      date: "2025",
    },
    {
      id: "tata-imagination",
      title: "Tata Imagination Challenge",
      org: "Tata Group",
      badge: "National Semifinalist",
      desc: "Selected among top performers in national business problem-solving case competition.",
      pdfUrl: "/certificates/pdf/tata_imagination_challenge_2026.pdf",
      imgUrl: "/certificates/tata_imagination_challenge_2026.png",
      date: "2025",
    },
    {
      id: "flipkart-grid",
      title: "Flipkart GRiD 8.0 (SDE Track)",
      org: "Flipkart",
      badge: "National Semifinalist · Top 2,000 / 1.65 Lakh+ Participants",
      desc: "Qualified for the National Semifinals in the flagship Software Development (SDE) Track, ranking among the top 2,000 candidates out of 1.65+ Lakh participants across India.",
      pdfUrl: null,
      imgUrl: null,
      date: "2025",
    },
  ];

  return (
    <div
      className={`min-h-screen flex text-[#f1f5f9] font-sans selection:bg-emerald-500/30 selection:text-white relative overflow-x-hidden transition-colors duration-500 ${
        bgStyle === "dots"
          ? "bg-style-dots"
          : bgStyle === "grid"
          ? "bg-style-grid"
          : "bg-style-solid"
      }`}
    >
      {/* Background Ambience Layers */}
      {bgStyle === "dots" && (
        <>
          <div className="ambient-glow-top" />
          <div className="fixed inset-0 pointer-events-none z-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_85%)] bg-[#08090b]/40" />
        </>
      )}

      {bgStyle === "aurora" && (
        <>
          <div className="aurora-orb-top" />
          <div className="aurora-orb-bottom" />
        </>
      )}

      {bgStyle === "grid" && (
        <div className="ambient-glow-top opacity-50" />
      )}
      {/* Toast Notification */}
      <AnimatePresence>
        {copiedEmail && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-6 right-6 z-50 rounded-xl bg-emerald-500 text-zinc-950 font-semibold px-4 py-2.5 shadow-2xl flex items-center gap-2 backdrop-blur-md text-xs sm:text-sm"
          >
            <Check className="h-4 w-4 stroke-[3]" />
            <span>{SOCIAL_LINKS.email} copied!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE HEADER */}
      <header className="lg:hidden fixed top-0 inset-x-0 z-40 bg-[#08090b]/95 backdrop-blur-md border-b border-white/[0.08] px-5 py-3.5 flex items-center justify-between">
        <button
          onClick={() => navigateTo("home")}
          className="text-left font-spartan font-black text-lg tracking-widest text-white hover:text-emerald-400 transition"
        >
          DEVANSH.SHUKLA
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setResumeModalOpen(true)}
            className="rounded-full bg-white/[0.08] border border-white/10 px-3 py-1 font-mono text-[11px] text-zinc-300"
          >
            RESUME
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/[0.06] text-zinc-300"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-30 bg-[#08090b]/95 backdrop-blur-md pt-16 px-6 pb-6 flex flex-col justify-between"
          >
            <nav className="space-y-2 mt-4 font-mono text-sm uppercase tracking-wider">
              {NAV_ROUTES.map((route) => {
                const Icon = route.icon;
                const isActive = activeRoute === route.id;
                return (
                  <button
                    key={route.id}
                    onClick={() => navigateTo(route.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                      isActive
                        ? "sidebar-link-active font-bold text-white bg-white/[0.06]"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{route.label}</span>
                  </button>
                );
              })}
            </nav>

            <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-500">Theme</span>
              <div className="flex items-center gap-1.5">
                {ACCENT_THEMES.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTheme(t.id)}
                    className={`h-6 w-6 rounded-full ${t.dot} ${
                      theme === t.id ? "ring-2 ring-white scale-110" : "opacity-60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          DESKTOP PERSISTENT SIDEBAR
      ========================================================================= */}
      <aside className="hidden lg:flex w-64 flex-col justify-between fixed top-0 bottom-0 left-0 bg-[#0c0d11] border-r border-white/[0.07] z-30 px-4 py-6 overflow-y-auto">
        <div>
          {/* Header Link (Redirects to Home) - Centered and Enlarged without right-edge cutoff */}
          <div className="pb-1 text-center w-full px-1">
            <button
              onClick={() => navigateTo("home")}
              className="w-full text-center font-spartan font-black text-[20px] tracking-wide text-white hover:text-emerald-400 transition cursor-pointer uppercase block drop-shadow-sm whitespace-nowrap"
              title="Return to Home"
            >
              DEVANSH.SHUKLA
            </button>
          </div>

          {/* Animated Pixel Cat Mascot (Centered and Enlarged) */}
          <div className="my-3 flex items-center justify-center">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform duration-300 hover:scale-115 active:scale-95 cursor-pointer"
              title="Visit GitHub"
            >
              <img
                src="/bongo_cat.gif"
                alt="Animated Mascot - Devansh Shukla GitHub"
                className="h-14 w-auto object-contain select-none drop-shadow-md"
              />
            </a>
          </div>

          <hr className="border-white/[0.07] my-3.5" />

          {/* Navigation Routes - Center Aligned */}
          <nav className="space-y-1.5 font-mono text-xs uppercase tracking-wider">
            {NAV_ROUTES.map((route) => {
              const Icon = route.icon;
              const isActive = activeRoute === route.id;
              return (
                <button
                  key={route.id}
                  onClick={() => navigateTo(route.id)}
                  className={`w-full flex items-center justify-center gap-2.5 px-3 py-2.5 rounded-xl transition duration-150 text-center cursor-pointer ${
                    isActive
                      ? "sidebar-link-active font-bold text-white shadow-sm"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5 shrink-0 opacity-80" />
                  <span>{route.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer Controls (Clean Bottom Row with Resume & Color Palette) */}
        <div className="pt-4 border-t border-white/[0.07] flex items-center gap-2">
          <button
            onClick={() => setResumeModalOpen(true)}
            className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 py-2.5 px-3 font-mono text-xs text-zinc-200 transition group hover:border-emerald-500/30 cursor-pointer"
            title="Open Resume"
          >
            <FileText className="h-3.5 w-3.5 text-emerald-400 group-hover:scale-110 transition" />
            <span>RESUME</span>
          </button>

          <div className="relative">
            <button
              onClick={() => setThemeMenuOpen(!themeMenuOpen)}
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-zinc-400 hover:text-white transition cursor-pointer flex items-center justify-center"
              title="Change Accent Glow Theme"
            >
              <Palette className="h-4 w-4 text-emerald-400" />
            </button>

            <AnimatePresence>
              {themeMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  className="absolute bottom-full right-0 mb-2 p-3 rounded-2xl bg-zinc-900/95 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col gap-2.5 z-50 min-w-[210px]"
                >
                  <div>
                    <span className="font-mono text-[10px] text-zinc-400 font-bold uppercase tracking-wider block px-1 pb-1">
                      Accent Glow
                    </span>
                    <div className="flex flex-col gap-1">
                      {ACCENT_THEMES.map((t) => (
                        <button
                          key={t.id}
                          onClick={() => setTheme(t.id)}
                          className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg text-[11px] font-mono transition text-left cursor-pointer ${
                            theme === t.id
                              ? "bg-white/[0.08] text-white font-bold"
                              : "text-zinc-400 hover:text-zinc-200"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className={`h-2.5 w-2.5 rounded-full ${t.dot}`} />
                            <span>{t.label}</span>
                          </div>
                          {theme === t.id && <Check className="h-3 w-3 text-emerald-400" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  <hr className="border-white/10" />

                  <div>
                    <span className="font-mono text-[10px] text-zinc-400 font-bold uppercase tracking-wider block px-1 pb-1">
                      Background Style
                    </span>
                    <div className="flex flex-col gap-1">
                      {BG_STYLES.map((b) => (
                        <button
                          key={b.id}
                          onClick={() => setBgStyle(b.id)}
                          className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg text-[11px] font-mono transition text-left cursor-pointer ${
                            bgStyle === b.id
                              ? "bg-white/[0.08] text-white font-bold"
                              : "text-zinc-400 hover:text-zinc-200"
                          }`}
                        >
                          <div>
                            <span className="block">{b.label}</span>
                            <span className="text-[9px] text-zinc-500 font-sans block">{b.desc}</span>
                          </div>
                          {bgStyle === b.id && <Check className="h-3 w-3 text-emerald-400" />}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </aside>

      {/* =========================================================================
          MAIN CONTENT AREA (ROUTE VIEWS)
      ========================================================================= */}
      <main className="flex-1 lg:ml-64 min-h-screen pt-16 lg:pt-0 flex flex-col justify-between">
        <div className="flex-1 max-w-5xl w-full mx-auto px-5 sm:px-8 lg:px-12 py-12 lg:py-16 flex flex-col">
          <AnimatePresence mode="wait">
            {/* ---------------------------------------------------------------------
                ROUTE 1: HOME PAGE
            --------------------------------------------------------------------- */}
            {activeRoute === "home" && (
              <motion.div
                key="route-home"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-24"
              >
                {/* =================================================================
                    FOLD 1: ONE-VIEW HERO SECTION
                ================================================================= */}
                <section className="min-h-[calc(100vh-6rem)] lg:min-h-[86vh] flex flex-col justify-center items-center text-center space-y-6 relative">
                  {/* Subtle Background Radial Ambient Glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-emerald-500/[0.07] rounded-full blur-3xl pointer-events-none -z-10" />

                  {/* Circular Profile Photo with Glowing Ring */}
                  <motion.div
                    initial={{ scale: 0.85, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative group cursor-pointer"
                  >
                    <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-emerald-500/50 via-teal-400/30 to-emerald-500/50 blur-md opacity-75 group-hover:opacity-100 transition duration-500" />
                    <div className="relative h-32 w-32 sm:h-36 sm:w-36 rounded-full p-1 bg-zinc-900 border-2 border-white/20 shadow-2xl overflow-hidden">
                      <img
                        src={portraitImg}
                        alt="Devansh Shukla"
                        className="h-full w-full object-cover object-center rounded-full transform group-hover:scale-105 transition duration-500"
                      />
                    </div>
                  </motion.div>

                  {/* Intro Text */}
                  <div className="space-y-2.5 max-w-2xl">
                    <span className="font-serif italic text-sm sm:text-base text-zinc-400 block">
                      Hi, I'm
                    </span>

                    <h1 className="font-spartan font-black text-4xl sm:text-6xl uppercase tracking-tight text-white drop-shadow-sm">
                      DEVANSH SHUKLA
                    </h1>

                    <p className="text-sm sm:text-base text-zinc-300 font-serif leading-relaxed px-4">
                      AI & backend engineer. I build RAG pipelines, LLM agents, and the systems that run them.
                    </p>

                    <div className="flex items-center justify-center gap-2 text-xs font-mono text-zinc-400 pt-1">
                      <span>Based in India</span>
                      <span>·</span>
                      <span className="text-emerald-400 font-semibold">{currentTime || "12:00:00 PM"}</span>
                    </div>
                  </div>

                  {/* 5 Animated Social & Coding Profile Icons */}
                  <div className="flex items-center justify-center gap-3 sm:gap-4 pt-1">
                    {/* 1. GitHub */}
                    <div className="relative group">
                      <a
                        href={SOCIAL_LINKS.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile"
                        className="flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white/[0.04] hover:bg-white/[0.12] border border-white/10 hover:border-emerald-400/60 text-zinc-300 hover:text-white transition-all duration-300 transform hover:-translate-y-2 hover:scale-115 hover:shadow-[0_10px_20px_-5px_rgba(16,185,129,0.35)] cursor-pointer"
                      >
                        <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                      </a>
                      <div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-zinc-900 border border-white/10 text-[10px] font-mono text-zinc-200 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-xl z-20">
                        GitHub
                      </div>
                    </div>

                    {/* 2. LinkedIn */}
                    <div className="relative group">
                      <a
                        href={SOCIAL_LINKS.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profile"
                        className="flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white/[0.04] hover:bg-white/[0.12] border border-white/10 hover:border-cyan-400/60 text-zinc-300 hover:text-white transition-all duration-300 transform hover:-translate-y-2 hover:scale-115 hover:shadow-[0_10px_20px_-5px_rgba(6,182,212,0.35)] cursor-pointer"
                      >
                        <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                      </a>
                      <div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-zinc-900 border border-white/10 text-[10px] font-mono text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-xl z-20">
                        LinkedIn
                      </div>
                    </div>

                    {/* 3. X (Twitter) */}
                    <div className="relative group">
                      <a
                        href={SOCIAL_LINKS.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="X (Twitter) Profile"
                        className="flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white/[0.04] hover:bg-white/[0.12] border border-white/10 hover:border-sky-400/60 text-zinc-300 hover:text-white transition-all duration-300 transform hover:-translate-y-2 hover:scale-115 hover:shadow-[0_10px_20px_-5px_rgba(56,189,248,0.35)] cursor-pointer"
                      >
                        <XTwitterIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </a>
                      <div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-zinc-900 border border-white/10 text-[10px] font-mono text-sky-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-xl z-20">
                        X (Twitter)
                      </div>
                    </div>

                    {/* 4. CodeChef */}
                    <div className="relative group">
                      <a
                        href={SOCIAL_LINKS.codechef}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="CodeChef Profile (1824 4★)"
                        className="flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white/[0.04] hover:bg-white/[0.12] border border-white/10 hover:border-purple-400/60 text-zinc-300 hover:text-white transition-all duration-300 transform hover:-translate-y-2 hover:scale-115 hover:shadow-[0_10px_20px_-5px_rgba(168,85,247,0.35)] cursor-pointer"
                      >
                        <CodeChefIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </a>
                      <div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-zinc-900 border border-white/10 text-[10px] font-mono text-purple-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-xl z-20">
                        CodeChef (4★ 1824)
                      </div>
                    </div>

                    {/* 5. Codeforces */}
                    <div className="relative group">
                      <a
                        href={SOCIAL_LINKS.codeforces}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Codeforces Profile (Specialist 1506)"
                        className="flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white/[0.04] hover:bg-white/[0.12] border border-white/10 hover:border-rose-400/60 text-zinc-300 hover:text-white transition-all duration-300 transform hover:-translate-y-2 hover:scale-115 hover:shadow-[0_10px_20px_-5px_rgba(244,63,94,0.35)] cursor-pointer"
                      >
                        <CodeforcesIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </a>
                      <div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-zinc-900 border border-white/10 text-[10px] font-mono text-rose-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-xl z-20">
                        Codeforces (Specialist 1506)
                      </div>
                    </div>
                  </div>

                  {/* 3 Action Buttons */}
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                    <button
                      onClick={() => navigateTo("projects")}
                      className="px-7 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-mono font-bold text-xs uppercase tracking-wider transition shadow-lg shadow-emerald-500/25 hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      VIEW MY PROJECTS
                    </button>
                    <button
                      onClick={() => setResumeModalOpen(true)}
                      className="px-7 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/15 font-mono text-xs uppercase tracking-wider text-zinc-200 transition hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      RESUME
                    </button>
                    <button
                      onClick={() => navigateTo("contact")}
                      className="px-7 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/15 font-mono text-xs uppercase tracking-wider text-zinc-200 transition hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      CONTACT ME
                    </button>
                  </div>
                </section>

                {/* =================================================================
                    FOLD 2: CENTERED ACTIVITY MAPS (GITHUB & LEETCODE - REAL DATA)
                ================================================================= */}
                <section className="space-y-8 pt-8">
                  <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
                    {/* 1. GITHUB CONTRIBUTIONS HEATMAP */}
                    <SpotlightCard className="p-6 sm:p-7 rounded-2xl glass-panel border border-white/[0.07] space-y-5">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-white/[0.06]">
                        <div className="flex items-center gap-3">
                          <div className="h-9 w-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-inner">
                            <Github className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-200">
                                GITHUB CONTRIBUTIONS
                              </h3>
                              <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 text-[10px] font-mono border border-emerald-500/30">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                Live
                              </span>
                            </div>
                            <p className="font-mono text-[11px] text-emerald-400">
                              {githubStats.total} contributions in the past year
                            </p>
                          </div>
                        </div>

                        <a
                          href={SOCIAL_LINKS.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-mono text-zinc-300 hover:text-emerald-400 transition self-start sm:self-auto"
                        >
                          <span>View GitHub</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>

                      {/* GitHub Activity Grid */}
                      <div className="overflow-x-auto pb-2 flex justify-center">
                        <div className="flex gap-1 min-w-[680px]">
                          {githubStats.weeks.map((week, wIndex) => (
                            <div key={wIndex} className="flex flex-col gap-1">
                              {week.map((day, dIndex) => {
                                const bgClass =
                                  day.level === 0
                                    ? "bg-zinc-800/40"
                                    : day.level === 1
                                    ? "bg-emerald-950/80 border border-emerald-800/30"
                                    : day.level === 2
                                    ? "bg-emerald-700/80"
                                    : day.level === 3
                                    ? "bg-emerald-500"
                                    : "bg-emerald-400";
                                return (
                                  <div
                                    key={dIndex}
                                    title={`${day.count} contributions on ${day.date}`}
                                    className={`h-2.5 w-2.5 rounded-sm activity-cell ${bgClass}`}
                                  />
                                );
                              })}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-1 text-[11px] font-mono text-zinc-400">
                        <div className="flex items-center gap-4">
                          <span>🔥 {githubStats.streak} Days Active Streak</span>
                          <span>⚡ 24+ Public Repos</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span>Less</span>
                          <span className="h-2.5 w-2.5 rounded-sm bg-zinc-800/40" />
                          <span className="h-2.5 w-2.5 rounded-sm bg-emerald-950" />
                          <span className="h-2.5 w-2.5 rounded-sm bg-emerald-700" />
                          <span className="h-2.5 w-2.5 rounded-sm bg-emerald-500" />
                          <span className="h-2.5 w-2.5 rounded-sm bg-emerald-400" />
                          <span>More</span>
                        </div>
                      </div>
                    </SpotlightCard>

                    {/* 2. LEETCODE ACTIVITY & SUBMISSION HEATMAP */}
                    <SpotlightCard className="p-6 sm:p-7 rounded-2xl glass-panel border border-white/[0.07] space-y-5">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-white/[0.06]">
                        <div className="flex items-center gap-3">
                          <div className="h-9 w-9 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-inner">
                            <LeetCodeIcon className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-200">
                                LEETCODE SUBMISSIONS & CONTEST RATING
                              </h3>
                              <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400 text-[10px] font-mono border border-amber-500/30">
                                <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                                Live
                              </span>
                            </div>
                            <p className="font-mono text-[11px] text-amber-400">
                              {leetCodeStats.badge} Badge • Contest Rating {leetCodeStats.rating} (Top {leetCodeStats.topPercentage}%)
                            </p>
                          </div>
                        </div>

                        <a
                          href={SOCIAL_LINKS.leetcode}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-mono text-zinc-300 hover:text-amber-400 transition self-start sm:self-auto"
                        >
                          <span>View LeetCode</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>

                      {/* LeetCode Problem Stats Pills */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-center">
                          <span className="text-[10px] font-mono text-zinc-400 uppercase block">Total Solved</span>
                          <span className="text-lg font-mono font-bold text-white">{leetCodeStats.totalSolved}</span>
                        </div>
                        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center">
                          <span className="text-[10px] font-mono text-emerald-400 uppercase block">Easy</span>
                          <span className="text-lg font-mono font-bold text-emerald-300">{leetCodeStats.easySolved}</span>
                        </div>
                        <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-center">
                          <span className="text-[10px] font-mono text-amber-400 uppercase block">Medium</span>
                          <span className="text-lg font-mono font-bold text-amber-300">{leetCodeStats.mediumSolved}</span>
                        </div>
                        <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-center">
                          <span className="text-[10px] font-mono text-rose-400 uppercase block">Hard</span>
                          <span className="text-lg font-mono font-bold text-rose-300">{leetCodeStats.hardSolved}</span>
                        </div>
                      </div>

                      {/* LeetCode Activity Grid */}
                      <div className="overflow-x-auto pb-2 flex justify-center">
                        <div className="flex gap-1 min-w-[680px]">
                          {leetCodeStats.weeks.map((week, wIndex) => (
                            <div key={wIndex} className="flex flex-col gap-1">
                              {week.map((day, dIndex) => {
                                const bgClass =
                                  day.level === 0
                                    ? "bg-zinc-800/40"
                                    : day.level === 1
                                    ? "bg-amber-950/80 border border-amber-800/30"
                                    : day.level === 2
                                    ? "bg-amber-700/80"
                                    : day.level === 3
                                    ? "bg-amber-500"
                                    : "bg-amber-400";
                                return (
                                  <div
                                    key={dIndex}
                                    title={`${day.count} LeetCode submissions on ${day.date}`}
                                    className={`h-2.5 w-2.5 rounded-sm activity-cell ${bgClass}`}
                                  />
                                );
                              })}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-1 text-[11px] font-mono text-zinc-400">
                        <div className="flex items-center gap-4">
                          <span>🏅 {leetCodeStats.badge} Badge ({leetCodeStats.rating})</span>
                          <span>⭐ Global Ranking Top {leetCodeStats.topPercentage}%</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span>Less</span>
                          <span className="h-2.5 w-2.5 rounded-sm bg-zinc-800/40" />
                          <span className="h-2.5 w-2.5 rounded-sm bg-amber-950" />
                          <span className="h-2.5 w-2.5 rounded-sm bg-amber-700" />
                          <span className="h-2.5 w-2.5 rounded-sm bg-amber-500" />
                          <span className="h-2.5 w-2.5 rounded-sm bg-amber-400" />
                          <span>More</span>
                        </div>
                      </div>
                    </SpotlightCard>
                  </div>
                </section>

                {/* =================================================================
                    FOLD 3: ANIMATED TECH STACK SECTION
                ================================================================= */}
                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className="text-center space-y-8 pt-4"
                >
                  <div className="space-y-2">
                    <h2 className="section-title text-2xl sm:text-3xl text-emerald-400">
                      TECHNOLOGY STACK
                    </h2>
                    <p className="font-serif text-xs sm:text-sm text-zinc-400 max-w-lg mx-auto">
                      Core technical competencies, frameworks, and modern tools I use to build scalable systems.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
                    {/* Languages */}
                    <div className="p-5 rounded-2xl glass-panel border border-white/[0.08] space-y-3 hover:border-emerald-500/30 transition duration-300">
                      <div className="flex items-center gap-2">
                        <Code2 className="h-4 w-4 text-emerald-400" />
                        <h3 className="font-spartan font-bold text-base text-white">Languages</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {["C/C++", "Python", "TypeScript", "JavaScript", "SQL"].map((t) => (
                          <button key={t} onClick={() => navigateTo("projects")} className="tech-pill cursor-pointer">
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* AI Engineering */}
                    <div className="p-5 rounded-2xl glass-panel border border-white/[0.08] space-y-3 hover:border-emerald-500/30 transition duration-300">
                      <div className="flex items-center gap-2">
                        <Terminal className="h-4 w-4 text-emerald-400" />
                        <h3 className="font-spartan font-bold text-base text-white">AI Engineering</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {["LangChain", "LangGraph", "RAG Pipelines", "AI Agents", "LLM Orchestration", "Whisper", "Audio AI"].map((t) => (
                          <button key={t} onClick={() => navigateTo("projects")} className="tech-pill cursor-pointer">
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Systems & Backend */}
                    <div className="p-5 rounded-2xl glass-panel border border-white/[0.08] space-y-3 hover:border-emerald-500/30 transition duration-300">
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-emerald-400" />
                        <h3 className="font-spartan font-bold text-base text-white">Systems & Backend</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {["Distributed Systems", "Microservices", "REST APIs", "FastAPI", "Celery", "Node.js", "Docker", "WebSockets"].map((t) => (
                          <button key={t} onClick={() => navigateTo("projects")} className="tech-pill cursor-pointer">
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Databases */}
                    <div className="p-5 rounded-2xl glass-panel border border-white/[0.08] space-y-3 hover:border-emerald-500/30 transition duration-300">
                      <div className="flex items-center gap-2">
                        <Layers className="h-4 w-4 text-emerald-400" />
                        <h3 className="font-spartan font-bold text-base text-white">Databases</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {["PostgreSQL", "MongoDB", "Redis", "ChromaDB"].map((t) => (
                          <span key={t} className="tech-pill">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Observability */}
                    <div className="p-5 rounded-2xl glass-panel border border-white/[0.08] space-y-3 hover:border-emerald-500/30 transition duration-300">
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-emerald-400" />
                        <h3 className="font-spartan font-bold text-base text-white">Observability</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {["Langfuse", "Distributed Tracing", "Runtime Instrumentation"].map((t) => (
                          <span key={t} className="tech-pill">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tools */}
                    <div className="p-5 rounded-2xl glass-panel border border-white/[0.08] space-y-3 hover:border-emerald-500/30 transition duration-300">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-emerald-400" />
                        <h3 className="font-spartan font-bold text-base text-white">Tools</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {["Git", "GitHub Actions", "Linux", "Postman", "Docker"].map((t) => (
                          <span key={t} className="tech-pill">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.section>
              </motion.div>
            )}

            {/* ---------------------------------------------------------------------
                ROUTE 2: ABOUT ME PAGE (DIFFERENT ROUTE)
            --------------------------------------------------------------------- */}
            {activeRoute === "about" && (
              <motion.div
                key="route-about"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8"
              >
                <div className="text-center pb-4">
                  <h1 className="section-title text-3xl sm:text-4xl text-emerald-400">ABOUT ME</h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  {/* Narrative Bio */}
                  <div className="lg:col-span-8 space-y-5 font-serif text-sm sm:text-base text-zinc-300 leading-relaxed">
                    <p>
                      Hey there! I am <strong className="text-white font-semibold">Devansh</strong>, an AI & backend engineer and Computer Science student at{" "}
                      <strong className="text-emerald-400 font-semibold">IIIT Bhopal</strong> focused on AI engineering, backend systems, and low-latency production pipelines.
                    </p>

                    <p>
                      I work primarily in Python and C++, building RAG pipelines and LLM agents with LangChain and LangGraph, and instrumenting them with telemetry to evaluate real-time behaviors. On the backend, I build high-concurrency microservices and REST APIs backed by FastAPI, Celery, PostgreSQL, MongoDB, and Redis.
                    </p>

                    <p>
                      Much of my work involves designing asynchronous worker architectures to eliminate task bottlenecks, handling full-duplex WebSocket audio streaming, and shipping deterministic systems end-to-end with Docker and GitHub Actions.
                    </p>

                    <p>
                      I take data structures and algorithms seriously, not as a numbers game, but as a way to reason clearly about performance, edge cases, and trade-offs (1902 LeetCode Knight, 1824 CodeChef 4-Star). I aim for code that is readable, maintainable, and easy to reason about later.
                    </p>
                  </div>

                  {/* Right Portrait & Quick Socials */}
                  <div className="lg:col-span-4 flex flex-col items-center space-y-5">
                    <div className="relative group">
                      <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-emerald-500/40 via-cyan-500/30 to-emerald-500/40 blur-md opacity-75 group-hover:opacity-100 transition duration-500" />
                      <div className="relative h-44 w-44 sm:h-52 sm:w-52 rounded-full p-1 bg-zinc-900 border border-white/20 shadow-2xl overflow-hidden">
                        <img
                          src={portraitImg}
                          alt="Devansh Shukla"
                          className="h-full w-full object-cover object-center rounded-full"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <a
                        href={SOCIAL_LINKS.twitter}
                        target="_blank"
                        rel="noreferrer"
                        className="h-10 w-10 rounded-full bg-white/[0.05] hover:bg-white/15 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white transition"
                        title="X (Twitter) Profile"
                      >
                        <XTwitterIcon className="h-4 w-4" />
                      </a>
                      <a
                        href={SOCIAL_LINKS.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="h-10 w-10 rounded-full bg-white/[0.05] hover:bg-white/15 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white transition"
                        title="LinkedIn Profile"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a
                        href={SOCIAL_LINKS.github}
                        target="_blank"
                        rel="noreferrer"
                        className="h-10 w-10 rounded-full bg-white/[0.05] hover:bg-white/15 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white transition"
                        title="GitHub Profile"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ---------------------------------------------------------------------
                ROUTE 3: PROJECTS PAGE
            --------------------------------------------------------------------- */}
            {activeRoute === "projects" && (
              <motion.div
                key="route-projects"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8"
              >
                <div className="text-center space-y-2 pb-2">
                  <h1 className="section-title text-3xl sm:text-4xl text-emerald-400">PROJECTS</h1>
                  <p className="font-serif text-sm text-zinc-400 max-w-lg mx-auto">
                    Open-source projects I have made over the years, including web apps, APIs, and tools.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projectsList.map((p) => (
                    <SpotlightCard
                      key={p.id}
                      className="p-6 rounded-2xl glass-panel border border-white/[0.08] flex flex-col justify-between space-y-4 hover:border-emerald-500/30 transition group"
                    >
                      <div className="space-y-3">
                        <time className="font-mono text-xs text-zinc-500 font-semibold">{p.year}</time>
                        <h2 className="font-spartan font-bold text-lg text-white group-hover:text-emerald-400 transition">
                          {p.title}
                        </h2>

                        <div className="flex flex-wrap gap-1.5">
                          {p.tags.map((t) => (
                            <span
                              key={t}
                              className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-zinc-300"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <p className="font-serif text-xs text-zinc-400 leading-relaxed">
                          {p.desc}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 pt-3 border-t border-white/[0.06]">
                        {p.demoUrl && (
                          <a
                            href={p.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="px-3 py-1 rounded-md bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/25 font-mono text-[11px] font-semibold transition flex items-center gap-1"
                          >
                            <span>DEMO</span>
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                        {p.sourceUrl && (
                          <a
                            href={p.sourceUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="px-3 py-1 rounded-md bg-white/[0.05] hover:bg-white/10 font-mono text-[11px] font-semibold text-zinc-300 hover:text-white transition flex items-center gap-1"
                          >
                            <span>SOURCE</span>
                            <Github className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                    </SpotlightCard>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ---------------------------------------------------------------------
                ROUTE 4: EXPERIENCE PAGE
            --------------------------------------------------------------------- */}
            {activeRoute === "experience" && (
              <motion.div
                key="route-experience"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8"
              >
                <div className="text-center pb-2">
                  <h1 className="section-title text-3xl sm:text-4xl text-emerald-400">EXPERIENCE</h1>
                </div>

                <div className="space-y-6 max-w-3xl mx-auto">
                  {experienceList.map((exp, idx) => (
                    <SpotlightCard
                      key={idx}
                      className="p-6 sm:p-7 rounded-2xl glass-panel border border-white/[0.08] space-y-4"
                    >
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-zinc-400">{exp.period}</span>
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          {exp.type}
                        </span>
                      </div>

                      <div>
                        <h2 className="font-spartan font-bold text-xl text-white">{exp.role}</h2>
                        <a
                          href={exp.link || "https://www.zapplyx.com"}
                          target="_blank"
                          rel="noreferrer"
                          className="font-serif text-sm font-semibold text-emerald-400 hover:underline inline-flex items-center gap-1"
                        >
                          <span>{exp.org}</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>

                      <p className="font-serif text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        {exp.summary}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {exp.stack.map((t) => (
                          <span
                            key={t}
                            className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-zinc-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <ul className="space-y-2 pt-2 border-t border-white/[0.06] text-xs sm:text-sm font-serif text-zinc-300 list-disc list-inside">
                        {exp.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="leading-relaxed">
                            {b}
                          </li>
                        ))}
                      </ul>
                    </SpotlightCard>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ---------------------------------------------------------------------
                ROUTE 5: WORKING ON PAGE (2-COLUMN REFERENCE STYLE)
            --------------------------------------------------------------------- */}
            {activeRoute === "working-on" && (
              <motion.div
                key="route-working-on"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8"
              >
                <div className="text-center pb-2">
                  <h1 className="section-title text-3xl sm:text-4xl text-emerald-400">
                    WORKING ON
                  </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                  {workingOnList.map((item) => (
                    <SpotlightCard
                      key={item.id}
                      className="p-6 sm:p-7 rounded-2xl glass-panel border border-white/[0.08] flex flex-col justify-between space-y-5 hover:border-emerald-500/30 transition group"
                    >
                      <div className="space-y-4">
                        {/* Top Header Row with Title & GitHub Link */}
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h2 className="font-spartan font-bold text-xl text-emerald-400 group-hover:text-emerald-300 transition">
                              {item.title}
                            </h2>
                            <p className="font-spartan font-bold text-sm text-white pt-1">
                              {item.subtitle}
                            </p>
                          </div>

                          {item.githubUrl && (
                            <a
                              href={item.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/10 text-zinc-400 hover:text-white transition cursor-pointer shrink-0"
                              title="View Source on GitHub"
                            >
                              <Github className="h-4 w-4" />
                            </a>
                          )}
                        </div>

                        {/* Description */}
                        <p className="font-serif text-xs sm:text-sm text-zinc-300 leading-relaxed">
                          {item.desc}
                        </p>

                        {/* How it works */}
                        <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                          <p className="font-spartan font-bold text-xs text-white uppercase tracking-wider">
                            How it works:
                          </p>
                          <ul className="space-y-1.5 text-xs font-serif text-zinc-300 list-disc list-inside">
                            {item.howItWorks.map((bullet, bIdx) => (
                              <li key={bIdx} className="leading-relaxed">
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tech Stack */}
                        <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                          <p className="font-spartan font-bold text-xs text-white uppercase tracking-wider">
                            Tech Stack:
                          </p>
                          <div className="space-y-1 text-xs font-serif text-zinc-300">
                            {item.techStack.map((tech, tIdx) => (
                              <p key={tIdx}>
                                <span className="font-mono text-[11px] text-zinc-400 font-semibold">{tech.label}:</span>{" "}
                                <span className="text-zinc-200">{tech.val}</span>
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Bottom Live Demo Link */}
                      <div className="pt-2">
                        {item.liveUrl ? (
                          <a
                            href={item.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 hover:underline font-semibold"
                          >
                            <span>Live Demo</span>
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        ) : (
                          <span className="text-zinc-600 font-mono text-[11px] italic">
                            Internal Architecture
                          </span>
                        )}
                      </div>
                    </SpotlightCard>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ---------------------------------------------------------------------
                ROUTE 6: PROGRAMMING PAGE (DYNAMIC LIVE METRICS)
            --------------------------------------------------------------------- */}
            {activeRoute === "programming" && (
              <motion.div
                key="route-programming"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8"
              >
                <div className="text-center space-y-2 pb-2">
                  <h1 className="section-title text-3xl sm:text-4xl text-emerald-400">PROGRAMMING</h1>
                  <p className="font-serif text-sm text-zinc-400 max-w-lg mx-auto">
                    Live competitive programming profiles, algorithmic contest ratings, and real problem-solving stats.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {/* LeetCode Card (Dynamic) */}
                  <SpotlightCard className="p-6 rounded-2xl glass-panel border border-white/[0.08] space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <LeetCodeIcon className="h-5 w-5" />
                        <span className="font-spartan font-bold text-lg text-white">LeetCode</span>
                      </div>
                      <span className="font-mono text-xs text-amber-400 font-bold px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">
                        {leetCodeStats.badge} Rank
                      </span>
                    </div>

                    <div className="space-y-1">
                      <p className="font-mono text-3xl font-black text-white">{leetCodeStats.rating}</p>
                      <p className="font-serif text-xs text-zinc-400">
                        Contest Rating (Top {leetCodeStats.topPercentage}% Globally)
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-2 py-1">
                      <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.05] text-center">
                        <span className="text-[10px] font-mono text-emerald-400 block">Easy</span>
                        <span className="font-mono font-bold text-sm text-white">{leetCodeStats.easySolved}</span>
                      </div>
                      <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.05] text-center">
                        <span className="text-[10px] font-mono text-amber-400 block">Medium</span>
                        <span className="font-mono font-bold text-sm text-white">{leetCodeStats.mediumSolved}</span>
                      </div>
                      <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.05] text-center">
                        <span className="text-[10px] font-mono text-rose-400 block">Hard</span>
                        <span className="font-mono font-bold text-sm text-white">{leetCodeStats.hardSolved}</span>
                      </div>
                    </div>

                    <p className="font-serif text-xs text-zinc-300 leading-relaxed">
                      {leetCodeStats.totalSolved}+ problems solved across Advanced Dynamic Programming, Graph Theory, Segment Trees, and Greedy algorithms.
                    </p>

                    <a
                      href={SOCIAL_LINKS.leetcode}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-amber-400 hover:underline pt-2 font-semibold"
                    >
                      <span>View LeetCode Profile</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </SpotlightCard>

                  {/* CodeChef Card */}
                  <SpotlightCard className="p-6 rounded-2xl glass-panel border border-white/[0.08] space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CodeChefIcon className="h-5 w-5" />
                        <span className="font-spartan font-bold text-lg text-white">CodeChef</span>
                      </div>
                      <span className="font-mono text-xs text-purple-400 font-bold px-2 py-0.5 rounded bg-purple-400/10 border border-purple-400/20">
                        4-Star ★★★★
                      </span>
                    </div>

                    <div className="space-y-1">
                      <p className="font-mono text-3xl font-black text-white">1824</p>
                      <p className="font-serif text-xs text-zinc-400">Peak Rating (Division 1)</p>
                    </div>

                    <p className="font-serif text-xs text-zinc-300 leading-relaxed">
                      Regular competitor in long and short rated algorithmic rounds on Division 1 problemsets with consistent rank advancements.
                    </p>

                    <a
                      href={SOCIAL_LINKS.codechef}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-purple-400 hover:underline pt-2 font-semibold"
                    >
                      <span>View CodeChef Profile</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </SpotlightCard>

                  {/* Codeforces Card */}
                  <SpotlightCard className="p-6 rounded-2xl glass-panel border border-white/[0.08] space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CodeforcesIcon className="h-5 w-5" />
                        <span className="font-spartan font-bold text-lg text-white">Codeforces</span>
                      </div>
                      <span className="font-mono text-xs text-cyan-400 font-bold px-2 py-0.5 rounded bg-cyan-400/10 border border-cyan-400/20">
                        Specialist 1506
                      </span>
                    </div>

                    <div className="space-y-1">
                      <p className="font-mono text-3xl font-black text-white">1506</p>
                      <p className="font-serif text-xs text-zinc-400">Contest Rating</p>
                    </div>

                    <p className="font-serif text-xs text-zinc-300 leading-relaxed">
                      Active competitive programmer participating in Div 2 / Div 3 rated rounds solving speed and greedy implementation problems.
                    </p>

                    <a
                      href={SOCIAL_LINKS.codeforces}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-cyan-400 hover:underline pt-2 font-semibold"
                    >
                      <span>View Codeforces Profile</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </SpotlightCard>

                  {/* GitHub Activity Summary (Dynamic) */}
                  <SpotlightCard className="p-6 rounded-2xl glass-panel border border-white/[0.08] space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Github className="h-5 w-5" />
                        <span className="font-spartan font-bold text-lg text-white">GitHub</span>
                      </div>
                      <span className="font-mono text-xs text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-400/10 border border-emerald-400/20 flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Live Synced
                      </span>
                    </div>

                    <div className="space-y-1">
                      <p className="font-mono text-3xl font-black text-white">{githubStats.total}+</p>
                      <p className="font-serif text-xs text-zinc-400">
                        Contributions in Past Year · Active Streak: {githubStats.streak} Days
                      </p>
                    </div>

                    <p className="font-serif text-xs text-zinc-300 leading-relaxed">
                      Continuous daily open-source commits across distributed backends, LLM agents, and full-stack systems.
                    </p>

                    <a
                      href={SOCIAL_LINKS.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-emerald-400 hover:underline pt-2 font-semibold"
                    >
                      <span>View GitHub Profile</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </SpotlightCard>
                </div>
              </motion.div>
            )}

            {/* ---------------------------------------------------------------------
                ROUTE 7: CERTIFICATES & RECOGNITION PAGE (DEDICATED SECTION)
            --------------------------------------------------------------------- */}
            {activeRoute === "certificates" && (
              <motion.div
                key="route-certificates"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8"
              >
                <div className="text-center space-y-2 pb-2">
                  <h1 className="section-title text-3xl sm:text-4xl text-emerald-400">CERTIFICATES</h1>
                  <p className="font-serif text-sm text-zinc-400 max-w-lg mx-auto">
                    National hackathon distinctions, industry recognitions, and competitive program selections.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {honorsList.map((h) => (
                    <SpotlightCard
                      key={h.id}
                      className="p-5 sm:p-6 rounded-2xl glass-panel border border-white/[0.08] flex flex-col justify-between space-y-4 hover:border-emerald-500/30 transition group"
                    >
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-semibold">
                            {h.badge}
                          </span>
                          <span className="text-zinc-400">{h.date}</span>
                        </div>

                        <div>
                          <h2 className="font-spartan font-bold text-lg text-white group-hover:text-emerald-400 transition">
                            {h.title}
                          </h2>
                          <p className="font-mono text-xs text-emerald-400/90 font-medium">{h.org}</p>
                        </div>

                        <p className="font-serif text-xs text-zinc-300 leading-relaxed">
                          {h.desc}
                        </p>
                      </div>

                      {/* Visible Embedded Certificate Preview */}
                      {h.imgUrl ? (
                        <div
                          onClick={() => setSelectedCert(h)}
                          className="relative rounded-xl overflow-hidden border border-white/10 bg-zinc-950 cursor-pointer group/img"
                          title="Click to zoom certificate"
                        >
                          <img
                            src={h.imgUrl}
                            alt={h.title}
                            className="w-full h-48 sm:h-52 object-contain bg-black/40 group-hover/img:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-mono text-xs backdrop-blur-[2px]">
                            <span>Click to Zoom</span>
                            <ExternalLink className="h-3.5 w-3.5" />
                          </div>
                        </div>
                      ) : (
                        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center font-mono text-xs text-zinc-400">
                          Verified National Competition Distinction
                        </div>
                      )}
                    </SpotlightCard>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ---------------------------------------------------------------------
                ROUTE 8: EDUCATION & KEY ACHIEVEMENTS (2-COLUMN REFERENCE LAYOUT)
            --------------------------------------------------------------------- */}
            {activeRoute === "education" && (
              <motion.div
                key="route-education"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* LEFT COLUMN: EDUCATION TIMELINE */}
                  <div className="lg:col-span-7 space-y-6">
                    <h1 className="section-title text-2xl sm:text-3xl text-emerald-400">
                      EDUCATION
                    </h1>

                    <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2 sm:before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-white/10">
                      {educationList.map((edu, idx) => (
                        <div key={idx} className="relative group">
                          {/* Timeline Node Dot */}
                          <div className="absolute -left-6 sm:-left-8 top-5 h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-[#08090b] border-2 border-emerald-400 group-hover:scale-125 transition-transform duration-200 flex items-center justify-center">
                            <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-400 group-hover:bg-white transition-colors" />
                          </div>

                          {/* Clickable Card */}
                          <a
                            href={edu.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                            title={`Visit ${edu.institution}`}
                          >
                            <SpotlightCard className="p-5 sm:p-6 rounded-2xl glass-panel border border-white/[0.08] hover:border-emerald-500/40 transition duration-300 space-y-3 cursor-pointer group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
                              <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                                <span>{edu.period}</span>
                                <ExternalLink className="h-3.5 w-3.5 text-zinc-500 group-hover:text-emerald-400 transition" />
                              </div>

                              <div>
                                <h2 className="font-spartan font-bold text-lg sm:text-xl text-white group-hover:text-emerald-400 transition">
                                  {edu.institution}
                                </h2>
                                <p className="font-serif text-sm font-semibold text-emerald-400/90 pt-0.5">
                                  {edu.degree}
                                </p>
                                <p className="font-mono text-xs text-zinc-400 pt-1">
                                  {edu.score}
                                </p>
                              </div>

                              {edu.courses && edu.courses.length > 0 && (
                                <div className="pt-2 border-t border-white/[0.06] space-y-2">
                                  <p className="font-mono text-[11px] text-zinc-400">
                                    Relevant Coursework:
                                  </p>
                                  <div className="flex flex-wrap gap-1.5">
                                    {edu.courses.map((c) => (
                                      <span
                                        key={c}
                                        className="font-mono text-[10px] px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-zinc-300"
                                      >
                                        {c}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </SpotlightCard>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* RIGHT COLUMN: KEY ACHIEVEMENTS */}
                  <div className="lg:col-span-5 space-y-6">
                    <h2 className="section-title text-2xl sm:text-3xl text-emerald-400">
                      KEY ACHIEVEMENTS
                    </h2>

                    <div className="space-y-4">
                      {keyAchievementsList.map((ach, idx) => {
                        const Icon = ach.icon;
                        return (
                          <SpotlightCard
                            key={idx}
                            className="p-4 sm:p-5 rounded-2xl glass-panel border border-white/[0.08] hover:border-emerald-500/30 transition flex items-start gap-3.5"
                          >
                            <div className="h-8 w-8 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                              <Icon className="h-4 w-4" />
                            </div>
                            <p className="font-serif text-xs sm:text-sm text-zinc-300 leading-relaxed">
                              {ach.text}
                            </p>
                          </SpotlightCard>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ---------------------------------------------------------------------
                ROUTE 9: CONTACT ME PAGE (GET IN TOUCH 2-COLUMN REFERENCE STYLE)
            --------------------------------------------------------------------- */}
            {activeRoute === "contact" && (
              <motion.div
                key="route-contact"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8 max-w-5xl mx-auto w-full"
              >
                <div className="text-center pb-2">
                  <h1 className="section-title text-3xl sm:text-4xl text-emerald-400">
                    GET IN TOUCH
                  </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* LEFT COLUMN: Let's Chat & Contact Links */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="space-y-2">
                      <h2 className="font-spartan font-bold text-xl sm:text-2xl text-white">
                        Let's Chat!
                      </h2>
                      <p className="font-serif text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        If you are interested in collaborating, discussing an idea, or just having a thoughtful conversation, feel free to reach out.
                      </p>
                    </div>

                    <div className="space-y-3">
                      {/* Email Card with Copy Button */}
                      <div className="flex items-center justify-between p-3.5 rounded-xl glass-panel border border-white/[0.08] hover:border-emerald-500/30 transition group">
                        <a
                          href={`mailto:${SOCIAL_LINKS.email}`}
                          className="flex items-center gap-3 text-zinc-300 hover:text-white transition overflow-hidden"
                        >
                          <div className="h-8 w-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                            <Mail className="h-4 w-4" />
                          </div>
                          <span className="font-mono text-xs sm:text-sm text-zinc-200 truncate">
                            {SOCIAL_LINKS.email}
                          </span>
                        </a>
                        <button
                          onClick={copyEmailToClipboard}
                          className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/10 text-zinc-400 hover:text-white transition cursor-pointer shrink-0 ml-2"
                          title="Copy Email"
                        >
                          <Copy className="h-3.5 w-3.5" />
                        </button>
                      </div>

                      {/* WhatsApp / Phone Card */}
                      <a
                        href="https://wa.me/919289153800"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3.5 rounded-xl glass-panel border border-white/[0.08] hover:border-emerald-500/30 text-zinc-300 hover:text-white transition group cursor-pointer"
                      >
                        <div className="h-8 w-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                          <Phone className="h-4 w-4" />
                        </div>
                        <span className="font-serif text-xs sm:text-sm font-semibold text-zinc-200">
                          WhatsApp (+91 9289153800)
                        </span>
                      </a>

                      {/* LinkedIn Card */}
                      <a
                        href={SOCIAL_LINKS.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3.5 rounded-xl glass-panel border border-white/[0.08] hover:border-emerald-500/30 text-zinc-300 hover:text-white transition group cursor-pointer"
                      >
                        <div className="h-8 w-8 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                          <Linkedin className="h-4 w-4" />
                        </div>
                        <span className="font-serif text-xs sm:text-sm font-semibold text-zinc-200">
                          LinkedIn
                        </span>
                      </a>

                      {/* GitHub Card */}
                      <a
                        href={SOCIAL_LINKS.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3.5 rounded-xl glass-panel border border-white/[0.08] hover:border-emerald-500/30 text-zinc-300 hover:text-white transition group cursor-pointer"
                      >
                        <div className="h-8 w-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-zinc-200 shrink-0">
                          <Github className="h-4 w-4" />
                        </div>
                        <span className="font-serif text-xs sm:text-sm font-semibold text-zinc-200">
                          GitHub
                        </span>
                      </a>

                      {/* X (Twitter) Card */}
                      <a
                        href={SOCIAL_LINKS.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3.5 rounded-xl glass-panel border border-white/[0.08] hover:border-emerald-500/30 text-zinc-300 hover:text-white transition group cursor-pointer"
                      >
                        <div className="h-8 w-8 rounded-lg bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
                          <XTwitterIcon className="h-4 w-4" />
                        </div>
                        <span className="font-serif text-xs sm:text-sm font-semibold text-zinc-200">
                          X (Twitter)
                        </span>
                      </a>
                    </div>
                  </div>

                  {/* RIGHT COLUMN: Contact Message Form */}
                  <div className="lg:col-span-7">
                    <SpotlightCard className="p-6 sm:p-8 rounded-2xl glass-panel border border-white/[0.08] space-y-4">
                      <form onSubmit={handleSendMessage} className="space-y-4">
                        <div className="space-y-1.5">
                          <label className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-300">
                            YOUR NAME
                          </label>
                          <input
                            type="text"
                            required
                            disabled={formStatus === "submitting"}
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Your Name"
                            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 text-sm font-serif transition disabled:opacity-50"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-300">
                            YOUR EMAIL
                          </label>
                          <input
                            type="email"
                            required
                            disabled={formStatus === "submitting"}
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="xyz@gmail.com"
                            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 text-sm font-serif transition disabled:opacity-50"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-300">
                            MESSAGE
                          </label>
                          <textarea
                            required
                            rows={5}
                            disabled={formStatus === "submitting"}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="What's on your mind?"
                            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 text-sm font-serif transition resize-none disabled:opacity-50"
                          />
                        </div>

                        {/* Status Banners */}
                        {formStatus === "success" && (
                          <div className="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-serif text-xs flex items-center gap-2.5">
                            <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                            <span>Message delivered directly to my inbox! I will get back to you soon.</span>
                          </div>
                        )}

                        {formStatus === "error" && (
                          <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 font-serif text-xs space-y-2">
                            <div className="flex items-center gap-2">
                              <AlertCircle className="h-4 w-4 text-rose-400 shrink-0" />
                              <span>{errorMessage}</span>
                            </div>
                            <button
                              type="button"
                              onClick={handleFallbackMailto}
                              className="text-xs font-mono text-white underline hover:text-emerald-400 cursor-pointer block text-left"
                            >
                              → Click here to send via email client instead
                            </button>
                          </div>
                        )}

                        <button
                          type="submit"
                          disabled={formStatus === "submitting"}
                          className={`w-full py-3.5 px-6 rounded-xl font-mono text-xs uppercase tracking-wider font-bold transition flex items-center justify-center gap-2 group cursor-pointer ${
                            formStatus === "success"
                              ? "bg-emerald-500/20 border border-emerald-500/50 text-emerald-300"
                              : formStatus === "submitting"
                              ? "bg-white/[0.04] border border-white/10 text-zinc-400 cursor-wait"
                              : "bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white hover:border-emerald-500/40"
                          }`}
                        >
                          {formStatus === "submitting" ? (
                            <>
                              <Loader2 className="h-3.5 w-3.5 text-emerald-400 animate-spin" />
                              <span>SENDING DIRECTLY...</span>
                            </>
                          ) : formStatus === "success" ? (
                            <>
                              <Check className="h-3.5 w-3.5 text-emerald-400" />
                              <span>MESSAGE SENT DIRECTLY!</span>
                            </>
                          ) : (
                            <>
                              <span>SEND MESSAGE</span>
                              <Send className="h-3.5 w-3.5 text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                            </>
                          )}
                        </button>
                      </form>
                    </SpotlightCard>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* =====================================================================
            GLOBAL FOOTER (Together in Center at Bottom)
        ===================================================================== */}
        <footer className="mt-auto py-8 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-3 text-center font-serif text-xs sm:text-sm text-zinc-400">
          <span>Built with React, Next.js, and care.</span>
          <span className="text-zinc-600 hidden sm:inline">·</span>
          <div className="flex items-center gap-2 text-zinc-400">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition duration-200 p-1"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition duration-200 p-1"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition duration-200 p-1"
              aria-label="X (Twitter) Profile"
              title="X (Twitter)"
            >
              <XTwitterIcon className="h-4 w-4" />
            </a>
          </div>
          <span className="text-zinc-600 hidden sm:inline">·</span>
          <span>(c) {new Date().getFullYear()} Devansh Shukla</span>
        </footer>
      </main>

      {/* =========================================================================
          MODAL 1: RESUME PDF MODAL
      ========================================================================= */}
      <AnimatePresence>
        {resumeModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
            onClick={() => setResumeModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-4xl h-[90vh] bg-zinc-900 border border-white/15 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-5 py-3.5 bg-zinc-950 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-emerald-400" />
                  <span className="font-mono text-xs sm:text-sm font-semibold text-zinc-200">
                    Devansh_Shukla_Resume.pdf
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="/resume/Devansh_Shukla_Resume.pdf"
                    download="Devansh_Shukla_Resume.pdf"
                    className="rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold px-3 py-1.5 font-mono text-xs flex items-center gap-1.5 transition"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Download</span>
                  </a>
                  <button
                    onClick={() => setResumeModalOpen(false)}
                    className="p-1.5 rounded-lg bg-white/[0.06] hover:bg-white/10 text-zinc-400 hover:text-white transition cursor-pointer"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="flex-1 bg-zinc-950 p-2 overflow-auto flex items-center justify-center">
                <object
                  data="/resume/Devansh_Shukla_Resume.pdf"
                  type="application/pdf"
                  className="w-full h-full rounded-lg"
                >
                  <div className="text-center p-8 space-y-4">
                    <img
                      src="/resume/Devansh_Shukla_Resume.png"
                      alt="Devansh Shukla Resume"
                      className="max-h-[75vh] mx-auto rounded-lg shadow-lg border border-white/10"
                    />
                    <a
                      href="/resume/Devansh_Shukla_Resume.pdf"
                      download="Devansh_Shukla_Resume.pdf"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 text-zinc-950 font-bold font-mono text-xs"
                    >
                      <Download className="h-4 w-4" />
                      <span>Download PDF Directly</span>
                    </a>
                  </div>
                </object>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          MODAL 2: CERTIFICATE PREVIEW MODAL
      ========================================================================= */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-3xl max-h-[90vh] bg-zinc-900 border border-white/15 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-5 py-3.5 bg-zinc-950 border-b border-white/10 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-sm text-zinc-200">
                    {selectedCert.title}
                  </h3>
                  <p className="font-mono text-[10px] text-emerald-400">
                    {selectedCert.badge} • {selectedCert.org}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={selectedCert.pdfUrl}
                    download
                    className="rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold px-3 py-1.5 font-mono text-xs flex items-center gap-1.5 transition"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Download</span>
                  </a>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-1.5 rounded-lg bg-white/[0.06] hover:bg-white/10 text-zinc-400 hover:text-white transition cursor-pointer"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="flex-1 bg-zinc-950 p-4 overflow-auto flex items-center justify-center">
                <img
                  src={selectedCert.imgUrl}
                  alt={selectedCert.title}
                  className="max-h-[70vh] w-auto object-contain rounded-lg border border-white/10 shadow-lg"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
