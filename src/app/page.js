"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const DigitalPaajiHero = () => {
  const portfolioImages = [
    "/Images/portfolio/ai/cover.gif",
    "/Images/portfolio/website/cover.webp",
    "/Images/portfolio/reels/cover.gif",
    "/Images/portfolio/graphic/food/3.webp",
    "/Images/portfolio/graphic/product/5.webp",
    "/Images/portfolio/graphic/label/cover.webp",
    // Duplicate for seamless loop
    "/Images/portfolio/ai/cover.gif",
    "/Images/portfolio/website/cover.webp",
    "/Images/portfolio/reels/cover.gif",
    "/Images/portfolio/graphic/food/3.webp",
  ];

  return (
    <section className="relative min-h-screen w-full bg-[#03030379] text-white overflow-hidden font-sans flex flex-col justify-center items-center">
      
      {/* === INFINITE HORIZONTAL SCROLL BACKGROUND === */}
      <div className="absolute inset-0 z-0 flex items-center opacity-30 pointer-events-none">
        <motion.div 
          className="flex whitespace-nowrap gap-4"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 30, // Adjust speed here
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {portfolioImages.map((src, index) => (
            <div 
              key={index} 
              className="relative w-[300px] h-[450px] md:w-[450px] md:h-[600px] flex-shrink-0 rounded-2xl overflow-hidden border border-white/10"
            >
              <img
                src={src}
                alt={`Portfolio ${index}`}
                
                className="h-full  object-cover grayscale-50  "
              />
            </div>
          ))}
        </motion.div>

        {/* Masking overlays to fade edges and keep text readable */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-transparent to-[#030303] z-10" /> */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-[#030303]/40 to-[#030303] z-10" /> */}
      </div>

      {/* === CONTENT LAYER === */}
     <div className="relative z-20 w-full max-w-7xl px-6 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <img
            src="/Images/logoWhite.webp"
            alt="Digital Paaji"
            width={240}
            height={80}
            className="w-48 md:w-64 h-auto"
            priority
          />
        </motion.div>

        <div className="space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#cc5f4d]  font-black uppercase tracking-[0.3em]"
          >
           WORK THAT SPEAKS FOR ITSELF.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-9xl font-black italic  leading-none"
          >
        
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
              PORTFOLIO
            </span>
          </motion.h1>

          {/* <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-sm md:text-lg max-w-xl mx-auto font-light"
          >
           We help brands stand out, scale faster, and connect better —

 through strategy, creativity, and execution that works.



 Don’t just take our word for it.

 See what we’ve built.
          </motion.p> */}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10"
        >
          <Link href="/work">
             <button className="group relative px-8 py-6 bg-transparent transition-all duration-300 active:scale-95">
              <div className="absolute inset-0 bg-white/[0.03] border border-white/10  backdrop-blur-md transition-all group-hover:bg-white/[0.08] group-hover:border-[#cc5f4d]/50" />
              
              <div className="absolute inset-0  bg-[#cc5f4d]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div  className=" cursor-pointer relative z-10 flex items-center gap-4 text-xs md:text-sm font-bold uppercase tracking-[0.3em]">
                <span>Start Exploring</span>
                <ArrowRight size={18} className="text-[#cc5f4d] group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </button>
          </Link>
        </motion.div>
      </div> 

      {/* Subtle Grain & Ambient Glow */}
      {/* <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" /> */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_transparent_20%,_#030303_90%)] z-[5]" /> */}
    </section>
  );
};

export default DigitalPaajiHero;