"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Image } from "lucide-react";
import { FaWordpress } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";


export default function Home() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  // ----- Slide Data -----
  const SECTIONS = [
    {
  id: "about",
  title: "About Me",
  subtitle: "Assalam o Alaikum",
  content: (
    <div className="relative z-10 p-8 md:p-12 rounded-3xl bg-gradient-to-tr from-black/70 via-gray-900/50 to-black/60 border border-gray-800 shadow-2xl">
      {/* Subtle background glow */}
      <div className="absolute -inset-px rounded-3xl blur-xl opacity-20 bg-gradient-to-r from-indigo-600 to-blue-400 mix-blend-screen" />

      <div className="relative z-10 space-y-4 text-gray-200">
        <p className="mb-3 text-lg leading-relaxed tracking-wide">
          I&apos;m <strong>Ariba</strong>, a WordPress & Frontend Developer who builds
          modern, high-performance websites.
        </p>
        <p className="mb-3 text-lg leading-relaxed tracking-wide">
          I love elegant UI, fast code and thoughtful UX.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm opacity-90">
          <li>WordPress (custom themes, plugins, APIs)</li>
          <li>Next.js (SSG/ISR/Edge-ready)</li>
          <li>Tailwind CSS (utility-first, design systems)</li>
        </ul>
      </div>
    </div>
  ),
  image: "/screenshots/slide1.png",
},
   {
  id: "skills",
  title: "My Skills",
  subtitle: "What I do well",
  content: (
    <div className="relative z-10 p-8 md:p-12 rounded-3xl bg-gradient-to-tr from-black/70 via-gray-900/50 to-black/60 border border-gray-800 shadow-2xl">
      {/* Background glow for premium effect */}
      <div className="absolute -inset-px rounded-3xl blur-2xl opacity-20 bg-gradient-to-r from-purple-500 to-indigo-500 mix-blend-screen" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-200">
        <div className="p-6 bg-gray-900/40 rounded-xl border border-gray-800 shadow-lg hover:shadow-indigo-500/40 transition-shadow duration-500">
          <h4 className="font-semibold mb-2 text-lg text-indigo-400 tracking-wide">Frontend</h4>
          <p className="opacity-90">Next.js • React • Tailwind • Animations</p>
          <p className="mt-2 opacity-80">Performance-first component design</p>
        </div>
        <div className="p-6 bg-gray-900/40 rounded-xl border border-gray-800 shadow-lg hover:shadow-purple-500/40 transition-shadow duration-500">
          <h4 className="font-semibold mb-2 text-lg text-purple-400 tracking-wide">WordPress</h4>
          <p className="opacity-90">Custom themes • Plugins • REST / GraphQL</p>
          <p className="mt-2 opacity-80">Headless CMS setups (WP → Next)</p>
        </div>
      </div>
    </div>
  ),
  image: "/screenshots/skills.png",
},

 {
  id: "wp-projects",
  title: "WordPress Projects",
  subtitle: "Selected Work (WordPress)",
  content: (
    <div className="relative z-10 p-8 md:p-12 rounded-3xl bg-gradient-to-tr from-black/70 via-gray-900/50 to-black/60 border border-gray-800 shadow-2xl">
      {/* Background glow for premium effect */}
      <div className="absolute -inset-px rounded-3xl blur-2xl opacity-25 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mix-blend-screen" />

      <div className="relative z-10 text-gray-200 space-y-4">
        <p className="text-lg mb-2">
          Built multiple client websites with a focus on <span className="text-blue-400 font-semibold">custom design</span>,
          <span className="text-purple-400 font-semibold"> SEO optimization</span>, and performance.
        </p>
        <p className="text-lg">
          One of my favorite projects was the <strong className="text-pink-400">Aethon</strong> website —
          a fully customized WordPress build.
        </p>
      </div>
    </div>
  ),
  image: (
    <div className="w-full max-w-md rounded-3xl overflow-hidden border border-gray-700 shadow-lg relative mt-14">
      {/* Neon-like gradient border effect */}
      <div className="absolute -inset-px rounded-3xl blur-3xl opacity-30 bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-500 mix-blend-screen" />
      {/* Image */}
      <img
        src="/screenshots/aethon.png"
        alt="Aethon Project"
        className="w-full h-64 object-cover rounded-2xl relative z-10"
      />
      {/* Project caption overlay */}
      <div className="absolute bottom-0 left-0 w-full bg-black/50 backdrop-blur-sm p-4 rounded-b-2xl">
        <h5 className="font-semibold text-white text-lg">Aethon</h5>
        <p className="text-xs text-gray-300">WordPress</p>
      </div>
    </div>
  ),
},


{
  id: "frontend",
  title: "Frontend Projects",
  subtitle: "Selected Work (Next.js & Tailwind)",
  content: (
    <div className="relative z-10 p-8 md:p-12 rounded-3xl bg-gradient-to-tr from-black/70 via-gray-900/50 to-black/60 border border-gray-800 shadow-2xl">
      {/* Background glow for premium effect */}
      <div className="absolute -inset-px rounded-3xl blur-2xl opacity-25 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mix-blend-screen" />

      <div className="relative z-10 text-gray-200 space-y-4">
        <p className="text-lg mb-2">
          I build <span className="text-blue-400 font-semibold">responsive</span>, 
          <span className="text-purple-400 font-semibold"> SEO-optimized</span>, and 
          <span className="text-pink-400 font-semibold"> modern frontends</span> using Next.js and Tailwind.
        </p>
        <p className="text-lg">
          One of my key projects was <strong className="text-pink-400">49 Pound</strong> — a fully responsive, SEO-friendly website with interactive UI components.
        </p>
      </div>
    </div>
  ),
  image: (
    <div className="w-full max-w-md rounded-3xl overflow-hidden border border-gray-700 shadow-lg relative mt-14">
      {/* Neon-like gradient border effect */}
      <div className="absolute -inset-px rounded-3xl blur-3xl opacity-30 bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-500 mix-blend-screen" />
      {/* Image */}
      <img
        src="/screenshots/49pound.png"
        alt="49 Pound Project"
        className="w-full h-64 object-cover rounded-2xl relative z-10"
      />
      {/* Project caption overlay */}
      <div className="absolute bottom-0 left-0 w-full bg-black/50 backdrop-blur-sm p-4 rounded-b-2xl">
        <h5 className="font-semibold text-white text-lg">49 Pound</h5>
        <p className="text-xs text-gray-300">Next.js & Tailwind</p>
      </div>
    </div>
  ),
},

    {
  id: "headless",
  title: "Headless CMS",
  subtitle: "WordPress → Next.js",
  content: (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative p-6 rounded-2xl bg-gradient-to-br from-indigo-800/40 to-purple-900/30 border border-indigo-500/40 shadow-lg backdrop-blur-sm overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-indigo-900/20 to-transparent animate-pulse opacity-60" />
      <p className="mb-4 text-gray-200">
        Built a <strong>Headless WordPress</strong> setup for 49 Pound Social using the REST API — 
        seamlessly connected to a <strong>Next.js</strong> frontend for instant loading.
      </p>

      <div className="flex justify-around mt-6 items-center">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-400">WP</div>
          <p className="text-xs opacity-70">Backend</p>
        </div>
        <div className="text-3xl text-indigo-400">→</div>
        <div className="text-center">
          <div className="text-2xl font-bold text-cyan-400">API</div>
          <p className="text-xs opacity-70">Bridge</p>
        </div>
        <div className="text-3xl text-indigo-400">→</div>
        <div className="text-center">
          <div className="text-2xl font-bold text-pink-400">Next.js</div>
          <p className="text-xs opacity-70">Frontend</p>
        </div>
      </div>
    </motion.div>
  ),
  image: "/screenshots/headless.png",
},

    {
  id: "ongoing",
  title: "Ongoing Projects",
  subtitle: "Current work & priorities",
  content: (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {[
        { name: "Papillon", tech: "Next.js", status: "In Progress" },
        { name: "Aethon v2", tech: "Next.js", status: "In progress" },
        { name: "Gruff Goat", tech: "Custom Frontend", status: "In Progress" },
      ].map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="p-5 rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-800/40 to-gray-900/40 hover:from-indigo-700/40 hover:to-purple-800/40 transition-all duration-300 shadow-lg"
        >
          <h4 className="font-bold text-lg mb-1 text-indigo-300">{p.name}</h4>
          <p className="text-sm opacity-80">{p.tech}</p>
          <span className="inline-block mt-3 text-xs bg-indigo-500/30 text-indigo-200 px-3 py-1 rounded-full">
            {p.status}
          </span>
        </motion.div>
      ))}
    </div>
  ),
  image: "/screenshots/ongoing.png",
},

    {
  id: "focus",
  title: "My Focus Areas",
  subtitle: "What I care about",
  content: (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {["Performance", "Scalable Code", "UI/UX"].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
          className="p-6 text-center rounded-2xl bg-gradient-to-br from-gray-800/50 via-gray-900/40 to-black/40 border border-gray-700 shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
        >
          <h4 className="font-bold text-xl text-indigo-300">{item}</h4>
          <p className="text-sm opacity-70 mt-2">Continuous improvement</p>
        </motion.div>
      ))}
    </div>
  ),
  image: "/screenshots/focus.png",
},

    {
  id: "thanks",
  title: "Thank You",
  subtitle: "Let's connect",
  content: (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="p-8 rounded-3xl bg-gradient-to-tr from-indigo-900/40 via-gray-900/40 to-purple-900/30 border border-indigo-500/40 shadow-xl text-center backdrop-blur-md"
    >
      <p className="text-lg mb-4">
        That was a quick overview of my work. I&apos;m always open to talk about{" "}
        <span className="text-indigo-300 font-semibold">CMS</span>,{" "}
        <span className="text-purple-300 font-semibold">Frontend</span>, or{" "}
        <span className="text-cyan-300 font-semibold">Performance</span>.
      </p>

      {/* <div className="space-y-2 mt-6">
        <p className="text-sm text-gray-300">
          📧 <span className="text-indigo-300">ariba@example.com</span>
        </p>
        <p className="text-sm text-gray-300">
          💬 Slack: <span className="text-purple-300">@ariba</span>
        </p>
        <p className="text-sm text-gray-300">
          🌐 Portfolio: <span className="text-cyan-300">your-site.com</span>
        </p>
      </div> */}

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="mt-8 inline-block px-8 py-3 bg-indigo-600/40 hover:bg-indigo-600/60 border border-indigo-500 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm transition"
      >
        Let’s Work Together 
      </motion.div>
    </motion.div>
  ),
  image: "/screenshots/thanks.png",
},

  ];

  // ----- Refs for scroll -----
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!showPortfolio) return;
    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const { scrollTop, scrollHeight, clientHeight } = el;
      const pct = scrollTop / (scrollHeight - clientHeight);
      setProgress(Math.min(1, Math.max(0, pct)));

      const centers = sectionRefs.current.map((s) => {
        if (!s) return Infinity;
        const rect = s.getBoundingClientRect();
        return Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2);
      });
      const idx = centers.indexOf(Math.min(...centers));
      if (idx !== -1 && idx !== current) setCurrent(idx);
    };

    const el = containerRef.current || window;
    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, [current, showPortfolio]);

  const scrollTo = (idx) => {
    const s = sectionRefs.current[idx];
    if (s) s.scrollIntoView({ behavior: "smooth", block: "center" });
  };


  // ----- Render -----
if (!showPortfolio) {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-8 bg-gradient-to-br from-purple-900 via-gray-900 to-blue-900 overflow-hidden">
      {/* Animated Background Elements */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className={`absolute rounded-full opacity-60 bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500 animate-float`}
          style={{
            width: `${Math.random() * 8 + 3}rem`,
            height: `${Math.random() * 8 + 3}rem`,
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 90}%`,
            animationDuration: `${Math.random() * 8 + 6}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

    <div className="relative z-10 flex flex-col md:flex-row items-center justify-center space-y-12 md:space-y-0 md:space-x-20 max-w-6xl w-full">
        {/* Left Section */}
        <div className="text-left flex flex-col items-start space-y-6">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-7xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-pink-500 drop-shadow-lg"
          >
            Ariba
          </motion.h1>

          <motion.p
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="text-3xl md:text-4xl font-light text-gray-200"
          >
            — WordPress & Frontend Developer
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className="flex items-center space-x-6 mt-4"
          >
            <FaWordpress className="text-5xl md:text-6xl text-white hover:text-blue-400 transition-all duration-300" />
            <SiNextdotjs className="text-5xl md:text-6xl text-white hover:text-cyan-400 transition-all duration-300" />
            <SiTailwindcss className="text-5xl md:text-6xl text-white hover:text-teal-400 transition-all duration-300" />
          </motion.div>

          <motion.button
            onClick={() => setShowPortfolio(true)}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 92, 246, 0.7)' }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-12 py-5 text-xl font-semibold text-white border-2 border-indigo-500 rounded-full shadow-xl bg-indigo-600/40 backdrop-blur-sm hover:bg-indigo-500/60 transition-all duration-300"
          >
            View Portfolio
          </motion.button>
        </div>

       {/* Right Section */}
        <motion.div
          initial={{ x: 100, opacity: 0, scale: 0.8, rotateY: 30 }}
          animate={{ x: 0, opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center"
        >
          <div className="absolute inset-0 rounded-[2.5rem] p-1 bg-gradient-to-br from-indigo-500 to-pink-500 shadow-neon-light animate-neon-glow">
            <div className="absolute inset-0 rounded-[2.25rem] bg-gray-900/40 backdrop-blur-md"></div>
          </div>
          <motion.div
            animate={{ rotateY: [0, 10, -10, 0], y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative z-10 w-[100%] h-[100%] rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <img
              src="ariba8.png"
              alt="Ariba"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Global Styles for Animations */}
      <style jsx global>{`
        @keyframes neon-glow {
          0% { box-shadow: 0 0 10px #8B5CF6, 0 0 20px #D946EF; }
          50% { box-shadow: 0 0 20px #8B5CF6, 0 0 40px #D946EF, 0 0 60px #8B5CF6; }
          100% { box-shadow: 0 0 10px #8B5CF6, 0 0 20px #D946EF; }
        }
        .animate-neon-glow { animation: neon-glow 2s infinite alternate ease-in-out; }

        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(15deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .animate-float { animation: float infinite 6s ease-in-out; }
      `}</style>
    </div>
  );
}

  // ----- Portfolio Slides -----
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black text-white relative">

      {showPortfolio && (
  <button
    onClick={() => setShowPortfolio(false)}
    className="fixed top-20 left-6 z-50 px-4 py-2 text-sm font-semibold text-white bg-gray-800/60 border border-gray-700 rounded-full shadow hover:bg-gray-800/80 transition"
  >
    ← Back to Intro
  </button>
)}

      {/* animated background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-[length:200%_200%] bg-gradient-to-r from-[#0f172a] via-[#0b1220] to-[#071018] opacity-80"
        />
             
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-black/60" />
   
      </div>

      {/* fixed header */}
      <header className="fixed top-6 left-6 right-6 z-40 flex items-center justify-between">
        <div className="text-sm font-semibold tracking-wide">Ariba • WordPress & Frontend Dev</div>
        <div className="flex items-center gap-3">
          <div className="text-xs opacity-80">Slide {current + 1} / {SECTIONS.length}</div>
          <div className="w-36 h-2 bg-gray-800/40 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500" style={{ width: `${progress * 100}%` }} />
          </div>
        </div>
      </header>

   <main
  ref={containerRef}
  className="relative h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
>
  {SECTIONS.map((s, idx) => {
    const hideImageSlides = ["about", "skills", "headless", "ongoing", "focus", "thanks"];
    const showImage = !hideImageSlides.includes(s.id);

    return (
      <section
        key={s.id}
        ref={(el) => (sectionRefs.current[idx] = el)}
        className="snap-center min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-32"
      >
        <motion.article
          initial={{ opacity: 0, y: 80, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full max-w-5xl p-8 rounded-3xl bg-gradient-to-tr from-black/70 via-gray-900/40 to-black/60 border border-gray-800 shadow-2xl"
        >
          <div className="absolute -inset-px rounded-3xl blur-xl opacity-20 bg-gradient-to-r from-indigo-600 to-blue-400 mix-blend-screen" />

          <div
            className={`relative z-10 grid gap-8 items-center ${
              showImage ? "md:grid-cols-2" : "grid-cols-1"
            }`}
          >
            {/* --- Content Section --- */}
            <div>
              <h2 className="text-3xl font-extrabold mb-2 tracking-tight">{s.title}</h2>
              <p className="text-sm text-blue-300 font-medium mb-4">{s.subtitle}</p>
              <div className="text-gray-300">{s.content}</div>
            </div>

            {/* --- Image Section (Only for specific slides) --- */}
            {showImage && (
         <div className="flex items-center justify-center">
  {typeof s.image === "string" ? (
    <motion.div
      initial={{ rotate: -6, scale: 0.98 }}
      whileInView={{ rotate: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-md rounded-2xl overflow-hidden border border-gray-700 bg-gradient-to-b from-gray-800/60 to-gray-900/60 shadow-inner"
    >
      <div
        className="w-full h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${s.image})` }}
      />
      <div className="p-4">
        <div className="h-3 bg-gray-800 rounded w-3/4 mb-3" />
        <div className="h-2 bg-gray-800 rounded w-1/2" />
      </div>
    </motion.div>
  ) : (
    <motion.div
      initial={{ rotate: -6, scale: 0.98 }}
      whileInView={{ rotate: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {s.image}
    </motion.div>
  )}
</div>

            )}
          </div>
        </motion.article>
      </section>
    );
  })}
  <div className="h-40" />
</main> 

    </div>
  );
}

// ------------------- Components -------------------
function CardMock({ title, caption, img }) {
  return (
    <div className="bg-gradient-to-t from-gray-800/60 to-gray-900/40 border border-gray-700 p-4 rounded-xl shadow-lg">
      <div className="w-full h-36 bg-gray-800 rounded-md flex items-center justify-center overflow-hidden">
        <Image className="opacity-30" />
      </div>
      <h5 className="font-semibold mt-3">{title}</h5>
      <p className="text-xs opacity-80">{caption}</p>
    </div>
  );
}

function PreviewMock({ img }) {
  return (
    <div className="w-36 h-24 rounded-xl bg-gray-800/30 border border-gray-700 flex items-center justify-center shadow-inner">
      <Image />
    </div>
  );
}

function FlowDiagram() {
  return (
    <div className="w-full p-4 bg-gray-900/50 rounded-xl border border-gray-700 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-gray-800 rounded-md">WP</div>
        <div className="opacity-60">→</div>
        <div className="p-3 bg-gray-800 rounded-md">REST API</div>
        <div className="opacity-60">→</div>
        <div className="p-3 bg-gray-800 rounded-md">Next.js</div>
      </div>
      <div className="text-sm opacity-80">Speed • Flexibility • Scalability</div>
    </div>
  );
}


function FocusChip({ title }) {
  return (
    <div className="p-3 bg-gradient-to-br from-gray-800/50 to-gray-900/30 border border-gray-700 rounded-xl text-center">
      <div className="font-semibold">{title}</div>
      <div className="text-xs opacity-70 mt-1">Continuous improvement</div>
    </div>
  );
}
