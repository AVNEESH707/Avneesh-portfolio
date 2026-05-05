import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import hero from "./assets/hero.png";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

const SKILLS = [
  { label: "Languages",  items: ["JavaScript", "TypeScript", "C", "C++"] },
  { label: "Frontend",   items: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap"] },
  { label: "Backend",    items: ["Node.js", "Express.js", "REST API", "Socket.io", "JWT"] },
  { label: "Databases",  items: ["MongoDB", "MySQL", "Supabase"] },
  { label: "Tools",      items: ["Git", "GitHub", "Postman", "Netlify", "Render", "VS Code"] },
];

const PROJECTS = [
  {
    title: "Hostel Management System",
    tag: "Full-Stack",
    desc: "Production-grade hostel administration platform featuring automated room allocation via constraint-based eligibility engine, OTP-verified registration using Nodemailer, and real-time availability tracking. Web scraping pipeline built with Cheerio + Axios parses institutional data server-side. RESTful API layer optimized with query indexing and lean projections — achieving 30% latency reduction. Secured with stateless JWT-based auth and role-based access control (RBAC) for student and admin roles.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Cheerio", "Axios", "Tailwind CSS"],
    metric: "30% faster APIs",
    link: "https://project-hms-frontend-l3vz.onrender.com",
    github: "https://github.com/AVNEESH707",
  },
  {
    title: "AI Code Review Platform",
    tag: "AI-Powered",
    desc: "Intelligent static analysis platform that pipes developer-submitted code through Google Gemini 1.5 API for multi-dimensional review: syntax correctness, algorithmic complexity, security anti-patterns, and performance bottlenecks. Backend follows a service-controller-router architecture with async prompt engineering for deterministic LLM responses. Supports multi-language input and returns structured, actionable feedback with severity classification.",
    stack: ["React.js", "Node.js", "Express.js", "Gemini API", "Tailwind CSS"],
    metric: "LLM-powered",
    link: "https://code-review-sand-delta.vercel.app",
    github: "https://github.com/AVNEESH707",
  },
  {
    title: "Postify — Social Media App",
    tag: "MERN",
    desc: "Full-featured social networking platform built on the MERN stack with a stateless JWT authentication system, bcrypt password hashing, and protected route middleware. Implements Cloudinary-backed multipart image upload with client-side preview, paginated post feed using cursor-based queries, and a reusable component architecture with custom React hooks for state isolation. Deployed with CI-ready build pipeline on Render.",
    stack: ["React.js", "Express.js", "MongoDB", "JWT", "Cloudinary", "Tailwind CSS"],
    metric: "Full Auth Flow",
    link: "https://postify-8bvr.onrender.com",
    github: "https://github.com/AVNEESH707",
  },
  {
    title: "Secure Vision",
    tag: "AI / CV",
    desc: "Real-time violence detection system leveraging two fine-tuned VideoMAE transformer models — a binary violence classifier (videomae-crime-detector-production-v1) and a multi-class crime-type classifier (UCF-Crime dataset). Processes 16-frame sliding window buffers at 2-frame intervals via a FastAPI backend with WebSocket-based live camera streaming and SSE for video upload events. Detection pipeline enforces a 0.75 confidence threshold with consecutive-frame validation to minimize false positives. Incident reports auto-generated using Google Flan-T5.",
    stack: ["FastAPI", "VideoMAE", "Flan-T5", "WebSocket", "SSE", "Python", "HuggingFace"],
    metric: "Transformer CV",
    link: "https://github.com/AVNEESH707/Secure-Vision",
    github: "https://github.com/AVNEESH707/Secure-Vision",
    githubOnly: true,
  },
];

const EXPERIENCE = [
  {
    role: "Web Development Intern",
    org: "VaultofCodes.in",
    period: "June – July 2025",
    desc: "Full-stack tasks using React.js, Node.js, and MongoDB. Designed responsive UIs, implemented APIs, optimized deployment workflows.",
  },
  {
    role: "Front End Web Development",
    org: "AICTE Virtual Internship",
    period: "Aug – Sept 2025",
    desc: "Developed responsive front-end designs using React.js and Tailwind CSS with focus on UI/UX and version control.",
  },
];

const CERTS = [
  "Deloitte Cybersecurity & Data Analytics — Forage (June 2025)",
  "TCS iON Career Edge — Soft Skills, Resume Writing, MDM (Jul 2025)",
  "AICTE Virtual Internship — Front End Web Development (Sept 2025)",
  "Google Cloud ML Fundamentals",
  "Udemy Full Stack Bootcamp",
];

export default function App() {
  const [sent, setSent] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <div className="bg-black text-white font-sans selection:bg-green-500 selection:text-black">

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-black/70 backdrop-blur border-b border-green-900/40">
        <span className="text-green-400 font-bold tracking-widest text-sm">AK</span>
        <div className="flex gap-6 text-sm text-gray-400">
          {["Skills", "Projects", "Experience", "Contact"].map(s => (
            <a key={s} href={`#${s.toLowerCase()}`}
              className="hover:text-green-400 transition-colors">{s}</a>
          ))}
        </div>
        <a
          href="/Avneesh_Resume.pdf"
          download
          className="text-xs px-4 py-1.5 border border-green-500 text-green-400 rounded hover:bg-green-500 hover:text-black transition-all"
        >
          Resume ↓
        </a>
      </nav>

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        {/* grid bg */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "linear-gradient(#22c55e 1px,transparent 1px),linear-gradient(90deg,#22c55e 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

        <motion.div style={{ y: heroY }} className="flex flex-col items-center">
          <motion.img
            src={hero}
            alt="Avneesh Kumar"
            className="w-36 h-36 rounded-full border-4 border-green-400 mb-8 object-cover"
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl font-extrabold text-green-400 tracking-tight leading-none">
              AVNEESH
            </h1>
            <h2 className="text-6xl md:text-8xl font-extrabold text-white tracking-tight leading-none">
              KUMAR
            </h2>
          </motion.div>

          <motion.p
            className="mt-6 text-base md:text-lg text-gray-400 tracking-widest uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Full-Stack Developer &nbsp;·&nbsp; MERN Stack &nbsp;·&nbsp; AI Tools
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <a href="https://github.com/AVNEESH707" target="_blank"
              className="px-6 py-2.5 border border-green-500 text-green-400 rounded-lg hover:bg-green-500 hover:text-black transition-all text-sm font-medium">
              GitHub
            </a>
            <a href="https://linkedin.com/in/avneesh-kumar-3a50b325b" target="_blank"
              className="px-6 py-2.5 bg-green-500 text-black rounded-lg hover:bg-green-400 transition-all text-sm font-bold">
              LinkedIn
            </a>
            <a href="mailto:aky702061@gmail.com"
              className="px-6 py-2.5 border border-gray-700 text-gray-400 rounded-lg hover:border-green-500 hover:text-green-400 transition-all text-sm font-medium">
              Email
            </a>
          </motion.div>

          {/* stat row */}
          <motion.div
            className="mt-12 flex gap-10 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            {[["15+", "Projects"], ["300+", "DSA Solved"], ["2", "Internships"], ["7.5", "CGPA"]].map(([n, l]) => (
              <div key={l}>
                <p className="text-2xl font-bold text-green-400">{n}</p>
                <p className="text-xs text-gray-500 mt-0.5">{l}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <p className="absolute bottom-10 text-gray-600 text-xs tracking-widest animate-bounce">SCROLL ↓</p>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="py-24 px-6 md:px-20">
        <motion.h2 {...fadeUp()} className="text-4xl md:text-5xl font-extrabold text-green-400 mb-14 text-center">
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {SKILLS.map((group, i) => (
            <motion.div
              key={group.label}
              {...fadeUp(i * 0.08)}
              className="bg-gray-950 border border-green-900/50 rounded-2xl p-6 hover:border-green-500/60 transition-colors"
            >
              <p className="text-xs text-green-500 font-semibold tracking-widest uppercase mb-4">{group.label}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map(item => (
                  <span key={item} className="text-xs px-3 py-1 bg-green-950/60 text-green-300 rounded-full border border-green-800/50">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* DSA card */}
          <motion.div
            {...fadeUp(SKILLS.length * 0.08)}
            className="bg-gray-950 border border-green-500/40 rounded-2xl p-6 md:col-span-2 lg:col-span-1 hover:border-green-400/70 transition-colors"
          >
            <p className="text-xs text-green-500 font-semibold tracking-widest uppercase mb-4">Problem Solving</p>
            <p className="text-4xl font-bold text-green-400">300+</p>
            <p className="text-sm text-gray-400 mt-1">DSA problems on LeetCode & GFG</p>
            <p className="text-xs text-gray-500 mt-3">Recursion · DP · Trees · Graphs · Hashing</p>
          </motion.div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="py-24 px-6 md:px-20 bg-gray-950/40">
        <motion.h2 {...fadeUp()} className="text-4xl md:text-5xl font-extrabold text-green-400 mb-14 text-center">
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              {...fadeUp(i * 0.1)}
              whileHover={{ y: -6 }}
              className="bg-gray-950 border border-green-900/50 rounded-2xl p-6 flex flex-col hover:border-green-500/60 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs px-2.5 py-1 bg-green-950 text-green-400 rounded-full border border-green-800/50">
                  {p.tag}
                </span>
                <span className="text-xs text-green-500 font-semibold">{p.metric}</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-3">{p.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed flex-1">{p.desc}</p>

              <div className="flex flex-wrap gap-1.5 mt-5 mb-5">
                {p.stack.map(t => (
                  <span key={t} className="text-xs px-2 py-0.5 bg-black text-gray-500 rounded border border-gray-800">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                {p.githubOnly ? (
                  <a href={p.github} target="_blank"
                    className="text-sm text-green-400 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    View on GitHub <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                ) : (
                  <a href={p.link} target="_blank"
                    className="text-sm text-green-400 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Live demo <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                )}
                {!p.githubOnly && (
                  <a href={p.github} target="_blank"
                    className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
                    GitHub ↗
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="py-24 px-6 md:px-20">
        <motion.h2 {...fadeUp()} className="text-4xl md:text-5xl font-extrabold text-green-400 mb-14 text-center">
          Experience
        </motion.h2>

        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          {EXPERIENCE.map((e, i) => (
            <motion.div
              key={e.org}
              {...fadeUp(i * 0.1)}
              className="flex gap-6 bg-gray-950 border border-green-900/40 rounded-2xl p-6 hover:border-green-500/50 transition-colors"
            >
              <div className="w-2 self-stretch bg-green-500 rounded-full shrink-0" />
              <div>
                <p className="text-xs text-green-500 tracking-widest uppercase mb-1">{e.period}</p>
                <h3 className="text-base font-bold text-white">{e.role}</h3>
                <p className="text-sm text-gray-500 mb-2">{e.org}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{e.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certs */}
        <motion.div {...fadeUp(0.2)} className="max-w-3xl mx-auto mt-10">
          <p className="text-xs text-green-500 font-semibold tracking-widest uppercase mb-4 text-center">Certifications</p>
          <div className="flex flex-col gap-2">
            {CERTS.map((c, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-gray-400">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>{c}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 px-6 md:px-20 bg-gray-950/40 text-center">
        <motion.h2 {...fadeUp()} className="text-4xl md:text-5xl font-extrabold text-green-400 mb-4">
          Let's Connect
        </motion.h2>
        <motion.p {...fadeUp(0.1)} className="text-gray-400 mb-10 text-sm">
          Open to internships, freelance, and full-time opportunities
        </motion.p>

        {sent ? (
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-green-400 text-lg font-semibold"
          >
            Message sent! I'll get back to you soon.
          </motion.p>
        ) : (
          <motion.div {...fadeUp(0.15)} className="max-w-md mx-auto flex flex-col gap-4">
            <input
              placeholder="Your name"
              className="w-full p-3 bg-gray-950 border border-green-900/50 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-green-500 transition-colors text-sm"
            />
            <input
              placeholder="Your email"
              type="email"
              className="w-full p-3 bg-gray-950 border border-green-900/50 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-green-500 transition-colors text-sm"
            />
            <textarea
              placeholder="Your message"
              rows={4}
              className="w-full p-3 bg-gray-950 border border-green-900/50 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-green-500 transition-colors text-sm resize-none"
            />
            <button
              onClick={() => setSent(true)}
              className="w-full p-3 bg-green-500 text-black font-bold rounded-xl hover:bg-green-400 active:scale-95 transition-all text-sm"
            >
              Send Message →
            </button>
          </motion.div>
        )}

        <motion.div {...fadeUp(0.3)} className="mt-14 flex justify-center gap-6 text-sm text-gray-500">
          <a href="https://github.com/AVNEESH707" target="_blank" className="hover:text-green-400 transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/avneesh-kumar-3a50b325b" target="_blank" className="hover:text-green-400 transition-colors">LinkedIn</a>
          <a href="mailto:aky702061@gmail.com" className="hover:text-green-400 transition-colors">aky702061@gmail.com</a>
          <a href="tel:+919508776742" className="hover:text-green-400 transition-colors">+91 95087 76742</a>
        </motion.div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-6 text-center text-xs text-gray-700 border-t border-gray-900">
        © {new Date().getFullYear()} Avneesh Kumar · Built with React & Tailwind
      </footer>

    </div>
  );
}
