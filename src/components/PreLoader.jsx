import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PreLoader = () => {
  const [loading, setLoading] = useState(true);
  const name = "YAKUB VEBRIAN";

  useEffect(() => {
    
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  
  const containerVars = {
    initial: { transition: { staggerChildren: 0.05 } },
    animate: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
  };

  
  const letterVars = {
    initial: { y: 100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 1, ease: [0.6, 0.01, 0.05, 0.95] }
    },
  };

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%", 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 flex items-center justify-center bg-slate-900 z-999"
        >
          <div className="flex flex-col items-center">
            
           
            <motion.div 
              variants={containerVars}
              initial="initial"
              animate="animate"
              className="flex overflow-hidden py-2"
            >
              {name.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVars}
                  className="text-amber-400 text-base md:text-xl font-light tracking-[0.3em] inline-block"
                  style={{ marginRight: char === " " ? "1em" : "0" }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>

            
            <div className="relative mt-6 h-px w-25 bg-white/10 overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ 
                  duration: 2.5, 
                  ease: [0.65, 0, 0.35, 1] 
                }}
                className="h-full bg-amber-400 w-full"
              />
            </div>

            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              className="text-[10px] text-white mt-4 tracking-widest font-mono"
            >
              LOADING
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreLoader;