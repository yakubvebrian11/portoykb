import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function AboutSection() {
  return (
    <section
      id="about"
      className="w-full flex items-start pt-2 pb-12 px-4 sm:px-8 lg:px-20 scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-semibold tracking-wide text-amber-400 px-4 py-1.5 rounded-xl  "
          >
            About Me
          </motion.h1>
        </motion.div>

        <div className="w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-slate-900/60 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-zinc-700/50 shadow-2xl relative overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl -mr-10 -mt-10"
            ></motion.div>

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 relative z-10">
              <motion.div
                variants={imageVariants}
                className="shrink-0 transform-gpu"
              >
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl ">
                  <div className="w-full h-full rounded-xl bg-zinc-900 flex items-center justify-center overflow-hidden">
                    <motion.img
                      src="/assets/yakub.webp"
                      alt="Profile"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="w-full h-full object-cover transform-gpu"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>

              <div className="flex-1 text-center lg:text-left ">
                <motion.h2
                  variants={textVariants}
                  className="text-lg font-bold text-white mb-1"
                >
                  Yakub Vebrian
                </motion.h2>

                <motion.p
                  variants={textVariants}
                  className="text-amber-400 text-xs font-medium mb-3"
                >
                  S1 - Electrical Engineering
                </motion.p>

                <motion.p
  variants={textVariants}
  className="text-zinc-300 text-xs md:text-sm leading-relaxed text-justify"
>
  Bachelor of Electrical Engineering graduate from Tidar University, specialising in Power Systems, with a strong interest in Electrical Maintenance. Gained practical experience through an internship at PT PLN (Persero) ULP Magelang Kota, supporting electrical network inspection, maintenance, repair, and troubleshooting activities, including Fuse Cut Out (FCO) replacement and handling customer electrical faults. Possess knowledge of electrical parameter measurement and analysis, motor control circuits and electrical panel design, as well as basic PLC programming using CX-Programmer. Proficient in ETAP, AutoCAD, CADe SIMU, and GNU Octave, with strong analytical, problem-solving, and teamwork skills, along with a strong motivation to build a career in Electrical Maintenance.

</motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
