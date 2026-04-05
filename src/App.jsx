import React, { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillSection from "./components/SkillSection";
import ProyekSection from "./components/ProyekSection";
import ContactSection from "./components/ContactSection";
import "./index.css";

const SECTIONS = [
  { id: "home", component: HeroSection },
  { id: "about", component: AboutSection },
  { id: "education", component: EducationSection },
  { id: "experience", component: ExperienceSection },
  { id: "skills", component: SkillSection },
  { id: "projects", component: ProyekSection },
  { id: "contact", component: ContactSection },
];

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.98,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

function App() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 30,
  });

  useEffect(() => {
    document.title = "Yakub Vebrian Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] selection:bg-amber-500/30">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/10 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-slate-900/20 blur-[100px]" />
      </div>

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-amber-600 origin-left z-100"
        style={{ scaleX }}
      />

      <Navbar />

      <main className="relative z-10">
        {SECTIONS.map(({ id, component: Component }) => (
          <motion.section
            key={id}
            id={id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={
              id === "home"
                ? "min-h-screen p-0" // 🔥 FULL WIDTH HERO
                : "min-h-screen flex flex-col justify-center py-20 px-4 lg:px-8 border-b border-white/5"
            }
          >
            {id === "home" ? (
              <Component />
            ) : (
              <div className="container mx-auto max-w-6xl">
                <Component />
              </div>
            )}
          </motion.section>
        ))}
      </main>

      <footer className="relative z-10 py-10 text-center bg-slate-950/60 border-t border-white/5">
        <p className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} —
          <span className="text-amber-500 font-semibold ml-1">
            Yakub Vebrian
          </span>
        </p>
      </footer>
    </div>
  );
}

export default App;
