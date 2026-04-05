import { motion } from "framer-motion";
import DataImage from "../data";

function HeroSection() {
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
    <section className="w-full min-h-screen flex flex-col lg:flex-row relative overflow-hidden">
      <div className="absolute inset-0 lg:hidden">
        <img src={DataImage.HeroImage} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-20 py-16 lg:py-0 bg-transparent lg:bg-slate-900"
      >
        <motion.div
          variants={item}
          className="flex items-center gap-2 mb-5 bg-zinc-800/60 w-fit px-3 py-1.5 rounded-full border border-zinc-700"
        >
          <img
            src={DataImage.HeroImage}
            className="w-6 h-6 sm:w-7 sm:h-7 rounded-full object-cover border border-amber-400"
          />
          <span className="text-[10px] sm:text-xs text-zinc-300 italic">
            What you strive for will surely come true 😊
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 text-white"
        >
          Hi, I'm
        </motion.h1>

        <motion.h1
          variants={item}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-5 bg-linear-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent"
        >
          Yakub Vebrian
        </motion.h1>

        <motion.p
          variants={item}
          className="text-base sm:text-lg text-zinc-200 mb-4 border-l-2 border-amber-400 pl-3"
        >
          Electrical Engineering Graduate
        </motion.p>

        <motion.p
          variants={item}
          className="text-sm text-zinc-300 mb-6 max-w-md leading-relaxed text-justify"
        >
          Electrical Engineering graduate with a strong foundation in power
          systems and electrical installation. Experienced in analyzing
          three-phase transformer load imbalance and developing practical
          technical solutions through academic projects. Demonstrates strong
          problem-solving skills, attention to safety standards, and readiness
          to contribute effectively in real-world electrical environments.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="bg-amber-500 px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg font-semibold text-black hover:bg-amber-600 transition text-sm"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="bg-zinc-800 px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg border border-zinc-700 text-white hover:border-amber-400 transition text-sm"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        variants={imageVariant}
        initial="hidden"
        whileInView="show"
        className="hidden lg:block w-1/2 h-full"
      >
        <img src={DataImage.HeroImage} className="w-full h-full object-cover" />
      </motion.div>
    </section>
  );
}

export default HeroSection;
