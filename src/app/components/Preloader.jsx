"use client";
import { motion, AnimatePresence, animate } from "framer-motion";
import { useEffect, useState } from "react";

const TextLoader = () => {
  const [loading, setLoading] = useState(true);
  const [percent, setPercent] = useState(0);
  
  const brandColor = "#cc5f4d";
  const text = "DIGITAL PAAJI";
  const characters = text.split("");

  useEffect(() => {
    // 1. Precise Counter (0-100)
    const controls = animate(0, 100, {
      duration: 3.5,
      ease: [0.76, 0, 0.24, 1],
      onUpdate: (value) => setPercent(Math.round(value)),
    });

    // 2. Clear loader after 4 seconds
    const timer = setTimeout(() => setLoading(false), 4200);
    
    return () => {
      controls.stop();
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loader-main"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0a] overflow-hidden"
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
        >
          {/* Top Left Counter - Refined & Minimal */}
          <div className="absolute top-8 left-8 flex flex-col items-start">
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-1">System Boot</span>
            <div className="flex items-baseline">
              <span className="text-4xl font-light tracking-tighter text-white/90">{percent}</span>
              <span className="text-xs ml-1 text-white/40">%</span>
            </div>
          </div>

          {/* SVG Definition for the Wave */}
          <svg width="0" height="0" className="absolute">
            <defs>
              <clipPath id="text-wave" clipPathUnits="objectBoundingBox">
                <motion.path
                  initial={{ d: "M 0 1 Q 0.25 1 0.5 1 Q 0.75 1 1 1 L 1 1 L 0 1 Z" }}
                  animate={{ 
                    d: [
                      "M 0 0.2 Q 0.25 0.1 0.5 0.2 Q 0.75 0.3 1 0.2 L 1 1 L 0 1 Z",
                      "M 0 0.2 Q 0.25 0.3 0.5 0.2 Q 0.75 0.1 1 0.2 L 1 1 L 0 1 Z",
                      "M 0 0.2 Q 0.25 0.1 0.5 0.2 Q 0.75 0.3 1 0.2 L 1 1 L 0 1 Z"
                    ],
                    y: [1, 0]
                  }}
                  transition={{ 
                    d: { repeat: Infinity, duration: 2, ease: "linear" },
                    y: { duration: 3, ease: [0.76, 0, 0.24, 1], delay: 0.5 }
                  }}
                />
              </clipPath>
            </defs>
          </svg>

          {/* Refined Text Container */}
          <div className="flex gap-[2px]">
            {characters.map((char, i) => (
              <div key={i} className="relative overflow-hidden py-2">
                {/* Stroke Layer */}
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                  className="block text-4xl md:text-6xl font-bold tracking-tight text-transparent whitespace-pre"
                  style={{ WebkitTextStroke: "1px rgba(255,255,255,0.15)" }}
                >
                  {char}
                </motion.span>

                {/* Wave Fill Layer */}
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                  className="absolute inset-0 block text-4xl md:text-6xl font-bold tracking-tight whitespace-pre py-2"
                  style={{ 
                    color: brandColor,
                    clipPath: "url(#text-wave)"
                  }}
                >
                  {char}
                </motion.span>
              </div>
            ))}
          </div>
        </motion.div>
      ) : (
        <>
          {/* THE SINGLE EXIT SLIDE SEQUENCE (Bottom to Top) */}
          <motion.div
            key="slide-1"
            initial={{ y: "100%" }}
            animate={{ y: "-100%" }}
            transition={{ duration: 1.1, ease: [0.83, 0, 0.17, 1] }}
            style={{ backgroundColor: brandColor }}
            className="fixed inset-0 z-[10000]"
          />
          <motion.div
            key="slide-2"
            initial={{ y: "100%" }}
            animate={{ y: "-100%" }}
            transition={{ delay: 0.1, duration: 1.1, ease: [0.83, 0, 0.17, 1] }}
            className="fixed inset-0 z-[10001] bg-[#0a0a0a]"
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default TextLoader;