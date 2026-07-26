import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DataImage from "../data";

function HeroSection() {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  const skills = [
    "Control Panel Design",
    "Solar Panel Engineering",
    "Electrical Wiring",
    "Electrical Installation"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [skills.length]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 1.05 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full min-h-screen flex flex-col lg:flex-row relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0 lg:hidden z-0">
        <img src={DataImage.HeroImage} className="w-full h-full object-cover" alt="Background" />
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-xs"></div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-24 py-24 lg:py-0 bg-transparent"
      >
        <motion.h1
          variants={item}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-1 text-white tracking-tight"
        >
          Hi, I'm
        </motion.h1>

        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-black mb-6 bg-linear-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent leading-none"
        >
          Yakub Vebrian
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg sm:text-xl text-amber-400 mb-6 border-l-4 border-amber-400 pl-4 font-semibold tracking-wide"
        >
          Electrical Engineering Graduate
        </motion.p>

        <motion.div 
          variants={item}
          className="h-14 mb-8 flex items-center bg-zinc-800/40 backdrop-blur-xs px-5 rounded-xl border border-zinc-700/40 shadow-xs max-w-xl w-full overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={currentSkillIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="text-base sm:text-lg font-bold text-amber-400 tracking-wide block w-full"
            >
              {skills[currentSkillIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <motion.div variants={item} className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="bg-amber-500 px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-bold text-black hover:bg-amber-600 transition text-base shadow-lg shadow-amber-500/20"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="bg-zinc-800/80 backdrop-blur-xs px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl border border-zinc-700 text-white hover:border-amber-400 transition text-base"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        variants={imageVariant}
        initial="hidden"
        animate="show"
        className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
      >
        <img src={DataImage.HeroImage} className="w-full h-full object-cover" alt="Hero Personal" />
      </motion.div>
    </section>
  );
}

export default HeroSection;
