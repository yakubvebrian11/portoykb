import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showBackToTop, setShowBackToTop] = useState(false);

  const sections = useRef([
    "home",
    "about",
    "education",
    "experience",
    "skills",
    "projects",
    "contact",
  ]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 60);
      setShowBackToTop(scrollY > 500);

      let active = "home";
      sections.current.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            active = section;
          }
        }
      });
      setActiveSection(active);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setOpen(false);
    
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: id === "home" ? 0 : offsetPosition,
          behavior: "smooth",
        });
      }
    }, 10);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-colors duration-300 ${
          scrolled
            ? "bg-[#051F36]/90 border-b border-slate-700 shadow-xl"
            : "bg-[#051F36] border-b border-slate-700"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20 py-3 flex items-center justify-between">
          <h1
            className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-wide cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <i className="ri-account-box-fill text-amber-400 mr-1"></i>
            Porto<span className="text-amber-400">folio.</span>
          </h1>

          <nav className="hidden md:flex gap-6 lg:gap-8 text-white font-medium text-sm lg:text-base">
            {sections.current.map((section) => (
              <motion.button
                key={section}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(section)}
                className={`relative group transition-colors duration-300 ${
                  activeSection === section ? "text-amber-400" : "text-slate-300 hover:text-amber-400"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-amber-400 transition-all duration-300 ${
                    activeSection === section ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </motion.button>
            ))}
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-2xl p-2"
          >
            <i className={open ? "ri-close-line" : "ri-menu-line"}></i>
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0, transition: { duration: 0 } }}
              className="md:hidden bg-[#051F36] border-t border-slate-700 overflow-hidden"
            >
              <div className="flex flex-col p-4 gap-2">
                {sections.current.map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`w-full text-left py-4 px-6 rounded-lg transition-all ${
                      activeSection === section
                        ? "text-amber-400 bg-slate-800"
                        : "text-slate-300 hover:bg-slate-800"
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Navbar;